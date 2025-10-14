"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = ["#services", "#projects", "#contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're near the bottom of the page (within 200px)
      const isNearBottom = scrollPosition + windowHeight >= documentHeight - 200;
      
      if (isNearBottom) {
        setActiveSection("#contact");
        return;
      }
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/20 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/future-logo3.png"
              alt="Future Company Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            <motion.a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "#services")}
              className={`text-sm transition-colors hover:text-secondary relative ${
                activeSection === "#services" 
                  ? "text-secondary font-medium" 
                  : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Services
              {activeSection === "#services" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className={`text-sm transition-colors hover:text-secondary relative ${
                activeSection === "#projects" 
                  ? "text-secondary font-medium" 
                  : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Projects
              {activeSection === "#projects" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className={`text-sm transition-colors hover:text-secondary relative ${
                activeSection === "#contact" 
                  ? "text-secondary font-medium" 
                  : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact
              {activeSection === "#contact" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
