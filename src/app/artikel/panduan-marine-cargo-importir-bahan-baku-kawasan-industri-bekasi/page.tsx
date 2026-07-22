import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("panduan-marine-cargo-importir-bahan-baku-kawasan-industri-bekasi")!;
const related = getArtikelByCluster("kargo", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "marine cargo bekasi, asuransi impor bahan baku cikarang, asuransi kargo jababeka, cikarang dry port asuransi, marine cargo insurance kawasan industri",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah bahan baku yang dikirim via Cikarang Dry Port tetap perlu Marine Cargo, bukan asuransi kargo darat biasa?", acceptedAnswer: { "@type": "Answer", text: "Ya. Meski titik akhir kontainer adalah Cikarang Dry Port yang berlokasi darat, perjalanan utamanya tetap melalui jalur laut internasional dari negara asal ke Tanjung Priok. Marine Cargo Insurance menjamin keseluruhan rantai perjalanan itu, termasuk transshipment ke Cikarang Dry Port, sesuai klausul yang disepakati." } },
    { "@type": "Question", name: "Kalau kontainer sempat tertahan di pelabuhan karena antrean pemeriksaan bea cukai, apakah kerugian akibat penundaan itu dijamin?", acceptedAnswer: { "@type": "Answer", text: "Kerugian murni akibat keterlambatan (delay) tidak dijamin Marine Cargo Insurance. Namun jika selama masa tertahan itu terjadi kerusakan fisik pada barang — misalnya akibat cuaca, penumpukan berlebih, atau kesalahan penanganan di area pelabuhan — kerugian tersebut tetap dapat diklaim selama termasuk dalam periode pertanggungan polis." } },
    { "@type": "Question", name: "Berapa lama Marine Cargo Insurance melindungi barang sejak dikapalkan hingga tiba di pabrik?", acceptedAnswer: { "@type": "Answer", text: "Umumnya mengikuti klausul warehouse to warehouse — mulai dari gudang penjual di negara asal hingga gudang pembeli di Bekasi, termasuk proses bongkar-muat dan transshipment di sepanjang jalur, selama tercantum jelas dalam polis dan tidak melebihi batas waktu maksimum yang disepakati (biasanya 60 hari sejak bongkar di pelabuhan tujuan)." } },
    { "@type": "Question", name: "Apakah nilai pertanggungan Marine Cargo dihitung dari harga barang saja?", acceptedAnswer: { "@type": "Answer", text: "Tidak selalu. Praktik umum menggunakan nilai CIF ditambah margin tambahan (biasanya 10%) untuk mengakomodasi potensi kehilangan margin keuntungan atau biaya tambahan pasca-klaim, dikenal sebagai Invoice Value + 10%." } },
  ],
};

export default function ArtikelMarineCargoBahanBaku() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Panduan Marine Cargo Importir Bahan Baku"
      heroBadge="Panduan · Marine Cargo Industri"
      heroTitle={<>Panduan Marine Cargo untuk Importir<br /><em className="not-italic text-sky-300">Bahan Baku Kawasan Industri Bekasi</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Bekasi dan Cikarang adalah salah satu simpul manufaktur terbesar di Indonesia — Jababeka, MM2100, EJIP, dan kawasan mandiri di sekitarnya menampung ribuan pabrik yang sebagian besar bahan bakunya masih diimpor dari Asia, Eropa, atau Amerika. Bahan baku itu tidak langsung "muncul" di gudang pabrik. Ia melewati rantai perjalanan panjang: pelayaran internasional, bongkar di Tanjung Priok, proses kepabeanan, lalu diteruskan ke Cikarang Dry Port atau langsung ke pabrik via trucking. Setiap titik dalam rantai ini punya risikonya sendiri — dan Marine Cargo Insurance adalah satu-satunya instrumen yang menjamin seluruh rantai itu sebagai satu kesatuan.
      </p>

      <h2>Kongesti Pelabuhan 2026: Kenapa Titik Penyimpanan Jadi Makin Rawan</h2>
      <blockquote className="kasus">
        <p>
          Pertengahan 2026, Bea Cukai Tanjung Priok menambah lokasi pemeriksaan fisik di Jakarta International Container Terminal (JICT) dan Terminal Petikemas Koja, serta memperluas jam pemeriksaan hingga malam hari sebagai respons atas penumpukan kontainer impor yang terus terjadi. Otoritas turut mendorong pengetatan aturan lama penyimpanan barang di pelabuhan demi memperbaiki efisiensi logistik nasional.
        </p>
        <p>
          Dampaknya dirasakan langsung oleh importir produsen: sejumlah kontainer yang sudah mengantongi Surat Persetujuan Pengeluaran Barang (SPPB) tetap tertahan karena keterbatasan ketersediaan truk pengangkut untuk menariknya keluar dari kawasan pelabuhan menuju Bekasi dan Cikarang.
        </p>
      </blockquote>
      <p>
        Semakin lama barang berada di area penyimpanan sementara — apalagi dalam kondisi ditumpuk dan dipindah berkali-kali di luar jadwal semula — semakin tinggi pula eksposur risiko kerusakan fisiknya. Inilah mengapa klausul "warehouse to warehouse" dalam polis Marine Cargo menjadi krusial: ia memastikan perlindungan tetap berjalan sepanjang barang belum benar-benar sampai dan diturunkan di gudang pabrik Anda, bukan berhenti begitu kontainer turun dari kapal.
      </p>

      <h2>Institute Cargo Clauses: Memilih Level Perlindungan yang Tepat</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">🌊</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">ICC A — All Risk</div>
          <p className="text-sm leading-relaxed text-[#475569]">Cakupan paling luas, menjamin semua risiko kerusakan fisik kecuali yang dikecualikan eksplisit. Direkomendasikan untuk bahan baku bernilai tinggi atau sensitif seperti komponen elektronik dan bahan kimia.</p>
        </div>
        <div className="bg-[#F0FDFA] border border-[#99F6E4] rounded-card p-5">
          <div className="text-2xl mb-2">⚓</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">ICC B — Cakupan Menengah</div>
          <p className="text-sm leading-relaxed text-[#475569]">Menjamin risiko spesifik seperti kebakaran, kandas, tenggelam, dan gempa bumi. Cocok untuk bahan baku curah yang relatif tahan banting namun tetap butuh proteksi terhadap risiko mayor.</p>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-card p-5">
          <div className="text-2xl mb-2">🔥</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">ICC C — Cakupan Dasar</div>
          <p className="text-sm leading-relaxed text-[#475569]">Hanya menjamin risiko utama seperti kebakaran dan kecelakaan alat angkut. Premi paling rendah, tapi celah perlindungannya paling besar — perlu dihitung ulang untuk bahan baku bernilai signifikan.</p>
        </div>
      </div>

      <h2>Rute Impor Bahan Baku ke Bekasi dan Titik Risikonya</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Tahapan</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Titik Risiko</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Dijamin Marine Cargo?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pelayaran internasional</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Cuaca buruk, kandas, tenggelam, kebakaran kapal</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✅ Ya</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Bongkar di Tanjung Priok</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kesalahan penanganan crane, benturan antar-kontainer</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✅ Ya</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Penyimpanan sementara/kongesti</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Penumpukan berlebih, cuaca, kerusakan akibat lama tertahan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✅ Ya (jika masuk periode polis)</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Trucking ke Cikarang Dry Port/pabrik</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kecelakaan lalu lintas, pencurian di jalur tol</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✅ Ya (dalam klausul warehouse to warehouse)</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Keterlambatan pengiriman semata</td><td style={{padding: "10px 12px"}}>Kongesti, antrean pemeriksaan, kelangkaan truk</td><td style={{padding: "10px 12px"}}>❌ Tidak, kecuali disertai kerusakan fisik</td></tr>
        </tbody>
      </table>

      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">📋</div>
        <div className="text-white/85 text-sm leading-relaxed m-0">
          Catatan penting: proses klaim Marine Cargo selalu membutuhkan dokumentasi lengkap sejak awal — Bill of Lading (B/L), invoice, packing list, hingga laporan survei kerusakan (survey report) yang idealnya dibuat segera setelah barang tiba, sebelum di-stuffing ke gudang produksi.
        </div>
      </div>

      <h2>Dokumen yang Wajib Disiapkan Importir Bahan Baku</h2>
      <ul>
        <li><strong>NIB, API-U/API-P</strong> — legalitas dasar sebagai importir produsen atau umum.</li>
        <li><strong>Invoice dan packing list</strong> — dasar penentuan nilai pertanggungan (insured value).</li>
        <li><strong>Bill of Lading (B/L) atau Airway Bill (AWB)</strong> — bukti kontrak pengangkutan yang dilampirkan saat klaim.</li>
        <li><strong>Incoterms yang disepakati</strong> — menentukan siapa yang wajib membeli polis dan sejak kapan tanggung jawab berpindah.</li>
        <li><strong>Rute dan pelabuhan bongkar</strong> — termasuk jika menggunakan skema multimoda via Cikarang Dry Port.</li>
      </ul>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Rutin Impor Bahan Baku ke Bekasi atau Cikarang?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan skema Marine Cargo dan klausul ICC yang paling sesuai untuk rute dan jenis barang Anda — gratis.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi Marine Cargo Insurance untuk impor bahan baku pabrik saya di kawasan industri Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
          💬 Konsultasi via WhatsApp
        </a>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-black/8">
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Baca Juga di Silo Kargo</div>
        <div className="flex flex-col gap-2 mb-6">
          {related.map(r => (
            <Link key={r.slug} href={`/artikel/${r.slug}`} className="text-navy2 text-sm hover:text-gold transition-colors no-underline">→ {r.title}</Link>
          ))}
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/asuransi-kargo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Asuransi Kargo →</Link>
          <Link href="/asuransi-kargo/marine-cargo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚢 Marine Cargo →</Link>
          <Link href="/asuransi-properti/gudang" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Asuransi Gudang →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
