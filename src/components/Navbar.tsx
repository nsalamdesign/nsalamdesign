"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/75 backdrop-blur-xl border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo.jpeg"
            alt="N.SALAM"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />

          <div className="flex flex-col">

            <span className="text-white text-lg font-semibold tracking-[0.15em]">
              N.SALAM
            </span>

            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D9B44A]">
              Own Your Presence
            </span>

          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-white/60">

          <Link
            href="/"
            className="hover:text-[#4A8DFF] transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            className="hover:text-[#4A8DFF] transition duration-300"
          >
            Portfolio
          </Link>

          <Link
            href="/pricing"
            className="hover:text-[#4A8DFF] transition duration-300"
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            className="hover:text-[#4A8DFF] transition duration-300"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#4A8DFF] transition duration-300"
          >
            Contact
          </Link>

        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-7 text-white uppercase tracking-[0.2em] text-sm">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4A8DFF]"
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4A8DFF]"
          >
            Portfolio
          </Link>

          <Link
            href="/pricing"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4A8DFF]"
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4A8DFF]"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4A8DFF]"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-white/10 text-[#D9B44A] text-xs tracking-[0.3em] uppercase">
            Own Your Presence
          </div>

        </div>
      )}
    </header>
  );
}