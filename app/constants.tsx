import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";
library.add(faReact);
import { faJs } from "@fortawesome/free-brands-svg-icons";
library.add(faJs);
import { faPython } from "@fortawesome/free-brands-svg-icons";
library.add(faPython);
import { faGit } from "@fortawesome/free-brands-svg-icons";
library.add(faGit);
import NextJs from "@/app/svg/Next";
import Tailwind from "./svg/Tailwind";
import HTMLicon from "./svg/HTML";
import CPPlusIcon from "./svg/CppIcon";
import TypeScript from "./svg/TypeScript";
import React from "react";

const mainItems: { name: string; title: string; description: string } = {
  name: "Xurshed Alimmamadov",
  title: "Front End Developer",
  description:
    "I build clean, visually appealing websites, continuously striving to improve and grow in the web.",
};
const navigationItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "CV",
    href: "#cv",
  },
];
interface SocialItems {
  icon: typeof InstagramIcon;
  link: string;
}
const socialItems: SocialItems[] = [
  {
    icon: GitHubIcon,
    link: "https://github.com/Khurshedjan04",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/khurshedjan_12.06/",
  },
  {
    icon: TelegramIcon,
    link: "https://t.me/Khurshedjan12_06",
  },
  {
    icon: AlternateEmailIcon,
    link: "mailto:alimmamadovxurshid04@gmail.com",
  },
];

interface SkillItem {
  icon: React.ElementType;
  subIcon: string | IconDefinition;
  title: string;
  persentage: number;
}

const skillsItems: SkillItem[] = [
  {
    icon: HTMLicon,
    subIcon: "",
    title: "HTML5 / CSS3",
    persentage: 96,
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faJs,
    title: "JavaScript",
    persentage: 92,
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faReact,
    title: "React.JS",
    persentage: 86,
  },
  {
    icon: Tailwind,
    subIcon: "",
    title: "Tailwind",
    persentage: 88,
  },
  {
    icon: NextJs,
    subIcon: "",
    title: "Next.JS",
    persentage: 78,
  },
  {
    icon: TypeScript,
    subIcon: "",
    title: "TypeScript",
    persentage: 75,
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faGit,
    title: "Version Control",
    persentage: 78,
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faPython,
    title: "Python",
    persentage: 72,
  },
  {
    icon: CPPlusIcon,
    subIcon: "",
    title: "C++",
    persentage: 62,
  },
];

interface ProjectItem {
  imgSrc: string;
  imgSrc2: string;
  link: string;
  title: string;
  description: string;
  skills: string[];
}

const projectsItems: ProjectItem[] = [
  {
    imgSrc: "/assets/natours.png",
    imgSrc2: "",
    title: "Natours",
    link: "https://clone-natours-alimmamadov.vercel.app/",
    description: "For this project, I built a responsive tourism website, Natours, using React.js (with Vite) and Tailwind CSS. It features smooth animations, interactive elements like carousels, and is fully optimized for different screen sizes. This project enhanced my frontend skills with React, Vite, and Tailwind.",
    skills: ["React", "Vite", "Tailwind", "JavaScript"],
  },
  {
    imgSrc: "/assets/shopcy1.png",
    imgSrc2: "/assets/shopcy2.png",
    title: "Shopsy",
    link: "https://online-shop-clothes-alimmamadov.vercel.app/",
    description: "For the Shopsy project, I built a fully responsive e-commerce site for selling clothes, featuring a dark mode toggle. I used React.js with Vite for fast development and Tailwind CSS for styling. The site includes smooth animations with AOS, image carousels with React Slick, and various interactive UI elements.",
    skills: ["React", "Vite", "Tailwind", "JavaScript", "React Slick", "AOS"],

  },
  {
    imgSrc: "/assets/virtualR.png",
    imgSrc2: "",
    title: "VirtualR",
    link: "https://virtual-r-alimmamadov.vercel.app/",
    description: "For the VirtualR project, I developed a responsive website with React.js and Vite for fast development. The design is fully responsive and optimized for all screen sizes. I used Tailwind CSS for styling and incorporated Lucide-react for high-quality icons, enhancing the UI with a modern, clean look.",
    skills: ["React", "Vite", "Tailwind", "JavaScript", "Lucide-react"],
  },
  {
    imgSrc: "/assets/calculator1.png",
    imgSrc2: "/assets/calculator2.png",
    title: "Calculator",
    link: "https://calculator-react-red.vercel.app/",
    description: "For this project, I built a React Calculator that supports both click and keydown events for a seamless user experience. The calculator features a clean and modern design with smooth animations and two modes: dark and light. I used React for the functionality, along with Material UI for stylish components, and Tailwind CSS for responsive styling.",
    skills: ["React", "Vite", "Tailwind", "JavaScript"],
  },
  {
    imgSrc: "/assets/timer.png",
    imgSrc2: "/assets/timer2.png",
    title: "Clockwise",
    link: "https://alimmamadov-project-timer.vercel.app/",
    description: "I built a Timer using pure HTML, CSS, and vanilla JavaScript. The project features a simple, intuitive design with 2 versions: simple and circular modes, with functionality to start, stop, cencel and reset the timer. It was a great exercise in working with core web technologies to create a clean and interactive user experience without relying on frameworks or libraries.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export { mainItems, navigationItems, socialItems, skillsItems, projectsItems };
