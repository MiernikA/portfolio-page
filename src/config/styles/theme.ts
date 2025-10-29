import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Audiowide", Consolas, sans-serif',
  },
  palette: {
    mode: "dark",
    primary: { main: "#f78c0a", contrastText: "#ddd" },
  },
});
