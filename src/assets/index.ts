import logoUrl from "./img/logo.svg";
import aboutCommIcon from "./img/ab-icons/comm.png";
import aboutKnowledgeIcon from "./img/ab-icons/knowledge.png";
import aboutScrumIcon from "./img/ab-icons/scrum.png";
import aboutSdlcIcon from "./img/ab-icons/sdlc.png";
import aboutTechIcon from "./img/ab-icons/tech.png";
import aboutUiIcon from "./img/ab-icons/ui.png";
import experienceAptivLogo from "./img/experience/aptiv.png";
import experienceCodiblySpyroLogo from "./img/experience/codibly-spyro.png";
import experienceCodiblyLogo from "./img/experience/codibly.png";
import experienceEdualyLogo from "./img/experience/edualy.png";
import experienceSolidstudioLogo from "./img/experience/solidstudio.png";
import englishFlagUrl from "./img/lang/eng_lang.svg";
import polishFlagUrl from "./img/lang/pl_lang.svg";
import projectBallsPreview from "./img/projects/balls.gif";
import projectBestiePreview from "./img/projects/bestie.gif";
import projectBotshooterPreview from "./img/projects/botshooter.gif";
import projectMp3Preview from "./img/projects/mp3.gif";
import projectPhysicsPreview from "./img/projects/physics.gif";
import projectSnakePreview from "./img/projects/snake.gif";
import projectWeatherPreview from "./img/projects/weather.gif";
import skillBootstrapIcon from "./img/skills/bootstrap.png";
import skillCssIcon from "./img/skills/css.png";
import skillDockerIcon from "./img/skills/docker.png";
import skillFigmaIcon from "./img/skills/figma.png";
import skillGitIcon from "./img/skills/git.png";
import skillHtmlIcon from "./img/skills/html.png";
import skillJavaIcon from "./img/skills/java.png";
import skillJavascriptIcon from "./img/skills/javascript.png";
import skillJestIcon from "./img/skills/jest.png";
import skillJetbrainsIcon from "./img/skills/jetbrains.png";
import skillMuiIcon from "./img/skills/mui.png";
import skillMysqlIcon from "./img/skills/mysql.png";
import skillNextIcon from "./img/skills/next.png";
import skillNodejsIcon from "./img/skills/nodejs.png";
import skillOfficeIcon from "./img/skills/office.png";
import skillPhotoshopIcon from "./img/skills/photoshop.png";
import skillPostgresIcon from "./img/skills/postgres.png";
import skillPythonIcon from "./img/skills/python.png";
import skillReactjsIcon from "./img/skills/reactjs.png";
import skillSpringBootIcon from "./img/skills/springBoot.png";
import skillTailwindIcon from "./img/skills/tailwind.png";
import skillThreejsIcon from "./img/skills/threejs.png";
import skillTypescriptIcon from "./img/skills/typescript.png";
import skillViteIcon from "./img/skills/vite.png";
import cvEnglishUrl from "./cv/miernik_cv_eng.pdf";
import cvPolishUrl from "./cv/miernik_cv_pl.pdf";
import planetSceneUrl from "./models/planet/scene_optimized.glb?url";
import rockAoMapUrl from "./models/rock_texture/Rock058_1K-JPG_AmbientOcclusion.jpg";
import rockColorMapUrl from "./models/rock_texture/Rock058_1K-JPG_Color.jpg";
import rockNormalMapUrl from "./models/rock_texture/Rock058_1K-JPG_NormalGL.jpg";
import rockRoughnessMapUrl from "./models/rock_texture/Rock058_1K-JPG_Roughness.jpg";

export const aboutIcons = {
  communicative: aboutCommIcon,
  knowledge: aboutKnowledgeIcon,
  scrum: aboutScrumIcon,
  sdlc: aboutSdlcIcon,
  tech: aboutTechIcon,
  ui: aboutUiIcon,
} as const;

export const cvFiles = {
  eng: cvEnglishUrl,
  pl: cvPolishUrl,
} as const;

export const experienceLogos = {
  aptiv: experienceAptivLogo,
  codibly: experienceCodiblyLogo,
  "codibly-spyro": experienceCodiblySpyroLogo,
  edualy: experienceEdualyLogo,
  solidstudio: experienceSolidstudioLogo,
} as const;

export const languageFlags = {
  en: englishFlagUrl,
  pl: polishFlagUrl,
} as const;

export const projectPreviews = {
  balls: projectBallsPreview,
  bestie: projectBestiePreview,
  botshooter: projectBotshooterPreview,
  mp3: projectMp3Preview,
  physics: projectPhysicsPreview,
  snake: projectSnakePreview,
  weather: projectWeatherPreview,
} as const;

export const rockTextureUrls: string[] = [
  rockColorMapUrl,
  rockNormalMapUrl,
  rockRoughnessMapUrl,
  rockAoMapUrl,
];

export const skillIcons = {
  bootstrap: skillBootstrapIcon,
  css: skillCssIcon,
  docker: skillDockerIcon,
  figma: skillFigmaIcon,
  git: skillGitIcon,
  html: skillHtmlIcon,
  java: skillJavaIcon,
  javascript: skillJavascriptIcon,
  jest: skillJestIcon,
  jetbrains: skillJetbrainsIcon,
  mui: skillMuiIcon,
  mysql: skillMysqlIcon,
  next: skillNextIcon,
  nodejs: skillNodejsIcon,
  office: skillOfficeIcon,
  photoshop: skillPhotoshopIcon,
  postgres: skillPostgresIcon,
  python: skillPythonIcon,
  reactjs: skillReactjsIcon,
  springBoot: skillSpringBootIcon,
  tailwind: skillTailwindIcon,
  threejs: skillThreejsIcon,
  typescript: skillTypescriptIcon,
  vite: skillViteIcon,
} as const;

export { logoUrl, planetSceneUrl };
