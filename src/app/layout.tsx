import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PageWrapper from "@/components/animations/PageWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://nsalamdesign.com"),

  title: {
    default: "N.Salam Design",
    template: "%s | N.Salam Design",
  },

  description:
    "Premium logo design and branding studio helping businesses build memorable identities through strategic design.",

  keywords: [
    "logo design",
    "branding",
    "brand identity",
    "graphic design",
    "logo designer",
    "brand designer",
    "visual identity",
    "business logo",
    "branding studio",
    "N.Salam Design",
  ],

  authors: [
    {
      name: "Nour Essalam",
    },
  ],

  creator: "Nour Essalam",

  openGraph: {
    title: "N.Salam Design",
    description:
      "Premium logo design and branding studio helping businesses build memorable identities through strategic design.",
    url: "https://nsalamdesign.com",
    siteName: "N.Salam Design",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "N.Salam Design",
    description:
      "Premium logo design and branding studio helping businesses build memorable identities through strategic design.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <PageWrapper>
          {children}
        </PageWrapper>

        <Footer />
      </body>
    </html>
  );
}