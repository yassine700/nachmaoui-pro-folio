import { Link } from "@tanstack/react-router";
import { Container } from "../layout/Container";

/**
 * Static, high-performance hero: editorial split layout.
 * Left — location tag, headline, subtext, actions.
 * Right — designer portrait panel (swap PROFILE_IMAGE for the real photo).
 */
const PROFILE_IMAGE: string | null = null; // e.g. "/images/profile.jpg"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-scene text-scene-foreground">
      <Container className="grid min-h-[86vh] grid-cols-1 items-center gap-16 py-16 md:min-h-[90vh] md:grid-cols-12 md:py-24 lg:gap-20">
        {/* Text column */}
        <div className="flex flex-col gap-10 md:col-span-7 lg:col-span-7">
          <p className="flex items-center gap-2 text-[0.7rem] tracking-[0.24em] text-scene-muted uppercase">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
            />
            Casablanca, MA — Available for new projects
          </p>

          <h1 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] text-balance sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            Building high-performance web systems that scale.
          </h1>

          <p className="max-w-xl text-base text-scene-muted md:text-lg">
            No agency bloat. Just clean code, custom frontends, and automated
            growth engines.
          </p>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              to="/contact"
              className="editorial-link text-sm tracking-[0.18em] uppercase"
            >
              Start a project <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to="/work"
              className="editorial-link text-sm tracking-[0.18em] text-scene-muted uppercase"
            >
              See selected work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <p className="mt-4 text-[0.7rem] tracking-[0.24em] text-scene-muted uppercase">
            Web design &middot; Development &middot; SEO
          </p>
        </div>

        {/* Portrait column */}
        <div className="md:col-span-5 lg:col-span-5">
          <figure className="group relative mx-auto w-full max-w-sm md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-px rounded-2xl border border-hairline"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-scene-foreground/[0.02]">
              {PROFILE_IMAGE ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Portrait of Nachmaoui, web designer and developer in Casablanca"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                  loading="eager"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--scene-foreground)_7%,transparent),transparent_65%)]">
                  <span
                    aria-hidden="true"
                    className="font-display text-[7rem] leading-none text-scene-foreground/90 md:text-[9rem]"
                  >
                    N.
                  </span>
                  <span className="text-[0.65rem] tracking-[0.3em] text-scene-muted uppercase">
                    Portrait coming soon
                  </span>
                </div>
              )}
              {/* subtle bottom fade into scene */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-scene/80 to-transparent"
              />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between gap-4 text-[0.7rem] tracking-[0.2em] text-scene-muted uppercase">
              <span>Nachmaoui</span>
              <span>Web designer &amp; developer</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
