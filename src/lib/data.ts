// ─── KONTAK ───────────────────────────────────────────────────────────────────
export const KONTAK = {
  wa: "628131556592",
  waDisplay: "0813-1556-592",
  email: "rio@asuransibekasi.id",
  kota: "Bekasi, Jawa Barat",
} as const;

// ─── PRODUK CLUSTERS ─────────────────────────────────────────────────────────
export type Produk = { icon: string; name: string; desc: string; href: string };
export type Cluster = { id: string; label: string; icon: string; produk: Produk[] };

export const CLUSTERS: Cluster[] = [
  {
    id: "kendaraan", label: "Kendaraan", icon: "🚗",
    produk: [
      { icon: "🚗", name: "Asuransi Mobil", desc: "Perlindungan All Risk maupun TLO untuk kendaraan pribadi Anda. Tersedia untuk mobil konvensional dan listrik dengan premi sesuai tarif OJK. Klaim mudah, proses cepat.", href: "/asuransi-kendaraan/mobil" },
      { icon: "🚌", name: "Asuransi Bus", desc: "Proteksi bus pariwisata, bus karyawan, dan bus antar-jemput untuk operator transportasi di Bekasi. Termasuk perlindungan tanggung jawab terhadap penumpang.", href: "/asuransi-kendaraan/bus" },
      { icon: "🚛", name: "Asuransi Truk & Kendaraan Niaga", desc: "Proteksi truk, box, dan kendaraan operasional untuk pelaku usaha ekspedisi dan pergudangan di kawasan industri Bekasi seperti Jababeka, MM2100, dan EJIP.", href: "/asuransi-kendaraan/truk-kendaraan-niaga" },
    ],
  },
  {
    id: "properti", label: "Properti", icon: "🏠",
    produk: [
      { icon: "🏢", name: "Property All Risk (PAR)", desc: "Perlindungan menyeluruh (all-risk) untuk gedung, pabrik, dan aset komersial bernilai tinggi. Menjamin seluruh kerugian fisik kecuali yang secara eksplisit dikecualikan.", href: "/asuransi-properti/property-all-risk" },
      { icon: "🔥", name: "Asuransi Kebakaran", desc: "Jaminan standar FLEXAS (Fire, Lightning, Explosion, Aircraft, Smoke) untuk ruko, bangunan usaha, dan properti komersial di Bekasi.", href: "/asuransi-properti/kebakaran" },
      { icon: "📦", name: "Asuransi Gudang", desc: "Proteksi bangunan gudang beserta stok barang di dalamnya — relevan bagi pelaku usaha logistik dan pergudangan di kawasan industri Bekasi.", href: "/asuransi-properti/gudang" },
      { icon: "🏭", name: "Asuransi Pabrik", desc: "Perlindungan bangunan dan aset tetap pabrik dari risiko kebakaran hingga bencana alam. Dirancang untuk kawasan industri Jababeka, MM2100, EJIP, dan Delta Silicon.", href: "/asuransi-properti/pabrik" },
      { icon: "🏡", name: "Asuransi Rumah", desc: "Paket perlindungan rumah tinggal — kebakaran, pencurian, hingga perluasan banjir untuk kawasan perumahan Bekasi yang rawan luapan musiman.", href: "/asuransi-properti/rumah" },
    ],
  },
  {
    id: "engineering", label: "Engineering", icon: "⚙️",
    produk: [
      { icon: "🏗️", name: "Contractor All Risk (CAR)", desc: "Perlindungan menyeluruh untuk proyek konstruksi sipil dari awal hingga serah terima. Melindungi pekerjaan, material, peralatan, dan tanggung jawab terhadap pihak ketiga.", href: "/asuransi-engineering/contractor-all-risk" },
      { icon: "⚙️", name: "Erection All Risk (EAR)", desc: "Asuransi untuk pekerjaan instalasi mesin dan peralatan pabrik. Cocok untuk kontraktor MEP dan perusahaan manufaktur di kawasan industri Bekasi.", href: "/asuransi-engineering/erection-all-risk" },
      { icon: "🔧", name: "Machinery Breakdown (MB)", desc: "Perlindungan mesin produksi dari kerusakan mendadak akibat gangguan mekanis atau elektris. Menjaga kelangsungan operasional pabrik Anda di Bekasi.", href: "/asuransi-engineering/machinery-breakdown" },
    ],
  },
  {
    id: "kargo", label: "Kargo", icon: "📦",
    produk: [
      { icon: "📦", name: "Asuransi Kargo Darat", desc: "Perlindungan barang kiriman via truk dari risiko kecelakaan, pencurian, dan kerusakan selama perjalanan. Cocok untuk pelaku ekspedisi dan distribusi di kawasan pergudangan Bekasi.", href: "/asuransi-kargo/pengiriman-barang" },
      { icon: "✈️", name: "Asuransi Kargo Udara", desc: "Jaminan perlindungan kargo yang dikirim via jalur udara. Cocok untuk pengiriman barang bernilai tinggi yang membutuhkan kecepatan dan keamanan ekstra.", href: "/asuransi-kargo/kargo-udara-laut" },
      { icon: "🚢", name: "Marine Cargo Insurance", desc: "Proteksi pengiriman barang melalui jalur laut untuk importir dan eksportir yang berbasis di kawasan industri Bekasi maupun sekitar Jakarta.", href: "/asuransi-kargo/kargo-udara-laut" },
    ],
  },
  {
    id: "liability", label: "Liability", icon: "🛡️",
    produk: [
      { icon: "👥", name: "Asuransi Public Liability", desc: "Lindungi bisnis dari klaim pihak ketiga akibat cedera badan atau kerusakan properti yang terjadi di lokasi usaha atau akibat operasional perusahaan Anda.", href: "/asuransi-liability/public-liability" },
      { icon: "⚗️", name: "Asuransi Limbah B3", desc: "Perlindungan tanggung jawab hukum bagi perusahaan manufaktur yang menghasilkan, mengangkut, atau mengelola limbah B3 sesuai regulasi lingkungan hidup yang berlaku.", href: "/asuransi-liability/limbah-b3" },
    ],
  },
  {
    id: "surety", label: "Surety Bond", icon: "📋",
    produk: [
      { icon: "📋", name: "Jaminan Penawaran (Bid Bond)", desc: "Jaminan bagi peserta tender bahwa kontraktor akan melaksanakan kontrak jika menang. Wajib untuk mengikuti lelang proyek pemerintah maupun swasta di Bekasi.", href: "/asuransi-surety-bond/jaminan-penawaran" },
      { icon: "🤝", name: "Jaminan Pelaksanaan (Performance Bond)", desc: "Menjamin kontraktor menyelesaikan proyek sesuai kontrak. Wajib bagi kontraktor yang mengerjakan proyek pemerintah, BUMN, maupun proyek swasta berskala besar.", href: "/asuransi-surety-bond/jaminan-pelaksanaan" },
      { icon: "💰", name: "Jaminan Uang Muka (Advance Payment Bond)", desc: "Jaminan atas uang muka yang diberikan pemberi kerja kepada kontraktor. Melindungi pengguna jasa dari risiko penyalahgunaan dana awal proyek.", href: "/asuransi-surety-bond/jaminan-uang-muka" },
    ],
  },
];

// ─── KALKULATOR OJK ───────────────────────────────────────────────────────────
export type Wilayah = "w1" | "w2" | "w3";
export type JenisKendaraan = "konvensional" | "listrik";
export type TipePerlindungan = "allrisk" | "tlo";

export const RATE: Record<TipePerlindungan, Record<Wilayah, Record<JenisKendaraan, number[]>>> = {
  allrisk: {
    w1: { konvensional: [3.82, 2.67, 2.18, 1.20, 1.05], listrik: [4.20, 2.94, 2.40, 1.32, 1.16] },
    w2: { konvensional: [3.26, 2.47, 2.08, 1.20, 1.05], listrik: [3.59, 2.72, 2.29, 1.32, 1.16] },
    w3: { konvensional: [2.53, 2.69, 1.79, 1.14, 1.05], listrik: [2.78, 2.96, 1.97, 1.25, 1.16] },
  },
  tlo: {
    w1: { konvensional: [0.47, 0.63, 0.41, 0.25, 0.20], listrik: [0.56, 0.69, 0.46, 0.30, 0.24] },
    w2: { konvensional: [0.65, 0.44, 0.38, 0.25, 0.20], listrik: [0.78, 0.53, 0.42, 0.30, 0.24] },
    w3: { konvensional: [0.51, 0.44, 0.29, 0.23, 0.20], listrik: [0.56, 0.48, 0.35, 0.27, 0.24] },
  },
};

export const WILAYAH_LABEL: Record<Wilayah, string> = {
  w1: "Wilayah I (Sumatera)",
  w2: "Wilayah II (Jakarta, Bekasi, Jabar, Banten)",
  w3: "Wilayah III (Jawa Tengah, Jawa Timur & sekitarnya)",
};

export type PlatOption = { value: Wilayah; label: string };
export type PlatGroup = { group: string; options: PlatOption[] };

export const PLAT_DATA: (PlatOption | PlatGroup)[] = [
  { value: "w2", label: "B – Bekasi / Jakarta / Depok / Tangerang" },
  { group: "── Wilayah II (Jawa Barat & Banten) ──", options: [
    { value: "w2", label: "T – Karawang / Purwakarta" },
    { value: "w2", label: "D – Bandung / Jabar" },
    { value: "w2", label: "E – Cirebon / Jabar" },
    { value: "w2", label: "F – Bogor / Jabar" },
    { value: "w2", label: "Z – Garut / Tasikmalaya" },
    { value: "w2", label: "A – Banten / Serang" },
  ]},
  { group: "── Wilayah III (Jawa Tengah) ──", options: [
    { value: "w3", label: "AD – Surakarta / Solo" },
    { value: "w3", label: "H – Semarang" },
    { value: "w3", label: "AB – Yogyakarta (DIY)" },
    { value: "w3", label: "K – Kudus / Pati" },
    { value: "w3", label: "R – Banyumas / Purwokerto" },
    { value: "w3", label: "G – Pekalongan" },
  ]},
  { group: "── Wilayah III (Jawa Timur) ──", options: [
    { value: "w3", label: "L – Surabaya" },
    { value: "w3", label: "N – Malang" },
    { value: "w3", label: "W – Sidoarjo / Gresik" },
    { value: "w3", label: "AG – Kediri" },
  ]},
  { group: "── Wilayah III (Bali & Nusa Tenggara) ──", options: [
    { value: "w3", label: "DK – Bali" },
    { value: "w3", label: "DR – Lombok / NTB" },
  ]},
  { group: "── Wilayah III (Kalimantan) ──", options: [
    { value: "w3", label: "KB – Pontianak / Kalbar" },
    { value: "w3", label: "DA – Banjarmasin / Kalsel" },
    { value: "w3", label: "KT – Samarinda / Kaltim" },
  ]},
  { group: "── Wilayah III (Sulawesi) ──", options: [
    { value: "w3", label: "DD – Makassar / Sulsel" },
    { value: "w3", label: "DN – Palu / Sulteng" },
  ]},
  { group: "── Wilayah I (Sumatera) ──", options: [
    { value: "w1", label: "BK – Medan / Sumut" },
    { value: "w1", label: "BA – Padang / Sumbar" },
    { value: "w1", label: "BM – Pekanbaru / Riau" },
    { value: "w1", label: "BG – Palembang / Sumsel" },
    { value: "w1", label: "BD – Bengkulu" },
    { value: "w1", label: "BE – Bandar Lampung / Lampung" },
  ]},
];

export const DISKON = 0.10; // silent discount

export function getKategori(harga: number): { label: string; idx: number } {
  if (harga <= 125_000_000) return { label: "Kategori 1 (≤ Rp 125 juta)", idx: 0 };
  if (harga <= 200_000_000) return { label: "Kategori 2 (> Rp 125 jt s.d Rp 200 jt)", idx: 1 };
  if (harga <= 400_000_000) return { label: "Kategori 3 (> Rp 200 jt s.d Rp 400 jt)", idx: 2 };
  if (harga <= 800_000_000) return { label: "Kategori 4 (> Rp 400 jt s.d Rp 800 jt)", idx: 3 };
  return { label: "Kategori 5 (> Rp 800 juta)", idx: 4 };
}

export function formatRp(n: number): string {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "Apakah konsultasi asuransi di sini berbayar?",
    a: "Tidak, konsultasi sepenuhnya gratis. Saya akan menganalisis kebutuhan dan profil risiko Anda, lalu merekomendasikan produk yang paling sesuai — tanpa biaya apapun dan tanpa tekanan untuk membeli.",
  },
  {
    q: "Apa perbedaan asuransi All Risk dan TLO untuk mobil?",
    a: "All Risk (Comprehensive) menanggung kerusakan ringan hingga berat, kecelakaan, dan kehilangan kendaraan. TLO hanya menanggung kerugian jika kendaraan hilang dicuri atau rusak parah di atas 75% dari nilai kendaraan. Premi TLO lebih murah, tetapi All Risk memberikan proteksi lebih luas.",
  },
  {
    q: "Apakah bisa mengasuransikan pabrik atau gudang di kawasan industri Bekasi?",
    a: "Bisa. Kami melayani asuransi Property All Risk, Machinery Breakdown, dan liability untuk perusahaan manufaktur maupun pergudangan di kawasan seperti Jababeka, MM2100, EJIP, dan Delta Silicon.",
  },
  {
    q: "Berapa lama proses penerbitan polis?",
    a: "Untuk produk standar seperti asuransi kendaraan dan kebakaran rumah tinggal, polis dapat terbit dalam 1–2 hari kerja setelah dokumen lengkap. Untuk produk korporasi seperti engineering insurance atau liability, prosesnya umumnya 3–7 hari kerja.",
  },
  {
    q: "Bagaimana jika saya perlu mengajukan klaim?",
    a: "Segera hubungi saya via WhatsApp setelah kejadian. Saya akan memandu langkah-langkah yang perlu dilakukan, membantu persiapan dokumen yang diperlukan, dan mendampingi Anda dalam seluruh proses klaim hingga dana ganti rugi cair.",
  },
  {
    q: "Apakah bisa mengurus asuransi untuk perusahaan atau bisnis?",
    a: "Ya. Kami melayani klien korporasi dengan kebutuhan yang lebih kompleks seperti fleet insurance, property all risk, engineering insurance, liability insurance, dan surety bond untuk kebutuhan tender dan kontrak.",
  },
];

// ─── TESTIMONIAL ─────────────────────────────────────────────────────────────
export const TESTIMONI = [
  {
    inisial: "DP",
    nama: "Dedi Prasetyo",
    peran: "Pemilik Usaha Ekspedisi, Cikarang",
    teks: "Armada truk usaha ekspedisi saya sekarang diasuransikan dengan premi yang jauh lebih efisien dibanding polis satuan sebelumnya. Prosesnya dijelaskan dengan jelas, tidak berbelit.",
  },
  {
    inisial: "NW",
    nama: "Nita Wulandari",
    peran: "Pemilik Ruko, Bekasi Timur",
    teks: "Saya punya beberapa unit ruko di Bekasi. Pak Rio membantu mengasuransikan semua bangunan dengan harga yang efisien dan penjelasan yang sangat jelas soal risiko banjir musiman di area saya.",
  },
  {
    inisial: "HS",
    nama: "Hendra Susanto",
    peran: "Manajer Pabrik, Kawasan Industri MM2100",
    teks: "Kami butuh Property All Risk dan Machinery Breakdown untuk pabrik. Pak Rio memahami betul kebutuhan industri manufaktur dan membantu proses dengan cepat serta profesional.",
  },
];
