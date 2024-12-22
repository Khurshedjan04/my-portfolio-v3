import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
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
    title: "CV",
    href: "#cv",
  },
];
interface SocialItems {
  icon: typeof InstagramIcon;
  link: string;
}
const socialItems : SocialItems[] = [
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
  icon: any;
  subIcon: any;
  title: string;
  description: string;
}

const skillsItems: SkillItem[] = [
  {
    icon: HTMLicon,
    subIcon: "",
    title: "HTML5 / CSS3",
    description:
      "I started learning web development on my own using resources like W3Schools, and I quickly became passionate about it. As time went on, I mastered HTML and CSS for structuring web content. Now I'm a pro at HTML and CSS, from making responsive layouts to adding custom animations and transitions. They've become second nature to me, and I can use them to make websites that are clean, modern, and mobile-friendly.",
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faJs,
    title: "JavaScript",
    description:
      "From there, I took myself to the next level using structured courses to really get into JavaScript. The next thing I knew, I had mastered JavaScript. Using vanilla JS, I could confidently manipulate the DOM to create interactive elements and deal with complex logic in the background. Whether it was creating dynamic user interfaces or automating tasks, I enjoyed using JavaScript in order to add functionality and make my websites more interactive.",
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faReact,
    title: "React.JS",
    description:
      "After mastering JavaScript, I craved building dynamic web experiences. YouTube and W3Schools became my guides as I started diving into React. React's component-based approach captivated me, while its focus on efficiency kept things smooth. As I continued to learn, I experienced how React's declarative syntax made building interactive user interfaces both intuitive and powerful. Now, React is my go-to tool for creating fast and scalable web applications.",
  },
  {
    icon: Tailwind,
    subIcon: "",
    title: "Tailwind",
    description:
      "Coming...",
  },
  {
    icon: NextJs,
    subIcon: "",
    title: "Next.JS",
    description:
      "Coming...",
  },
  {
    icon: TypeScript,
    subIcon: "",
    title: "TypeScript",
    description:
      "Coming...",
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faGit,
    title: "Version Control",
    description:
      "Coming...",
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faPython,
    title: "Python",
    description:
      "Coming...",
  },
  {
    icon: CPPlusIcon,
    subIcon: "",
    title: "C++",
    description:
    "Coming...",
  },
];

interface ProjectItem {
  imgSrc: string ;
  imgSrc2: string ;
  link: string;
  title: string;
  description: string;
}

const projectsItems: ProjectItem[] = [
  {
    imgSrc: "/assets/natours.png",
    imgSrc2: "",
    title: "Natours",
    link: "https://clone-natours-alimmamadov.vercel.app/",
    description:
      "Coming...",
  },
  {
    imgSrc: "/assets/shopcy1.png",
    imgSrc2: "/assets/shopcy2.png",
    title: "Shopsy",
    link: "https://online-shop-clothes-alimmamadov.vercel.app/",
    description:
      "Coming...",
  },
  {
    imgSrc: "/assets/virtualR.png",
    imgSrc2: "",
    title: "VirtualR",
    link: "https://virtual-r-alimmamadov.vercel.app/",
    description:
      "Coming...",
  },
  {
    imgSrc: "/assets/calculator1.png",
    imgSrc2: "/assets/calculator2.png",
    title: "Calculator",
    link: "https://calculator-react-red.vercel.app/",
    description:
      "Coming...",
  },
  {
    imgSrc: "/assets/timer.png",
    imgSrc2: "/assets/timer2.png",
    title: "Clockwise",
    link: "https://alimmamadov-project-timer.vercel.app/",
    description:
      "Coming...",
  },
];

export { mainItems, navigationItems, socialItems, skillsItems, projectsItems };
