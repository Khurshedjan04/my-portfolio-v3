"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "../constants";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const pageBottom = document.documentElement.scrollHeight;
      let activeId = "about";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
          activeId = section.id;
        }
      });

      if (window.scrollY + window.innerHeight >= pageBottom - 200) {
        activeId = "cv";
      }

      setActiveSection(activeId);
    };

    const targetElement = document.getElementById("skills");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className="hidden lg:flex flex-col gap-0.5 pb-16">
      {navigationItems.map((item, index) => {
        const isActive = "#" + activeSection === item.href;
        return (
          <li key={index} className="group w-fit pr-5">
            <a href={item.href} className="flex items-center gap-3 py-1.5 w-fit pr-5">
              <span
                className={`block h-px flex-shrink-0 transition-all duration-200
                  ${
                    isActive
                      ? "w-7 bg-primary"
                      : "w-[18px] bg-slate-600 group-hover:w-7 group-hover:bg-primary"
                  }`}
              />
              <span
                className={`font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-200
                  ${
                    isActive
                      ? "text-primary"
                      : "text-tertiary group-hover:text-primary"
                  }`}
              >
                {item.title}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
