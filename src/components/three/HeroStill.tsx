import stillSrc from "@/assets/hero-chrome-still.jpg";

/**
 * Static render of the hero mesh, used wherever the live WebGL scene is
 * skipped (SSR, mobile, reduced motion, low-power devices).
 */
export function HeroStill() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-scene">
      <img
        src={stillSrc}
        alt=""
        aria-hidden="true"
        width={1280}
        height={1280}
        className="absolute top-1/2 left-1/2 h-auto w-[min(120vw,92vh)] -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-screen"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,var(--scene)_78%)]" />
    </div>
  );
}
