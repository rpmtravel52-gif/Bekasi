import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("panduan-asuransi-pabrik-jababeka")!;
const related = getArtikelByCluster("properti", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "asuransi pabrik jababeka, asuransi kawasan industri cikarang, property all risk jababeka, kebakaran gudang jababeka",
  alternates: { canonical: `https://asuransibekasi.biz.id/artikel/${meta.slug}` },
  authors: [{ name: "Nur Hidayat" }],
  openGraph: {
    title: meta.title,
    description: meta.excerpt,
    url: `https://asuransibekasi.biz.id/artikel/${meta.slug}`,
    type: "article",
    publishedTime: meta.publishedDate,
    modifiedTime: meta.updatedDate,
    authors: ["Nur Hidayat"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.excerpt,
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: meta.title,
  description: meta.excerpt,
  image: "https://asuransibekasi.biz.id/og-image.png",
  datePublished: meta.publishedDate,
  dateModified: meta.updatedDate,
  author: { "@type": "Person", name: "Nur Hidayat" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Bekasi",
    logo: { "@type": "ImageObject", url: "https://asuransibekasi.biz.id/favicon-512x512.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://asuransibekasi.biz.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah pabrik baru di Jababeka wajib diasuransikan sebelum beroperasi?", acceptedAnswer: { "@type": "Answer", text: "Tidak ada kewajiban hukum universal, namun sebagian besar bank pembiayaan dan investor mensyaratkan asuransi properti sebagai bagian dari perjanjian kredit atau kontrak sewa lahan kawasan industri." } },
    { "@type": "Question", name: "Berapa lama proses asuransi pabrik baru bisa aktif?", acceptedAnswer: { "@type": "Answer", text: "Untuk pertanggungan besar, biasanya diperlukan survei risiko fisik lebih dulu. Total proses dari konsultasi hingga polis terbit umumnya 5–10 hari kerja, tergantung kompleksitas bangunan dan kelengkapan dokumen." } },
    { "@type": "Question", name: "Apakah stok bahan baku dan barang jadi ikut dijamin?", acceptedAnswer: { "@type": "Answer", text: "Bisa, dengan menambahkan nilai pertanggungan untuk stok/inventori secara terpisah dari nilai bangunan dan mesin, baik dengan skema nilai tetap maupun declaration basis yang menyesuaikan fluktuasi stok." } },
  ],
};

export default function ArtikelPabrikJababeka() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Panduan Asuransi Pabrik Jababeka"
      heroBadge="Panduan · Kawasan Industri"
      heroTitle={<>Panduan Asuransi Pabrik<br />di Kawasan Jababeka</>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <p>
        Jababeka adalah salah satu kawasan industri tertua dan terluas di Cikarang, Kabupaten Bekasi, menaungi ratusan perusahaan manufaktur dari sektor otomotif, elektronik, hingga tekstil. Skala inilah yang membuat keputusan asuransi properti di sini tidak bisa disamakan dengan mengasuransikan ruko atau rumah biasa — nilai aset per lokasi jauh lebih besar, dan satu insiden bisa berdampak ke ratusan karyawan sekaligus.
      </p>

      <h2>Ketika Skala Besar Bertemu Risiko Nyata</h2>
      <blockquote className="kasus">
        <p>
          Pada 25 November 2025, gudang produksi milik PT TAK Tekstil Indonesia di kawasan industri Jababeka Cikarang dilanda kebakaran. Menurut laporan Lingkar.news, Dinas Pemadam Kebakaran Kabupaten Bekasi mengerahkan 11 unit armada dari berbagai pos — termasuk Cibitung, Cikarang Selatan, hingga bantuan internal dari Cikarangindo dan Jababeka sendiri — dan butuh belasan jam untuk benar-benar menguasai api.
        </p>
        <p>
          Petugas berhasil melokalisir kebakaran hanya pada satu dari tiga gudang produksi di lokasi tersebut, mencegah api menjalar ke dua gedung lain yang berdekatan. Namun sekitar 440 karyawan yang biasa bekerja dalam tiga shift produksi terpaksa dipulangkan pada hari kejadian karena satu lini produksi lumpuh total.
        </p>
      </blockquote>
      <p>
        Kasus ini menggambarkan dua hal penting: pertama, bahan produksi seperti tekstil yang mudah terbakar membuat api sulit dikendalikan meski respons pemadam sudah cepat. Kedua, kerugian sebenarnya bukan cuma bangunan yang hangus — melainkan juga hilangnya hari produksi dan potensi keterlambatan pengiriman ke klien.
      </p>

      <h2>4 Hal yang Perlu Disiapkan Investor Baru</h2>
      <ol>
        <li>
          <strong>Tentukan nilai pertanggungan berdasarkan replacement cost.</strong> Nilai bangunan pabrik harus dihitung berdasarkan biaya membangun ulang sesuai spesifikasi saat ini, bukan harga beli lahan atau nilai buku akuntansi yang sudah terdepresiasi.
        </li>
        <li>
          <strong>Pisahkan nilai pertanggungan bangunan, mesin, dan stok.</strong> Ketiganya punya profil risiko berbeda dan idealnya dihitung secara terpisah agar tidak under-insured pada salah satu komponen.
        </li>
        <li>
          <strong>Pertimbangkan basis all-risk (PAR), bukan sekadar kebakaran standar.</strong> Untuk pabrik dengan proses produksi kompleks, Property All Risk memberi cakupan lebih luas dibanding polis FLEXAS biasa — termasuk risiko seperti kerusakan akibat benturan alat berat di area produksi.
        </li>
        <li>
          <strong>Cek sistem proteksi kebakaran yang tersedia di lokasi.</strong> Ketersediaan hydrant, sprinkler, dan APAR memengaruhi rate premi — kawasan industri seperti Jababeka umumnya sudah punya infrastruktur pemadam yang lebih baik dibanding lokasi mandiri di luar kawasan, dan ini bisa dinegosiasikan saat penawaran.
        </li>
      </ol>

      <h2>Business Interruption: Bagian yang Sering Terlewat</h2>
      <p>
        Dari kasus PT TAK Tekstil Indonesia, terlihat jelas bahwa dampak finansial terbesar datang dari <em>hentinya produksi</em>, bukan cuma nilai bangunan yang terbakar. Perluasan Business Interruption menjamin kerugian pendapatan selama masa perbaikan atau pembangunan ulang — sesuatu yang sangat relevan bagi pabrik dengan kontrak pengiriman berkelanjutan ke klien, di mana keterlambatan berujung pada penalti kontraktual.
      </p>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Investasi Pabrik Baru di Jababeka?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan strategi asuransi properti sejak tahap perencanaan — gratis, sesuai skala pabrik Anda.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi asuransi pabrik saya di kawasan Jababeka.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-properti/pabrik" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏭 Asuransi Pabrik →</Link>
          <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
