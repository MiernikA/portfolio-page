import { IconButton, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Box sx={{ display: "flex", gap: 1.5, ml: 2 }}>
      <IconButton
        onClick={() => i18n.changeLanguage("pl")}
        sx={{ opacity: i18n.language === "pl" ? 1 : 0.6 }}
      >
        <img
          src="/img/lang/pl_lang.svg"
          alt="Polish"
          style={{ width: 34, height: 34 }}
        />
      </IconButton>
      <IconButton
        onClick={() => i18n.changeLanguage("en")}
        sx={{ opacity: i18n.language === "en" ? 1 : 0.6 }}
      >
        <img
          src="/img/lang/eng_lang.svg"
          alt="English"
          style={{ width: 34, height: 34 }}
        />
      </IconButton>
    </Box>
  );
};
