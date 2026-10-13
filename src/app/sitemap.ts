import type { MetadataRoute } from "next";
import { ARTIKEL_LIST } from "@/lib/artikel";

const BASE_URL = "https://asuransibekasi.biz.id";

export default function sitemap(): MetadataRoute.Sitemap {
  // Tanggal tetap (bukan new Date()) agar lastmod jujur dan tidak berubah tiap build.
  const PRODUK_LASTMOD = new Date("2026-10-13");
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
    "/artikel",
  ];
  return [
    {
      url: BASE_URL,
      lastModified: PRODUK_LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: PRODUK_LASTMOD,
      changeFrequency: "monthly" as const,
      priority: ["/asuransi-properti", "/asuransi-liability", "/asuransi-kendaraan", "/asuransi-engineering", "/asuransi-machinery", "/asuransi-kargo", "/asuransi-surety-bond", "/artikel"].includes(path) ? 0.9 : 0.8,
    })),
    ...ARTIKEL_LIST.map((a) => ({
      url: `${BASE_URL}/artikel/${a.slug}`,
      lastModified: new Date(a.updatedDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
