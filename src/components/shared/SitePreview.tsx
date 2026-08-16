import { cn } from "@/lib/utils";
import type { ProjectPreview } from "@/data/projects";

/**
 * A CSS-drawn website preview mockup for a project card or case study.
 * It is a portfolio presentation device, not a screenshot of a live site.
 */
export function SitePreview({
  preview,
  domain,
  compact = false,
  className,
}: {
  preview: ProjectPreview;
  domain?: string | undefined;
  compact?: boolean;
  className?: string | undefined;
}) {
  return (
    <div
      data-preview-tone={preview.tone}
      aria-hidden="true"
      className={cn(
        "flex size-full flex-col bg-[var(--preview-tint)] text-[var(--preview-ink)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-[color-mix(in_oklab,var(--preview-ink)_12%,transparent)] px-4 py-2.5 md:px-6">
        <span className="shrink-0 font-display text-[0.8rem] tracking-tight md:text-base">
          {domain ?? "Website"}
        </span>
        <span className="hidden min-w-0 flex-1 items-center justify-end gap-4 overflow-hidden whitespace-nowrap text-[0.6rem] uppercase tracking-[0.14em] opacity-70 sm:flex md:text-[0.65rem]">
          {preview.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
        <span className="shrink-0 whitespace-nowrap rounded-full bg-[var(--preview-brand)] px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.12em] text-[var(--preview-tint)] md:text-[0.6rem]">
          {preview.cta}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-3 px-4 py-4 md:px-6 md:py-6">
        <p
          className={cn(
            "max-w-[22ch] font-display leading-[1.05]",
            compact ? "text-lg md:text-2xl" : "text-2xl md:text-4xl",
          )}
        >
          {preview.headline}
        </p>
        <p className="max-w-[34ch] text-[0.65rem] leading-relaxed opacity-70 md:text-xs">
          {preview.tagline}
        </p>
        <div className="mt-1 grid grid-cols-3 gap-2 md:gap-3">
          {preview.blocks.map((block) => (
            <div
              key={block}
              className="rounded-md bg-[color-mix(in_oklab,var(--preview-ink)_7%,transparent)] p-2 md:p-3"
            >
              <span className="block h-1 w-6 rounded-full bg-[var(--preview-brand)]" />
              <span className="mt-2 block text-[0.55rem] leading-snug md:text-[0.68rem]">
                {block}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
