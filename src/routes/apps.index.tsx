import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/shared/BrowserFrame";
import { ContactCta } from "@/components/shared/ContactCta";
import { TELEPORTEUR } from "@/data/teleporteur";

const TITLE = "Apps — Mobile MVP & Product Concepts | Yassine Nachmaoui";
const DESCRIPTION =
  "App and product work by Yassine Nachmaoui, including Téléporteur, a local cargo marketplace mobile app MVP concept.";

export const Route = createFileRoute("/apps/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/apps" },
    ],
    links: [{ rel: "canonical", href: "/apps" }],
  }),
  component: AppsIndex,
});

function AppsIndex() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <Container>
          <div className="reveal max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-foreground/60">Apps</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">Beyond websites</h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
              Alongside website work I design app concepts and digital products: the problem, the
              flows, the screens and the scope of a realistic first version. These are presented as
              concepts and MVPs, never as launched commercial products.
            </p>
          </div>
        </Container>
      </section>

      <Section label="App projects">
        <article className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary">{TELEPORTEUR.label}</p>
            <h2 className="mt-4 text-3xl md:text-5xl">{TELEPORTEUR.title}</h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
              {TELEPORTEUR.overview}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {TELEPORTEUR.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <Link
              to="/apps/teleporteur"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {TELEPORTEUR.screens.slice(0, 2).map((screen) => (
              <PhoneFrame key={screen.title} title={screen.title} detail={screen.title} />
            ))}
          </div>
        </article>
      </Section>

      <ContactCta title="Have an app idea worth scoping?" />
    </>
  );
}
