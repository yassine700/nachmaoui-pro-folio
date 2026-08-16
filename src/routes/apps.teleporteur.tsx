import { createFileRoute, Link } from "@tanstack/react-router";

import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/shared/BrowserFrame";
import { ContactCta } from "@/components/shared/ContactCta";
import { TELEPORTEUR } from "@/data/teleporteur";

const TITLE = "Téléporteur — Mobile App MVP Concept | Yassine Nachmaoui";
const DESCRIPTION =
  "Téléporteur: a local cargo marketplace mobile app MVP concept connecting customers with drivers who have spare capacity. Concept and MVP scope, not a launched product.";

export const Route = createFileRoute("/apps/teleporteur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/apps/teleporteur" },
    ],
    links: [{ rel: "canonical", href: "/apps/teleporteur" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Téléporteur",
          description: DESCRIPTION,
          creator: { "@type": "Person", name: "Yassine Nachmaoui" },
        }),
      },
    ],
  }),
  component: TeleporteurPage,
});

function TeleporteurPage() {
  return (
    <>
      <section className="pt-16 pb-4 md:pt-24">
        <Container>
          <Link to="/apps" className="editorial-link text-sm text-muted-foreground">
            <span aria-hidden="true">&larr;</span> All app projects
          </Link>

          <div className="reveal mt-12 grid items-end gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="eyebrow">{TELEPORTEUR.label}</p>
              <h1 className="mt-8 text-[2.75rem] leading-[1] md:text-[5rem]">
                {TELEPORTEUR.title}
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {TELEPORTEUR.overview}
              </p>
              <p className="mt-8 border-t border-hairline pt-6 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {TELEPORTEUR.status}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <PhoneFrame title="Customer booking" detail="Customer booking" />
              <PhoneFrame title="Driver feed" detail="Driver feed" />
            </div>
          </div>
        </Container>
      </section>

      <Section label="Concept detail">
        <SectionHeading
          eyebrow="The concept"
          title="Problem, product and business model"
          description="Everything below describes design and product decisions. There are no users, revenue or performance figures to report."
        />
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {TELEPORTEUR.blocks.map((block) => (
            <article key={block.title} className="border-t border-hairline pt-6">
              <h3 className="text-2xl">{block.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{block.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface" label="Screens">
        <SectionHeading
          eyebrow="Interface"
          title="Mobile screens"
          description="Final mockups to be added — each frame below is a clearly labelled placeholder for the screen it represents."
        />
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {TELEPORTEUR.screens.map((screen) => (
            <PhoneFrame key={screen.title} title={screen.title} detail={screen.detail} />
          ))}
        </div>
      </Section>

      <Section label="Technologies">
        <SectionHeading eyebrow="Technologies" title="Skills applied" />
        <ul className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {TELEPORTEUR.technologies.map((tech) => (
            <li key={tech} className="border-t border-hairline py-4 text-base">
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <ContactCta />
    </>
  );
}
