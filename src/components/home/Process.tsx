import { Section, SectionHeading } from "../layout/Section";
import { PROCESS } from "@/data/site";

export function Process() {
  return (
    <Section id="process" tone="surface">
      <SectionHeading
        eyebrow="Process"
        title="Discover → Design → Build → Launch & Improve"
        description="A simple, predictable way of working, so you always know what happens next and what I need from you."
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((phase) => (
          <li key={phase.step} className="border-t-2 border-primary/30 pt-5">
            <span className="font-display text-sm text-primary">{phase.step}</span>
            <h3 className="mt-2 text-xl">{phase.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {phase.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}