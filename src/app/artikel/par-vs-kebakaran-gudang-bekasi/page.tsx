import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("par-vs-kebakaran-gudang-bekasi")!;
const related = getArtikelByCluster("properti", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "property all risk vs kebakaran, asuransi gudang bekasi, PAR gudang, asuransi kebakaran gudang bekasi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah PAR selalu lebih baik dari asuransi kebakaran?", acceptedAnswer: { "@type": "Answer", text: "Tidak selalu — PAR lebih mahal karena cakupannya lebih luas. Untuk gudang kecil dengan risiko sederhana dan nilai aset rendah, polis kebakaran standar dengan beberapa perluasan mungkin sudah cukup dan lebih efisien secara biaya." } },
    { "@type": "Question", name: "Apa yang terjadi jika gudang saya hanya punya polis kebakaran tapi kerusakan disebabkan bukan oleh api?", acceptedAnswer: { "@type": "Answer", text: "Klaim kemungkinan ditolak jika penyebab kerugian tidak termasuk dalam lima risiko FLEXAS atau perluasan yang sudah dibeli. Ini salah satu alasan utama PAR lebih disarankan untuk gudang dengan operasional kompleks." } },
    { "@type": "Question", name: "Apakah kerugian pihak ketiga akibat kebakaran gudang saya ikut ditanggung?", acceptedAnswer: { "@type": "Answer", text: "Tidak otomatis. Baik PAR maupun polis kebakaran standar berfokus pada aset milik tertanggung sendiri. Untuk kerugian pihak ketiga seperti rumah tetangga yang ikut terdampak, dibutuhkan polis Public Liability terpisah." } },
  ],
};

export default function ArtikelParVsKebakaran() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="PAR vs Kebakaran untuk Gudang"
      heroBadge="Perbandingan · Properti"
      heroTitle={<>Property All Risk vs Asuransi Kebakaran:<br />Mana yang Cocok untuk Gudang Anda?</>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Pertanyaan ini muncul hampir setiap kali pemilik gudang di Bekasi mulai serius mencari asuransi: cukup pakai polis kebakaran biasa, atau perlu upgrade ke Property All Risk (PAR)? Jawabannya tidak seragam — tapi dua insiden nyata di Bekasi bisa membantu menjelaskan kapan masing-masing jenis polis benar-benar teruji.
      </p>

      <h2>Kasus 1: Ledakan Mesin, Bukan Kebakaran Murni</h2>
      <blockquote className="kasus">
        <p>
          Pada 25 Maret 2025, gudang milik PT HA di Tarumajaya, Kabupaten Bekasi, mengalami insiden tragis. Menurut Kompas.com, sembilan teknisi sedang menguji coba mesin produksi pemotong besi ketika mesin tersebut meledak dan mengeluarkan percikan api yang langsung menyambar para pekerja. Satu orang tewas dan delapan lainnya mengalami luka bakar.
        </p>
        <p>
          Dari sudut pandang asuransi properti, kejadian ini dimulai dari <em>ledakan mekanis</em>, bukan kebakaran spontan. Polis kebakaran standar tetap menjamin risiko ledakan sebagai bagian dari FLEXAS — tapi kerusakan pada mesin itu sendiri, jika bukan karena kebakaran/ledakan melainkan kegagalan mekanis internal, umumnya butuh polis Machinery Breakdown terpisah.
        </p>
      </blockquote>

      <h2>Kasus 2: Api yang Merambat ke Luar Area Gudang</h2>
      <blockquote className="kasus">
        <p>
          Pada 1 April 2026 malam, kebakaran melanda pabrik gas milik PT Indogas Andalan Kita di kawasan Cimuning, Mustika Jaya, Kota Bekasi. Berdasarkan laporan yang dikutip Merdeka.com dan Detik.com, api diduga berasal dari kebocoran gas saat proses pengisian tabung, kemudian membesar dengan cepat hingga merambat ke permukiman warga di sekitarnya. Sebanyak 19 rumah dan 2 kios ikut hangus, dan tujuh warga harus dirawat.
        </p>
      </blockquote>
      <p>
        Di sinilah cakupan yang lebih luas menjadi krusial: jika area produksi tersebut memiliki polis PAR yang mencakup perluasan tanggung jawab lebih besar atau setidaknya polis Public Liability terpisah, dampak finansial terhadap pihak ketiga (rumah dan kios warga) punya jalur klaim yang lebih jelas dibanding hanya mengandalkan polis kebakaran dasar.
      </p>

      <h2>Perbandingan Singkat</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Aspek</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Asuransi Kebakaran</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Property All Risk (PAR)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Basis jaminan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Named-perils (FLEXAS)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>All-risk kecuali dikecualikan</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Cocok untuk</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Gudang sederhana, risiko rendah</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Gudang bernilai tinggi, operasional kompleks</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Premi</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Lebih rendah</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Lebih tinggi</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Risiko benturan/mekanis</td><td style={{padding: "10px 12px"}}>Umumnya dikecualikan</td><td style={{padding: "10px 12px"}}>Umumnya tercakup</td></tr>
        </tbody>
      </table>

      <h2>Kerangka Keputusan Sederhana</h2>
      <p><strong>Kebakaran standar cukup jika:</strong> nilai aset relatif kecil, aktivitas di gudang sederhana (penyimpanan pasif, minim mesin bergerak), dan Anda punya budget premi terbatas.</p>
      <p><strong>PAR lebih tepat jika:</strong> gudang menyimpan barang bernilai tinggi, ada aktivitas bongkar-muat dengan alat berat/forklift, ada proses produksi di dalamnya, atau lokasi berdekatan dengan permukiman padat yang meningkatkan eksposur risiko.</p>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Belum Yakin Gudang Anda Butuh Polis Mana?</div>
        <div className="text-white/70 text-sm mb-4">Ceritakan kondisi gudang Anda, kami bantu tentukan skema yang paling efisien — gratis.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Pak Rio, saya masih bingung pilih Property All Risk atau Asuransi Kebakaran untuk gudang saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
          💬 Konsultasi via WhatsApp
        </a>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-black/8">
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Baca Juga di Silo Properti</div>
        <div className="flex flex-col gap-2 mb-6">
          {related.map(r => (
            <Link key={r.slug} href={`/artikel/${r.slug}`} className="text-navy2 text-sm hover:text-gold transition-colors no-underline">→ {r.title}</Link>
          ))}
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/asuransi-properti/gudang" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Asuransi Gudang →</Link>
          <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
          <Link href="/asuransi-machinery/machinery-breakdown" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔧 Machinery Breakdown →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
