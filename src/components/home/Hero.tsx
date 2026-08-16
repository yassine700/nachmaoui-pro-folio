import { Link } from "@tanstack/react-router";
import { Container } from "../layout/Container";

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="reveal">
          <p className="eyebrow">Yassine Nachmaoui — Web Designer &amp; Developer</p>

          <h1 className="mt-10 max-w-5xl text-[2.75rem] leading-[1] md:text-[5rem] lg:text-[6rem]">
            I build websites and digital experiences for{" "}
            <span className="italic text-muted-foreground">businesses.</span>
          </h1>

          <div className="mt-14 grid gap-10 border-t border-hairline pt-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Web design, development, mobile MVPs and SEO fundamentals — built with a focus on
              clarity, usability and performance.
            </p>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 md:justify-end">
              <Link to="/work" className="editorial-link text-base">
                View my work <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/contact" className="editorial-link text-base text-muted-foreground">
                Let&apos;s work together <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
