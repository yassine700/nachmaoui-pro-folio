import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";

export function AboutPreview() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <p className="eyebrow lg:pt-4">About</p>
        <div>
          <h2 className="max-w-2xl text-[2rem] leading-[1.06] md:text-5xl">
            I&apos;m Yassine. I build things for the web.
          </h2>
          <div className="mt-10 max-w-prose space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Morocco-based freelance web designer and developer interested in creating
              useful, modern and practical digital experiences.
            </p>
            <p>
              My focus is combining clean design, solid web fundamentals and practical business
              thinking — websites that are pleasant to use, straightforward to maintain and readable
              by search engines.
            </p>
          </div>
          <Link to="/about" className="editorial-link mt-10 text-sm">
            More about me <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
