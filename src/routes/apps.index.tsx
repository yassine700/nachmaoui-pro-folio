import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader
        eyebrow="Apps"
        title={<>Beyond websites</>}
        lead="Alongside website work I design app concepts and digital products: the problem, the flows, the screens and the scope of a realistic first version. These are presented as concepts and MVPs, never as launched commercial products."
      />

      <Section label="App projects">
        <article className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">{TELEPORTEUR.label}</p>
            <h2 className="mt-6 text-[2rem] leading-[1.06] md:text-5xl">{TELEPORTEUR.title}</h2>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted-foreground">
              {TELEPORTEUR.overview}
            </p>
            <p className="mt-8 border-t border-hairline pt-6 text-xs tracking-[0.14em] uppercase text-muted-foreground">
              {TELEPORTEUR.technologies.join(" · ")}
            </p>
            <Link to="/apps/teleporteur" className="editorial-link mt-10 inline-block text-base">
              View project <span aria-hidden="true">&rarr;</span>
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
