import {
  Typography,
  Chip,
  Fade,
  Modal,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";

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

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={open}>
        <Stack
          sx={{
            bgcolor: "#121212",
            borderRadius: 8,
            p: 4,
            maxWidth: 800,
            outline: "none",
            color: "#fff",
          }}
        >
          {experience && (
            <>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 1,
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
                      color: "#fff",
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
