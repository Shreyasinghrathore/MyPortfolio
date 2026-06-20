"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isDark ? "bg-violet-500/10 border border-violet-500/20 text-violet-300" : "bg-violet-50 border border-violet-200 text-violet-700"
          }`}>
            <Briefcase size={14} />
            Professional Journey
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className={`mt-4 text-base ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Where strategy meets execution
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 origin-top"
            style={{
              background: "linear-gradient(to bottom, transparent, #7C3AED, #3B82F6, transparent)",
            }}
          />

          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
              className="relative pl-20 mb-12"
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-6 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-lg"
                  style={{
                    boxShadow: isDark ? "0 0 30px rgba(124, 58, 237, 0.5)" : "0 8px 20px rgba(124, 58, 237, 0.3)",
                  }}
                >
                  <Building2 className="text-white" size={24} />
                </div>
                {/* Pulsing ring */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-violet-500/30"
                  style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
                />
              </div>

              {/* Card */}
              <div
                className={`p-8 rounded-2xl group transition-all duration-500 ${
                  isDark
                    ? "bg-white/[0.03] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.05]"
                    : "bg-white border border-gray-100 shadow-md hover:border-violet-200 hover:shadow-violet-100/50"
                }`}
                style={{
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-violet-400 text-base">{exp.company}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isDark ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-green-50 text-green-600 border border-green-200"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className={`flex items-center gap-1.5 text-sm justify-end ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        <Calendar size={13} className="text-violet-400" />
                        {exp.duration}
                      </div>
                      <div className={`flex items-center gap-1.5 text-sm justify-end ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        <MapPin size={13} className="text-violet-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2.5">
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      Key Responsibilities
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {exp.achievements.map((ach) => (
                        <div key={ach} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-violet-400 mt-0.5 flex-shrink-0" />
                          <span className={`text-xs leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            {ach}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          isDark
                            ? "bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20"
                            : "bg-violet-50 text-violet-700 border border-violet-100 hover:bg-violet-100"
                        } transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future node */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="relative pl-20"
          >
            <div className="absolute left-0 top-4 w-16 h-16 rounded-2xl border-2 border-dashed border-violet-500/30 flex items-center justify-center">
              <span className="text-violet-400 text-xl">✨</span>
            </div>
            <div className={`p-6 rounded-2xl border-2 border-dashed ${
              isDark ? "border-white/10 text-gray-500" : "border-gray-200 text-gray-400"
            }`}>
              <p className="text-sm font-medium">The story continues...</p>
              <p className="text-xs mt-1">Always open to exciting new chapters</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
