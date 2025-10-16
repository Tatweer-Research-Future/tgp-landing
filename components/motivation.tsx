"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { useRef } from "react";

export function Motivation() {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const card1X = useTransform(mouseXSpring, [-400, 400], [12, -12]);
  const card1Y = useTransform(mouseYSpring, [-200, 200], [8, -8]);
  const card2X = useTransform(mouseXSpring, [-400, 400], [-10, 10]);
  const card2Y = useTransform(mouseYSpring, [-200, 200], [-6, 6]);
  const card3X = useTransform(mouseXSpring, [-400, 400], [12, -12]);
  const card3Y = useTransform(mouseYSpring, [-200, 200], [8, -8]);

  return (
    <section
      id="motivation"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* Decorative orbs */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground lg:mb-12 lg:text-5xl">
            {t("motivation.title")}
          </h2>
          <div className="grid gap-6 text-left lg:grid-cols-3">
            <motion.div
              style={{ x: card1X, y: card1Y }}
              className="rounded-xl border border-border bg-card p-6"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {t("motivation.motivation.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("motivation.motivation.description")}
              </p>
            </motion.div>
            <motion.div
              style={{ x: card2X, y: card2Y }}
              className="rounded-xl border border-border bg-card p-6"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {t("motivation.market.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("motivation.market.description")}
              </p>
            </motion.div>
            <motion.div
              style={{ x: card3X, y: card3Y }}
              className="rounded-xl border border-border bg-card p-6"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {t("motivation.bridge.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("motivation.bridge.description")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
