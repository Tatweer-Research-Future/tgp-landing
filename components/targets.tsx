"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function TargetsAndGoal() {
  return (
    <section id="targets" className="bg-muted py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            Clear criteria and outcomes keep the program focused and effective.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-border bg-card p-8">
              <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                Who We Target
              </h3>
              <p className="text-muted-foreground">
                Ambitious students and graduates (born 1999+) in fields
                intersecting with technology, data, and innovation.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-border bg-card p-8">
              <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                Our Goal
              </h3>
              <p className="text-muted-foreground">
                To create a pipeline of job‑ready professionals who can drive
                Libya’s digital transformation.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
