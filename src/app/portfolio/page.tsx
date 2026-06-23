import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { categoriesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import StaggerContainer from "@/components/animations/StaggerContainer";
import CardAnimation from "@/components/animations/CardAnimation";
import PageTransition from "@/components/animations/PageTransition";

import type { Metadata } from "next";

type Category = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: any;
};

export const metadata: Metadata = {
  title: "Portfolio | N.Salam Design",
  description:
    "Explore premium logo design and branding projects.",
};

export default async function PortfolioPage() {
  const categories: Category[] =
    await client.fetch(categoriesQuery);

  return (
<PageTransition>

    <main className="min-h-screen text-white">

      <section className="pt-40 pb-24 px-6 border-b border-white/10">

        <div className="max-w-6xl mx-auto">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-6">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold">
            Browse By Category
          </h1>

        </div>

      </section>

      <section className="py-24 px-6">

        <StaggerContainer className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (
            <CardAnimation key={category._id}>

              <Link
                href={`/portfolio/${category.slug}`}
                className="group border border-white/10 rounded-3xl overflow-hidden hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300"
              >

                {category.coverImage && (
                  <div className="h-64 w-full flex items-center justify-center bg-[#070F16]">

                    <img
                      src={urlFor(category.coverImage).url()}
                      alt={category.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>
                )}

                <div className="p-8">

                  <h2 className="text-2xl font-semibold mb-4">
                    {category.title}
                  </h2>

                  <p className="text-white/60">
                    {category.description}
                  </p>

                </div>

              </Link>

            </CardAnimation>
          ))}

        </StaggerContainer>

      </section>

    </main>
  </PageTransition>  
  );
}