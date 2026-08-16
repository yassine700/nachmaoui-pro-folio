import { Section, SectionHeading } from "../layout/Section";
import { SERVICES } from "@/data/site";

export function Services() {
  return (
    <Section id="services" tone="surface">
      <SectionHeading
        eyebrow="Services"
        title="What I can take on for your business"
        description="Freelance engagements, scoped honestly. If a project is outside what I can do well, I will tell you."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className="flex gap-6 rounded-xl border border-hairline bg-background p-7 transition-colors hover:border-primary/40"
          >
            <span
              aria-hidden="true"
              className="font-display text-xl text-primary/70"
            >{`0${index + 1}`}</span>
            <div>
              <h3 className="text-xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}