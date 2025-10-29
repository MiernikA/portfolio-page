import * as THREE from "three";

const MIN_FREQ = 1.5;
const MAX_FREQ = 5.0;
const MIN_AMPLITUDE = 0.05;
const MAX_AMPLITUDE = 0.13;
const PHASE_MULTIPLIER = Math.PI * 2;

export const createAsteroid = (radius: number, segments: number) => {
  const geometry = new THREE.SphereGeometry(radius, segments, segments);
  const pos = geometry.attributes.position;
  const normal = new THREE.Vector3();

  const freqX = MIN_FREQ + Math.random() * (MAX_FREQ - MIN_FREQ);
  const freqY = MIN_FREQ + Math.random() * (MAX_FREQ - MIN_FREQ);
  const freqZ = MIN_FREQ + Math.random() * (MAX_FREQ - MIN_FREQ);

  const ampX = MIN_AMPLITUDE + Math.random() * (MAX_AMPLITUDE - MIN_AMPLITUDE);
  const ampY = MIN_AMPLITUDE + Math.random() * (MAX_AMPLITUDE - MIN_AMPLITUDE);
  const ampZ = MIN_AMPLITUDE + Math.random() * (MAX_AMPLITUDE - MIN_AMPLITUDE);

  const phase = Math.random() * PHASE_MULTIPLIER;

  for (let i = 0; i < pos.count; i++) {
    normal.set(pos.getX(i), pos.getY(i), pos.getZ(i)).normalize();

    const displacement =
      Math.sin(pos.getX(i) * freqX + phase) * ampX +
      Math.cos(pos.getY(i) * freqY - phase) * ampY +
      Math.sin(pos.getZ(i) * freqZ + phase / 2) * ampZ;

    const factor = 1 + displacement;
    pos.setXYZ(
      i,
      pos.getX(i) * factor,
      pos.getY(i) * factor,
      pos.getZ(i) * factor
    );
  }

  geometry.computeVertexNormals();
  return geometry;
};
