import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const mainItems : {name: string, title: string, description: string} = 
{    name : "Xurshed Alimmamadov",
    title : "FrontEnd Developer",
    description : "I create clean and visually appealing websites while continuously learning and growing in web development.",
}
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
        link: "https://github.com/Khurshedjan04"
    },
    {
        icon: InstagramIcon,
        link: "https://www.instagram.com/khurshedjan_12.06/"
    },
    {
        icon: TelegramIcon,
        link: "https://t.me/Khurshedjan12_06"
    },
    {
        icon: AlternateEmailIcon,
        link: "mailto:alimmamadovxurshid04@gmail.com"
    }
] 

export {mainItems, navigationItems, socialItems };