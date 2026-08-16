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
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 inline-flex h-11 items-center px-2 text-sm tracking-[0.18em] uppercase"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
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

/** Minimal sun/moon toggle that persists the user's theme choice. */
function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggle() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {theme === "dark" ? (
        /* Sun icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        /* Moon icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
