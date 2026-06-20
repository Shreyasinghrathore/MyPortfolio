"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, MapPin, Building2 } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import Image from "next/image";

const roles = [
  "Business Development Associate",
  "Client Relations Expert",
  "Growth Strategist",
  "Technology Consultant",
];

export function HeroSection() {
  const { theme } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, mounted]);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                isDark
                  ? "bg-violet-500/10 border-violet-500/30 text-violet-300"
                  : "bg-violet-50 border-violet-200 text-violet-700"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Heading */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`text-lg font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Shreya{" "}
                <span className="gradient-text">Rathore</span>
              </motion.h1>
            </div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 h-10"
            >
              <span
                className={`text-xl sm:text-2xl font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {mounted ? displayed : roles[0].slice(0, 1)}
                <span className="text-violet-500 animate-[blink_1s_infinite]">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-base sm:text-lg leading-relaxed max-w-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Building meaningful partnerships and driving innovation through strategic collaboration at{" "}
              <span className="text-violet-400 font-semibold">CloudNexus</span>.
              CSE graduate turning technical insight into business growth.
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <div className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                <Building2 size={14} className="text-violet-400" />
                <span>CloudNexus</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                <MapPin size={14} className="text-violet-400" />
                <span>Bhopal, India</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: "1+", label: "Year Exp." },
                { value: "20+", label: "Clients" },
                { value: "500+", label: "Connections" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</div>
                  <div className={`text-xs sm:text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#ai")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm shadow-lg hover:shadow-violet-500/30 transition-all"
              >
                <Sparkles size={16} />
                Ask Shreya AI
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#contact")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm transition-all ${
                  isDark
                    ? "border-white/10 text-white hover:border-violet-500/50 hover:bg-violet-500/10"
                    : "border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50"
                }`}
              >
                Let&apos;s Connect
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7C3AED, #3B82F6, #06B6D4, #7C3AED)",
                  animation: "spin-slow 8s linear infinite",
                  padding: "3px",
                }}
              >
                <div
                  className={`w-full h-full rounded-full ${isDark ? "bg-[#050816]" : "bg-[#F8FAFC]"}`}
                />
              </div>

              {/* Inner reverse ring */}
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, #A855F7, #06B6D4, #7C3AED, #A855F7)",
                  animation: "spin-reverse 12s linear infinite",
                  padding: "2px",
                  opacity: 0.5,
                }}
              >
                <div
                  className={`w-full h-full rounded-full ${isDark ? "bg-[#050816]" : "bg-[#F8FAFC]"}`}
                />
              </div>

              {/* Profile image container */}
              <div
                className="absolute inset-6 rounded-full overflow-hidden"
                style={{
                  boxShadow: isDark
                    ? "0 0 40px rgba(124, 58, 237, 0.5), 0 0 80px rgba(124, 58, 237, 0.2)"
                    : "0 0 30px rgba(124, 58, 237, 0.3)",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/shreya-profile.png"
                    alt="Shreya Rathore"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 288px, 384px"
                  />
                </div>
              </div>

              {/* Floating skill badges */}
              {[
                { label: "BDA", emoji: "🚀", pos: "top-0 right-0" },
                { label: "Strategy", emoji: "📈", pos: "bottom-8 left-0" },
                { label: "CloudNexus", emoji: "☁️", pos: "bottom-0 right-4" },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${badge.pos} px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 ${
                    isDark
                      ? "bg-white/10 border border-white/10 text-white backdrop-blur-xl"
                      : "bg-white border border-gray-100 text-gray-700 shadow-sm"
                  }`}
                >
                  <span>{badge.emoji}</span>
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-violet-500/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-violet-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
