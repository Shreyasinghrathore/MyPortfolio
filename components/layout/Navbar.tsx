"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Zap } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Ask AI", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? theme === "dark"
              ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
              : "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleNav("#home")}
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-500" />
                <Zap className="absolute inset-0 m-auto w-4 h-4 text-white" />
              </div>
              <span
                className={`font-bold text-lg ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } group-hover:text-violet-500 transition-colors`}
              >
                SR
              </span>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  whileHover={{ y: -2 }}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-black/5"
                  } ${
                    link.label === "Ask AI"
                      ? "text-violet-400 hover:text-violet-300 border border-violet-500/30 hover:border-violet-400/50 hover:bg-violet-500/10"
                      : ""
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Right: theme toggle + mobile menu */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${
                  theme === "dark"
                    ? "text-yellow-400 hover:bg-yellow-400/10"
                    : "text-violet-600 hover:bg-violet-100"
                }`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <button
                className={`md:hidden p-2 rounded-lg ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-white/5"
                    : "text-gray-600 hover:bg-black/5"
                }`}
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050816]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-12">
                <span className="text-white font-bold text-xl">SR</span>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="text-gray-300 w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left text-2xl font-semibold text-gray-300 hover:text-white hover:text-violet-400 transition-colors py-2 border-b border-white/5"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
