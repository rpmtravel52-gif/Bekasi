import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("biaya-asuransi-mobil-listrik-bekasi")!;
const related = getArtikelByCluster("kendaraan", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "asuransi mobil listrik bekasi, biaya asuransi ev bekasi, asuransi mobil listrik vs konvensional, premi asuransi mobil listrik, asuransi baterai mobil listrik",
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
    { "@type": "Question", name: "Kenapa premi asuransi mobil listrik cenderung lebih mahal dari mobil konvensional dengan harga serupa?", acceptedAnswer: { "@type": "Answer", text: "Beberapa faktor: biaya komponen baterai dan sistem kelistrikan EV yang jauh lebih mahal saat perbaikan, ketersediaan bengkel spesialis EV yang masih terbatas dibanding bengkel konvensional, dan data historis klaim EV yang masih relatif baru bagi sebagian perusahaan asuransi sehingga rate cenderung dipatok lebih konservatif." } },
    { "@type": "Question", name: "Apakah kerusakan baterai mobil listrik otomatis ditanggung All Risk?", acceptedAnswer: { "@type": "Answer", text: "Tidak selalu otomatis dalam jaminan dasar. Sejumlah perusahaan asuransi mewajibkan perluasan khusus untuk baterai dan komponen kelistrikan EV karena karakteristik risikonya berbeda dari komponen mesin konvensional. Selalu tanyakan secara eksplisit apakah baterai sudah termasuk dalam jaminan dasar atau perlu perluasan terpisah." } },
    { "@type": "Question", name: "Apakah mobil listrik di Bekasi berisiko lebih tinggi terkena banjir dibanding mobil konvensional?", acceptedAnswer: { "@type": "Answer", text: "Risiko terendam banjir sama saja untuk kedua jenis kendaraan, tapi konsekuensinya bisa berbeda. Sistem kelistrikan tegangan tinggi pada EV yang terendam air memerlukan pemeriksaan keselamatan khusus sebelum kendaraan dianggap layak diperbaiki atau dinyatakan total loss, yang bisa memengaruhi proses dan waktu klaim." } },
    { "@type": "Question", name: "Berapa estimasi premi All Risk untuk mobil listrik seharga Rp 400 juta di Bekasi?", acceptedAnswer: { "@type": "Answer", text: "Sebagai estimasi kasar, premi All Risk untuk EV senilai Rp 400 juta berkisar sekitar Rp 7 juta hingga Rp 16 juta per tahun tergantung merek, ketersediaan bengkel resmi, dan apakah perluasan baterai turut disertakan. Ini estimasi, bukan penawaran resmi." } },
  ],
};

export default function ArtikelMobilListrikBekasi() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Biaya Asuransi Mobil Listrik di Bekasi"
      heroBadge="Panduan · Mobil Listrik (EV)"
      heroTitle={<>Berapa Sebenarnya Biaya Asuransi<br /><em className="not-italic text-emerald-300">Mobil Listrik di Bekasi?</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <p>
        Perumahan-perumahan baru di kawasan Bekasi seperti Grand Wisata, Summarecon Bekasi, dan Kota Harapan Indah menunjukkan pertumbuhan populasi mobil listrik yang cukup terasa dalam dua tahun terakhir, seiring bertambahnya stasiun pengisian daya di pusat perbelanjaan dan gerbang tol. Namun ketika bicara asuransi, banyak pemilik EV baru menyadari satu hal setelah membandingkan penawaran: <strong>premi mobil listrik tidak selalu lebih murah dari mobil konvensional pada rentang harga yang sama</strong> — dan alasannya jarang dijelaskan secara gamblang.
      </p>

      <h2>Kenapa Premi Mobil Listrik Berbeda dari Mobil Konvensional</h2>
      <p>
        Secara prinsip, perhitungan premi dasar untuk EV dan mobil konvensional sama-sama mengacu pada pola tarif referensi OJK berdasarkan harga kendaraan dan wilayah plat nomor. Perbedaan signifikan justru muncul dari faktor tambahan: biaya komponen baterai yang jauh lebih mahal untuk diganti dibanding komponen mesin konvensional, serta keterbatasan bengkel resmi bersertifikasi EV di sekitar Bekasi yang membuat proses dan biaya perbaikan cenderung lebih tinggi.
      </p>

      <h2>Tabel Perbandingan Biaya: Mobil Listrik vs Konvensional</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Aspek</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Mobil Listrik (EV)</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Mobil Konvensional</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Basis perhitungan rate dasar</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Mengacu tarif referensi OJK, sama dengan konvensional</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Mengacu tarif referensi OJK berdasarkan harga & wilayah</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Biaya komponen saat klaim</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Lebih tinggi — baterai & motor listrik mahal</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Lebih rendah — komponen lebih umum tersedia</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Ketersediaan bengkel rekanan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Terbatas — hanya bengkel bersertifikasi EV</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Luas — hampir semua bengkel rekanan bisa menangani</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Perluasan baterai</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Perlu dicek — sebagian insurer mewajibkan perluasan terpisah</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Tidak relevan</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Estimasi rate All Risk/tahun*</td><td style={{padding: "10px 12px"}}>1,8% – 4% dari harga kendaraan</td><td style={{padding: "10px 12px"}}>1,5% – 3,5% dari harga kendaraan</td></tr>
        </tbody>
      </table>
      <p style={{fontSize: "0.8rem", color: "#94A3B8", marginTop: "-0.75rem"}}>
        *Estimasi, bukan penawaran resmi. Rate aktual bervariasi antar perusahaan asuransi dan tergantung merek, model, serta ketersediaan bengkel rekanan.
      </p>

      <h2>Simulasi Biaya untuk Dua Skenario Umum di Bekasi</h2>
      <div className="not-prose flex flex-col gap-4 my-8">
        <div className="border border-emerald-200 bg-emerald-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Mobil Listrik Kompak 2026</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">Estimasi EV</span>
          </div>
          <div className="text-xs text-[#94A3B8] mb-3">Harga kendaraan: Rp 350 juta</div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">All Risk/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 6,3 jt – Rp 14 jt</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Perluasan baterai (jika perlu)</div>
              <div className="font-heading font-bold text-navy text-sm">+Rp 300 rb – Rp 900 rb</div>
            </div>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">Estimasi, bukan penawaran resmi.</p>
        </div>
        <div className="border border-blue-200 bg-blue-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Mobil Konvensional Sekelas 2026</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">Estimasi Konvensional</span>
          </div>
          <div className="text-xs text-[#94A3B8] mb-3">Harga kendaraan: Rp 350 juta</div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">All Risk/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 5,25 jt – Rp 12,25 jt</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Perluasan tambahan</div>
              <div className="font-heading font-bold text-navy text-sm">Tidak relevan</div>
            </div>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">Estimasi, bukan penawaran resmi. Pada harga kendaraan yang sama, EV cenderung berada di ujung atas rentang rate karena faktor biaya komponen dan bengkel.</p>
        </div>
      </div>

      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">🔋</div>
        <div className="text-white/85 text-sm leading-relaxed m-0">
          Sebelum menandatangani polis, tanyakan secara spesifik: apakah kerusakan baterai akibat benturan atau terendam air termasuk jaminan dasar, atau memerlukan perluasan tersendiri? Pertanyaan ini sering luput ditanyakan pemilik EV baru karena asumsi bahwa "All Risk" berarti semua komponen otomatis tercakup.
        </div>
      </div>

      <h2>Hal Lain yang Perlu Diperhatikan Pemilik EV di Bekasi</h2>
      <ul>
        <li><strong>Cek daftar bengkel rekanan EV</strong> sebelum memilih perusahaan asuransi — keterbatasan bengkel bersertifikasi bisa memperlama proses klaim.</li>
        <li><strong>Pastikan proses klaim akibat banjir mempertimbangkan sistem kelistrikan tegangan tinggi</strong>, karena EV yang terendam biasanya memerlukan pemeriksaan keselamatan tambahan sebelum diperbaiki.</li>
        <li><strong>Tanyakan garansi baterai dari pabrikan</strong> — sebagian kerusakan baterai mungkin lebih relevan diklaim lewat garansi pabrikan dibanding polis asuransi, tergantung penyebab kerusakan.</li>
        <li><strong>Bandingkan penawaran dari beberapa perusahaan asuransi</strong> — rate untuk EV masih bervariasi cukup lebar antar insurer dibanding kendaraan konvensional yang polanya sudah lebih mapan.</li>
      </ul>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Ingin Tahu Estimasi Premi Mobil Listrik Anda?</div>
        <div className="text-white/70 text-sm mb-4">Sebutkan merek dan model EV Anda — kami bantu bandingkan estimasi biaya dan cek ketersediaan perluasan baterai yang relevan.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi asuransi mobil listrik saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
          💬 Konsultasi via WhatsApp
        </a>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-black/8">
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Baca Juga di Silo Kendaraan</div>
        <div className="flex flex-col gap-2 mb-6">
          {related.map(r => (
            <Link key={r.slug} href={`/artikel/${r.slug}`} className="text-navy2 text-sm hover:text-gold transition-colors no-underline">→ {r.title}</Link>
          ))}
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/asuransi-kendaraan/mobil" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Asuransi Mobil →</Link>
          <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚙 Asuransi Kendaraan →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
