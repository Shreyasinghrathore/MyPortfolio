"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Bot, User, Loader2, RefreshCw } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "Who is Shreya Rathore?",
  "What does she do at CloudNexus?",
  "What are her key skills?",
  "Can I hire her?",
  "What's her educational background?",
];

export function AIChatSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm **Shreya AI** — your guide to learning everything about Shreya Rathore. Ask me about her experience at CloudNexus, her skills, education, or anything else you'd like to know! 🚀",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const query = text || input.trim();
    if (!query || loading) return;

    setInput("");
    const userMsg: Message = { role: "user", content: query, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();
      const aiMsg: Message = {
        role: "assistant",
        content: data.response || "I'm sorry, I couldn't process that. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const fallback: Message = {
        role: "assistant",
        content:
          "I'm having a momentary issue, but I'm back! Shreya Rathore is a Business Development Associate at CloudNexus in Bhopal, India. She holds a B.Tech in CSE from SISTec-R (2021-2025) and specializes in client relations, growth strategy, and technology consulting. Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/shreya-singh-rathore310/).",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallback]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Chat cleared! Ask me anything about Shreya. 😊",
        timestamp: new Date(),
      },
    ]);
  };

  const ref = useRef(null);

  return (
    <section id="ai" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isDark ? "bg-violet-500/10 border border-violet-500/20 text-violet-300" : "bg-violet-50 border border-violet-200 text-violet-700"
          }`}>
            <Sparkles size={14} className="animate-pulse" />
            AI Powered
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
            Ask <span className="gradient-text">Shreya AI</span>
          </h2>
          <p className={`mt-4 text-base ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Powered by Gemini — ask me anything about Shreya's career, skills, or experience
          </p>
        </motion.div>

        {/* Chat container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-2xl overflow-hidden ${
            isDark
              ? "bg-white/[0.03] border border-white/10"
              : "bg-white border border-gray-100 shadow-xl"
          }`}
        >
          {/* Chat header bar */}
          <div
            className={`flex items-center justify-between p-4 border-b ${
              isDark ? "border-white/5 bg-white/[0.02]" : "border-gray-100 bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#050816]" />
              </div>
              <div>
                <div className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Shreya AI
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">Online • Ready to help</span>
                </div>
              </div>
            </div>
            <button
              onClick={clearChat}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? "hover:bg-white/5 text-gray-400" : "hover:bg-gray-100 text-gray-500"
              }`}
            >
              <RefreshCw size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-violet-600 to-blue-600"
                        : isDark
                        ? "bg-white/10"
                        : "bg-gray-100"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={14} className="text-white" />
                    ) : (
                      <Bot size={14} className={isDark ? "text-violet-400" : "text-violet-600"} />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-tr-sm"
                        : isDark
                        ? "bg-white/5 border border-white/10 text-gray-300 rounded-tl-sm"
                        : "bg-gray-50 border border-gray-100 text-gray-700 rounded-tl-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none prose-invert">
                        <ReactMarkdown
                          components={{
                            a: ({ href, children }) => (
                              <a href={href} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                                {children}
                              </a>
                            ),
                            strong: ({ children }) => (
                              <strong className={isDark ? "text-white font-semibold" : "text-gray-900 font-semibold"}>{children}</strong>
                            ),
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Loading indicator */}
            {loading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isDark ? "bg-white/10" : "bg-gray-100"}`}>
                  <Bot size={14} className={isDark ? "text-violet-400" : "text-violet-600"} />
                </div>
                <div className={`px-4 py-3 rounded-2xl rounded-tl-sm ${isDark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-100"}`}>
                  <div className="flex items-center gap-2">
                    <Loader2 size={14} className="text-violet-400 animate-spin" />
                    <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Shreya AI is thinking...</span>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          <div className={`px-4 py-3 border-t ${isDark ? "border-white/5" : "border-gray-100"}`}>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  disabled={loading}
                  className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-all ${
                    isDark
                      ? "border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400"
                      : "border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${isDark ? "border-white/5" : "border-gray-100"}`}>
            <div className={`flex gap-3 items-center p-3 rounded-xl ${
              isDark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-200"
            }`}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={loading}
                placeholder="Ask me about Shreya..."
                className={`flex-1 bg-transparent text-sm outline-none ${
                  isDark ? "text-white placeholder:text-gray-500" : "text-gray-900 placeholder:text-gray-400"
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  input.trim() && !loading
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg"
                    : isDark
                    ? "bg-white/5 text-gray-600"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <Send size={14} />
              </motion.button>
            </div>
            <p className={`text-center text-xs mt-2 ${isDark ? "text-gray-600" : "text-gray-400"}`}>
              Powered by Google Gemini • Responses may not be 100% accurate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
