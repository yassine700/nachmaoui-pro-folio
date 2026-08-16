import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { CONTACT_EMAIL, NAV_LINKS, SOCIAL_LINKS } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-16 text-ink-foreground">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">Nachmaoui.com</p>
          <p className="mt-2 text-sm text-ink-foreground/60">Web Design · Web Apps · SEO Basics</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block text-sm underline decoration-ink-foreground/30 underline-offset-4 transition-colors hover:decoration-ink-foreground"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.16em] text-ink-foreground/50">Pages</p>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.filter((l) => l.to !== "/").map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-ink-foreground/50">Elsewhere</p>
          <ul className="mt-4 space-y-3 text-sm">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.label} className="text-ink-foreground/55">
                {/* TODO: replace with your real profile URL. */}
                {item.label} — link to be added
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-14 border-t border-ink-foreground/15 pt-6">
        <p className="text-xs text-ink-foreground/50">
          © {new Date().getFullYear()} Yassine Nachmaoui. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
