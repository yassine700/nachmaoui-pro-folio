import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-36">
      <Container>
        <div className="reveal max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/60">
            Yassine Nachmaoui — Freelance Web Designer &amp; Developer
          </p>
          <h1 className="mt-8 text-[2.6rem] leading-[1.05] md:text-7xl">
            Modern Websites.
            <br />
            <span className="italic text-ink-foreground/70">Practical</span> Digital Experiences.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            I design and build websites for businesses: website design, responsive development,
            mobile app MVP development, and the SEO fundamentals that should be part of every build.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-foreground px-6 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink-foreground/60"
            >
              Start a Project
            </a>
          </div>

          <dl className="mt-16 grid max-w-3xl gap-6 border-t border-ink-foreground/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Website Design", "Structure, layout, typography"],
              ["Responsive Development", "Mobile-first front-end builds"],
              ["Mobile App MVPs", "Flows and interfaces for first versions"],
              ["SEO Fundamentals", "Semantic, fast, crawlable pages"],
            ].map(([term, detail]) => (
              <div key={term}>
                <dt className="text-sm font-medium">{term}</dt>
                <dd className="mt-1 text-sm text-ink-foreground/60">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}