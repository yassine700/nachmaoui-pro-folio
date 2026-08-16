import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";

const CHECKLIST = [
  "Semantic HTML",
  "Heading structure",
  "Metadata",
  "Clean URLs",
  "Internal linking",
  "Image optimisation",
  "Alt text",
  "Mobile performance",
];

export function SeoPreview() {
  return (
    <Section id="seo" label="SEO fundamentals">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">SEO fundamentals</p>
          <h2 className="mt-6 max-w-xl text-[2rem] leading-[1.06] md:text-5xl">
            SEO fundamentals, built into the website.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Semantic markup, heading structure, metadata, clean URLs, image optimisation and mobile
            performance handled during the build. No ranking promises.
          </p>
          <Link to="/seo" className="editorial-link mt-10 text-sm">
            What I implement <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <ul className="self-start">
          {CHECKLIST.map((item) => (
            <li
              key={item}
              className="flex items-baseline justify-between gap-6 border-t border-hairline py-4 text-sm last:border-b last:border-hairline"
            >
              <span>{item}</span>
              <span aria-hidden="true" className="text-muted-foreground">
                &mdash;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
