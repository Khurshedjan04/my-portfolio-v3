"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ProjectItem, ProjectLink } from "../constants";

const linkIcon = (kind?: ProjectLink["kind"]) => {
  if (kind === "code") return <GitHubIcon fontSize="inherit" />;
  if (kind === "docs") return <DescriptionOutlinedIcon fontSize="inherit" />;
  return <ArrowOutwardIcon fontSize="inherit" />;
};

const imgClass = `w-full rounded-md object-cover
  outline outline-1 outline-white/[0.07] outline-offset-0
  group-hover:outline-2 group-hover:outline-[rgba(69,173,217,0.45)]
  group-hover:outline-offset-[2px] transition-all duration-75`;

const ProjectCard = ({ item }: { item: ProjectItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group rounded-xl border transition-all duration-200 ${
        open
          ? "bg-[rgba(69,173,217,0.05)] border-[rgba(69,173,217,0.25)]"
          : "border-transparent hover:bg-[rgba(69,173,217,0.05)] hover:border-[rgba(69,173,217,0.2)]"
      }`}
    >
      {/* ── Clickable header (toggles the expand) ── */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left px-5 py-4 cursor-pointer"
      >
        <div className="flex gap-5 items-start">
          <div className="flex-shrink-0 w-[110px] flex flex-col gap-2">
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={500}
              height={500}
              className={imgClass}
            />
            {item.imgSrc2 && (
              <Image
                src={item.imgSrc2}
                alt={item.title}
                width={500}
                height={500}
                className={imgClass}
              />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2
                className="text-[17px] font-semibold text-primary italic
                  group-hover:text-[#45add9] transition-colors duration-200"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {item.title}
              </h2>
              <span
                className={`flex-shrink-0 mt-0.5 text-secondary text-lg leading-none
                  transition-all duration-300 group-hover:text-[#45add9]
                  ${open ? "rotate-180 text-[#45add9]" : ""}`}
              >
                <KeyboardArrowDownIcon fontSize="inherit" />
              </span>
            </div>

            {/* High-level tags */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {item.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className="font-mono text-[9.5px] uppercase tracking-[0.12em]
                    text-[#45add9] bg-[rgba(69,173,217,0.12)]
                    border border-[rgba(69,173,217,0.3)] rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              className={`text-[12.5px] leading-relaxed text-secondary
                group-hover:text-primary transition-colors duration-200
                ${open ? "" : "line-clamp-2"}`}
            >
              {item.description} {item.isDBInactive && <span className="text-secondary">[MongoDB Atlas free tier cluster went inactive due to inactivity]</span>}
            </p>
          </div>
        </div>
      </button>

      {/* ── Expandable body ── */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <div className="mb-4 h-px bg-[rgba(69,173,217,0.15)]" />

            {/* Skill groups, one row per category */}
            <div className="flex flex-col gap-3.5">
              {item.stack.map((group, gi) => (
                <div key={gi}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-[14px] h-px bg-[#45add9] flex-shrink-0" />
                    <span className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-secondary">
                      {group.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="font-mono text-[10.5px] text-sky-300 tracking-wide
                          bg-[rgba(69,173,217,0.08)] border border-[rgba(69,173,217,0.18)]
                          rounded-full px-2.5 py-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            {item.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {item.links.map((link, li) => (
                  <a
                    key={li}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg
                      border border-[rgba(69,173,217,0.25)] bg-[rgba(69,173,217,0.06)]
                      px-3 py-1.5 font-mono text-[11px] text-primary
                      hover:bg-[rgba(69,173,217,0.16)]
                      hover:border-[rgba(69,173,217,0.5)] hover:text-[#45add9]
                      transition-all duration-200"
                  >
                    <span className="text-[13px] leading-none">{linkIcon(link.kind)}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
