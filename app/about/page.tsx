
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />

      <section className="max-w-4xl mx-auto px-8 pt-36 pb-24">
        <Link
          href="/"
          className="text-orange-400 hover:text-orange-300 transition"
        >
          ← Home
        </Link>

        <p className="uppercase tracking-[0.3em] text-orange-400 mt-12 mb-4">
          A Graphic Novel Project
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8">
          The Bells of Pajaro
        </h1>

        <div className="space-y-6 text-lg leading-relaxed text-stone-300">
          <p>
            Welcome to the world of The Bells of Pajaro, a graphic novel
            rooted in the landscapes, communities, and contradictions of
            California&apos;s Pajaro Valley.
          </p>

          <p>
            At the center of the story is Juanita, a young Guatemalan
            farmworker navigating a world transformed by an outbreak.
            Her story is about survival, resilience, and the difficult
            work of finding ways to live alongside others when fear
            threatens to take over.
          </p>

          <p>
            Drawing on the region&apos;s strawberry fields, coastal fog,
            and communities, The Bells of Pajaro blends horror with
            questions about humanity, belonging, and coexistence.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/episodes"
            className="inline-block bg-orange-500 text-stone-950 font-bold px-6 py-3 rounded-lg hover:bg-orange-400 transition"
          >
            Read the Episodes →
          </Link>
        </div>
      </section>
    </main>
  );
}
