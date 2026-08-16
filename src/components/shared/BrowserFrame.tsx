import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * A CSS-drawn browser window used to present website projects.
 * When no real screenshot exists yet, it renders a clearly labelled placeholder
 * instead of stock imagery.
 */
export function BrowserFrame({
  label,
  image,
  className,
  children,
  aspect = "aspect-16/10",
}: {
  label: string;
  image?: { src: string; alt: string } | undefined;
  className?: string | undefined;
  children?: ReactNode;
  aspect?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-hairline bg-card shadow-[0_1px_0_0_var(--hairline)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-surface px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-hairline" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-hairline" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-hairline" aria-hidden="true" />
        <span className="ml-3 truncate rounded-full bg-background px-3 py-1 text-[0.7rem] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className={cn("relative flex items-center justify-center bg-surface", aspect)}>
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          (children ?? (
            <p className="px-6 text-center text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Website preview placeholder
            </p>
          ))
        )}
      </div>
    </div>
  );
}

/** CSS-drawn phone frame for mobile presentation. */
export function PhoneFrame({
  title,
  detail,
  className,
  image,
}: {
  title: string;
  detail?: string | undefined;
  className?: string | undefined;
  image?: { src: string; alt: string } | undefined;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="mx-auto w-full max-w-[220px] rounded-[2rem] border border-hairline bg-card p-2.5">
        <div className="relative flex aspect-9/19 flex-col overflow-hidden rounded-[1.6rem] bg-surface">
          <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-hairline" aria-hidden="true" />
          {image ? (
            <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover" />
          ) : (
            <div className="flex flex-1 flex-col justify-center gap-3 px-4 text-center">
              <p className="text-sm">{title}</p>
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                Screen placeholder
              </p>
            </div>
          )}
        </div>
      </div>
      {detail ? (
        <figcaption className="mt-4 text-center text-sm text-muted-foreground">{detail}</figcaption>
      ) : null}
    </figure>
  );
}
