import { Box } from "@mui/material";

type Props = {
  exp: {
    img: string;
    title: string;
  };
  index: number;
  total: number;
  showIcons: boolean;
  onClick: () => void;
};

export const ExperienceCard = ({
  exp,
  index,
  total,
  showIcons,
  onClick,
}: Props) => {
  const isTop = index % 2 === 0;

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: `${(index / (total - 1)) * 100}%`,
        top: isTop ? "calc(50% - 140px)" : "calc(50% + 40px)",
        transform: "translateX(-50%)",
        cursor: "pointer",
        opacity: showIcons ? 1 : 0,
        transformOrigin: "center",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        transitionDelay: `${(index + 1) * 0.1}s`,
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
    </Box>
  );
};
