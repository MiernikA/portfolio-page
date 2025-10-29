import { useTranslation } from "react-i18next";

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

  return t("experience.items", { returnObjects: true }) as Experience[];
};
