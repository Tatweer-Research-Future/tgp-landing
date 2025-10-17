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
import { useTranslations } from "@/hooks/use-translations";
import { useTheme } from "next-themes";
import InteractiveGridBackground from "../src/components/lightswind/interactive-grid-background";

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
  const t = useTranslations();
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
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
      className="group relative z-0 overflow-hidden flex items-center justify-center min-h-screen h-[100dvh] p-0" // 100vh and centering
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      {/* Interactive Grid Background with fade effect behind main hero */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <InteractiveGridBackground
          gridSize={40}
          gridColor="#d1d5db"
          darkGridColor="#1f2937"
          effectColor="#6f3bb2"
          darkEffectColor="#6f3bb2"
          trailLength={5}
          glow
          glowRadius={30}
          showFade
          idleSpeed={0.1}
          fadeIntensity={25}
        />
      </div>
      <div className="relative z-10 mx-[70px] max-w-7xl px-4">
        <motion.div
          className="mx-auto max-w-4xl w-full flex flex-col items-start text-left gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-balance text-5xl font-bold tracking-tight text-foreground lg:text-7xl text-left"
          >
            {t("hero.title")}{" "}
            <span
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              style={{
                backgroundBlendMode: "multiply",
                mixBlendMode: "screen",
                color: "rgb(255, 255, 255,0.2)",
              }}
            >
              {t("hero.year")}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl dark:text-foreground/80 text-left"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start justify-start gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="default"
                className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black transition-colors duration-200"
                asChild
                // Removed invalid `style` prop for hover; hover styles are handled by Tailwind classes above.
              >
                <a href="#motivation">{t("hero.cta")}</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
