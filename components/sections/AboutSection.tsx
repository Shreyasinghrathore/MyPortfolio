"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, TrendingUp, Users, Briefcase } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import { portfolioData } from "@/data/portfolio";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const step = target / 40;
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setVal(target);
        clearInterval(interval);
      } else {
        setVal(Math.floor(current));
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Briefcase, label: "Year at CloudNexus", value: 1, suffix: "+", color: "from-violet-500 to-purple-600" },
    { icon: Users, label: "Enterprise Clients", value: 20, suffix: "+", color: "from-blue-500 to-indigo-600" },
    { icon: TrendingUp, label: "Connections Built", value: 500, suffix: "+", color: "from-cyan-500 to-blue-600" },
    { icon: Award, label: "Certifications", value: 1, suffix: "", color: "from-violet-500 to-blue-600" },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isDark ? "bg-violet-500/10 border border-violet-500/20 text-violet-300" : "bg-violet-50 border border-violet-200 text-violet-700"
          }`}>
            About Me
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            The Story Behind the{" "}
            <span className="gradient-text">Strategy</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div
              className={`p-8 rounded-2xl ${
                isDark
                  ? "bg-white/[0.03] border border-white/10"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {portfolioData.about}
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Client First", desc: "Every strategy starts with understanding client needs" },
                { label: "Data Driven", desc: "Insights that translate to measurable business outcomes" },
                { label: "Growth Minded", desc: "Continuously pushing boundaries and scaling impact" },
                { label: "Tech Fluent", desc: "CSE background bridging tech and business seamlessly" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-white/[0.03] border border-white/5" : "bg-gray-50 border border-gray-100"
                  }`}
                >
                  <div className="text-sm font-bold gradient-text mb-1">{item.label}</div>
                  <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              Education
            </h3>
            {portfolioData.education.map((edu) => (
              <div
                key={edu.institution}
                className={`relative p-6 rounded-2xl overflow-hidden group ${
                  isDark
                    ? "bg-white/[0.03] border border-white/10 hover:border-violet-500/30"
                    : "bg-white border border-gray-100 shadow-sm hover:border-violet-300"
                } transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-white" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-base mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {edu.degree}
                      </h4>
                      <p className="font-semibold text-violet-400 text-sm mb-3">{edu.institution}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className={`flex items-center gap-1.5 text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                          <MapPin size={12} className="text-violet-400" />
                          {edu.location}
                        </div>
                        <div className={`flex items-center gap-1.5 text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                          <Calendar size={12} className="text-violet-400" />
                          {edu.duration}
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          isDark ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-green-50 text-green-600 border border-green-200"
                        }`}>
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              Certifications
            </h3>
            {portfolioData.certifications.map((cert) => (
              <div
                key={cert.credentialId}
                className={`p-6 rounded-2xl group ${
                  isDark
                    ? "bg-white/[0.03] border border-white/10 hover:border-violet-500/30"
                    : "bg-white border border-gray-100 shadow-sm hover:border-violet-300"
                } transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {cert.name}
                    </h4>
                    <p className="text-violet-400 text-xs font-medium mb-2">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className={isDark ? "text-gray-500" : "text-gray-500"}>Issued: {cert.date}</span>
                      <span className={isDark ? "text-gray-600" : "text-gray-300"}>•</span>
                      <span className={isDark ? "text-gray-500" : "text-gray-500"}>ID: {cert.credentialId}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs px-2 py-0.5 rounded-md ${
                            isDark ? "bg-violet-500/10 text-violet-300 border border-violet-500/20" : "bg-violet-50 text-violet-700 border border-violet-100"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              className={`p-6 rounded-2xl text-center group ${
                isDark
                  ? "bg-white/[0.03] border border-white/10 hover:border-violet-500/30"
                  : "bg-white border border-gray-100 shadow-sm hover:border-violet-200"
              } transition-all duration-300`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="text-white" size={20} />
              </div>
              <div className={`text-3xl font-black mb-1 gradient-text`}>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
