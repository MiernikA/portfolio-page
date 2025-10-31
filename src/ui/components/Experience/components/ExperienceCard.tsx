import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  exp: {
    img: string;
    title: string;
  };
  index: number;
  total: number;
  showIcons: boolean;
  onClick: () => void;
  isMobile: boolean;
};

export const ExperienceCard = ({
  exp,
  index,
  total,
  showIcons,
  onClick,
  isMobile,
}: Props) => {
  const isTop = index % 2 === 0;
  const { t } = useTranslation();

  return (
    <Box
      onClick={onClick}
      sx={{
        position: isMobile ? "static" : "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        left: isMobile ? "auto" : `${(index / (total - 1)) * 100}%`,
        top: isMobile
          ? "auto"
          : isTop
            ? "calc(50% - 140px)"
            : "calc(50% + 40px)",
        transform: isMobile ? "none" : "translateX(-50%)",
        cursor: "pointer",
        opacity: showIcons ? 1 : 0,
        transformOrigin: "center",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        transitionDelay: `${(index + 1) * 0.1}s`,
        mb: isMobile ? 3 : 0,
      }}
    >
      <Box
        component="img"
        src={exp.img}
        alt={exp.title}
        sx={{
          background: "#fff",
          width: 220,
          height: 80,
          borderRadius: 5,
          objectFit: "contain",
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: (theme) => `0 10px 10px ${theme.palette.primary.main}99`,
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{
          mt: 1,
          color: (theme) => theme.palette.text.secondary,
          opacity: 0.8,
        }}
      >
        {t("experience.clickToSeeMore")}
      </Typography>
    </Box>
  );
};
