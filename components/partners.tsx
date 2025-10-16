"use client";

import { motion } from "framer-motion";

export function Partners() {
  return (
    <section id="partners" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Powered by
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground dark:text-foreground/80 lg:text-xl">
            Leading organizations supporting the Training Graduate Program
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {[
            { src: "/future-logo1.png", alt: "Future" },
            { src: "/Tatweer_Research_Logo.png", alt: "Tatweer" },
          ].map((logo, i) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{
                y: -6,
                scale: 1.08,
                transition: {
                  type: "spring",
                  stiffness: 700,
                  damping: 18,
                  mass: 0.4,
                  duration: 0.15,
                },
              }}
              className="opacity-80 transition hover:opacity-100"
              aria-label={logo.alt}
            >
              <div className="flex h-20 w-56 items-center justify-center sm:h-24 sm:w-64 md:h-28 md:w-72 lg:h-32 lg:w-80">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
