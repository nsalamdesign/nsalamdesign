import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <p className="text-[#D4AF37] uppercase tracking-[0.3em] mb-6">
          404 Error
        </p>

        <h1 className="text-6xl md:text-8xl font-semibold mb-8">
          Page Not Found
        </h1>

        <p className="text-white/60 text-lg mb-10">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}