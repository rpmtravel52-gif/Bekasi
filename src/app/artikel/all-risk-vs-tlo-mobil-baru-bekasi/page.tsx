import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("all-risk-vs-tlo-mobil-baru-bekasi")!;
const related = getArtikelByCluster("kendaraan", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "all risk vs tlo bekasi, asuransi mobil baru bekasi, perbedaan all risk dan tlo, asuransi mobil all risk bekasi, tlo atau all risk mobil baru",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Untuk mobil baru kredit di Bekasi, apakah leasing mewajibkan All Risk?", acceptedAnswer: { "@type": "Answer", text: "Hampir selalu ya. Sebagian besar perusahaan pembiayaan mewajibkan All Risk untuk mobil baru selama masa cicilan berjalan, biasanya 1-3 tahun pertama, karena nilai kendaraan yang masih tinggi membuat risiko kerugian finansial bagi leasing juga tinggi jika hanya memakai TLO." } },
    { "@type": "Question", name: "Apakah All Risk otomatis menanggung kerusakan akibat banjir di Bekasi?", acceptedAnswer: { "@type": "Answer", text: "Tidak otomatis. Perluasan banjir (flood extension) harus diminta dan dicantumkan terpisah dalam polis All Risk. Mengingat sejumlah ruas jalan dan perumahan di Bekasi rawan genangan musiman, perluasan ini sangat dianjurkan meski menambah premi." } },
    { "@type": "Question", name: "Berapa kisaran premi All Risk untuk mobil baru seharga Rp 250 juta di Bekasi?", acceptedAnswer: { "@type": "Answer", text: "Sebagai estimasi kasar berdasarkan pola tarif referensi OJK untuk Wilayah 2 (termasuk Bekasi), premi All Risk berkisar sekitar Rp 3,75 juta hingga Rp 8,75 juta per tahun tergantung usia kendaraan dan perusahaan asuransi. Ini estimasi, bukan penawaran resmi — premi pasti hanya bisa diketahui setelah pengajuan ke perusahaan asuransi." } },
    { "@type": "Question", name: "Apakah mobil baru yang dibeli cash tetap disarankan pakai All Risk?", acceptedAnswer: { "@type": "Answer", text: "Sangat disarankan, meski tidak diwajibkan seperti pada kredit. Nilai mobil baru yang masih tinggi membuat kerusakan sekecil apapun — lecet, penyok, kaca pecah — punya biaya perbaikan yang signifikan, sesuatu yang tidak ditanggung TLO sama sekali." } },
  ],
};

export default function ArtikelAllRiskVsTLO() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="All Risk vs TLO untuk Mobil Baru"
      heroBadge="Panduan · Asuransi Mobil"
      heroTitle={<>All Risk vs TLO: Mana yang Lebih Untung<br /><em className="not-italic text-gold3">untuk Mobil Baru di Bekasi?</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Kalau Anda baru saja membawa pulang mobil baru dan sedang dihadapkan pada pilihan antara <strong>All Risk (Comprehensive)</strong> dan <strong>TLO (Total Loss Only)</strong>, pertanyaan yang sering muncul bukan "mana yang lebih murah" — tapi "mana yang benar-benar lebih untung dalam jangka panjang". Untuk kondisi lalu lintas dan cuaca Bekasi, jawabannya lebih spesifik dari sekadar teori umum di internet.
      </p>

      <h2>Kenapa Kondisi Bekasi Membuat Pilihan Ini Tidak Bisa Disamakan dengan Kota Lain</h2>
      <p>
        Bekasi punya dua karakteristik yang langsung memengaruhi risiko kendaraan pribadi. Pertama, kepadatan lalu lintas harian di ruas-ruas seperti Jalan Ahmad Yani, Jalan KH Noer Alie (Kalimalang), dan sekitar exit tol Bekasi Barat/Timur yang membuat risiko gesekan, senggolan, dan tabrakan ringan jauh lebih tinggi dibanding kota dengan lalu lintas lebih lengang. Kedua, sejumlah kawasan perumahan di Bekasi Timur, Pondok Gede, dan bantaran Kali Bekasi punya riwayat genangan musiman yang berulang setiap tahun.
      </p>
      <p>
        Dua faktor ini membuat mobil baru di Bekasi menghadapi dua jenis risiko sekaligus: risiko kerusakan kecil-menengah akibat kepadatan jalan (yang hanya ditanggung All Risk), dan risiko kerusakan akibat air (yang butuh perluasan khusus, terlepas dari jenis polis dasarnya).
      </p>

      <h2>Tabel Perbandingan All Risk vs TLO</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Aspek</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>All Risk (Comprehensive)</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>TLO (Total Loss Only)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kerusakan ringan (lecet, penyok)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Ditanggung</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✕ Tidak ditanggung</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kerusakan sedang (tabrakan, kaca pecah)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Ditanggung</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✕ Tidak ditanggung</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kerugian total (≥75% nilai kendaraan)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Ditanggung</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Ditanggung</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kehilangan (pencurian)</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Ditanggung</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>✓ Ditanggung</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Perluasan banjir</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Tersedia sebagai perluasan opsional</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Umumnya tidak tersedia</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Estimasi rate premi/tahun*</td><td style={{padding: "10px 12px"}}>1,5% – 3,5% dari harga kendaraan</td><td style={{padding: "10px 12px"}}>0,2% – 0,8% dari harga kendaraan</td></tr>
        </tbody>
      </table>
      <p style={{fontSize: "0.8rem", color: "#94A3B8", marginTop: "-0.75rem"}}>
        *Estimasi, bukan penawaran resmi. Rate mengacu pada pola tarif referensi OJK untuk kendaraan Wilayah 2 dan dapat berbeda antar perusahaan asuransi.
      </p>

      <h2>Simulasi Premi untuk Mobil Baru di Bekasi</h2>
      <p>
        Berikut ilustrasi perhitungan untuk tiga skenario mobil baru yang umum dibeli warga Bekasi, dengan asumsi Wilayah 2 sesuai pola tarif referensi OJK.
      </p>
      <div className="not-prose flex flex-col gap-4 my-8">
        <div className="border border-blue-200 bg-blue-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Toyota Avanza 2026 (baru, kredit 4 tahun)</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">→ All Risk</span>
          </div>
          <div className="text-xs text-[#94A3B8] mb-3">Harga kendaraan: Rp 245 juta</div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">Estimasi All Risk/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 3,67 jt – Rp 8,57 jt</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Estimasi TLO/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 490 rb – Rp 1,96 jt</div>
            </div>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">Leasing hampir pasti mewajibkan All Risk selama masa kredit. Nilai kendaraan yang masih tinggi membuat kerusakan kecil di kepadatan Jalan Ahmad Yani atau Kalimalang tetap bernilai signifikan jika harus ditanggung sendiri.</p>
        </div>
        <div className="border border-blue-200 bg-blue-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Honda HR-V 2026 (baru, cash)</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">→ All Risk + Perluasan Banjir</span>
          </div>
          <div className="text-xs text-[#94A3B8] mb-3">Harga kendaraan: Rp 380 juta</div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">Estimasi All Risk/tahun</div>
              <div className="font-heading font-bold text-navy text-sm">Rp 5,7 jt – Rp 13,3 jt</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-black/6">
              <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Tambahan perluasan banjir</div>
              <div className="font-heading font-bold text-navy text-sm">+Rp 150 rb – Rp 400 rb</div>
            </div>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">Meski dibeli tunai, nilai kendaraan yang tinggi tetap membuat All Risk lebih masuk akal. Karena rumah pemilik berada di area langganan genangan, perluasan banjir sangat dianjurkan meski bukan kewajiban.</p>
        </div>
        <div className="border border-amber-200 bg-amber-50/30 rounded-card p-5">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <div className="font-heading font-bold text-navy text-[0.95rem]">Mobil bekas usia 6 tahun sebagai unit kedua keluarga</div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-700">→ Pertimbangkan TLO</span>
          </div>
          <div className="text-xs text-[#94A3B8] mb-3">Harga pasar: Rp 140 juta</div>
          <p className="text-xs text-[#64748B] leading-relaxed">Bukan mobil baru, sehingga di luar fokus utama artikel ini — tapi relevan sebagai pembanding. Untuk kendaraan usia lanjut dengan penggunaan tidak intensif, selisih premi TLO yang jauh lebih murah lebih masuk akal dibanding proteksi All Risk penuh.</p>
        </div>
      </div>

      <h2>Kapan All Risk Jelas Lebih Untung untuk Mobil Baru</h2>
      <ul>
        <li>Mobil dibeli secara kredit — hampir semua leasing mewajibkan All Risk selama masa cicilan</li>
        <li>Kendaraan digunakan setiap hari melintasi jalur padat seperti Kalimalang, Jalan Ahmad Yani, atau akses kawasan industri</li>
        <li>Mobil diparkir di area terbuka (bukan garasi tertutup) di lingkungan rumah</li>
        <li>Nilai kendaraan di atas Rp 200 juta, membuat biaya perbaikan kerusakan sedang sekalipun sudah signifikan</li>
        <li>Rumah berada di kawasan yang memiliki riwayat genangan musiman, sehingga perluasan banjir bisa ditambahkan</li>
      </ul>

      <blockquote className="kasus">
        <p>
          <strong>Kasus nyata:</strong> Sebuah mobil baru yang diparkir di halaman rumah kawasan Perumnas III terendam banjir kiriman akibat luapan Kali Bekasi pada awal musim hujan. Pemilik yang memilih All Risk dengan perluasan banjir mendapat penggantian kerusakan mesin akibat water hammer senilai puluhan juta rupiah. Tanpa perluasan tersebut — meski tetap memegang polis All Risk — klaim kerusakan akibat banjir kemungkinan besar akan ditolak karena banjir bukan jaminan dasar, melainkan perluasan yang harus diminta secara eksplisit di awal polis.
        </p>
      </blockquote>

      <h2>Perluasan yang Perlu Dipertimbangkan untuk Mobil Baru di Bekasi</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">🌊</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Perluasan Banjir</div>
          <p className="text-sm leading-relaxed text-[#475569]">Sangat relevan untuk kendaraan yang parkir atau melintas di kawasan Bekasi Timur, Pondok Gede, dan bantaran Kali Bekasi yang rawan genangan musiman.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">👤</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Tanggung Jawab Pihak Ketiga (TPL)</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penting mengingat kepadatan lalu lintas Bekasi membuat potensi menyerempet kendaraan atau properti orang lain relatif tinggi.</p>
        </div>
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">⚡</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Kerusuhan & RSMD</div>
          <p className="text-sm leading-relaxed text-[#475569]">Relevansi menengah, terutama bagi kendaraan yang sering diparkir di area publik atau pusat keramaian.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">🚗</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Mobil Pengganti Selama Perbaikan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Berguna jika mobil menjadi kendaraan utama harian, sehingga aktivitas tidak terganggu selama proses klaim dan perbaikan berlangsung.</p>
        </div>
      </div>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Masih Bingung Pilih All Risk atau TLO untuk Mobil Baru Anda?</div>
        <div className="text-white/70 text-sm mb-4">Ceritakan merek, tahun, dan cara pemakaian mobil Anda — kami bantu hitungkan estimasi premi dan rekomendasi perluasan yang relevan untuk lokasi Anda di Bekasi.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi pilih All Risk atau TLO untuk mobil baru saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
