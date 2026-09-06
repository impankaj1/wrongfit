"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ANIMATION_CONFIG } from "@/lib/constants/animation";
import { TextRevealMode, type TextRevealProps } from "@/types/animation";

export function TextReveal({
  text,
  as: Component = "h2",
  mode = ANIMATION_CONFIG.TEXT_MODE_DEFAULT,
  delay = ANIMATION_CONFIG.DELAY_DEFAULT,
  duration = ANIMATION_CONFIG.DURATION_DEFAULT,
  stagger = ANIMATION_CONFIG.STAGGER_DEFAULT,
  ease = ANIMATION_CONFIG.EASE_SMOOTH,
  triggerOnScroll = true,
  className,
  once = true,
  ...props
}: TextRevealProps) {
  const containerRef = React.useRef<HTMLElement>(null);

  const tokens = React.useMemo(() => {
    if (mode === TextRevealMode.CHARS) {
      return text.split("");
    }
    return text.split(" ");
  }, [text, mode]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion || !containerRef.current) {
        return;
      }

      const elements = containerRef.current.querySelectorAll(".reveal-token");

      if (elements.length === 0) return;

      const animateProps: gsap.TweenVars = {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease,
      };

      if (triggerOnScroll) {
        animateProps.scrollTrigger = {
          trigger: containerRef.current,
          start: ANIMATION_CONFIG.TRIGGER_START_DEFAULT,
          once,
        };
      }

      gsap.fromTo(
        elements,
        {
          y: "110%",
          opacity: 0,
        },
        animateProps,
      );
    },
    {
      scope: containerRef,
      dependencies: [
        tokens,
        delay,
        duration,
        stagger,
        ease,
        triggerOnScroll,
        once,
      ],
    },
  );

  return (
    <Component
      ref={containerRef as React.Ref<never>}
      className={className}
      {...props}
    >
      {tokens.map((token, index) => (
        <span
          key={`${token}-${index}`}
          className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
        >
          <span className="reveal-token inline-block will-change-transform">
            {token}
          </span>
        </span>
      ))}
    </Component>
  );
}
