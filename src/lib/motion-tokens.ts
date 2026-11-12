/**
 * SoSparkDesigns Centralized Motion Tokens & Easing Curves
 * Derived from SoSpark Visual & Motion Reference Blueprint (November 2026)
 */

export const easeCurves = {
  // Smooth cinematic deceleration (editorial reveals, cards)
  easeOut: [0.16, 1, 0.3, 1] as const,
  // Standard deceleration (UI controls, tabs, menu)
  easeStandard: [0.2, 0, 0, 1] as const,
  // Tactile spring overshoot (badges, button taps)
  easeSpring: [0.34, 1.56, 0.64, 1] as const,
  // Snappy enter/exit
  easeIn: [0.7, 0, 0.84, 0] as const,
};

export const durations = {
  micro: 0.15, // 150ms — button taps, focus rings, hover indicators
  quick: 0.25, // 250ms — tab switches, dropdowns, menu drawer
  standard: 0.45, // 450ms — card reveals, section fades
  cinematic: 0.75, // 750ms — hero entrance, fanned layout transitions
};

export const springConfig = {
  stiff: { type: 'spring' as const, stiffness: 240, damping: 24 },
  smooth: { type: 'spring' as const, stiffness: 120, damping: 18 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 15 },
};

export const staggerDelays = {
  tight: 0.04, // 40ms between characters/words
  standard: 0.08, // 80ms between list items or grid cards
  relaxed: 0.12, // 120ms between major section pillars
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.standard,
      ease: easeCurves.easeOut,
      delay: custom * staggerDelays.standard,
    },
  }),
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.standard,
      ease: easeCurves.easeOut,
      delay: custom * staggerDelays.standard,
    },
  }),
};
