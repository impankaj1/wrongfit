import type * as React from "react";

export enum AnimationDirection {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  NONE = "none",
}

export enum AnimationVariant {
  FADE = "fade",
  SLIDE = "slide",
  ZOOM = "zoom",
  BLUR = "blur",
}

export enum EasingCurve {
  POWER1_OUT = "power1.out",
  POWER2_OUT = "power2.out",
  POWER3_OUT = "power3.out",
  POWER4_OUT = "power4.out",
  EXPO_OUT = "expo.out",
  CIRC_OUT = "circ.out",
  BACK_OUT = "back.out(1.7)",
  ELASTIC_OUT = "elastic.out(1, 0.3)",
}

export enum ParallaxDirection {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

export enum TextRevealMode {
  WORDS = "words",
  CHARS = "chars",
}

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: AnimationVariant;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  ease?: EasingCurve | string;
  triggerOnScroll?: boolean;
  stagger?: number;
  className?: string;
  once?: boolean;
}

export interface TextRevealProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  mode?: TextRevealMode;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: EasingCurve | string;
  triggerOnScroll?: boolean;
  className?: string;
  once?: boolean;
}

export interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  speed?: number;
  direction?: ParallaxDirection;
  className?: string;
}

export interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  strength?: number;
  ease?: EasingCurve | string;
  className?: string;
}

export interface ScrollToOptions {
  offset?: number;
  duration?: number;
  immediate?: boolean;
}

export interface SmoothScrollContextValue {
  scrollTo: (target: number | string | HTMLElement, options?: ScrollToOptions) => void;
  lenis: unknown;
}

