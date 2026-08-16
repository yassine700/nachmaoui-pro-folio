import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ContactCta } from "@/components/shared/ContactCta";
import { SEO_FUNDAMENTALS } from "@/data/site";

const TITLE = "SEO Fundamentals I Apply to Websites | Yassine Nachmaoui";
const DESCRIPTION =
  "The practical on-page and technical SEO fundamentals built into every website I make: semantic HTML, headings, metadata, clean URLs, image optimisation and performance.";

export const Route = createFileRoute("/seo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/seo" },
    ],
    links: [{ rel: "canonical", href: "/seo" }],
  }),
  component: SeoPage,
});

function SeoPage() {
  return (
    <>
      <PageHeader
        eyebrow="SEO fundamentals"
        title={<>SEO fundamentals, built into the website.</>}
        lead="Practical SEO knowledge applied during design and development — not an agency service and not a ranking promise. Search visibility depends on many factors outside a website's markup; what I can control is that the foundation is correct."
      />

      <Section label="SEO checklist">
        <SectionHeading
          eyebrow="What I implement"
          title="The fundamentals, handled during the build"
          description="Every item below is part of how I build, not an upsell added afterwards."
        />
        <ul className="mt-16">
          {SEO_FUNDAMENTALS.map((item, i) => (
            <li
              key={item.title}
              className="grid gap-3 border-t border-hairline py-7 md:grid-cols-[4rem_1fr_1.3fr] md:items-baseline md:gap-10"
            >
              <span className="font-display text-base text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl md:text-2xl">{item.title}</h2>
              <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="What I don't promise">
        <SectionHeading
          eyebrow="Honest scope"
          title="What I don't claim"
          description="No guaranteed Google rankings, no traffic projections, and no reporting on results I haven't measured. If you need advanced SEO strategy, link building or ongoing campaigns, a specialist is a better fit — I make sure the website itself never holds you back."
        />
      </Section>

      <ContactCta title="Need a website built on solid SEO foundations?" />
    </>
  );
}
