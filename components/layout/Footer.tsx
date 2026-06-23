"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github, ArrowUp, Zap } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative">
      {/* Wave */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16">
          <path
            d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
            fill={isDark ? "rgba(255,255,255,0.02)" : "rgba(124,58,237,0.04)"}
          />
        </svg>
      </div>

      <div className={`${isDark ? "bg-white/[0.02] border-t border-white/5" : "bg-white border-t border-gray-100"} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo + tagline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <div>
                <div className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Shreya Rathore</div>
                <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Business Development Associate</div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/shreya-singh-rathore310/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:shreyasinghrathore310@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/Shreyasinghrathore", label: "GitHub" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isDark
                      ? "bg-white/5 text-gray-400 hover:bg-violet-500/20 hover:text-violet-300"
                      : "bg-gray-50 text-gray-500 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Back to top */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollTop}
              className={`flex items-center gap-2 text-xs px-4 py-2 rounded-lg transition-all ${
                isDark
                  ? "bg-white/5 text-gray-400 hover:bg-violet-500/20 hover:text-violet-300"
                  : "bg-gray-50 text-gray-500 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              <ArrowUp size={12} />
              Back to Top
            </motion.button>
          </div>

          <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs ${
            isDark ? "border-white/5 text-gray-600" : "border-gray-100 text-gray-400"
          }`}>
            <span>© 2025 Shreya Rathore. All rights reserved.</span>
            <span>
              Built with{" "}
              <span className="text-violet-400">Next.js 15</span> · Designed with ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
