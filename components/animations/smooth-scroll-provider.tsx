"use client";

import * as React from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { ANIMATION_CONFIG } from "@/lib/constants/animation";
import type {
  ScrollToOptions,
  SmoothScrollContextValue,
} from "@/types/animation";

let lenisStore: Lenis | null = null;
const lenisListeners = new Set<() => void>();

function subscribeToLenis(callback: () => void) {
  lenisListeners.add(callback);
  return () => {
    lenisListeners.delete(callback);
  };
}

function getLenisSnapshot(): Lenis | null {
  return lenisStore;
}

function getLenisServerSnapshot(): null {
  return null;
}

function setLenisStore(instance: Lenis | null) {
  lenisStore = instance;
  lenisListeners.forEach((listener) => listener());
}

const SmoothScrollContext = React.createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
  lenis: null,
});

export function useSmoothScroll(): SmoothScrollContextValue {
  return React.useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenis = React.useSyncExternalStore(
    subscribeToLenis,
    getLenisSnapshot,
    getLenisServerSnapshot,
  );

  React.useEffect(() => {
    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const instance = new Lenis({
      duration: ANIMATION_CONFIG.LENIS_DURATION,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    setLenisStore(instance);

    // Connect Lenis to ScrollTrigger
    instance.on("scroll", ScrollTrigger.update);

    // Sync Lenis RAF with GSAP's internal ticker for frame alignment
    const updateTicker = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      instance.destroy();
      setLenisStore(null);
    };
  }, []);

  const scrollTo = React.useCallback(
    (target: number | string | HTMLElement, options?: ScrollToOptions) => {
      if (lenis) {
        lenis.scrollTo(target, {
          offset: options?.offset,
          duration: options?.duration,
          immediate: options?.immediate,
        });
      } else if (typeof window !== "undefined") {
        if (typeof target === "number") {
          window.scrollTo({
            top: target,
            behavior: options?.immediate ? "auto" : "smooth",
          });
        } else if (typeof target === "string") {
          const element = document.querySelector(target);
          element?.scrollIntoView({
            behavior: options?.immediate ? "auto" : "smooth",
          });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({
            behavior: options?.immediate ? "auto" : "smooth",
          });
        }
      }
    },
    [lenis],
  );

  const contextValue = React.useMemo<SmoothScrollContextValue>(
    () => ({
      scrollTo,
      lenis,
    }),
    [scrollTo, lenis],
  );

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
