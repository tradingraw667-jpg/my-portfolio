"use client";

import { motion } from "framer-motion";
import { FiMonitor, FiServer, FiSmartphone } from "react-icons/fi";
import { useLang } from "@/context/LangContext";

const staticServices = [
  {
    icon: FiMonitor,
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    color: "#00d4ff",
  },
  {
    icon: FiServer,
    tags: ["Node.js", "REST APIs", "GraphQL", "PostgreSQL"],
    color: "#7c3aed",
  },
  {
    icon: FiSmartphone,
    tags: ["PWA", "Service Workers", "Offline-first", "Mobile"],
    color: "#00d4ff",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const { t } = useLang();

  const mergedServices = t.services.list.map((srv, i) => ({
    ...srv,
    ...staticServices[i],
  }));

  return (
    <section id="services" className="section-pad bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">
            {t.services.sectionProps}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            {t.services.title}
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {mergedServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-surface border border-border transition-all duration-300 hover:border-accent-blue/50 cursor-default"
                style={{
                  boxShadow: "0 0 0 rgba(0,212,255,0)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 30px rgba(0,212,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 0 rgba(0,212,255,0)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <Icon size={24} style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-bg border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Gradient line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, #7c3aed)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
