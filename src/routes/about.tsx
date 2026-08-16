import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader
        eyebrow="About"
        title={<>I&apos;m Yassine. I build things for the web.</>}
        meta={[
          { term: "Focus", value: "Web design, development, SEO fundamentals" },
          { term: "Currently", value: "Mobile MVP concepts and React apps" },
          { term: "Based in", value: "Morocco, working remotely" },
        ]}
      />

      <Section label="Introduction">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <p className="eyebrow lg:pt-3">Introduction</p>
          <div className="max-w-prose space-y-6 text-lg leading-relaxed text-muted-foreground">
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

      <Section label="Skills">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {SKILLS.map((group) => (
            <article key={group.group} className="border-t border-hairline pt-6">
              <h3 className="text-2xl">{group.group}</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
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
