import { Box, Stack, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { GithubCard } from "./components/subcomponents/GithubCard";
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { useTranslation } from "react-i18next";
import { useProjects } from "./hooks/useProjects";

export const Projects = () => {
  const { t } = useTranslation();
  const { projects } = useProjects();
  const itemsPerPage = 3;
  const totalPages = Math.ceil((projects.length + 1) / itemsPerPage);
  const [page, setPage] = useState(0);

  const nextPage = () => page < totalPages - 1 && setPage((p) => p + 1);
  const prevPage = () => page > 0 && setPage((p) => p - 1);

  const allItems = [...projects, { name: "GitHubCard" }];
  const currentItems = allItems.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <SectionLayout
      id="projects"
      subtitle={t("projects.subtitle")}
      title={t("navbar.projects")}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
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
                flex: "1 1 calc(33.333% - 2rem)",
                maxWidth: 450,
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

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <IconButton
            onClick={prevPage}
            disabled={page === 0}
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              color: "primary.main",
              "&:hover": { bgcolor: "rgba(255,200,61,0.2)" },
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>

          <Typography variant="body2" color="primary.main">
            {page + 1} / {totalPages}
          </Typography>

          <IconButton
            onClick={nextPage}
            disabled={page === totalPages - 1}
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              color: "primary.main",
              "&:hover": { bgcolor: "rgba(255,200,61,0.2)" },
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </SectionLayout>
  );
};
