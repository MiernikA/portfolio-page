import type { MouseEvent } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useActiveSection } from "../../../../context/ActiveSectionProvider";
import { useTranslation } from "react-i18next";
import { RocketIcon } from "./RocketIcon";
import { motion } from "framer-motion";

export const RocketButton = () => {
  const { activeSection, setActiveSection, sectionIds } = useActiveSection();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) return null;

  const getNextSection = () => {
    const currentIndex = sectionIds.indexOf(activeSection);
    if (currentIndex === -1 || sectionIds.length === 0) return "home";
    const nextIndex =
      currentIndex === sectionIds.length - 1 ? 0 : currentIndex + 1;
    return sectionIds[nextIndex];
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const next = getNextSection();
    const section = document.querySelector(`#${next}`);
    if (section) {
      document.body.classList.add("scrolling-with-rocket");
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(next);
      setTimeout(
        () => document.body.classList.remove("scrolling-with-rocket"),
        1000
      );
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 30,
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Typography
          sx={{
            position: "absolute",
            bottom: 70,
            right: 0,
            color: "primary.main",
            fontSize: "1rem",
            transform: "rotate(-45deg)",
            textShadow: "0 0 6px rgba(255,255,255,0.3)",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {t("goNext")}
        </Typography>

        <RocketIcon onClick={handleClick} nextSection={getNextSection()} />
      </motion.div>
    </Box>
  );
};
