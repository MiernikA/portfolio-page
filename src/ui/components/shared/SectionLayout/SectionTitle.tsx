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
        mt: { xs: 0, sm: 2 },
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
        fontSize: { xs: "2.2rem", sm: undefined },
      }}
    >
      {title}
    </Typography>
  </Box>
);
