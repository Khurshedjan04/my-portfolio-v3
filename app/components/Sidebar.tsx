import Link from "next/link";
import { mainItems, socialItems } from "../constants";
import Navigation from "./Navigation";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Sidebar = () => {
  return (
    <header className="w-full lg:h-screen flex flex-col gap-10 lg:gap-0 lg:flex-1 lg:justify-between lg:sticky top-0 lg:py-24 lg:pr-8">
      <div>
        <Link
          href="/"
          className="block font-bold text-primary leading-[1.1] tracking-tight
            text-5xl sm:text-6xl hover:text-[#45add9] transition-colors duration-200"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {mainItems.name}
        </Link>

        <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#45add9] mt-3">
          {mainItems.title}
        </p>
      </div>
      <Navigation />
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mt-2">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-tertiary">
            This is Portfolio v3!
          </span>
          <span className="text-tertiary opacity-30">|</span>
          <a
            href="https://my-portfolio-v2--seven.vercel.app/"
            target="_blank"
            className="group inline-flex items-center gap-1"
          >
            <span
              className="font-mono text-[10px] tracking-[0.14em] uppercase text-tertiary
      group-hover:text-primary transition-colors duration-200"
            >
              View v2
            </span>
            <span
              className="text-tertiary group-hover:text-[#45add9]
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5
      transition-all duration-200 text-sm"
            >
              <ArrowOutwardIcon fontSize="inherit" />
            </span>
          </a>
        </div>
        <ul className="flex gap-5 text-secondary relative bottom-0">
          {socialItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition-all supports-hover:hover:text-primary lg:w-[30px] lg:h-[30px] text-2xl lg:text-3xl"
            >
              <a href={item.link} target="_blank">
                {" "}
                <item.icon fontSize="inherit" />{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
