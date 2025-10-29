import { Typography, Box } from "@mui/material";

type SectionTitleProps = {
  subtitle: string;
  title: string;
};

export const SectionTitle = ({ subtitle, title }: SectionTitleProps) => (
  <Box>
    <Typography
      sx={{
        textTransform: "uppercase",
        mt: 2,
        color: "primary.main",
        fontWeight: 600,
        letterSpacing: 1,
      }}
    >
      {subtitle}
    </Typography>

    <Typography
      variant="h2"
      sx={{
        fontWeight: 800,
        mb: 2,
        letterSpacing: 0.5,
      }}
    >
      {title}
    </Typography>
  </Box>
);
