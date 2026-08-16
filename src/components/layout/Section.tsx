import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  tone = "default",
  label,
  divider = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "ink";
  label?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "scroll-mt-24 py-20 md:py-32",
        divider && tone === "default" && "border-t border-hairline",
        tone === "surface" && "bg-surface text-surface-foreground",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-6 text-[2rem] leading-[1.06] md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
