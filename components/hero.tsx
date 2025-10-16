"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Springs to smooth mouse movement and avoid jank
  const mouseXSpring = useSpring(mouseX, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });
  const mouseYSpring = useSpring(mouseY, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // No stats in the new hero

  return (
    <section
      className="group relative z-0 overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-accent/10 pt-32 pb-20 lg:pt-40 lg:pb-32"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }}
    >
      {/* Dark-mode gradient overlay to preserve light theme */}
      <div
        className="pointer-events-none absolute inset-0 hidden -z-10 dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #121029 0%, rgba(18,16,41,0.92) 60%, #151230 100%)",
        }}
      />
      {/* Cursor-following glow blob (transform-based for better perf) */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-secondary/35 via-accent/25 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          x: useTransform(mouseXSpring, [0, 1], [-160, 160]),
          y: useTransform(mouseYSpring, [0, 1], [-160, 160]),
        }}
      />
      {/* Decorative square motif only in dark mode */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden select-none grid-cols-12 gap-6 opacity-20 dark:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-8 bg-[rgba(42,39,80,0.6)]" />
        ))}
      </div>

      {/* Floating interactive squares that react to mouse (smoothed) */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[15%] h-12 w-12 rounded-lg bg-secondary/20 backdrop-blur-sm"
        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: useTransform(mouseXSpring, [0, 1], [-10, 10]),
          y: useTransform(mouseYSpring, [0, 1], [-10, 10]),
        }}
      />
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[25%] h-8 w-8 rounded-md bg-accent/25 backdrop-blur-sm"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: useTransform(mouseXSpring, [0, 1], [8, -8]),
          y: useTransform(mouseYSpring, [0, 1], [8, -8]),
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-[20%] bottom-[20%] h-10 w-10 rounded-lg bg-primary/20 backdrop-blur-sm"
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: useTransform(mouseXSpring, [0, 1], [-8, 8]),
          y: useTransform(mouseYSpring, [0, 1], [-8, 8]),
        }}
      />
      <motion.div
        className="pointer-events-none absolute right-[25%] bottom-[15%] h-6 w-6 rounded-sm bg-accent/30 backdrop-blur-sm"
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: useTransform(mouseXSpring, [0, 1], [6, -6]),
          y: useTransform(mouseYSpring, [0, 1], [6, -6]),
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-balance text-5xl font-extrabold tracking-tight leading-[1.05] lg:text-7xl text-gradient-glow"
          >
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Training Graduate Program 2025
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl dark:text-foreground/80"
          >
            A comprehensive initiative equipping Libya’s most promising young
            talent with the capabilities to thrive in the digital economy —
            through real projects, expert mentorship, and outcomes that match
            industry standards.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="default"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                asChild
              >
                <a href="#motivation">How it works</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
