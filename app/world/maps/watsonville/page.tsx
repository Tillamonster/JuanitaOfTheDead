import Link from "next/link";

export default function WatsonvilleMapPage() {
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
          Watsonville Map
        </p>

        <h1 className="text-6xl font-black mb-8">
          City of Watsonville
        </h1>

        <p className="text-xl text-stone-400 max-w-4xl mb-16">
          The heart of the story. Watsonville sits at the center of
          the Pajaro Valley outbreak and serves as the primary setting
          for many of Juanita's experiences.
        </p>

        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-16 text-center mb-16">

          <h2 className="text-3xl font-bold mb-4">
            Watsonville Map Coming Soon
          </h2>

          <p className="text-stone-400">
            This area will display the city map and story locations.
          </p>

        </div>
<div className="grid md:grid-cols-2 gap-12">

  <div>
    <h2 className="text-3xl font-bold mb-6">
      Key Story Locations
    </h2>

    <ul className="space-y-3 text-stone-300">
      <li>Downtown Watsonville</li>
      <li>Pajaro River</li>
      <li>Strawberry Fields</li>
      <li>Produce Cooler</li>
      <li>Community Shelters</li>
      <li>Local Churches</li>
    </ul>
  </div>

  <div>
    <h2 className="text-3xl font-bold mb-6">
      Future Map Layers
    </h2>

    <ul className="space-y-3 text-stone-300">
      <li>Character Locations</li>
      <li>Safe Zones</li>
      <li>Infected Activity</li>
      <li>Road Closures</li>
      <li>Supply Routes</li>
      <li>Important Events</li>
    </ul>
  </div>

</div>
      </section>

    </main>
  );
}