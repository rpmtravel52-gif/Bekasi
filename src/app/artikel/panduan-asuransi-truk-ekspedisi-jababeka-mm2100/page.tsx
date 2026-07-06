import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("panduan-asuransi-truk-ekspedisi-jababeka-mm2100")!;
const related = getArtikelByCluster("kendaraan", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "asuransi truk jababeka, asuransi truk mm2100, asuransi ekspedisi bekasi, asuransi truk kawasan industri cikarang, asuransi armada truk bekasi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah asuransi truk untuk operasional di Jababeka dan MM2100 berbeda dari asuransi mobil pribadi?", acceptedAnswer: { "@type": "Answer", text: "Ya, berbeda. Truk niaga dikategorikan sebagai kendaraan komersial dengan tarif premi dan skema jaminan yang berbeda dari kendaraan pribadi, termasuk opsi perluasan tanggung jawab muatan dan skema fleet insurance untuk armada dengan banyak unit." } },
    { "@type": "Question", name: "Apakah asuransi truk sudah termasuk jaminan atas barang yang diangkut?", acceptedAnswer: { "@type": "Answer", text: "Tidak secara otomatis. Asuransi kendaraan (truk) hanya menjamin unit truknya. Nilai barang muatan membutuhkan polis kargo darat terpisah atau perluasan tanggung jawab muatan tersendiri, tergantung skema yang dipilih." } },
    { "@type": "Question", name: "Berapa estimasi premi All Risk untuk truk box seharga Rp 450 juta yang beroperasi di kawasan industri Bekasi?", acceptedAnswer: { "@type": "Answer", text: "Sebagai estimasi kasar mengacu pada pola tarif referensi OJK untuk kendaraan niaga, premi All Risk berkisar sekitar Rp 11 juta hingga Rp 22,5 juta per tahun tergantung usia truk, jenis muatan, dan riwayat klaim. Ini estimasi, bukan penawaran resmi." } },
    { "@type": "Question", name: "Apakah lebih baik asuransi per unit truk atau menggunakan skema fleet untuk banyak kendaraan?", acceptedAnswer: { "@type": "Answer", text: "Untuk usaha ekspedisi dengan 5 unit truk atau lebih, skema fleet insurance umumnya lebih efisien dari sisi premi dan administrasi karena satu jatuh tempo untuk seluruh armada dan proses klaim yang lebih terkoordinasi." } },
  ],
};

export default function ArtikelTrukEkspedisiJababeka() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Panduan Asuransi Truk Ekspedisi Jababeka & MM2100"
      heroBadge="Panduan · Kendaraan Niaga"
      heroTitle={<>Panduan Asuransi Truk untuk Ekspedisi<br /><em className="not-italic text-orange-300">Kawasan Industri Jababeka & MM2100</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Jababeka dan MM2100 adalah dua dari kawasan industri terpadat di koridor Cikarang-Bekasi, menampung ratusan pabrik manufaktur, elektronik, dan pergudangan yang bergantung penuh pada arus truk masuk-keluar setiap hari. Bagi pelaku usaha ekspedisi yang melayani kawasan ini, truk bukan sekadar alat angkut — ia adalah aset produktif yang menentukan apakah pengiriman ke klien tepat waktu atau tidak. Kegagalan melindunginya secara tepat bisa langsung mengganggu arus kas usaha.
      </p>

      <h2>Kenapa Rute Jababeka & MM2100 Punya Profil Risiko yang Khas</h2>
      <p>
        Truk yang melayani kawasan industri ini secara rutin melintasi jalur padat seperti akses Tol Jakarta-Cikampek, Jalan Raya Jababeka, dan jalan penghubung ke MM2100 yang sama-sama menjadi jalur utama ribuan kendaraan niaga setiap harinya. Kepadatan ini meningkatkan risiko tabrakan beruntun, terutama pada jam sibuk pergantian shift pabrik pagi dan sore hari ketika volume kendaraan memuncak bersamaan.
      </p>
      <blockquote className="kasus">
        <p>
          Insiden kecelakaan beruntun yang melibatkan truk kontainer dan kendaraan niaga lain kerap tercatat di ruas Tol Jakarta-Cikampek, tak jarang melibatkan kendaraan yang baru saja keluar dari gerbang kawasan industri Cikarang. Pola ini menunjukkan bahwa risiko kecelakaan bagi truk ekspedisi kawasan Jababeka dan MM2100 bukan skenario langka, melainkan kondisi operasional harian yang harus diantisipasi lewat proteksi yang memadai — bukan hanya diserahkan pada kehati-hatian pengemudi semata.
        </p>
      </blockquote>

      <h2>Cakupan Jaminan yang Perlu Dipastikan Ada di Polis Truk Anda</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Jaminan</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Relevansi untuk Ekspedisi Jababeka/MM2100</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kerusakan akibat kecelakaan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Sangat tinggi — kepadatan jalur akses kawasan industri dan tol</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kehilangan kendaraan (pencurian/pembegalan)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Tinggi — rute jarak jauh dengan titik transit dan rest area</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Tanggung jawab pihak ketiga (TPL)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Sangat tinggi — kepadatan lalu lintas berarti risiko menyerempet kendaraan lain lebih besar</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Perluasan tanggung jawab muatan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Tinggi jika truk mengangkut barang milik klien pihak ketiga</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Kebakaran & ledakan</td><td style={{padding: "10px 12px"}}>Menengah — relevan untuk muatan mudah terbakar atau elektronik</td></tr>
        </tbody>
      </table>

      <h2>Polis Satuan vs Fleet Insurance: Mana yang Cocok untuk Skala Usaha Anda?</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-white border border-black/8 rounded-card p-5">
          <div className="text-2xl mb-2">🚚</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Polis Satuan (Single Unit)</div>
          <p className="text-sm leading-relaxed text-[#475569] mb-2">Cocok untuk usaha ekspedisi dengan 1-4 unit truk. Setiap kendaraan punya polis dan jatuh tempo sendiri, fleksibel untuk menambah unit secara bertahap.</p>
        </div>
        <div className="bg-white border border-black/8 rounded-card p-5">
          <div className="text-2xl mb-2">🚛</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Fleet Insurance (Armada)</div>
          <p className="text-sm leading-relaxed text-[#475569] mb-2">Lebih efisien untuk 5 unit truk ke atas. Satu jatuh tempo untuk seluruh armada, premi cenderung lebih kompetitif, dan pengelolaan klaim terpusat.</p>
        </div>
      </div>

      <h2>Simulasi Estimasi Premi Truk untuk Operasional Kawasan Industri</h2>
      <div className="not-prose flex flex-col gap-4 my-8">
        <div className="border border-blue-200 bg-blue-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Truk Box Engkel 2023 — Ekspedisi Elektronik</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">All Risk</span>
          </div>
          <div className="text-xs text-[#94A3B8] mb-3">Harga kendaraan: Rp 450 juta</div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">Estimasi premi/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 11 jt – Rp 22,5 jt</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Perluasan muatan</div>
              <div className="font-heading font-bold text-navy text-sm">Disesuaikan nilai barang</div>
            </div>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">Estimasi, bukan penawaran resmi. Mengangkut barang elektronik bernilai tinggi membuat perluasan tanggung jawab muatan sangat relevan di luar jaminan unit truk itu sendiri.</p>
        </div>
        <div className="border border-amber-200 bg-amber-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Armada 6 Unit Truk Tronton — Distribusi Bahan Baku</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-700">Fleet Insurance</span>
          </div>
          <div className="text-xs text-[#94A3B8] mb-3">Total nilai armada: Rp 3,6 miliar</div>
          <p className="text-xs text-[#64748B] leading-relaxed">Estimasi, bukan penawaran resmi. Dengan 6 unit, skema fleet insurance memberi efisiensi administrasi dan negosiasi rate yang lebih baik dibanding mengasuransikan tiap unit secara terpisah.</p>
        </div>
      </div>

      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">⚖️</div>
        <p className="text-white/85 text-sm leading-relaxed m-0">
          Perhatikan batas tonase dan dimensi yang dideklarasikan dalam polis. Muatan yang melebihi kapasitas (over dimension over load) yang diizinkan berpotensi membuat klaim ditolak, terlepas dari jenis polis yang dimiliki — ini pengecualian standar yang sering luput diperhatikan pelaku ekspedisi.
        </p>
      </div>

      <h2>4 Langkah Memastikan Truk Ekspedisi Anda Terlindungi dengan Tepat</h2>
      <ol>
        <li><strong>Deklarasikan rute dan jenis muatan secara akurat</strong> — rute reguler ke Jababeka/MM2100 dan jenis barang yang diangkut memengaruhi rate dan kelayakan klaim.</li>
        <li><strong>Pastikan pengemudi memiliki SIM B Umum yang berlaku</strong> — pengecualian standar hampir semua polis truk niaga.</li>
        <li><strong>Pertimbangkan perluasan tanggung jawab muatan</strong> secara terpisah jika truk mengangkut barang milik klien pihak ketiga, bukan hanya polis kendaraan.</li>
        <li><strong>Evaluasi skema polis sesuai skala armada</strong> — satuan untuk usaha kecil, fleet insurance untuk 5 unit ke atas.</li>
      </ol>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Armada Truk Anda Beroperasi di Jababeka atau MM2100?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan skema asuransi yang paling sesuai untuk skala usaha ekspedisi Anda — gratis, tanpa tekanan.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Pak Rio, saya ingin konsultasi asuransi truk untuk usaha ekspedisi saya di kawasan Jababeka/MM2100.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-kendaraan/truk-kendaraan-niaga" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚛 Truk & Kendaraan Niaga →</Link>
          <Link href="/asuransi-kargo/kargo-darat" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Asuransi Kargo Darat →</Link>
          <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚙 Asuransi Kendaraan →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
