import { Link } from "@tanstack/react-router";
import { Container } from "../layout/Container";
import { Section, SectionHeading } from "../layout/Section";
import { BrowserFrame, PhoneFrame } from "../shared/BrowserFrame";
import { SitePreview } from "../shared/SitePreview";
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
  index,
}: {
  project: Project;
  index?: number | undefined;
  previous?: Project | undefined;
  next?: Project | undefined;
}) {
  return (
    <>
      <section className="pt-16 pb-4 md:pt-24">
        <Container>
          <Link to="/work" className="editorial-link text-sm text-muted-foreground">
            <span aria-hidden="true">&larr;</span> All work
          </Link>

          <div className="reveal mt-12">
            {typeof index === "number" ? (
              <p className="font-display text-lg text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
            ) : null}
            <h1 className="mt-6 max-w-4xl text-[2.75rem] leading-[1] md:text-[5.5rem]">
              {project.title}
            </h1>

            <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-3">
              <div>
                <dt className="eyebrow">Domain</dt>
                <dd className="mt-3 text-base">{project.domain ?? "To be added"}</dd>
              </div>
              <div>
                <dt className="eyebrow">Category</dt>
                <dd className="mt-3 text-base">{project.category}</dd>
              </div>
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-3 text-base">{STATUS_LABEL[project.status]}</dd>
              </div>
            </dl>

            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.overview}
            </p>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="editorial-link mt-10 inline-block text-base"
              >
                Visit website <span aria-hidden="true">&rarr;</span>
              </a>
            ) : (
              <p className="mt-10 text-sm text-muted-foreground">
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
        >
          {project.preview ? (
            <SitePreview preview={project.preview} domain={project.domain} />
          ) : undefined}
        </BrowserFrame>
        {!project.gallery[0] && project.preview ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Design mockup of the intended layout — real screenshots will replace it. This is a
            portfolio presentation, not a claim of a live client website.
          </p>
        ) : null}

        <div className="mt-16 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-center">
          <BrowserFrame
            label="Desktop layout"
            image={project.gallery[1]}
            aspect="aspect-16/10"
          >
            {project.preview ? (
              <SitePreview preview={project.preview} domain={project.domain} compact />
            ) : undefined}
          </BrowserFrame>
          <PhoneFrame
            title="Mobile layout"
            detail={
              project.mobileShot
                ? "The same page on a phone"
                : "Mobile presentation of the same page"
            }
            image={project.mobileShot}
          />
        </div>
      </Section>

      <Section label="Project details">
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
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {project.keySections.map((item, i) => (
              <li key={item} className="border-t border-hairline py-6">
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {project.technologies.length > 0 ? (
        <Section label="Technologies">
          <SectionHeading eyebrow="Technologies" title="What it is built with" />
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {project.technologies.map((tech) => (
              <li key={tech} className="border-t border-hairline py-4 text-base">
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
        <Section label="Project navigation">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {previous ? (
              <Link
                to="/work/$slug"
                params={{ slug: previous.slug }}
                className="group inline-flex items-center gap-3 text-left"
              >
                <span aria-hidden="true" className="text-muted-foreground transition-transform group-hover:-translate-x-1">
                  &larr;
                </span>
                <span>
                  <span className="eyebrow block">Previous project</span>
                  <span className="editorial-link mt-3 block font-display text-2xl">{previous.title}</span>
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
                  <span className="eyebrow block">Next project</span>
                  <span className="editorial-link mt-3 block font-display text-2xl">{next.title}</span>
                </span>
                <span aria-hidden="true" className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            ) : null}
          </div>
        </Section>
      ) : null}

      <ContactCta />
    </>
  );
}
