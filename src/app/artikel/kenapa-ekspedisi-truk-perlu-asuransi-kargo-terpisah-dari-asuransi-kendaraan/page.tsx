import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("kenapa-ekspedisi-truk-perlu-asuransi-kargo-terpisah-dari-asuransi-kendaraan")!;
const related = getArtikelByCluster("kargo", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "asuransi kargo darat bekasi, asuransi truk ekspedisi, asuransi barang muatan truk, beda asuransi kendaraan dan kargo, asuransi ekspedisi cikarang",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kalau truk saya sudah punya asuransi kendaraan All Risk, apakah muatan di dalamnya otomatis ikut terjamin?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Asuransi kendaraan (All Risk maupun TLO) hanya menjamin kerusakan pada unit truknya — mesin, bodi, kaca, dan komponen kendaraan. Nilai barang yang diangkut di dalamnya sama sekali tidak termasuk dalam objek pertanggungan tersebut, sehingga tetap butuh polis kargo terpisah." } },
    { "@type": "Question", name: "Siapa yang idealnya membeli asuransi kargo — pemilik truk (ekspedisi) atau pemilik barang?", acceptedAnswer: { "@type": "Answer", text: "Tergantung kesepakatan bisnis. Perusahaan ekspedisi bisa membeli polis kargo sebagai bagian dari layanan untuk melindungi reputasi dan menghindari klaim ganti rugi dari klien, atau pemilik barang membeli sendiri untuk melindungi kepentingannya langsung. Yang terpenting, kejelasan siapa yang menanggung harus disepakati sejak awal kontrak pengiriman." } },
    { "@type": "Question", name: "Apakah kecelakaan lalu lintas yang melibatkan truk pengangkut otomatis membuat klaim kargo cair?", acceptedAnswer: { "@type": "Answer", text: "Klaim kargo akan diproses berdasarkan bukti kerugian fisik pada barang, bukan sekadar status kecelakaan kendaraan. Dokumentasi seperti foto kondisi barang, surat jalan, dan laporan kepolisian tetap diperlukan untuk mendukung proses klaim kerusakan atau kehilangan muatan." } },
    { "@type": "Question", name: "Apakah ada skema asuransi kargo yang efisien untuk ekspedisi dengan frekuensi kirim tinggi?", acceptedAnswer: { "@type": "Answer", text: "Ya, tersedia skema polis tahunan (open cover) yang otomatis menjamin setiap pengiriman dalam periode tertentu tanpa perlu membeli polis satu per satu — jauh lebih efisien dibanding skema per pengiriman untuk ekspedisi dengan volume kirim tinggi." } },
  ],
};

export default function ArtikelEkspedisiTrukAsuransiKargo() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Ekspedisi Truk Perlu Asuransi Kargo Terpisah"
      heroBadge="Panduan · Kargo Darat & Ekspedisi"
      heroTitle={<>Kenapa Ekspedisi Truk Perlu Asuransi Kargo<br /><em className="not-italic text-orange-300">Terpisah dari Asuransi Kendaraan</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Tol Jakarta-Cikampek adalah urat nadi distribusi bagi ribuan pelaku ekspedisi yang berbasis di kawasan pergudangan Bekasi dan Cikarang. Setiap hari, ratusan truk kontainer dan truk box melintasi jalur ini membawa muatan bernilai puluhan hingga ratusan juta rupiah per pengiriman. Namun banyak pelaku ekspedisi baru menyadari satu celah krusial setelah insiden terjadi: <strong>polis asuransi kendaraan yang mereka miliki tidak pernah dirancang untuk melindungi nilai barang yang diangkut</strong> — hanya truknya.
      </p>

      <h2>Dua Kecelakaan di Tol Japek yang Jadi Pengingat</h2>
      <blockquote className="kasus">
        <p>
          Pada 10 April 2026, sebuah truk trailer tractor head mengalami kecelakaan beruntun di Jalan Tol Jakarta–Cikampek KM 20.600 setelah menabrak dump truck yang sebelumnya menabrak boks kontainer yang terjatuh di lajur jalan. Tiga kendaraan mengalami kerusakan materiil dalam insiden tersebut.
        </p>
        <p>
          Kurang dari tiga bulan berselang, pada 3 Juli 2026, kecelakaan kembali terjadi di ruas yang sama — kali ini melibatkan kendaraan kontainer dan wing box di sekitar Karawang Timur–Karawang Barat, memicu kepadatan panjang hingga malam hari. Pada hari yang sama, insiden lain juga tercatat di KM 15+200 arah Cikampek, tepat di kawasan Bekasi Timur.
        </p>
      </blockquote>
      <p>
        Pola yang berulang ini menunjukkan bahwa boks kontainer terjatuh dari kendaraan bukan skenario langka di koridor Bekasi–Cikarang–Karawang. Ketika kejadian seperti ini menimpa truk ekspedisi Anda, polis kendaraan akan menanggung perbaikan trailernya. Tapi siapa yang menanggung nilai barang di dalam boks yang terjatuh atau rusak akibat benturan? Tanpa polis kargo terpisah, jawabannya: tidak ada.
      </p>

      <h2>Asuransi Kendaraan vs Asuransi Kargo: Dua Objek Pertanggungan yang Berbeda</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Aspek</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Asuransi Kendaraan (Truk)</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Asuransi Kargo Darat</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Objek yang dilindungi</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Unit truk — mesin, bodi, kaca, komponen</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Nilai barang muatan yang diangkut</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pemegang kepentingan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pemilik/pengelola armada</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pemilik barang atau ekspedisi (sesuai kesepakatan)</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Klaim akibat kecelakaan lalu lintas</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Menanggung biaya perbaikan truk</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Menanggung kerugian nilai barang yang rusak/hilang</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Klaim akibat pencurian</td><td style={{padding: "10px 12px"}}>Menjamin kehilangan unit truk itu sendiri</td><td style={{padding: "10px 12px"}}>Menjamin kehilangan barang muatan (meski truk tidak hilang)</td></tr>
        </tbody>
      </table>

      <h2>4 Skenario yang Sering Tidak Disadari Ekspedisi Bekasi</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">💥</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Boks Kontainer Terjatuh di Jalan Tol</div>
          <p className="text-sm leading-relaxed text-[#475569]">Seperti kasus di KM 20.600 Tol Japek April 2026 — kontainer yang terjatuh bisa rusak parah meski truk pengangkutnya sendiri baik-baik saja atau hanya rusak ringan.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">🔓</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Pencurian Sebagian Muatan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Truk tetap utuh dan tidak dicuri, tapi sebagian isi muatan raib saat parkir di rest area atau lokasi transit — skenario yang tidak tersentuh polis kendaraan sama sekali.</p>
        </div>
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">💧</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Kerusakan Akibat Air Saat Melintasi Banjir</div>
          <p className="text-sm leading-relaxed text-[#475569]">Rute distribusi yang melewati titik rawan genangan musiman di Bekasi berisiko merusak muatan meski kendaraan tetap bisa melaju dan tidak mogok.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">📦</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Kesalahan Bongkar Muat</div>
          <p className="text-sm leading-relaxed text-[#475569]">Barang jatuh atau rusak saat proses muat-bongkar di gudang, bukan akibat perjalanan kendaraan — klasik terjadi tapi jarang diantisipasi lewat polis kendaraan.</p>
        </div>
      </div>

      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">⚖️</div>
        <div className="text-white/85 text-sm leading-relaxed m-0">
          Dalam kontrak antara ekspedisi dan klien pemilik barang, kelalaian melindungi nilai muatan bisa berujung pada tuntutan ganti rugi dari klien terhadap perusahaan ekspedisi itu sendiri — bukan hanya kerugian fisik barang, tapi juga risiko reputasi dan hubungan bisnis jangka panjang.
        </div>
      </div>

      <h2>Kenapa Banyak Ekspedisi Baru Sadar Setelah Rugi</h2>
      <p>
        Pola yang umum terjadi: perusahaan ekspedisi fokus melindungi aset yang paling terlihat — truknya sendiri — karena itu investasi modal langsung yang mudah dihitung nilainya. Nilai barang muatan klien sering dianggap "bukan tanggung jawab kami secara finansial" hingga klaim ganti rugi benar-benar diajukan klien pasca-insiden. Padahal, dengan frekuensi kecelakaan truk kontainer yang terus terjadi di koridor Bekasi–Cikarang–Karawang seperti dua kasus di atas, risiko ini bukan skenario hipotetis melainkan pola berulang yang bisa diantisipasi sejak awal.
      </p>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Truk Ekspedisi Anda Sudah Diasuransikan, tapi Muatannya Belum?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan kebutuhan asuransi kargo darat untuk usaha ekspedisi Anda di Bekasi — gratis, sesuai frekuensi pengiriman Anda.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Pak Rio, saya ingin konsultasi asuransi kargo darat untuk usaha ekspedisi truk saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-kargo/kargo-darat" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Asuransi Kargo Darat →</Link>
          <Link href="/asuransi-kendaraan/truk-kendaraan-niaga" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚛 Truk & Kendaraan Niaga →</Link>
          <Link href="/asuransi-kargo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Asuransi Kargo →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
