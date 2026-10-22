
import { episodes } from "@/data/episodes";
import Link from "next/link";
import ComicPageViewer from "@/components/ComicPageViewer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;

  const currentIndex = episodes.findIndex(
    (ep) => ep.slug === slug
  );

  const episode = episodes[currentIndex];

  if (!episode) {
    return (
      <main className="min-h-screen bg-stone-950 text-stone-100 p-8">
        <h1 className="text-3xl font-bold mb-4">
          Episode Not Found
        </h1>
        <Link
          href="/episodes"
          className="text-orange-400 hover:text-orange-300"
        >
          Back to Episodes
        </Link>
      </main>
    );
  }

  const previousEpisode =
    currentIndex > 0 ? episodes[currentIndex - 1] : null;

  const nextEpisode =
    currentIndex < episodes.length - 1
      ? episodes[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <Link
          href="/episodes"
          className="text-orange-400 hover:text-orange-300"
        >
          ← All Episodes
        </Link>

        <p className="uppercase tracking-[0.3em] text-orange-400 mt-8 mb-3">
          The Bells of Pajaro
        </p>

        <h1 className="text-4xl md:text-6xl font-black">
          {episode.title}
        </h1>

        <p className="text-stone-400 mt-4">
          {episode.description !== "..."
            ? episode.description
            : "Read the episode from beginning to end."}
        </p>
      </header>

<section
  className="max-w-4xl mx-auto px-4 pb-16"
  aria-label={`${episode.title} comic pages`}
>
  <ComicPageViewer
    episodeTitle={episode.title}
    pages={episode.pages}
  />
</section>

  

      <nav className="max-w-5xl mx-auto px-6 py-10 border-t border-stone-800">
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1">
            {previousEpisode && (
              <Link
                href={`/episodes/${previousEpisode.slug}`}
                className="text-orange-400 hover:text-orange-300"
              >
                ← {previousEpisode.title}
              </Link>
            )}
          </div>

          <div className="flex flex-col items-center gap-2">
            <Link
              href="/episodes"
              className="text-stone-400 hover:text-stone-200 text-center"
            >
              All Episodes
            </Link>

            <Link
              href="/"
              className="text-orange-400 hover:text-orange-300 text-center"
            >
              Home
            </Link>
          </div>

          <div className="flex-1 text-right">
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
      </nav>
    </main>
  );
}
