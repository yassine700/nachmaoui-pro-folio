import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { CONTACT_EMAIL, NAV_LINKS, SOCIAL_LINKS } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline pt-20 pb-10">
      <Container>
        <p className="eyebrow">Get in touch</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="editorial-link mt-6 block font-display text-[2rem] leading-tight break-words md:text-5xl"
        >
          {CONTACT_EMAIL}
        </a>

        <div className="mt-20 grid gap-12 border-t border-hairline pt-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="text-sm tracking-[0.28em] uppercase">Nachmaoui</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional websites for local businesses — built in a week, without the agency price
              tag. Web design, responsive development, and SEO foundations.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Pages</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.filter((l) => l.to !== "/").map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {SOCIAL_LINKS.map((item) => (
                /* TODO: replace with your real profile URL. */
                <li key={item.label}>{item.label} — link to be added</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yassine Nachmaoui
        </p>
      </Container>
    </footer>
  );
}
