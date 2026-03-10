"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, PlayCircle, Star, ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function ProjectShowcase() {
  const { t, lang } = useLang();

  // We are mapping the static imagery and specific highlights for snapHVAC and Saroukh directly.
  // We can merge with t.projects.list to keep the translated titles and descriptions.
  
  type ShowcaseItem = typeof t.projects.list[number] & {
    highlightIcon: React.ReactNode;
    highlightText: string;
    imageSrc: string;
    accent: string;
    accentMuted: string;
    accentGlow: string;
    link: string;
    mockupStyle: string;
    reverse?: boolean;
  };
  
  const showcaseData: ShowcaseItem[] = [
    {
      ...t.projects.list[0], // snapHVAC translated data
      highlightIcon: <ShieldCheck className="w-4 h-4 text-accent-blue" />,
      highlightText: t.projects.list[0].badge,
      imageSrc: "/assets/snapHVAC-app.jpg",
      accent: "bg-accent-blue",
      accentMuted: "bg-accent-blue/20",
      accentGlow: "rgba(0,212,255,0.15)",
      link: "https://snaphvac.netlify.app/",
      mockupStyle: "border-zinc-800"
    },
    {
      ...t.projects.list[1], // Saroukh translated data
      highlightIcon: <Star className="w-4 h-4 text-accent-purple" />,
      highlightText: t.projects.list[1].badge,
      imageSrc: "/assets/saroukh-app.jpg",
      accent: "bg-accent-purple",
      accentMuted: "bg-accent-purple/20",
      accentGlow: "rgba(124,58,237,0.15)",
      link: "https://saroukh.netlify.app",
      mockupStyle: "border-zinc-800",
      reverse: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-bg overflow-hidden px-4 transition-colors duration-500">
      <div className="container max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-purple text-sm font-semibold tracking-widest uppercase mb-3">
            {t.projects.sectionProps}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            {t.projects.title}
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          {showcaseData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-[3rem] bg-surface text-text-primary p-0 overflow-hidden border border-border shadow-2xl"
              style={{
                boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px ${project.accentGlow}`
              }}
            >
              <div className="p-10 lg:p-20 relative">
                {/* Background Accents */}
                <div className={`absolute top-0 end-0 w-96 h-96 ${project.accentMuted} rounded-full blur-[100px] -me-48 -mt-48`} />
                <div className={`absolute bottom-0 start-0 w-64 h-64 ${project.accentMuted} rounded-full blur-[80px] -ms-32 -mb-32`} />

                <div className={`relative z-10 flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                  
                  {/* Text Content */}
                  <div className="lg:w-1/2 text-center lg:text-start">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="mb-8"
                    >
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-text-primary/80 font-bold uppercase tracking-widest text-xs">
                        {project.highlightIcon}
                        {project.highlightText}
                      </span>
                    </motion.div>

                    <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-none text-text-primary">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-base md:text-lg mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
                      {project.description}
                    </p>

                    <ul className="space-y-3 mb-10 text-start inline-block lg:w-full">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-text-primary/90">
                          <div className={`w-1.5 h-1.5 rounded-full ${project.accent}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center h-14 px-8 bg-text-primary text-bg hover:opacity-90 font-bold text-xs uppercase tracking-widest gap-3 rounded-2xl transition-opacity w-full sm:w-auto"
                      >
                        {t.projects.viewProject}
                        <ArrowUpRight className="w-5 h-5 rtl:-scale-x-100" />
                      </a>
                    </div>
                  </div>

                  {/* Interactive App Mockup */}
                  <div className="lg:w-1/2 relative">
                    <motion.div
                      initial={{ opacity: 0, rotate: project.reverse ? -12 : 12, y: 100 }}
                      whileInView={{ opacity: 1, rotate: project.reverse ? 6 : -6, y: 0 }}
                      transition={{ duration: 1, ease: "circOut" }}
                      className={`relative z-10 w-[260px] md:w-[300px] mx-auto aspect-[9/19] bg-bg rounded-[2.5rem] border-8 ${project.mockupStyle} shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden`}
                    >
                      <Image
                        src={project.imageSrc}
                        alt={`${project.title} UI`}
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Phone Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl" />
                    </motion.div>

                    {/* Decorative elements behind phone */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] ${project.accentMuted} rounded-full blur-[100px] -z-10`} />
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
