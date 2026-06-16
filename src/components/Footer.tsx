import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              N.Salam Design
            </h2>

            <p className="text-white/60">
              Premium logo design and branding focused on helping businesses
              stand out and build trust.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <h3 className="font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <Link href="/">Home</Link>

              <Link href="/portfolio">
                Portfolio
              </Link>

              <Link href="/pricing">
                Pricing
              </Link>

              <Link href="/blog">
                Blog
              </Link>

              <Link href="/contact">
                Contact
              </Link>

            </div>
          </div>

          {/* SOCIALS */}

          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <a href="#">
                Fiverr
              </a>

              <a href="#">
                Instagram
              </a>

              <a href="#">
                WhatsApp
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40">

          © {new Date().getFullYear()} N.Salam Design.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}