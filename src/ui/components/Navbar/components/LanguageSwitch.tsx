import { IconButton, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { languageFlags } from "@assets/index";

type Props = {
  compact?: boolean;
};

export const LanguageSwitcher = ({ compact = false }: Props) => {
  const { i18n } = useTranslation();

  return (
    <Box sx={{ display: "flex", gap: compact ? 0.5 : 1.5, ml: compact ? 0.5 : 2 }}>
      <IconButton
        onClick={() => i18n.changeLanguage("pl")}
        sx={{
          opacity: i18n.language === "pl" ? 1 : 0.6,
          p: compact ? 0.5 : 1,
        }}
      >
        <img
          src={languageFlags.pl}
          alt="Polish"
          style={{ width: compact ? 24 : 28, height: compact ? 24 : 28 }}
        />
      </IconButton>
      <IconButton
        onClick={() => i18n.changeLanguage("en")}
        sx={{
          opacity: i18n.language === "en" ? 1 : 0.6,
          p: compact ? 0.5 : 1,
        }}
      >
        <img
          src={languageFlags.en}
          alt="English"
          style={{ width: compact ? 24 : 28, height: compact ? 24 : 28 }}
        />
      </IconButton>
    </Box>
  );
};
