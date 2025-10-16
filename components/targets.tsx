"use client";

import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { useRef } from "react";

function Chip({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const dx = useTransform(mouseXSpring, [-50, 50], [-8, 8]);
  const dy = useTransform(mouseYSpring, [-30, 30], [-6, 6]);

  return (
    <motion.span
      ref={ref}
      style={{ x: dx, y: dy }}
      className="rounded-full bg-secondary/10 px-3 py-1 text-secondary transition-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.span>
  );
}

export function TargetsAndGoal() {
  const t = useTranslations();

  return (
    <section
      id="targets"
      className="relative overflow-hidden bg-muted py-20 lg:py-32"
    >
      {/* Light-mode soft gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0 dark:hidden blur-2xl"
        aria-hidden
        style={{
          background:
            "radial-gradient(40vw 40vh at 8% 15%, oklch(0.62 0.21 300 / 0.12), transparent 60%), radial-gradient(45vw 40vh at 92% 85%, oklch(0.7 0.15 190 / 0.1), transparent 60%)",
        }}
      />
      {/* subtle square background accents (dark mode only) */}
      <div className="pointer-events-none absolute -bottom-6 left-0 right-0 hidden select-none grid-cols-12 gap-6 opacity-10 dark:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-6 bg-[rgba(42,39,80,0.5)]" />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t("targets.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("targets.description")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <Card className="group h-full rounded-2xl border border-secondary/30 bg-gradient-to-b from-card to-secondary/5 p-8 shadow-sm transition-all hover:border-secondary/60 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                {t("targets.target.title")}
              </h3>
              <p className="text-muted-foreground dark:text-foreground/80">
                {t("targets.target.description")}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {[
                  t("targets.target.traits.0"),
                  t("targets.target.traits.1"),
                  t("targets.target.traits.2"),
                  t("targets.target.traits.3"),
                ].map((chip) => (
                  <Chip key={chip}>{chip}</Chip>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <Card className="group h-full rounded-2xl border border-accent/25 bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-all dark:border-accent/30 dark:bg-white/5 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                {t("targets.goal.title")}
              </h3>
              <p className="text-muted-foreground dark:text-foreground/80">
                {t("targets.goal.description")}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                {[
                  t("targets.goal.outcomes.0"),
                  t("targets.goal.outcomes.1"),
                  t("targets.goal.outcomes.2"),
                  t("targets.goal.outcomes.3"),
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 backdrop-blur-[1px]"
                    whileHover={{ scale: 1.03 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
