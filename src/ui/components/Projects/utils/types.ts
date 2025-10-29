type Tag = { name: string; color: string };

export type Project = {
  name: string;
  description?: string;
  image?: string;
  tags?: Tag[];
  demoLink?: string;
  codeLink?: string;
};
