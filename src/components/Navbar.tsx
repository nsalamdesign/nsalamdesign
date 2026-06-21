"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-[#4A8DFF]/10">

      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo.jpeg"
            alt="N.SALAM"
            width={54}
            height={54}
            className="rounded-full object-cover"
          />

          <div className="flex flex-col">

            <span className="text-white text-lg font-semibold tracking-[0.15em]">
              N.SALAM
            </span>

            <span className="text-[11px] uppercase tracking-[0.3em] text-white/45">
              Own Your Presence
            </span>

          </div>
        </Link>

        {/* DESKTOP */}

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">

          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" &&
                pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition duration-300 ${
                  active
                    ? "text-[#4A8DFF]"
                    : "text-white/60 hover:text-[#4A8DFF]"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#4A8DFF] rounded-full" />
                )}
              </Link>
            );
          })}

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
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-7 text-sm uppercase tracking-[0.2em]">

          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" &&
                pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  active
                    ? "text-[#4A8DFF]"
                    : "text-white/70"
                }
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-5 border-t border-white/10 text-white/40 text-xs tracking-[0.3em] uppercase">
            Own Your Presence
          </div>

        </div>
      )}
    </header>
  );
}