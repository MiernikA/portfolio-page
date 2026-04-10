import { Box, useTheme } from "@mui/material";

export const VerticalDivider = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Box
        sx={{
          width: 29,
          height: 5,
          borderRadius: 1,
          bgcolor: "primary.main",
          mb: -0.5,
        }}
      />
      <Box
        sx={{
          width: 5,
          height: { lg: 220, xl: 260 },
          borderRadius: 1,
          background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, rgba(0, 0, 0, 0) 100%)`,
        }}
      />
    </Box>
  );
};
