// src/app/page.tsx

import Link from "next/link";

import { client } from "@/sanity/lib/client";
import {
  homeSettingsQuery,
  reviewsQuery,
} from "@/sanity/lib/queries";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

/* ---------- TYPES ---------- */

interface HomeSettings {
  heroTitle?: string;
  heroSubtitle?: string;
  philosophyTitle?: string;
  philosophyText?: string;
  ctaTitle?: string;
  ctaButtonText?: string;
}

interface Review {
  _id: string;
  name: string;
  company?: string;
  review: string;
  rating?: number;
}

/* ---------- PAGE ---------- */

export default async function HomePage() {
  const settings = await client.fetch<HomeSettings>(
    homeSettingsQuery
  );

  const reviews = await client.fetch<Review[]>(
    reviewsQuery
  );

  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#1E88FF]/10 blur-[180px]" />

        <FadeIn>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#1E88FF]">
              Premium Logo Design & Branding
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
              {settings?.heroTitle}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/55">
              {settings?.heroSubtitle}
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 md:flex-row">
              <Link
                href="/portfolio"
                className="
                  rounded-full
                  bg-[#1E88FF]
                  px-8
                  py-4
                  font-semibold
                  transition
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(30,136,255,0.45)]
                "
              >
                View Portfolio
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-full
                  border
                  border-white/15
                  px-8
                  py-4
                  transition
                  hover:border-[#1E88FF]
                  hover:text-[#1E88FF]
                "
              >
                Contact
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-white/5 px-6 py-32">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-semibold md:text-6xl">
              {settings?.philosophyTitle}
            </h2>

            <p className="text-xl leading-relaxed text-white/60">
              {settings?.philosophyText}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-white/5 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="mb-16 text-center text-4xl font-semibold md:text-6xl">
              Client Reviews
            </h2>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <FadeIn key={review._id}>
                <article
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    p-8
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#1E88FF]/50
                    hover:shadow-[0_0_40px_rgba(30,136,255,0.1)]
                  "
                >
                  <p className="mb-6 leading-relaxed text-white/70">
                    {review.review}
                  </p>

                  <h3 className="text-lg font-semibold">
                    {review.name}
                  </h3>

                  {review.company && (
                    <p className="mt-1 text-sm text-white/40">
                      {review.company}
                    </p>
                  )}

                  {review.rating && (
                    <p className="mt-4 text-[#F6C13D]">
                      {"★".repeat(review.rating)}
                    </p>
                  )}
                </article>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-6 py-32">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-5xl font-semibold md:text-7xl">
              {settings?.ctaTitle}
            </h2>

            <Link
              href="/contact"
              className="
                inline-block
                rounded-full
                bg-[#1E88FF]
                px-10
                py-5
                font-semibold
                transition
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(30,136,255,0.45)]
              "
            >
              {settings?.ctaButtonText}
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}