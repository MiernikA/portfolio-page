import { Box, Typography, Container, Stack } from "@mui/material";
import { GlobeCanvas } from "../../3d/models/GlobeCanvas";
import { useTranslation } from "react-i18next";
import { VerticalDivider } from "./components/VericalDivider";

export const Header = () => {
  const { t } = useTranslation();
  const titles = [t("header.sub1"), t("header.sub2"), t("header.sub3")];

  return (
    <Box component="section" id="home">
      <Container
        maxWidth="xl"
        sx={{
          position: "absolute",
          inset: 0,
          top: { xs: 100, lg: 130 },
          display: "flex",
          gap: 2,
        }}
      >
        <VerticalDivider />

        <Box sx={{ zIndex: 2, ml: { xs: 1, lg: 3 } }}>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.8rem", lg: "4.2rem" },
              letterSpacing: 1,
            }}
          >
            {t("header.greeting")}{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Adrian
            </Box>
          </Typography>

          <Stack spacing={0.5}>
            {titles.map((title, index) => (
              <Typography
                key={index}
                variant="h5"
                sx={{
                  color: "primary.contrastText",
                  lineHeight: 1.7,
                  fontSize: { xs: "1.2rem", lg: "1.6rem" },
                }}
              >
                {title}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
      <GlobeCanvas />
    </Box>
  );
};
