import { client } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import ScaleIn from "@/components/animations/ScaleIn";

type Post = {
  title: string;
  excerpt?: string;
  coverImage?: any;
  publishedAt?: string;
  content: any;
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post: Post = await client.fetch(
    postQuery,
    { slug }
  );

  if (!post) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center">
        <h1 className="text-5xl font-semibold">
          Article Not Found
        </h1>
      </main>
    );
  }

  return (
    <PageTransition>

      <main className="min-h-screen text-white">

        {post.coverImage && (
          <ScaleIn>
            <div className="max-w-4xl mx-auto px-6 pt-32">
              <img
                src={urlFor(post.coverImage).url()}
                alt={post.title}
                className="w-full max-h-[400px] object-contain rounded-3xl"
              />
            </div>
          </ScaleIn>
        )}

        <section className="py-20 px-6">

          <div className="max-w-4xl mx-auto">

            <SlideUp>
              <h1 className="text-5xl md:text-6xl font-semibold mb-8">
                {post.title}
              </h1>
            </SlideUp>

            {post.publishedAt && (
              <FadeIn>
                <p className="text-white/40 mb-12">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </FadeIn>
            )}

            {post.excerpt && (
              <FadeIn>
                <p className="text-xl text-white/60 mb-12">
                  {post.excerpt}
                </p>
              </FadeIn>
            )}

            <FadeIn>
              <div className="prose prose-invert max-w-none">

                <PortableText
                  value={post.content}
                  components={{
                    types: {
                      image: ({ value }) => (
                        <ScaleIn>
                          <img
                            src={urlFor(value).url()}
                            alt=""
                            className="rounded-2xl my-10 mx-auto max-h-[500px] w-auto object-contain"
                          />
                        </ScaleIn>
                      ),
                    },
                  }}
                />

              </div>
            </FadeIn>

          </div>

        </section>

      </main>

    </PageTransition>
  );
}