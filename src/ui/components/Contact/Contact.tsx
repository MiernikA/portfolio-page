import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Stack, Snackbar, Alert, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { InfoCard } from "./components/InfoCard";
import { ContactCard } from "./components/ContactCard";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const { t } = useTranslation();
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down("lg"));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Adrian",
          from_email: form.email,
          to_email: "adrianmiernik@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSnackbar({
            open: true,
            message: t("contact.snackbar.success"),
            severity: "success",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setSnackbar({
            open: true,
            message: t("contact.snackbar.error"),
            severity: "error",
          });
        }
      );
  };

  const handleCloseSnackbar = (
    _?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <SectionLayout
      id="contact"
      subtitle={t("contact.subtitle")}
      title={t("navbar.contact")}
    >
      <Stack
        direction={isCompact ? "column" : "row"}
        spacing={6}
        alignItems="stretch"
        sx={{
          mt: 2,
          width: "100%",
          "& > *": {
            width: isCompact ? "100%" : "auto",
          },
        }}
      >
        <ContactCard
          form={form}
          loading={loading}
          formRef={formRef}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: isCompact ? "100%" : "30%",
            position: "relative",
            height: "100%",
          }}
        >
          <InfoCard />
        </motion.div>
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SectionLayout>
  );
};
