import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "TGP2025 – Training Graduate Program",
  description:
    "A Future Company program focused on training final-year students and fresh graduates to launch their careers in technology.",
  icons: {
    icon: "/Logo3.png",
  },
  openGraph: {
    title: "TGP2025 – Training Graduate Program",
    description:
      "A Future Company program focused on training final-year students and fresh graduates to launch their careers in technology.",
    url: "https://home.tgp25.ly/",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "TGP2025 Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${GeistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Toaster position="top-right" richColors />
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
