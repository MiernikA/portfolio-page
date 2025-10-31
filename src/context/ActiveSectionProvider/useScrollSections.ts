import { useEffect } from "react";

export function useScrollSections(
  activeSection: string,
  setActiveSection: (section: string) => void,
  sectionIds: string[]
) {
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
  }, [activeSection, setActiveSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (document.body.classList.contains("scrolling-with-rocket")) return;
      if (sectionIds.length === 0) return;

      const currentIndex = sectionIds.indexOf(activeSection);
      if (currentIndex === -1) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      let nextIndex = currentIndex + direction;
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= sectionIds.length) nextIndex = sectionIds.length - 1;

      if (nextIndex !== currentIndex) {
        e.preventDefault();
        const nextId = sectionIds[nextIndex];
        const nextEl = document.getElementById(nextId);

        if (nextEl) {
          document.body.classList.add("scrolling-with-rocket");
          nextEl.scrollIntoView({ behavior: "smooth" });
          setActiveSection(nextId);
          setTimeout(
            () => document.body.classList.remove("scrolling-with-rocket"),
            1000
          );
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection, sectionIds, setActiveSection]);
}
