import { useTranslation } from "react-i18next";
import { projectPreviews } from "@assets/index";
import type { Project } from "../utils/types";

export const useProjects = (): { projects: Project[] } => {
  const { t } = useTranslation();
  const projects = (t("projects.items", { returnObjects: true }) as Project[]).map(
    (project) => ({
      ...project,
      image: project.image
        ? projectPreviews[
            project.image
              .replace("img/projects/", "")
              .replace(".gif", "") as keyof typeof projectPreviews
          ]
        : undefined,
    })
  );

  return { projects };
};
