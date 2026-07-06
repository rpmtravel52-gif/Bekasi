import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("kesalahan-pengajuan-surety-bond-kontraktor-bekasi")!;
const related = getArtikelByCluster("surety", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "kesalahan surety bond, jaminan bodong, bank garansi palsu, PT Cikarang Listrindo, kesalahan bid bond kontraktor, jaminan proyek ditolak",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apa kesalahan paling umum yang menyebabkan jaminan proyek ditolak panitia tender?", acceptedAnswer: { "@type": "Answer", text: "Masa berlaku jaminan yang tidak mencukupi ketentuan tender adalah penyebab diskualifikasi paling umum — misalnya tender mensyaratkan masa berlaku 60 hari, tetapi jaminan yang diterbitkan hanya berlaku 28 hari." } },
    { "@type": "Question", name: "Apa risiko menggunakan jaminan proyek dari penerbit yang tidak terdaftar OJK?", acceptedAnswer: { "@type": "Answer", text: "Jaminan berpotensi tidak sah dan ditolak saat diverifikasi panitia, kontraktor bisa kehilangan modal dan waktu, serta berisiko masuk daftar hitam (blacklist) instansi karena dianggap gagal memenuhi persyaratan administrasi." } },
    { "@type": "Question", name: "Bagaimana kasus PT Cikarang Listrindo terkait dugaan pemalsuan jaminan proyek?", acceptedAnswer: { "@type": "Answer", text: "Pada 2017, PT Cikarang Listrindo melaporkan PT Hamson Indonesia ke Bareskrim Mabes Polri atas dugaan pemalsuan bank garansi terbitan Bank Mandiri terkait tuntutan jaminan senilai Rp32 miliar, dengan dugaan tindak pidana pemalsuan dan penipuan." } },
    { "@type": "Question", name: "Apa yang harus dilakukan jika nilai penawaran berubah setelah jaminan penawaran diterbitkan?", acceptedAnswer: { "@type": "Answer", text: "Segera koordinasikan dengan penjamin untuk menyesuaikan nilai jaminan. Ketidaksesuaian antara nilai penawaran final dengan nilai jaminan yang tercantum adalah salah satu kesalahan administrasi yang sering menyebabkan penawaran dianggap tidak sah." } },
  ],
};

export default function ArtikelKesalahanPengajuanSuretyBond() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Kesalahan Pengajuan Surety Bond"
      heroBadge="Waspada · Kesalahan Umum"
      heroTitle={<>Kesalahan Pengajuan Surety Bond<br /><em className="not-italic text-gold">yang Sering Dilakukan Kontraktor Bekasi</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Jaminan penawaran dan jaminan pelaksanaan bukan sekadar formalitas administratif — kesalahan kecil dalam pengurusannya bisa menggugurkan seluruh penawaran, tak peduli seunggul apa pun sisi teknis dan harga yang diajukan. Berikut kesalahan yang paling sering terjadi, termasuk kasus nyata yang melibatkan perusahaan besar berbasis di Cikarang, Bekasi.
      </p>

      <h2>Kasus Nyata: PT Cikarang Listrindo vs PT Hamson Indonesia</h2>
      <blockquote className="kasus">
        <p>
          Pada Agustus 2017, PT Cikarang Listrindo (PTCL) — perusahaan penyedia listrik swasta yang berbasis di kawasan industri Cikarang, Bekasi — melaporkan PT Hamson Indonesia (PTHI) ke Bareskrim Mabes Polri terkait dugaan pemalsuan bank garansi terbitan Bank Mandiri. Laporan tersebut menyangkut tuntutan jaminan proyek senilai Rp32 miliar, dengan dugaan tindak pidana pemalsuan dan penipuan atas dokumen jaminan yang dipersoalkan.
        </p>
        <p>
          Kasus ini menjadi salah satu contoh nyata bahwa masalah keabsahan jaminan proyek tidak hanya menimpa kontraktor skala kecil — bahkan transaksi antar-perusahaan besar di Bekasi pun bisa berujung sengketa hukum serius ketika keabsahan sebuah dokumen jaminan dipertanyakan.
        </p>
      </blockquote>

      <h2>5 Kesalahan Paling Sering Terjadi</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">⏰</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Masa Berlaku Tidak Mencukupi</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penyebab diskualifikasi paling umum — misalnya tender mensyaratkan masa berlaku 60 hari, tapi jaminan yang terbit hanya berlaku 28 hari karena kontraktor tidak mengecek ketentuan RKS dengan teliti.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">🔢</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Ketidaksesuaian Data</div>
          <p className="text-sm leading-relaxed text-[#475569]">Nama proyek, nama owner, atau nilai jaminan yang tidak sesuai dengan dokumen resmi tender — kesalahan administratif kecil yang berakibat fatal saat verifikasi.</p>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-card p-5">
          <div className="text-2xl mb-2">🏢</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Salah Pilih Lembaga Penjamin</div>
          <p className="text-sm leading-relaxed text-[#475569]">Sebagian instansi/BUMN hanya menerima jaminan dari bank atau perusahaan asuransi tertentu yang sudah terverifikasi — jaminan dari penerbit di luar daftar itu otomatis dianggap tidak sah.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">📄</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Format Tidak Sesuai Ketentuan Pokja</div>
          <p className="text-sm leading-relaxed text-[#475569]">Setiap perusahaan asuransi memiliki format bakunya sendiri — jika tidak sesuai contoh yang ditetapkan Pokja ULP, dokumen berisiko dipertanyakan meski substansinya sudah benar.</p>
        </div>
      </div>
      <div className="not-prose bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5 mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-2xl">🚨</span>
          <div className="font-heading text-navy font-bold text-[0.98rem]">Tergoda Premi Murah dari Penerbit Tak Jelas</div>
        </div>
        <p className="text-sm leading-relaxed text-[#475569] m-0">Penawaran jaminan dengan premi jauh di bawah tarif pasar dan proses instan tanpa analisa keuangan adalah ciri khas jaminan bodong. Kontraktor yang tergiur harga murah berisiko membawa dokumen yang tidak bisa diverifikasi ke panitia tender — dan kehilangan jauh lebih besar dari sekadar premi yang sudah dibayarkan.</p>
      </div>

      <h2>Kenapa Kesalahan Kecil Berdampak Besar</h2>
      <p>
        Konsekuensi dari kesalahan di atas bukan cuma kehilangan satu tender. Kerugian mencakup biaya penyusunan proposal teknis dan RAB yang sudah dikeluarkan, penurunan reputasi di mata panitia sebagai kontraktor yang tidak cermat administrasi, hingga potensi masuk daftar hitam (blacklist) instansi tertentu jika kesalahannya berupa pengunduran diri setelah ditunjuk sebagai pemenang. Untuk kasus jaminan yang ternyata tidak sah, pemenang tender bahkan berisiko kehilangan proyek yang sudah dimenangkan setelah diverifikasi ulang oleh panitia.
      </p>

      <h2>Cara Sederhana Menghindari Kesalahan Ini</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Kesalahan</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Cara Menghindari</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Masa berlaku kurang</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Cek ketentuan masa berlaku di RKS sebelum mengajukan, minta buffer beberapa hari</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Data tidak sesuai</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Cocokkan draft jaminan dengan dokumen tender sebelum penerbitan final</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Penjamin tidak diakui</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Konfirmasi ke panitia jenis penjamin yang diterima sebelum memilih penerbit</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Format tidak sesuai</td><td style={{padding: "10px 12px"}}>Minta contoh format dari Pokja/owner dan sesuaikan sebelum diterbitkan</td></tr>
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
        <div className="font-heading text-white text-base font-semibold mb-2">Jangan Sampai Dokumen Jaminan Anda Bermasalah</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan draft jaminan Anda sebelum diserahkan ke panitia — gratis, kami bantu cek kesesuaian sejak awal.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Pak Rio, saya ingin konsultasi agar pengajuan surety bond saya tidak salah dan diterima panitia tender.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
