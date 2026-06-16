import Container from "./Container";
import Link from "next/link";

const projects = [
  {
    title: "LUXE Fashion Brand",
    slug: "luxe-fashion-brand",
    category: "Fashion / Identity",
  },
  {
    title: "NOVA Tech Startup",
    slug: "nova-tech-startup",
    category: "Technology / Branding",
  },
  {
    title: "ARVO Real Estate",
    slug: "arvo-real-estate",
    category: "Real Estate / Identity",
  },
  {
    title: "VELORA Skincare",
    slug: "velora-skincare",
    category: "Beauty / Branding",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 border-t border-white/10">
      <Container>

        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-4">
            Selected Work
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Featured Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={`/projects/${project.slug}`}
              className="group border border-white/10 p-6 hover:border-white/30 transition block"
            >
              <div className="h-40 bg-white/5 mb-6 group-hover:bg-white/10 transition" />

              <h3 className="text-xl font-medium group-hover:text-white transition">
                {project.title}
              </h3>

              <p className="text-white/50 text-sm mt-2">
                {project.category}
              </p>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}