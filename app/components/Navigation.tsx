"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "../constants";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let activeId = "about";

      const pageHeight = document.documentElement.scrollHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
          activeId = section.id;
        }
        if(window.scrollY + window.innerHeight >= pageHeight - 200){
          activeId = "cv"
        }
      });

      setActiveSection(activeId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className="hidden lg:flex flex-col gap-4 text-secondary mb-32 text-sm font-bold">
      {navigationItems.map((item, index) => (
        <li className="group w-fit" key={index}>
          {" "}
          <a
            href={item.href}
            className={`transition-all flex items-center gap-2 group-hover:text-primary ${
              "#" + activeSection === item.href
                ? "text-primary"
                : "text-secondary"
            }`}
          >
            <span
              className={` transition-all h-[1px] block group-hover:bg-slate-200 group-hover:!w-16  ${
                "#" + activeSection === item.href
                  ? "bg-slate-200 !w-16"
                  : "bg-slate-400 w-8"
              }`}
            ></span>
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Navigation;
