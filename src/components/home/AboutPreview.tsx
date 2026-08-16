import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";

export function AboutPreview() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <p className="eyebrow lg:pt-4">About</p>
        <div>
          <h2 className="max-w-2xl text-[2rem] leading-[1.06] md:text-5xl">
            I build professional websites for businesses.
          </h2>
          <div className="mt-10 max-w-prose space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I help local businesses, trades, and service providers get a modern, responsive
              website up and running in a week — without agency-sized budgets.
            </p>
            <p>
              Every site includes clean design, fast-loading responsive code, and the essential
              on-page SEO foundations needed to help customers find you.
            </p>
          </div>
          <Link to="/about" className="editorial-link mt-10 text-sm">
            More about my approach <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
