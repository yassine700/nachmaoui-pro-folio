import { Link } from "@tanstack/react-router";
import { Container } from "../layout/Container";

/**
 * Static, high-performance hero: location tag, one headline, one line of
 * subtext, two actions. No canvas, no scroll rigging.
 */
export function Hero() {
  return (
    <section className="relative border-b border-hairline bg-scene text-scene-foreground">
      <Container className="flex min-h-[86vh] flex-col justify-between py-16 md:min-h-[90vh] md:py-24">
        <p className="flex items-center gap-2 text-[0.7rem] tracking-[0.24em] text-scene-muted uppercase">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
          />
          Casablanca, MA
        </p>

        <div className="max-w-4xl py-16 md:py-24">
          <h1 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl md:text-6xl lg:text-7xl">
            Building high-performance web systems that scale.
          </h1>
          <p className="mt-8 max-w-xl text-base text-scene-muted md:text-lg">
            No agency bloat. Just clean code, custom frontends, and automated growth engines.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link to="/contact" className="editorial-link text-sm tracking-[0.18em] uppercase">
              Start a project <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to="/work"
              className="editorial-link text-sm tracking-[0.18em] text-scene-muted uppercase"
            >
              See selected work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <p className="text-[0.7rem] tracking-[0.24em] text-scene-muted uppercase">
          Web design &middot; Development &middot; SEO
        </p>
      </Container>
    </section>
  );
}
