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
  icon: JSX.Element;
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
      "Once I got comfortable with React, I started looking for ways to make designing interfaces faster and easier. That's when I came across TailwindCSS, and it completely changed the game for me. Its utility classes made it so simple to build beautiful, responsive designs without writing tons of custom CSS. I love how well it works with React—it's like having a design toolbox right at my fingertips. Tailwind has become my go-to for creating clean and modern UIs effortlessly.",
  },
  {
    icon: NextJs,
    subIcon: "",
    title: "Next.JS",
    description:
      "Building on my experience with React, recently, I've started using Next.js to improve my web development projects. I am making SEO-friendly and scalable apps using Next.js thanks to its robust features like server-side rendering and static site generation. It is my preferred framework for creating production-ready apps, especially, I love using Next.js because of its integrated routing and performance optimization",
  },
  {
    icon: TypeScript,
    subIcon: "",
    title: "TypeScript",
    description:
      "While working with JavaScript, especially on bigger projects with React and Next.js, I ran into issues like bugs from incorrect types and difficulties maintaining code. I realized that TypeScript could solve these problems. By adding static types, TypeScript helped me catch errors early, made my code easier to understand, and improved teamwork. It also made working with larger codebases much smoother, especially when using it alongside React and Next.js.",
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faGit,
    title: "Version Control",
    description:
      "When I started working on projects, I realized how important version control was, especially for keeping track of changes and collaborating with others. I began using Git, which helped me manage my code, create branches, and easily undo mistakes. Platforms like GitHub made it even easier to collaborate, share code, and resolve conflicts when working with others, making the development process much smoother.",
  },
  {
    icon: FontAwesomeIcon,
    subIcon: faPython,
    title: "Python",
    description:
      "I've already started learning Python, and now I'm diving into its libraries. While it may not be essential for my career in frontend development, it's an important step toward my goal of becoming a full-stack developer. Python's versatility and wide range of libraries will be key as I work towards building more complex applications in the future.",
  },
  {
    icon: CPPlusIcon,
    subIcon: "",
    title: "C++",
    description:
      "Along the way, I learned C++ to strengthen my understanding of programming fundamentals. While it's not directly related to my focus on frontend development, it gave me a solid grasp of concepts like memory management and object-oriented programming, which will be valuable as I work toward becoming a full-stack developer.",
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
