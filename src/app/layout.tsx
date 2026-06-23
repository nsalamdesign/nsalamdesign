import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import DisableRightClick from "@/components/DisableRightClick";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PageWrapper from "@/components/animations/PageWrapper";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nsalamdesign.vercel.app"
  ),

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

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
    url: "https://nsalamdesign.vercel.app",
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

  verification: {
    google:
      "LMTRA9Gqy3s77SmxXK4PUIwuzFF3JEBUr1xSS-P-p8c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-black text-white">

        {/* GLOBAL BACKGROUND */}

        <div className="fixed inset-0 -z-10 overflow-hidden">

          {/* MAIN BLUE GLOW */}
          <div
            className="
              absolute
              left-1/2
              top-[-250px]
              h-[900px]
              w-[900px]
              -translate-x-1/2
              rounded-full
              bg-[#1E88FF]/10
              blur-[230px]
            "
          />

          {/* RIGHT GLOW */}
          <div
            className="
              absolute
              right-[-250px]
              top-[40%]
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#1E88FF]/6
              blur-[220px]
            "
          />

          {/* ACCENT GLOW */}
          <div
            className="
              absolute
              left-[-150px]
              bottom-[-100px]
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#F6C13D]/4
              blur-[170px]
            "
          />

        </div>

        <DisableRightClick />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S509X0HKSK"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag("js", new Date());

            gtag("config", "G-S509X0HKSK");
          `}
        </Script>

        <Navbar />

        <PageWrapper>
          {children}
        </PageWrapper>

        <Footer />

      </body>
    </html>
  );
}