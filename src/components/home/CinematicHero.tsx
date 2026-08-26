import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { ClientOnly, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "../layout/Container";
import { HeroStill } from "../three/HeroStill";
import { useSceneCapability } from "../three/useSceneCapability";
import { HERO_FALLBACK } from "../three/heroContent";
import { homepageQuery, sanityClient, type Homepage } from "@/integrations/sanity/client";

// three.js touches browser APIs at import time — load the scene lazily and
// only inside <ClientOnly>, never statically from a route module.
const HeroScene = lazy(() => import("../three/HeroScene"));

/**
 * Full-screen cinematic hero: a centered liquid-metal scene ringed by
 * minimal editorial typography. One scroll source (this section's own
 * progress) drives both the 3D object and the text overlays.
 */
export function CinematicHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canRenderScene = useSceneCapability();

  const { data } = useQuery({
    queryKey: ["sanity", "homepage"],
    queryFn: () => sanityClient.fetch<Homepage | null>(homepageQuery),
    staleTime: 60_000,
  });

  const eyebrow = data?.eyebrow || HERO_FALLBACK.eyebrow;
  const title = data?.title || HERO_FALLBACK.title;
  const ctaLabel = data?.ctaLabel || HERO_FALLBACK.ctaLabel;

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const secondOpacity = useTransform(scrollYProgress, [0.42, 0.62, 0.92], [0, 1, 0]);
  const secondY = useTransform(scrollYProgress, [0.42, 1], [50, -40]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 0.65, 0]);

  return (
    <div ref={stageRef} className="relative h-[220vh] bg-scene text-scene-foreground">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 3D / still layer */}
        <motion.div style={{ opacity: sceneOpacity }} className="absolute inset-0">
          <ClientOnly fallback={<HeroStill />}>
            {canRenderScene ? (
              <Suspense fallback={<HeroStill />}>
                <HeroScene progress={scrollYProgress} />
              </Suspense>
            ) : (
              <HeroStill />
            )}
          </ClientOnly>
          {/* Soft radial darkening so centered type stays legible over chrome. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,var(--scene)_78%)] opacity-90"
          />
        </motion.div>

        {/* Overlay typography — eyebrow above, headline and actions below */}
        <div className="pointer-events-none absolute inset-0">
          <Container className="flex h-full flex-col items-center justify-between py-24 text-center md:py-28">
            <motion.p
              style={{ opacity: headlineOpacity }}
              className="eyebrow text-scene-muted"
            >
              {eyebrow}
            </motion.p>

            <motion.div
              style={{ opacity: headlineOpacity, y: headlineY }}
              className="pointer-events-auto flex flex-col items-center gap-12 md:gap-16"
            >
              <h1 className="max-w-4xl text-[1.85rem] leading-[1.08] tracking-[-0.01em] uppercase sm:text-[2.5rem] md:text-[3.1rem] lg:text-[3.6rem]">
                {title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                <Link to="/contact" className="editorial-link text-xs tracking-[0.22em] uppercase">
                  {ctaLabel} <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  to="/work"
                  className="editorial-link text-xs tracking-[0.22em] text-scene-muted uppercase"
                >
                  View recent projects <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>

            <div aria-hidden="true" className="h-4" />
          </Container>
        </div>

        {/* Second scroll beat */}
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <Container>
            <motion.div
              style={{ opacity: secondOpacity, y: secondY }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="eyebrow text-scene-muted">What I do</p>
              <p className="mt-6 font-display text-3xl leading-[1.12] md:text-5xl">
                Web design, responsive development and SEO foundations —{" "}
                <span className="text-scene-muted italic">shipped in about a week.</span>
              </p>
            </motion.div>
          </Container>
        </div>

        <ScrollHint />
      </div>
    </div>
  );
}

/** Small "Scroll" cue that fades out as soon as the user starts scrolling. */
function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.625rem] tracking-[0.3em] text-scene-muted uppercase transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      Scroll
    </div>
  );
}
