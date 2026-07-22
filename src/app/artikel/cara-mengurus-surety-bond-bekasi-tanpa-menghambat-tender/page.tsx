import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("cara-mengurus-surety-bond-bekasi-tanpa-menghambat-tender")!;
const related = getArtikelByCluster("surety", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "cara mengurus surety bond bekasi, proses penerbitan bid bond, jadwal tender konstruksi, surety bond cepat bekasi, alur pengajuan jaminan proyek",
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
    { "@type": "Question", name: "Berapa lama proses penerbitan Jaminan Penawaran secara umum?", acceptedAnswer: { "@type": "Answer", text: "Umumnya 1-3 hari kerja setelah seluruh dokumen lengkap diterima penjamin. Faktor yang paling menentukan kecepatan bukan proses penjamin, melainkan kelengkapan dokumen dari sisi kontraktor sejak awal." } },
    { "@type": "Question", name: "H berapa sebelum tenggat tender sebaiknya mulai mengurus jaminan penawaran?", acceptedAnswer: { "@type": "Answer", text: "Idealnya minimal 5-7 hari kerja sebelum tenggat pemasukan penawaran, untuk memberi ruang jika ada dokumen yang perlu dilengkapi atau direvisi tanpa mepet dengan deadline." } },
    { "@type": "Question", name: "Apakah menggunakan broker/konsultan mempercepat proses pengurusan surety bond?", acceptedAnswer: { "@type": "Answer", text: "Broker yang berpengalaman dapat mempercepat proses karena sudah memahami format yang biasa diminta panitia tender dan memiliki hubungan langsung dengan penjamin, sehingga meminimalkan bolak-balik revisi dokumen." } },
    { "@type": "Question", name: "Apa yang harus dilakukan jika masa berlaku tender diperpanjang setelah jaminan penawaran terbit?", acceptedAnswer: { "@type": "Answer", text: "Kontraktor perlu segera mengajukan perpanjangan masa berlaku jaminan penawaran ke penjamin, karena jaminan yang sudah kedaluwarsa sebelum evaluasi tender selesai berpotensi membuat penawaran dianggap tidak sah." } },
  ],
};

export default function ArtikelCaraMengurusSuretyBond() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Cara Mengurus Surety Bond"
      heroBadge="Panduan · Proses Pengurusan"
      heroTitle={<>Cara Mengurus Surety Bond di Bekasi<br /><em className="not-italic text-gold">Tanpa Menghambat Jadwal Tender</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <p>
        Tenggat pemasukan penawaran tender bersifat mutlak — begitu batas waktu lewat, tidak ada mekanisme susulan untuk melengkapi dokumen. Ironisnya, banyak kontraktor di Bekasi justru baru mulai mengurus Jaminan Penawaran di hari-hari terakhir, padahal proses penerbitannya sendiri sebenarnya bisa selesai dalam hitungan hari jika dokumen sudah lengkap sejak awal.
      </p>

      <h2>4 Tahap Alur Pengurusan Surety Bond</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">💬</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">1. Konsultasi Kebutuhan Jaminan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Sampaikan jenis proyek/tender, nilai HPS atau kontrak, dan tenggat waktu yang dibutuhkan sejak awal — bukan setelah dokumen tender terbuka.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">2. Analisis Kelayakan (Underwriting)</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penjamin menilai profil dan rekam jejak perusahaan berdasarkan dokumen legalitas dan laporan keuangan yang diserahkan.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">📝</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">3. Penerbitan Dokumen Jaminan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Dokumen jaminan diterbitkan sesuai format yang disyaratkan panitia lelang atau pemberi kerja — kesalahan format di tahap ini yang paling sering menyebabkan revisi berulang.</p>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-card p-5">
          <div className="text-2xl mb-2">✅</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">4. Jaminan Siap Dilampirkan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Dokumen jaminan aktif dan siap disertakan dalam dokumen penawaran sebelum batas akhir pemasukan.</p>
        </div>
      </div>

      <h2>Kenapa H-1 Selalu Jadi Sumber Masalah</h2>
      <blockquote className="kasus">
        <p>
          Pola yang berulang terjadi di banyak kontraktor: dokumen tender baru dipelajari serius seminggu sebelum tenggat, laporan keuangan ternyata belum lengkap, dan revisi format jaminan bolak-balik dengan panitia karena detail nama proyek atau nilai jaminan tidak sesuai dokumen resmi. Akibatnya, jaminan penawaran baru terbit beberapa jam sebelum batas akhir — situasi yang sangat rawan gagal jika ada satu saja kendala teknis di menit-menit terakhir.
        </p>
      </blockquote>

      <h2>Rencana Waktu yang Realistis</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Waktu Sebelum Tenggat</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Yang Perlu Dilakukan</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>H-7 hingga H-5</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Konsultasi awal, kirim dokumen legalitas & keuangan ke penjamin</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>H-4 hingga H-3</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Proses underwriting & penyusunan draft dokumen jaminan</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>H-2</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Review format sesuai RKS, penerbitan dokumen jaminan</td></tr>
          <tr><td style={{padding: "10px 12px"}}>H-1</td><td style={{padding: "10px 12px"}}>Jaminan sudah di tangan, tinggal dilampirkan ke dokumen penawaran</td></tr>
        </tbody>
      </table>
      <p>
        Jadwal di atas memberi ruang gerak jika ada dokumen yang perlu direvisi — dibanding baru memulai proses di H-1 yang membuat kontraktor kehilangan seluruh kendali atas situasi darurat.
      </p>

      <h2>Peran Broker/Konsultan dalam Mempercepat Proses</h2>
      <p>
        Bekerja dengan konsultan yang sudah terbiasa menangani berbagai format RKS dari instansi maupun owner swasta di Bekasi dapat memangkas banyak waktu bolak-balik revisi, karena kesalahan format seperti nama proyek yang tidak sesuai atau masa berlaku yang kurang panjang dapat diantisipasi sejak draft pertama — bukan ditemukan setelah panitia melakukan verifikasi.
      </p>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Ada Tender dengan Tenggat Ketat?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan kebutuhan surety bond Anda sekarang — kami bantu prioritaskan proses sesuai tenggat lelang.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya butuh bantuan mengurus surety bond untuk tender yang tenggatnya sudah dekat.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
