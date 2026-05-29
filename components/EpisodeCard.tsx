import Link from "next/link";
import Image from "next/image";

type EpisodeCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default function EpisodeCard({
  slug,
  title,
  description,
  image,
}: EpisodeCardProps) {
  return (
    <div className="bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800">

      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3 text-stone-100">
          {title}
        </h3>

        <p className="text-stone-400 mb-6">
          {description}
        </p>

        <Link
          href={`/episodes/${slug}`}
          className="text-orange-400 font-bold hover:text-orange-300 transition"
        >
          Read Episode →
        </Link>

      </div>
    </div>
  );
}