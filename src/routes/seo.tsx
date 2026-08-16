import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
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
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <Container>
          <div className="reveal max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-foreground/60">
              SEO Fundamentals
            </p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">
              I don't just build websites. I build them with search engines in mind.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
              This is practical SEO knowledge applied during design and development — not an agency
              service and not a ranking promise. Search visibility depends on many factors outside a
              website's markup; what I can control is that the foundation is correct.
            </p>
          </div>
        </Container>
      </section>

      <Section label="SEO checklist">
        <SectionHeading
          eyebrow="What I implement"
          title="The fundamentals, handled during the build"
          description="Every item below is part of how I build, not an upsell added afterwards."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SEO_FUNDAMENTALS.map((item) => (
            <li key={item.title} className="rounded-xl border border-hairline bg-card p-6">
              <div className="flex items-center gap-2.5">
                <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <h2 className="text-base font-medium">{item.title}</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" label="What I don't promise">
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
