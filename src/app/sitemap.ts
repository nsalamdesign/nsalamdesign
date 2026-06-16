import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nsalamdesign.com",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.com/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.com/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://nsalamdesign.com/contact",
      lastModified: new Date(),
    },
  ];
}