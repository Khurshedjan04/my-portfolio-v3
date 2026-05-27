import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CV = () => {
  return (
    <section id="cv" className="flex flex-col pb-24">

      {/* Header */}
      <div className="flex items-baseline gap-4 mb-10">
        <h1 className="text-2xl text-primary italic" style={{ fontFamily: "Georgia, serif" }}>
          CV
        </h1>
        <div className="flex-1 h-px bg-[rgba(69,173,217,0.2)]" />
      </div>

      {/* Card */}
      <a
        target="_blank"
        href="/Xurshed_Alimmamadov_CV.pdf"
        className="group block rounded-[14px] border border-[rgba(69,173,217,0.15)]
          bg-slate-950/50 px-7 py-6
          hover:bg-[rgba(69,173,217,0.05)] hover:border-[rgba(69,173,217,0.35)]
          transition-all duration-200"
      >
        <div className="flex gap-6 items-center">

          {/* CV thumbnail */}
          <div
            className="flex-shrink-0 w-[130px] rounded-lg overflow-hidden
              outline outline-1 outline-white/[0.08] outline-offset-0
              group-hover:outline-[rgba(69,173,217,0.5)] transition-all duration-200"
          >
            <Image
              src="/assets/cv.png"
              alt="Xurshed CV"
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col gap-3">

            {/* Title */}
            <div className="flex items-center gap-2">
              <h2
                className="text-xl font-semibold text-primary italic
                  group-hover:text-[#45add9] transition-colors duration-200"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Xurshed Alimmamadov
              </h2>
              <span
                className="text-secondary text-sm mt-0.5
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  group-hover:text-[#45add9] transition-all duration-200"
              >
                <ArrowOutwardIcon fontSize="inherit" />
              </span>
            </div>

            {/* Description */}
            <p className="text-[13px] leading-relaxed text-secondary
              group-hover:text-primary transition-colors duration-200">
              Skip the abstractions. Take a look at my CV to analyze my
              technical execution and structural logic — a full picture of
              where I've been and what I've built.
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-1.5">
              {["Software Engineer", "Full-Stack Developer", "PDF · 2025"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10.5px] text-tertiary tracking-wide
                    bg-[rgba(69,173,217,0.05)] border border-[rgba(69,173,217,0.15)]
                    rounded-full px-2.5 py-0.5
                    group-hover:border-[rgba(69,173,217,0.35)]
                    group-hover:text-sky-300 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Reveal on hover */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="w-1 h-1 rounded-full bg-[#45add9]" />
              <span className="font-mono text-[11px] text-[#45add9] tracking-widest uppercase">
                Open PDF ↗
              </span>
            </div>

          </div>
        </div>
      </a>

    </section>
  );
};

export default CV;