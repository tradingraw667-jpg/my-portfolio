"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

type LineContent = React.ReactNode;

const K = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#61afef" }}>{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#98c379" }}>{children}</span>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#d19a66" }}>{children}</span>
);
const M = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#8892a4" }}>{children}</span>
);

export default function About() {
  const { t } = useLang();

  const lines: { num: number; indent: number; content: LineContent }[] = [
    { num: 1,  indent: 0, content: <M>{"{"}</M> },
    { num: 2,  indent: 1, content: <><K>&quot;developer&quot;</K><M>: </M><S>&quot;{t.about.developer}&quot;</S><M>,</M></> },
    { num: 3,  indent: 1, content: <><K>&quot;role&quot;</K><M>: </M><S>&quot;{t.about.role}&quot;</S><M>,</M></> },
    { num: 4,  indent: 1, content: <><K>&quot;experience&quot;</K><M>: </M><S>&quot;{t.about.experience}&quot;</S><M>,</M></> },
    { num: 5,  indent: 1, content: <><K>&quot;core_focus&quot;</K><M>: [</M></> },
    { num: 6,  indent: 2, content: <><S>&quot;{t.about.core_focus[0]}&quot;</S><M>,</M></> },
    { num: 7,  indent: 2, content: <><S>&quot;{t.about.core_focus[1]}&quot;</S><M>,</M></> },
    { num: 8,  indent: 2, content: <><S>&quot;{t.about.core_focus[2]}&quot;</S></> },
    { num: 9,  indent: 1, content: <><M>],</M></> },
    { num: 10, indent: 1, content: <><K>&quot;spoken_languages&quot;</K><M>: [</M><S>&quot;{t.about.spoken_languages[0]}&quot;</S><M>, </M><S>&quot;{t.about.spoken_languages[1]}&quot;</S><M>, </M><S>&quot;{t.about.spoken_languages[2]}&quot;</S><M>],</M></> },
    { num: 11, indent: 1, content: <><K>&quot;featured_projects&quot;</K><M>: {"{"}</M></> },
    { num: 12, indent: 2, content: <><K>&quot;snapHVAC&quot;</K><M>: </M><S>&quot;{t.about.featured_projects.snapHVAC}&quot;</S><M>,</M></> },
    { num: 13, indent: 2, content: <><K>&quot;Saroukh&quot;</K><M>: </M><S>&quot;{t.about.featured_projects.Saroukh}&quot;</S></> },
    { num: 14, indent: 1, content: <><M>{"}"}<span className="text-[#8892a4]">,</span></M></> },
    { num: 15, indent: 1, content: <><K>&quot;status&quot;</K><M>: </M><S>&quot;{t.about.status}&quot;</S></> },
    { num: 16, indent: 0, content: <M>{"}"}</M> },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-pad"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">
            {t.about.sectionProps}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            {t.about.title}
          </h2>
        </div>

        {/* Terminal window */}
        <div
          className="rounded-xl overflow-hidden border border-border"
          style={{ boxShadow: "0 0 60px rgba(0,212,255,0.06), 0 25px 50px rgba(0,0,0,0.6)" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-border"
            style={{ background: "#161622" }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <span className="ms-4 text-xs text-text-muted font-mono tracking-wide">
              {t.about.terminalName}
            </span>
          </div>

          {/* Code area */}
          <div
            className="py-4 font-mono text-sm leading-7 overflow-x-auto"
            style={{ background: "#0a0a12" }}
          >
            {lines.map((line) => (
              <div
                key={line.num}
                className="flex items-baseline px-4 hover:bg-white/[0.025] transition-colors"
              >
                <span
                  className="select-none text-right me-5 shrink-0 text-xs"
                  style={{ color: "#3a4150", minWidth: "1.75rem" }}
                >
                  {line.num}
                </span>
                <span style={{ paddingInlineStart: `${line.indent * 1.5}rem` }}>
                  {line.content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
