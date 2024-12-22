import { skillsItems } from "../constants";
const Skills = () => {
  return (
    <section id="skills" className="flex group flex-col gap-12">
      <h1 className=" bg-[rgb(225,225,225,0.2)] text-primary  transition-all">Skills</h1>
      {skillsItems.map((item, index) => (
        <div key={index}  className="">
        <div className="flex my-4 p-4 transition-all group-hover:opacity-70 hover:!opacity-100  hover:bg-[rgb(225,225,225,0.1)]">
          <div className="w-12 h-12 text-6xl mr-6 text-primary">
            {item.subIcon !== "" ? (
              <item.icon icon ={item.subIcon} style={{ width: "100%", height: "100%" }} />
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
