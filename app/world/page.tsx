import Link from "next/link";

export default function WorldPage() {
  const sections = [
    {
      title: "Maps",
      description:
        "Quarantine zones, evacuation routes, and regional geography.",
      href: "/world/maps",
    },
    {
      title: "Characters",
      description:
        "The survivors, leaders, families, and factions of Pajaro Valley.",
      href: "/world/characters",
    },
    {
      title: "Timeline",
      description:
        "A chronological record of the outbreak and its aftermath.",
      href: "/world/timeline",
    },
    {
      title: "Locations",
      description:
        "Farms, missions, shelters, strongholds, and forgotten places.",
      href: "/world/locations",
    },
    {
      title: "Threats",
      description:
        "The infected, environmental hazards, and human dangers.",
      href: "/world/threats",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">

    <section className="max-w-7xl mx-auto px-8 py-24">

  <Link
    href="/"
    className="inline-block text-orange-400 hover:text-orange-300 mb-8"
  >
    ← Back to Home
  </Link>

  <p className="uppercase tracking-[0.3em] text-orange-400 mb-4">
    Explore the World
  </p>

        <h1 className="text-6xl font-black mb-8">
          The Bells of Pajaro
        </h1>

        <p className="text-xl text-stone-400 max-w-3xl mb-16">
          Maps, characters, locations, timelines, and records from the
          outbreak that changed Pajaro Valley forever.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-8 hover:border-orange-500 transition"
            >
              <h2 className="text-3xl font-bold mb-4">
                {section.title}
              </h2>

              <p className="text-stone-400">
                {section.description}
              </p>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}