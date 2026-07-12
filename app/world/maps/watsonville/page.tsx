import Link from "next/link";
import Image from "next/image";

export default function WatsonvillePage() {
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
          Atlas Map
        </p>

        <h1 className="text-6xl font-black mb-8">
          Greater Watsonville
        </h1>

        <p className="text-xl text-stone-400 max-w-4xl mb-12">
          A stylized atlas map of Watsonville, Pajaro, the agricultural
          district, and surrounding landmarks. This map serves as the
          geographic foundation for the world of The Bells of Pajaro.
        </p>

        <div className="overflow-hidden rounded-3xl border border-stone-800">

          <Image
            src="/images/watsonville-map.png"
            alt="Greater Watsonville Map"
            width={1600}
            height={1200}
            priority
            className="w-full h-auto"
            />

        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Geographic Features
            </h2>

            <ul className="space-y-3 text-stone-300">
              <li>Pajaro River</li>
              <li>Monterey Bay</li>
              <li>Santa Cruz Mountains</li>
              <li>Foothills</li>
              <li>Railroad Corridor</li>
              <li>Highway 1</li>
              <li>Highway 129</li>
              <li>Highway 152</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Featured Areas
            </h2>

            <ul className="space-y-3 text-stone-300">
              <li>Downtown Watsonville</li>
              <li>Pajaro</li>
              <li>Agricultural District</li>
              <li>Beach Street Corridor</li>
              <li>Watsonville Municipal Airport</li>
              <li>Santa Cruz County Fairgrounds</li>
            </ul>
          </div>

        </div>

      </section>

    </main>
  );
}