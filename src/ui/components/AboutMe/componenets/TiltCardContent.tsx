import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

type Props = {
  title: string;
  icon: string;
};

export const TiltCardContent = ({ title, icon }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        background: `radial-gradient(circle at top, ${theme.palette.primary.main}22, rgba(0,0,0,0.9))`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        p: 2,
        "&:hover": {
          boxShadow: `0 12px 30px ${theme.palette.primary.main}99`,
        },
      }}
    >
      <Box
        sx={{
          width: "85%",
          height: "45%",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(0,0,0,0.2))",
          mt: 1,
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{
            width: 80,
            height: 80,
            objectFit: "contain",
            filter: `drop-shadow(0 0 10px ${theme.palette.primary.main}B3)`,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          color: "primary.contrastText",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: 0.4,
          textAlign: "center",
          textShadow: `0 0 6px ${theme.palette.primary.main}`,
          mt: 1,
        }}
      >
        {title}
      </Typography>

      {!isMobile && (
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: "1.5rem",
            textShadow: `0 0 6px ${theme.palette.primary.main}`,
            mb: 1,
          }}
        >
          *
        </Typography>
      )}
    </Box>
  );
};
