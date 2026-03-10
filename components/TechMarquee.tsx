"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

const techs = [
  { symbol: "JS", name: "JavaScript" },
  { symbol: "⚛", name: "React" },
  { symbol: "⬡", name: "Node.js" },
  { symbol: "📱", name: "PWA" },
  { symbol: "☁", name: "SaaS Architecture" },
  { symbol: "⇄", name: "REST APIs" },
  { symbol: "⎇", name: "Git" },
  { symbol: "🗄", name: "SQL" },
  { symbol: "◈", name: "NoSQL" },
];

function MarqueeList() {
  const { t } = useLang();
  return (
    <div className="flex gap-4 animate-marquee whitespace-nowrap">
      {[...techs, ...techs].map((tech, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-text-muted text-sm font-medium hover:border-accent-blue/50 hover:text-accent-blue hover:shadow-[0_0_12px_rgba(0,212,255,0.15)] transition-all duration-300 cursor-default"
        >
          <span className="text-accent-blue font-mono text-xs">{tech.symbol}</span>
          {t.tech[tech.name as keyof typeof t.tech] || tech.name}
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 overflow-hidden border-y border-border"
    >
      <div className="flex gap-4 overflow-hidden">
        <MarqueeList />
        <MarqueeList />
      </div>
    </motion.section>
  );
}
