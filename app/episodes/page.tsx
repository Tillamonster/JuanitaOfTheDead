
import Navbar from "@/components/Navbar";
import EpisodesSection from "@/components/EpisodesSection";

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />
      <div className="pt-24">
        <EpisodesSection />
      </div>
    </main>
  );
}

