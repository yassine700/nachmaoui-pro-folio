import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Editorial page header: an eyebrow label, a large display headline and an
 * optional lead paragraph, set on the warm off-white page background.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  meta,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  meta?: { term: string; value: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="pt-16 pb-14 md:pt-24 md:pb-20">
      <Container>
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.02] md:text-[4.5rem] lg:text-[5.25rem]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          ) : null}
          {children}
          {meta && meta.length > 0 ? (
            <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div key={item.term}>
                  <dt className="eyebrow">{item.term}</dt>
                  <dd className="mt-2 text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
