import { mainItems, socialItems } from "../constants";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <header className="w-full lg:max-h-screen flex flex-col gap-10 lg:flex-1 lg:gap-5 lg:justify-between lg:sticky lg:top-0 lg:py-24">
      <div>
        <h1 className="text-primary text-4xl font-bold tracking-tight sm:text-5xl">
          <a href="/">{mainItems.name}</a>
        </h1>
        <h2 className="text-primary mt-3 text-lg tracking-tight sm:text-xl">
          {mainItems.title}
        </h2>
        <p className="text-secondary mt-6 max-w-md">{mainItems.description}</p>
      </div>
      <Navigation />
      <ul className="flex gap-5 text-secondary">
        {socialItems.map((item, index) => (
          <li key={index} className="cursor-pointer transition-all hover:text-primary text-2xl lg:text-3xl">
            <a href={item.link} target="_blank">
              {" "}
              <item.icon fontSize="inherit" />{" "}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Sidebar;
