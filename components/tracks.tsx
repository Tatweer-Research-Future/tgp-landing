"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const tracks = [
  {
    title: "AI & Data Analysis",
    description:
      "From data wrangling to applied machine learning and analytics storytelling.",
    accent: "secondary",
  },
  {
    title: "Software & App Development",
    description:
      "Modern web and app engineering fundamentals, tooling, testing, and delivery.",
    accent: "accent",
  },
  {
    title: "Cybersecurity Networking & Telecommunications",
    description:
      "Foundations of secure systems, networks, and resilient digital infrastructure.",
    accent: "secondary",
  },
];

export function Tracks() {
  return (
    <section
      id="tracks"
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
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
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Program Tracks 🧭
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Choose a focus area while building shared professional foundations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full border-border bg-card p-8">
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {t.title}
                </h3>
                <p className="text-muted-foreground">{t.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
