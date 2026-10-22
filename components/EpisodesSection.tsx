
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes } from "@/data/episodes";

export default function EpisodesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    setCanScrollLeft(track.scrollLeft > 2);
    setCanScrollRight(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 2
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    updateScrollButtons();

    const observer = new ResizeObserver(updateScrollButtons);
    observer.observe(track);

    window.addEventListener("resize", updateScrollButtons);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  function scrollEpisodes(direction: -1 | 1) {
    const track = trackRef.current;

    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: "smooth",
    });
  }

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

      <div className="mb-4 flex justify-end gap-2">
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollEpisodes(-1)}
            aria-label="Previous episodes"
            className="rounded-full border border-stone-700 p-3 text-orange-400 transition hover:border-orange-500 hover:bg-stone-900"
          >
            <span aria-hidden="true">←</span>
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scrollEpisodes(1)}
            aria-label="More episodes"
            className="rounded-full border border-stone-700 p-3 text-orange-400 transition hover:border-orange-500 hover:bg-stone-900"
          >
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>

      <div
        ref={trackRef}
        onScroll={updateScrollButtons}
        role="region"
        aria-label="Browse episodes"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {episodes.map((episode) => (
          <div
            key={episode.slug}
            className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[31%]"
          >
            <EpisodeCard
              slug={episode.slug}
              title={episode.title}
              description={episode.description}
              image={episode.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
