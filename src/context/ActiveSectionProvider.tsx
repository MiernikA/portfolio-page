import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
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
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      if (document.body.classList.contains("scrolling-with-rocket")) return;
      let current = "";
      const midpoint = window.innerHeight / 2;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= midpoint && rect.bottom >= midpoint) {
          current = section.id;
        }
      });
      if (!current && window.scrollY < 100) current = "home";
      if (current && current !== activeSection) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, sectionIds }}
    >
      {" "}
      {children}{" "}
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
