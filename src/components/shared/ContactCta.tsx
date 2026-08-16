import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";
import { CONTACT_EMAIL } from "@/data/site";

export function ContactCta({
  title = "Have a project in mind?",
  text = "Let's talk about what you're building.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section label="Contact call to action">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <h2 className="max-w-2xl text-[2.25rem] leading-[1.03] md:text-[4rem]">{title}</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 md:justify-end">
          <Link to="/contact" className="editorial-link text-base">
            Start a project <span aria-hidden="true">&rarr;</span>
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="editorial-link text-base text-muted-foreground"
          >
            Email me <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
