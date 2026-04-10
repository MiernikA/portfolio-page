import { useRef, useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ProjectTags } from "./subcomponents/ProjectTags";
import { ProjectButtons } from "./subcomponents/ProjectButtons";
import { GithubCard } from "./subcomponents/GithubCard";
import type { Project } from "../utils/types";
import { Trans } from "react-i18next";

type Props = {
  project: Project;
  index: number;
  isGithubCard?: boolean;
};

export const ProjectCard = ({ project, index, isGithubCard }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isCompact = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const transitionDelay = `${index * 0.1}s`;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
        transitionDelay,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: isMobile ? "auto" : isCompact ? 560 : 600,
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          overflow: "hidden",
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          boxShadow: (theme) => `0 10px 10px ${theme.palette.primary.main}40`,
          bgcolor: "#000",
        }}
      >
        {isGithubCard ? (
          <GithubCard />
        ) : (
          <>
            {project.image && (
              <Box
                sx={{
                  flex: isMobile ? "0 0 220px" : "0 0 35%",
                  borderBottom: (theme) =>
                    `2px solid ${theme.palette.primary.main}`,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <ProjectButtons
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                />
              </Box>
            )}

            <Box
              sx={{
                flex: 1,
                color: "#fff",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "1.2rem", md: "1.3rem" } }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.4,
                    color: "rgba(255,255,255,0.85)",
                    whiteSpace: "pre-line",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  <Trans
                    i18nKey={project.description}
                    components={{
                      orange: (
                        <Box
                          component="span"
                          sx={{ color: "primary.main", fontWeight: 500 }}
                        />
                      ),
                      br: <Box component="span" display="block" my={1.5} />,
                    }}
                  />
                </Typography>
              </Box>
              {!isMobile && <ProjectTags tags={project.tags} />}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
