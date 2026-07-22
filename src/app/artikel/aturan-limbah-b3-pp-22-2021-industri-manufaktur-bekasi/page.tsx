import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("aturan-limbah-b3-pp-22-2021-industri-manufaktur-bekasi")!;
const related = getArtikelByCluster("liability", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "pp 22 2021 limbah b3, aturan limbah b3 bekasi, asuransi limbah b3 industri manufaktur, persetujuan teknis limbah b3, tps limbah b3 bekasi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apa itu PP No. 22 Tahun 2021?", acceptedAnswer: { "@type": "Answer", text: "PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup adalah peraturan turunan UU Cipta Kerja yang mengatur, antara lain, kewajiban perizinan dan pengelolaan limbah bahan berbahaya dan beracun (B3) bagi setiap usaha yang menghasilkan, menyimpan, mengangkut, atau mengolah limbah B3." } },
    { "@type": "Question", name: "Perusahaan seperti apa yang wajib punya persetujuan teknis limbah B3?", acceptedAnswer: { "@type": "Answer", text: "Semua usaha yang dalam proses produksinya menghasilkan limbah B3 — termasuk sisa bahan kimia, oli bekas, sludge, atau kemasan bekas B3 — wajib memiliki persetujuan teknis pengelolaan limbah B3 sebagai bagian dari persetujuan lingkungan, sesuai skala dan jenis limbah yang dihasilkan." } },
    { "@type": "Question", name: "Apa bedanya sanksi administratif, perdata, dan pidana untuk pelanggaran limbah B3?", acceptedAnswer: { "@type": "Answer", text: "Sanksi administratif berupa teguran, penyegelan, atau paksaan pemerintah untuk memperbaiki fasilitas (Pasal 508 PP 22/2021). Sanksi perdata berupa kewajiban ganti rugi dan pemulihan lingkungan kepada pihak yang dirugikan. Sanksi pidana berupa penjara dan denda sesuai UU 32/2009, yang bisa dikenakan bersamaan dengan dua sanksi lainnya jika terbukti ada unsur pidana." } },
    { "@type": "Question", name: "Apakah sudah patuh PP 22/2021 berarti perusahaan bebas dari risiko finansial pencemaran?", acceptedAnswer: { "@type": "Answer", text: "Tidak sepenuhnya. Kepatuhan mengurangi risiko sanksi administratif dan pidana, tetapi tidak menghilangkan potensi insiden tak terduga seperti kebocoran tangki atau kegagalan sistem penyimpanan. Untuk risiko finansial akibat insiden semacam ini, diperlukan proteksi tambahan seperti Asuransi Limbah B3." } },
  ],
};

export default function ArtikelLimbahB3PP222021() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Aturan Limbah B3 PP 22/2021"
      heroBadge="Regulasi · Limbah B3"
      heroTitle={<>Mengenal Aturan Limbah B3 (PP 22/2021)<br /><em className="not-italic text-gold">untuk Industri Manufaktur Bekasi</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Kawasan industri di Bekasi — Jababeka, MM2100, EJIP, Delta Silicon, dan kawasan mandiri di Cikarang — menaungi ribuan pabrik manufaktur dari sektor otomotif, elektronik, tekstil, hingga kimia. Hampir semua proses produksi di sektor ini menghasilkan limbah bahan berbahaya dan beracun (B3) dalam bentuk oli bekas, sludge, pelarut kimia, hingga kemasan bekas bahan kimia. Sejak 2021, seluruh kewajiban pengelolaannya diatur secara terpadu dalam PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup — dan pelanggarannya, seperti terlihat dari kasus nyata di Bekasi, bukan risiko yang bisa dianggap enteng.
      </p>

      <h2>Kasus Nyata: KLH Segel Dua Perusahaan Pengelola Limbah B3 di Bekasi</h2>
      <blockquote className="kasus">
        <p>
          Pada akhir Mei 2025, Kementerian Lingkungan Hidup (KLH) menyegel dua perusahaan pengelola limbah B3 di Kabupaten Bekasi, yakni PT Harrosa Darma Nusantara (PT HDN) dan PT Harosindo Teknologi Indonesia (PT HTI). Deputi Bidang Penegakan Hukum Lingkungan Hidup KLH, Irjen Pol. Rizal Irawan, menyatakan PT HDN diduga melanggar Pasal 11 ayat (2) PP No. 22 Tahun 2021 karena tidak memiliki RKL-RPL rinci berdasarkan persetujuan lingkungan kawasan untuk kegiatan pengumpulan limbah B3.
        </p>
        <p>
          Direktur Pengaduan dan Pengawasan Gakkum KLH, Ardiyanto Nugroho, menjelaskan bahwa KLH menyiapkan tiga instrumen penegakan hukum sekaligus: sanksi pidana, sanksi perdata, dan sanksi administratif berupa denda sesuai Pasal 508 PP No. 22 Tahun 2021 — menunjukkan bahwa satu pelanggaran administratif bisa berkembang ke tiga jalur hukum yang berbeda secara bersamaan.
        </p>
      </blockquote>

      <h2>Apa Itu PP 22/2021 dan Siapa yang Wajib Patuh</h2>
      <p>
        PP No. 22 Tahun 2021 adalah peraturan pelaksana dari UU Cipta Kerja yang mengonsolidasikan berbagai ketentuan lingkungan hidup, termasuk perizinan berusaha berbasis risiko dan pengelolaan limbah B3. Berbeda dengan anggapan umum bahwa aturan ini hanya berlaku untuk perusahaan pengolah limbah profesional, kewajibannya sebenarnya melekat pada <strong>setiap penghasil limbah B3</strong> — termasuk pabrik manufaktur yang limbah B3-nya hanya produk sampingan dari proses produksi utama, sesuai Pasal 59 ayat (1) UU 32/2009 sebagaimana diubah UU Cipta Kerja.
      </p>

      <h2>5 Kewajiban Utama Sesuai PP 22/2021</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">📋</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Persetujuan Teknis & RKL-RPL Rinci</div>
          <p className="text-sm leading-relaxed text-[#475569]">Setiap kegiatan penyimpanan atau pengumpulan limbah B3 wajib punya rincian teknis berdasarkan persetujuan lingkungan kawasan — celah inilah yang membuat PT HDN disegel.</p>
        </div>
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">🏗️</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">TPS Limbah B3 Sesuai Standar Teknis</div>
          <p className="text-sm leading-relaxed text-[#475569]">Tempat Penyimpanan Sementara wajib dilengkapi sistem pendeteksi kebakaran otomatis, konstruksi kedap, dan area terpisah dari fasilitas produksi utama.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">🏷️</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Pelabelan & Pengemasan</div>
          <p className="text-sm leading-relaxed text-[#475569]">Setiap wadah limbah B3 wajib diberi label sesuai karakteristik bahan (mudah terbakar, korosif, beracun) agar mudah diidentifikasi dan ditangani secara aman.</p>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-card p-5">
          <div className="text-2xl mb-2">📤</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Pelaporan Berkala</div>
          <p className="text-sm leading-relaxed text-[#475569]">Perusahaan wajib melaporkan neraca limbah B3 secara berkala ke instansi lingkungan hidup sebagai bagian dari sistem pengawasan pemerintah.</p>
        </div>
      </div>
      <div className="not-prose bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5 mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-2xl">🚛</span>
          <div className="font-heading text-navy font-bold text-[0.98rem]">Kerja Sama dengan Pihak Ketiga Berizin</div>
        </div>
        <p className="text-sm leading-relaxed text-[#475569] m-0">Pengangkutan dan pemusnahan limbah B3 hanya boleh dilakukan oleh perusahaan yang memiliki izin resmi dari kementerian terkait — bekerja sama dengan pihak tak berizin tetap membuat penghasil limbah ikut bertanggung jawab secara hukum.</p>
      </div>

      <h2>Sanksi Jika Kewajiban Ini Diabaikan</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Jenis Sanksi</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Dasar Hukum</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Bentuk</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Administratif</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pasal 508 PP 22/2021</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Teguran, paksaan pemerintah, hingga penyegelan fasilitas</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pidana</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pasal 98, 102, 104 UU 32/2009</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Penjara hingga 10 tahun, denda hingga Rp10 miliar</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Perdata</td><td style={{padding: "10px 12px"}}>Pasal 87 & 88 UU 32/2009</td><td style={{padding: "10px 12px"}}>Ganti rugi & biaya pemulihan lingkungan kepada pihak terdampak</td></tr>
        </tbody>
      </table>
      <p>
        Untuk gambaran lengkap bagaimana ketiga jalur sanksi ini pernah diterapkan pada kasus nyata di Bekasi — termasuk kasus yang berujung penahanan direktur perusahaan — baca studi kasus kami di <Link href="/artikel/studi-kasus-tuntutan-pencemaran-lingkungan-bekasi" className="text-gold font-semibold no-underline hover:underline">Studi Kasus: Berapa Besar Tuntutan Pencemaran Lingkungan Bisa Terjadi?</Link>
      </p>

      <h2>Kenapa Kepatuhan Saja Tidak Selalu Cukup</h2>
      <p>
        Memenuhi seluruh kewajiban PP 22/2021 memang secara signifikan menurunkan risiko sanksi administratif dan pidana. Namun kepatuhan regulasi tidak menghilangkan risiko insiden tak terduga — kebocoran tangki penyimpanan akibat korosi, kegagalan sistem drainase saat hujan deras, atau human error saat proses pengangkutan tetap bisa terjadi meski seluruh dokumen perizinan lengkap. Dalam skenario ini, biaya pembersihan lingkungan (clean-up cost) dan tuntutan ganti rugi dari masyarakat terdampak tetap menjadi tanggung jawab perusahaan — dan di sinilah Asuransi Limbah B3 berperan sebagai lapisan proteksi finansial di luar kepatuhan administratif.
      </p>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Pastikan Pabrik Anda Terlindungi di Luar Kepatuhan Regulasi</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan proteksi Asuransi Limbah B3 sesuai profil risiko produksi Anda — gratis.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi Asuransi Limbah B3 untuk pabrik saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
