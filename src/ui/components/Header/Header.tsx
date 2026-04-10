import { Box, Typography, Container, Stack } from "@mui/material";
import { GlobeCanvas } from "../../3d/models/GlobeCanvas";
import { useTranslation } from "react-i18next";
import { VerticalDivider } from "./components/VericalDivider";

export const Header = () => {
  const { t } = useTranslation();
  const titles = [t("header.sub1"), t("header.sub2"), t("header.sub3")];

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: { xs: "100dvh", sm: "100vh" },
        scrollMarginTop: { xs: "72px", sm: 0 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "absolute",
          inset: 0,
          top: { xs: 92, md: 108, xl: 130 },
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: 1, md: 2 },
        }}
      >
        <VerticalDivider />

        <Box
          sx={{
            zIndex: 2,
            ml: { xs: 1, md: 2, lg: 3 },
            maxWidth: { xs: "100%", md: "55%", xl: "unset" },
            pr: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.8rem", sm: "3.4rem", lg: "4.2rem" },
              letterSpacing: 1,
              lineHeight: 1.05,
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
                  fontSize: { xs: "1.2rem", md: "1.35rem", lg: "1.6rem" },
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
