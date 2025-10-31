import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useActiveSection } from "../../../context/ActiveSectionProvider/ActiveSectionProvider";
import { useNavLinks } from "./hooks/useNavLinks";
import { MobileDrawer } from "./components/MobileDrawer";
import { LanguageSwitcher } from "./components/LanguageSwitch";

export const Navbar = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const navLinks = useNavLinks();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleScroll = (id: string) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(0, 0, 0, 0.8)",
          px: { xs: 2, lg: 10 },
          py: 1,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => handleScroll("home")}
          >
            <img
              src="/img/logo.svg"
              alt="logo"
              style={{ width: 28, height: 28, marginRight: 10 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20 }}>
              Adrian Miernik{" "}
              <span style={{ color: "#808080" }}>| Portfolio</span>
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                sx={{
                  color: activeSection === link.id ? "#fff" : "#888",
                  fontSize: 18,
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { color: "#fff" },
                }}
              >
                {t(`navbar.${link.id}`)}
              </Button>
            ))}

            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
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
