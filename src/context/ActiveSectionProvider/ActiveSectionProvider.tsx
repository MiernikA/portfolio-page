import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useScrollSections } from "./useScrollSections";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sectionIds: string[];
};

const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

export const ActiveSectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const [sectionIds, setSectionIds] = useState<string[]>([]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]")).map(
      (s) => s.id
    );
    setSectionIds(sections);
  }, []);

  useScrollSections(activeSection, setActiveSection, sectionIds);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, sectionIds }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useActiveSection = (): ActiveSectionContextType => {
  const context = useContext(ActiveSectionContext);
  if (!context)
    throw new Error(
      "useActiveSection must be used within ActiveSectionProvider"
    );
  return context;
};
