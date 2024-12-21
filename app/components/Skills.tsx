import { skillsItems } from "../constants";
const Skills = () => {
  return (
    <section id="skills" className="flex group flex-col gap-12">
      <h1 className="sticky top-12 left-12 bg-[rgb(225,225,225,0.2)] text-primary  transition-all">Skills</h1>
      {skillsItems.map((item, index) => (
        <div key={index}  className="">
        <div className="flex my-4 p-4 transition-all group-hover:opacity-70 hover:!opacity-100  hover:bg-[rgb(225,225,225,0.1)]">
          <div className="w-12 h-12 mr-6 text-primary">
            {item.subIcon !== "" ? (
              <item.icon icon ={item.subIcon} fontSize="inherit" />
            ) : (
              <item.icon />
            )}
          </div>
          <div className="flex-1">
            <h1 className="mb-3 text-primary">{item.title}</h1>
            <article className="">{item.description}</article>
          </div>
        </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
