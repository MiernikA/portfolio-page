import type { RefObject } from "react";
import * as THREE from "three";

const MIN_DISTANCE = 2.7;
const EPSILON = 0.001;
const OVERLAP_SCALE = 0.5;
const IMPULSE_SCALE = 0.05;
const BOUNCE_FACTOR = -0.9;

export const handleCollisionsAndBounds = (
  mesh: THREE.Mesh,
  asteroids: RefObject<THREE.Mesh[]>,
  velocity: THREE.Vector3,
  bounds: { left: number; right: number; top: number; bottom: number }
) => {
  for (const other of asteroids.current) {
    if (!other || other === mesh) continue;

    const dist = mesh.position.distanceTo(other.position);

    if (dist < MIN_DISTANCE && dist > EPSILON) {
      const dir = new THREE.Vector3(
        mesh.position.x - other.position.x,
        mesh.position.y - other.position.y,
        0
      ).normalize();

      const overlap = (MIN_DISTANCE - dist) * OVERLAP_SCALE;

      mesh.position.addScaledVector(dir, overlap);
      other.position.addScaledVector(dir, -overlap);
      velocity.addScaledVector(dir, overlap * IMPULSE_SCALE);
    }
  }

  if (mesh.position.x > bounds.right) {
    mesh.position.x = bounds.right;
    velocity.x *= BOUNCE_FACTOR;
  } else if (mesh.position.x < bounds.left) {
    mesh.position.x = bounds.left;
    velocity.x *= BOUNCE_FACTOR;
  }

  if (mesh.position.y > bounds.top) {
    mesh.position.y = bounds.top;
    velocity.y *= BOUNCE_FACTOR;
  } else if (mesh.position.y < bounds.bottom) {
    mesh.position.y = bounds.bottom;
    velocity.y *= BOUNCE_FACTOR;
  }
};
