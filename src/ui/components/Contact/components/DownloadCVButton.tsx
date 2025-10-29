import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DownloadIcon from "@mui/icons-material/Download";

export const DownloadCVButton = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleDownload = (lang: "pl" | "eng") => {
    const filePath = `/cv/cv_${lang}.pdf`;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = `CV_Adrian_Miernik_${lang.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
        onClick={handleClick}
        sx={{
          color: "primary.main",
          borderColor: "primary.main",
          fontWeight: 600,
          textTransform: "none",
          fontSize: "1rem",
          borderRadius: 2,
          px: 3,
          py: 1,
          mb: 2,
          minWidth: 180,
          "&:hover": {
            backgroundColor: "rgba(247,140,10,0.1)",
            borderColor: "primary.main",
          },
        }}
      >
        {t("contact.downloadCV")}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(20,20,20,0.95)",
            border: (t) => `1px solid ${t.palette.primary.main}60`,
            color: "white",
            borderRadius: 2,
          },
        }}
      >
        <MenuItem onClick={() => handleDownload("pl")}>
          {t("contact.cvPolish")}
        </MenuItem>
        <MenuItem onClick={() => handleDownload("eng")}>
          {t("contact.cvEnglish")}
        </MenuItem>
      </Menu>
    </>
  );
};
