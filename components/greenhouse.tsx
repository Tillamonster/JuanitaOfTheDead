
import Image from "next/image";
import Link from "next/link";
import type { Character } from "../data/characters/types";

type GreenhouseProps = {
  character: Character;
};

export default function Greenhouse({ character }: GreenhouseProps) {
  const cardStyle =
    "rounded-2xl border border-stone-700 bg-[#1c1c1c] p-8";
  const sectionTitle =
    "mb-6 text-3xl font-bold text-orange-500";
  const labelStyle =
    "text-sm uppercase tracking-wide text-stone-400";

  return (
    <main className="min-h-screen bg-[#111111] px-6 py-12 text-stone-100">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/world/characters"
          className="mb-8 inline-block text-orange-500 transition hover:text-orange-300"
        >
          ← Back to Characters
        </Link>

        <section className="mb-12">
          <h1 className="text-5xl font-bold text-orange-500 md:text-6xl">
            {character.name}
          </h1>

          <p className="mt-4 text-2xl text-orange-300">
            {character.tagline}
          </p>

          <p className="mt-2 italic text-stone-400">
            {character.subtitle}
          </p>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-stone-700">
            <Image
              src={character.heroImage}
              alt={character.name}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center">
            <p className="whitespace-pre-line text-lg leading-relaxed text-stone-200">
              {character.intro.trim()}
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className={cardStyle}>
            <h2 className={sectionTitle}>Identity</h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className={labelStyle}>Age</p>
                <p className="font-semibold">{character.profile.age}</p>
              </div>

              <div>
                <p className={labelStyle}>Origin</p>
                <p className="font-semibold">{character.profile.origin}</p>
              </div>

              <div>
                <p className={labelStyle}>Occupation</p>
                <p className="font-semibold">{character.profile.occupation}</p>
              </div>

              <div>
                <p className={labelStyle}>Languages</p>
                <p className="font-semibold">{character.profile.languages}</p>
              </div>

              <div>
                <p className={labelStyle}>Role</p>
                <p className="font-semibold">{character.profile.role}</p>
              </div>

              <div>
                <p className={labelStyle}>Status</p>
                <p className="font-semibold">{character.profile.status}</p>
              </div>
            </div>
          </div>

          <div className={cardStyle}>
            <h2 className={sectionTitle}>Personality</h2>

            <ul className="space-y-5">
              {character.personality.map((trait) => (
                <li key={trait.title}>
                  <strong className="text-orange-300">
                    {trait.title}
                  </strong>
                  <p className="mt-1 leading-relaxed text-stone-300">
                    {trait.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <div className={cardStyle}>
            <h2 className={sectionTitle}>Gear</h2>

            <ul className="space-y-3 text-stone-200">
              {character.gear.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={cardStyle}>
            <h2 className={sectionTitle}>Narrative Pillars</h2>

            <div className="space-y-5">
              {character.narrative.map((item) => (
                <div key={item.title}>
                  <strong className="text-orange-300">
                    {item.title}
                  </strong>
                  <p className="mt-1 leading-relaxed text-stone-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className={cardStyle}>
            <h2 className={sectionTitle}>Character Gallery</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-dashed border-stone-600 p-4 text-stone-300">
                Hero Portrait ✓
              </div>

              <div className="rounded-xl border border-dashed border-stone-600 p-4 text-stone-300">
                Character Turnaround
              </div>

              <div className="overflow-hidden rounded-xl border border-stone-700 bg-[#111111]">
                <Image
                  src={character.gallery.expressionSheet}
                  alt={`${character.name} Expression Sheet`}
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-orange-300">
                    Expression Sheet
                  </h3>
                  <p className="mt-1 text-sm text-stone-400">
                    Version 1
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-stone-600 p-4 text-stone-300">
                Alternate Outfit Sheet
              </div>

              <div className="rounded-xl border border-dashed border-stone-600 p-4 text-stone-300">
                Field Reference
              </div>

              <div className="rounded-xl border border-dashed border-stone-600 p-4 text-stone-300">
                Signature Moments
              </div>

              <div className="rounded-xl border border-dashed border-stone-600 p-4 text-stone-300">
                Early Concept Art
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
