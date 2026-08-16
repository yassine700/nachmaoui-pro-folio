import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";
import { SERVICES } from "@/data/site";

export function ServicesPreview() {
  return (
    <Section id="services" label="Services">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-6 text-[2rem] leading-[1.06] md:text-5xl">What I can help you with</h2>
        </div>
        <Link to="/services" className="editorial-link text-sm">
          All services <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <ol className="mt-16">
        {SERVICES.map((service, i) => (
          <li
            key={service.title}
            className="grid gap-4 border-t border-hairline py-8 md:grid-cols-[5rem_1fr_1.2fr] md:items-baseline md:gap-10 md:py-10"
          >
            <span className="font-display text-lg text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl md:text-3xl">{service.title}</h3>
            <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
