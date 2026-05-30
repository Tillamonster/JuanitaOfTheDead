import { episodes } from "@/data/episodes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;

  const episode = episodes.find(
    (ep) => ep.slug === slug
  );

const currentIndex = episodes.findIndex(
  (ep) => ep.slug === slug
);

const previousEpisode =
  currentIndex > 0
    ? episodes[currentIndex - 1]
    : null;

const nextEpisode =
  currentIndex < episodes.length - 1
    ? episodes[currentIndex + 1]
    : null;

  if (!episode) {
    return (
      <main className="p-8">
        <h1>Episode Not Found</h1>
      </main>
    );
  }

  return (
  <main className="min-h-screen bg-stone-950 text-stone-100">

    <div className="relative h-[50vh]">

      <Image
        src={episode.banner}
        alt={episode.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-end max-w-5xl mx-auto px-8 pb-16">

        <div>

          <p className="uppercase tracking-[0.3em] text-orange-400 mb-4">
            Graphic Novel Episode
          </p>

          <h1 className="text-6xl md:text-7xl font-black">
            {episode.title}
          </h1>

        </div>

      </div>

    </div>

    <section className="max-w-4xl mx-auto px-8 py-20">

      <p className="text-2xl text-stone-400 mb-12">
        {episode.description}
      </p>

      <div className="space-y-8 text-lg leading-relaxed text-stone-300">

        <p>
          The bells rang across Pajaro Valley long after the power failed.
        </p>

        <p>
          Nobody knew who was pulling the ropes anymore.
        </p>

        <p>
          The dead moved slowly through the strawberry fields beneath the fog.
        </p>

      </div>

      <div className="border-t border-stone-800 mt-16 pt-12">

  <div className="flex justify-between items-center">

    <div>
      {previousEpisode && (
        <Link
          href={`/episodes/${previousEpisode.slug}`}
          className="text-orange-400 hover:text-orange-300"
        >
          ← {previousEpisode.title}
        </Link>
      )}
    </div>

    <Link
      href="/"
      className="text-stone-400 hover:text-stone-200"
    >
      Back to Home
    </Link>

    <div>
      {nextEpisode && (
        <Link
          href={`/episodes/${nextEpisode.slug}`}
          className="text-orange-400 hover:text-orange-300"
        >
          {nextEpisode.title} →
        </Link>
      )}
    </div>

  </div>

</div>

    </section>

  </main>
);
}