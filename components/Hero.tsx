import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/Hero1.png"
        alt="Juanita overlooking Pajaro Valley"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 md:px-8">

        <h1 className="
        text-[clamp(2.75rem,7vw,7rem)]
        font-black
        leading-none
        tracking-tight
        whitespace-nowrap
        ">
        THE BELLS OF PAJARO
        </h1>

        <h2 className="text-2xl md:text-4xl tracking-[0.3em] uppercase text-orange-300 mb-10">
          JUANITA OF THE DEAD
        </h2>

        <p className="max-w-xl text-xl md:text-2xl text-stone-100 leading-relaxed mb-10">
          El Viaje Prepared Her For This
                  </p>

      <div className="flex gap-6 flex-wrap">

        <Link
          href="https://www.amazon.com/dp/B0GZXF2SBN"
          target="_blank"
          rel="noopener noreferrer"
          className="w-50 flex items-center justify-center bg-orange-600 hover:bg-orange-500 transition px-8 py-4 text-white font-bold rounded-xl text-center"
        >
          Buy The Book
        </Link>

        <Link
          href="/episodes"
          className="w-50 flex items-center justify-center bg-orange-600 hover:bg-orange-500 transition px-8 py-4 text-white font-bold rounded-xl text-center"
        >
          Read Episodes
        </Link>

        <Link  
          href="/world"
          className="w-50 flex items-center justify-center bg-orange-600 hover:bg-orange-500 transition px-8 py-4 text-white font-bold rounded-xl text-center"
        >
          Explore The World
        </Link>

        <Link
        href="/seed-vault"
        className="w-50 flex items-center justify-center bg-orange-600 hover:bg-green-600 transition px-8 py-4 text-white font-bold rounded-xl text-center"
        >
        Seed Vault
        </Link>

      </div>

    </div>

    </section>
  );
}