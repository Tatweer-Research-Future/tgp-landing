"use client";

import { BorderBeam } from "@/src/components/lightswind/border-beam";
import { CountUp } from "@/src/components/lightswind/count-up";
import { ScrollReveal } from "@/src/components/lightswind/scroll-reveal";
import { useTranslations } from "@/hooks/use-translations";
import { BookOpen, Brain, Users, User, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the map component with SSR turned off.
const DynamicGeographicMap = dynamic(
  () => import("./geographic-map").then((mod) => mod.GeographicMap),
  {
    ssr: false, // This is crucial
    loading: () => <div style={{ height: "500px", background: "#333" }} />, // Optional: a placeholder while the map loads
  }
);

export function Statistics() {
  const t = useTranslations();
  const stats = [
    {
      label: t("statistics.overview.applied"),
      value: 943,
      colorFrom: "#884aff",
      colorTo: "#41b8ff",
    },
    {
      label: t("statistics.overview.interviewed"),
      value: 131,
      colorFrom: "#2dd4bf",
      colorTo: "#38bdf8",
    },
    {
      label: t("statistics.overview.accepted"),
      value: 50,
      colorFrom: "#84fab0",
      colorTo: "#8fd3f4",
    },
  ];
  return (
    <section
      id="statistics"
      className="relative flex flex-col items-center justify-center min-h-[80vh] w-full bg-background overflow-hidden px-4 py-24 gap-12"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      {/* Dark gradient overlay at the top (match What We Provide) */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-20"
        style={{
          height: "72px",
          background:
            "linear-gradient(to bottom, rgba(4,4,9,0.45) 0%, rgba(4,4,9,0.00) 100%)",
        }}
      />
      {/* Background video with heavy gradient overlay (match What We Provide) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectPosition: "center 15%" }}
        >
          <source src="/assets/Video.webm" type="video/webm" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,14,29,0.50) 0%, rgba(28,26,52,0.45) 55%, rgba(18,18,38,0.80) 100%)",
          }}
        />
      </div>
      <div className="w-full max-w-2xl mx-auto pt-12 mb-10">
        <ScrollReveal align="center" size="xl" variant="default">
          {t("statistics.title")}
        </ScrollReveal>
        <ScrollReveal align="center" size="sm" variant="muted">
          {t("statistics.description")}
        </ScrollReveal>
      </div>
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl items-center justify-center">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="relative w-[95vw] max-w-xs p-0 group flex flex-col items-center justify-center"
          >
            {" "}
            <div className="relative z-20 rounded-xl bg-white/5 dark:bg-card/10 px-10 py-10 border border-transparent text-center backdrop-blur-lg md:backdrop-blur-xl flex flex-col items-center gap-4 w-full shadow-md">
              <BorderBeam
                size={72}
                duration={8}
                delay={idx * 0.4}
                colorFrom={stat.colorFrom}
                colorTo={stat.colorTo}
                glowIntensity={12}
                opacity={0.3}
                borderThickness={2}
                beamBorderRadius={20}
                className="z-10 pointer-events-none"
              />

              <CountUp
                value={stat.value}
                duration={2}
                className="text-6xl md:text-7xl font-extrabold text-primary"
                colorScheme="gradient"
                animationStyle="spring"
                separator=","
                interactive={true}
              />
              <span className="block text-lg font-semibold tracking-wide text-foreground/80">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
