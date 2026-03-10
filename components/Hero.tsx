"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t, lang } = useLang();
  const [displayed, setDisplayed] = useState("");

  // Restart typing whenever the language or typed string changes
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const target = t.hero.typed;
    const interval = setInterval(() => {
      if (i < target.length) {
        setDisplayed(target.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [t.hero.typed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center dot-grid overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          {t.hero.badge}
        </motion.div>

        {/* Typing headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold font-mono leading-tight mb-6 text-text-primary min-h-[3rem] flex items-center justify-center"
          dir={lang === "AR" ? "rtl" : "ltr"}
        >
          <span>{displayed}</span>
          <span className="ms-1 animate-pulse text-accent-blue">_</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 glow-blue"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="mailto:amirmezazigh667@gmail.com"
            className="px-8 py-4 rounded-xl font-semibold border border-border text-text-muted hover:border-accent-blue hover:text-accent-blue transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-16"
        >
          {["Next.js", "React", "TypeScript", "Node.js", "PWA", "Tailwind"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-surface border border-border text-text-muted"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown className="text-accent-blue" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
