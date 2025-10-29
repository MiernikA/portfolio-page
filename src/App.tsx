import { CosmicBackground } from "./CosmicBackground.tsx";
import { Header } from "./ui/components/Header/Header.tsx";
import { Navbar } from "./ui/components/Navbar/Navbar.tsx";
import { AboutMe } from "./ui/components/AboutMe/AboutMe.tsx";
import { Skills } from "./ui/components/Skills/Skills.tsx";
import { RocketButton } from "./ui/components/shared/RocketButton/RocketButton.tsx";
import { Experience } from "./ui/components/Experience/Experience.tsx";
import { Projects } from "./ui/components/Projects/Projects.tsx";
import { Contact } from "./ui/components/Contact/Contact.tsx";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <CosmicBackground />
      <Navbar />
      <Header />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          top: { xs: "150vh" },
          lineHeight: 1.6,
          "& > *": {
            mb: { xs: 60, lg: 0 },
          },
        }}
      >
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Box>

      <RocketButton />
    </>
  );
}

export default App;
