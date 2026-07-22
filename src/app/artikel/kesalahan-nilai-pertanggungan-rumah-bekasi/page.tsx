import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("kesalahan-nilai-pertanggungan-rumah-bekasi")!;
const related = getArtikelByCluster("properti", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "nilai pertanggungan rumah, asuransi rumah bekasi, gempa bekasi, underinsurance rumah, cara hitung asuransi rumah",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apa itu nilai pertanggungan dalam asuransi rumah?", acceptedAnswer: { "@type": "Answer", text: "Nilai pertanggungan adalah jumlah maksimum yang akan dibayarkan perusahaan asuransi jika rumah Anda mengalami kerugian total. Nilai ini seharusnya mencerminkan biaya membangun ulang rumah dengan spesifikasi yang sama, bukan harga jual pasar." } },
    { "@type": "Question", name: "Apakah gempa termasuk risiko yang dijamin polis rumah standar?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Sama seperti banjir, gempa bumi bukan bagian dari jaminan FLEXAS standar dan perlu ditambahkan sebagai perluasan tersendiri dengan premi tambahan." } },
    { "@type": "Question", name: "Berapa sering sebaiknya nilai pertanggungan rumah diperbarui?", acceptedAnswer: { "@type": "Answer", text: "Idealnya ditinjau ulang setiap 1-2 tahun, terutama jika ada renovasi, kenaikan harga material bangunan, atau perubahan signifikan pada isi rumah." } },
  ],
};

export default function ArtikelKesalahanNilaiPertanggungan() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="5 Kesalahan Nilai Pertanggungan"
      heroBadge="Listicle · Edukasi"
      heroTitle={<>5 Kesalahan Umum Saat Menentukan<br />Nilai Pertanggungan Rumah</>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Pada 20 Agustus 2025 malam, gempa berkekuatan magnitudo 4,7–4,9 mengguncang wilayah Bekasi-Karawang, dengan titik pusat sekitar 14 kilometer dari Kabupaten Bekasi. Berdasarkan data BPBD Jawa Barat yang dikutip CNN Indonesia dan Kompas.com, gempa ini merusak puluhan bangunan — mulai dari rumah warga di Desa Sukabungah, Bojongmangu yang dindingnya jebol, hingga sebuah musala yang roboh. Total sekitar 40 kepala keluarga dengan 104 jiwa terdampak di dua kabupaten.
      </p>
      <p>
        Kejadian seperti ini biasanya jadi momen banyak pemilik rumah baru sadar: nilai pertanggungan di polis mereka ternyata tidak representatif. Berikut lima kesalahan paling umum yang bisa dihindari sejak awal.
      </p>

      <h2>1. Menyamakan Nilai Pertanggungan dengan Harga Jual Rumah</h2>
      <p>
        Harga jual rumah mencakup nilai tanah, lokasi, dan faktor pasar lainnya. Tapi asuransi properti hanya menanggung <em>bangunan</em>, bukan tanahnya. Menetapkan nilai pertanggungan sama dengan harga jual rumah (yang sudah termasuk tanah) membuat premi jadi lebih mahal dari yang seharusnya, tanpa manfaat tambahan.
      </p>

      <h2>2. Menggunakan Harga Beli Lama sebagai Acuan</h2>
      <p>
        Rumah yang dibeli 10 tahun lalu dengan harga tertentu belum tentu masih bisa dibangun ulang dengan biaya yang sama hari ini. Harga material bangunan dan biaya tukang terus naik. Nilai pertanggungan yang tidak diperbarui berisiko membuat Anda <em>underinsured</em> — ganti rugi tidak cukup untuk membangun ulang rumah yang sama.
      </p>

      <h2>3. Mengabaikan Nilai Isi Rumah Secara Terpisah</h2>
      <p>
        Banyak pemilik rumah hanya menghitung nilai bangunan dan lupa menghitung nilai perabotan, elektronik, dan barang berharga di dalamnya. Saat gempa menyebabkan dinding jebol seperti kasus di Kabupaten Bekasi Agustus 2025, kerusakan pada isi rumah — lemari, kaca, barang pecah — seringkali menyumbang kerugian yang tidak kalah besar dari kerusakan struktur itu sendiri.
      </p>

      <h2>4. Tidak Menambahkan Perluasan Sesuai Risiko Lokasi</h2>
      <p>
        Rumah di Bekasi punya dua eksposur risiko yang sering diabaikan: banjir akibat luapan sungai dan gempa akibat aktivitas sesar aktif seperti sesar naik busur belakang Jawa Barat yang disebut BMKG sebagai penyebab gempa Agustus 2025. Polis kebakaran standar tidak menjamin keduanya kecuali ditambahkan sebagai perluasan. Menentukan nilai pertanggungan yang besar tanpa perluasan yang relevan sama saja dengan memiliki proteksi yang salah sasaran.
      </p>

      <h2>5. Tidak Meninjau Ulang Nilai Pertanggungan Setelah Renovasi</h2>
      <p>
        Menambah lantai, merenovasi dapur, atau membangun kamar baru meningkatkan nilai bangunan — tapi banyak pemilik rumah lupa memperbarui nilai pertanggungan setelahnya. Akibatnya, saat klaim diajukan, nilai yang tercatat di polis jauh lebih rendah dari kondisi rumah yang sebenarnya.
      </p>

      <h2>Cara yang Lebih Tepat</h2>
      <p>
        Hitung nilai pertanggungan berdasarkan <strong>replacement cost</strong> — estimasi biaya membangun ulang rumah dengan luas dan spesifikasi yang sama menggunakan harga material dan jasa tukang saat ini. Tinjau ulang nilai ini setidaknya setahun sekali, dan sesuaikan segera setelah ada renovasi signifikan.
      </p>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Yakin Nilai Pertanggungan Rumah Anda Sudah Tepat?</div>
        <div className="text-white/70 text-sm mb-4">Kami bantu hitung ulang secara gratis — supaya tidak kaget saat klaim benar-benar dibutuhkan.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin bantuan menghitung ulang nilai pertanggungan rumah saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-properti/rumah" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏡 Asuransi Rumah →</Link>
          <Link href="/asuransi-properti/kebakaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔥 Asuransi Kebakaran →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
