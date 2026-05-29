import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EpisodesSection from "@/components/EpisodesSection";

export default function HomePage() {
  return (
    <main className="bg-stone-950 text-stone-100 min-h-screen">
      <Navbar />
      <Hero />
      <EpisodesSection />
    </main>
  );
}