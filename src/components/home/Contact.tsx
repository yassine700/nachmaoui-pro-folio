import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "../layout/Section";
import { CONTACT_EMAIL } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" tone="ink">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground/60">
            Contact
          </p>
          <h2 className="mt-4 text-3xl leading-[1.1] md:text-5xl">
            Have a project in mind?
            <br />
            <span className="italic text-ink-foreground/70">Let&apos;s talk about it.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75">
            Tell me about your business, the type of project — website, landing page, mobile app MVP
            or SEO foundations — and roughly what you want it to achieve. I reply to every serious
            enquiry.
          </p>
        </div>

        <div className="rounded-xl border border-ink-foreground/15 p-7">
          <p className="text-sm text-ink-foreground/60">Email</p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Project%20enquiry`}
            className="group mt-2 inline-flex items-center gap-2 text-xl underline decoration-ink-foreground/30 underline-offset-[6px] transition-colors hover:decoration-ink-foreground"
          >
            <Mail className="size-5" aria-hidden="true" />
            {CONTACT_EMAIL}
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <p className="mt-6 text-sm leading-relaxed text-ink-foreground/60">
            A full contact form (name, email, company, project type, message) and social/profile
            links are planned for a later phase. TODO: replace the email address and add your
            profile links.
          </p>
        </div>
      </div>
    </Section>
  );
}