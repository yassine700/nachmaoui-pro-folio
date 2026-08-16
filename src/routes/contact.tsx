import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_EMAIL } from "@/data/site";

const TITLE = "Contact — Start a Website Project | Yassine Nachmaoui";
const DESCRIPTION =
  "Have a business that needs a website? Tell me what you're looking to build and I'll get back to you with a clear timeline and quote.";

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
        title={<>Have a business that needs a website?</>}
        lead="Tell me what you're looking to build and I'll get back to you."
        meta={[
          { term: "Direct email", value: CONTACT_EMAIL },
          { term: "Turnaround", value: "Built in ~1 week" },
          { term: "Response time", value: "Within 24 hours" },
        ]}
      />

      <Section label="Contact form">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <ContactForm />

          <aside className="space-y-8 border-t border-hairline pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <div>
              <h2 className="text-2xl font-normal">Direct email</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Prefer to write directly from your email client? Reach out anytime with project details, questions, or existing website links.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="editorial-link mt-5 inline-block text-lg font-medium text-foreground"
              >
                {CONTACT_EMAIL} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="border-t border-hairline pt-6">
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-foreground">
                What to expect
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>Prompt response with initial questions or a straightforward estimate.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>No pushy sales calls — just clear, practical advice on getting your site live.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>Typically delivered in one week once content is outlined.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

