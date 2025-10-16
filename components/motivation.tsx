"use client";

import { motion } from "framer-motion";

export function Motivation() {
  return (
    <section
      id="motivation"
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* Decorative orbs */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Why This Program Exists
          </h2>
          <div className="grid gap-6 text-left lg:grid-cols-3">
            <motion.div
              className="rounded-xl border border-border bg-card p-6"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                The Motivation
              </h3>
              <p className="text-muted-foreground">
                Smart graduates were struggling to get their first real‑world
                experience.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-border bg-card p-6"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                The Market
              </h3>
              <p className="text-muted-foreground">
                Great companies were searching for job‑ready talent to help them
                grow.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-border bg-card p-6"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                The Bridge
              </h3>
              <p className="text-muted-foreground">
                We connect both sides with elite skills, real projects, and
                mentorship that turns potential into performance.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
