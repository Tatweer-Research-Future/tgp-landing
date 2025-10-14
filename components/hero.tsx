"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-accent/10 pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Data & AI Department
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground lg:text-7xl"
          >
            Transforming data into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              intelligent solutions
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            Building practical AI and data analytics tools that turn complex
            data into clear, actionable information for strategic
            decision-making. Leveraging modern technologies including LLMs and
            RAG to create secure, scalable solutions for the Libyan market.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/30 bg-transparent"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {[
            {
              value: 5,
              suffix: "+",
              label: "Major Projects",
              useSecondary: true,
            },
            {
              value: 3,
              suffix: "",
              label: "AI Platforms",
              useSecondary: false,
            },
            {
              value: 100,
              suffix: "%",
              label: "Secure & Scalable",
              useSecondary: true,
            },
            {
              value: 24,
              suffix: "/7",
              label: "System Uptime",
              useSecondary: false,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="text-center"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div
                className={`text-3xl font-bold lg:text-4xl ${
                  stat.useSecondary ? "text-secondary" : "text-accent"
                }`}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
