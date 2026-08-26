import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { MotionValue } from "motion/react";
import type { Group } from "three";
import { SCENE_DETAIL } from "./heroContent";

type SceneProps = { progress: MotionValue<number>; compact?: boolean };

/**
 * The liquid-metal mesh. Scroll progress is read from a MotionValue inside
 * useFrame so scrolling never triggers a React re-render.
 */
function LiquidMetalMesh({ progress, compact }: SceneProps) {
  const group = useRef<Group>(null);
  const distortRef = useRef<{ distort: number } | null>(null);

  useFrame((state) => {
    const p = progress.get();
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y = t * 0.16 + p * 2.4;
      group.current.rotation.x = Math.sin(t * 0.22) * 0.12 + p * 0.6;
      const scale = 1 + Math.sin(t * 0.6) * 0.015 - p * 0.35;
      group.current.scale.setScalar(Math.max(scale, 0.35));
      group.current.position.x = p * 1.6;
      group.current.position.y = -p * 0.9;
    }

    if (distortRef.current) {
      distortRef.current.distort = 0.42 * (1 - p) + 0.06;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry
          args={[1.35, compact ? SCENE_DETAIL.compact : SCENE_DETAIL.desktop, compact ? SCENE_DETAIL.compact : SCENE_DETAIL.desktop]}
        />
        <MeshDistortMaterial
          ref={distortRef as never}
          color="#c9ced6"
          metalness={1}
          roughness={0.12}
          distort={0.42}
          speed={1.4}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene({ progress, compact }: SceneProps) {
  return (
    <Canvas
      className="absolute inset-0"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} />
      <directionalLight position={[-5, -2, -4]} intensity={0.9} color="#8fa2c0" />
      <LiquidMetalMesh progress={progress} compact={compact} />
      <Environment preset="studio" environmentIntensity={0.85} />
    </Canvas>
  );
}
