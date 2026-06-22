import { client } from "@/sanity/lib/client";
import { projectsByCategoryQuery } from "@/sanity/lib/queries";
import PortfolioSearch from "@/components/PortfolioSearch";

import PageTransition from "@/components/animations/PageTransition";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

type Project = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage?: any;
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  const projects: Project[] = await client.fetch(
    projectsByCategoryQuery,
    {
      slug: category,
    }
  );

  return (
    <PageTransition>
      <main className="min-h-screen text-white">

        <section className="pt-40 pb-24 px-6 border-b border-white/10">

          <div className="max-w-6xl mx-auto">

            <SlideUp>
              <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-6">
                Category
              </p>
            </SlideUp>

            <SlideUp>
              <h1 className="text-5xl md:text-7xl font-semibold">
                {category}
              </h1>
            </SlideUp>

          </div>

        </section>

        <FadeIn>
          <section className="py-24 px-6">

            <PortfolioSearch
              projects={projects}
              category={category}
            />

          </section>
        </FadeIn>

      </main>
    </PageTransition>
  );
}