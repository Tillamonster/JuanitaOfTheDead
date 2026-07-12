import Link from "next/link";

export default function CharactersPage() {
  const characters = [
    {
      name: "Juanita",
      description:
        "A young immigrant farmworker whose journey becomes intertwined with the fate of Pajaro Valley.",
      href: "/characters/juanita",
    },
    {
      name: "Hector",
      description:
        "A survivor navigating the collapse of the familiar world around him.",
      href: "/world/characters/hector",
    },
    {
      name: "Lluvia",
      description:
        "A determined young woman whose resilience helps shape the future of the group.",
      href: "/world/characters/luvia",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="max-w-7xl mx-auto px-8 py-24">

        <Link
          href="/world"
          className="inline-block text-orange-400 hover:text-orange-300 mb-8"
        >
          ← Back to World
        </Link>

        <p className="uppercase tracking-[0.3em] text-orange-400 mb-4">
          Character Archive
        </p>

        <h1 className="text-6xl font-black mb-8">
          Characters
        </h1>

        <p className="text-xl text-stone-400 max-w-3xl mb-16">
          Meet the survivors, families, and communities whose lives are changed forever by the outbreak.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {characters.map((character) => (
            <Link
              key={character.name}
              href={character.href}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-8 hover:border-orange-500 transition"
            >
              <h2 className="text-3xl font-bold mb-4">
                {character.name}
              </h2>

              <p className="text-stone-400">
                {character.description}
              </p>
            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}