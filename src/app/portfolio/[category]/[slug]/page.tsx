import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import ScaleIn from "@/components/animations/ScaleIn";
import CardAnimation from "@/components/animations/CardAnimation";
import StaggerContainer from "@/components/animations/StaggerContainer";

type Project = {
  title: string;
  description: string;
  industry?: string;
  year?: string;
  services?: string[];
  mainImage?: any;
  gallery?: any[];
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const project: Project = await client.fetch(
    projectQuery,
    { slug }
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl font-semibold">
          Project Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* MAIN IMAGE */}

      {project.mainImage && (
        <ScaleIn>
          <div className="max-w-5xl mx-auto px-6 pt-32">

            <img
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              className="w-full max-h-[500px] object-contain rounded-3xl mx-auto"
            />

          </div>
        </ScaleIn>
      )}

      {/* INFO SECTION */}

      <section className="pt-20 pb-20 px-6 border-b border-white/10">

        <div className="max-w-5xl mx-auto">

          <SlideUp>
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
              Project
            </p>
          </SlideUp>

          <SlideUp>
            <h1 className="text-5xl md:text-7xl font-semibold mb-8">
              {project.title}
            </h1>
          </SlideUp>

          <FadeIn>
            <p className="text-white/60 text-lg leading-relaxed">
              {project.description}
            </p>
          </FadeIn>

          {project.industry && (
            <FadeIn>
              <div className="mt-10">

                <h3 className="text-[#D4AF37] mb-2">
                  Industry
                </h3>

                <p>{project.industry}</p>

              </div>
            </FadeIn>
          )}

          {project.year && (
            <FadeIn>
              <div className="mt-6">

                <h3 className="text-[#D4AF37] mb-2">
                  Year
                </h3>

                <p>{project.year}</p>

              </div>
            </FadeIn>
          )}

          {project.services?.length ? (
            <FadeIn>
              <div className="mt-10">

                <h3 className="text-[#D4AF37] mb-4">
                  Services
                </h3>

                <ul className="space-y-2">

                  {project.services.map((service) => (
                    <li key={service}>
                      • {service}
                    </li>
                  ))}

                </ul>

              </div>
            </FadeIn>
          ) : null}

        </div>

      </section>

      {/* GALLERY */}

      {project.gallery?.length ? (
        <section className="py-24 px-6">

          <StaggerContainer
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4"
          >

            {project.gallery.map((image, index) => (
              <CardAnimation key={index}>

                <div className="rounded-3xl border border-white/10 p-4 flex items-center justify-center bg-white/[0.02]">

                  <img
                    src={urlFor(image).url()}
                    alt={`${project.title}-${index}`}
                    className="max-h-[280px] w-auto object-contain rounded-xl"
                  />

                </div>

              </CardAnimation>
            ))}

          </StaggerContainer>

        </section>
      ) : null}

    </main>
  );
}