
"use client";

import { useState } from "react";
import Image from "next/image";

type ComicPageViewerProps = {
  episodeTitle: string;
  pages: string[];
};

export default function ComicPageViewer({
  episodeTitle,
  pages,
}: ComicPageViewerProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  if (pages.length === 0) {
    return (
      <p className="py-12 text-center text-stone-400">
        Comic pages will be available soon.
      </p>
    );
  }

  const previousPage = () => {
    setCurrentPageIndex((index) => Math.max(0, index - 1));
  };

  const nextPage = () => {
    setCurrentPageIndex((index) =>
      Math.min(pages.length - 1, index + 1)
    );
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="relative overflow-hidden rounded-lg bg-stone-900">
        <Image
          src={pages[currentPageIndex]}
          alt={`${episodeTitle}, page ${currentPageIndex + 1}`}
          width={1200}
          height={1800}
          sizes="(max-width: 768px) 100vw, 896px"
          className="h-auto w-full"
          priority
        />

        <button
          type="button"
          onClick={previousPage}
          disabled={currentPageIndex === 0}
          aria-label="Previous comic page"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/85 px-4 py-3 text-2xl text-orange-400 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-30"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextPage}
          disabled={currentPageIndex === pages.length - 1}
          aria-label="Next comic page"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/85 px-4 py-3 text-2xl text-orange-400 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-30"
        >
          →
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={previousPage}
          disabled={currentPageIndex === 0}
          className="rounded-lg border border-stone-700 px-4 py-2 text-stone-300 transition hover:border-orange-400 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-30"
        >
          Previous
        </button>

        <p className="min-w-20 text-center text-sm text-stone-400">
          Page {currentPageIndex + 1} of {pages.length}
        </p>

        <button
          type="button"
          onClick={nextPage}
          disabled={currentPageIndex === pages.length - 1}
          className="rounded-lg border border-stone-700 px-4 py-2 text-stone-300 transition hover:border-orange-400 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </div>
  );
}
