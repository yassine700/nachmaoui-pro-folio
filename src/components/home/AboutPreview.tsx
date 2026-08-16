import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";

export function AboutPreview() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="flex aspect-4/5 max-w-sm items-center justify-center rounded-xl border border-hairline bg-surface">
          {/* TODO: replace with your professional portrait. */}
          <p className="px-6 text-center text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Portrait placeholder
          </p>
        </div>
        <div>
          <SectionHeading
            eyebrow="About"
            title="I'm Yassine. I build things for the web."
            description="I'm a Morocco-based freelance web designer and developer interested in creating useful, modern and practical digital experiences."
          />
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
            My focus is combining clean design, solid web fundamentals and practical business
            thinking. I'm continuously developing my skills in modern web technologies, application
            development and SEO.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            More about me
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
