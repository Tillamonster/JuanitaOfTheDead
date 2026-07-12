import Image from "next/image";
import Link from "next/link";
type GreenhouseProps = {
  character: any;
};

export default function Greenhouse({
  character,
}: GreenhouseProps) {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      
<Link
  href="/world/characters"
  className="inline-block text-orange-600 hover:text-orange-500 mb-8"
>
  ← Back to Characters
</Link>
      <section className="mb-12">
       <h1 className="text-6xl font-bold">
          {character.name}
        </h1>

        <p className="mt-4 text-2xl text-red-700">
          {character.tagline}
        </p>

        <p className="italic mt-2">
          {character.subtitle}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10">

       <div className="rounded overflow-hidden h-full">
  <Image
    src="/images/characters/juanita/hero.png"
    alt="Juanita"
    width={800}
    height={600}
    className="w-full object-cover"
  />
</div>

        <div>
          <p className="leading-relaxed whitespace-pre-line">
            {character.intro}
          </p>
        </div>

      </section>
<section className="mt-12 grid md:grid-cols-2 gap-8">

  {/* Design Bible */}

  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Design Bible
    </h2>

    <div className="grid grid-cols-2 gap-6">

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Age
        </p>
        <p className="font-semibold">19</p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Origin
        </p>
        <p className="font-semibold">Mexico</p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Occupation
        </p>
        <p className="font-semibold">
          Farm Worker / Picker
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Languages
        </p>
        <p className="font-semibold">
          Spanish, developing English
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Role
        </p>
        <p className="font-semibold">
          Observer • Navigator • Protector
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Status
        </p>
        <p className="font-semibold">
          Protagonist
        </p>
      </div>

    </div>

  </div>

  {/* Core Traits */}

  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Core Traits
    </h2>

    <ul className="space-y-4">

      <li>
        <strong>Observer</strong>
        <br />
        Sees what others miss.
      </li>

      <li>
        <strong>Resourceful</strong>
        <br />
        Uses knowledge before force.
      </li>

      <li>
        <strong>Protective</strong>
        <br />
        Places family and community first.
      </li>

      <li>
        <strong>Resilient</strong>
        <br />
        Keeps moving despite fear and loss.
      </li>

    </ul>

  </div>

</section>

<section className="mt-8 grid md:grid-cols-2 gap-8">

  {/* Gear */}

  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Gear
    </h2>

    <ul className="space-y-3">

      <li>🧥 Hoodie</li>

      <li>🧢 Trucker's Hat</li>

      <li>🧣 Bandana</li>

      <li>👖 Jeans</li>

      <li>🥾 Boots</li>

    </ul>

  </div>

  {/* Narrative Function */}

  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Narrative Function
    </h2>

    <div className="space-y-4">

      <p>
        <strong>The Observer</strong>
        <br />
        Juanita notices what others overlook.
      </p>

      <p>
        <strong>The Witness</strong>
        <br />
        She experiences the collapse firsthand.
      </p>

      <p>
        <strong>The Bridge</strong>
        <br />
        She connects cultures, communities, and generations.
      </p>

      <p>
        <strong>The Future</strong>
        <br />
        She represents what survives and what comes next.
      </p>

    </div>

  </div>

</section>
<section className="mt-8">

  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Character Gallery
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

      <div className="border border-dashed rounded-xl p-4">
        Hero Portrait ✅
      </div>

      <div className="border border-dashed rounded-xl p-4">
        Character Turnaround
      </div>

<div className="border border-stone-200 rounded-xl overflow-hidden bg-white">

  <Image
    src="/images/characters/juanita/gallery/expression-sheet-v1.png"
    alt="Juanita Expression Sheet"
    width={1200}
    height={900}
    className="w-full h-auto"
  />

  <div className="p-4">

    <h3 className="font-semibold">
      Expression Sheet
    </h3>

    <p className="text-sm text-stone-500">
      Version 1
    </p>

  </div>

</div>

      <div className="border border-dashed rounded-xl p-4">
        Alternate Outfit Sheet
      </div>

      <div className="border border-dashed rounded-xl p-4">
        Field Reference
      </div>

      <div className="border border-dashed rounded-xl p-4">
        Signature Moments
      </div>

      <div className="border border-dashed rounded-xl p-4">
        Early Concept Art
      </div>

    </div>

  </div>

</section>
    </main>
  );
}