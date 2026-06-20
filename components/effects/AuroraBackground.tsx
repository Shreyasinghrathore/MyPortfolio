"use client";

import { useTheme } from "../layout/ThemeProvider";

export function AuroraBackground() {
  const { theme, mounted } = useTheme();

  if (!mounted) return null;

  if (theme === "light") {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#F8FAFC]" />
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora 12s ease infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora 15s ease infinite reverse",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Aurora layers */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(124, 58, 237, 0.4) 0%, transparent 60%)",
          animation: "aurora 15s ease infinite",
        }}
      />
      <div
        className="absolute top-0 right-0 w-full h-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% -5%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)",
          animation: "aurora 20s ease infinite reverse",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 w-full h-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(6, 182, 212, 0.3) 0%, transparent 60%)",
          animation: "aurora 25s ease infinite",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: "10%",
          left: "60%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          bottom: "20%",
          left: "10%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
