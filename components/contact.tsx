"use client";

import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";

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

function ContactCard({ item, t }: { item: any; t: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const animatedBorder = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, var(--colors-secondary), transparent 80%)`;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center"
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        style={{ background: animatedBorder }}
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bg}`}
      >
        <item.icon className={`h-6 w-6 ${item.color}`} />
      </div>
      <div>
        <div className="font-medium text-foreground">{t(item.label)}</div>
        <a
          href={item.href}
          className={`text-sm text-muted-foreground transition-colors ${item.hoverColor}`}
        >
          {item.text}
        </a>
      </div>
    </motion.div>
  );
}

export function Contact() {
  const t = useTranslations();

  const contactItems = [
    {
      label: "contact.email",
      text: "tgp2025@future-tech.ly",
      href: "mailto:tgp2025@future-tech.ly",
      icon: Mail,
      bg: "bg-secondary/10",
      color: "text-secondary",
      hoverColor: "hover:text-secondary",
    },
    {
      label: "contact.phone",
      text: "+218-93 0472 576",
      href: "tel:+218930472576",
      icon: Phone,
      bg: "bg-accent/10",
      color: "text-accent",
      hoverColor: "hover:text-accent",
    },
    {
      label: "contact.location",
      text: "Alfiwhat, Benghazi, Libya",
      href: "#",
      icon: MapPin,
      bg: "bg-secondary/10",
      color: "text-secondary",
      hoverColor: "",
    },
    {
      label: "contact.website",
      text: "future-tech.ly/tgp2025",
      href: "https://future-tech.ly/tgp2025",
      icon: Globe,
      bg: "bg-accent/10",
      color: "text-accent",
      hoverColor: "hover:text-accent",
      target: "_blank",
    },
  ];

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
            {t("contact.title")}
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("contact.description")}
          </p>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} t={t} />
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div className="mt-4 border-t border-border pt-2 pb-2 text-center">
          <p className="text-sm text-muted-foreground">{t("contact.footer")}</p>
        </div>
      </div>
    </section>
  );
}
