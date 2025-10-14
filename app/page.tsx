import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
