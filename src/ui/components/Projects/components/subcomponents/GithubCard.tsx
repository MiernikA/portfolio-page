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
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const isMediumScreen = !isMobile && !isLargeScreen;

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: "100%",
        height: isMobile ? "auto" : isMediumScreen ? 450 : 600,
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
      <GitHub sx={{ fontSize: { xs: 68, md: 64, lg: 68, xl: 84 }, mb: isMediumScreen ? 1.25 : 2 }} />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: isMediumScreen ? 1.25 : 2,
          fontSize: { xs: "1.2rem", md: "1.15rem", lg: "1.22rem", xl: "1.3rem" },
        }}
      >
        {t("projects.githubCard.title")}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.85)",
          fontSize: { xs: "1rem", md: "0.92rem", lg: "0.98rem", xl: "1.05rem" },
          px: isMediumScreen ? 2 : 3,
          display: isMediumScreen ? "-webkit-box" : "block",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: isMediumScreen ? 5 : "unset",
          overflow: "hidden",
          "&:hover": { color: "primary.main" },
        }}
      >
        {t("projects.githubCard.subtitle")}
      </Typography>
    </Box>
  );
};
