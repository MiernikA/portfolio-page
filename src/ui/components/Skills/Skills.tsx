import { Box, Container } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import { FloatingAsteroid } from "./components/FloatingAsteroid";
import { useSkillsList } from "./hooks/useSkillsList";

const COLUMNS = 8;
const SPACING = 3.2;

export const Skills = () => {
  const skills = useSkillsList();
  const asteroids = useRef<THREE.Mesh[]>([]);
  const bounds = { left: -12, right: 12, top: 6, bottom: -5 };

  return (
    <Box
      component="section"
      id="skills"
      sx={{ height: "100vh", color: "white" }}
    >
      <Container
        maxWidth={false}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, -5, -5]} intensity={0.7} />

          <group position={[0, -1.5, 0]}>
            {skills.map((skill, i) => {
              const row = Math.floor(i / COLUMNS);
              const col = i % COLUMNS;
              const startPos = new THREE.Vector3(
                (col - (COLUMNS - 1) / 2) * SPACING,
                (1.5 - row) * SPACING,
                0
              );

              return (
                <FloatingAsteroid
                  key={skill.title}
                  title={skill.title}
                  imgUrl={skill.imgUrl}
                  startPos={startPos}
                  asteroids={asteroids}
                  floatOffset={Math.random() * Math.PI * 2}
                  floatAmplitude={0.2 + Math.random() * 0.3}
                  bounds={bounds}
                />
              );
            })}
          </group>
        </Canvas>
      </Container>
    </Box>
  );
};
