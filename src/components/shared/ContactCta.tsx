import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "../layout/Section";
import { CONTACT_EMAIL } from "@/data/site";

export function ContactCta({
  title = "Have a project in mind?",
  text = "Tell me what you're building, and let's see how I can help.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section tone="ink" label="Contact call to action">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl leading-[1.1] md:text-[2.75rem]">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-foreground/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-foreground px-6 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            Start a Project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink-foreground/60"
          >
            Email Me
          </a>
        </div>
      </div>
    </Section>
  );
}
