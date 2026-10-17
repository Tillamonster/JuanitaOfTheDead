
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-black tracking-[0.2em]"
        >
          COYOTES AND ZOMBIES AND ICE - OH MY!
        </Link>

        <div className="flex gap-8 text-sm uppercase tracking-[0.2em] text-stone-200">
          <Link
            href="/episodes"
            className="hover:text-orange-300 transition"
          >
            Episodes
          </Link>

          <Link
            href="/world"
            className="hover:text-orange-300 transition"
          >
            Explore the World
          </Link>

          <Link
            href="/about"
            className="hover:text-orange-300 transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
