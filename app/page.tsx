import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { Motivation } from "@/components/motivation";
import { TargetsAndGoal } from "@/components/targets";
import { Tracks } from "@/components/tracks";
import { Phases } from "@/components/phases";
import { Partners } from "@/components/partners";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Motivation />
      <TargetsAndGoal />
      <Tracks />
      <Phases />
      <Partners />
      <Contact />
    </main>
  );
}
