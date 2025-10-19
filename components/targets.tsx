"use client";

import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "../src/components/lightswind/scroll-reveal";
import { BorderBeam } from "@/src/components/lightswind/border-beam";

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
      className="relative flex flex-col items-center justify-center min-h-[100vh] h-[100dvh] w-full overflow-hidden p-0 z-0"
    >
      {/* Dark gradient overlay at the top */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-20"
        style={{
          height: "160px", // adjust as needed for the fade
          background:
            "linear-gradient(to bottom, rgba(4,4,9,0.96) 0%, rgba(4,4,9,0.75) 40%, rgba(4,4,9,0.0) 100%)",
        }}
      />
      {/* Cropped hero background with dark gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ height: "100vh", maxHeight: "100vh", top: 0 }}
      >
        <Image
          src="/assets/stock-background.JPG"
          alt="TGP Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="w-full h-full opacity-80"
          draggable={false}
        />
        {/* Heavy theme-matching gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,14,29,0.89) 0%, rgba(28,26,52,0.82) 55%, rgba(18,18,38,0.95) 100%)",
          }}
        />
      </div>
      {/* Split layout: Cards left, Title right (like Motivation, but mirrored) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 gap-12 flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Cards - Left */}
        <div className="flex-1 flex flex-col gap-8 w-full max-w-lg">
          {[
            {
              title: t("targets.cards.hands_on.title"),
              content: t("targets.cards.hands_on.content"),
            },
            {
              title: t("targets.cards.mentorship.title"),
              content: t("targets.cards.mentorship.content"),
            },
            {
              title: t("targets.cards.applicable_skills.title"),
              content: t("targets.cards.applicable_skills.content"),
            },
          ].map((card, idx) => (
            <article
              key={card.title}
              style={{
                backdropFilter: "blur(16px)",
                background: "none",
                // border: "1px solid rgba(255, 255, 255, 0.13)",
                borderRadius: "16px",
                boxShadow: "0 4px 32px rgba(0,0,0,0.13)",
                padding: "2rem",
                color: "white",
                WebkitBackdropFilter: "blur(16px)",
                transition: "box-shadow .25s, border .25s",
              }}
              className="hover:shadow-2xl hover:border-primary/60"
            >
              <BorderBeam
                size={60}
                duration={7}
                delay={idx === 0 ? 0 : idx === 1 ? 0.5 : 1}
                colorFrom="#884aff"
                colorTo="#41b8ff"
                glowIntensity={10}
                opacity={0.5}
                borderThickness={2}
                beamBorderRadius={20}
                className="z-0"
              />
              <h2 className="text-lg font-bold mb-2 text-card-foreground">
                {card.title}
              </h2>
              <p className="text-base text-muted-foreground dark:text-foreground/80">
                {card.content}
              </p>
            </article>
          ))}
        </div>
        {/* Title - Right */}
        <div className="flex-1 w-full max-w-xl pt-20 flex flex-col justify-center items-start md:items-end">
          <ScrollReveal size="xl" align="right" variant="default">
            {t("targets.title")}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
