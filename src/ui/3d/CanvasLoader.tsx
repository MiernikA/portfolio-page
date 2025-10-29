import { useTheme } from "@mui/material/styles";
import { Html, useProgress } from "@react-three/drei";
import { Box, CircularProgress, Typography } from "@mui/material";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  const theme = useTheme();

  return (
    <Html as="div" center>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{ color: theme.palette.primary.main }}
        />
        <Typography
          variant="body2"
          sx={{ mt: 3, color: "#fff", fontWeight: 800 }}
        >
          {progress.toFixed(2)}%
        </Typography>
      </Box>
    </Html>
  );
};
