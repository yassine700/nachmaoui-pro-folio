import { Link } from "@tanstack/react-router";
import { Container } from "../layout/Container";
import profileAsset from "@/assets/yassine-profile.jpg.asset.json";

/**
 * Editorial homepage hero.
 * Left — minimal typographic statement and actions.
 * Right — full-color portrait panel with ambient warmth.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-scene text-scene-foreground">
      {/* faint oversized watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[5%] top-1/2 -translate-y-1/2 select-none font-display text-[22rem] leading-none text-scene-foreground/[0.03] sm:text-[28rem] md:text-[36rem] lg:text-[44rem]"
      >
        N
      </span>

      {/* warm ambient glow behind portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.16 35) 0%, oklch(0.35 0.12 20) 45%, transparent 70%)",
        }}
      />

      <Container className="relative grid min-h-[92vh] grid-cols-1 items-center gap-12 py-16 md:min-h-[95vh] md:grid-cols-12 md:py-20 lg:gap-16">
        {/* Text column */}
        <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-6 lg:gap-10">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
            />
            <span className="text-[0.7rem] tracking-[0.22em] text-scene-muted uppercase">
              Casablanca, MA
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Building high-performance web systems that scale.
          </h1>

          <p className="max-w-md text-base leading-relaxed text-scene-muted md:text-lg">
            No agency bloat. Just clean code, custom frontends, and automated
            growth engines.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-scene-foreground px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-scene transition-colors duration-300 hover:bg-chrome hover:text-ink active:scale-[0.99]"
            >
              Start a project
            </Link>
            <Link
              to="/work"
              className="editorial-link px-2 py-3.5 text-sm tracking-[0.18em] text-scene-muted uppercase"
            >
              See selected work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <p className="text-[0.65rem] tracking-[0.24em] text-scene-muted/80 uppercase">
            Web design &middot; Development &middot; SEO
          </p>
        </div>

        {/* Portrait column */}
        <div className="relative md:col-span-6 lg:col-span-6">
          <figure className="group relative mx-auto w-full max-w-md md:ml-auto md:max-w-lg lg:max-w-xl">
            {/* layered border frames */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-[1.75rem] border border-white/5"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-white/[0.03]"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-ink">
              <img
                src={profileAsset.url}
                alt="Portrait of Yassine Nachmaoui, freelance web designer and developer in Casablanca"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />

              {/* bottom fade into scene */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-scene via-scene/40 to-transparent"
              />

              {/* subtle warm overlay to unify with dark theme */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-oklch(55% 0.12 35 / 0.08) via-transparent to-scene/20 mix-blend-overlay"
              />
            </div>

            <figcaption className="mt-6 flex items-baseline justify-between gap-4 text-[0.7rem] tracking-[0.2em] text-scene-muted uppercase">
              <span className="text-scene-foreground">Yassine Nachmaoui</span>
              <span>Web designer &amp; developer</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

