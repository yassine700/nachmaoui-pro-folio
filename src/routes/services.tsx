import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ContactCta } from "@/components/shared/ContactCta";
import { PROCESS, SERVICES } from "@/data/site";

const TITLE = "Services — Websites, Landing Pages, Apps & SEO | Yassine Nachmaoui";
const DESCRIPTION =
  "Website design and development, landing pages, web app and mobile MVP concepts, and SEO foundations — with a clear four-step process.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <Container>
          <div className="reveal max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-foreground/60">Services</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">
              What I can help you with
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
              Websites that look good, work well, and get found. I design and build modern websites
              and digital experiences for businesses that want a stronger online presence.
            </p>
          </div>
        </Container>
      </section>

      <Section label="Service detail">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-hairline bg-card p-8 transition-colors hover:border-primary/40"
            >
              <h2 className="text-2xl">{service.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface" label="Process">
        <SectionHeading
          eyebrow="My Process"
          title="Four steps, from first conversation to launch"
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item, i) => (
            <li
              key={item.step}
              className="reveal rounded-xl border border-hairline bg-background p-7"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <p className="font-display text-3xl text-primary">{item.step}</p>
              <h3 className="mt-3 text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <ContactCta />
    </>
  );
}
