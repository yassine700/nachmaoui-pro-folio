import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ContactCta } from "@/components/shared/ContactCta";
import { SKILLS } from "@/data/site";

const TITLE = "About Yassine Nachmaoui — Freelance Web Designer & Developer";
const DESCRIPTION =
  "Morocco-based freelance web designer and developer combining clean design, solid web fundamentals and practical business thinking.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <Container>
          <div className="reveal max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-foreground/60">About</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">
              I'm Yassine. I build things for the web.
            </h1>
          </div>
        </Container>
      </section>

      <Section label="Introduction">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="flex aspect-4/5 items-center justify-center rounded-xl border border-hairline bg-surface">
            {/* TODO: replace with your professional portrait. */}
            <p className="px-6 text-center text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Portrait placeholder
            </p>
          </div>
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Morocco-based freelance web designer and developer interested in creating useful,
              modern and practical digital experiences.
            </p>
            <p>
              My focus is combining clean design, solid web fundamentals and practical business
              thinking — a website should be pleasant to use, straightforward to maintain, and built
              so search engines can read it properly.
            </p>
            <p>
              I'm continuously developing my skills in modern web technologies, application
              development and SEO. The projects in my portfolio are the honest record of that: real
              domains, real design and development decisions, clearly labelled where something is
              still a concept.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" label="Skills">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SKILLS.map((group) => (
            <article key={group.group} className="rounded-xl border border-hairline bg-background p-7">
              <h3 className="text-xl">{group.group}</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-hairline pb-2.5 last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
