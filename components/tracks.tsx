"use client";

import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Code2, Shield } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useRef } from "react";
import {
  GlowingCards,
  GlowingCard,
} from "../src/components/lightswind/glowing-cards";
import { Zap, Sparkles, Crown } from "lucide-react";
import { ScrollReveal } from "../src/components/lightswind/scroll-reveal";

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
      glowColor: "#10b981",
      icon: Brain, // AI
      iconStyle: "w-8 h-8",
    },
    {
      title: t("tracks.development.title"),
      description: t("tracks.development.description"),
      glowColor: "#8b5cf6",

      icon: Code2, // Software/dev
      iconStyle: "w-8 h-8",
    },
    {
      title: t("tracks.cybersecurity.title"),
      description: t("tracks.cybersecurity.description"),
      glowColor: "#f59e0b",
      icon: Shield, // Cybersecurity
      iconStyle: "w-10 h-10 p-1",
    },
  ];
  return (
    <section
      id="tracks"
      className="relative flex flex-col items-center justify-center min-h-[80vh] w-full bg-[#040409] py-24 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <div className="w-full max-w-8xl mx-auto px-6 py-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-0 mb-2">
          <ScrollReveal size="xl" align="center" variant="default">
            {t("tracks.title")}
          </ScrollReveal>
          <ScrollReveal size="sm" align="center" variant="muted">
            {t("tracks.description")}
          </ScrollReveal>
        </div>
        <GlowingCards
          enableGlow
          glowRadius={30}
          glowOpacity={0.6}
          animationDuration={600}
          gap="2.5rem"
          responsive
          className="mt-16"
          backgroundColor="transparent"
        >
          {tracks.map((track, idx) => (
            <GlowingCard
              key={track.title as string}
              glowColor={track.glowColor}
              className="space-y-3 flex flex-col items-center py-8 w-full h-full md:w-[350px] md:h-[350px]"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl mb-3"
                style={{ backgroundColor: track.glowColor + "22" }}
              >
                <track.icon
                  className="w-8 h-8"
                  style={{ color: track.glowColor }}
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground text-center">
                {track.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {track.description}
              </p>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
}
