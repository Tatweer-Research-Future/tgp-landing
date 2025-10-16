"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { BookOpen, Brain, Users, User, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const GeographicMap = dynamic(
  () => import("@/components/geographic-map").then((mod) => mod.GeographicMap),
  {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  }
);

export function Statistics() {
  const t = useTranslations();

  const overviewStats = [
    { label: t("statistics.overview.applied"), value: 943 },
    { label: t("statistics.overview.selected"), value: 891 },
    { label: t("statistics.overview.tested"), value: 170 },
    { label: t("statistics.overview.interviewed"), value: 131 },
    { label: t("statistics.overview.accepted"), value: 50 },
    { label: t("statistics.overview.hired"), value: 35 },
  ];

  const geographicData = [
    { country: "Libya", value: 890 },
    { country: "Syria", value: 205 },
    { country: "Sudan", value: 80 },
    { country: "Egypt", value: 30 },
    { country: "Jordan", value: 39 },
    { country: "Saudi Arabia", value: 36 },
    { country: "Yemen", value: 20 },
    { country: "Palestine", value: 33 },
    { country: "Iraq", value: 9 },
    { country: "Morocco", value: 3 },
    { country: "Algeria", value: 5 },
    { country: "Tunisia", value: 5 },
  ];

  return (
    <section
      id="statistics"
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* Light-mode soft gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0 dark:hidden blur-2xl"
        aria-hidden
        style={{
          background:
            "radial-gradient(38vw 38vh at 14% 22%, oklch(0.62 0.21 300 / 0.08), transparent 60%), radial-gradient(42vw 38vh at 86% 88%, oklch(0.7 0.15 190 / 0.08), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t("statistics.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground dark:text-foreground/80">
            {t("statistics.description")}
          </p>
        </motion.div>

        {/* Overview Statistics - Funnel Chart Style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Application Funnel
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {overviewStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 text-center border-border bg-card hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Phase 2 Statistics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("statistics.phase2.title")}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-all">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">150</div>
                <div className="text-sm text-muted-foreground">
                  {t("statistics.phase2.english_exam")}
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-all">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">170</div>
                <div className="text-sm text-muted-foreground">
                  {t("statistics.phase2.iq_exam")}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 3 Statistics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("statistics.phase3.title")}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-all">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">262</div>
                <div className="text-sm text-muted-foreground">
                  {t("statistics.phase3.interviews")}
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-all">
                <User className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">20</div>
                <div className="text-sm text-muted-foreground">
                  {t("statistics.phase3.interviewers")}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 4 Statistics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("statistics.phase4.title")}
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-all mb-6">
              <div className="text-4xl font-bold text-primary mb-2">60</div>
              <div className="text-sm text-muted-foreground mb-6">
                {t("statistics.phase4.current_candidates")}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">59</div>
                  <div className="text-xs text-muted-foreground">
                    {t("statistics.phase4.libyan")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1</div>
                  <div className="text-xs text-muted-foreground">
                    {t("statistics.phase4.palestinian")}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("statistics.geographic.title")}
          </h3>
          <div className="mt-8">
            <GeographicMap data={geographicData} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
