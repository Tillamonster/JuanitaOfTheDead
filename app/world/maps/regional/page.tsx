import Link from "next/link";
import Image from "next/image";

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

        <p className="text-xl text-stone-400 max-w-4xl mb-12">
          A stylized regional atlas map showing Monterey Bay,
          Watsonville, Moss Landing, Elkhorn Slough, and the
          surrounding quarantine zone.
        </p>

        <div className="overflow-hidden rounded-3xl border border-stone-800">

          <Image
            src="/images/monterey-bay-map.png"
            alt="Greater Monterey Bay Region"
            width={1600}
            height={1200}
            priority
            className="w-full h-auto"
          />

        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Quarantine Boundary
            </h2>

            <ul className="space-y-3 text-stone-300">
              <li>North: Bonny Doon / Ben Lomond</li>
              <li>South: Monterey / Carmel / Salinas</li>
              <li>East: Santa Cruz Mountains</li>
              <li>West: Monterey Bay</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Featured Areas
            </h2>

            <ul className="space-y-3 text-stone-300">
              <li>Watsonville</li>
              <li>Pajaro Valley</li>
              <li>Moss Landing</li>
              <li>Elkhorn Slough</li>
              <li>Monterey Bay</li>
              <li>Santa Cruz Mountains</li>
            </ul>
          </div>

        </div>

      </section>

    </main>
  );
}