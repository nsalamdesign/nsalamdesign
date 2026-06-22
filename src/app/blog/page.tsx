import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import BlogSearch from "@/components/BlogSearch";

import PageTransition from "@/components/animations/PageTransition";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

import type { Metadata } from "next";

type Post = {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: any;
  publishedAt?: string;
};

export const metadata: Metadata = {
  title: "Blog | N.Salam Design",
  description:
    "Branding, logo design, visual identity and business growth articles.",
};

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  const formattedPosts = posts.map((post) => ({
    ...post,
    coverImage: post.coverImage
      ? urlFor(post.coverImage).url()
      : undefined,
  }));

return (
  <PageTransition>

    <main className="min-h-screen text-white">

      <section className="pt-40 pb-24 px-6 border-b border-white/10">

        <div className="max-w-6xl mx-auto">

          <SlideUp>

            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-6">
              Blog
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold">
              Insights &
              <br />
              Branding Articles
            </h1>

          </SlideUp>

        </div>

      </section>

      <FadeIn>

        <section className="py-24 px-6">
          <BlogSearch posts={formattedPosts} />
        </section>

      </FadeIn>

    </main>

  </PageTransition>
);
}