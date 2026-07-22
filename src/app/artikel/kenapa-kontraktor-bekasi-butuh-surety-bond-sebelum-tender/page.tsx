import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("kenapa-kontraktor-bekasi-butuh-surety-bond-sebelum-tender")!;
const related = getArtikelByCluster("surety", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "surety bond tender bekasi, jaminan penawaran wajib, bid bond kontraktor bekasi, jaminan tender konstruksi bekasi, syarat tender konstruksi bekasi",
  alternates: { canonical: `https://asuransibekasi.biz.id/artikel/${meta.slug}` },
  authors: [{ name: "Nur Hidayat" }],
  openGraph: {
    title: meta.title,
    description: meta.excerpt,
    url: `https://asuransibekasi.biz.id/artikel/${meta.slug}`,
    type: "article",
    publishedTime: meta.publishedDate,
    modifiedTime: meta.updatedDate,
    authors: ["Nur Hidayat"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.excerpt,
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: meta.title,
  description: meta.excerpt,
  image: "https://asuransibekasi.biz.id/og-image.png",
  datePublished: meta.publishedDate,
  dateModified: meta.updatedDate,
  author: { "@type": "Person", name: "Nur Hidayat" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Bekasi",
    logo: { "@type": "ImageObject", url: "https://asuransibekasi.biz.id/favicon-512x512.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://asuransibekasi.biz.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah semua tender konstruksi wajib melampirkan Jaminan Penawaran?", acceptedAnswer: { "@type": "Answer", text: "Jaminan Penawaran diwajibkan untuk pengadaan pekerjaan konstruksi dengan nilai total HPS di atas Rp10 miliar. Untuk nilai di bawah itu, kewajiban jaminan penawaran mengikuti ketentuan spesifik dalam dokumen pemilihan masing-masing instansi atau owner." } },
    { "@type": "Question", name: "Apa yang terjadi jika penawaran tidak dilampiri Jaminan Penawaran yang dipersyaratkan?", acceptedAnswer: { "@type": "Answer", text: "Penawaran akan digugurkan pada tahap evaluasi administrasi, terlepas dari seberapa kompetitif harga atau seberapa baik proposal teknis yang diajukan. Seluruh biaya penyusunan dokumen tender menjadi sia-sia." } },
    { "@type": "Question", name: "Berapa nilai Jaminan Penawaran yang harus disiapkan kontraktor?", acceptedAnswer: { "@type": "Answer", text: "Umumnya berkisar 1-3% dari nilai total HPS proyek, sesuai ketentuan dalam dokumen pemilihan/RKS. Untuk proyek terintegrasi, persentase yang sama dihitung dari nilai pagu anggaran." } },
    { "@type": "Question", name: "Apakah surety bond bisa digunakan sebagai pengganti bank garansi untuk tender?", acceptedAnswer: { "@type": "Answer", text: "Bisa. Ketentuan pengadaan barang/jasa pemerintah memperbolehkan jaminan penawaran berupa bank garansi atau surety bond dari perusahaan asuransi/penjaminan yang sah, selama diterima oleh panitia pemilihan sesuai format yang disyaratkan." } },
  ],
};

export default function ArtikelKenapaButuhSuretyBond() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Kenapa Kontraktor Butuh Surety Bond"
      heroBadge="Panduan · Surety Bond Tender"
      heroTitle={<>Mengapa Kontraktor di Bekasi<br /><em className="not-italic text-gold">Membutuhkan Surety Bond Sebelum Ikut Tender</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <p>
        Kawasan industri Bekasi — Jababeka, MM2100, EJIP, Delta Silicon, dan kawasan mandiri di Cikarang — terus menggerakkan tender konstruksi bernilai besar: pembangunan pabrik baru, revitalisasi infrastruktur kawasan, hingga proyek pemerintah daerah di Kota dan Kabupaten Bekasi. Bagi kontraktor, kesempatan ini datang dengan satu syarat administrasi yang sifatnya mutlak: Jaminan Penawaran, atau yang lebih dikenal sebagai bid bond.
      </p>

      <h2>Aturan yang Sering Diremehkan: Wajib di Atas Rp10 Miliar</h2>
      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">📐</div>
        <p className="text-white/85 text-sm leading-relaxed m-0">
          Berdasarkan ketentuan pengadaan barang/jasa pemerintah, Jaminan Penawaran diwajibkan untuk pengadaan pekerjaan konstruksi dengan nilai total HPS di atas Rp10 miliar, dengan besaran 1-3% dari nilai HPS tersebut. Jaminan harus bersifat tidak bersyarat dan mudah dicairkan, serta wajib dicairkan penerbit paling lambat 14 hari kerja setelah surat perintah pencairan diterima.
        </p>
      </div>
      <p>
        Angka Rp10 miliar ini bukan ambang batas yang jauh dari realita kontraktor di Bekasi — proyek pembangunan pabrik skala menengah, pekerjaan infrastruktur jalan kawasan, hingga renovasi fasilitas produksi berskala besar seringkali sudah menembus nilai tersebut. Artinya, banyak kontraktor lokal yang sebenarnya wajib menyiapkan Jaminan Penawaran tanpa benar-benar menyadari bahwa ini bukan sekadar formalitas administratif yang bisa "diurus belakangan".
      </p>

      <h2>Konsekuensi Jika Tidak Punya Jaminan Penawaran</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">🚫</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Gugur di Evaluasi Administrasi</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penawaran langsung gugur pada tahap paling awal, tidak peduli seberapa kompetitif harga atau sebaik apa proposal teknis yang diajukan.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">💸</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Biaya Persiapan Tender Sia-Sia</div>
          <p className="text-sm leading-relaxed text-[#475569]">Biaya penyusunan proposal teknis, RAB, dan dokumen kualifikasi yang bisa menelan puluhan hingga ratusan juta rupiah hilang begitu saja karena dokumen ditolak di awal.</p>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-card p-5">
          <div className="text-2xl mb-2">📉</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Reputasi di Mata Panitia Tender</div>
          <p className="text-sm leading-relaxed text-[#475569]">Perusahaan tercatat sebagai kontraktor yang tidak cermat memenuhi persyaratan administrasi dasar — catatan ini bisa terbawa ke tender berikutnya di instansi yang sama.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">⏳</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Waktu Tidak Bisa Diputar Ulang</div>
          <p className="text-sm leading-relaxed text-[#475569]">Batas akhir pemasukan penawaran bersifat mutlak. Begitu tenggat lewat tanpa jaminan penawaran yang sah, tidak ada mekanisme susulan untuk melengkapinya.</p>
        </div>
      </div>

      <h2>Lebih dari Sekadar Syarat — Sinyal Kredibilitas ke Owner</h2>
      <p>
        Di luar aspek wajib-tidaknya, Jaminan Penawaran juga berfungsi sebagai bukti keseriusan finansial kontraktor di mata pemilik proyek. Nilainya yang setara 1-3% dari HPS menunjukkan komitmen nyata, bukan sekadar niat mengikuti tender untuk melihat peluang. Data pengaduan klaim ke Otoritas Jasa Keuangan pernah mencatat bahwa lini usaha suretyship — yang menaungi proyek-proyek infrastruktur — menyumbang porsi terbesar pengaduan klaim asuransi secara nasional, mencerminkan betapa luasnya penggunaan instrumen ini dalam siklus proyek konstruksi di Indonesia.
      </p>
      <p>
        Bagi kontraktor di Bekasi yang ingin terus mengikuti tender proyek industri maupun pemerintah, menyiapkan hubungan dengan penerbit surety bond yang terpercaya sejak dini — bukan menunggu sampai H-3 tenggat penawaran — adalah bagian dari strategi bisnis, bukan sekadar reaksi administratif.
      </p>

      <h2>Urutan Jaminan yang Perlu Dipahami Sejak Awal</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Fase Proyek</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Jaminan yang Dibutuhkan</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Nilai Umum</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Mengikuti tender</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Jaminan Penawaran (Bid Bond)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>1-3% nilai HPS</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Terima uang muka</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Jaminan Uang Muka</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Sesuai % uang muka diterima</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Tanda tangan kontrak</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Jaminan Pelaksanaan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>5% nilai kontrak</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Pasca serah terima</td><td style={{padding: "10px 12px"}}>Jaminan Pemeliharaan</td><td style={{padding: "10px 12px"}}>5% nilai kontrak</td></tr>
        </tbody>
      </table>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Akan Ikut Tender? Siapkan Jaminan Penawaran Sejak Sekarang</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan kebutuhan Jaminan Penawaran untuk tender Anda — gratis, proses cepat sesuai tenggat lelang.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi Jaminan Penawaran (bid bond) untuk tender proyek yang akan saya ikuti di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
          💬 Konsultasi via WhatsApp
        </a>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-black/8">
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Baca Juga di Silo Surety Bond</div>
        <div className="flex flex-col gap-2 mb-6">
          {related.map(r => (
            <Link key={r.slug} href={`/artikel/${r.slug}`} className="text-navy2 text-sm hover:text-gold transition-colors no-underline">→ {r.title}</Link>
          ))}
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/asuransi-surety-bond" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Surety Bond →</Link>
          <Link href="/asuransi-surety-bond/jaminan-penawaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Jaminan Penawaran →</Link>
          <Link href="/asuransi-surety-bond/jaminan-pelaksanaan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Jaminan Pelaksanaan →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
