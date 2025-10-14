"use client";

import { Card } from "@/components/ui/card";
import {
  Brain,
  BarChart3,
  Database,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI Assistants",
    description:
      "Multi-agent RAG systems and LLM-powered chatbots for intelligent data retrieval and natural language interactions.",
    useSecondary: true,
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description:
      "Interactive visualization platforms with real-time metrics, geospatial mapping, and advanced filtering capabilities.",
    useSecondary: false,
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Robust data pipelines, automated reporting systems, and secure database architecture for enterprise applications.",
    useSecondary: true,
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Machine learning models for customer segmentation, trend forecasting, and data-driven strategic insights.",
    useSecondary: false,
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Automated report generation, workflow optimization, and intelligent document processing to eliminate manual tasks.",
    useSecondary: true,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security implementations with data encryption, access control, and compliance-ready architectures.",
    useSecondary: false,
  },
];

export function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="services" className="bg-muted py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Our Capabilities
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Comprehensive AI and data solutions designed for modern enterprises
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group border-border bg-card p-8 transition-all hover:border-secondary hover:shadow-lg h-full">
                  <motion.div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                      service.useSecondary
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
