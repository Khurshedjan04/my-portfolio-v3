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
    link: "mailto:alimmamadov.dev@gmail.com",
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
        title: "MySQL",
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

export type ProjectLink = {
  label: string;
  url: string;
  kind?: "live" | "code" | "docs";
};

export type ProjectStackGroup = {
  category: string;
  skills: string[];
};

export interface ProjectItem {
  imgSrc: string;
  imgSrc2?: string;
  title: string;
  description: string;
  tags: string[];
  stack: ProjectStackGroup[];
  links: ProjectLink[];
}

const projectsItems: ProjectItem[] = [
  {
    imgSrc: "/assets/hotelos-client.png",
    imgSrc2: "/assets/hotelos-dashboard.png",
    title: "HotelOS",
    description:
      "Hotel management platform, includes a staff Dashboard and a guest-facing Client UI, built on a microservices architecture — 7 independently deployed .NET services behind an API Gateway, each owning its own PostgreSQL database with race condition prevention and no cross-service access. Services communicate asynchronously over RabbitMQ, and real-time updates are pushed to the UIs via SignalR/WebSockets. This project deepened my backend, distributed-systems, and DevOps skills.",
    tags: ["Full Stack", "Microservices", "DevOps"],
    stack: [
      {
        category: "Architecture",
        skills: ["Microservices", "API Gateway", "RabbitMQ", "Event-Driven", "SignalR / WebSockets"],
      },
      {
        category: "Backend",
        skills: [".NET 8", "ASP.NET Core", "C#", "REST API", "JWT Auth"],
      },
      {
        category: "Frontend",
        skills: ["Next.js", "React", "TypeScript", "Tailwind", "Zustand", "SignalR", "Stripe"],
      },
      {
        category: "Database",
        skills: ["PostgreSQL (Neon)", "DB-per-Service"],
      },
      {
        category: "DevOps",
        skills: ["Azure App Service", "Vercel", "GitHub Actions", "CI/CD"],
      },
    ],
    links: [
      { label: "Client UI", url: "https://hotel-os-client-ui.vercel.app", kind: "live" },
      { label: "Dashboard", url: "https://hotel-os-weld.vercel.app", kind: "live" },
      { label: "Client Code", url: "https://github.com/Khurshedjan04/HotelOS-ClientUI", kind: "code" },
      { label: "Backend + Dashboard Code", url: "https://github.com/Khurshedjan04/HotelOS", kind: "code" },
      { label: "HLD", url: "https://drive.google.com/file/d/1HIA8oEesMF3itF0al8UsGjUUP30ZDNfC/view?usp=sharing", kind: "docs" },
      { label: "LLD", url: "https://drive.google.com/file/d/1eIPdplVFVUqzie4ZM8DVbENOcjACiKd3/view?usp=sharing", kind: "docs" },
      { label: "API Gateway", url: "https://hotelos-gateway.azurewebsites.net", kind: "docs" },
      { label: "Identity API", url: "https://hotelos-identity.azurewebsites.net/swagger", kind: "docs" },
      { label: "Reception API", url: "https://hotelos-reception.azurewebsites.net/swagger", kind: "docs" },
      { label: "Payment API", url: "https://hotelos-payment.azurewebsites.net/swagger", kind: "docs" },
      { label: "Room Service API", url: "https://hotelos-roomservice.azurewebsites.net/swagger", kind: "docs" },
      { label: "Housekeeping API", url: "https://hotelos-housekeeping.azurewebsites.net/swagger", kind: "docs" },
      { label: "Maintenance API", url: "https://hotelos-maintenance.azurewebsites.net/swagger", kind: "docs" },
      { label: "Notification API", url: "https://hotelos-notification.azurewebsites.net/swagger", kind: "docs" },
    ],
  },
  {
    imgSrc: "/assets/clothco-dashboard.png",
    title: "ClothCo",
    description:
      "A full-stack B2B wholesale clothing distribution platform, an internal operations dashboard for managing product catalogs, orders, and staff. Designed for cloud deployment — containerized with Docker, CI/CD via GitHub Actions, and an AWS-targeted infrastructure (ECS Fargate).",
    tags: ["Full Stack", "DevOps", "Cloud"],
    stack: [
      {
        category: "Backend",
        skills: ["Node.js", "Express", "REST API"],
      },
      {
        category: "Frontend",
        skills: ["JavaScript", "HTML", "CSS"],
      },
      {
        category: "Database",
        skills: ["MongoDB", "Mongoose"],
      },
      {
        category: "Auth",
        skills: ["JWT", "RBAC", "bcrypt"],
      },
      {
        category: "DevOps & Cloud",
        skills: ["Docker", "GitHub Actions", "AWS", "CloudWatch", "CI/CD", "AS/LB"],
      },
    ],
    links: [
      { label: "Live Site", url: "https://clothcostudios.tech/", kind: "live" },
      { label: "Source Code", url: "https://github.com/Khurshedjan04/crm-clothing-b2b-market", kind: "code" },
    ],
  },
  {
    imgSrc: "/assets/dern-support-app.png",
    imgSrc2: "/assets/dern-support-admin.png",
    title: "Dern Support",
    description:
      "A full-stack technical-support platform split across three apps: a customer-facing app for raising and tracking support tickets, a separate staff admin dashboard for managing and resolving them, and a Node.js/Express REST API.",
    tags: ["Full Stack"],
    stack: [
      {
        category: "Frontend",
        skills: ["Next.js", "React", "JavaScript", "Tailwind"],
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "REST API"],
      },
      {
        category: "Database",
        skills: ["MongoDB", "Mongoose"],
      },
      {
        category: "Auth",
        skills: ["JWT", "bcrypt"],
      },
    ],
    links: [
      { label: "Client UI", url: "https://tech-support-app.vercel.app/", kind: "live" },
      { label: "Dashboard", url: "https://tech-support-app-admin-1yya.vercel.app/", kind: "live" },
      { label: "Client Code", url: "https://github.com/Khurshedjan04/TechSupportApp", kind: "code" },
      { label: "Admin Code", url: "https://github.com/Khurshedjan04/TechSupportApp---Admin", kind: "code" },
      { label: "Backend Code", url: "https://github.com/Khurshedjan04/TechSupport---Backend", kind: "code" },
    ],
  },
  {
    imgSrc: "/assets/workhub.png",
    imgSrc2: "/assets/wokrhub.png",
    title: "WorkHub Central",
    description:
      "WoroHub Central - a platform for coworking spaces. For this project, I built a responsive, minimalistic website, WorkHub Central, using Next.js and Tailwind CSS. It features smooth animations (AOS), carousels, and is fully responsive for any screen sizes. This project enhanced my frontend skills with Next.JS and Tailwind.",
    tags: ["Frontend"],
    stack: [
      {
        category: "Frontend",
        skills: ["Next.js", "Tailwind", "TypeScript", "JavaScript", "AOS", "React Slick"],
      },
    ],
    links: [
      { label: "Live Demo", url: "https://coworking-workhub.vercel.app/", kind: "live" },
    ],
  },
  {
    imgSrc: "/assets/natours.png",
    title: "Natours",
    description:
      "For this project, I built a responsive tourism website, Natours, using React.js (with Vite) and Tailwind CSS. It features smooth animations, interactive elements like carousels, and is fully optimized for different screen sizes. This project enhanced my frontend skills with React, Vite, and Tailwind.",
    tags: ["Frontend"],
    stack: [
      { category: "Frontend", skills: ["React", "Vite", "Tailwind", "JavaScript"] },
    ],
    links: [
      { label: "Live Demo", url: "https://clone-natours-alimmamadov.vercel.app/", kind: "live" },
    ],
  },
  {
    imgSrc: "/assets/shopcy1.png",
    imgSrc2: "/assets/shopcy2.png",
    title: "Shopsy",
    description:
      "For the Shopsy project, I built a fully responsive e-commerce site for selling clothes, featuring a dark mode toggle. I used React.js with Vite for fast development and Tailwind CSS for styling. The site includes smooth animations with AOS, image carousels with React Slick, and various interactive UI elements.",
    tags: ["Frontend"],
    stack: [
      {
        category: "Frontend",
        skills: ["React", "Vite", "Tailwind", "JavaScript", "React Slick", "AOS"],
      },
    ],
    links: [
      { label: "Live Demo", url: "https://online-shop-clothes-alimmamadov.vercel.app/", kind: "live" },
    ],
  },
  {
    imgSrc: "/assets/virtualR.png",
    title: "VirtualR",
    description:
      "For the VirtualR project, I developed a responsive website with React.js and Vite for fast development. The design is fully responsive and optimized for all screen sizes. I used Tailwind CSS for styling and incorporated Lucide-react for high-quality icons, enhancing the UI with a modern, clean look.",
    tags: ["Frontend"],
    stack: [
      {
        category: "Frontend",
        skills: ["React", "Vite", "Tailwind", "JavaScript", "Lucide-react"],
      },
    ],
    links: [
      { label: "Live Demo", url: "https://virtual-r-alimmamadov.vercel.app/", kind: "live" },
    ],
  },
  {
    imgSrc: "/assets/currencyExchange.png",
    title: "Currency Exchange App",
    description:
      "For this project, I built a React Exchange app integrating real time currency exchange rates API. The app features a clean and modern design. I used React for the functionality, and Tailwind CSS for responsive styling.",
    tags: ["Frontend"],
    stack: [
      {
        category: "Frontend",
        skills: ["React", "Vite", "Tailwind", "JavaScript", "Rest API"],
      },
    ],
    links: [
      { label: "Live Demo", url: "https://currency-exchange-app-nine.vercel.app/", kind: "live" },
    ],
  }
];

export { mainItems, navigationItems, socialItems, skillsGroups, projectsItems };
