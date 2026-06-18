import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import ScaleIn from "@/components/animations/ScaleIn";
import CardAnimation from "@/components/animations/CardAnimation";
import StaggerContainer from "@/components/animations/StaggerContainer";

import { PortableText } from "@portabletext/react";

type Project = {
  title: string;
  description: string;
  industry?: string;
  year?: string;
  services?: string[];
  mainImage?: any;
  caseStudy?: any;
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

  const project: Project = await client.fetch(projectQuery, {
    slug,
  });

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl font-semibold">Project Not Found</h1>
      </main>
    );
  }

  // Portable Text custom rendering (this is the key upgrade)
  const portableComponents = {
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-4xl md:text-5xl font-semibold mt-10 mb-6">
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl md:text-3xl font-semibold mt-6 mb-3">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-white/70 leading-relaxed text-lg mb-4">
          {children}
        </p>
      ),
    },

    types: {
      image: ({ value }: any) => (
        <div className="my-10">
          <img
            src={urlFor(value).url()}
            alt="case study image"
            className="w-full rounded-2xl border border-white/10"
          />
        </div>
      ),
    },
  };

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

          {/* Industry */}
          {project.industry && (
            <FadeIn>
              <div className="mt-10">
                <h3 className="text-[#D4AF37] mb-2">Industry</h3>
                <p>{project.industry}</p>
              </div>
            </FadeIn>
          )}

          {/* Year */}
          {project.year && (
            <FadeIn>
              <div className="mt-6">
                <h3 className="text-[#D4AF37] mb-2">Year</h3>
                <p>{project.year}</p>
              </div>
            </FadeIn>
          )}

          {/* Services */}
          {project.services?.length ? (
            <FadeIn>
              <div className="mt-10">
                <h3 className="text-[#D4AF37] mb-4">Services</h3>
                <ul className="space-y-2">
                  {project.services.map((service) => (
                    <li key={service}>• {service}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ) : null}

          {/* CASE STUDY (UPGRADED) */}
          {project.caseStudy?.length ? (
            <FadeIn>
              <div className="mt-20">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                  Case Study
                </h2>

                <PortableText
                  value={project.caseStudy}
                  components={portableComponents}
                />
              </div>
            </FadeIn>
          ) : null}
        </div>
      </section>

      {/* GALLERY */}
      {project.gallery?.length ? (
        <section className="py-24 px-6">
          <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
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
