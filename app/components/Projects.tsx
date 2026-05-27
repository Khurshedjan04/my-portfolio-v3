import { projectsItems } from "../constants";
import Image from "next/image";
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
            <a
              target="_blank"
              href={item.link}
              className="group block rounded-xl border border-transparent px-5 py-4
                hover:bg-[rgba(69,173,217,0.05)] hover:border-[rgba(69,173,217,0.2)]
                transition-all duration-200"
            >
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-[110px] flex flex-col gap-2">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full rounded-md object-cover
                      outline outline-1 outline-white/[0.07] outline-offset-0
                      group-hover:outline-2 group-hover:outline-[rgba(69,173,217,0.45)]
                      group-hover:outline-offset-[2px] transition-all duration-75"
                  />
                  {item.imgSrc2 && (
                    <Image
                      src={item.imgSrc2}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full rounded-md object-cover
                        outline outline-1 outline-white/[0.07] outline-offset-0
                        group-hover:outline-2 group-hover:outline-[rgba(69,173,217,0.45)]
                        group-hover:outline-offset-[2px] transition-all duration-75"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-2">
                    <h2
                      className="text-[17px] font-semibold text-primary italic
                        group-hover:text-[#45add9] transition-colors duration-200"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.title}
                    </h2>
                    <span
                      className="text-secondary text-sm mt-0.5
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        group-hover:text-[#45add9] transition-all duration-200"
                    >
                      <ArrowOutwardIcon fontSize="inherit" />
                    </span>
                  </div>
                  <p
                    className="text-[12.5px] leading-relaxed text-secondary
                    group-hover:text-primary transition-colors duration-200 mb-3"
                  >
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="font-mono text-[10.5px] text-sky-300 tracking-wide
                          bg-[rgba(69,173,217,0.08)] border border-[rgba(69,173,217,0.18)]
                          rounded-full px-2.5 py-0.5
                          group-hover:bg-[rgba(69,173,217,0.18)]
                          group-hover:border-[rgba(69,173,217,0.35)]
                          transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
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
