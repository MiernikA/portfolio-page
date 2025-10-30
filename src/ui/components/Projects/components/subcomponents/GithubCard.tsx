import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export const GithubCard = () => {
  const handleClick = () => {
    window.open("https://github.com/MiernikA?tab=repositories", "_blank");
  };
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: isMobile ? "100%" : 450,
        height: isMobile ? "auto" : 600,
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 2,
        overflow: "hidden",
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        boxShadow: (theme) => `0 10px 10px ${theme.palette.primary.main}40`,
        bgcolor: "#000",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: (theme) => `0 20px 20px ${theme.palette.primary.main}50`,
          color: "primary.main",
        },
      }}
    >
      <GitHub sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        {t("projects.githubCard.title")}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "1rem",
          px: 3,
          "&:hover": { color: "primary.main" },
        }}
      >
        {t("projects.githubCard.subtitle")}
      </Typography>
    </Box>
  );
};
