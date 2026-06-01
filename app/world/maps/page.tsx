import Link from "next/link";

export default function MapsPage() {
  const maps = [
    {
      title: "Regional & Quarantine Map",
      description:
        "Military containment boundaries, checkpoints, and regional geography.",
      href: "/world/maps/regional",
    },
    {
      title: "Watsonville Map",
      description:
        "The city, neighborhoods, shelters, churches, and story locations.",
      href: "/world/maps/watsonville",
    },
    {
      title: "Routes & Journeys",
      description:
        "Character movements, evacuation routes, and supply corridors.",
      href: "/world/maps/routes",
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
          Maps
        </p>

        <h1 className="text-6xl font-black mb-8">
          Atlas of Pajaro Valley
        </h1>

        <p className="text-xl text-stone-400 max-w-3xl mb-16">
          Explore the geography of the outbreak, from Monterey Bay to
          Watsonville and beyond.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {maps.map((map) => (
            <Link
              key={map.title}
              href={map.href}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-8 hover:border-orange-500 transition"
            >
              <h2 className="text-3xl font-bold mb-4">
                {map.title}
              </h2>

              <p className="text-stone-400">
                {map.description}
              </p>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}