import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { MotionValue } from "motion/react";
import type { Group } from "three";
import { SCENE_DETAIL } from "./heroContent";

type SceneProps = { progress: MotionValue<number>; compact?: boolean | undefined };

/** Frame-rate independent damping toward a target. */
function damp(current: number, target: number, lambda: number, dt: number) {
  return current + (target - current) * (1 - Math.exp(-lambda * dt));
}

/**
 * The liquid-metal mesh.
 *
 * Two live inputs, both read inside useFrame so neither scrolling nor pointer
 * movement ever triggers a React re-render:
 *  - scroll progress (MotionValue) drives morph, scale and rotation speed
 *  - pointer position (R3F's normalized state.pointer) drives parallax tilt
 */
function LiquidMetalMesh({ progress, compact }: SceneProps) {
  const group = useRef<Group>(null);
  const distortRef = useRef<{ distort: number; speed: number } | null>(null);
  const tilt = useRef({ x: 0, y: 0 });
  const spin = useRef(0);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 30);
    const p = progress.get();
    const t = state.clock.elapsedTime;

    // Smoothly chase the pointer instead of snapping to it.
    tilt.current.x = damp(tilt.current.x, state.pointer.y * 0.45, 3.2, dt);
    tilt.current.y = damp(tilt.current.y, state.pointer.x * 0.7, 3.2, dt);

    if (group.current) {
      // Scroll accelerates the idle spin, so the surface visibly speeds up.
      spin.current += dt * (0.14 + p * 1.9);
      group.current.rotation.y = spin.current + tilt.current.y;
      group.current.rotation.x = Math.sin(t * 0.22) * 0.1 + tilt.current.x + p * 0.9;
      group.current.rotation.z = tilt.current.y * 0.18;

      const scale = 1 + Math.sin(t * 0.6) * 0.02 - p * 0.45;
      group.current.scale.setScalar(Math.max(scale, 0.35));
      group.current.position.x = tilt.current.y * 0.35 + p * 0.6;
      group.current.position.y = -tilt.current.x * 0.3 - p * 1.4;
    }

    if (distortRef.current) {
      // Morphs hard through the scroll: calm sphere -> churning liquid metal.
      distortRef.current.distort = 0.3 + p * 0.55;
      distortRef.current.speed = 1.1 + p * 3.4;
    }
  });

  const detail = compact ? SCENE_DETAIL.compact : SCENE_DETAIL.desktop;

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.35, detail, detail]} />
        <MeshDistortMaterial
          ref={distortRef as never}
          color="#c9ced6"
          metalness={1}
          roughness={0.1}
          distort={0.3}
          speed={1.1}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene({ progress, compact }: SceneProps) {
  return (
    <Canvas
      className="absolute inset-0"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.6], fov: 40 }}
      gl={{ antialias: false, powerPreference: "high-performance", stencil: false, depth: true }}
      // Pointer events are captured on the window so tracking works even
      // though the typography layer sits above the canvas.
      eventSource={typeof document !== "undefined" ? document.documentElement : undefined}
      eventPrefix="client"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} />
      <directionalLight position={[-5, -2, -4]} intensity={0.9} color="#8fa2c0" />
      <LiquidMetalMesh progress={progress} compact={compact} />
      <Environment preset="studio" environmentIntensity={0.9} />
    </Canvas>
  );
}
