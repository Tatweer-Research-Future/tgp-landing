"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function TargetsAndGoal() {
  return (
    <section
      id="targets"
      className="relative overflow-hidden bg-muted py-20 lg:py-32"
    >
      {/* subtle square background accents (dark mode only) */}
      <div className="pointer-events-none absolute -bottom-6 left-0 right-0 hidden select-none grid-cols-12 gap-6 opacity-10 dark:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-6 bg-[rgba(42,39,80,0.5)]" />
        ))}
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Who We Serve
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            A tight community of motivated learners and ambitious organizations.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <Card className="group h-full border-border bg-card p-8 transition-colors hover:border-secondary/60 hover:shadow-lg">
              <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                Who We Target
              </h3>
              <p className="text-muted-foreground dark:text-foreground/80">
                Ambitious students and graduates (born 1999+) in fields
                intersecting with technology, data, and innovation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {[
                  "AI-curious",
                  "Builder mindset",
                  "Team player",
                  "Learns fast",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-secondary/10 px-3 py-1 text-secondary transition-transform group-hover:scale-[1.03]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <Card className="group h-full border-border bg-card p-8 transition-colors hover:border-accent/60 hover:shadow-lg">
              <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                Our Goal
              </h3>
              <p className="text-muted-foreground dark:text-foreground/80">
                Create a pipeline of job‑ready professionals who can drive
                Libya’s digital transformation.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                {[
                  "Job‑ready portfolio",
                  "Professional habits",
                  "Mentor network",
                  "Real impact",
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="rounded-lg border border-border/70 bg-background px-3 py-2"
                    whileHover={{ scale: 1.03 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
