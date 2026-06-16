import Link from "next/link";

import { client } from "@/sanity/lib/client";
import {
  homeSettingsQuery,
  reviewsQuery,
} from "@/sanity/lib/queries";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

type HomeSettings = {
  heroTitle?: string;
  heroSubtitle?: string;
  philosophyTitle?: string;
  philosophyText?: string;
  ctaTitle?: string;
  ctaButtonText?: string;
};

type Review = {
  _id: string;
  name: string;
  company?: string;
  review: string;
  rating?: number;
};

export default async function HomePage() {
  const settings: HomeSettings =
    await client.fetch(homeSettingsQuery);

  const reviews: Review[] =
    await client.fetch(reviewsQuery);

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <FadeIn>
          <div className="max-w-5xl mx-auto text-center">

            <p className="text-[#D4AF37] uppercase tracking-[0.3em] mb-6">
              Premium Logo Design & Branding
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight">
              {settings?.heroTitle}
            </h1>

            <p className="max-w-2xl mx-auto mt-8 text-white/60 text-lg">
              {settings?.heroSubtitle}
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

              <Link
                href="/portfolio"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold transition hover:scale-105"
              >
                View Portfolio
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 px-8 py-4 rounded-full transition hover:border-[#D4AF37]"
              >
                Contact
              </Link>

            </div>

          </div>
        </FadeIn>

      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 px-6 border-t border-white/10">

        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-semibold mb-8">
              {settings?.philosophyTitle}
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              {settings?.philosophyText}
            </p>

          </div>
        </FadeIn>

      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
              Client Reviews
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reviews.map((review) => (
              <FadeIn key={review._id}>
                <div className="border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/40 transition duration-300">

                  <p className="text-white/70 mb-6">
                    {review.review}
                  </p>

                  <h3 className="font-semibold">
                    {review.name}
                  </h3>

                  {review.company && (
                    <p className="text-white/40 text-sm mt-1">
                      {review.company}
                    </p>
                  )}

                  {review.rating && (
                    <p className="text-[#D4AF37] mt-4">
                      {"★".repeat(review.rating)}
                    </p>
                  )}

                </div>
              </FadeIn>
            ))}

          </StaggerContainer>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10">

        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-5xl md:text-7xl font-semibold mb-8">
              {settings?.ctaTitle}
            </h2>

            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-5 rounded-full font-semibold transition hover:scale-105"
            >
              {settings?.ctaButtonText}
            </Link>

          </div>
        </FadeIn>

      </section>

    </main>
  );
}