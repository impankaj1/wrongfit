import {
  AnimationDirection,
  AnimationVariant,
  EasingCurve,
  ParallaxDirection,
  TextRevealMode,
} from "@/types/animation";

export const ANIMATION_CONFIG = {
  DURATION_DEFAULT: 0.8,
  DURATION_FAST: 0.4,
  DURATION_SLOW: 1.2,
  DELAY_DEFAULT: 0,
  DISTANCE_DEFAULT: 32,
  DISTANCE_FAR: 64,
  STAGGER_DEFAULT: 0.08,
  STAGGER_SLOW: 0.15,
  EASE_DEFAULT: EasingCurve.POWER3_OUT,
  EASE_SMOOTH: EasingCurve.EXPO_OUT,
  EASE_ELASTIC: EasingCurve.BACK_OUT,
  DIRECTION_DEFAULT: AnimationDirection.UP,
  VARIANT_DEFAULT: AnimationVariant.FADE,
  TEXT_MODE_DEFAULT: TextRevealMode.WORDS,
  PARALLAX_SPEED_DEFAULT: 0.2,
  PARALLAX_DIRECTION_DEFAULT: ParallaxDirection.VERTICAL,
  MAGNETIC_STRENGTH_DEFAULT: 0.35,
  LENIS_DURATION: 1.2,
  TRIGGER_START_DEFAULT: "top 85%",
  BLUR_DEFAULT: 8,
  ZOOM_DEFAULT: 0.9,
} as const;

