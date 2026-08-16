import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

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
      <section className="bg-ink py-16 text-ink-foreground md:py-24">
        <Container>
          <Link
            to="/apps"
            className="inline-flex items-center gap-2 text-sm text-ink-foreground/70 underline-offset-4 hover:text-ink-foreground hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All app projects
          </Link>

          <div className="reveal mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-foreground/60">
                {TELEPORTEUR.label}
              </p>
              <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">
                {TELEPORTEUR.title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
                {TELEPORTEUR.overview}
              </p>
              <p className="mt-6 inline-block rounded-full border border-ink-foreground/25 px-4 py-2 text-xs uppercase tracking-[0.16em] text-ink-foreground/70">
                {TELEPORTEUR.status}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
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
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TELEPORTEUR.blocks.map((block) => (
            <article key={block.title} className="rounded-xl border border-hairline bg-card p-7">
              <h3 className="text-xl">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
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
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {TELEPORTEUR.screens.map((screen) => (
            <PhoneFrame key={screen.title} title={screen.title} detail={screen.detail} />
          ))}
        </div>
      </Section>

      <Section label="Technologies">
        <SectionHeading eyebrow="Technologies" title="Skills applied" />
        <ul className="mt-8 flex flex-wrap gap-3">
          {TELEPORTEUR.technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-hairline px-4 py-2 text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <ContactCta />
    </>
  );
}
