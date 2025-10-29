import { useTranslation } from "react-i18next";

export const useAboutMeSkills = () => {
  const { t } = useTranslation();

  return [
    { title: t("about.tiles.sdlc"), icon: "/img/ab-icons/sdlc.png" },
    { title: t("about.tiles.knowledge"), icon: "/img/ab-icons/knowledge.png" },
    { title: t("about.tiles.communicative"), icon: "/img/ab-icons/comm.png" },
    { title: t("about.tiles.ui"), icon: "/img/ab-icons/ui.png" },
    { title: t("about.tiles.scrum"), icon: "/img/ab-icons/scrum.png" },
    { title: t("about.tiles.tech"), icon: "/img/ab-icons/tech.png" },
  ];
};
