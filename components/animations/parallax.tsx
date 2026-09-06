"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ANIMATION_CONFIG } from "@/lib/constants/animation";
import { ParallaxDirection, type ParallaxProps } from "@/types/animation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Parallax({
  children,
  speed = ANIMATION_CONFIG.PARALLAX_SPEED_DEFAULT,
  direction = ANIMATION_CONFIG.PARALLAX_DIRECTION_DEFAULT,
  className,
  ...props
}: ParallaxProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !containerRef.current || !targetRef.current) {
        return;
      }

      const yMovement = speed * 100;

      if (direction === ParallaxDirection.VERTICAL) {
        gsap.fromTo(
          targetRef.current,
          { y: -yMovement },
          {
            y: yMovement,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      } else {
        const xMovement = speed * 100;
        gsap.fromTo(
          targetRef.current,
          { x: -xMovement },
          {
            x: xMovement,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [speed, direction] }
  );

  return (
    <div ref={containerRef} className={className} {...props}>
      <div ref={targetRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

