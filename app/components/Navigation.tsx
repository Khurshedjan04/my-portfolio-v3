"use client";


import { useEffect, useState } from "react";
import { navigationItems } from "../constants";


const Navigation = () => {



  
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when the section is at least 50% visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ul className="hidden lg:flex flex-col gap-4 text-secondary relative -top-16 text-sm font-bold">
      {navigationItems.map((item, index) => (
        <li className="group w-fit" key={index}>
          {" "}
          <a
            href={item.href}
            className={`transition-all flex items-center gap-2 group-hover:text-primary ${
              activeSection === item.href ? "text-primary" : "text-secondary"
            }`}
          >
            <span
              className={` transition-all h-[1px] block group-hover:bg-slate-200 group-hover:!w-16  ${
                activeSection === item.href ? "bg-slate-200 !w-12" : "bg-slate-400 w-8"
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
