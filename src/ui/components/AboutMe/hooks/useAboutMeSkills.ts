import { useTranslation } from "react-i18next";
import { aboutIcons } from "@assets/index";

export const useAboutMeSkills = () => {
  const { t } = useTranslation();

  return [
    { title: t("about.tiles.sdlc"), icon: aboutIcons.sdlc },
    { title: t("about.tiles.knowledge"), icon: aboutIcons.knowledge },
    { title: t("about.tiles.communicative"), icon: aboutIcons.communicative },
    { title: t("about.tiles.ui"), icon: aboutIcons.ui },
    { title: t("about.tiles.scrum"), icon: aboutIcons.scrum },
    { title: t("about.tiles.tech"), icon: aboutIcons.tech },
  ];
};
