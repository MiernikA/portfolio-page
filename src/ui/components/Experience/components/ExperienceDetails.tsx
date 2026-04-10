import {
  Typography,
  Chip,
  Fade,
  Modal,
  Stack,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { responsiveTextColor } from "../../../../config/styles/theme";

type Experience = {
  title: string;
  date: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

type Props = {
  open: boolean;
  experience: Experience | null;
  onClose: () => void;
};

export const ExperienceDetails = ({ open, experience, onClose }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: isMobile ? "stretch" : "center",
        justifyContent: "center",
      }}
    >
      <Fade in={open}>
        <Stack
          sx={{
            bgcolor: "#121212",
            borderRadius: isMobile ? 0 : 8,
            p: isMobile ? 3 : 4,
            width: isMobile ? "100%" : "min(750px, 92vw)",
            height: isMobile ? "100vh" : "auto",
            maxHeight: isMobile ? "100vh" : "88vh",
            overflowY: "auto",
            outline: "none",
            color: responsiveTextColor,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "primary.main",
              zIndex: 10,
            }}
          >
            <Close />
          </IconButton>

          {experience && (
            <>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 1,
                  pr: 5,
                }}
              >
                {experience.title}
              </Typography>

              <Typography sx={{ mb: 2, opacity: 0.8, letterSpacing: 1 }}>
                {experience.date}
              </Typography>

              <Typography sx={{ mb: 4, opacity: 0.9 }}>
                {experience.description}
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {t("experience.keyResponsibilities")}
              </Typography>

              <List
                sx={{
                  mb: 3,
                  listStyleType: "disc",
                  pl: 3,
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                {experience.responsibilities.map((r, i) => (
                  <ListItem
                    key={i}
                    sx={{ py: 1, opacity: 0.9, letterSpacing: 0.5 }}
                  >
                    <Typography variant="body2">{r}</Typography>
                  </ListItem>
                ))}
              </List>

              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                {t("experience.technologies")}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {experience.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    sx={{
                      bgcolor: "#121212",
                      color: responsiveTextColor,
                      letterSpacing: 1,
                      border: (theme) =>
                        `1px solid ${theme.palette.primary.main}`,
                      fontSize: "0.85rem",
                    }}
                  />
                ))}
              </Stack>
            </>
          )}
        </Stack>
      </Fade>
    </Modal>
  );
};
