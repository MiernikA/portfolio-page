import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./config/styles/theme";
import "./config/i18n";
import "./config/styles/fonts/fonts.css";
import { ActiveSectionProvider } from "./context/ActiveSectionProvider/ActiveSectionProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ActiveSectionProvider>
          <App />
        </ActiveSectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
