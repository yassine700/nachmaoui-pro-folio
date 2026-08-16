import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";

function BrowserSketch() {
  return (
    <div className="pointer-events-none relative hidden lg:block" aria-hidden="true">
      <div className="absolute -top-6 right-6 w-[22rem] rounded-xl border border-ink-foreground/15 bg-ink-foreground/[0.04] p-3">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-ink-foreground/25" />
          <span className="size-2 rounded-full bg-ink-foreground/25" />
          <span className="size-2 rounded-full bg-ink-foreground/25" />
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="h-6 w-2/3 rounded bg-ink-foreground/20" />
          <div className="h-2 w-full rounded bg-ink-foreground/10" />
          <div className="h-2 w-5/6 rounded bg-ink-foreground/10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded bg-ink-foreground/10" />
            <div className="h-14 rounded bg-ink-foreground/10" />
            <div className="h-14 rounded bg-ink-foreground/10" />
          </div>
        </div>
      </div>
      <div className="absolute top-32 right-56 w-32 rounded-2xl border border-ink-foreground/15 bg-ink p-2">
        <div className="space-y-2 rounded-xl bg-ink-foreground/[0.06] p-3">
          <div className="h-2 w-3/4 rounded bg-ink-foreground/20" />
          <div className="h-2 w-1/2 rounded bg-ink-foreground/10" />
          <div className="h-10 rounded bg-ink-foreground/10" />
          <div className="h-2 w-2/3 rounded bg-ink-foreground/10" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/60">
              Yassine Nachmaoui — Freelance Web Designer &amp; Developer
            </p>
            <h1 className="mt-8 text-[2.5rem] leading-[1.05] md:text-6xl">
              I build modern websites for businesses ready to{" "}
              <span className="italic text-ink-foreground/70">grow online.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
              I design and build fast, responsive websites and digital experiences, with a focus on
              clean design, usability and SEO fundamentals.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-foreground px-6 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                View My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink-foreground/60"
              >
                Let's Work Together
              </Link>
            </div>

            <p className="mt-12 border-t border-ink-foreground/15 pt-6 text-sm text-ink-foreground/60">
              Web Design · Web Apps · SEO Basics
            </p>
          </div>

          <BrowserSketch />
        </div>
      </Container>
    </section>
  );
}
