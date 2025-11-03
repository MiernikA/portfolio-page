import {
    createContext,
    useState,
    useEffect,
    type ReactNode,
} from "react";
import { useScrollSections } from "./useScrollSections";
import type { ActiveSectionContextType } from "./useActiveSection";

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(
    undefined
);

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
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

export { ActiveSectionContext };
