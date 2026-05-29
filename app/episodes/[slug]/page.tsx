import { episodes } from "@/data/episodes";

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

  if (!episode) {
    return (
      <main className="p-8">
        <h1>Episode Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 p-8">

      <h1 className="text-5xl font-black mb-6">
        {episode.title}
      </h1>

      <p className="text-xl text-stone-400 mb-12">
        {episode.description}
      </p>

      <div className="max-w-3xl space-y-6 text-lg">
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

    </main>
  );
}