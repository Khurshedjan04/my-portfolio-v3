import { skillsItems } from "../constants";
const Skills = () => {
  return (
    <section id="skills">
      <div className="w-full">
        <h1 className="text-2xl text-primary text-left">Skills</h1>
        <div className="w-full flex flex-col">
          {skillsItems.map((item, index) => (
            <div key={index} className="my-4 p-4 rounded-lg transition-all group-hover:opacity-70 hover:!opacity-100  hover:bg-[rgb(225,225,225,0.1)]">
              <div className="flex mb-1">
                <div className="w-6 h-6 text-3xl mr-6 flex items-center text-primary">
                  {item.subIcon !== "" ? (
                    <item.icon
                      icon={item.subIcon}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <item.icon />
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="mb-3 text-primary">{item.title}</h1>
                </div>
              </div>
              {/* Loading bar */}
              <div className="relative flex items-center w-full h-1 bg-[rgb(225,225,225,0.1)]">
                <p
                  className="text-[#45add9] absolute bottom-4"
                  style={{
                    animation: `numPos-${item.persentage} ${
                      (item.persentage / 100) * 3
                    }s ease-in-out`,
                    left: `${ item.persentage - 0.5 }%`
                  }}
                >
                  {item.persentage}%
                </p>
                {/* the line */}
                <div
                  className={` h-2 absolute `}
                  style={{
                    animation: `load-${item.persentage} ${
                      (item.persentage / 100) * 3
                    }s ease-in-out`,
                    background:
                      "linear-gradient(to right, transparent, #45add9)",
                    width: `${item.persentage}%`,
                  }}
                ></div>
                <style>
                  {`
                     @keyframes load-${item.persentage} {
                        0% { width: 0; }
                        100% { width: ${item.persentage}%; }
                     }
                     @keyframes numPos-${item.persentage} {
                        0% { left: 0; opacity: 0; }
                        100% { left: ${item.persentage - 0.5}%; opacity: 1; }
                     }
                      `}
                </style>
                {/* the line */}
                {/* the dot */}
                <div
                  className="absolute h-4 w-4 rounded-full bg-[#45add9]"
                  style={{
                    animation: `position-${item.persentage} ${
                      (item.persentage / 100) * 3
                    }s ease-in-out`,
                    left: ` ${item.persentage}% `,
                  }}
                ></div>
                <style>
                  {`
                     @keyframes position-${item.persentage} {
                        0% { left: 0; }
                        100% { left: ${item.persentage}%; }
                     }
                      `}
                </style>
                {/* the dot */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
