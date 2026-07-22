import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("wajibkah-bus-karyawan-passenger-liability")!;
const related = getArtikelByCluster("kendaraan", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "passenger liability bus karyawan, asuransi bus karyawan bekasi, tanggung jawab penumpang bus perusahaan, asuransi bus antar jemput karyawan, wajib passenger liability",
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
    { "@type": "Question", name: "Apakah passenger liability wajib secara hukum untuk bus karyawan perusahaan?", acceptedAnswer: { "@type": "Answer", text: "Tidak ada satu aturan tunggal yang mewajibkan passenger liability untuk seluruh bus karyawan di Indonesia, namun perusahaan tetap memikul tanggung jawab hukum perdata atas keselamatan karyawan yang diangkut menggunakan fasilitas perusahaan. Tanpa passenger liability, perusahaan menanggung sendiri seluruh biaya ganti rugi jika terjadi kecelakaan yang melukai penumpang." } },
    { "@type": "Question", name: "Apa bedanya passenger liability dengan Jaminan Kecelakaan Kerja (JKK) BPJS Ketenagakerjaan?", acceptedAnswer: { "@type": "Answer", text: "JKK BPJS Ketenagakerjaan menanggung risiko kecelakaan kerja karyawan termasuk saat berangkat-pulang kerja (lex specialis kecelakaan kerja), namun manfaatnya mengikuti skema dan plafon yang ditetapkan pemerintah. Passenger liability adalah jaminan tambahan dari asuransi kendaraan yang memberi perlindungan spesifik untuk penumpang bus, dengan nilai pertanggungan yang bisa disesuaikan kebutuhan perusahaan, dan keduanya bisa saling melengkapi, bukan saling menggantikan." } },
    { "@type": "Question", name: "Berapa estimasi biaya passenger liability untuk bus karyawan kapasitas 30 orang di Bekasi?", acceptedAnswer: { "@type": "Answer", text: "Sebagai estimasi kasar, passenger liability untuk bus kapasitas 30 penumpang berkisar sekitar Rp 4 juta hingga Rp 12 juta per tahun tergantung nilai pertanggungan per penumpang yang dipilih dan riwayat klaim perusahaan. Ini estimasi, bukan penawaran resmi." } },
    { "@type": "Question", name: "Kalau perusahaan menyewa bus dari pihak ketiga, siapa yang bertanggung jawab atas passenger liability?", acceptedAnswer: { "@type": "Answer", text: "Tergantung kesepakatan dalam kontrak sewa. Idealnya, kejelasan siapa yang menanggung passenger liability — penyedia bus atau perusahaan penyewa — harus dicantumkan eksplisit dalam kontrak agar tidak terjadi celah tanggung jawab saat insiden terjadi." } },
  ],
};

export default function ArtikelBusKaryawanPassengerLiability() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Wajibkah Bus Karyawan Punya Passenger Liability"
      heroBadge="Panduan · Asuransi Bus"
      heroTitle={<>Wajibkah Bus Karyawan Perusahaan<br /><em className="not-italic text-amber-300">Punya Passenger Liability?</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <p>
        Hampir setiap kawasan industri di Bekasi — mulai dari Jababeka, MM2100, EJIP, hingga Delta Silicon — punya pemandangan yang sama setiap pagi dan sore: puluhan bus antar-jemput karyawan hilir mudik membawa ribuan pekerja pabrik. Bagi banyak perusahaan, bus ini dianggap sekadar fasilitas operasional biasa. Padahal, begitu bus tersebut membawa penumpang di jalan raya, perusahaan sudah memikul tanggung jawab hukum atas keselamatan setiap orang di dalamnya — terlepas dari apakah mereka menyadarinya atau tidak.
      </p>

      <h2>Kenapa Bus Karyawan Bukan Sekadar "Kendaraan Operasional Biasa"</h2>
      <p>
        Asuransi kendaraan standar untuk bus — baik All Risk maupun TLO — pada dasarnya dirancang untuk melindungi unit bus itu sendiri: bodi, mesin, dan kerusakan akibat kecelakaan. Namun jaminan ini <strong>tidak secara otomatis mencakup tanggung jawab perusahaan terhadap cedera yang dialami penumpang di dalamnya</strong>. Untuk itulah dibutuhkan jaminan tambahan bernama passenger liability — perlindungan khusus untuk ganti rugi cedera atau kematian penumpang selama berada di dalam kendaraan.
      </p>

      <h2>Perbandingan: Bus Karyawan dengan vs Tanpa Passenger Liability</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Skenario</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Dengan Passenger Liability</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Tanpa Passenger Liability</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Karyawan cedera akibat kecelakaan bus</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Biaya pengobatan & santunan ditanggung sesuai polis</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✕ Ditanggung penuh oleh perusahaan sendiri</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Karyawan meninggal dunia dalam kecelakaan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Santunan sesuai nilai pertanggungan yang dipilih</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✕ Potensi tuntutan hukum langsung ke perusahaan</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Beban finansial mendadak perusahaan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Diminimalkan — sudah dialihkan ke asuransi</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Tinggi — bisa mencapai ratusan juta per insiden</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Reputasi perusahaan di mata karyawan</td><td style={{padding: "10px 12px"}}>Terjaga — menunjukkan itikad baik perlindungan pekerja</td><td style={{padding: "10px 12px"}}>Berisiko — terutama jika penanganan pasca-insiden lambat</td></tr>
        </tbody>
      </table>

      <blockquote className="kasus">
        <p>
          Insiden kecelakaan yang melibatkan bus antar-jemput karyawan di jalur menuju kawasan industri bukan kejadian langka di koridor Bekasi-Cikarang, mengingat jam keberangkatan dan kepulangan shift pabrik yang bersamaan dengan jam sibuk lalu lintas. Ketika insiden semacam ini terjadi tanpa passenger liability, perusahaan tidak hanya menghadapi tuntutan ganti rugi dari karyawan atau ahli warisnya, tetapi juga risiko reputasi sebagai pemberi kerja yang dianggap lalai menjamin keselamatan transportasi karyawannya.
        </p>
      </blockquote>

      <h2>Passenger Liability vs BPJS Ketenagakerjaan (JKK): Saling Melengkapi, Bukan Mengganti</h2>
      <p>
        Sebagian perusahaan berasumsi bahwa Jaminan Kecelakaan Kerja (JKK) dari BPJS Ketenagakerjaan sudah cukup karena mencakup kecelakaan saat berangkat-pulang kerja. Anggapan ini tidak sepenuhnya keliru, namun perlu dipahami bahwa manfaat JKK mengikuti skema dan plafon yang ditetapkan pemerintah, yang belum tentu mencerminkan nilai kompensasi yang dianggap layak oleh perusahaan atau keluarga korban. Passenger liability memberi fleksibilitas nilai pertanggungan yang bisa disesuaikan, sehingga berfungsi sebagai lapisan perlindungan tambahan — bukan pengganti JKK.
      </p>

      <h2>Simulasi Estimasi Biaya Passenger Liability</h2>
      <div className="not-prose flex flex-col gap-4 my-8">
        <div className="border border-amber-200 bg-amber-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Bus Antar-Jemput Karyawan — Kapasitas 30 orang</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-700">Estimasi</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">Passenger Liability/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 4 jt – Rp 9 jt</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Nilai pertanggungan per penumpang</div>
              <div className="font-heading font-bold text-navy text-sm">Disesuaikan kebijakan HR</div>
            </div>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">Estimasi, bukan penawaran resmi. Nilai aktual tergantung nilai pertanggungan per penumpang yang dipilih perusahaan dan riwayat klaim.</p>
        </div>
        <div className="border border-orange-200 bg-orange-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Armada 3 Bus Karyawan — Kapasitas Total 90 orang</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-700">Estimasi Fleet</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">Passenger Liability/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 10,5 jt – Rp 25 jt</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Skema</div>
              <div className="font-heading font-bold text-navy text-sm">Fleet, satu jatuh tempo</div>
            </div>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">Estimasi, bukan penawaran resmi. Perusahaan dengan lebih dari satu unit bus umumnya lebih efisien mengelola passenger liability dalam skema fleet.</p>
        </div>
      </div>

      <h2>3 Alasan Tim HR & GA Perlu Meninjau Ulang Polis Bus Karyawan</h2>
      <ul>
        <li><strong>Tanggung jawab hukum tetap melekat pada perusahaan</strong>, terlepas dari apakah bus dimiliki sendiri atau disewa dari vendor pihak ketiga.</li>
        <li><strong>Nilai kompensasi JKK BPJS Ketenagakerjaan mengikuti plafon standar</strong>, yang mungkin tidak mencerminkan kebijakan kompensasi internal perusahaan.</li>
        <li><strong>Kepadatan lalu lintas jam sibuk pabrik di kawasan industri Bekasi</strong> membuat risiko kecelakaan bus antar-jemput bukan skenario hipotetis, melainkan risiko operasional harian yang nyata.</li>
      </ul>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Sudahkah Bus Karyawan Perusahaan Anda Punya Passenger Liability?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan kebutuhan proteksi penumpang untuk armada bus antar-jemput perusahaan Anda — gratis dan sesuai kapasitas operasional.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi passenger liability untuk bus karyawan perusahaan saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-kendaraan/bus" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚌 Asuransi Bus →</Link>
          <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚙 Asuransi Kendaraan →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
