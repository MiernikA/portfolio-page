import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logoUrl } from "@assets/index";

import { useNavLinks } from "./hooks/useNavLinks";
import { MobileDrawer } from "./components/MobileDrawer";
import { LanguageSwitcher } from "./components/LanguageSwitch";
import { useActiveSection } from "../../../context/ActiveSectionProvider/useActiveSection";
import { responsiveTextColor } from "../../../config/styles/theme";

export const Navbar = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const navLinks = useNavLinks();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const isCompactDesktop = useMediaQuery(
    "(min-width:1536px) and (max-width:1800px)",
  );
  const showBrandText = isDesktop;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleScroll = (id: string) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(0, 0, 0, 0.8)",
          px: {
            xs: 2,
            md: 3,
            lg: 4,
            xl: isCompactDesktop ? 4 : 10,
          },
          py: 1,
          boxShadow: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, md: 60, xl: isCompactDesktop ? 60 : 64 },
            gap: { xs: 1, md: 1.5, xl: isCompactDesktop ? 1.5 : 3 },
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onClick={() => handleScroll("home")}
          >
            <img
              src={logoUrl}
              alt="logo"
              style={{
                width: isCompactDesktop ? 24 : 28,
                height: isCompactDesktop ? 24 : 28,
                marginRight: showBrandText ? 8 : 0,
              }}
            />
            {showBrandText && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 18, xl: 20 },
                  whiteSpace: "nowrap",
                }}
              >
                Adrian Miernik
                <Box
                  component="span"
                  sx={{ color: "#808080", display: { xs: "none", xl: "inline" } }}
                >
                  {" "}
                  | Portfolio
                </Box>
              </Typography>
            )}
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: 1.25, lg: 1.75, xl: isCompactDesktop ? 1.25 : 2.5 },
              minWidth: 0,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                sx={{
                  color: activeSection === link.id ? responsiveTextColor : "#888",
                  fontSize: {
                    md: 15,
                    lg: 16,
                    xl: isCompactDesktop ? 16 : 18,
                  },
                  fontWeight: 600,
                  textTransform: "none",
                  minWidth: "auto",
                  px: { md: 0.75, lg: 1, xl: isCompactDesktop ? 1 : 1.5 },
                  whiteSpace: "nowrap",
                  "&:hover": { color: responsiveTextColor },
                }}
              >
                {t(`navbar.${link.id}`)}
              </Button>
            ))}

            <LanguageSwitcher compact={!isDesktop || isCompactDesktop} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 240, background: "#000" },
        }}
      >
        <MobileDrawer
          onClose={handleDrawerToggle}
          handleScroll={handleScroll}
        />
      </Drawer>
    </>
  );
};
