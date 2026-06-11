const About = () => {
  const tags = [
    "C# · .NET",
    "Node.js",
    "SQL",
    "HLD / LLD",
    "UML · ERD",
    "Next.JS",
    "SDLC",
  ];

  return (
    <section
      id="about"
      className="pt-24 pb-4 flex flex-col gap-0 max-w-[720px]"
    >
      <div className="flex items-center gap-2.5 mb-6">
        <span className="w-5 h-px bg-[#45add9] flex-shrink-0" />
        <p
          className="font-mono italic text-[11px] tracking-[0.18em] uppercase text-[#45add9]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Software Engineer · Full-Stack Developer
        </p>
      </div>

      <h1 className="text-[22px] leading-[1.55] text-primary font-normal mb-8">
        <em className="italic text-[#45add9]"> building software</em> —
        {/* <br className="hidden sm:block" /> */}
        from backend internals to architectural boundaries.
      </h1>

      <div className="flex flex-col gap-4">
        <p className="text-[14px] leading-[1.8] text-secondary text-justify">
          I am a software engineer focused on backend internals, architectural
          bottlenecks, and building deterministic, scalable systems. My core
          execution environment revolves around{" "}
          <strong className="text-primary font-medium">C#</strong> and the{" "}
          <strong className="text-primary font-medium">.NET ecosystem</strong>,
          where I manage memory alignment and implement structural design
          patterns that ensure long-term maintainability.
        </p>
        <p className="text-[14px] leading-[1.8] text-secondary text-justify">
          My engineering scope spans deep{" "}
          <strong className="text-primary font-medium">HLD/LLD</strong>,
          algorithmic optimization, and relational data modeling with{" "}
          <strong className="text-primary font-medium">PostgreSQL</strong> and{" "}
          <strong className="text-primary font-medium">MySQL</strong>. Whether
          parsing logic with{" "}
          <strong className="text-primary font-medium">Node.js</strong> or
          mapping service boundaries through{" "}
          <strong className="text-primary font-medium">
            UML and ERD modeling
          </strong>
          , I view the entire SDLC through strict code quality and asynchronous
          efficiency.
        </p>
        <p className="text-[14px] leading-[1.8] text-secondary text-justify">
          Currently on a fully funded IT scholarship at{" "}
          <strong className="text-primary font-medium">PDP University</strong> —
          decoding system internals, stress-testing microservices, and shipping
          production-ready code across cross-functional teams.
          Spoken Languages: English (B2), Russian (B1), Uzbek (Native).
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-8 pt-6 border-t border-white/[0.05]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10.5px] tracking-wide text-tertiary
              bg-[rgba(69,173,217,0.06)] border border-[rgba(69,173,217,0.14)]
              rounded-full px-3 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-7">
        <span className="relative flex-shrink-0 w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-[#45add9] animate-ping opacity-50" />
          <span className="relative top-0 block w-full h-full rounded-full bg-[#45add9]" />
        </span>
        <span className="font-mono text-[11px] text-tertiary tracking-[0.08em]">
          Available for opportunities · Tashkent, UZ
        </span>
      </div>
    </section>
  );
};

export default About;
