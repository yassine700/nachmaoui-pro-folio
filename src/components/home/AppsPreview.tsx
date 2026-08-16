import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";
import { PhoneFrame } from "../shared/BrowserFrame";
import { TELEPORTEUR } from "@/data/teleporteur";

export function AppsPreview() {
  return (
    <Section id="apps" tone="surface" label="App projects">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">{TELEPORTEUR.label}</p>
          <h2 className="mt-6 text-[2rem] leading-[1.06] md:text-5xl">{TELEPORTEUR.title}</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {TELEPORTEUR.summary}
          </p>
          <p className="mt-6 text-xs tracking-[0.16em] uppercase text-muted-foreground">
            {TELEPORTEUR.status}
          </p>
          <Link to="/apps/teleporteur" className="editorial-link mt-10 text-sm">
            View the concept <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          {TELEPORTEUR.screens.slice(0, 2).map((screen) => (
            <PhoneFrame key={screen.title} title={screen.title} detail={screen.title} />
          ))}
        </div>
      </div>
    </Section>
  );
}
