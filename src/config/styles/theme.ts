import { createTheme } from "@mui/material/styles";

export const responsiveTextColor = "#fff" as const;

export const responsiveMutedTextColor = "rgba(255,255,255,0.85)" as const;

export const theme = createTheme({
  typography: {
    fontFamily: '"Audiowide", Consolas, sans-serif',
  },
  palette: {
    mode: "dark",
    primary: { main: "#f78c0a", contrastText: "#ddd" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "#fff",
        },
      },
    },
  },
});
