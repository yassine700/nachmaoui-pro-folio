import { useEffect, useState } from "react";

/**
 * Decides whether the WebGL hero scene should mount.
 *
 * Returns `false` during SSR and on devices where a live canvas is a bad
 * trade: reduced-motion preference, small/touch-first viewports, low core
 * count, or no WebGL context available. Callers render a static image
 * fallback instead.
 */
export function useSceneCapability() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallViewport = window.innerWidth < 768;
    const lowPower = (navigator.hardwareConcurrency ?? 4) <= 4;

    if (reducedMotion || coarsePointer || smallViewport || lowPower) return;

    let supportsWebgl = false;
    try {
      const canvas = document.createElement("canvas");
      supportsWebgl = Boolean(
        canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
      );
    } catch {
      supportsWebgl = false;
    }

    setCanRender(supportsWebgl);
  }, []);

  return canRender;
}
