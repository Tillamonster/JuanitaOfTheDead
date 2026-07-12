import Link from "next/link";

export default function SeedVaultPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F0] text-stone-800">

      <section className="max-w-5xl mx-auto px-10 py-20">

        <Link
        href="/"
        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-500 font-semibold mb-10 transition"
>
        ← Return to Home
        </Link>

        <h1 className="text-6xl font-bold tracking-tight mb-5">
          Seed Vault
        </h1>

       <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-6">
       This archive preserves the ideas, art, and production history behind
       <span className="italic"> The Bells of Pajaro</span>.
       </p>

       <p className="text-lg text-stone-500 italic max-w-2xl mb-16">
       Every world begins as a single seed of thought.
       Here, the journey is carefully preserved.
       </p>

        <div className="grid md:grid-cols-2 gap-8">

          <Link
            href="/seed-vault/characters"
            className="
            bg-[#FDFCF8]
            border-l-4
            border-l-orange-700
            border-stone-300
            rounded-lg
            p-8
            transition
            hover:bg-[#FFFDF9]
            hover:border-l-orange-500
            "
          >
            <h2 className="text-2xl uppercase tracking-wide font-bold mb-3">
              Characters
            </h2>

            <p className="text-gray-600">
              Expression sheets, reference artwork, design evolution,
              and visual identity.
            </p>
          </Link>

          <Link
            href="/seed-vault/world-building"
            className="
            bg-[#FDFCF8]
            border-l-4
            border-l-orange-700
            border-stone-300
            rounded-lg
            p-8
            transition
            hover:bg-[#FFFDF9]
            hover:border-l-orange-500
            "
          >
            <h2 className="text-2xl uppercase tracking-wide font-bold mb-3">
              World Building
            </h2>

            <p className="text-gray-600">
              Maps, history, locations, agriculture,
              research, and lore.
            </p>
          </Link>

          <Link
            href="/seed-vault/scenes"
            className="
            bg-[#FDFCF8]
            border-l-4
            border-l-orange-700
            border-stone-300
            rounded-lg
            p-8
            transition
            hover:bg-[#FFFDF9]
            hover:border-l-orange-500
            "
          >
            <h2 className="text-2xl uppercase tracking-wide font-bold mb-3">
              Scenes
            </h2>

            <p className="text-gray-600">
              Storyboards, cinematography, deleted scenes,
              and visual development.
            </p>
          </Link>

          <Link
            href="/seed-vault/production-assets"
            className="
            bg-[#FDFCF8]
            border-l-4
            border-l-orange-700
            border-stone-300
            rounded-lg
            p-8
            transition
            hover:bg-[#FFFDF9]
            hover:border-l-orange-500
            "
          >
            <h2 className="text-2xl uppercase tracking-wide font-bold mb-3">
              Production Assets
            </h2>

            <p className="text-gray-600">
              Logos, icons, typography, design system,
              and production resources.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}