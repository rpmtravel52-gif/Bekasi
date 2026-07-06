export type ArtikelMeta = {
  slug: string;
  title: string;
  excerpt: string;
  cluster: "properti" | "kendaraan" | "liability" | "engineering" | "machinery" | "kargo" | "surety";
  clusterLabel: string;
  publishedDate: string; // ISO
  updatedDate: string; // ISO
  readTime: string;
  heroColor: "navy" | "blue" | "amber" | "charcoal" | "green";
};

export const ARTIKEL_LIST: ArtikelMeta[] = [
  {
    slug: "kenapa-perumahan-bekasi-timur-rawan-banjir-musiman",
    title: "Kenapa Perumahan di Bekasi Rawan Banjir Musiman — dan Cara Melindungi Rumah Anda",
    excerpt: "Luapan Kali Bekasi berulang setiap musim hujan. Ini yang perlu dipahami pemilik rumah sebelum menganggapnya sekadar 'risiko langganan'.",
    cluster: "properti",
    clusterLabel: "Asuransi Properti",
    publishedDate: "2026-07-01",
    updatedDate: "2026-07-01",
    readTime: "7 menit",
    heroColor: "blue",
  },
  {
    slug: "panduan-asuransi-pabrik-jababeka",
    title: "Panduan Asuransi Pabrik di Kawasan Jababeka: Apa yang Perlu Diketahui Investor Baru",
    excerpt: "Kebakaran gudang tekstil di Jababeka Cikarang jadi pengingat: skala kawasan industri Bekasi butuh strategi asuransi yang tidak generik.",
    cluster: "properti",
    clusterLabel: "Asuransi Properti",
    publishedDate: "2026-07-02",
    updatedDate: "2026-07-02",
    readTime: "8 menit",
    heroColor: "amber",
  },
  {
    slug: "par-vs-kebakaran-gudang-bekasi",
    title: "Property All Risk vs Asuransi Kebakaran: Mana yang Cocok untuk Gudang Anda?",
    excerpt: "Dua kasus kebakaran gudang di Bekasi menunjukkan kapan polis kebakaran standar cukup, dan kapan justru berisiko kurang bayar klaim.",
    cluster: "properti",
    clusterLabel: "Asuransi Properti",
    publishedDate: "2026-07-03",
    updatedDate: "2026-07-03",
    readTime: "7 menit",
    heroColor: "charcoal",
  },
  {
    slug: "kesalahan-nilai-pertanggungan-rumah-bekasi",
    title: "5 Kesalahan Umum Saat Menentukan Nilai Pertanggungan Rumah di Bekasi",
    excerpt: "Gempa Agustus 2025 yang merusak rumah warga di Kabupaten Bekasi jadi pengingat: banyak pemilik rumah baru sadar nilai polisnya keliru saat sudah terlambat.",
    cluster: "properti",
    clusterLabel: "Asuransi Properti",
    publishedDate: "2026-07-04",
    updatedDate: "2026-07-04",
    readTime: "6 menit",
    heroColor: "navy",
  },
  {
    slug: "panduan-asuransi-ruko-bekasi",
    title: "Panduan Lengkap Asuransi Ruko di Jalur Niaga Bekasi",
    excerpt: "Kebakaran yang merambat dari pabrik ke permukiman dan pertokoan sekitarnya adalah risiko nyata bagi pemilik ruko — bukan cuma teori.",
    cluster: "properti",
    clusterLabel: "Asuransi Properti",
    publishedDate: "2026-07-05",
    updatedDate: "2026-07-05",
    readTime: "6 menit",
    heroColor: "green",
  },
  {
    slug: "kenapa-pabrik-kawasan-industri-bekasi-wajib-public-liability",
    title: "Kenapa Pabrik di Kawasan Industri Bekasi Wajib Punya Public Liability",
    excerpt: "Ledakan SPBE Cimuning menewaskan 6 orang dan menghanguskan puluhan bangunan warga — sebulan berselang, tuntutan ganti rugi Rp7,6 miliar masih tertahan di meja administrasi. Ini yang perlu dipahami pemilik pabrik soal risiko pihak ketiga.",
    cluster: "liability",
    clusterLabel: "Asuransi Liability",
    publishedDate: "2026-07-06",
    updatedDate: "2026-07-06",
    readTime: "8 menit",
    heroColor: "blue",
  },
  {
    slug: "aturan-limbah-b3-pp-22-2021-industri-manufaktur-bekasi",
    title: "Mengenal Aturan Limbah B3 (PP 22/2021) untuk Industri Manufaktur Bekasi",
    excerpt: "KLH menyegel dua perusahaan pengelola limbah B3 di Kabupaten Bekasi karena tak punya persetujuan teknis. Ini kewajiban yang wajib dipenuhi perusahaan manufaktur sesuai PP No. 22 Tahun 2021 — dan konsekuensi jika lalai.",
    cluster: "liability",
    clusterLabel: "Asuransi Liability",
    publishedDate: "2026-07-06",
    updatedDate: "2026-07-06",
    readTime: "8 menit",
    heroColor: "amber",
  },
  {
    slug: "studi-kasus-tuntutan-pencemaran-lingkungan-bekasi",
    title: "Studi Kasus: Berapa Besar Tuntutan Pencemaran Lingkungan Bisa Terjadi?",
    excerpt: "Dari denda pidana Rp10 miliar hingga penyegelan pabrik — tiga kasus pencemaran limbah B3 di Bekasi menunjukkan bahwa 'sekadar kena tegur' adalah asumsi yang sangat mahal harganya.",
    cluster: "liability",
    clusterLabel: "Asuransi Liability",
    publishedDate: "2026-07-06",
    updatedDate: "2026-07-06",
    readTime: "9 menit",
    heroColor: "charcoal",
  },
  {
    slug: "incoterms-fob-vs-cif-siapa-wajib-asuransikan-barang-impor",
    title: "Incoterms FOB vs CIF: Siapa yang Wajib Asuransikan Barang Impor Anda?",
    excerpt: "Kongesti bongkar-muat di Tanjung Priok pertengahan 2026 jadi pengingat: kontrak dagang yang tidak menegaskan siapa penanggung asuransi bisa membuat importir Bekasi menanggung sendiri kerugian barang yang tertahan di pelabuhan.",
    cluster: "kargo",
    clusterLabel: "Asuransi Kargo",
    publishedDate: "2026-07-06",
    updatedDate: "2026-07-06",
    readTime: "8 menit",
    heroColor: "navy",
  },
  {
    slug: "panduan-marine-cargo-importir-bahan-baku-kawasan-industri-bekasi",
    title: "Panduan Marine Cargo untuk Importir Bahan Baku Kawasan Industri Bekasi",
    excerpt: "Dari Tanjung Priok ke Cikarang Dry Port, bahan baku pabrik di Jababeka, MM2100, dan EJIP melewati banyak titik rawan sebelum tiba di gudang. Ini yang perlu dipahami importir sebelum menganggap Marine Cargo sebagai formalitas dokumen impor semata.",
    cluster: "kargo",
    clusterLabel: "Asuransi Kargo",
    publishedDate: "2026-07-06",
    updatedDate: "2026-07-06",
    readTime: "9 menit",
    heroColor: "blue",
  },
  {
    slug: "kenapa-ekspedisi-truk-perlu-asuransi-kargo-terpisah-dari-asuransi-kendaraan",
    title: "Kenapa Ekspedisi Truk Perlu Asuransi Kargo Terpisah dari Asuransi Kendaraan",
    excerpt: "Dua kecelakaan truk kontainer di Tol Jakarta-Cikampek dalam tiga bulan terakhir menunjukkan pola yang sama: polis kendaraan cair untuk truknya, tapi nilai barang muatan sering kali tidak dijamin sama sekali.",
    cluster: "kargo",
    clusterLabel: "Asuransi Kargo",
    publishedDate: "2026-07-06",
    updatedDate: "2026-07-06",
    readTime: "8 menit",
    heroColor: "charcoal",
  },
];

export const CLUSTER_HREF: Record<ArtikelMeta["cluster"], string> = {
  properti: "/asuransi-properti",
  kendaraan: "/asuransi-kendaraan",
  liability: "/asuransi-liability",
  engineering: "/asuransi-engineering",
  machinery: "/asuransi-machinery",
  kargo: "/asuransi-kargo",
  surety: "/asuransi-surety-bond",
};

export function getArtikelBySlug(slug: string) {
  return ARTIKEL_LIST.find((a) => a.slug === slug);
}

export function getArtikelByCluster(cluster: ArtikelMeta["cluster"], excludeSlug?: string) {
  return ARTIKEL_LIST.filter((a) => a.cluster === cluster && a.slug !== excludeSlug);
}
