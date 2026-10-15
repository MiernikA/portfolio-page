import { useTranslation } from "react-i18next";
import { projectPreviews } from "@assets/index";
import type { Project } from "../utils/types";
import { projectDemoLinks } from "../utils/projectDemoLinks";

export const useProjects = (): { projects: Project[] } => {
  const { t } = useTranslation();
  const projects = (t("projects.items", { returnObjects: true }) as Project[]).map(
    (project) => {
      const projectId = project.image
        ?.replace("img/projects/", "")
        .replace(".gif", "");

      return {
        ...project,
        image: projectId
          ? projectPreviews[projectId as keyof typeof projectPreviews]
          : undefined,
        demoLink: projectId ? projectDemoLinks[projectId] : undefined,
      };
    }
  );

  return { projects };
};
