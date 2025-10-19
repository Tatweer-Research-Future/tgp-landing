"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { useRef } from "react";
import { BorderBeam } from "../src/components/lightswind/border-beam";
import { ScrollReveal } from "../src/components/lightswind/scroll-reveal";
import { useLanguage } from "@/components/language-provider";

export function Motivation() {
  const t = useTranslations();
  const { language } = useLanguage();
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
      className="relative overflow-hidden flex flex-col items-center justify-center min-h-[100vh] w-full bg-[#040409] p-0"
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
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 lg:px-8 gap-12 items-center justify-center">
        <div className="flex-1 w-full max-w-xl pt-20 flex flex-col justify-center items-center">
          <ScrollReveal size="xl" align="left" variant="default">
            {t("motivation.title")}
          </ScrollReveal>
        </div>
        <div className="flex-1 flex flex-col gap-12 w-full max-w-lg">
          {[
            "motivation.motivation",
            "motivation.market",
            "motivation.bridge",
          ].map((key, idx) => (
            <div key={key} className="relative w-full">
              {" "}
              <div
                className={`relative z-10 rounded-xl bg-white/5 dark:bg-card/10 px-7 py-8 md:px-9 border border-transparent backdrop-blur-lg md:backdrop-blur-xl ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
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

                <h3
                  className={`mb-2 text-xl font-semibold text-card-foreground ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t(`${key}.title`)}
                </h3>
                <p
                  className={`text-muted-foreground ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
