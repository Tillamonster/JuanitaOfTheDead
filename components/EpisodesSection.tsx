
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes } from "@/data/episodes";

export default function EpisodesSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [currentOffset, setCurrentOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  const updateMeasurements = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const maximum = Math.max(
      0,
      track.scrollWidth - viewport.clientWidth
    );

    setMaxOffset(maximum);
    setCurrentOffset((current) => Math.min(current, maximum));
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    updateMeasurements();

    const observer = new ResizeObserver(updateMeasurements);
    observer.observe(viewport);
    observer.observe(track);

    window.addEventListener("resize", updateMeasurements);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMeasurements);
    };
  }, [updateMeasurements]);

  function moveCarousel(direction: -1 | 1) {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const distance = viewport.clientWidth * 0.85;

    setCurrentOffset((current) =>
      Math.max(
        0,
        Math.min(maxOffset, current + direction * distance)
      )
    );
  }

  return (
    <section className="mx-auto w-full min-w-0 max-w-7xl px-8 py-24">
      <div className="mb-12">
        <p className="mb-4 uppercase tracking-[0.3em] text-orange-500">
          Graphic Novel
        </p>

        <h2 className="mb-6 text-5xl font-black">
          Episodes
        </h2>

        <p className="max-w-2xl text-xl text-stone-400">
          Enter the world of Pajaro Valley through illustrated episodes,
          character stories, and outbreak chronicles.
        </p>
      </div>

      <div className="mb-4 flex min-h-10 w-full items-center justify-end gap-2">
        {currentOffset > 1 && (
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label="Previous episodes"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-700 text-xl text-orange-400 transition hover:border-orange-500 hover:bg-stone-900"
          >
            ←
          </button>
        )}

        {currentOffset < maxOffset - 1 && (
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label="More episodes"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-700 text-xl text-orange-400 transition hover:border-orange-500 hover:bg-stone-900"
          >
            →
          </button>
        )}
      </div>

      <div
        ref={viewportRef}
        className="w-full min-w-0 max-w-full overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex w-max gap-6 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentOffset}px)`,
          }}
        >
          {episodes.map((episode) => (
            <div
              key={episode.slug}
              className="shrink-0"
              style={{ flex: "0 0 22rem", width: "22rem" }}
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
      </div>
    </section>
  );
}
