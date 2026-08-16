import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

const TITLE = "Thank You — Nachmaoui.com";
const DESCRIPTION = "Thank you for contacting Yassine Nachmaoui.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/thank-you" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow inline-block">MESSAGE RECEIVED</p>

          <h1 className="mt-8 text-[2.5rem] leading-[1.05] md:text-[4rem] lg:text-[4.5rem]">
            Thank you for getting in touch.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your message has been received successfully. I&apos;ll review your enquiry and get back
            to you as soon as possible.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              to="/"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium tracking-wide text-background transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto"
            >
              Back to Home
            </Link>

            <Link
              to="/work"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-hairline bg-surface/50 px-8 text-sm font-medium tracking-wide text-foreground transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98] sm:w-auto"
            >
              View My Work <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
