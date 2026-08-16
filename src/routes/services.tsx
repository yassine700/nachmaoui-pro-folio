import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader
        eyebrow="Services"
        title={<>What I can help you with</>}
        lead="Websites that look good, work well, and get found. I design and build modern websites and digital experiences for businesses that want a stronger online presence."
      />

      <Section label="Service detail" divider={false}>
        <ol>
          {SERVICES.map((service, i) => (
            <li
              key={service.title}
              className="group grid gap-4 border-t border-hairline py-10 md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-baseline md:gap-10 md:py-14"
            >
              <span className="font-display text-lg text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl md:text-4xl">{service.title}</h2>
              <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link to="/contact" className="editorial-link text-sm whitespace-nowrap">
                Discuss it{" "}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Process">
        <SectionHeading
          eyebrow="My process"
          title="Four steps, from first conversation to launch"
        />
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item, i) => (
            <li
              key={item.step}
              className="reveal border-t border-hairline pt-6"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <p className="font-display text-base text-muted-foreground">{item.step}</p>
              <h3 className="mt-4 text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
