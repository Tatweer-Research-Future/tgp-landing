"use client";

import { Card } from "@/components/ui/card";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";
import { ScrollTimeline } from "../src/components/lightswind/scroll-timeline";
import { ScrollReveal } from "../src/components/lightswind/scroll-reveal";

function PhaseCard({ p, i }: { p: any; i: number }) {
  const t = useTranslations();
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
        <div className="text-sm font-medium text-secondary">
          {t("phases.step")} {i + 1}
        </div>
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
      year: t("phases.step") + " 1",
      title: t("phases.application.title"),
      description: t("phases.application.description"),
    },
    {
      year: t("phases.step") + " 2",
      title: t("phases.examination.title"),
      description: t("phases.examination.description"),
    },
    {
      year: t("phases.step") + " 3",
      title: t("phases.interview.title"),
      description: t("phases.interview.description"),
    },
    {
      year: t("phases.step") + " 4",
      title: t("phases.training.title"),
      description: t("phases.training.description"),
    },
    {
      year: t("phases.step") + " 5",
      title: t("phases.selection.title"),
      description: t("phases.selection.description"),
    },
  ];
  return (
    <section
      id="phases"
      className="relative flex flex-col items-center justify-center min-h-[100vh] w-full bg-[#040409] p-0 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <div className="w-full max-w-8xl mx-auto px-6 py-0 flex flex-col items-center justify-center">
        <div className="w-full mt-16 max-w-5xl mx-auto">
          <ScrollTimeline
            events={phases}
            title={t("phases.title")}
            subtitle={t("phases.description")}
            progressIndicator={true}
            cardAlignment="alternating"
            revealAnimation="fade"
            dateFormat="badge"
            darkMode={true}
            parallaxIntensity={0.22}
            animationOrder="staggered"
          />
        </div>
      </div>
    </section>
  );
}
