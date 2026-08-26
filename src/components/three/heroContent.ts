/**
 * Browser-safe hero copy + scene tuning constants.
 *
 * Kept in its own module so route/SSR code can import these values without
 * pulling three.js / @react-three/fiber into the server bundle.
 */

export const HERO_FALLBACK = {
  eyebrow: "Websites for Local Businesses • 1-Week Turnaround",
  title: "PROFESSIONAL WEBSITES BUILT IN A WEEK, WITHOUT THE AGENCY PRICE TAG.",
  ctaLabel: "INITIALIZE COLLABORATION",
} as const;

/** Scene geometry detail per device class. */
export const SCENE_DETAIL = {
  desktop: 64,
  compact: 32,
} as const;
