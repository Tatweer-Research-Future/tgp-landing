"use client";

import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Code2, Shield } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useRef } from "react";

function TrackCard({ track, i }: { track: any; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 20, mass: 0.4 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseYSpring, [-100, 100], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-150, 150], [-14, 14]);
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      key={track.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      style={{ rotateX, rotateY, scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
    >
      <Card className="group h-full border-border bg-card p-8 transition-colors hover:border-secondary/60 hover:shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
              track.accent === "secondary"
                ? "bg-secondary/10 text-secondary"
                : "bg-accent/10 text-accent"
            }`}
          >
            <track.icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground">
            {track.title}
          </h3>
        </div>
        <p className="text-muted-foreground">{track.description}</p>
      </Card>
    </motion.div>
  );
}

export function Tracks() {
  const t = useTranslations();

  const tracks = [
    {
      title: t("tracks.ai.title"),
      description: t("tracks.ai.description"),
      accent: "secondary",
      icon: Brain,
    },
    {
      title: t("tracks.development.title"),
      description: t("tracks.development.description"),
      accent: "accent",
      icon: Code2,
    },
    {
      title: t("tracks.cybersecurity.title"),
      description: t("tracks.cybersecurity.description"),
      accent: "secondary",
      icon: Shield,
    },
  ];
  return (
    <section
      id="tracks"
      className="relative overflow-hidden bg-background py-20 lg:py-32"
      style={{ perspective: 1200 }}
    >
      {/* Light-mode soft gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0 dark:hidden blur-2xl"
        aria-hidden
        style={{
          background:
            "radial-gradient(36vw 36vh at 10% 18%, oklch(0.62 0.21 300 / 0.08), transparent 60%), radial-gradient(40vw 36vh at 90% 88%, oklch(0.7 0.15 190 / 0.08), transparent 60%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/4 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t("tracks.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground dark:text-foreground/80">
            {t("tracks.description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <TrackCard key={t.title} track={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
