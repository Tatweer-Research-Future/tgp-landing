"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
    <section className="relative z-0 overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-accent/10 pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Dark-mode gradient overlay to preserve light theme */}
      <div
        className="pointer-events-none absolute inset-0 hidden -z-10 dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #121029 0%, rgba(18,16,41,0.92) 60%, #151230 100%)",
        }}
      />
      {/* Decorative gradient orbs */}
      {/* Decorative square motif only in dark mode */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden select-none grid-cols-12 gap-6 opacity-20 dark:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-8 bg-[rgba(42,39,80,0.6)]" />
        ))}
      </div>

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
            {[
              { w: "Training", c: "text-primary" },
              { w: "Graduate", c: "text-secondary" },
              { w: "Program", c: "text-accent" },
              { w: "2025", c: "text-primary" },
            ].map((part, i) => (
              <span
                key={part.w}
                className={`${part.c} inline-block px-1 sm:px-2`}
              >
                {part.w}
                {i !== 3 ? " " : ""}
              </span>
            ))}
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
