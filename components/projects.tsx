"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AskLibya Platform",
    category: "Public Sector AI",
    description:
      "Libya's first AI assistant for financial data, featuring a Multi-agent RAG system connected to Central Bank reports and an interactive analytics dashboard for documentary credits visualization.",
    tags: ["RAG", "LLM", "Analytics", "Public Data"],
    image: "/Ask Libya.png",
    useSecondary: true,
  },
  {
    title: "AskWahda Enterprise Platform",
    category: "Banking & Finance",
    description:
      "Secure internal AI and analytics platform for Wahda Bank with proprietary data chatbot, geospatial revenue mapping, and real-time performance metrics across all branches.",
    tags: ["Enterprise AI", "Banking", "Security", "Geospatial"],
    image: "/Ask Wahda.png",
    useSecondary: false,
  },
  {
    title: "TGP2025 Management System",
    category: "HR & Recruitment",
    description:
      "Comprehensive graduate program management platform with AI-powered candidate evaluation, structured interview scoring, and administrative analytics dashboard.",
    tags: ["AI Evaluation", "HR Tech", "Analytics"],
    image: "/TGP Management.png",
    useSecondary: true,
  },
  {
    title: "Customer Segmentation Engine",
    category: "Machine Learning",
    description:
      "Advanced ML-powered customer segmentation system classifying banking customers into strategic segments (Starters, High Potentials, VIPs, At-Risk, Companies) with interactive exploration.",
    tags: ["Machine Learning", "Segmentation", "Banking"],
    image: "/Customer Segmentation Engine.png",
    useSecondary: false,
  },
  {
    title: "Automated Reporting System",
    category: "Process Automation",
    description:
      "Intelligent report generation system that transforms raw Excel data into professional, formatted Word documents with dynamic KPIs, charts, and automated email distribution.",
    tags: ["Automation", "Reporting", "NLP"],
    image: "/Automated Reporting System.png",
    useSecondary: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Featured Projects
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Real-world AI solutions delivering measurable impact
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className={`group overflow-hidden border-border bg-card transition-all hover:shadow-xl ${
                    project.useSecondary
                      ? "hover:border-secondary"
                      : "hover:border-accent"
                  }`}
                >
                  <div
                    className={`grid gap-8 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    <div
                      className={`relative aspect-video overflow-hidden bg-muted lg:aspect-auto lg:min-h-[400px] ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ 
                          transform: project.title === "AskWahda Enterprise Platform" 
                            ? 'scale(1.8) translate(-5%, 5%)' 
                            : project.title === "AskLibya Platform"
                            ? 'scale(1.5) translate(0%, 5%)'
                            : 'scale(1.5)',
                          objectPosition: 'center center',
                          height: '100%',
                          width: '100%'
                        }}
                      />
                      <div
                        className={`absolute inset-0 ${
                          project.useSecondary
                            ? "bg-gradient-to-t from-primary/24 to-transparent"
                            : "bg-gradient-to-t from-accent/24 to-transparent"
                        }`}
                      />
                    </div>

                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <Badge
                        variant="secondary"
                        className={`mb-4 w-fit ${
                          project.useSecondary
                            ? "bg-secondary/10 text-secondary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {project.category}
                      </Badge>

                      <h3 className="mb-4 text-2xl font-bold text-card-foreground lg:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-border bg-muted text-muted-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
