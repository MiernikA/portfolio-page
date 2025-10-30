import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GitHub, Phone, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DownloadCVButton } from "./DownloadCVButton";

export const InfoCard = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ width: isMobile ? "100%" : "30rem" }}
    >
      <Card
        sx={{
          background: "rgba(0,0,0,0.8)",
          border: (t) => `2px solid ${t.palette.primary.main}60`,
          boxShadow: (t) => `0 0 25px ${t.palette.primary.main}25`,
          borderRadius: 3,
          height: isMobile ? "auto" : 600,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: (t) => `0 0 35px ${t.palette.primary.main}60`,
          },
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            mt: 5,
            gap: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {t("contact.details")}
          </Typography>

          <Stack spacing={4} alignItems="center">
            <Stack direction="row" spacing={2} alignItems="center">
              <Phone color="primary" />
              <Typography sx={{ fontSize: "1.25rem", fontWeight: 500 }}>
                +48 536 086 931
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Email color="primary" />
              <Typography sx={{ fontSize: "1.25rem", fontWeight: 500 }}>
                adrianmiernik@gmail.com
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "primary.main" },
                transition: "color 0.2s ease",
              }}
              onClick={() =>
                window.open("https://github.com/MiernikA", "_blank")
              }
            >
              <GitHub color="primary" />
              <Typography sx={{ fontSize: "1.25rem", fontWeight: 500 }}>
                github.com/MiernikA
              </Typography>
            </Stack>
          </Stack>
        </CardContent>

        <Box sx={{ pb: 4 }}>
          <DownloadCVButton />
        </Box>
      </Card>
    </motion.div>
  );
};
