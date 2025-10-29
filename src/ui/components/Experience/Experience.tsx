import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { useExperiences } from "./hooks/useExperience";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceDetails } from "./components/ExperienceDetails";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [animateLine, setAnimateLine] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const experiences = useExperiences();
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setAnimateLine(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (animateLine) {
      const timer = setTimeout(() => setShowIcons(true), 800);
      return () => clearTimeout(timer);
    }
  }, [animateLine]);

  return (
    <SectionLayout
      id="experience"
      subtitle={t("experience.subtitle")}
      title={t("navbar.experience")}
    >
      <Box ref={sectionRef}>
        <Box
          sx={{
            height: 600,
            display: "flex",
            flexDirection: isMobile ? "column" : "column",
            justifyContent: "center",
            userSelect: "none",
            position: "relative",
            gap: isMobile ? 3 : 0,
          }}
        >
          {/* Oś czasu – ukryta na mobilkach */}
          <Box
            sx={{
              width: "100%",
              height: 5,
              background: (theme) =>
                `linear-gradient(90deg, ${theme.palette.primary.main} 0%, #ffb347 100%)`,
              borderRadius: 2,
              transformOrigin: "left",
              transform: animateLine ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.8s ease-in-out",
              position: "relative",
              display: isMobile ? "none" : "block",
            }}
          >
            {!isMobile &&
              experiences.map((_, i) => (
                <Box
                  key={`dot-${i}`}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: `${(i / (experiences.length - 1)) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: (theme) =>
                      `linear-gradient(90deg, ${theme.palette.primary.main}, #ffb347)`,
                    boxShadow: (theme) =>
                      `0 0 15px ${theme.palette.primary.main}CC`,
                    opacity: showIcons ? 1 : 0,
                    transition: `opacity 0.4s ${(i + 1) * 0.15}s ease`,
                  }}
                />
              ))}
          </Box>

          {/* Karty */}
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.title}
              exp={exp}
              index={i}
              total={experiences.length}
              showIcons={showIcons || isMobile}
              onClick={() => setOpenIndex(i)}
            />
          ))}
        </Box>
      </Box>

      <ExperienceDetails
        open={openIndex !== null}
        experience={openIndex !== null ? experiences[openIndex] : null}
        onClose={() => setOpenIndex(null)}
      />
    </SectionLayout>
  );
};
