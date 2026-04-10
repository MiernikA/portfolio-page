import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { ChangeEvent, FormEvent, RefObject } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SendIcon from "@mui/icons-material/Send";
import { responsiveTextColor } from "../../../../config/styles/theme";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  form: FormData;
  loading: boolean;
  formRef: RefObject<HTMLFormElement | null>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent) => void;
};

export const ContactCard = ({
  form,
  loading,
  formRef,
  handleChange,
  handleSubmit,
}: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down("lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          background: "rgba(0,0,0,0.8)",
          border: (t) => `2px solid ${t.palette.primary.main}60`,
          boxShadow: (t) => `0 0 25px ${t.palette.primary.main}25`,
          borderRadius: 3,
          height: isCompact ? "auto" : isLargeScreen ? 520 : 600,
          display: "flex",
          width: "100%",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: (t) => `0 0 35px ${t.palette.primary.main}60`,
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            px: { xs: 1, sm: 2, xl: 2.5 },
            py: { xs: 1, sm: 2, xl: 1.5 },
          }}
        >
          <Typography sx={{ color: responsiveTextColor, mb: 0.5, fontWeight: 600 }}>
            {t("contact.form.nameLabel")}
          </Typography>
          <TextField
            fullWidth
            placeholder={t("contact.form.namePlaceholder")}
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="dense"
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              style: { color: "inherit", borderRadius: "8px" },
            }}
          />

          <Typography sx={{ color: responsiveTextColor, mt: 2, mb: 0.5, fontWeight: 600 }}>
            {t("contact.form.emailLabel")}
          </Typography>
          <TextField
            fullWidth
            placeholder={t("contact.form.emailPlaceholder")}
            name="email"
            value={form.email}
            onChange={handleChange}
            margin="dense"
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              style: { color: "inherit", borderRadius: "8px" },
            }}
          />

          <Typography sx={{ color: responsiveTextColor, mt: 2, mb: 0.5, fontWeight: 600 }}>
            {t("contact.form.messageLabel")}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={isLargeScreen ? 5 : 6}
            placeholder={t("contact.form.messagePlaceholder")}
            name="message"
            value={form.message}
            onChange={handleChange}
            margin="dense"
          />

          <Box sx={{ mt: { xs: 3, xl: 2 }, width: "100%", textAlign: "center" }}>
            <Button
              type="submit"
              variant="outlined"
              startIcon={<SendIcon />}
              sx={{
                color: "primary.main",
                borderColor: "primary.main",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                borderRadius: 2,
                px: 3,
                py: 1.1,
                minWidth: 180,
                "&:hover": {
                  backgroundColor: "rgba(247,140,10,0.1)",
                  borderColor: "primary.main",
                },
              }}
            >
              {loading ? t("contact.form.sending") : t("contact.form.send")}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.form>
  );
};
