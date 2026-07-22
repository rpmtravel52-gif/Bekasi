import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("cara-klaim-asuransi-mobil-banjir-bekasi")!;
const related = getArtikelByCluster("kendaraan", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "cara klaim asuransi mobil banjir bekasi, klaim asuransi mobil kebanjiran, langkah klaim mobil banjir, asuransi mobil banjir kali bekasi, klaim water hammer mobil",
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
    { "@type": "Question", name: "Apakah semua polis All Risk otomatis menanggung kerusakan akibat banjir?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Banjir adalah risiko perluasan (flood extension) yang harus diminta dan dicantumkan secara eksplisit dalam polis. Tanpa perluasan ini, klaim kerusakan akibat banjir kemungkinan besar akan ditolak meski Anda memegang polis All Risk." } },
    { "@type": "Question", name: "Apa yang harus dilakukan pertama kali saat mobil terendam banjir?", acceptedAnswer: { "@type": "Answer", text: "Jangan coba menyalakan mesin sama sekali, meski mesin tampak kering. Menyalakan mesin yang komponennya masih basah akibat air berpotensi menyebabkan water hammer — kerusakan mesin yang jauh lebih parah dan mahal dibanding jika mesin dibiarkan mati sampai diperiksa mekanik." } },
    { "@type": "Question", name: "Berapa lama batas waktu melapor klaim asuransi mobil setelah kejadian banjir?", acceptedAnswer: { "@type": "Answer", text: "Setiap polis memiliki ketentuan waktu pelaporan klaim yang berbeda, namun umumnya berkisar 3-5 hari kerja sejak kejadian. Semakin cepat dilaporkan, semakin baik peluang proses klaim berjalan lancar karena bukti kondisi kendaraan masih segar dan mudah diverifikasi." } },
    { "@type": "Question", name: "Apakah TLO bisa dipakai untuk klaim kerusakan mobil akibat banjir di Bekasi?", acceptedAnswer: { "@type": "Answer", text: "Umumnya tidak. TLO hanya menanggung kehilangan total atau kerusakan di atas 75% dari nilai kendaraan, dan sebagian besar produk TLO bahkan tidak menyediakan opsi perluasan banjir sama sekali — berbeda dengan All Risk yang bisa ditambahkan perluasan tersebut." } },
  ],
};

export default function ArtikelKlaimMobilBanjirBekasi() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Cara Klaim Asuransi Mobil Kena Banjir"
      heroBadge="Panduan · Klaim Asuransi Mobil"
      heroTitle={<>Cara Klaim Asuransi Mobil Kena Banjir<br /><em className="not-italic text-sky-300">di Bekasi, Langkah demi Langkah</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <p>
        Musim hujan setiap tahun selalu membawa cerita yang sama di sejumlah titik Bekasi: luapan Kali Bekasi yang merendam Perumnas III dan sekitarnya, genangan di kawasan Pondok Gede, hingga banjir kiriman yang tiba-tiba naik di malam hari saat kendaraan sedang diparkir di halaman rumah. Bagi pemilik mobil yang mengalaminya, kepanikan sering membuat langkah-langkah penting justru terlewat — padahal urutan penanganan yang tepat sangat menentukan apakah klaim asuransi bisa cair dengan lancar atau justru ditolak.
      </p>

      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">⚠️</div>
        <div className="text-white/85 text-sm leading-relaxed m-0">
          <strong>Penting diketahui sejak awal:</strong> klaim kerusakan akibat banjir hanya bisa diajukan jika polis Anda adalah All Risk <em>dengan perluasan banjir</em> yang secara eksplisit tercantum dalam polis. Polis All Risk tanpa perluasan ini, maupun TLO, umumnya tidak menanggung kerusakan akibat banjir.
        </div>
      </div>

      <h2>Langkah 1: Jangan Nyalakan Mesin Sama Sekali</h2>
      <p>
        Ini adalah kesalahan paling umum dan paling mahal konsekuensinya. Ketika air sudah surut dan mobil tampak "kering" dari luar, banyak pemilik mobil mencoba menyalakan mesin untuk memastikan kondisinya. Padahal jika air sempat masuk ke ruang mesin, menyalakan mesin berisiko menyebabkan <strong>water hammer</strong> — kondisi di mana air yang terjebak di ruang bakar membuat piston bengkok atau bahkan menembus blok mesin. Kerusakan akibat kelalaian ini berpotensi memperbesar klaim atau bahkan membuat sebagian klaim ditolak karena dianggap kelalaian pemilik.
      </p>

      <h2>Langkah 2: Dokumentasikan Kondisi Kendaraan Sebelum Dipindahkan</h2>
      <p>
        Ambil foto dan video dari berbagai sudut: ketinggian air yang merendam kendaraan (bisa dilihat dari bekas garis air di bodi atau ban), kondisi interior, dan lokasi kejadian. Dokumentasi ini menjadi bukti pendukung utama saat mengajukan klaim, terutama untuk memverifikasi bahwa kerusakan benar terjadi akibat banjir dan bukan sebab lain.
      </p>

      <h2>Langkah 3: Hubungi Perusahaan Asuransi atau Agen Secepatnya</h2>
      <p>
        Laporkan kejadian dalam hitungan jam, bukan hari, meski Anda belum sempat memindahkan kendaraan. Sebagian besar polis mensyaratkan pelaporan dalam 3-5 hari kerja sejak kejadian — semakin cepat dilaporkan, semakin mudah proses verifikasi karena kondisi lapangan (seperti ketinggian air dan cuaca) masih bisa dikonfirmasi.
      </p>

      <h2>Langkah 4: Derek Kendaraan ke Bengkel Rekanan, Bukan Sembarang Bengkel</h2>
      <p>
        Gunakan layanan derek dari perusahaan asuransi jika tersedia, dan pastikan kendaraan dibawa ke bengkel rekanan resmi. Membawa ke bengkel di luar rekanan tanpa persetujuan sebelumnya berpotensi menimbulkan sengketa biaya perbaikan yang tidak sepenuhnya diganti oleh asuransi.
      </p>

      <h2>Langkah 5: Isi Formulir Klaim dan Lengkapi Dokumen Pendukung</h2>
      <div className="not-prose bg-cream border border-black/8 rounded-card p-5 my-6">
        <div className="font-heading text-navy font-bold text-sm mb-3">Dokumen yang umumnya diperlukan:</div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2"><span className="text-gold font-bold text-xs mt-1">✓</span><span className="text-sm text-[#475569]">Fotokopi STNK dan KTP pemilik kendaraan</span></li>
          <li className="flex items-start gap-2"><span className="text-gold font-bold text-xs mt-1">✓</span><span className="text-sm text-[#475569]">Formulir laporan klaim yang sudah diisi lengkap</span></li>
          <li className="flex items-start gap-2"><span className="text-gold font-bold text-xs mt-1">✓</span><span className="text-sm text-[#475569]">Foto dan video dokumentasi kondisi kendaraan pasca-banjir</span></li>
          <li className="flex items-start gap-2"><span className="text-gold font-bold text-xs mt-1">✓</span><span className="text-sm text-[#475569]">Salinan polis dan bukti pembayaran premi terakhir</span></li>
          <li className="flex items-start gap-2"><span className="text-gold font-bold text-xs mt-1">✓</span><span className="text-sm text-[#475569]">Keterangan lokasi dan kronologi kejadian secara tertulis</span></li>
        </ul>
      </div>

      <h2>Langkah 6: Tunggu Proses Survei dan Estimasi Kerusakan</h2>
      <p>
        Surveyor dari perusahaan asuransi akan memeriksa kendaraan di bengkel rekanan untuk menentukan estimasi biaya perbaikan atau menetapkan status kendaraan sebagai kerugian total (jika biaya perbaikan mendekati atau melebihi 75% dari nilai kendaraan). Proses ini yang menentukan apakah kendaraan akan diperbaiki penuh atau masuk skema total loss.
      </p>

      <blockquote className="kasus">
        <p>
          Sebuah kasus umum terjadi ketika mobil yang diparkir di halaman rumah kawasan langganan genangan di Bekasi Timur terendam banjir kiriman pada malam hari. Karena pemilik segera mendokumentasikan kondisi kendaraan, tidak mencoba menyalakan mesin, dan melapor keesokan paginya, proses klaim berjalan lancar dengan kerusakan mesin akibat water hammer ditanggung penuh oleh polis All Risk dengan perluasan banjir yang sudah dimilikinya sejak awal.
        </p>
      </blockquote>

      <h2>Alasan Umum Klaim Banjir Ditolak — Hindari Ini</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">🚫</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Tidak Ada Perluasan Banjir</div>
          <p className="text-sm leading-relaxed text-[#475569]">Alasan penolakan paling umum. Polis All Risk standar tanpa perluasan banjir tidak menanggung risiko ini sama sekali.</p>
        </div>
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">🔧</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Mesin Dinyalakan Setelah Terendam</div>
          <p className="text-sm leading-relaxed text-[#475569]">Dianggap kelalaian yang memperparah kerusakan, berpotensi mengurangi nilai klaim yang disetujui.</p>
        </div>
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">⏱️</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Terlambat Melapor</div>
          <p className="text-sm leading-relaxed text-[#475569]">Pelaporan yang melewati batas waktu polis mempersulit verifikasi dan bisa membuat klaim ditolak.</p>
        </div>
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">📄</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Dokumen Tidak Lengkap</div>
          <p className="text-sm leading-relaxed text-[#475569]">Ketiadaan dokumentasi foto/video kondisi awal membuat proses verifikasi surveyor lebih sulit dan berlarut-larut.</p>
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
        <div className="font-heading text-white text-base font-semibold mb-2">Mobil Anda Baru Kena Banjir di Bekasi?</div>
        <div className="text-white/70 text-sm mb-4">Kami bantu dampingi proses klaim dari laporan awal hingga dana perbaikan cair — atau konsultasi dulu jika Anda belum punya perluasan banjir untuk musim depan.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, mobil saya kena banjir di Bekasi dan ingin bantuan proses klaim asuransi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
