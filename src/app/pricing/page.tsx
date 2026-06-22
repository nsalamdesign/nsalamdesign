import Link from "next/link";

import { client } from "@/sanity/lib/client";
import {
  pricingQuery,
  faqQuery,
} from "@/sanity/lib/queries";

import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import ScaleIn from "@/components/animations/ScaleIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import CardAnimation from "@/components/animations/CardAnimation";

import type { Metadata } from "next";

type PricingPlan = {
  _id: string;
  title: string;
  price: string;
  features?: string[];
};

type FAQ = {
  _id: string;
  question: string;
  answer: string;
};

export const metadata: Metadata = {
  title: "Contact | N.Salam Design",
  description:
    "Get in touch and start your branding project.",
};

export default async function PricingPage() {
  const plans: PricingPlan[] =
    await client.fetch(pricingQuery);

  const faqs: FAQ[] =
    await client.fetch(faqQuery);

  return (
    <PageTransition>

      <main className="min-h-screen text-white">

        <section className="pt-40 pb-24 px-6 border-b border-white/10">

          <div className="max-w-6xl mx-auto text-center">

            <SlideUp>
              <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-6">
                Pricing
              </p>
            </SlideUp>

            <SlideUp>
              <h1 className="text-5xl md:text-7xl font-semibold">
                Investment In
                <br />
                Your Brand
              </h1>
            </SlideUp>

            <FadeIn>
              <p className="text-white/60 max-w-2xl mx-auto mt-8 text-lg">
                Professional branding solutions designed to help your business
                stand out and build trust.
              </p>
            </FadeIn>

          </div>

        </section>

        <section className="py-24 px-6">

          <StaggerContainer className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {plans.map((plan) => (
              <CardAnimation key={plan._id}>

                <div className="border border-white/10 rounded-3xl p-10 hover:border-[#D4AF37]/40 transition">

                  <h2 className="text-3xl font-semibold mb-4">
                    {plan.title}
                  </h2>

                  <p className="text-5xl font-bold mb-8">
                    {plan.price}
                  </p>

                  <ul className="space-y-4 text-white/70">

                    {plan.features?.map((feature) => (
                      <li key={feature}>
                        ✓ {feature}
                      </li>
                    ))}

                  </ul>

                </div>

              </CardAnimation>
            ))}

          </StaggerContainer>

        </section>

        <section className="py-24 px-6 border-t border-white/10">

          <div className="max-w-5xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-semibold mb-16 text-center">
                Frequently Asked Questions
              </h2>
            </FadeIn>

            <div className="space-y-8">

              {faqs.map((faq) => (
                <CardAnimation key={faq._id}>

                  <div className="border border-white/10 rounded-2xl p-6">

                    <h3 className="text-xl font-semibold mb-3">
                      {faq.question}
                    </h3>

                    <p className="text-white/60">
                      {faq.answer}
                    </p>

                  </div>

                </CardAnimation>
              ))}

            </div>

          </div>

        </section>

        <section className="py-24 px-6 border-t border-white/10">

          <ScaleIn>

            <div className="max-w-4xl mx-auto text-center">

              <h2 className="text-4xl md:text-6xl font-semibold mb-8">
                Ready To Build
                <br />
                Your Brand?
              </h2>

              <Link
                href="/contact"
                className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Start Your Project
              </Link>

            </div>

          </ScaleIn>

        </section>

      </main>

    </PageTransition>
  );
}