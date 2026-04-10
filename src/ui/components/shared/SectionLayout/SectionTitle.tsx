import { Typography, Box } from "@mui/material";
import type { ReactNode } from "react";

type SectionTitleProps = {
  subtitle: string;
  title: string;
  titleAside?: ReactNode;
};

export const SectionTitle = ({
  subtitle,
  title,
  titleAside,
}: SectionTitleProps) => (
  <Box>
    <Typography
      sx={{
        textTransform: "uppercase",
        mt: { xs: 0, sm: 2 },
        color: "primary.main",
        fontWeight: 600,
        letterSpacing: 1,
      }}
    >
      {subtitle}
    </Typography>

    <Box
      sx={{
        mb: 2,
        display: "flex",
        alignItems: { xs: "flex-end", md: "center" },
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          letterSpacing: 0.5,
          fontSize: { xs: "2.2rem", sm: undefined },
        }}
      >
        {title}
      </Typography>

      {titleAside}
    </Box>
  </Box>
);
