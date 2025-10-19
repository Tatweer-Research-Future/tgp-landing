"use client";

import { ScrollReveal } from "@/src/components/lightswind/scroll-reveal";
import { useTranslations } from "@/hooks/use-translations";
import Globe from "@/src/components/lightswind/globe";
import { useMemo } from "react";

// Geographic coordinates for each MENA country
const countryData = [
  { country: "Libya", lat: 26.3351, lng: 17.2283, value: 215 },
  { country: "Syria", lat: 34.8021, lng: 38.9968, value: 138 },
  { country: "Sudan", lat: 15.7129, lng: 30.2176, value: 77 },
  { country: "Egypt", lat: 26.8206, lng: 30.8025, value: 65 },
  { country: "Jordan", lat: 30.5852, lng: 36.2384, value: 59 },
  { country: "Saudi Arabia", lat: 23.8859, lng: 45.0792, value: 48 },
  { country: "Yemen", lat: 15.5527, lng: 48.5164, value: 35 },
  { country: "Palestine", lat: 31.9522, lng: 35.2332, value: 14 },
  { country: "Iraq", lat: 33.2232, lng: 43.6793, value: 9 },
  { country: "Morocco", lat: 31.7917, lng: 7.0926, value: 5 },
  { country: "Algeria", lat: 28.0339, lng: 1.6596, value: 1 },
  { country: "Tunisia", lat: 33.8869, lng: 9.5375, value: 1 },
];

export function GlobeDistribution() {
  const t = useTranslations();
  // Our resident purple shade for glow (Lightswind Globe supports glowColor prop)
  const purple = "#884aff";

  // Build marker objects for Globe. Add color prop per marker for this purple if API supports
  const markers = useMemo(
    () =>
      countryData.map((item) => ({
        lat: item.lat,
        lng: item.lng,
        color: purple,
        size: 0.19,
      })),
    []
  );

  return (
    <section
      id="geographic-globe"
      className="relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh] pt-12 w-full bg-[#040409]"
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
      <div className="flex flex-col w-full max-w-6xl mx-auto px-4 lg:px-8 gap-4 pt-32 items-center justify-center">
        <div className="flex-1 w-full max-w-xl pt-20 flex flex-col justify-center items-center">
          <ScrollReveal
            size="xl"
            align="left"
            variant="default"
            textClassName=""
          >
            {t("statistics.geographicGlobe.title")}
          </ScrollReveal>
          <ScrollReveal size="sm" align="center" variant="muted">
            {t("statistics.geographicGlobe.subtitle")}
          </ScrollReveal>
        </div>
        <div className="flex-1 flex flex-col gap-12 w-full max-w-lg justify-center items-center">
          <div
            className="relative z-10 rounded-xl p-2 border border-transparent bg-white/5 dark:bg-card/10 backdrop-blur-lg md:backdrop-blur-xl"
            style={{ minHeight: 420 }}
          >
            <Globe
              dark={1}
              className="mx-auto my-6 min-h-[390px]"
              markers={markers}
              glowColor={purple}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobeDistribution;
