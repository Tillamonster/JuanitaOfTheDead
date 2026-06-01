import Link from "next/link";

export default function RegionalMapPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">

      <section className="max-w-7xl mx-auto px-8 py-24">

        <Link
          href="/world/maps"
          className="inline-block text-orange-400 hover:text-orange-300 mb-8"
        >
          ← Back to Maps
        </Link>

        <p className="uppercase tracking-[0.3em] text-orange-400 mb-4">
          Regional & Quarantine Map
        </p>

        <h1 className="text-6xl font-black mb-8">
          Greater Monterey Bay Region
        </h1>

        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-16 text-center mb-16">

        <h2 className="text-3xl font-bold mb-4">
            Regional Map Coming Soon
        </h2>

        <p className="text-stone-400">
            This area will display the interactive regional quarantine map.
        </p>

        </div>
<div className="grid md:grid-cols-2 gap-12">

  <div>
    <h2 className="text-3xl font-bold mb-6">
      Quarantine Boundary
    </h2>

    <ul className="space-y-3 text-stone-300">
      <li>North: Bonny Doon / Ben Lomond</li>
      <li>South: Monterey / Carmel / Salinas</li>
      <li>East: Gilroy / Morgan Hill</li>
      <li>West: Pacific Ocean</li>
    </ul>
  </div>

  <div>
    <h2 className="text-3xl font-bold mb-6">
      Key Locations
    </h2>

    <ul className="space-y-3 text-stone-300">
      <li>Watsonville</li>
      <li>Pajaro Valley</li>
      <li>Moss Landing</li>
      <li>Monterey Bay</li>
      <li>Elkhorn Slough</li>
    </ul>
  </div>

</div>

      </section>

    </main>
  );
}