import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("panduan-asuransi-ruko-bekasi")!;
const related = getArtikelByCluster("properti", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "asuransi ruko bekasi, asuransi toko bekasi, asuransi bangunan usaha bekasi, kebakaran ruko bekasi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah pemilik ruko yang menyewakan ke penyewa tetap perlu asuransi?", acceptedAnswer: { "@type": "Answer", text: "Ya. Pemilik ruko tetap bertanggung jawab atas struktur bangunan meski disewakan. Penyewa umumnya mengasuransikan isi dan barang dagangan miliknya secara terpisah." } },
    { "@type": "Question", name: "Apakah barang dagangan di ruko otomatis ikut dijamin polis kebakaran?", acceptedAnswer: { "@type": "Answer", text: "Tidak otomatis. Nilai bangunan dan nilai isi/barang dagangan harus dideklarasikan secara terpisah agar keduanya mendapat jaminan yang sesuai." } },
    { "@type": "Question", name: "Bagaimana jika kebakaran berasal dari luar ruko saya, misalnya dari toko sebelah?", acceptedAnswer: { "@type": "Answer", text: "Selama polis Anda aktif dan mencakup risiko kebakaran, kerugian akibat api yang merambat dari luar tetap dijamin — sumber api tidak harus berasal dari dalam bangunan Anda sendiri." } },
  ],
};

export default function ArtikelAsuransiRuko() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Panduan Asuransi Ruko"
      heroBadge="Panduan · UMKM & Ritel"
      heroTitle={<>Panduan Lengkap Asuransi Ruko<br />di Jalur Niaga Bekasi</>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Banyak pemilik ruko di Bekasi menganggap risiko kebakaran adalah &ldquo;masalah pabrik&rdquo;, bukan masalah mereka — sampai api dari luar area usaha benar-benar sampai ke depan pintu toko.
      </p>

      <h2>Ketika Api Tidak Peduli Batas Kepemilikan</h2>
      <blockquote className="kasus">
        <p>
          Pada malam 1 April 2026, kebakaran melanda pabrik gas PT Indogas Andalan Kita di kawasan Cimuning, Mustika Jaya, Kota Bekasi. Berdasarkan pemberitaan Detik.com, api yang diduga berasal dari kebocoran gas saat pengisian tabung membesar dengan cepat dan merambat ke permukiman warga di sekitar lokasi pabrik. Sebanyak 19 rumah dan 2 kios hangus terbakar, dengan tujuh warga sekitar harus menjalani perawatan medis.
        </p>
      </blockquote>
      <p>
        Dua kios yang ikut terbakar dalam insiden ini bukan bagian dari pabrik — mereka hanya kebetulan berada dalam radius rambatan api. Ini adalah gambaran nyata dari risiko yang dihadapi pemilik ruko dan toko: sumber kebakaran tidak harus berasal dari bangunan sendiri untuk membuat usaha Anda merugi total.
      </p>

      <h2>Kenapa Ruko Sering Kurang Diasuransikan</h2>
      <p>
        Dibanding pabrik atau gudang besar, ruko sering dianggap &ldquo;terlalu kecil untuk repot-repot diasuransikan&rdquo;. Padahal nilai bangunan ruko 2-3 lantai di jalur niaga Bekasi bisa mencapai ratusan juta hingga miliaran rupiah — belum termasuk stok barang dagangan yang tersimpan di dalamnya. Kombinasi nilai aset yang tidak kecil dengan kepadatan bangunan di sepanjang jalur komersial justru membuat ruko punya eksposur risiko yang nyata, baik dari dalam maupun dari luar.
      </p>

      <h2>Ruko vs Rumah: Apa yang Berbeda?</h2>
      <p>
        Secara prinsip, dasar jaminan asuransi kebakaran untuk ruko dan rumah tinggal sama-sama mengacu pada FLEXAS. Yang membedakan adalah komposisi nilai pertanggungannya:
      </p>
      <ul>
        <li><strong>Nilai isi/stok jauh lebih signifikan.</strong> Barang dagangan yang menumpuk di gudang belakang toko bisa punya nilai lebih besar dari bangunannya sendiri, terutama untuk usaha grosir atau elektronik.</li>
        <li><strong>Ada kepentingan pemilik dan penyewa yang berbeda.</strong> Jika ruko disewakan, pemilik bangunan dan penyewa usaha punya kepentingan asuransi (insurable interest) yang berbeda dan idealnya diasuransikan secara terpisah.</li>
        <li><strong>Eksposur ke tetangga lebih tinggi.</strong> Ruko biasanya berhimpitan langsung dengan bangunan sebelah, membuat risiko rambatan api dua arah — dari dan ke ruko Anda.</li>
      </ul>

      <h2>Checklist Sebelum Mengasuransikan Ruko</h2>
      <ol>
        <li>Pisahkan nilai pertanggungan bangunan dari nilai stok/barang dagangan.</li>
        <li>Jika Anda penyewa, pastikan Anda tahu apakah pemilik bangunan sudah punya polis sendiri untuk strukturnya — dan asuransikan isi usaha Anda secara terpisah.</li>
        <li>Cek kondisi instalasi listrik, terutama untuk ruko lama yang mungkin belum direnovasi kabelnya.</li>
        <li>Pertimbangkan perluasan risiko kejahatan (pencurian) selain kebakaran, terutama untuk toko yang tutup di malam hari.</li>
        <li>Update nilai pertanggungan setiap kali stok dagangan bertambah signifikan, misalnya menjelang musim ramai seperti Lebaran.</li>
      </ol>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Punya Ruko atau Toko di Bekasi?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan perlindungan bangunan dan barang dagangan Anda — gratis, sesuai jenis usaha Anda.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi asuransi ruko/toko saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-properti/kebakaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔥 Asuransi Kebakaran →</Link>
          <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Public Liability →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
