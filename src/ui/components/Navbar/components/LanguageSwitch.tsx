import { IconButton, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { languageFlags } from "@assets/index";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Box sx={{ display: "flex", gap: 1.5, ml: 2 }}>
      <IconButton
        onClick={() => i18n.changeLanguage("pl")}
        sx={{
          opacity: i18n.language === "pl" ? 1 : 0.6,
          p: 1,
        }}
      >
        <img
          src={languageFlags.pl}
          alt="Polish"
          style={{ width: 28, height: 28 }}
        />
      </IconButton>
      <IconButton
        onClick={() => i18n.changeLanguage("en")}
        sx={{
          opacity: i18n.language === "en" ? 1 : 0.6,
          p: 1,
        }}
      >
        <img
          src={languageFlags.en}
          alt="English"
          style={{ width: 28, height: 28 }}
        />
      </IconButton>
    </Box>
  );
};
