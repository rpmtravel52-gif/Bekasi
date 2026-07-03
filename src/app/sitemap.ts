import type { MetadataRoute } from "next";

const BASE_URL = "https://asuransibekasi.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productPages = [
    "/asuransi-properti",
    "/asuransi-properti/property-all-risk",
    "/asuransi-properti/kebakaran",
    "/asuransi-properti/gudang",
    "/asuransi-properti/pabrik",
    "/asuransi-properti/rumah",
  ];
  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/asuransi-properti" ? 0.9 : 0.8,
    })),
  ];
}
