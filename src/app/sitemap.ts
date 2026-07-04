import type { MetadataRoute } from "next";

const BASE_URL = "https://asuransibekasi.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productPages = [
    "/asuransi-kendaraan",
    "/asuransi-kendaraan/mobil",
    "/asuransi-kendaraan/bus",
    "/asuransi-kendaraan/truk-kendaraan-niaga",
    "/asuransi-properti",
    "/asuransi-properti/property-all-risk",
    "/asuransi-properti/kebakaran",
    "/asuransi-properti/gudang",
    "/asuransi-properti/pabrik",
    "/asuransi-properti/rumah",
    "/asuransi-liability",
    "/asuransi-liability/public-liability",
    "/asuransi-liability/limbah-b3",
    "/asuransi-engineering",
    "/asuransi-engineering/contractor-all-risk",
    "/asuransi-engineering/cecr",
    "/asuransi-machinery",
    "/asuransi-machinery/machinery-breakdown",
    "/asuransi-machinery/alat-berat",
    "/asuransi-kargo",
    "/asuransi-kargo/kargo-darat",
    "/asuransi-kargo/marine-cargo",
    "/asuransi-surety-bond",
    "/asuransi-surety-bond/jaminan-penawaran",
    "/asuransi-surety-bond/jaminan-pelaksanaan",
    "/asuransi-surety-bond/jaminan-uang-muka",
    "/asuransi-surety-bond/jaminan-pemeliharaan",
    "/asuransi-surety-bond/custom-bond-ob23",
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
      priority: ["/asuransi-properti", "/asuransi-liability", "/asuransi-kendaraan", "/asuransi-engineering", "/asuransi-machinery", "/asuransi-kargo", "/asuransi-surety-bond"].includes(path) ? 0.9 : 0.8,
    })),
  ];
}
