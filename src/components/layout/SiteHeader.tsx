import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Container } from "./Container";
import { NAV_LINKS } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = NAV_LINKS.filter((l) => l.to !== "/");

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-8 md:h-20">
        <Link
          to="/"
          className="text-sm tracking-[0.28em] uppercase transition-opacity hover:opacity-60"
        >
          Nachmaoui
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="editorial-link ml-2 text-sm">
            Let&apos;s talk <span aria-hidden="true">&rarr;</span>
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 inline-flex h-11 items-center px-2 text-sm tracking-[0.18em] uppercase lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-hairline bg-background md:top-20 lg:hidden"
        >
          <Container className="flex min-h-full flex-col py-10">
            <ul>
              {links.map((item, i) => (
                <li key={item.to} className="border-b border-hairline">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="reveal block py-5 font-display text-4xl"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="editorial-link mt-10 text-base"
            >
              Let&apos;s talk <span aria-hidden="true">&rarr;</span>
            </Link>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
