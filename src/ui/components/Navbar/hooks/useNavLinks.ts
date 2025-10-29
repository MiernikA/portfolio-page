export type NavLink = {
  id: string;
};

export const useNavLinks = (): NavLink[] => {
  return [
    { id: "home" },
    { id: "about" },
    { id: "experience" },
    { id: "skills" },
    { id: "projects" },
    { id: "contact" },
  ];
};
