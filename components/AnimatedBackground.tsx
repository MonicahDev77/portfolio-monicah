"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Use useMemo to prevent regeneration on every render
  const particles = useMemo(() => {
    const positions = new Float32Array(2000);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0001;
      ref.current.rotation.y += 0.0002;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#3B82F6"
        size={0.05}
        sizeAttenuation={true}
        opacity={0.4}
      />
    </Points>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: "transparent" }}
        gl={{ antialias: true }}
      >
        <ParticleField />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentSecondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
    </div>
  );
}