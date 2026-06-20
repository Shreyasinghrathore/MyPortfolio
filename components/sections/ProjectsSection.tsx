"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, TrendingUp, Lightbulb, Users } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import { portfolioData } from "@/data/portfolio";

const projectIcons: Record<string, React.ElementType> = {
  Business: TrendingUp,
  Strategy: Lightbulb,
  Leadership: Users,
};

const projectColors = [
  { from: "from-violet-600", to: "to-purple-700", glow: "rgba(124,58,237,0.3)", border: "border-violet-500/30" },
  { from: "from-blue-600", to: "to-indigo-700", glow: "rgba(59,130,246,0.3)", border: "border-blue-500/30" },
  { from: "from-cyan-500", to: "to-blue-600", glow: "rgba(6,182,212,0.3)", border: "border-cyan-500/30" },
];

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isDark ? "bg-violet-500/10 border border-violet-500/20 text-violet-300" : "bg-violet-50 border border-violet-200 text-violet-700"
          }`}>
            Work Highlights
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Strategic initiatives and leadership contributions that drove real business outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => {
            const color = projectColors[i % projectColors.length];
            const Icon = projectIcons[project.type] || TrendingUp;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className={`group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? `bg-white/[0.03] border border-white/10 hover:${color.border}`
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color.from} ${color.to} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Top section */}
                <div className="relative z-10">
                  {/* Icon + type */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color.from} ${color.to} flex items-center justify-center`}
                      style={{ boxShadow: `0 8px 24px ${color.glow}` }}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      isDark ? "bg-white/5 text-gray-400 border border-white/10" : "bg-gray-50 text-gray-500 border border-gray-100"
                    }`}>
                      {project.type}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className={`p-3 rounded-xl mb-4 ${
                    isDark ? "bg-green-500/5 border border-green-500/10" : "bg-green-50 border border-green-100"
                  }`}>
                    <div className={`text-xs font-bold mb-1 ${isDark ? "text-green-400" : "text-green-600"}`}>
                      📈 Business Impact
                    </div>
                    <div className={`text-xs ${isDark ? "text-green-300/80" : "text-green-700"}`}>
                      {project.impact}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                          isDark
                            ? "bg-violet-500/10 text-violet-300 border border-violet-500/20"
                            : "bg-violet-50 text-violet-700 border border-violet-100"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center justify-end">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isDark ? "bg-white/5 group-hover:bg-violet-500/20" : "bg-gray-50 group-hover:bg-violet-50"
                      } transition-colors`}
                    >
                      <ArrowUpRight size={14} className="text-violet-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to discuss */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className={`mt-12 p-8 rounded-2xl text-center ${
            isDark
              ? "bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20"
              : "bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-100"
          }`}
        >
          <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Want to discuss a project or collaboration opportunity?
          </p>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-lg hover:shadow-violet-500/30 transition-all"
          >
            Let&apos;s Talk →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
