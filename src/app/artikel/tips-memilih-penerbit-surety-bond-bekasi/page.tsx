import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("tips-memilih-penerbit-surety-bond-bekasi")!;
const related = getArtikelByCluster("surety", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "penerbit surety bond terpercaya, jaminan bodong bekasi, cek OJK surety bond, ciri jaminan proyek palsu, memilih perusahaan penjaminan bekasi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Bagaimana cara memastikan penerbit surety bond terdaftar resmi di OJK?", acceptedAnswer: { "@type": "Answer", text: "OJK secara berkala menerbitkan daftar resmi perusahaan asuransi, perusahaan penjaminan, dan konsorsium yang memiliki izin memasarkan produk suretyship. Kontraktor dapat memverifikasi nama penerbit yang ditawarkan terhadap daftar resmi tersebut sebelum menerima penawaran." } },
    { "@type": "Question", name: "Apa tanda paling mencurigakan dari penawaran surety bond?", acceptedAnswer: { "@type": "Answer", text: "Premi yang jauh di bawah tarif wajar pasar dan proses penerbitan instan tanpa analisa keuangan sama sekali adalah dua tanda paling umum dari jaminan bodong. Jaminan yang sah selalu melalui proses underwriting, tidak pernah diterbitkan secara instan." } },
    { "@type": "Question", name: "Apakah agen yang menawarkan jaminan proyek harus punya izin khusus?", acceptedAnswer: { "@type": "Answer", text: "Ya. Agen atau broker yang menawarkan jaminan proyek idealnya memiliki izin resmi dari OJK sebagai agen asuransi atau broker asuransi. Banyak pihak yang mengaku sebagai 'agen jaminan proyek' padahal tidak memiliki izin tersebut." } },
    { "@type": "Question", name: "Bagaimana jika saya sudah terlanjur menerima jaminan dari penerbit yang meragukan?", acceptedAnswer: { "@type": "Answer", text: "Segera lakukan verifikasi langsung ke perusahaan asuransi/bank yang namanya tercantum, periksa apakah nomor referensi jaminan tercatat dalam sistem resmi mereka, dan jangan menyerahkan dokumen tersebut ke panitia sebelum keabsahannya terkonfirmasi." } },
  ],
};

export default function ArtikelTipsMemilihPenerbit() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Tips Memilih Penerbit Surety Bond"
      heroBadge="Tips · Verifikasi Penerbit"
      heroTitle={<>Tips Memilih Penerbit Surety Bond di Bekasi<br /><em className="not-italic text-gold">agar Tidak Ditolak Pemilik Proyek</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Salah pilih penerbit surety bond bukan cuma soal dokumen ditolak panitia — dalam kasus paling buruk, ini bisa berujung sengketa hukum. Kasus PT Cikarang Listrindo yang melaporkan dugaan pemalsuan bank garansi senilai Rp32 miliar ke Bareskrim Polri pada 2017 adalah pengingat bahwa masalah keabsahan jaminan proyek nyata terjadi, bahkan di lingkaran perusahaan besar berbasis Cikarang, Bekasi.
      </p>

      <h2>Kenapa "Jaminan Bodong" Terus Bermunculan</h2>
      <p>
        Modusnya cukup konsisten: dokumen dibuat menyerupai bank atau perusahaan asuransi besar, nomor referensi dicantumkan tapi fiktif, tanda tangan pejabat terlihat meyakinkan, bahkan premi sudah dibayarkan melalui agen — namun saat dicek ke sistem internal penerbit resmi, jaminan tersebut ternyata tidak pernah ada. Banyak pihak mengaku sebagai "agen jaminan proyek resmi" padahal tidak memiliki izin OJK sebagai agen atau broker asuransi, dan menawarkan harga jauh di bawah tarif wajar untuk menarik kontraktor yang terburu-buru mengejar tenggat tender.
      </p>

      <h2>5 Ciri Penerbit Surety Bond yang Aman</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">✅</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Terdaftar Resmi di OJK</div>
          <p className="text-sm leading-relaxed text-[#475569]">Perusahaan asuransi/penjaminan yang menerbitkan surety bond wajib terdaftar dan diawasi OJK sebagai bagian dari lini usaha suretyship yang berizin.</p>
        </div>
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">🔍</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Melalui Proses Underwriting Nyata</div>
          <p className="text-sm leading-relaxed text-[#475569]">Jaminan yang sah tidak pernah diterbitkan instan — selalu didahului analisis kelayakan keuangan dan rekam jejak perusahaan, sesingkat apa pun prosesnya.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">💳</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Premi Sesuai Tarif Wajar Pasar</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penawaran dengan premi jauh di bawah standar pasar adalah tanda bahaya utama — bukan tanda "harga bersaing".</p>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-card p-5">
          <div className="text-2xl mb-2">🏢</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Alamat Kantor & Identitas Jelas</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penerbit dan brokernya memiliki kantor fisik yang dapat diverifikasi, bukan transaksi yang hanya berlangsung lewat media sosial.</p>
        </div>
      </div>
      <div className="not-prose bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5 mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-2xl">🔗</span>
          <div className="font-heading text-navy font-bold text-[0.98rem]">Nomor Referensi Dapat Diverifikasi</div>
        </div>
        <p className="text-sm leading-relaxed text-[#475569] m-0">Jaminan yang sah selalu tercatat dalam sistem internal penerbit resmi. Sebelum menyerahkan dokumen ke panitia, konfirmasi langsung ke bank/perusahaan asuransi penerbit untuk memastikan nomor referensi benar-benar terdaftar.</p>
      </div>

      <h2>Kasus PT Cikarang Listrindo: Pelajaran untuk Kontraktor Bekasi</h2>
      <blockquote className="kasus">
        <p>
          Pada Agustus 2017, PT Cikarang Listrindo melaporkan PT Hamson Indonesia ke Bareskrim Mabes Polri atas dugaan pemalsuan bank garansi terbitan Bank Mandiri terkait tuntutan jaminan senilai Rp32 miliar. Laporan tersebut menyangkut dugaan tindak pidana pemalsuan dan penipuan atas keabsahan dokumen jaminan yang dipersoalkan.
        </p>
        <p>
          Terlepas dari detail teknis kasus ini, pelajaran utamanya jelas: verifikasi keabsahan dokumen jaminan bukan langkah berlebihan, melainkan standar minimum yang harus dilakukan setiap pihak yang terlibat dalam transaksi bernilai besar — baik oleh kontraktor sebagai principal, maupun owner sebagai obligee yang menerima jaminan tersebut.
        </p>
      </blockquote>

      <h2>Langkah Verifikasi Sebelum Menyerahkan Dokumen ke Panitia</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Langkah</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Tujuan</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Cek daftar resmi OJK</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Memastikan penerbit berizin memasarkan produk suretyship</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Konfirmasi langsung ke penerbit</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Memastikan nomor referensi dan dokumen benar-benar tercatat</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Gunakan broker resmi terdaftar</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Mengurangi risiko berhubungan dengan agen tak berizin</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Waspadai premi di bawah standar</td><td style={{padding: "10px 12px"}}>Menghindari penawaran yang tidak masuk akal secara finansial</td></tr>
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
        <div className="font-heading text-white text-base font-semibold mb-2">Pastikan Jaminan Proyek Anda Sah Sejak Awal</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan kebutuhan surety bond Anda dengan penerbit yang terdaftar dan diawasi OJK — gratis.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi memilih penerbit surety bond yang terpercaya dan terdaftar OJK untuk proyek saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
