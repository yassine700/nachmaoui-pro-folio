import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#mobile-mvp", label: "Mobile MVP" },
  { href: "#seo", label: "SEO" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="font-display text-lg tracking-tight">
          Yassine <span className="text-primary">Nachmaoui</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a Project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-md border border-hairline md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-hairline md:hidden">
          <Container className="flex flex-col py-2">
            {[...NAV, { href: "#contact", label: "Start a Project" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 text-sm last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}