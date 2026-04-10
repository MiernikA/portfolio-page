import { Box, Typography } from "@mui/material";
import { TiltCard } from "./componenets/TiltCard";
import { useAboutMeSkills } from "./hooks/useAboutMeSkills";
import { Trans, useTranslation } from "react-i18next";
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";

export const AboutMe = () => {
  const { t } = useTranslation();
  const skills = useAboutMeSkills();

  return (
    <SectionLayout
      id="about"
      subtitle={t("about.overview")}
      title={t("navbar.about")}
    >
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.9,
          fontSize: { xs: "1rem", md: "1.05rem", xl: "1.15rem" },
          textAlign: { xs: "left", md: "justify" },
          letterSpacing: 0.5,
          color: "primary.contrastText",
          mb: 4,
        }}
      >
        <Trans
          i18nKey="about.content"
          components={{
            orange: (
              <Box
                component="span"
                sx={{ color: "primary.main", fontWeight: 500 }}
              />
            ),
            br: <br />,
          }}
        />
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 2, md: 3 },

          mt: 2,
        }}
      >
        {skills.map((skill, index) => (
          <TiltCard
            key={index}
            index={index}
            title={skill.title}
            icon={skill.icon}
          />
        ))}
      </Box>
    </SectionLayout>
  );
};
