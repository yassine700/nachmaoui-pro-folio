import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";
import { SERVICES } from "@/data/site";

export function ServicesPreview() {
  return (
    <Section id="services" tone="surface" label="Services">
      <SectionHeading
        eyebrow="Services"
        title="What I can help you with"
        description="Four ways I usually work with businesses — from a first website to a first app version."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-hairline bg-background p-7 transition-colors hover:border-primary/40"
          >
            <h3 className="text-xl">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
      <Link
        to="/services"
        className="group mt-12 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Services and process in detail
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Section>
  );
}
