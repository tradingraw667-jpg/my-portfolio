"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { useLang } from "@/context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "52da2bef-5932-43e3-93f5-577555f392dd",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad bg-surface/30">
      <div className="max-w-2xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">
            {t.contact.sectionProps}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            {t.contact.title}
          </h2>
          <p className="text-text-muted mt-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {status === "success" ? (
            <div className="text-center py-16 rounded-2xl bg-surface border border-border">
              <div className="w-16 h-16 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center mx-auto mb-4">
                <FiSend size={28} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {t.contact.messageSent}
              </h3>
              <p className="text-text-muted">
                {t.contact.messageSentDesc}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-8 rounded-2xl bg-surface border border-border"
            >
              {status === "error" && (
                <div className="p-4 text-sm text-red-400 bg-red-900/20 border border-red-500/30 rounded-lg text-center font-medium">
                  {t.contact.errorMessage || "Something went wrong. Please try again."}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text-primary placeholder-text-muted/50 text-sm outline-none transition-all duration-200 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text-primary placeholder-text-muted/50 text-sm outline-none transition-all duration-200 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text-primary placeholder-text-muted/50 text-sm outline-none transition-all duration-200 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:opacity-90 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
              >
                <FiSend size={16} className={status !== "sending" ? "rtl:-scale-x-100" : "animate-bounce"} />
                {status === "sending" ? (t.contact.sending || "Sending...") : t.contact.sendBtn}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-text-muted text-xs uppercase tracking-widest">
              {t.contact.orConnect}
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/tradingraw667-jpg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue/50 transition-all duration-200 hover:scale-110"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-mezazigh-459872244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue/50 transition-all duration-200 hover:scale-110"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-text-muted/50 text-xs mt-12">
          {t.contact.footer.replace("{year}", String(new Date().getFullYear()))}
        </p>
      </div>
    </section>
  );
}
