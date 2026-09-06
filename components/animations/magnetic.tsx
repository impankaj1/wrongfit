"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ANIMATION_CONFIG } from "@/lib/constants/animation";
import { EasingCurve, type MagneticProps } from "@/types/animation";

export function Magnetic({
  children,
  strength = ANIMATION_CONFIG.MAGNETIC_STRENGTH_DEFAULT,
  ease = EasingCurve.ELASTIC_OUT,
  className,
  ...props
}: MagneticProps) {
  const elementRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !elementRef.current) return;

      const { left, top, width, height } =
        elementRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(elementRef.current, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: EasingCurve.POWER2_OUT,
        overwrite: "auto",
      });
    },
    [strength]
  );

  const handleMouseLeave = React.useCallback(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease,
      overwrite: "auto",
    });
  }, [ease]);

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

