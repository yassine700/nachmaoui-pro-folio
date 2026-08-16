import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";
import { PhoneFrame } from "../shared/BrowserFrame";
import { TELEPORTEUR } from "@/data/teleporteur";

export function AppsPreview() {
  return (
    <Section id="apps" tone="surface" label="App projects">
      <SectionHeading
        eyebrow="Beyond Websites"
        title="I also work on app concepts and digital products"
        description="Product thinking, user flows and interface design for first versions — presented honestly as concepts and MVPs."
      />

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid grid-cols-2 gap-6">
          {TELEPORTEUR.screens.slice(0, 2).map((screen) => (
            <PhoneFrame key={screen.title} title={screen.title} detail={screen.title} />
          ))}
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary">{TELEPORTEUR.label}</p>
          <h3 className="mt-4 text-3xl md:text-4xl">{TELEPORTEUR.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {TELEPORTEUR.summary}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{TELEPORTEUR.status}</p>

          <dl className="mt-8 space-y-5 border-t border-hairline pt-6">
            {TELEPORTEUR.blocks.slice(0, 2).map((block) => (
              <div key={block.title}>
                <dt className="text-sm font-medium">{block.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{block.body}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/apps/teleporteur"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
