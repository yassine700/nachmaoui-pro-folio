# Cinematic 3D Scrollytelling Homepage

Turn the homepage into a dark, cinematic experience: a full-screen WebGL scene with a liquid metallic mesh that reacts to scroll, with typography layered over it. The multi-page architecture, project data, Sanity integration, and SEO work all stay intact. Only the homepage changes visually; Work, Services, About, Contact, and case studies keep their editorial look.

## What you'll see

1. **Hero canvas** — A full-viewport (100vh) 3D scene replaces the current portrait hero. A chrome/liquid-metal blob slowly breathes and rotates, lit by an environment map so it reads as polished metal, on a near-black background.
2. **Scroll-driven scene** — The canvas stays fixed behind the homepage's first screens. As you scroll:
   - the mesh rotates and scales down, drifting off-center
   - distortion/turbulence eases off so it settles into a calmer form
   - hero text fades and lifts away; the next section's text fades in
   - the scene fades out entirely once the Work section takes over, so projects are read on a clean dark surface
3. **Overlay typography** — H1 "ENGINEERING DIGITAL ECOSYSTEMS" and CTA "INITIALIZE COLLABORATION" (linking to /contact) sit absolutely over the canvas, centered, with a secondary "View recent projects" link. Both strings come from Sanity (existing `homepage` doc fields) with these as fallback defaults, so you can edit them in the Studio.
4. **Dark cinematic homepage** — Homepage forces the dark palette regardless of the theme toggle so the scene always reads correctly. Work rows and Services list are restyled for the dark surface (hairline borders, muted metallics), contact form keeps its current dark glassmorphic styling.
5. **Fallback** — On mobile, low-power devices, or `prefers-reduced-motion`, a pre-rendered still image of the mesh replaces the canvas; text and scroll fades still work via CSS/Motion, no WebGL loaded.

## Technical approach

**Dependencies:** `three`, `@react-three/fiber`, `@react-three/drei`, `motion` (Motion for React — covers scroll progress via `useScroll`/`useTransform` and text transitions without a second animation runtime; GSAP ScrollTrigger not needed).

**SSR boundary (critical):** three.js and R3F touch browser APIs at import time. The scene module is loaded with `React.lazy` inside `<ClientOnly fallback={<HeroStill />}>`, never statically imported by the route. Shared copy/config lives in a browser-safe module so the route never pulls three into the SSR graph. No module named `*.client.*`.

**New files**
- `src/components/three/HeroScene.tsx` — lazy-only R3F `<Canvas>`: `MeshDistortMaterial` on an icosahedron/sphere (drei), `Environment` preset for chrome reflections, `dpr={[1, 1.5]}`, `frameloop` throttled, `gl={{ antialias: false, powerPreference: 'high-performance' }}`.
- `src/components/three/HeroStill.tsx` — static-image fallback (generated render placed in `src/assets/`).
- `src/components/three/useSceneCapability.ts` — detects reduced-motion, coarse pointer / small viewport, and WebGL support; returns whether to mount the canvas.
- `src/components/home/CinematicHero.tsx` — the 100vh section: fixed canvas layer + absolutely positioned overlay text driven by `useScroll`/`useTransform`.
- `src/components/home/ScrollStage.tsx` — wrapper that owns the shared scroll progress (a `MotionValue`) and passes it to both the scene and overlays via context, so there is a single scroll source.

**Changed files**
- `src/routes/index.tsx` — compose `ScrollStage > CinematicHero`, then existing `WorkPreview`, `ServicesPreview`, `HomeContact`; add `dark` class scoping for the homepage; update head description to match new copy.
- `src/integrations/sanity/client.ts` — extend `homepageQuery`/`Homepage` type with `ctaLabel` (and reuse existing `title`/`subtitle`/`eyebrow`) so hero copy stays CMS-editable; the Sanity `homepage` schema gets the extra field and the doc is patched with the new defaults.
- `src/components/home/Hero.tsx` — retired (replaced by `CinematicHero`, keeping the Sanity fetch/fallback logic pattern).
- `src/styles.css` — add metallic/scene tokens (deep near-black scene background, chrome highlight, scene hairline) as semantic variables; no hardcoded colors in components.
- `src/components/home/WorkPreview.tsx` / `ServicesPreview.tsx` — token-level tweaks only so they read well on the dark homepage surface.

**Performance guardrails:** single canvas instance, no per-frame React state (scroll drives `MotionValue`s and refs read inside `useFrame`), scene unmounted once scrolled fully past, geometry detail reduced when the viewport is small.

## Out of scope
- No 3D on other routes, no change to Work/case-study/Services/About/Contact page layouts.
- No new project data, no invented clients or metrics.
