import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ContactCta } from "@/components/shared/ContactCta";
import { SKILLS } from "@/data/site";

const TITLE = "About Yassine Nachmaoui — Freelance Web Designer & Developer";
const DESCRIPTION =
  "Freelance web designer and developer helping local businesses get professional, fast, and SEO-ready websites live in a week.";

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
        title={<>I&apos;m Yassine. I build websites for businesses.</>}
        meta={[
          { term: "Focus", value: "Web design, development, SEO fundamentals" },
          { term: "Specialty", value: "Fast turnaround for local businesses" },
          { term: "Working style", value: "Direct, collaborative, remote" },
        ]}
      />

      <Section label="Introduction">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <p className="eyebrow lg:pt-3">Introduction</p>
          <div className="max-w-prose space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a freelance web designer and developer focused on helping local businesses,
              contractors, and service providers get a high-quality online presence without the
              unnecessary overhead or agency price tag.
            </p>
            <p>
              My approach is practical and straightforward: clean design that represents your
              business well, solid front-end code that works fast on phones and desktops, and
              essential SEO foundations so customers can find and contact you easily.
            </p>
            <p>
              Whether you need a full multi-page business website or a focused landing page to drive
              calls and quote requests, I deliver working websites quickly and reliably.
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
