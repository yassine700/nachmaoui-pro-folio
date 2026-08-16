import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";

const CHECKLIST = [
  "Semantic structure",
  "Mobile responsive",
  "Optimized headings",
  "Metadata",
  "Clean URLs",
  "Image optimization",
  "Internal linking",
  "Basic local SEO",
];

export function SeoPreview() {
  return (
    <Section id="seo" label="SEO fundamentals">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="SEO Fundamentals"
            title="I don't just build websites. I build them with search engines in mind."
            description="Practical, on-page and technical fundamentals handled during the build — semantic markup, heading structure, metadata, clean URLs, image optimisation and mobile performance. No ranking promises."
          />
          <Link
            to="/seo"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            See what I implement
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="rounded-xl border border-hairline bg-card p-8">
          <p className="font-display text-2xl">SEO-ready website</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
