/**
 * Browser-safe hero copy + scene tuning constants.
 *
 * Kept in its own module so route/SSR code can import these values without
 * pulling three.js / @react-three/fiber into the server bundle.
 */

export const HERO_FALLBACK = {
  eyebrow: "Freelance Web Designer & Developer · Morocco",
  title: "ENGINEERING DIGITAL ECOSYSTEMS",
  subtitle:
    "Websites, interfaces and search foundations for local businesses — designed, built and shipped in a week.",
  ctaLabel: "INITIALIZE COLLABORATION",
} as const;

/** Scene geometry detail per device class. */
export const SCENE_DETAIL = {
  desktop: 64,
  compact: 32,
} as const;
