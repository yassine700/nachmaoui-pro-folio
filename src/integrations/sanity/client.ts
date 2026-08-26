import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "41zsblk8",
  dataset: "production",
  apiVersion: "2026-08-24",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type Homepage = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  /** Primary hero call-to-action label, e.g. "INITIALIZE COLLABORATION". */
  ctaLabel?: string;
  profileImage?: SanityImageSource & { alt?: string };
  seoTitle?: string;
  seoDescription?: string;
};

export const homepageQuery = `*[_type == "homepage"][0]{
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  profileImage,
  seoTitle,
  seoDescription
}`;
