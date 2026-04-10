import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { PlayArrow } from "@mui/icons-material";
import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { GithubCard } from "./components/subcomponents/GithubCard";
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { useTranslation } from "react-i18next";
import { useProjects } from "./hooks/useProjects";

export const Projects = () => {
  const { t } = useTranslation();
  const { projects } = useProjects();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const itemsPerPage = isMobile ? 1 : isLargeScreen ? 3 : 2;
  const totalPages = Math.ceil((projects.length + 1) / itemsPerPage);
  const [page, setPage] = useState(0);

  const nextPage = () => page < totalPages - 1 && setPage((p) => p + 1);
  const prevPage = () => page > 0 && setPage((p) => p - 1);

  const allItems = [...projects, { name: "GitHubCard" }];
  const currentItems = allItems.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );
  const navigationButtonStyles = {
    flexShrink: 0,
    width: { xs: 16, md: 14, lg: 16, xl: 20 },
    height: { xs: 132, md: 220, lg: 280 },
    bgcolor: "transparent",
    color: "#ffb22c",
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
    p: 0,
    minWidth: 0,
    transition: "transform 0.2s ease, color 0.2s ease, filter 0.2s ease",
    "&:hover": {
      bgcolor: "transparent",
      color: "#ffd166",
      filter: "drop-shadow(0 0 16px rgba(255, 178, 44, 0.75))",
      transform: "scale(1.06)",
    },
    "&.Mui-disabled": {
      color: "rgba(255, 178, 44, 0.35)",
      bgcolor: "transparent",
      boxShadow: "none",
    },
  };

  return (
    <SectionLayout
      id="projects"
      subtitle={t("projects.subtitle")}
      title={t("navbar.projects")}
      titleAside={
        <Typography
          variant="body2"
          color="primary.main"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.45rem" },
            fontWeight: 700,
            lineHeight: 1,
            mb: { xs: 0.45, md: 0.2 },
          }}
        >
          {page + 1} / {totalPages}
        </Typography>
      }
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        sx={{ mt: 0 }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 980, lg: 1060, xl: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1.25, md: 0.5, lg: 1, xl: 5 },
            mx: "auto",
          }}
        >
          <IconButton
            onClick={prevPage}
            disabled={page === 0}
            sx={{
              display: { xs: "none", md: "inline-flex" },
              mr: { md: 0, lg: 0, xl: 0 },
              ...navigationButtonStyles,
            }}
          >
            <PlayArrow
              sx={{
                fontSize: { md: 82, lg: 90, xl: 116 },
                transform: "rotate(180deg)",
                filter: "drop-shadow(0 0 10px rgba(255, 178, 44, 0.5))",
              }}
            />
          </IconButton>

          <motion.div
            key={page}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
              width: "100%",
            }}
          >
            {currentItems.map((item, index) => (
              <Box
                key={item.name + index}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    md: "1 1 calc(50% - 0.25rem)",
                    xl: "1 1 calc(33.333% - 2rem)",
                  },
                  maxWidth: {
                    xs: "100%",
                    md: 455,
                    lg: 470,
                    xl: 450,
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item.name === "GitHubCard" ? (
                  <GithubCard />
                ) : (
                  <ProjectCard project={item} index={index} />
                )}
              </Box>
            ))}
          </motion.div>

          <IconButton
            onClick={nextPage}
            disabled={page === totalPages - 1}
            sx={{
              display: { xs: "none", md: "inline-flex" },
              ml: { md: 0, lg: 0, xl: 0 },
              ...navigationButtonStyles,
            }}
          >
            <PlayArrow
              sx={{
                fontSize: { md: 82, lg: 90, xl: 116 },
                filter: "drop-shadow(0 0 10px rgba(255, 178, 44, 0.5))",
              }}
            />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            mt: 2,
          }}
        >
          <IconButton
            onClick={prevPage}
            disabled={page === 0}
            sx={navigationButtonStyles}
          >
            <PlayArrow
              sx={{
                fontSize: 68,
                transform: "rotate(180deg)",
                filter: "drop-shadow(0 0 10px rgba(255, 178, 44, 0.5))",
              }}
            />
          </IconButton>

          <IconButton
            onClick={nextPage}
            disabled={page === totalPages - 1}
            sx={navigationButtonStyles}
          >
            <PlayArrow
              sx={{
                fontSize: 68,
                filter: "drop-shadow(0 0 10px rgba(255, 178, 44, 0.5))",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </SectionLayout>
  );
};
