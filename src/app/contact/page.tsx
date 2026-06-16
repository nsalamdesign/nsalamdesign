import { client } from "@/sanity/lib/client";
import { contactSettingsQuery } from "@/sanity/lib/queries";

import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import CardAnimation from "@/components/animations/CardAnimation";
import type { Metadata } from "next";

type ContactSettings = {
  email?: string;
  whatsapp?: string;
  fiverr?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  behance?: string;
};

export const metadata: Metadata = {
  title: "Contact | N.Salam Design",
  description:
    "Get in touch and start your branding project.",
};

export default async function ContactPage() {
  const contacts: ContactSettings =
    await client.fetch(contactSettingsQuery);

  const links = [
    {
      title: "Fiverr",
      url: contacts?.fiverr,
      description: "Start a professional project on Fiverr",
    },
    {
      title: "WhatsApp",
      url: contacts?.whatsapp,
      description: "Quick direct communication",
    },
    {
      title: "Email",
      url: contacts?.email
        ? `mailto:${contacts.email}`
        : undefined,
      description: "Send a detailed project inquiry",
    },
    {
      title: "Instagram",
      url: contacts?.instagram,
      description: "See latest work and contact me",
    },
    {
      title: "Facebook",
      url: contacts?.facebook,
      description: "Connect through Facebook",
    },
    {
      title: "LinkedIn",
      url: contacts?.linkedin,
      description: "Professional networking",
    },
    {
      title: "Behance",
      url: contacts?.behance,
      description: "Browse design projects",
    },
  ].filter((item) => item.url);

  return (
    <PageTransition>

      <main className="min-h-screen bg-black text-white">

        <section className="pt-40 pb-24 px-6 border-b border-white/10">

          <div className="max-w-5xl mx-auto text-center">

            <SlideUp>
              <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-6">
                Contact
              </p>
            </SlideUp>

            <SlideUp>
              <h1 className="text-5xl md:text-7xl font-semibold mb-8">
                Choose Your Preferred
                <br />
                Contact Method
              </h1>
            </SlideUp>

            <FadeIn>
              <p className="text-white/60 text-lg">
                Select the platform that suits you best and let's discuss your project.
              </p>
            </FadeIn>

          </div>

        </section>

        <section className="py-24 px-6">

          <StaggerContainer className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {links.map((item) => (
              <CardAnimation key={item.title}>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/40 transition"
                >

                  <h2 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h2>

                  <p className="text-white/60">
                    {item.description}
                  </p>

                </a>

              </CardAnimation>
            ))}

          </StaggerContainer>

        </section>

      </main>

    </PageTransition>
  );
}