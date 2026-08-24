import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Container } from "../layout/Container";
import { homepageQuery, sanityClient, urlFor, type Homepage } from "@/integrations/sanity/client";

const FALLBACK = {
  eyebrow: "Websites for Local Businesses · 1-Week Turnaround",
  title: "Professional websites for local businesses — built in a week, without the agency price tag.",
  subtitle:
    "I help local businesses, contractors, trades, and service providers get a fast, modern, and SEO-ready website live quickly — without spending an arm and a leg.",
  imageSrc: "/images/yassine-nachmaoui.jpg",
  imageAlt: "Yassine Nachmaoui — Freelance Web Designer and Developer",
};

/** Split a headline on an em-dash so the second half can be set in italic. */
function Headline({ title }: { title: string }) {
  const [lead, rest] = title.split("—").map((part) => part.trim());
  return (
    <h1 className="mt-6 text-[2.4rem] leading-[1.04] sm:text-[3.1rem] md:text-[3.6rem] lg:text-[4.5rem] lg:leading-[0.98]">
      {lead}
      {rest ? (
        <>
          {" — "}
          <span className="italic text-muted-foreground">{rest}</span>
        </>
      ) : null}
    </h1>
  );
}

export function Hero() {
  const { data } = useQuery({
    queryKey: ["sanity", "homepage"],
    queryFn: () => sanityClient.fetch<Homepage | null>(homepageQuery),
    staleTime: 60_000,
  });

  const eyebrow = data?.eyebrow || FALLBACK.eyebrow;
  const title = data?.title || FALLBACK.title;
  const subtitle = data?.subtitle || FALLBACK.subtitle;
  const imageSrc = data?.profileImage
    ? urlFor(data.profileImage).width(720).height(900).fit("crop").auto("format").url()
    : FALLBACK.imageSrc;
  const imageAlt = data?.profileImage?.alt || FALLBACK.imageAlt;

  return (
    <section id="top" className="pt-14 pb-16 sm:pt-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
      <Container>
        <div className="reveal">
          <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Large Editorial Portrait */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-none">
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_1px_0_0_var(--hairline)] md:rounded-3xl">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  width={720}
                  height={900}
                  className="size-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Hero Editorial Content */}
            <div className="flex flex-col justify-center">
              <p className="eyebrow">{eyebrow}</p>

              <Headline title={title} />

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mt-8 lg:text-xl">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-hairline pt-8 lg:mt-10">
                <Link to="/work" className="editorial-link text-base font-medium">
                  View recent projects <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link to="/contact" className="editorial-link text-base text-muted-foreground">
                  Get your site live <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
