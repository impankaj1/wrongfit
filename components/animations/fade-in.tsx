"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ANIMATION_CONFIG } from "@/lib/constants/animation";
import {
  AnimationDirection,
  AnimationVariant,
  type FadeInProps,
} from "@/types/animation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function FadeIn({
  children,
  variant = ANIMATION_CONFIG.VARIANT_DEFAULT,
  direction = ANIMATION_CONFIG.DIRECTION_DEFAULT,
  delay = ANIMATION_CONFIG.DELAY_DEFAULT,
  duration = ANIMATION_CONFIG.DURATION_DEFAULT,
  distance = ANIMATION_CONFIG.DISTANCE_DEFAULT,
  ease = ANIMATION_CONFIG.EASE_DEFAULT,
  triggerOnScroll = true,
  stagger,
  className,
  once = true,
  ...props
}: FadeInProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !containerRef.current) {
        return;
      }

      let xOffset = 0;
      let yOffset = 0;

      if (direction === AnimationDirection.UP) yOffset = distance;
      else if (direction === AnimationDirection.DOWN) yOffset = -distance;
      else if (direction === AnimationDirection.LEFT) xOffset = distance;
      else if (direction === AnimationDirection.RIGHT) xOffset = -distance;

      const initialProps: gsap.TweenVars = {
        opacity: 0,
      };

      if (xOffset !== 0) initialProps.x = xOffset;
      if (yOffset !== 0) initialProps.y = yOffset;

      if (variant === AnimationVariant.ZOOM) {
        initialProps.scale = ANIMATION_CONFIG.ZOOM_DEFAULT;
      } else if (variant === AnimationVariant.BLUR) {
        initialProps.filter = `blur(${ANIMATION_CONFIG.BLUR_DEFAULT}px)`;
      }

      const animateProps: gsap.TweenVars = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease,
      };

      const targets =
        stagger && containerRef.current.children.length > 0
          ? containerRef.current.children
          : containerRef.current;

      if (stagger) {
        animateProps.stagger = stagger;
      }

      if (triggerOnScroll) {
        animateProps.scrollTrigger = {
          trigger: containerRef.current,
          start: ANIMATION_CONFIG.TRIGGER_START_DEFAULT,
          once,
        };
      }

      gsap.fromTo(targets, initialProps, animateProps);
    },
    { scope: containerRef, dependencies: [variant, direction, delay, duration, distance, ease, triggerOnScroll, stagger, once] }
  );

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
}

