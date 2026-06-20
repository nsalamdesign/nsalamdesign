import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import DisableRightClick from "@/components/DisableRightClick";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PageWrapper from "@/components/animations/PageWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://nsalamdesign.vercel.app"),

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
    google: "LMTRA9Gqy3s77SmxXK4PUIwuzFF3JEBUr1xSS-P-p8c",
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
        <DisableRightClick />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S509X0HKSK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S509X0HKSK');
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