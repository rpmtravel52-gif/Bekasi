import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("kenapa-perumahan-bekasi-timur-rawan-banjir-musiman")!;
const related = getArtikelByCluster("properti", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "banjir bekasi, kali bekasi meluap, asuransi rumah banjir bekasi, perumahan rawan banjir bekasi, margahayu banjir",
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
    { "@type": "Question", name: "Apakah polis kebakaran standar otomatis menjamin kerugian akibat banjir?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Polis kebakaran standar (FLEXAS) tidak mencakup risiko banjir kecuali ditambahkan sebagai perluasan tersendiri dengan premi tambahan. Tanpa perluasan ini, kerugian akibat air masuk ke rumah saat Kali Bekasi meluap tidak akan dibayarkan." } },
    { "@type": "Question", name: "Bagaimana cara mengetahui apakah lokasi rumah saya termasuk rawan banjir?", acceptedAnswer: { "@type": "Answer", text: "Cek riwayat genangan di lingkungan Anda melalui warga sekitar, RT/RW, atau pantauan BPBD setempat. Rumah yang berada di sepanjang Daerah Aliran Sungai (DAS) Kali Bekasi, Kali Cikeas, atau Kali Cileungsi umumnya memiliki risiko lebih tinggi dibanding area yang lebih tinggi elevasinya." } },
    { "@type": "Question", name: "Apakah perluasan banjir mahal?", acceptedAnswer: { "@type": "Answer", text: "Relatif terjangkau dibanding potensi kerugian. Biaya tambahan perluasan banjir biasanya jauh lebih kecil dari biaya perbaikan rumah, penggantian perabotan, dan elektronik yang rusak terendam air." } },
  ],
};

export default function ArtikelBanjirBekasi() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Kenapa Bekasi Rawan Banjir"
      heroBadge="Studi Kasus · Properti"
      heroTitle={<>Kenapa Perumahan di Bekasi<br />Rawan Banjir Musiman</>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <p>
        Bagi sebagian warga Bekasi, kalimat &ldquo;musim hujan sudah dekat, siap-siap banjir lagi&rdquo; bukan lagi keluhan musiman biasa — itu perhitungan tahunan. Yang sering terlewat: banjir yang &ldquo;sudah biasa&rdquo; ini tetap bisa menghabiskan puluhan juta rupiah dalam semalam, dan sebagian besar pemilik rumah baru sadar polis asuransi mereka tidak menjamin itu setelah air sudah surut.
      </p>

      <h2>Kasus Nyata: Kampung Lebak dan Gang Mawar, Mei 2026</h2>
      <blockquote className="kasus">
        <p>
          Pada awal Mei 2026, debit air Kali Bekasi naik tajam akibat kiriman air dari hulu Cikeas dan Cileungsi. Dua permukiman yang berada persis di bantaran sungai — Kampung Lebak di Bekasi Utara dan Gang Mawar di Bekasi Timur — terendam. Menurut keterangan BPBD Kota Bekasi yang dikutip RRI, sirine peringatan sempat berbunyi pada sore hari menandakan status siaga tiga, namun air tetap masuk ke rumah warga malam itu dengan ketinggian yang naik dari sekitar 50 sentimeter hingga mendekati 2 meter dalam beberapa jam.
        </p>
        <p>
          Warga terpaksa mengungsi ke rumah kerabat, mushola, atau tempat yang lebih tinggi. Sebagian rumah baru bisa dibersihkan beberapa hari setelahnya.
        </p>
      </blockquote>

      <h2>Mengapa Bekasi Jadi Langganan Banjir</h2>
      <p>
        Secara geografis, Kota dan Kabupaten Bekasi berada di posisi hilir dari beberapa aliran sungai besar. Kali Bekasi terbentuk dari pertemuan Kali Cikeas dan Kali Cileungsi yang mengalir dari kawasan hulu di sekitar Bogor. Saat curah hujan tinggi di wilayah hulu, volume air yang dikirim ke hilir — termasuk ke permukiman di sepanjang bantaran Kali Bekasi — bisa naik drastis dalam hitungan jam, jauh sebelum hujan turun di Bekasi sendiri.
      </p>
      <p>
        Inilah yang membuat banjir Bekasi terasa &ldquo;muncul tiba-tiba&rdquo; meski di lokasi sendiri cuaca terlihat baik-baik saja — airnya datang dari tempat lain.
      </p>

      <h2>Area yang Berulang Kali Terdampak</h2>
      <p>Berdasarkan rangkaian pemberitaan sepanjang akhir 2025 hingga pertengahan 2026, beberapa titik yang berulang kali disebut terdampak luapan air meliputi:</p>
      <ul>
        <li><strong>Gang Mawar & Jalan Mawar Raya, Margahayu (Bekasi Timur)</strong> — langganan terendam setiap kali Tinggi Muka Air (TMA) Kali Bekasi naik signifikan.</li>
        <li><strong>Kampung Lebak (Bekasi Utara)</strong> — persis di bantaran Kali Bekasi.</li>
        <li><strong>Jalan Veteran, Margajaya (Bekasi Selatan)</strong> — pernah tercatat mencapai ketinggian sekitar 100 cm.</li>
        <li><strong>Tambun Sungai Angke, Tarumajaya</strong> — beberapa perumahan seperti Griya Rahmani, Leticia Mansion, dan Villa Mutiara Mas pernah terendam 30–70 cm akibat luapan sungai lokal, dengan warga setempat menyebut ketinggian air pada 2026 lebih tinggi dibanding siklus lima tahun sebelumnya.</li>
        <li><strong>Sukamekar, Sukawangi (Kabupaten Bekasi)</strong> — terdampak luapan Kali Cikarang Bekasi Laut (CBL) dengan ketinggian 60–120 cm.</li>
      </ul>
      <p>
        Pola yang muncul: rumah yang lebih rendah elevasinya dari jalan atau dari rumah tetangga cenderung lebih dulu dan lebih parah terendam — sebagaimana disampaikan salah satu warga Villa Mutiara Mas yang membandingkan kondisi rumah yang sudah diuruk tanahnya dengan yang belum.
      </p>

      <h2>Apa yang Sebenarnya Dijamin Polis Rumah Anda?</h2>
      <p>
        Ini bagian yang paling sering disalahpahami. Polis asuransi kebakaran rumah standar di Indonesia mengacu pada jaminan FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke) — lima risiko yang <em>tidak termasuk banjir</em>. Artinya, memiliki polis kebakaran saja tidak otomatis melindungi Anda dari kerugian akibat air masuk ke rumah.
      </p>
      <p>
        Untuk itu, perlu ditambahkan <strong>perluasan banjir</strong> — sebuah klausul tambahan dengan premi tambahan yang relatif kecil dibanding potensi kerugian. Perluasan ini yang menentukan apakah kerusakan lantai, perabotan, elektronik, dan dinding akibat rendaman air akan diganti atau tidak.
      </p>

      <h2>Yang Perlu Dilakukan Pemilik Rumah di Area Rawan</h2>
      <ol>
        <li>Cek riwayat genangan di RT/RW atau lingkungan Anda — jangan hanya mengandalkan asumsi &ldquo;rumah saya kan agak tinggi&rdquo;.</li>
        <li>Jika rumah berada di sepanjang DAS Kali Bekasi, Cikeas, atau Cileungsi, tambahkan perluasan banjir sejak awal — jangan menunggu sampai kena baru mengurus.</li>
        <li>Tentukan nilai pertanggungan isi rumah (perabotan, elektronik) secara realistis, bukan asal-asalan.</li>
        <li>Simpan dokumen penting (sertifikat, KTP, BPKB) di tempat yang tidak mudah terendam — bukan hanya soal asuransi, tapi kesiapsiagaan dasar.</li>
      </ol>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Rumah Anda di Area Rawan Banjir?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan kebutuhan perluasan banjir untuk rumah Anda — gratis, tanpa tekanan.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi asuransi rumah dengan perluasan banjir di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
