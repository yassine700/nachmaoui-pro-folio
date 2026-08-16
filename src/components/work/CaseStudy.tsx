import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "../layout/Container";
import { Section, SectionHeading } from "../layout/Section";
import { BrowserFrame, PhoneFrame } from "../shared/BrowserFrame";
import { ContactCta } from "../shared/ContactCta";
import { STATUS_LABEL, type Project } from "@/data/projects";

function DetailRow({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-hairline py-6 md:grid-cols-[14rem_1fr] md:gap-10">
      <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{term}</dt>
      <dd className="max-w-prose text-base leading-relaxed">{children}</dd>
    </div>
  );
}

export function CaseStudy({
  project,
  previous,
  next,
}: {
  project: Project;
  previous?: Project | undefined;
  next?: Project | undefined;
}) {
  return (
    <>
      <section className="bg-ink py-16 text-ink-foreground md:py-24">
        <Container>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-ink-foreground/70 underline-offset-4 hover:text-ink-foreground hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All work
          </Link>

          <div className="reveal mt-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-foreground/60">
              <span>{project.category}</span>
              <span aria-hidden="true">/</span>
              <span>{STATUS_LABEL[project.status]}</span>
            </div>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] md:text-6xl">{project.title}</h1>
            {project.domain ? (
              <p className="mt-4 font-display text-xl text-ink-foreground/70">{project.domain}</p>
            ) : null}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
              {project.overview}
            </p>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-foreground px-6 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Visit live website
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            ) : (
              <p className="mt-10 text-sm text-ink-foreground/55">
                Live URL to be added — no link is shown until the real address is confirmed.
              </p>
            )}
          </div>
        </Container>
      </section>

      <Section label="Website preview">
        <BrowserFrame
          label={project.domain ?? "Preview"}
          image={project.gallery[0]}
          aspect="aspect-16/9"
        />

        <div className="mt-16 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-center">
          <BrowserFrame
            label="Desktop layout"
            image={project.gallery[1]}
            aspect="aspect-16/10"
          />
          <PhoneFrame title="Mobile layout" detail="Mobile presentation of the same page" />
        </div>
      </Section>

      <Section tone="surface" label="Project details">
        <SectionHeading eyebrow="Project details" title="How this project was approached" />
        <dl className="mt-10">
          <DetailRow term="My role">{project.role}</DetailRow>
          <DetailRow term="Objective / challenge">{project.objective}</DetailRow>
          <DetailRow term="Design approach">{project.designApproach}</DetailRow>
          <DetailRow term="Development approach">{project.developmentApproach}</DetailRow>
          <DetailRow term="Responsive design">{project.responsive}</DetailRow>
          {project.seoWork ? <DetailRow term="SEO work">{project.seoWork}</DetailRow> : null}
        </dl>
      </Section>

      {project.keySections.length > 0 ? (
        <Section label="Important sections">
          <SectionHeading
            eyebrow="Structure"
            title="Important website sections"
            description="The pages and blocks the site is built around."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.keySections.map((item, i) => (
              <li
                key={item}
                className="rounded-xl border border-hairline bg-card p-6 text-sm leading-relaxed"
              >
                <span className="text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2">{item}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {project.technologies.length > 0 ? (
        <Section tone="surface" label="Technologies">
          <SectionHeading eyebrow="Technologies" title="What it is built with" />
          <ul className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-hairline bg-background px-4 py-2 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section label="Gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="Screens"
          description={
            project.gallery.length > 0
              ? undefined
              : "Real screenshots to be added — these are labelled placeholders, not stock imagery."
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {(project.gallery.length > 0
            ? project.gallery
            : [undefined, undefined, undefined, undefined]
          ).map((shot, i) => (
            <figure key={shot?.src ?? i}>
              <BrowserFrame label={project.domain ?? "Screen"} image={shot} />
              {shot?.caption ? (
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {shot.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </Section>

      {previous || next ? (
        <Section tone="surface" label="Project navigation">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {previous ? (
              <Link
                to="/work/$slug"
                params={{ slug: previous.slug }}
                className="group inline-flex items-center gap-3 text-left"
              >
                <ArrowLeft className="size-4 text-primary transition-transform group-hover:-translate-x-0.5" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Previous project
                  </span>
                  <span className="mt-1 block font-display text-xl">{previous.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/work/$slug"
                params={{ slug: next.slug }}
                className="group inline-flex items-center gap-3 text-left sm:text-right"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Next project
                  </span>
                  <span className="mt-1 block font-display text-xl">{next.title}</span>
                </span>
                <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : null}
          </div>
        </Section>
      ) : null}

      <ContactCta />
    </>
  );
}
