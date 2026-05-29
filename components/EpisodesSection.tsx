import EpisodeCard from "@/components/EpisodeCard";
import { episodes } from "@/data/episodes";

export default function EpisodesSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="mb-12">

        <p className="uppercase tracking-[0.3em] text-orange-500 mb-4">
          Graphic Novel
        </p>

        <h2 className="text-5xl font-black mb-6">
          Episodes
        </h2>

        <p className="text-xl text-stone-400 max-w-2xl">
          Enter the world of Pajaro Valley through illustrated episodes,
          character stories, and outbreak chronicles.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.slug}
            slug={episode.slug}
            title={episode.title}
            description={episode.description}
            image={episode.image}
          />
        ))}

      </div>
    </section>
  );
}