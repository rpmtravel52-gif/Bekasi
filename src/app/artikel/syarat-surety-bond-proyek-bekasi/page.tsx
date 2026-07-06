import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("syarat-surety-bond-proyek-bekasi")!;
const related = getArtikelByCluster("surety", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "syarat surety bond bekasi, dokumen jaminan penawaran, persyaratan bid bond kontraktor, syarat jaminan pelaksanaan bekasi, dokumen tender konstruksi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Dokumen apa yang paling sering menyebabkan pengajuan surety bond tertunda?", acceptedAnswer: { "@type": "Answer", text: "Laporan keuangan yang belum diaudit atau tidak lengkap dua tahun terakhir, serta ketidaksesuaian antara nilai HPS/kontrak dengan nilai jaminan yang diajukan, adalah dua penyebab paling umum tertundanya proses underwriting." } },
    { "@type": "Question", name: "Apakah kontraktor baru tanpa riwayat proyek bisa mengajukan surety bond?", acceptedAnswer: { "@type": "Answer", text: "Bisa, namun proses underwriting akan lebih ketat karena penjamin tidak memiliki rekam jejak untuk menilai risiko. Legalitas perusahaan yang lengkap dan kondisi keuangan yang sehat menjadi faktor penentu utama pada kasus ini." } },
    { "@type": "Question", name: "Apakah persyaratan dokumen sama untuk semua jenis jaminan surety bond?", acceptedAnswer: { "@type": "Answer", text: "Tidak persis sama. Jaminan Penawaran membutuhkan dokumen lelang dan nilai HPS, sementara Jaminan Pelaksanaan membutuhkan Surat Penunjukan Pemenang (SPPBJ) dan kontrak kerja yang sudah ditandatangani." } },
    { "@type": "Question", name: "Apakah SIUJK wajib untuk semua pengajuan surety bond?", acceptedAnswer: { "@type": "Answer", text: "Untuk kontraktor jasa konstruksi, SIUJK (Surat Izin Usaha Jasa Konstruksi) umumnya menjadi bagian dari legalitas wajib yang diminta penjamin sebagai bukti bahwa perusahaan berhak beroperasi di sektor konstruksi." } },
  ],
};

export default function ArtikelSyaratSuretyBond() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Persyaratan Surety Bond"
      heroBadge="Panduan · Persyaratan Dokumen"
      heroTitle={<>Surety Bond untuk Proyek di Bekasi:<br /><em className="not-italic text-gold">Persyaratan yang Sering Diminta Owner</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Salah satu keluhan paling umum dari kontraktor yang baru pertama kali mengurus surety bond adalah dokumen yang diminta terasa lebih banyak dari perkiraan. Padahal, sebagian besar keterlambatan penerbitan jaminan bukan karena prosesnya rumit, melainkan karena dokumen baru mulai disiapkan setelah tenggat tender sudah dekat. Berikut rincian lengkap dokumen yang umum diminta untuk setiap jenis jaminan proyek di Bekasi.
      </p>

      <h2>Jaminan Penawaran (Bid Bond)</h2>
      <div className="not-prose bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5 mb-8">
        <div className="flex items-center gap-2 mb-3"><span className="text-2xl">📋</span><span className="font-heading text-navy font-bold">Untuk Ikut Tender</span></div>
        <ul className="text-sm leading-relaxed text-[#475569] pl-5 list-disc space-y-1 m-0">
          <li>Fotokopi identitas perusahaan &amp; legalitas (NIB, SIUJK, Akta Perusahaan)</li>
          <li>Dokumen lelang/tender (RKS, undangan lelang, atau pengumuman resmi)</li>
          <li>Nilai HPS (Harga Perkiraan Sendiri) proyek dari panitia lelang</li>
          <li>NPWP dan laporan keuangan perusahaan</li>
          <li>Riwayat pengalaman proyek sejenis (jika disyaratkan)</li>
        </ul>
      </div>

      <h2>Jaminan Pelaksanaan (Performance Bond)</h2>
      <div className="not-prose bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5 mb-8">
        <div className="flex items-center gap-2 mb-3"><span className="text-2xl">🤝</span><span className="font-heading text-navy font-bold">Setelah Ditetapkan Sebagai Pemenang</span></div>
        <ul className="text-sm leading-relaxed text-[#475569] pl-5 list-disc space-y-1 m-0">
          <li>Fotokopi identitas perusahaan &amp; legalitas (NIB, SIUJK, Akta Perusahaan)</li>
          <li>Surat Penunjukan Pemenang (SPPBJ) dari pemberi kerja</li>
          <li>Kontrak kerja/Surat Perjanjian Kerja (SPK) proyek</li>
          <li>NPWP dan laporan keuangan perusahaan 2 tahun terakhir</li>
          <li>Riwayat pengalaman proyek sejenis (portofolio kontraktor)</li>
        </ul>
      </div>

      <h2>Jaminan Uang Muka &amp; Jaminan Pemeliharaan</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">💰</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">Jaminan Uang Muka</div>
          <p className="text-sm leading-relaxed text-[#475569]">Dibutuhkan segera setelah kontrak ditandatangani dan owner bersiap mencairkan DP — dokumen inti berupa kontrak kerja dan rincian skema pembayaran uang muka dari owner.</p>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-card p-5">
          <div className="text-2xl mb-2">🔧</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">Jaminan Pemeliharaan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Diajukan menjelang serah terima pertama (PHO) — dokumen inti berupa berita acara serah terima dan kontrak asli yang mencantumkan masa pemeliharaan.</p>
        </div>
      </div>

      <h2>Kenapa Laporan Keuangan Sering Jadi Penghambat</h2>
      <p>
        Dari seluruh dokumen di atas, laporan keuangan adalah yang paling sering membuat proses underwriting tertunda — bukan karena rumit disiapkan, melainkan karena banyak kontraktor skala menengah di Bekasi belum terbiasa mengaudit laporan keuangannya secara berkala. Padahal, penjamin membutuhkan gambaran kondisi keuangan riil perusahaan untuk menilai kelayakan menerbitkan jaminan — terutama untuk Jaminan Pelaksanaan yang nilainya bisa mencapai 5% dari nilai kontrak proyek, jumlah yang tidak kecil bagi penjamin jika klaim benar-benar terjadi.
      </p>

      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">💡</div>
        <p className="text-white/85 text-sm leading-relaxed m-0">
          Nilai jaminan yang disyaratkan tidak selalu tetap. Untuk Jaminan Pelaksanaan, jika nilai penawaran kontraktor jauh di bawah HPS, panitia pengadaan berhak meminta nilai jaminan lebih tinggi dari standar 5% nilai kontrak — sesuatu yang sering luput dari perhitungan kontraktor di tahap awal.
        </p>
      </div>

      <h2>Tips Mempercepat Proses Persiapan Dokumen</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <div className="bg-cream border border-black/8 rounded-card p-5 text-center">
          <div className="text-2xl mb-2">🗂️</div>
          <div className="font-heading text-navy font-bold text-sm mb-1.5">Siapkan Folder Legalitas Permanen</div>
          <p className="text-xs leading-relaxed text-[#64748B]">NIB, SIUJK, Akta, dan NPWP disimpan dalam satu folder digital yang selalu diperbarui, bukan dicari ulang setiap ada tender.</p>
        </div>
        <div className="bg-cream border border-black/8 rounded-card p-5 text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-heading text-navy font-bold text-sm mb-1.5">Audit Laporan Keuangan Berkala</div>
          <p className="text-xs leading-relaxed text-[#64748B]">Laporan keuangan 2 tahun terakhir yang sudah diaudit mempercepat proses underwriting secara signifikan.</p>
        </div>
        <div className="bg-cream border border-black/8 rounded-card p-5 text-center">
          <div className="text-2xl mb-2">📁</div>
          <div className="font-heading text-navy font-bold text-sm mb-1.5">Dokumentasikan Portofolio Proyek</div>
          <p className="text-xs leading-relaxed text-[#64748B]">Riwayat proyek sejenis yang sudah selesai memperkuat penilaian rekam jejak, terutama untuk kontraktor yang masih relatif baru.</p>
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
        <div className="font-heading text-white text-base font-semibold mb-2">Ingin Tahu Dokumen Apa Saja yang Perlu Anda Siapkan?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan kebutuhan surety bond untuk proyek Anda — gratis, kami bantu cek kelengkapan dokumen dari awal.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Pak Rio, saya ingin konsultasi persyaratan dokumen surety bond untuk proyek saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-surety-bond/jaminan-uang-muka" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">💰 Jaminan Uang Muka →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
