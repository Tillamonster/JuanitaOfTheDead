
import Navbar from "@/components/Navbar";
import EpisodesSection from "@/components/EpisodesSection";
import Link from "next/link";

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />

      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-8 pt-6">
          <Link
            href="/"
            className="text-orange-400 hover:text-orange-300 transition"
          >
            ← Home
          </Link>
        </div>

        <EpisodesSection />
      </div>
    </main>
  );
}
