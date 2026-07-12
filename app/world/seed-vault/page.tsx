import Link from "next/link";

export default function CharactersPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F0] text-stone-800">

      <section className="max-w-5xl mx-auto px-10 py-20">

        <Link
          href="/seed-vault"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-500 font-semibold mb-10 transition"
        >
          ← Return to Seed Vault
        </Link>

        <h1 className="text-5xl font-bold mb-4">
          Characters
        </h1>

        <p className="text-lg text-stone-600 mb-14 max-w-3xl">
          The visual development archive for every character in
          <span className="italic"> The Bells of Pajaro</span>.
        </p>

        <Link
          href="#"
          className="block bg-[#FCFBF7] border-l-4 border-orange-700 border rounded-lg p-8 hover:bg-[#FFFDF9] transition"
        >
          <h2 className="text-2xl font-bold mb-2">
            Juanita
          </h2>

          <p className="text-stone-600">
            Heroine • Farm worker • Survivor
          </p>

        </Link>

      </section>

    </main>
  );
}