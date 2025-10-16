"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const phases = [
  {
    title: "Online Application",
    body: "Submit personal details and documents",
  },
  { title: "Examination", body: "Standardized IQ & English tests" },
  { title: "Interview", body: "Shortlisted candidates attend interviews" },
  { title: "Training", body: "Intensive hands‑on training and real projects" },
  { title: "Hired", body: "Final evaluation and job offers" },
];

export function Phases() {
  return (
    <section
      id="phases"
      className="relative overflow-hidden bg-muted py-20 lg:py-32"
    >
      {/* Ambient shapes */}
      <motion.div
        className="pointer-events-none absolute -top-8 left-0 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            Program Phases 🚀
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            A clear, fair pathway from application to selection.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {phases.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full border-border bg-card p-6">
                <div className="text-sm font-medium text-secondary">
                  Step {i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-card-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
