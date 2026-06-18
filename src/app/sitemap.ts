import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nsalamdesign.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.vercel.app/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.vercel.app/blog",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.vercel.app/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}