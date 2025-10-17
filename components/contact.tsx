"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export function Contact() {
  const t = useTranslations();
  const navSections = [
    { href: "#motivation", label: t("navigation.motivation") },
    { href: "#targets", label: t("navigation.program") },
    { href: "#tracks", label: t("navigation.tracks") },
    { href: "#phases", label: t("navigation.phases") },
    { href: "#statistics", label: t("navigation.statistics") },
    { href: "#partners", label: t("navigation.partners") },
    { href: "#contact", label: t("navigation.contact") },
  ];

  return (
    <footer
      id="footer"
      className="bg-[#040409] border-0 pt-24 pb-24 text-white relative"
      style={{
        WebkitMaskImage:
          "linear-gradient(to top, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to top, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row gap-16 md:gap-0 px-6 lg:px-8">
        {/* Left: Logos */}
        <div className="w-full md:w-1/3 flex flex-col items-start gap-6 mb-10 md:mb-0">
          <Image
            src="/future-logo-white.png"
            alt="Future Communications & IT"
            width={120}
            height={38}
            className="object-contain max-w-[120px]"
            priority
          />
          <Image
            src="/Tatweer_Research_Logo_white.png"
            alt="Tatweer Research Logo"
            width={120}
            height={60}
            className="object-contain max-w-[120px]"
            priority
          />
        </div>
        {/* Center: Navigation */}
        <div className="w-full md:w-1/3 flex flex-col items-start gap-3 mb-10 md:mb-0">
          <nav>
            <ul className="flex flex-col gap-1">
              {navSections.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-white/80 hover:text-primary transition text-sm md:text-base font-medium py-1 block text-left"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Right: Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col items-start gap-3 text-white/80 text-sm">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span>Alfiwhat, Benghazi, Libya</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <a
              href="mailto:tgp2025@tgp25.ly"
              className="hover:text-primary transition text-left"
            >
              tgp2025@tgp25.ly
            </a>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <a
              href="tel:+218930472576"
              className="hover:text-primary transition text-left"
            >
              +218-93 0472 576
            </a>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Globe className="w-5 h-5 text-primary shrink-0" />
            <a
              href="https://home.tgp25.ly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition text-left"
            >
              future-tech.ly/tgp2025
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
