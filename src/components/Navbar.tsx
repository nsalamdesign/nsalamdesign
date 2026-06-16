"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT SIDE */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.jpeg"
            alt="n.salam design logo"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />

          <span className="text-white text-lg tracking-wide font-medium">
            n.salam design
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.15em] text-white/70">

          <Link
            href="/"
            className="hover:text-[#D4AF37] transition"
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            className="hover:text-[#D4AF37] transition"
          >
            Portfolio
          </Link>

          <Link
            href="/pricing"
            className="hover:text-[#D4AF37] transition"
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            className="hover:text-[#D4AF37] transition"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#D4AF37] transition"
          >
            Contact
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-white uppercase tracking-[0.15em] text-sm">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            href="/pricing"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}
    </header>
  );
}