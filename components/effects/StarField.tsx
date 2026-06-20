"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../layout/ThemeProvider";

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme, mounted } = useTheme();

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: { x: number; y: number; r: number; alpha: number; speed: number; drift: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: theme === "dark" ? 180 : 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.7 + 0.1,
        speed: Math.random() * 0.3 + 0.05,
        drift: (Math.random() - 0.5) * 0.2,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    let time = 0;
    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (theme === "dark") {
        // Mouse reactive glow
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 300);
        gradient.addColorStop(0, "rgba(124, 58, 237, 0.08)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          star.y -= star.speed;
          star.x += star.drift;
          if (star.y < -5) { star.y = canvas.height + 5; star.x = Math.random() * canvas.width; }
          if (star.x < -5 || star.x > canvas.width + 5) star.x = Math.random() * canvas.width;

          const twinkle = Math.sin(time * 2 + star.alpha * 10) * 0.3 + 0.7;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * twinkle})`;
          ctx.fill();
        });

        // Occasional shooting star
        if (Math.random() < 0.002) {
          const sx = Math.random() * canvas.width;
          const sy = Math.random() * canvas.height * 0.5;
          const len = Math.random() * 80 + 40;
          const grad = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.5);
          grad.addColorStop(0, "rgba(255,255,255,0)");
          grad.addColorStop(0.5, "rgba(255,255,255,0.8)");
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + len, sy + len * 0.5);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } else {
        // Light mode subtle particles
        stars.forEach((star) => {
          star.y -= star.speed * 0.3;
          if (star.y < -5) { star.y = canvas.height; star.x = Math.random() * canvas.width; }
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(124, 58, 237, ${star.alpha * 0.15})`;
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: theme === "dark" ? 1 : 0.5 }}
    />
  );
}
