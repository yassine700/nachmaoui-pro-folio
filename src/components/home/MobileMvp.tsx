import { Section, SectionHeading } from "../layout/Section";
import { teleporteur } from "@/data/projects";

const BLOCKS = [
  {
    title: "Customer interface",
    detail:
      "Post what needs to be transported, where it is going, and when — then follow the request through to a driver accepting it.",
  },
  {
    title: "Driver interface",
    detail:
      "Browse nearby cargo requests, see route and load details, and accept the ones that fit the trip already being made.",
  },
  {
    title: "Wallet & credit system",
    detail:
      "A credit balance model designed to handle marketplace transactions between customers and drivers.",
  },
  {
    title: "Marketplace concept",
    detail:
      "Matching unused transport capacity with local cargo demand, replacing informal phone-call arrangements.",
  },
  {
    title: "Business model",
    detail:
      "Revenue designed around a commission or credit consumption per completed delivery. Model documented as part of the MVP definition.",
  },
];

export function MobileMvp() {
  return (
    <Section id="mobile-mvp" tone="surface">
      <SectionHeading
        eyebrow="Mobile App MVP"
        title="Téléporteur — a local cargo marketplace concept"
        description={teleporteur.summary}
      />

      <p className="mt-6 inline-flex rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
        Mobile MVP concept — not a launched product
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-hairline bg-background p-6">
            <h3 className="text-lg">The problem</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {teleporteur.challenge}
            </p>
          </div>
          <div className="rounded-xl border border-hairline bg-background p-6">
            <h3 className="text-lg">The idea</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {teleporteur.solution}
            </p>
          </div>
          {BLOCKS.map((block) => (
            <div key={block.title} className="rounded-xl border border-hairline bg-background p-6">
              <h3 className="text-lg">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          {["Customer app", "Driver app"].map((label) => (
            <div
              key={label}
              className="flex aspect-9/19 w-36 flex-col items-center justify-center rounded-[2rem] border border-hairline bg-background p-4 text-center sm:w-40"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
              <p className="mt-2 text-xs text-muted-foreground/70">Mockup placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}