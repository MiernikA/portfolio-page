import { useTranslation } from "react-i18next";
import type { Project } from "../utils/types";

export const useProjects = (): { projects: Project[] } => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as Project[];

  return { projects };
};
