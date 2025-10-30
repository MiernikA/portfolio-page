import { Decal, Html, useTexture } from "@react-three/drei";
import { useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useState, type RefObject, useEffect } from "react";
import { createAsteroid } from "../utils/createAsteriod";
import { handleCollisionsAndBounds } from "../utils/physicsUtils";

const VELOCITY_SCALE = 0.4;
const DAMPING_FACTOR = 0.98;
const RANDOM_IMPULSE_SCALE = 0.6;
const FLOAT_SPEED = 0.4;

type Props = {
  title: string;
  imgUrl: string;
  startPos: THREE.Vector3;
  asteroids: RefObject<THREE.Mesh[]>;
  floatOffset: number;
  floatAmplitude: number;
  bounds: { left: number; right: number; top: number; bottom: number };
};

export const FloatingAsteroid = ({
  title,
  imgUrl,
  startPos,
  asteroids,
  floatOffset,
  floatAmplitude,
  bounds,
}: Props) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const [decal] = useTexture([imgUrl]);
  const [colorMap, normalMap, roughnessMap, aoMap] = useTexture([
    "/models/rock_texture/Rock058_1K-JPG_Color.jpg",
    "/models/rock_texture/Rock058_1K-JPG_NormalGL.jpg",
    "/models/rock_texture/Rock058_1K-JPG_Roughness.jpg",
    "/models/rock_texture/Rock058_1K-JPG_AmbientOcclusion.jpg",
  ]);

  const geometry = useMemo(() => createAsteroid(1.2, 64), []);
  const position = useRef(startPos.clone());
  const velocity = useRef(new THREE.Vector3());
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const t = clock.getElapsedTime() + floatOffset;
    const yOffset = Math.sin(t * FLOAT_SPEED) * floatAmplitude;
    position.current.addScaledVector(velocity.current, VELOCITY_SCALE);
    velocity.current.multiplyScalar(DAMPING_FACTOR);
    mesh.position.set(position.current.x, position.current.y + yOffset, 0);
    mesh.lookAt(camera.position);

    handleCollisionsAndBounds(mesh, asteroids, velocity.current, bounds);
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
    return () => {
      document.body.style.cursor = "default";
    };
  }, [hovered]);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    velocity.current.x = (Math.random() - 0.5) * RANDOM_IMPULSE_SCALE;
    velocity.current.y = (Math.random() - 0.5) * RANDOM_IMPULSE_SCALE;
  };

  return (
    <mesh
      ref={(ref) => {
        if (ref && asteroids.current && !asteroids.current.includes(ref)) {
          asteroids.current.push(ref);
        }
        meshRef.current = ref;
      }}
      geometry={geometry}
      position={startPos}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        roughness={1}
        metalness={0.1}
      />
      <Decal
        position={[0, 0, 1.22]}
        rotation={[0, 0, 0]}
        scale={1.4}
        map={decal}
      />
      {hovered && (
        <Html distanceFactor={15}>
          <div
            style={{
              position: "absolute",
              background: "#000",
              padding: 4,
              borderRadius: 8,
              fontSize: "2rem",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            {title}
          </div>
        </Html>
      )}
    </mesh>
  );
};
