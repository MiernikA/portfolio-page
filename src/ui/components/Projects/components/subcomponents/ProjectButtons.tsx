import { Stack, IconButton, Tooltip } from "@mui/material";
import { PlayArrow, GitHub } from "@mui/icons-material";
import type { ReactElement } from "react";

type ButtonConfig = {
  title: string;
  icon: ReactElement;
  link?: string;
  gradient: string;
  shadow: string;
  hoverShadow: string;
};

type Props = {
  demoLink?: string;
  codeLink?: string;
};

export const ProjectButtons = ({ demoLink, codeLink }: Props) => {
  const buttons: ButtonConfig[] = [
    {
      title: "Play demo",
      icon: <PlayArrow sx={{ fontSize: 24 }} />,
      link: demoLink,
      gradient: "linear-gradient(145deg, #f78c0a, #ffb84d)",
      shadow:
        "inset 2px 2px 5px rgba(255,255,255,0.4), inset -3px -3px 6px rgba(0,0,0,0.3), 0 3px 10px rgba(247,140,10,0.4)",
      hoverShadow:
        "inset 1px 1px 3px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.3), 0 4px 14px rgba(247,140,10,0.6)",
    },
    {
      title: "Check repo",
      icon: <GitHub sx={{ fontSize: 22 }} />,
      link: codeLink,
      gradient: "linear-gradient(145deg, #111, #000)",
      shadow:
        "inset 2px 2px 5px rgba(255,255,255,0.08), inset -3px -3px 6px rgba(0,0,0,0.6), 0 3px 10px rgba(0,0,0,0.6)",
      hoverShadow:
        "inset 1px 1px 3px rgba(255,255,255,0.1), inset -2px -2px 4px rgba(0,0,0,0.6), 0 4px 14px rgba(255,255,255,0.3)",
    },
  ];

  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
      }}
    >
      {buttons
        .filter(({ link }) => !!link)
        .map(({ title, icon, link, gradient, shadow, hoverShadow }) => (
          <Tooltip key={title} title={title} arrow>
            <IconButton
              onClick={() => window.open(link, "_blank")}
              sx={{
                width: 44,
                height: 44,
                background: gradient,
                color: "#fff",
                borderRadius: "50%",
                boxShadow: shadow,
                "&:hover": { boxShadow: hoverShadow },
              }}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
    </Stack>
  );
};
