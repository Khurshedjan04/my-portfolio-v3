import { projectsItems } from "../constants";
import ProjectCard from "./ProjectCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col py-8">
      <div className="flex items-baseline gap-4 mb-8">
        <h1
          className="text-2xl text-primary italic"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Projects
        </h1>
        <div className="flex-1 h-px bg-[rgba(69,173,217,0.2)]" />
      </div>
      <div className="flex flex-col">
        {projectsItems.map((item, index) => (
          <div key={index}>
            {index > 0 && <div className="h-px bg-white/[0.04] my-0.5" />}
            <ProjectCard item={item} />
          </div>
        ))}
      </div>
      <a
        target="_blank"
        href="https://github.com/Khurshedjan04"
        className="group relative mt-6 mb-2 w-fit inline-flex items-center gap-2 pb-0.5
          before:absolute before:bottom-0 before:left-1/2 before:right-1/2 before:h-[1.5px]
          before:bg-[#45add9] before:transition-all before:duration-250
          hover:before:left-0 hover:before:right-0"
      >
        <span
          className="text-secondary text-lg italic group-hover:text-primary transition-colors duration-200"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Visit GitHub to see all projects
        </span>
        <span className="text-secondary text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#45add9] transition-all duration-200">
          <ArrowOutwardIcon fontSize="inherit" />
        </span>
      </a>
    </section>
  );
};

export default Projects;
