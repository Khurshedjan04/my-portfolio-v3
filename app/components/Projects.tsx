import { projectsItems } from "../constants";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-12">
      <h1 className=" bg-[rgb(225,225,225,0.2)] text-primary  transition-all">
        Projects
      </h1>
      {projectsItems.map((item, index) => (
        <div key={index} className="group">
          <a target="_blank" href={item.link}>
            <div className="flex my-4 p-4 transition-all group-hover:opacity-70 hover:!opacity-100  hover:bg-[rgb(225,225,225,0.1)]">
              <div className="flex"></div>
              <div className="flex flex-col gap-5 w-1/4 mr-6 ">
                <Image
                  className="transition-all outline group-hover:outline-teal-500 group-hover:outline-2 group-hover:outline-offset-1"
                  src={item.imgSrc}
                  alt="Natours"
                  width={500}
                  height={500}
                />
                {item.imgSrc2 && (
                  <Image
                    className="transition-all outline group-hover:outline-teal-500 group-hover:outline-2 group-hover:outline-offset-1"
                    src={item.imgSrc2}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="mb-3 flex">
                  <h1 className="text-primary text-2xl transition-all group-hover:text-teal-500">
                    {item.title}
                  </h1>
                  <span className="text-primary transition-all text-base ml-3 -translate-x-[0.32rem] translate-y-[0.32rem] group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:text-teal-500">
                    <ArrowOutwardIcon fontSize="inherit" />
                  </span>
                </div>
                <article className="flex-2 text-sm text-secondary">
                  {item.description}
                </article>
              </div>
            </div>
          </a>
        </div>
      ))}
      <a target="_blank" href="https://github.com/Khurshedjan04" className="mb-3 flex group relative w-fit
        before:content-[''] before:transition-all before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-teal-500 hover:before:w-1/2 hover:before:z-[1] before:left-1/2
        after:content-[''] after:transition-all after:absolute after:-bottom-1 after:h-0.5 after:w-0 after:bg-teal-500 hover:after:w-1/2 hover:after:z-[1] after:right-1/2
      ">
        <h1 className="text-primary text-2xl transition-all ">
          Visit GitHub to see all projects
        </h1>
        <span className="text-primary transition-all text-base ml-3 -translate-x-[0.32rem] translate-y-[0.32rem] group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:text-teal-500">
          <ArrowOutwardIcon fontSize="inherit" />
        </span>
      </a>
    </section>
  );
};
export default Projects;
