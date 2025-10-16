"use client";

import { Menu, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    const sections = [
      "#motivation",
      "#tracks",
      "#phases",
      "#partners",
      "#contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isNearBottom =
        scrollPosition + windowHeight >= documentHeight - 200;
      if (isNearBottom) {
        setActiveSection("#contact");
        return;
      }

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc =
    mounted &&
    (resolvedTheme === "dark"
      ? "/tgp25-logo-light.svg"
      : "/tgp25-logo-default.svg");

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
            {mounted && (
              <Image
                src={logoSrc || "/tgp25-logo-default.svg"}
                alt="TGP2025 Logo"
                width={140}
                height={32}
                className="h-8 w-auto"
                priority
              />
            )}
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            <motion.a
              href="#motivation"
              onClick={(e) => handleSmoothScroll(e, "#motivation")}
              className={`text-sm transition-colors hover:text-secondary relative ${
                activeSection === "#motivation"
                  ? "text-secondary font-medium"
                  : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Motivation
              {activeSection === "#motivation" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a
              href="#tracks"
              onClick={(e) => handleSmoothScroll(e, "#tracks")}
              className={`text-sm transition-colors hover:text-secondary relative ${
                activeSection === "#tracks"
                  ? "text-secondary font-medium"
                  : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Tracks
              {activeSection === "#tracks" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a
              href="#phases"
              onClick={(e) => handleSmoothScroll(e, "#phases")}
              className={`text-sm transition-colors hover:text-secondary relative ${
                activeSection === "#phases"
                  ? "text-secondary font-medium"
                  : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Phases
              {activeSection === "#phases" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a
              href="#partners"
              onClick={(e) => handleSmoothScroll(e, "#partners")}
              className={`text-sm transition-colors hover:text-secondary relative ${
                activeSection === "#partners"
                  ? "text-secondary font-medium"
                  : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Partners
              {activeSection === "#partners" && (
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

          <div className="flex items-center gap-2 md:gap-4">
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg p-2 hover:bg-secondary/20 transition-colors"
                aria-label="Toggle dark mode"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5 text-secondary" />
                ) : (
                  <Moon className="h-5 w-5 text-secondary" />
                )}
              </motion.button>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-6 p-6">
                  <SheetClose asChild>
                    <a
                      href="#motivation"
                      onClick={(e) => handleSmoothScroll(e, "#motivation")}
                      className="text-foreground hover:text-secondary"
                    >
                      Motivation
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#tracks"
                      onClick={(e) => handleSmoothScroll(e, "#tracks")}
                      className="text-foreground hover:text-secondary"
                    >
                      Tracks
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#phases"
                      onClick={(e) => handleSmoothScroll(e, "#phases")}
                      className="text-foreground hover:text-secondary"
                    >
                      Phases
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#partners"
                      onClick={(e) => handleSmoothScroll(e, "#partners")}
                      className="text-foreground hover:text-secondary"
                    >
                      Partners
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#contact"
                      onClick={(e) => handleSmoothScroll(e, "#contact")}
                      className="text-foreground hover:text-secondary"
                    >
                      Contact
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
