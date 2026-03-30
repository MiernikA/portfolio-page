import { useTranslation } from "react-i18next";
import { experienceLogos } from "@assets/index";

export type Experience = {
  img: string;
  title: string;
  date: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const useExperiences = (): Experience[] => {
  const { t } = useTranslation();

  return (t("experience.items", { returnObjects: true }) as Experience[]).map(
    (experience) => ({
      ...experience,
      img: experienceLogos[
        experience.img
          .replace("img/experience/", "")
          .replace(".png", "") as keyof typeof experienceLogos
      ],
    })
  );
};
