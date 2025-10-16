"use client";

import { Card } from "@/components/ui/card";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

function PhaseCard({ p, i }: { p: any; i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const animatedBorder = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--colors-secondary), transparent 80%)`;

  return (
    <motion.div
      key={p.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group relative"
    >
      <motion.div
        style={{ background: animatedBorder }}
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <Card
        className={cn(
          "h-full bg-card p-6 transition-all",
          i % 2 === 0
            ? "rounded-2xl border border-secondary/30 hover:shadow-md"
            : "rounded-lg border border-accent/30 hover:shadow-md"
        )}
      >
        <div className="text-sm font-medium text-secondary">Step {i + 1}</div>
        <h3 className="mt-2 text-lg font-semibold text-card-foreground">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground dark:text-foreground/80">
          {p.body}
        </p>
      </Card>
    </motion.div>
  );
}

export function Phases() {
  const t = useTranslations();

  const phases = [
    {
      title: t("phases.application.title"),
      body: t("phases.application.description"),
    },
    {
      title: t("phases.examination.title"),
      body: t("phases.examination.description"),
    },
    {
      title: t("phases.interview.title"),
      body: t("phases.interview.description"),
    },
    {
      title: t("phases.presentation.title"),
      body: t("phases.presentation.description"),
    },
    {
      title: t("phases.selection.title"),
      body: t("phases.selection.description"),
    },
  ];
  return (
    <section
      id="phases"
      className="relative overflow-hidden bg-muted py-20 lg:py-32"
    >
      {/* Light-mode soft gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0 dark:hidden blur-2xl"
        aria-hidden
        style={{
          background:
            "radial-gradient(38vw 38vh at 12% 20%, oklch(0.62 0.21 300 / 0.1), transparent 60%), radial-gradient(42vw 38vh at 88% 90%, oklch(0.7 0.15 190 / 0.09), transparent 60%)",
        }}
      />
      {/* square motif (dark mode only) */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-8 hidden select-none grid-cols-12 gap-6 opacity-10 dark:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-6 bg-[rgba(42,39,80,0.5)]" />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t("phases.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground dark:text-foreground/80">
            {t("phases.description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {phases.map((p, i) => (
            <PhaseCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
