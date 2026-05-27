import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NextJs from "@/app/svg/Next";
import Tailwind from "./svg/Tailwind";
import SQL from "./svg/SQL";
import TypeScript from "./svg/TypeScript";
import CSHarp from "./svg/CSHARP";
import JavaScriptIcon from "./svg/JavaScript";
import PythonIcon from "./svg/Python";
import DotNet from "./svg/DotNet";
import NodeJsIcon from "./svg/NodeJS";
import RestAPIIcon from "./svg/RestAPI";
import ReactIcon from "./svg/ReactIcon";
import VersionControl from "./svg/VersionControl";
import FigmaIcon from "./svg/FigmaIcon";
import PostgresSQL from "./svg/PostgresSQL";
import MySQL from "./svg/MySQL";
import MongoDB from "./svg/MongoDb";
import CICD from "./svg/CICD";
import Cloud from "./svg/Cloud";
import LeetCodeIcon from "./svg/LeetCode";
import { ElementType } from "react";

const mainItems: { name: string; title: string; description?: string } = {
  name: "Xurshed Alimmamadov",
  title: "Software Engineer",
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
  icon: ElementType;
  link: string;
}
const socialItems: SocialItems[] = [
  {
    icon: GitHubIcon,
    link: "https://github.com/Khurshedjan04",
  },
  {
    icon: LeetCodeIcon,
    link: "https://leetcode.com/u/alimmamadovxurshid04",
  },
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/khurshed-alimmamadov",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/khurshedjan_12.06",
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

export type SkillItem = {
  title: string;
  icon: ElementType | string;
  persentage: number;
  level?: "core" | "mid" | "exp";
};

interface SkillGroup {
  categoryTitle: string;
  skills: SkillItem[];
}

const skillsGroups: SkillGroup[] = [
  {
    categoryTitle: "Languages",
    skills: [
      {
        icon: CSHarp,
        title: "C#",
        persentage: 86,
      },
      {
        icon: SQL,
        title: "SQL",
        persentage: 80,
      },
      {
        icon: JavaScriptIcon,
        title: "JavaScript",
        persentage: 92,
      },
      {
        icon: TypeScript,
        title: "TypeScript",
        persentage: 73,
      },
      {
        icon: PythonIcon,
        title: "Python",
        persentage: 78,
      },
    ],
  },
  {
    categoryTitle: "Backend",
    skills: [
      {
        icon: DotNet,
        title: ".NET",
        persentage: 86,
      },
      {
        icon: NodeJsIcon,
        title: "Node.JS",
        persentage: 78,
      },
      {
        icon: RestAPIIcon,
        title: "REST APIs",
        persentage: 73,
      },
    ],
  },
  {
    categoryTitle: "Database Design",
    skills: [
      {
        icon: PostgresSQL,
        title: "PostgresSQL",
        persentage: 88,
      },
      {
        icon: MySQL,
        title: "MySQl",
        persentage: 78,
      },
      {
        icon: MongoDB,
        title: "MongoDB",
        persentage: 86,
      },
    ],
  },
  {
    categoryTitle: "Frontend",
    skills: [
      {
        icon: NextJs,
        title: "Next.JS",
        persentage: 86,
      },
      {
        icon: ReactIcon,
        title: "React",
        persentage: 74,
      },
      {
        icon: Tailwind,
        title: "Tailwind",
        persentage: 88,
      },
      {
        icon: FigmaIcon,
        title: "Figma",
        persentage: 68,
      },
    ],
  },
  {
    categoryTitle: "System Design",
    skills: [
      {
        icon: "SD",
        title: "Software Engineering (HLD/LLD)",
        persentage: 80,
      },
      {
        icon: "MD",
        title: "UML / ERD Modeling",
        persentage: 82,
      },
      {
        icon: "SDLC",
        title: "Sofware Development Life Cycle",
        persentage: 78,
      },
    ],
  },
  {
    categoryTitle: "DevOPS",
    skills: [
      {
        icon: VersionControl,
        title: "Version Control",
        persentage: 82,
      },
      {
        icon: CICD,
        title: "CI & CD",
        persentage: 78,
      },
      {
        icon: Cloud,
        title: "Cloud & Deployment",
        persentage: 78,
      },
    ],
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
    imgSrc: "/assets/workhub.png",
    imgSrc2: "/assets/wokrhub.png",
    title: "WorkHub Central",
    link: "https://coworking-workhub.vercel.app/",
    description:
      "WoroHub Central - a platform for coworking spaces. For this project, I built a responsive, minimalistic website, WorkHub Central, using Next.js and Tailwind CSS. It features smooth animations (AOS), carousels, and is fully responsive for any screen sizes. This project enhanced my frontend skills with Next.JS and Tailwind.",
    skills: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "JavaScript",
      "AOS",
      "React Slick",
    ],
  },
  {
    imgSrc: "/assets/natours.png",
    imgSrc2: "",
    title: "Natours",
    link: "https://clone-natours-alimmamadov.vercel.app/",
    description:
      "For this project, I built a responsive tourism website, Natours, using React.js (with Vite) and Tailwind CSS. It features smooth animations, interactive elements like carousels, and is fully optimized for different screen sizes. This project enhanced my frontend skills with React, Vite, and Tailwind.",
    skills: ["React", "Vite", "Tailwind", "JavaScript"],
  },
  {
    imgSrc: "/assets/shopcy1.png",
    imgSrc2: "/assets/shopcy2.png",
    title: "Shopsy",
    link: "https://online-shop-clothes-alimmamadov.vercel.app/",
    description:
      "For the Shopsy project, I built a fully responsive e-commerce site for selling clothes, featuring a dark mode toggle. I used React.js with Vite for fast development and Tailwind CSS for styling. The site includes smooth animations with AOS, image carousels with React Slick, and various interactive UI elements.",
    skills: ["React", "Vite", "Tailwind", "JavaScript", "React Slick", "AOS"],
  },
  {
    imgSrc: "/assets/virtualR.png",
    imgSrc2: "",
    title: "VirtualR",
    link: "https://virtual-r-alimmamadov.vercel.app/",
    description:
      "For the VirtualR project, I developed a responsive website with React.js and Vite for fast development. The design is fully responsive and optimized for all screen sizes. I used Tailwind CSS for styling and incorporated Lucide-react for high-quality icons, enhancing the UI with a modern, clean look.",
    skills: ["React", "Vite", "Tailwind", "JavaScript", "Lucide-react"],
  },
  {
    imgSrc: "/assets/currencyExchange.png",
    imgSrc2: "",
    title: "Currency Exchange App",
    link: "https://currency-exchange-app-nine.vercel.app/",
    description:
      "For this project, I built a React Exchange app integrating real time currency exchange rates API. The app features a clean and modern design. I used React for the functionality, and Tailwind CSS for responsive styling.",
    skills: ["React", "Vite", "Tailwind", "JavaScript", "Rest API"],
  },
  {
    imgSrc: "/assets/calculator1.png",
    imgSrc2: "/assets/calculator2.png",
    title: "Calculator",
    link: "https://calculator-react-red.vercel.app/",
    description:
      "For this project, I built a React Calculator that supports both click and keydown events for a seamless user experience. The calculator features a clean and modern design with smooth animations and two modes: dark and light. I used React for the functionality, along with Material UI for stylish components, and Tailwind CSS for responsive styling.",
    skills: ["React", "Vite", "Tailwind", "JavaScript"],
  },
];

export { mainItems, navigationItems, socialItems, skillsGroups, projectsItems };
