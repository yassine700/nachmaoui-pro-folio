import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  tone = "default",
  label,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "ink";
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "scroll-mt-24 border-t border-hairline py-20 md:py-28",
        tone === "surface" && "bg-surface text-surface-foreground",
        tone === "ink" && "border-transparent bg-ink text-ink-foreground",
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
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-[1.1] md:text-[2.75rem]">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}