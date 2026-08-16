import { Container } from "./Container";
import { CONTACT_EMAIL } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">Yassine Nachmaoui</p>
          <p className="mt-2 max-w-sm text-sm text-ink-foreground/70">
            Freelance web designer and developer based in Morocco, building modern websites and
            practical digital experiences.
          </p>
        </div>
        <div className="text-sm">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-ink-foreground/30 underline-offset-4 transition-colors hover:decoration-ink-foreground"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-3 text-ink-foreground/60">Nachmaoui.com</p>
        </div>
      </Container>
    </footer>
  );
}