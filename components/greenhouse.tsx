import Image from "next/image";
import Link from "next/link";
import type { Character } from "../data/characters/types.ts";

type GreenhouseProps = {
  character: Character;
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
       <h1 className="text-6xl font-bold text-red-600">
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
    src={character.heroImage}
    alt={character.name}
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

  {/* Identity */}

  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Identity
    </h2>

    <div className="grid grid-cols-2 gap-6">

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Age
        </p>
        <p className="font-semibold">{character.profile.age}</p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Origin
        </p>
        <p className="font-semibold">{character.profile.origin}</p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Occupation
        </p>
        <p className="font-semibold">{character.profile.occupation}
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Languages
        </p>
        <p className="font-semibold">{character.profile.languages}
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Role
        </p>
        <p className="font-semibold">{character.profile.role}
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">Status</p>
        <p className="font-semibold">
          {character.profile.status}
        </p>
      </div>

    </div>

  </div>

  {/* Personality */}

  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Personality
    </h2>

    <ul className="space-y-4">

     {character.personality.map((trait) => (
  <li key={trait.title}>
    <strong>{trait.title}</strong>
    <br />
    {trait.description}
  </li>
))}

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

        {character.gear.map((item) => (
    <li key={item}>{item}</li>
  ))}

    </ul>

  </div>

  {/* Narrative Function */}

 <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">

  <h2 className="text-3xl font-bold mb-6">
    Narrative Function
  </h2>

  <div className="space-y-4">

    {character.narrative.map((item) => (
      <p key={item.title}>
        <strong>{item.title}</strong>
        <br />
        {item.description}
      </p>
    ))}

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
    src={character.gallery.expressionSheet}
    alt={`${character.name} Expression Sheet`}
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