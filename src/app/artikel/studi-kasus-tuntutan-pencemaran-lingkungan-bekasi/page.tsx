import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("studi-kasus-tuntutan-pencemaran-lingkungan-bekasi")!;
const related = getArtikelByCluster("liability", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "tuntutan pencemaran lingkungan bekasi, denda limbah b3, sanksi pencemaran lingkungan industri, studi kasus limbah b3 cikarang, asuransi limbah b3 bekasi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Berapa denda maksimal untuk pelanggaran pencemaran limbah B3 di Indonesia?", acceptedAnswer: { "@type": "Answer", text: "Berdasarkan Pasal 98, 102, dan 104 UU No. 32 Tahun 2009, pelaku pencemaran akibat limbah B3 dapat diancam pidana penjara hingga 10 tahun dan denda hingga Rp10 miliar, tergantung tingkat keparahan dan dampak pencemaran yang ditimbulkan." } },
    { "@type": "Question", name: "Apakah direktur perusahaan bisa dipidana secara pribadi dalam kasus pencemaran limbah B3?", acceptedAnswer: { "@type": "Answer", text: "Bisa. Kasus PT Nirmala Tipar Sesama di Cikarang Selatan menunjukkan direktur utama perusahaan ditahan dan ditetapkan sebagai tersangka secara pribadi, sebelum kemudian penyidik mengembangkan kasus dengan pasal tambahan untuk menjerat korporasi." } },
    { "@type": "Question", name: "Apa itu tanggung jawab mutlak (strict liability) dalam kasus pencemaran limbah B3?", acceptedAnswer: { "@type": "Answer", text: "Sesuai Pasal 88 UU 32/2009, untuk kegiatan yang menggunakan atau menghasilkan B3, perusahaan bertanggung jawab mutlak atas kerugian yang timbul tanpa perlu pembuktian ada tidaknya unsur kesalahan. Ini membuat posisi hukum perusahaan lebih lemah dibanding kasus liability biasa yang mensyaratkan pembuktian kelalaian." } },
    { "@type": "Question", name: "Apakah asuransi bisa menanggung denda pidana akibat pencemaran lingkungan?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Denda dan sanksi pidana bersifat pribadi dan tidak dapat diasuransikan. Yang dapat dijamin oleh Asuransi Limbah B3 adalah biaya pembersihan lingkungan (clean-up cost), biaya pembelaan hukum, dan ganti rugi perdata kepada pihak ketiga yang dirugikan." } },
  ],
};

export default function ArtikelStudiKasusPencemaran() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Studi Kasus Tuntutan Pencemaran Lingkungan"
      heroBadge="Studi Kasus · Limbah B3"
      heroTitle={<>Studi Kasus: Berapa Besar Tuntutan<br /><em className="not-italic text-gold">Pencemaran Lingkungan Bisa Terjadi?</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Banyak pelaku usaha di kawasan industri Bekasi menganggap risiko pencemaran limbah B3 hanya berujung pada "surat teguran" dari dinas lingkungan hidup. Tiga kasus nyata berikut menunjukkan bahwa asumsi itu jauh dari kenyataan — konsekuensinya bisa berlapis, mulai dari penyegelan fasilitas, penahanan personal, hingga ancaman denda miliaran rupiah.
      </p>

      <h2>Kasus 1: PT Nirmala Tipar Sesama, Cikarang Selatan — Direktur Ditahan</h2>
      <blockquote className="kasus">
        <p>
          PT Nirmala Tipar Sesama (NTS), perusahaan jasa pengolah limbah B3 di Jalan KH. Noer Alie, Desa Pasirsari, Cikarang Selatan, terbukti melakukan dumping sludge minyak, minyak kotor, bottom ash, dan tanah terkontaminasi ke tanah tanpa izin. Hasil uji menemukan kontaminasi logam berat — Arsen, Barium, Kromium Heksavalen, Tembaga, Timbal, Merkuri, Seng, dan Nikel — di lokasi tersebut, yang berlokasi dekat permukiman warga.
        </p>
        <p>
          Direktur Utama PT NTS ditahan dan ditetapkan sebagai tersangka atas dugaan tindak pidana pencemaran lingkungan berdasarkan Pasal 98, 102, dan 104 UU No. 32 Tahun 2009, dengan ancaman pidana penjara maksimum 10 tahun dan denda maksimum Rp10 miliar. Penyidik KLHK bahkan mengembangkan perkara dengan Pasal 119 UU 32/2009 sebagai dasar pemidanaan tambahan terhadap korporasi, mengingat kekhawatiran pencemaran merembes ke air tanah warga di luar lokasi pabrik.
        </p>
      </blockquote>

      <h2>Kasus 2: Perusahaan Printing di Kabupaten Bekasi — Denda hingga Rp3 Miliar</h2>
      <blockquote className="kasus">
        <p>
          Sebuah perusahaan percetakan di Kabupaten Bekasi ketahuan membuang tinta yang termasuk kategori limbah B3 setelah masyarakat mengadu ke dinas lingkungan hidup setempat. Investigasi menemukan saluran pembuangan limbah perusahaan tidak memenuhi syarat teknis, sehingga air limbah mengalir langsung ke drainase warga hingga ke kali.
        </p>
        <p>
          Perusahaan tersebut dinilai melanggar UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup, dengan ancaman denda hingga Rp3 miliar bagi pembuang limbah B3 tanpa izin — sebuah angka yang jauh lebih besar dibanding investasi yang dibutuhkan untuk membangun sistem pengolahan limbah yang sesuai standar sejak awal.
        </p>
      </blockquote>

      <h2>Kasus 3: PT KSA, Cikarang Barat — Penyegelan dan 6 Pelanggaran Sekaligus</h2>
      <blockquote className="kasus">
        <p>
          PT Kimu Sukses Abadi (KSA) di Kampung Rawa Citra, Kelurahan Telaga Asih, Kecamatan Cikarang Barat, disegel oleh Pemerintah Kabupaten Bekasi karena enam pelanggaran sekaligus — termasuk menyimpan limbah B3 di area terbuka tanpa fasilitas penyimpanan sesuai ketentuan teknis. Dinas Lingkungan Hidup mencatat saluran pembuangan limbah perusahaan mengalir ke drainase masyarakat hingga ke sungai di sekitar lokasi.
        </p>
        <p>
          Selain sanksi administratif berupa penyegelan, perusahaan diwajibkan membuat rincian teknis penyimpanan limbah B3 dalam waktu maksimal 120 hari kerja — sebuah proses perbaikan yang memakan waktu dan biaya signifikan, di luar potensi hilangnya kepercayaan mitra bisnis akibat rekam jejak pelanggaran lingkungan yang sudah tercatat resmi oleh pemerintah daerah.
        </p>
      </blockquote>

      <h2>3 Lapisan Biaya yang Bisa Muncul dari Satu Insiden Pencemaran</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">🔒</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">1. Sanksi Administratif</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penyegelan fasilitas, kewajiban perbaikan infrastruktur dalam tenggat waktu tertentu (seperti kasus PT KSA), hingga pencabutan izin operasional.</p>
        </div>
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">⚖️</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">2. Sanksi Pidana & Denda</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penjara hingga 10 tahun dan denda hingga Rp10 miliar sesuai UU 32/2009, dengan tanggung jawab yang bisa menyasar direktur secara pribadi maupun korporasi.</p>
        </div>
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">💰</div>
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">3. Ganti Rugi & Pemulihan Lingkungan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Biaya clean-up dan kompensasi ke warga terdampak. Sebagai gambaran skala, tuntutan komunitas terdampak dari satu insiden industri di Bekasi bisa mencapai miliaran rupiah — mengacu skala tuntutan Rp7,6 miliar pada kasus ledakan SPBE Cimuning.</p>
        </div>
      </div>

      <h2>Pasal 88 UU 32/2009: Kenapa Posisi Perusahaan Lebih Lemah dari Klaim Liability Biasa</h2>
      <p>
        Pada kasus liability umum, pihak yang menuntut biasanya harus membuktikan adanya unsur kesalahan atau kelalaian tertanggung. Namun untuk kegiatan yang menggunakan atau menghasilkan bahan B3, Pasal 88 UU No. 32 Tahun 2009 menerapkan prinsip <strong>tanggung jawab mutlak (strict liability)</strong> — perusahaan tetap bertanggung jawab atas kerugian yang timbul akibat pencemaran, tanpa perlu pembuktian ada tidaknya kesalahan. Prinsip ini membuat posisi hukum perusahaan jauh lebih lemah dibanding sengketa liability biasa, karena pembelaan "kami sudah berhati-hati" tidak serta-merta membebaskan dari kewajiban ganti rugi.
      </p>

      <h2>Kenapa Asuransi Limbah B3 Menjadi Bagian dari Mitigasi Risiko</h2>
      <p>
        Denda pidana dan sanksi administratif memang tidak dapat diasuransikan — itu murni tanggung jawab pribadi dan korporasi sesuai putusan pengadilan. Namun komponen biaya lain yang justru sering lebih besar nilainya — biaya pembersihan lokasi tercemar, biaya pembelaan hukum, dan ganti rugi perdata kepada warga terdampak — dapat dijamin melalui Asuransi Limbah B3. Untuk perusahaan manufaktur yang sudah patuh terhadap PP 22/2021 sekalipun, lapisan proteksi ini penting karena insiden pencemaran bisa tetap terjadi akibat kegagalan teknis yang di luar kendali kepatuhan administratif.
      </p>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Jangan Tunggu Sampai Jadi Studi Kasus Berikutnya</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan proteksi Asuransi Limbah B3 untuk perusahaan Anda — gratis, sesuai profil risiko produksi.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Pak Rio, saya ingin konsultasi Asuransi Limbah B3 setelah membaca studi kasus tuntutan pencemaran lingkungan di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
          💬 Konsultasi via WhatsApp
        </a>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-black/8">
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Baca Juga di Silo Liability</div>
        <div className="flex flex-col gap-2 mb-6">
          {related.map(r => (
            <Link key={r.slug} href={`/artikel/${r.slug}`} className="text-navy2 text-sm hover:text-gold transition-colors no-underline">→ {r.title}</Link>
          ))}
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/asuransi-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Asuransi Liability →</Link>
          <Link href="/asuransi-liability/limbah-b3" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚗️ Asuransi Limbah B3 →</Link>
          <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👥 Public Liability →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
