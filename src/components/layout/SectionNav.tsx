import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "model", label: "Model" },
  { id: "services", label: "Services" },
  { id: "outcomes", label: "Outcomes" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with the highest intersection ratio
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveSection(best.target.id);
        }
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group flex items-center gap-3"
        >
          <span
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeSection === id
                ? "bg-primary scale-125"
                : "bg-border group-hover:bg-primary/50"
            )}
          />
          <span
            className={cn(
              "text-xs font-medium transition-all duration-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
              activeSection === id && "opacity-100 translate-x-0 text-primary"
            )}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
