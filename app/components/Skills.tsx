import { SkillItem, skillsGroups } from "../constants";

const LEVELS = {
  core: "bg-[#45add9] shadow-[0_0_5px_rgba(69,173,217,0.7)] opacity-100",
  mid: "bg-[#45add9] opacity-50",
  exp: "bg-slate-500 opacity-40",
} as const;

const Skills = () => (
  <section id="skills" className="py-8">
    <div className="flex items-baseline gap-4 mb-10">
      <h1
        className="text-2xl font-bold text-primary italic"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Skills
      </h1>
      <div className="flex-1 h-px bg-[rgba(69,173,217,0.2)]" />
    </div>

    <div className="flex flex-col gap-8">
      {skillsGroups.map((group, gi) => (
        <div key={gi}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-[18px] h-px bg-[#45add9] flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-secondary">
              {group.categoryTitle}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((item, si) => (
              <SkillChip key={si} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="flex gap-6 mt-8 pt-4 border-t border-white/5">
      {[
        {
          cls: "bg-[#45add9] shadow-[0_0_4px_rgba(69,173,217,0.6)]",
          label: "core stack",
        },
        { cls: "bg-[#45add9] opacity-50", label: "proficient" },
        { cls: "bg-slate-500 opacity-40", label: "experienced" },
      ].map(({ cls, label }) => (
        <div key={label} className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cls}`} />
          <span className="font-mono text-[11px] text-tertiary tracking-wide">
            {label}
          </span>
        </div>
      ))}
    </div>
  </section>
);
const SkillChip = ({ item }: { item: SkillItem }) => {
  const level =
    item.level ??
    (item.persentage >= 85 ? "core" : item.persentage >= 70 ? "mid" : "exp");
  return (
    <div className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(69,173,217,0.18)] bg-slate-900/60 hover:border-[rgba(69,173,217,0.5)] hover:bg-[rgba(69,173,217,0.07)] transition-all duration-200 cursor-default">
      <div className="flex items-center justify-center flex-shrink-0">
        {typeof item.icon !== "string" ? (
          <div className="w-[22px] h-[22px]">
            <item.icon style={{ width: "14px", height: "14px" }} />
          </div>
        ) : (
          <span className={`px-1 bg-[#e2e8f0] text-tertiary rounded-[15px]`}>
          {item.icon}
        </span>
        )}
      </div>
      <span className="font-mono text-[13px] text-primary">{item.title}</span>
      <span
        className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${
          LEVELS[level as keyof typeof LEVELS]
        }`}
      />
    </div>
  );
};

export default Skills;
