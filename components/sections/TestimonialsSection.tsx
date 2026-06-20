"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import { portfolioData } from "@/data/portfolio";

export function TestimonialsSection() {
  const { theme, mounted } = useTheme();
  const isDark = theme === "dark";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) return;
    
    const el = scrollRef.current;
    if (!el) return;
    let offset = 0;
    let animId: number;

    const scroll = () => {
      offset += 0.4;
      if (offset >= el.scrollWidth / 2) offset = 0;
      el.scrollLeft = offset;
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [mounted]);

  const doubled = [...portfolioData.testimonials, ...portfolioData.testimonials];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isDark ? "bg-violet-500/10 border border-violet-500/20 text-violet-300" : "bg-violet-50 border border-violet-200 text-violet-700"
          }`}>
            Testimonials
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-hidden select-none"
        style={{ cursor: "default" }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-80 p-6 rounded-2xl ${
              isDark
                ? "bg-white/[0.03] border border-white/10"
                : "bg-white border border-gray-100 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Quote size={20} className="text-violet-400 mb-3 opacity-60" />
            <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              &ldquo;{t.text}&rdquo;
            </p>
            <div>
              <div className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{t.name}</div>
              <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
