"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import CardAnimation from "@/components/animations/CardAnimation";
import CardReveal from "@/components/animations/CardReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SearchResults from "@/components/animations/SearchResults";

type Post = {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: any;
};

export default function BlogSearch({
  posts,
}: {
  posts: Post[];
}) {
  const [query, setQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (!query.trim()) return posts;

    const q = query.toLowerCase();

    return [...posts].sort((a, b) => {
      const score = (post: Post) => {
        let s = 0;

        const title = post.title.toLowerCase();
        const excerpt = post.excerpt?.toLowerCase() || "";

        if (title === q) s += 1000;
        if (title.includes(q)) s += 500;
        if (excerpt.includes(q)) s += 200;

        const titleMatches =
          title.split(q).length - 1;

        const excerptMatches =
          excerpt.split(q).length - 1;

        s += titleMatches * 50;
        s += excerptMatches * 20;

        return s;
      };

      return score(b) - score(a);
    });
  }, [posts, query]);

  return (
    <>
      <div className="max-w-7xl mx-auto mb-12">

        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            bg-[#111111]
            border
            border-white/10
            rounded-2xl
            px-6
            py-4
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-[#D4AF37]
            focus:shadow-[0_0_20px_rgba(212,175,55,0.15)]
          "
        />

      </div>

      <SearchResults searchKey={query}>

        <StaggerContainer
          className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {sortedPosts.map((post) => (
            <CardReveal key={post._id}>

              <CardAnimation>

                <Link
                  href={`/blog/${post.slug}`}
                  className="
                    group
                    border
                    border-white/10
                    rounded-3xl
                    overflow-hidden
                    bg-[#0B0B0B]
                    hover:border-[#D9A441]
                    hover:shadow-[0_0_35px_rgba(217,164,65,0.18)]
                    transition-all
                    duration-300
                    block
                  "
                >

                  {post.coverImage && (
                    <div className="h-56 flex items-center justify-center bg-white/5 overflow-hidden">

                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="
                          max-h-full
                          max-w-full
                          object-contain
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                    </div>
                  )}

                  <div className="p-6">

                    <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-white/60 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                  </div>

                </Link>

              </CardAnimation>

            </CardReveal>
          ))}

        </StaggerContainer>

      </SearchResults>
    </>
  );
}