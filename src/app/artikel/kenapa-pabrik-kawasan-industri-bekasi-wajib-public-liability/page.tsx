import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("kenapa-pabrik-kawasan-industri-bekasi-wajib-public-liability")!;
const related = getArtikelByCluster("liability", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "public liability bekasi, asuransi tanggung gugat pabrik bekasi, asuransi pihak ketiga kawasan industri, ledakan spbe cimuning, asuransi tanggung jawab hukum industri bekasi",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah Public Liability wajib secara hukum untuk pabrik di Bekasi?", acceptedAnswer: { "@type": "Answer", text: "Tidak ada undang-undang yang mewajibkan semua pabrik memiliki Public Liability. Namun tanggung jawab perdata atas kerugian pihak ketiga tetap berlaku otomatis berdasarkan Pasal 1365 dan 1367 KUH Perdata, terlepas dari ada tidaknya polis asuransi. Artinya kewajiban membayar ganti rugi tetap ada — yang tidak ada tanpa polis adalah pihak yang membantu membiayainya." } },
    { "@type": "Question", name: "Kalau pabrik saya sudah punya BPJS Ketenagakerjaan, apakah itu sudah cukup?", acceptedAnswer: { "@type": "Answer", text: "Tidak. BPJS Ketenagakerjaan hanya menjamin karyawan sendiri yang mengalami kecelakaan kerja. Public Liability menjamin pihak di luar karyawan — tamu, tetangga, kontraktor, atau masyarakat sekitar yang dirugikan akibat operasional pabrik Anda. Keduanya saling melengkapi, bukan saling menggantikan." } },
    { "@type": "Question", name: "Apakah kebakaran yang menjalar ke rumah warga di luar pabrik termasuk risiko yang dijamin?", acceptedAnswer: { "@type": "Answer", text: "Ya, ini justru salah satu skenario klasik yang dijamin Public Liability — kerusakan properti pihak ketiga akibat insiden yang bersumber dari lokasi usaha Anda, termasuk kebakaran atau ledakan yang merambat ke luar area pabrik." } },
    { "@type": "Question", name: "Berapa limit pertanggungan Public Liability yang idealnya diambil pabrik di kawasan industri?", acceptedAnswer: { "@type": "Answer", text: "Tergantung kepadatan permukiman di sekitar lokasi dan skala operasional. Sebagai gambaran, tuntutan ganti rugi dari satu insiden yang berdampak ke puluhan bangunan warga bisa mencapai miliaran rupiah, sehingga limit pertanggungan idealnya dihitung berdasarkan estimasi eksposur riil, bukan angka standar generik." } },
  ],
};

export default function ArtikelPublicLiabilityPabrik() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Kenapa Pabrik Wajib Punya Public Liability"
      heroBadge="Panduan · Liability Industri"
      heroTitle={<>Kenapa Pabrik di Kawasan Industri Bekasi<br /><em className="not-italic text-gold">Wajib Punya Public Liability</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Kawasan industri di Bekasi — Jababeka, MM2100, EJIP, Delta Silicon, hingga kawasan mandiri di Cikarang dan Tarumajaya — punya satu karakteristik yang sering luput dari perhitungan risiko: jaraknya yang sangat dekat dengan permukiman padat penduduk. Pabrik, gudang, dan fasilitas produksi tidak berdiri di ruang kosong. Begitu ada insiden yang berdampak keluar dari batas lahan perusahaan, yang dihadapi bukan lagi klaim aset sendiri, melainkan tuntutan dari pihak ketiga: tetangga, pengunjung, kontraktor, bahkan seluruh warga satu RW.
      </p>

      <h2>Ledakan SPBE Cimuning: Potret Nyata Risiko Pihak Ketiga</h2>
      <blockquote className="kasus">
        <p>
          Pada malam 1 April 2026, kebakaran melanda pabrik pengisian gas (SPBE) milik PT Indogas Andalan Kita di kawasan Cimuning, Mustika Jaya, Kota Bekasi. Api yang diduga berasal dari kebocoran gas saat proses pengisian tabung membesar dengan cepat dan merambat ke permukiman warga di sekitarnya. Enam orang meninggal dunia akibat luka bakar serius, puluhan rumah dan kios ikut hangus.
        </p>
        <p>
          Sebulan setelah kejadian, warga terdampak masih menunggu kejelasan kompensasi. Mereka menuntut total ganti rugi sebesar Rp7,6 miliar yang mencakup perbaikan bangunan, biaya pengobatan korban luka, hingga santunan bagi korban meninggal — sementara proses pencairan bantuan yang sudah disepakati untuk 41 kepala keluarga senilai sekitar Rp7 miliar disebut masih tertahan di tahap administrasi internal perusahaan.
        </p>
      </blockquote>
      <p>
        Kasus ini penting bukan hanya karena skalanya, melainkan karena melibatkan dua perusahaan besar — Pertamina dan PT Indogas Andalan Kita — yang notabene punya sumber daya finansial dan hukum yang jauh lebih besar dibanding pabrik skala menengah di kawasan industri Bekasi pada umumnya. Jika perusahaan sebesar itu saja menghadapi proses klaim yang berlarut-larut, bisa dibayangkan posisi pabrik skala menengah yang harus menghadapi tuntutan serupa tanpa struktur klaim asuransi yang jelas — seluruh beban ganti rugi akan langsung membebani kas perusahaan.
      </p>

      <h2>4 Sumber Risiko Pihak Ketiga yang Mengintai Pabrik di Bekasi</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">🔥</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Kebakaran/Ledakan yang Menjalar Keluar</div>
          <p className="text-sm leading-relaxed text-[#475569]">Kasus SPBE Cimuning membuktikan api dari satu titik produksi bisa merambat ke puluhan rumah warga dalam hitungan menit, terutama di kawasan dengan kepadatan tinggi di sekitar area industri.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">🚧</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Kecelakaan Tamu, Kontraktor & Kurir</div>
          <p className="text-sm leading-relaxed text-[#475569]">Pengunjung audit, vendor pengiriman, kontraktor renovasi, hingga tim maintenance eksternal yang cedera di area pabrik — lantai licin, rak roboh, atau tertabrak forklift — bukan tanggungan BPJS Ketenagakerjaan karyawan Anda.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">🚛</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Kerusakan Properti Akibat Operasional</div>
          <p className="text-sm leading-relaxed text-[#475569]">Truk keluar-masuk yang merusak infrastruktur jalan warga, getaran alat berat yang meretakkan tembok tetangga, atau debu produksi yang merusak properti sekitar — semua berpotensi jadi klaim pihak ketiga.</p>
        </div>
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">⚖️</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">Gugatan Kolektif dari Komunitas Terdampak</div>
          <p className="text-sm leading-relaxed text-[#475569]">Ketika satu insiden berdampak ke banyak rumah tangga sekaligus, tuntutan cenderung datang secara kolektif dan bernilai besar — seperti tuntutan Rp7,6 miliar dari puluhan keluarga terdampak di Cimuning.</p>
        </div>
      </div>

      <h2>Ukuran Perusahaan Tidak Menghapus Tanggung Jawab Hukum</h2>
      <p>
        Berdasarkan Pasal 1365 KUH Perdata, setiap perbuatan yang melanggar hukum dan menimbulkan kerugian bagi orang lain mewajibkan pihak yang menyebabkan kerugian itu untuk menggantinya. Pasal 1367 menegaskan lebih jauh: perusahaan bertanggung jawab atas kerugian yang ditimbulkan oleh karyawan atau pihak yang bekerja untuknya dalam menjalankan tugas. Kewajiban ini berlaku otomatis, tanpa memandang skala usaha — pabrik rumahan dengan 20 karyawan memikul kewajiban hukum yang sama dengan korporasi besar.
      </p>
      <p>
        Yang membedakan bukan besar-kecilnya kewajiban, melainkan <strong>kesiapan finansial untuk memenuhinya</strong>. Tanpa Public Liability, ganti rugi harus dibayar langsung dari kas operasional — yang dalam kasus insiden besar bisa mengganggu likuiditas perusahaan selama bertahun-tahun, bahkan mengancam kelangsungan usaha itu sendiri.
      </p>

      <h2>Tanpa Public Liability vs Dengan Public Liability</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Aspek</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Tanpa Public Liability</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Dengan Public Liability</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Sumber dana ganti rugi</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Kas operasional perusahaan</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Perusahaan asuransi, sesuai limit polis</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Biaya hukum & litigasi</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Ditanggung sendiri</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Termasuk dalam jaminan polis</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Proses negosiasi dengan korban</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Internal, rawan berlarut-larut</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Didampingi tim klaim & adjuster independen</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Dampak ke arus kas</td><td style={{padding: "10px 12px"}}>Bisa langsung mengganggu operasional</td><td style={{padding: "10px 12px"}}>Terjaga, risiko dipindahkan ke penanggung</td></tr>
        </tbody>
      </table>

      <div className="not-prose bg-navy rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">💡</div>
        <p className="text-white/85 text-sm leading-relaxed m-0">
          Catatan: proses klaim yang berlarut-larut pada kasus Cimuning terjadi meski melibatkan Pertamina — perusahaan dengan divisi legal dan keuangan yang mumpuni. Ini menunjukkan bahwa tanpa struktur klaim asuransi yang jelas sejak awal, proses ganti rugi pihak ketiga cenderung lambat dan berpotensi memicu ketegangan dengan komunitas sekitar pabrik.
        </p>
      </div>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Pabrik Anda Belum Punya Public Liability?</div>
        <div className="text-white/70 text-sm mb-4">Konsultasikan estimasi eksposur risiko pihak ketiga di lokasi pabrik Anda — gratis, tanpa kewajiban.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Pak Rio, saya ingin konsultasi asuransi Public Liability untuk pabrik saya di kawasan industri Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
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
          <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👥 Public Liability →</Link>
          <Link href="/asuransi-liability/limbah-b3" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚗️ Asuransi Limbah B3 →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
