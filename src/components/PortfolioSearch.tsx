"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

import CardAnimation from "@/components/animations/CardAnimation";
import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import SearchResults from "@/components/animations/SearchResults";

type Project = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage?: any;
};

export default function PortfolioSearch({
  projects,
  category,
}: {
  projects: Project[];
  category: string;
}) {
  const [search, setSearch] = useState("");

  const sortedProjects = useMemo(() => {
    if (!search.trim()) return projects;

    const query = search.toLowerCase();

    return [...projects].sort((a, b) => {
      const score = (project: Project) => {
        const title = project.title.toLowerCase();
        const description =
          project.description.toLowerCase();

        let points = 0;

        if (title.includes(query)) {
          points += 100;
        }

        const matches =
          description.split(query).length - 1;

        points += matches * 10;

        if (
          title.includes(query.slice(0, 3)) ||
          description.includes(query.slice(0, 3))
        ) {
          points += 5;
        }

        return points;
      };

      return score(b) - score(a);
    });
  }, [projects, search]);

  return (
    <>
      <FadeIn>

        <div className="max-w-6xl mx-auto mb-12">

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

      </FadeIn>

      <SearchResults searchKey={search}>

        <StaggerContainer
          className="
            max-w-6xl
            mx-auto
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {sortedProjects.map((project) => (
            <CardAnimation key={project._id}>

              <Link
                href={`/portfolio/${category}/${project.slug}`}
                className="
                  group
                  border
                  border-white/10
                  rounded-3xl
                  overflow-hidden
                  hover:border-[#D9A441]
                  hover:shadow-[0_0_35px_rgba(217,164,65,0.18)]
                  transition-all
                  duration-300
                  block
                "
              >

                {project.mainImage && (
                  <div className="h-64 w-full flex items-center justify-center bg-white/5 overflow-hidden">

                    <img
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="
                        max-h-full
                        max-w-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                        select-none
                        pointer-events-none
                      "
                    />

                  </div>
                )}

                <div className="p-8">

                  <h2 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h2>

                  <p className="text-white/60">
                    {project.description}
                  </p>

                </div>

              </Link>

            </CardAnimation>
          ))}

        </StaggerContainer>

      </SearchResults>
    </>
  );
}