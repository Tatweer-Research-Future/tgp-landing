"use client";

import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-secondary/10 via-background to-accent/10 pt-20 pb-8 lg:pt-32 lg:pb-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              extraordinary
            </span>
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground">
            Ready to transform your data into actionable insights? Our team
            specializes in creating custom AI and analytics solutions tailored
            to your business needs.
          </p>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Email</div>
                <a
                  href="mailto:info@future-tech.ly"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  info@future-tech.ly
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-medium text-foreground">Phone</div>
                <a
                  href="tel:+218930472576"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +218-93 0472 576
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Location</div>
                <div className="text-sm text-muted-foreground">
                  Alfiwhat, Benghazi, Libya
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-medium text-foreground">Website</div>
                <a
                  href="https://future-tech.ly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  future-tech.ly
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 border-t border-border pt-6 pb-2 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Future Company - Data & AI Department. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
