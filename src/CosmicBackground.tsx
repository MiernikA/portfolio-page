import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedStars = () => {
  const starsRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {

    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.004;
      starsRef.current.rotation.x += delta * 0.004;
    }


    if (lightRef.current) {
      lightRef.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={1.5} />
      <group ref={starsRef}>
        <Stars radius={100} depth={60} count={3000} factor={6} fade speed={1} />
      </group>
    </>
  );
};

export const CosmicBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'black',
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedStars />
      </Canvas>
    </div>
  );
};
