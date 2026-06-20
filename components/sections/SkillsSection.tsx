"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../layout/ThemeProvider";
import { portfolioData } from "@/data/portfolio";
import { TrendingUp, Code2, Heart } from "lucide-react";

const skillCategories = [
  {
    title: "Business & Strategy",
    icon: TrendingUp,
    color: "from-violet-600 to-purple-700",
    glow: "rgba(124, 58, 237, 0.3)",
    skills: portfolioData.skills.business,
  },
  {
    title: "Technical Skills",
    icon: Code2,
    color: "from-blue-600 to-indigo-700",
    glow: "rgba(59, 130, 246, 0.3)",
    skills: portfolioData.skills.technical,
  },
  {
    title: "Soft Skills",
    icon: Heart,
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6, 182, 212, 0.3)",
    skills: portfolioData.skills.soft,
  },
];

export function SkillsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Expertise
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className={`mt-4 text-base ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            A blend of business acumen and technical fluency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.15 }}
              className={`p-8 rounded-2xl group transition-all duration-500 ${
                isDark
                  ? "bg-white/[0.03] border border-white/10 hover:border-violet-500/30"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-200"
              }`}
              whileHover={{ y: -8 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}
                  style={{ boxShadow: `0 8px 24px ${cat.glow}` }}
                >
                  <cat.icon className="text-white" size={22} />
                </div>
                <h3 className={`font-bold text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.15 + si * 0.05 + 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`text-sm px-3 py-1.5 rounded-lg font-medium cursor-default transition-all ${
                      isDark
                        ? "bg-white/[0.05] text-gray-300 border border-white/5 hover:bg-violet-500/15 hover:border-violet-500/30 hover:text-violet-300"
                        : "bg-gray-50 text-gray-700 border border-gray-100 hover:bg-violet-50 hover:border-violet-200 hover:text-violet-700"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bars for key skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className={`mt-12 p-8 rounded-2xl ${
            isDark ? "bg-white/[0.03] border border-white/10" : "bg-white border border-gray-100 shadow-sm"
          }`}
        >
          <h3 className={`text-lg font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Core Competency Levels
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { skill: "Business Development", level: 90 },
              { skill: "Client Relationship Management", level: 92 },
              { skill: "Strategic Planning", level: 85 },
              { skill: "Market Research", level: 88 },
              { skill: "Communication & Presentation", level: 94 },
              { skill: "Data Analysis", level: 78 },
            ].map((item, i) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>{item.skill}</span>
                  <span className="text-violet-400 font-semibold">{item.level}%</span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-white/5" : "bg-gray-100"}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
