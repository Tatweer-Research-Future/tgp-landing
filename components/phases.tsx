"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslations } from '@/hooks/use-translations';

export function Phases() {
  const t = useTranslations();
  
  const phases = [
    {
      title: t('phases.application.title'),
      body: t('phases.application.description'),
    },
    { 
      title: t('phases.examination.title'), 
      body: t('phases.examination.description') 
    },
    { 
      title: t('phases.interview.title'), 
      body: t('phases.interview.description') 
    },
    { 
      title: t('phases.presentation.title'), 
      body: t('phases.presentation.description') 
    },
    { 
      title: t('phases.selection.title'), 
      body: t('phases.selection.description') 
    },
  ];
  return (
    <section
      id="phases"
      className="relative overflow-hidden bg-muted py-20 lg:py-32"
    >
      {/* square motif (dark mode only) */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-8 hidden select-none grid-cols-12 gap-6 opacity-10 dark:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-6 bg-[rgba(42,39,80,0.5)]" />
        ))}
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t('phases.title')}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground dark:text-foreground/80">
            {t('phases.description')}
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
              whileHover={{ y: -6 }}
            >
              <Card className="h-full border-border bg-card p-6 transition-colors hover:border-secondary/60 hover:shadow-lg">
                <div className="text-sm font-medium text-secondary">
                  Step {i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-card-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground dark:text-foreground/80">
                  {p.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
