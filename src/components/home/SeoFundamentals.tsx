import { Check } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";
import { SEO_FUNDAMENTALS } from "@/data/site";

export function SeoFundamentals() {
  return (
    <Section id="seo">
      <SectionHeading
        eyebrow="SEO Fundamentals"
        title="Search-friendly by construction, not by patch"
        description="I am not an SEO agency and I do not promise rankings. What I do is build sites where the fundamentals are correct from the first commit — the part that is expensive to retrofit later."
      />
      <ul className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {SEO_FUNDAMENTALS.map((item) => (
          <li key={item.title} className="flex gap-3 border-t border-hairline pt-5">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h3 className="font-sans text-sm font-medium tracking-normal">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}