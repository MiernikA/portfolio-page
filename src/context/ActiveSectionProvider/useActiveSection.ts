import { useContext } from "react";
import { ActiveSectionContext } from "./ActiveSectionProvider";

export type ActiveSectionContextType = {
    activeSection: string;
    setActiveSection: (section: string) => void;
    sectionIds: string[];
};

export const useActiveSection = (): ActiveSectionContextType => {
    const context = useContext(ActiveSectionContext);
    if (!context)
        throw new Error(
            "useActiveSection must be used within ActiveSectionProvider"
        );
    return context;
};
