import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader
        eyebrow="Contact"
        title={<>Have a project in mind?</>}
        lead="Let's talk about what you're building."
        meta={[
          { term: "Email", value: CONTACT_EMAIL },
          { term: "Location", value: "Morocco, working remotely" },
          { term: "Response", value: "Usually within a day or two" },
        ]}
      />

      <Section label="Contact form">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="border-t border-hairline pt-6">
            <h2 className="text-2xl">Prefer email?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Email is the most reliable way to reach me, and the form is not yet connected to a mail
              service.
            </p>
            {/* TODO: replace with your real email address in src/data/site.ts. */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="editorial-link mt-6 inline-block text-base"
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
