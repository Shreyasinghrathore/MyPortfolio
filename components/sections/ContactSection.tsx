"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, Copy, Check, ExternalLink, Calendar } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import toast from "react-hot-toast";

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields!");
      return;
    }
    
    setSending(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.mailtoUrl) {
        // Open default email client with pre-filled content
        window.location.href = data.mailtoUrl;
        toast.success("Opening your email client...");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to process request");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "shreyasinghrathore310@gmail.com",
      href: "mailto:shreyasinghrathore310@gmail.com",
      color: "from-violet-600 to-purple-700",
      key: "email",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shreya-singh-rathore310",
      href: "https://www.linkedin.com/in/shreya-singh-rathore310/",
      color: "from-blue-600 to-indigo-700",
      key: "linkedin",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, Madhya Pradesh, India",
      href: "https://maps.google.com/?q=Bhopal,Madhya+Pradesh,India",
      color: "from-cyan-500 to-blue-600",
      key: "location",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Get In Touch
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Whether it&apos;s a business opportunity, partnership, or just a conversation — Shreya would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {contacts.map((c, i) => (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`p-5 rounded-2xl flex items-center gap-4 group transition-all duration-300 ${
                  isDark
                    ? "bg-white/[0.03] border border-white/10 hover:border-violet-500/30"
                    : "bg-white border border-gray-100 shadow-sm hover:border-violet-200"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
                  <c.icon className="text-white" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium mb-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{c.label}</div>
                  <div className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-gray-900"}`}>{c.value}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copy(c.value, c.key)}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? "hover:bg-white/5 text-gray-400" : "hover:bg-gray-100 text-gray-500"
                    }`}
                  >
                    {copied === c.key ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? "hover:bg-white/5 text-gray-400" : "hover:bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Schedule meeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className={`p-6 rounded-2xl ${
                isDark
                  ? "bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20"
                  : "bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-violet-400" size={20} />
                <span className={`font-bold text-sm ${isDark ? "text-white" : "text-gray-900"}`}>Schedule a Meeting</span>
              </div>
              <p className={`text-xs mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Book a 30-minute call to discuss business opportunities, partnerships, or career conversations.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/shreya-singh-rathore310/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
              >
                Connect on LinkedIn
                <ExternalLink size={12} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl space-y-5 ${
                isDark ? "bg-white/[0.03] border border-white/10" : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                Send a Message
              </h3>

              {[
                { id: "name", label: "Your Name", placeholder: "John Doe", type: "text" },
                { id: "email", label: "Your Email", placeholder: "john@company.com", type: "email" },
              ].map((field) => (
                <div key={field.id}>
                  <label className={`block text-xs font-medium mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${
                      isDark
                        ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-white/8"
                        : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-300 focus:bg-white"
                    }`}
                  />
                </div>
              ))}

              <div>
                <label className={`block text-xs font-medium mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500/50"
                      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-violet-300 focus:bg-white"
                  }`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm shadow-lg hover:shadow-violet-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
