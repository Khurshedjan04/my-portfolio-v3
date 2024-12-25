import { projectsItems } from "../constants";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col transition-all hover:opacity-80">
      <h1 className="text-2xl text-primary  transition-all">
        Projects
      </h1>
      {projectsItems.map((item, index) => (
        <div key={index} className="group my-6 peer transition-all hover:opacity-100">
          <a target="_blank" href={item.link}>
            <div className="flex my-4 p-4 transition-all rounded-lg supports-hover:group-hover:opacity-70 supports-hover:hover:!opacity-100  supports-hover:hover:bg-[rgb(225,225,225,0.1)]">
              <div className="flex"></div>
              <div className="flex flex-col gap-5 w-1/4 mr-6 ">
                <Image
                  className="transition-all outline supports-hover:group-hover:outline-teal-500 supports-hover:group-hover:outline-2 supports-hover:group-hover:outline-offset-1"
                  src={item.imgSrc}
                  alt="Natours"
                  width={500}
                  height={500}
                />
                {item.imgSrc2 && (
                  <Image
                    className="transition-all outline supports-hover:group-hover:outline-teal-500 supports-hover:group-hover:outline-2 supports-hover:group-hover:outline-offset-1"
                    src={item.imgSrc2}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="mb-3 flex">
                  <h1 className="text-primary text-2xl transition-all supports-hover:group-hover:text-teal-500">
                    {item.title}
                  </h1>
                  <span className="text-primary transition-all text-base ml-3 -translate-x-[0.32rem] translate-y-[0.32rem] supports-hover:group-hover:translate-x-0 supports-hover:group-hover:-translate-y-0 supports-hover:group-hover:text-teal-500">
                    <ArrowOutwardIcon fontSize="inherit" />
                  </span>
                </div>
                <article className="flex-2 text-sm supports-hover:group-hover:text-primary transition-all text-secondary">
                  {item.description}
                </article>
                <div className="flex flex-wrap gap-2 mt-3">
                   {item.skills.map((skill, index) => (
                     <span key={index} className="rounded-xl text-xs bg-teal-900 px-1 py-0.5 text-teal-300">
                         {skill}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
      <a target="_blank" href="https://github.com/Khurshedjan04" className="mb-3 flex group relative w-fit
        before:content-[''] before:transition-all before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-teal-500 supports-hover:hover:before:w-1/2 supports-hover:hover:before:z-[1] before:left-1/2
        after:content-[''] after:transition-all after:absolute after:-bottom-1 after:h-0.5 after:w-0 after:bg-teal-500 supports-hover:hover:after:w-1/2 hover:after:z-[1] after:right-1/2
      ">
        <h1 className="text-primary text-2xl transition-all ">
          Visit GitHub to see all projects
        </h1>
        <span className="text-primary transition-all text-base ml-3 -translate-x-[0.32rem] translate-y-[0.32rem] supports-hover:group-hover:translate-x-0 supports-hover:group-hover:-translate-y-0 supports-hover:group-hover:text-teal-500">
          <ArrowOutwardIcon fontSize="inherit" />
        </span>
      </a>
    </section>
  );
};
export default Projects;
