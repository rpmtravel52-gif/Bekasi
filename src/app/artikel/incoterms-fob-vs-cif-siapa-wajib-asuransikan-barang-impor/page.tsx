import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/artikel/ArtikelLayout";
import { getArtikelBySlug, getArtikelByCluster } from "@/lib/artikel";
import { KONTAK } from "@/lib/data";

const meta = getArtikelBySlug("incoterms-fob-vs-cif-siapa-wajib-asuransikan-barang-impor")!;
const related = getArtikelByCluster("kargo", meta.slug);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  keywords: "incoterms fob vs cif, asuransi barang impor bekasi, siapa wajib asuransi impor, marine cargo insurance incoterms, asuransi impor bahan baku cikarang",
  alternates: { canonical: `https://asuransibekasi.id/artikel/${meta.slug}` },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kalau kontrak dagang saya memakai FOB, apakah saya sebagai pembeli otomatis dilindungi asuransi?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Pada Incoterms FOB (Free on Board), tanggung jawab dan risiko atas barang berpindah dari penjual ke pembeli sejak barang melewati pagar kapal di pelabuhan muat. Penjual tidak berkewajiban menyediakan asuransi setelah titik itu, sehingga pembeli wajib mengatur sendiri Marine Cargo Insurance-nya sebelum kapal berangkat." } },
    { "@type": "Question", name: "Apakah asuransi dari penjual di skema CIF sudah cukup untuk melindungi kepentingan saya sebagai pembeli?", acceptedAnswer: { "@type": "Answer", text: "Belum tentu. CIF (Cost, Insurance, Freight) memang mewajibkan penjual membeli asuransi, namun standar minimum yang umum digunakan adalah Institute Cargo Clauses C — cakupan paling dasar. Jika nilai barang tinggi atau rutenya berisiko, pembeli sering perlu membeli polis tambahan (increased value/top-up cover) atas biaya sendiri." } },
    { "@type": "Question", name: "Bagaimana kalau kontrak dagang tidak mencantumkan Incoterms sama sekali?", acceptedAnswer: { "@type": "Answer", text: "Ini situasi paling berisiko. Tanpa Incoterms yang jelas, penentuan siapa yang menanggung kerugian saat terjadi klaim bisa berujung sengketa antara pembeli dan penjual, apalagi jika keduanya berasumsi pihak lain yang mengasuransikan. Selalu pastikan Incoterms dicantumkan eksplisit di invoice dan kontrak." } },
    { "@type": "Question", name: "Apakah keterlambatan barang di pelabuhan akibat kongesti bea cukai termasuk yang dijamin asuransi kargo?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Marine Cargo Insurance menjamin kerusakan atau kehilangan fisik barang, bukan kerugian akibat keterlambatan semata. Namun jika selama masa tertahan itu terjadi kerusakan fisik — misalnya akibat penumpukan, cuaca, atau penanganan yang tidak layak di area pelabuhan — kerugian tersebut tetap bisa diklaim selama polis masih berlaku dan mencakup periode penyimpanan tersebut." } },
  ],
};

export default function ArtikelIncotermsFobCif() {
  return (
    <ArtikelLayout
      meta={meta}
      breadcrumbLabel="Incoterms FOB vs CIF"
      heroBadge="Panduan · Impor & Asuransi Kargo"
      heroTitle={<>Incoterms FOB vs CIF:<br /><em className="not-italic text-gold">Siapa Wajib Asuransikan Barang Impor Anda?</em></>}
      heroDek={meta.excerpt}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <p>
        Bagi importir bahan baku yang berbasis di kawasan industri Bekasi — Jababeka, MM2100, EJIP, hingga yang memakai jalur Cikarang Dry Port — istilah FOB dan CIF biasanya hanya dibaca sekilas di invoice supplier tanpa benar-benar dipahami konsekuensinya. Padahal dua istilah dagang internasional ini menentukan satu hal yang sangat konkret: <strong>siapa yang menanggung kerugian jika barang rusak, hilang, atau tenggelam selama pelayaran</strong>. Salah asumsi soal ini, dan Anda bisa jadi baru sadar tidak ada polis yang melindungi barang Anda tepat pada saat klaim dibutuhkan.
      </p>

      <h2>Kongesti Priok: Contoh Nyata Kenapa Titik Peralihan Risiko Itu Penting</h2>
      <blockquote className="kasus">
        <p>
          Pertengahan 2026, Bea Cukai Tanjung Priok menambah lokasi pemeriksaan fisik di JICT dan Terminal Petikemas Koja serta memperpanjang jam pemeriksaan hingga malam hari, sebagai respons atas penumpukan kontainer yang terus terjadi. Kementerian Keuangan turut mendorong pengetatan aturan lama penyimpanan barang di pelabuhan untuk mengurai kongesti tersebut.
        </p>
        <p>
          Situasi ini berdampak langsung pada pasokan bahan baku impor bagi pabrik-pabrik di Bekasi dan Cikarang: kontainer yang sudah mengantongi Surat Persetujuan Pengeluaran Barang (SPPB) pun sempat tertahan karena keterbatasan truk pengangkut. Selama masa tertahan itulah barang berada dalam kondisi paling rentan — ditumpuk, dipindahkan berkali-kali, dan terpapar cuaca dalam durasi yang tidak direncanakan sejak awal.
        </p>
      </blockquote>
      <p>
        Pertanyaannya sederhana: jika kontainer bahan baku Anda rusak akibat penumpukan atau cuaca selama tertahan di area pelabuhan, siapa yang menanggung kerugian itu — Anda sebagai pembeli, atau supplier di negara asal? Jawabannya seluruhnya bergantung pada Incoterms yang tertulis di kontrak dagang Anda.
      </p>

      <h2>FOB vs CIF: Titik Peralihan Tanggung Jawab</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.92rem"}}>
        <thead>
          <tr style={{background: "#F9F6F1"}}>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>Aspek</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>FOB (Free on Board)</th>
            <th style={{textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #C8963E"}}>CIF (Cost, Insurance, Freight)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Titik peralihan risiko</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Saat barang melewati pagar kapal di pelabuhan muat</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Sama seperti FOB — saat barang melewati pagar kapal</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Yang wajib membeli asuransi</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Pembeli (importir), sejak barang naik ke kapal</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Penjual (eksportir), atas nama pembeli</td></tr>
          <tr><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Biaya freight & asuransi</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Ditanggung terpisah oleh pembeli</td><td style={{padding: "10px 12px", borderBottom: "1px solid #eee"}}>Sudah termasuk dalam harga barang (CIF value)</td></tr>
          <tr><td style={{padding: "10px 12px"}}>Standar cakupan asuransi minimum</td><td style={{padding: "10px 12px"}}>Bebas ditentukan pembeli sendiri</td><td style={{padding: "10px 12px"}}>Umumnya Institute Cargo Clauses C (cakupan paling dasar)</td></tr>
        </tbody>
      </table>

      <div className="not-prose bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-6 my-8 flex gap-4 items-start">
        <div className="text-2xl flex-shrink-0">💡</div>
        <p className="text-[#78350F] text-sm leading-relaxed m-0">
          Poin yang sering terlewat: baik FOB maupun CIF sama-sama memindahkan <strong>risiko</strong> ke pembeli pada titik yang sama — saat barang naik ke kapal. Bedanya hanya siapa yang <em>mengatur pembelian polisnya</em>. Di CIF, kalau kapal tenggelam, yang mengajukan klaim ke perusahaan asuransi tetaplah pembeli sebagai pemilik kepentingan (insurable interest) atas barang — bukan penjual.
        </p>
      </div>

      <h2>4 Skema Incoterms yang Paling Sering Dipakai Importir Bekasi</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-card p-5">
          <div className="text-2xl mb-2">🚢</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">FOB — Free on Board</div>
          <p className="text-sm leading-relaxed text-[#475569]">Pembeli menanggung ongkos kirim dan asuransi sejak barang naik ke kapal di pelabuhan asal. Paling umum dipakai importir yang sudah punya forwarder dan broker asuransi sendiri di Indonesia.</p>
        </div>
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-card p-5">
          <div className="text-2xl mb-2">📦</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">CIF — Cost, Insurance, Freight</div>
          <p className="text-sm leading-relaxed text-[#475569]">Penjual mengurus ongkos kirim dan asuransi dasar hingga pelabuhan tujuan. Praktis bagi importir baru, tapi cakupan asuransinya sering minimum dan tidak sesuai profil risiko pembeli.</p>
        </div>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-card p-5">
          <div className="text-2xl mb-2">⚓</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">CFR — Cost and Freight</div>
          <p className="text-sm leading-relaxed text-[#475569]">Mirip CIF tetapi penjual TIDAK menyediakan asuransi — hanya menanggung ongkos kirim. Pembeli wajib mengatur sendiri polisnya, mirip FOB namun freight sudah termasuk harga.</p>
        </div>
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-card p-5">
          <div className="text-2xl mb-2">🏭</div>
          <div className="font-heading text-navy font-bold text-[0.98rem] mb-1.5">EXW — Ex Works</div>
          <p className="text-sm leading-relaxed text-[#475569]">Risiko berpindah ke pembeli sejak barang keluar dari gudang penjual — jauh sebelum naik kapal. Pembeli menanggung seluruh rantai pengiriman, termasuk asuransi darat di negara asal.</p>
        </div>
      </div>

      <h2>Kesalahan Umum Importir Bekasi Soal Asuransi Impor</h2>
      <p>
        Dalam praktiknya, ada beberapa asumsi keliru yang berulang kali ditemui pada importir bahan baku kawasan industri:
      </p>
      <ul>
        <li><strong>Menganggap CIF berarti "sudah aman sepenuhnya."</strong> Cakupan minimum ICC C hanya menjamin risiko utama seperti kebakaran dan kecelakaan alat angkut — belum tentu mencakup kerusakan akibat air, penanganan bongkar muat, atau pencurian sebagian isi kontainer.</li>
        <li><strong>Tidak mengecek insurable interest saat klaim CIF.</strong> Meski penjual yang membeli polis, pembeli tetap perlu memastikan dirinya tercantum sebagai pihak yang berhak mengajukan klaim (assured/beneficiary) dalam sertifikat asuransi yang diserahkan.</li>
        <li><strong>Membeli FOB tanpa menyiapkan Marine Cargo sendiri.</strong> Sejumlah importir baru tidak sadar bahwa begitu barang naik ke kapal, tanggung jawab sudah berpindah — sehingga jika terjadi kerugian dalam pelayaran, tidak ada pihak yang menanggung.</li>
        <li><strong>Tidak mencantumkan Incoterms secara eksplisit di kontrak/invoice.</strong> Ambiguitas ini berpotensi memicu sengketa dengan supplier saat klaim diajukan, terutama untuk transaksi lintas negara dengan sistem hukum berbeda.</li>
      </ul>

      <h2>Yang Perlu Dipastikan Sebelum Kontrak Dagang Ditandatangani</h2>
      <div className="not-prose bg-navy rounded-xl p-6 my-8">
        <div className="font-heading text-white text-base font-semibold mb-3">☑️ Checklist Importir Sebelum Deal</div>
        <ul className="text-white/80 text-sm leading-relaxed space-y-2 pl-5 list-disc">
          <li>Incoterms tercantum eksplisit (FOB, CIF, CFR, EXW, dll.) di kontrak dan invoice.</li>
          <li>Jika CIF: minta salinan sertifikat asuransi dan pastikan klausul (ICC A/B/C) sesuai jenis barang.</li>
          <li>Jika FOB/CFR/EXW: siapkan Marine Cargo Insurance sendiri sebelum barang berangkat dari pelabuhan asal.</li>
          <li>Pastikan nama perusahaan Anda tercantum sebagai pihak yang berhak mengklaim (assured) dalam polis.</li>
          <li>Periksa apakah polis mencakup periode penyimpanan sementara di pelabuhan tujuan, bukan hanya selama pelayaran.</li>
        </ul>
      </div>

      <h2>Pertanyaan yang Sering Ditanyakan</h2>
      {schemaFAQ.mainEntity.map((f, i) => (
        <div key={i}>
          <h3>{f.name}</h3>
          <p>{f.acceptedAnswer.text}</p>
        </div>
      ))}

      <div className="not-prose bg-navy rounded-xl p-6 mt-10 text-center">
        <div className="font-heading text-white text-base font-semibold mb-2">Belum Yakin Siapa yang Wajib Asuransikan Barang Impor Anda?</div>
        <div className="text-white/70 text-sm mb-4">Kirimkan detail kontrak dan Incoterms Anda — kami bantu cek celah perlindungannya, gratis.</div>
        <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent("Halo Nur, saya ingin konsultasi soal Incoterms dan asuransi barang impor untuk usaha saya di Bekasi.")}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
          💬 Konsultasi via WhatsApp
        </a>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-black/8">
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Baca Juga di Silo Kargo</div>
        <div className="flex flex-col gap-2 mb-6">
          {related.map(r => (
            <Link key={r.slug} href={`/artikel/${r.slug}`} className="text-navy2 text-sm hover:text-gold transition-colors no-underline">→ {r.title}</Link>
          ))}
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/asuransi-kargo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Asuransi Kargo →</Link>
          <Link href="/asuransi-kargo/marine-cargo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚢 Marine Cargo →</Link>
          <Link href="/asuransi-surety-bond/custom-bond-ob23" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛃 Custom Bond OB23 →</Link>
        </div>
      </div>
    </ArtikelLayout>
  );
}
