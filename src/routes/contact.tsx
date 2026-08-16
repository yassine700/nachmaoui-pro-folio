import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_EMAIL } from "@/data/site";

const TITLE = "Contact — Start a Website Project | Yassine Nachmaoui";
const DESCRIPTION =
  "Tell me about your website, landing page or app project. Contact Yassine Nachmaoui by form or email.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <Container>
          <div className="reveal max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-foreground/60">Contact</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">
              Have a project in mind?
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
              Tell me what you're building, and let's see how I can help.
            </p>
          </div>
        </Container>
      </section>

      <Section label="Contact form">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="rounded-xl border border-hairline bg-card p-8">
            <h2 className="text-xl">Prefer email?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Email is the most reliable way to reach me, and the form is not yet connected to a mail
              service.
            </p>
            {/* TODO: replace with your real email address in src/data/site.ts. */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Based in Morocco · Working remotely
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
