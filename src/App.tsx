import { Box } from "@mui/material";
import { CosmicBackground } from "./ui/3d/models/CosmicBackground";
import { Navbar } from "./ui/components/Navbar/Navbar";
import { Header } from "./ui/components/Header/Header";
import { AboutMe } from "./ui/components/AboutMe/AboutMe";
import { Experience } from "./ui/components/Experience/Experience";
import { Skills } from "./ui/components/Skills/Skills";
import { Projects } from "./ui/components/Projects/Projects";
import { Contact } from "./ui/components/Contact/Contact";
import { RocketButton } from "./ui/components/shared/RocketButton/RocketButton";

const sections = [
  { component: <AboutMe />, mt: { xs: "150vh" } },
  { component: <Experience />, mt: { xs: "170vh" } },
  { component: <Skills />, mt: { xs: 0 } },
  { component: <Projects />, mt: { xs: "100vh" } },
  { component: <Contact />, mt: { xs: "120vh" } },
];

function App() {
  return (
    <>
      <CosmicBackground />
      <Navbar />
      <Header />
      <Box sx={{ position: "relative", zIndex: 1, lineHeight: 1.6 }}>
        {sections.map(({ component, mt }, index) => (
          <Box key={index} sx={{ mt }}>
            {component}
          </Box>
        ))}
      </Box>
      <RocketButton />
    </>
  );
}

export default App;
