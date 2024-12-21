import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";
library.add(faReact);
import NextJs from "@/app/svg/Next";
import Tailwind from "./svg/Tailwind";



const mainItems: { name: string; title: string; description: string } = {
  name: "Xurshed Alimmamadov",
  title: "Front End Developer",
  description:
    "I create clean and visually appealing websites while continuously learning and growing in web development.",
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
    title: "Contact",
    href: "#contact",
  },
];

const socialItems = [
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
  icon: typeof FontAwesomeIcon | JSX.Element; 
  subIcon: typeof faReact | string;
  title: string;
  description: string;
}

const skillsItems: SkillItem[] = [
  {
    icon: FontAwesomeIcon,
    subIcon: faReact,
    title: "React.JS",
    description:
      "After mastering JavaScript at WEPRO, I craved building dynamic web experiences. YouTube and W3Schools became my guides as I dove into React. React's component-based approach makes building UIs a breeze, while its focus on efficiency keeps things smooth. Plus, the massive React community offers endless learning opportunities. React is my go-to for crafting engaging and interactive web applications.",
  },
  {
    icon: NextJs, 
    subIcon: "",
    title: "Next.JS",
    description:
      "Next.js is a powerful framework built on top of React, designed for production-ready applications. Its built-in support for server-side rendering and API routes simplifies development while enhancing performance. I rely on Next.js for projects requiring scalability and optimized performance.",
  },
  {
    icon: Tailwind, 
    subIcon: "",
    title: "Tailwind",
    description:
      "Next.js is a powerful framework built on top of React, designed for production-ready applications. Its built-in support for server-side rendering and API routes simplifies development while enhancing performance. I rely on Next.js for projects requiring scalability and optimized performance.",
  },
];


export { mainItems, navigationItems, socialItems, skillsItems };
