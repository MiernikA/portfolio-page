import { Box } from "@mui/material";
import { CosmicBackground } from "./CosmicBackground.tsx";
import { Navbar } from "./ui/components/Navbar/Navbar.tsx";
import { Header } from "./ui/components/Header/Header.tsx";
import { AboutMe } from "./ui/components/AboutMe/AboutMe.tsx";
import { Experience } from "./ui/components/Experience/Experience.tsx";
import { Skills } from "./ui/components/Skills/Skills.tsx";
import { Projects } from "./ui/components/Projects/Projects.tsx";
import { Contact } from "./ui/components/Contact/Contact.tsx";
import { RocketButton } from "./ui/components/shared/RocketButton/RocketButton.tsx";

const sections = [
  { component: <AboutMe />, mt: { xs: "150vh" } },
  { component: <Experience />, mt: { xs: "170vh" } },
  { component: <Skills />, mt: { xs: 0 } },
  { component: <Projects />, mt: { xs: "100vh" } },
  { component: <Contact />, mt: { xs: 0 } },
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
