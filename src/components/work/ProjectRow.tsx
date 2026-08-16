import { Link } from "@tanstack/react-router";
import { BrowserFrame } from "../shared/BrowserFrame";
import { SitePreview } from "../shared/SitePreview";
import { STATUS_LABEL, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Large editorial presentation of a single project: index number, title,
 * domain, a full-width website preview, and factual metadata.
 */
export function ProjectRow({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string | undefined;
}) {
  const number = String(index + 1).padStart(2, "0");
  const hasShot = Boolean(project.gallery[0]);

  return (
    <article className={cn("group border-t border-hairline pt-8 md:pt-10", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
        <div className="flex items-baseline gap-5 md:gap-8">
          <span className="font-display text-lg text-muted-foreground md:text-xl">{number}</span>
          <div>
            <h3 className="text-[2rem] leading-tight md:text-5xl">
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="editorial-link"
                aria-label={`View the ${project.title} case study`}
              >
                {project.title}
              </Link>
            </h3>
            {project.domain ? (
              <p className="mt-3 text-sm text-muted-foreground">{project.domain}</p>
            ) : null}
          </div>
        </div>

        <p className="eyebrow md:text-right">{STATUS_LABEL[project.status]}</p>
      </div>

      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        tabIndex={-1}
        aria-hidden="true"
        className="media-zoom mt-10 block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <BrowserFrame
          label={project.domain ?? "Preview"}
          image={project.gallery[0]}
          aspect="aspect-16/10"
        >
          {project.preview ? (
            <SitePreview preview={project.preview} domain={project.domain} compact />
          ) : undefined}
        </BrowserFrame>
      </Link>

      {!hasShot && project.preview ? (
        <p className="mt-4 text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Design mockup — not a live site screenshot
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 pb-4">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">{project.category}</p>
          <p className="mt-4 max-w-prose text-base leading-relaxed">{project.summary}</p>
          {project.technologies.length > 0 ? (
            <p className="mt-5 text-xs tracking-[0.14em] uppercase text-muted-foreground">
              {project.technologies.join(" · ")}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="editorial-link text-sm"
          >
            View case study{" "}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="editorial-link text-sm text-muted-foreground"
            >
              Visit site <span aria-hidden="true">&#8599;</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
