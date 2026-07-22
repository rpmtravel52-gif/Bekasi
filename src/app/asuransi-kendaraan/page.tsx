import type { Metadata } from "next";
import Link from "next/link";
import ProdukLayout from "@/components/produk/ProdukLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kendaraan Bekasi – Mobil, Bus & Truk Niaga",
  description: "Praktisi asuransi kendaraan independen di Bekasi. Asuransi mobil, bus, dan truk niaga untuk personal maupun bisnis ekspedisi di kawasan industri Bekasi. Kalkulator premi & konsultasi gratis.",
  keywords: "asuransi kendaraan bekasi, asuransi mobil bekasi, asuransi bus bekasi, asuransi truk bekasi, asuransi kendaraan niaga bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-kendaraan" },
  openGraph: {
    title: "Asuransi Kendaraan Bekasi – Mobil, Bus & Truk Niaga",
    description: "Solusi asuransi kendaraan lengkap untuk personal dan bisnis ekspedisi/logistik di Bekasi. Konsultasi gratis.",
    url: "https://asuransibekasi.id/asuransi-kendaraan",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa perbedaan asuransi All Risk dan TLO untuk kendaraan?",
      acceptedAnswer: { "@type": "Answer", text: "All Risk (Comprehensive) menanggung kerusakan ringan hingga berat, kecelakaan, dan kehilangan kendaraan. TLO (Total Loss Only) hanya menanggung kerugian jika kendaraan hilang dicuri atau rusak parah di atas 75% dari nilai kendaraan. Premi TLO lebih murah, tetapi All Risk memberikan proteksi lebih luas." },
    },
    {
      "@type": "Question",
      name: "Apakah truk dan kendaraan niaga bisa diasuransikan?",
      acceptedAnswer: { "@type": "Answer", text: "Bisa. Kami melayani asuransi truk, box, dan kendaraan operasional untuk pelaku usaha ekspedisi dan pergudangan di kawasan industri Bekasi seperti Jababeka, MM2100, dan EJIP, termasuk perlindungan tanggung jawab terhadap muatan dan pihak ketiga." },
    },
    {
      "@type": "Question",
      name: "Apakah bus pariwisata dan bus karyawan bisa diasuransikan?",
      acceptedAnswer: { "@type": "Answer", text: "Bisa. Bus pariwisata, bus karyawan, dan bus antar-jemput dapat diasuransikan dengan perlindungan kendaraan sekaligus tanggung jawab terhadap penumpang selama perjalanan." },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menghitung estimasi premi asuransi mobil?",
      acceptedAnswer: { "@type": "Answer", text: "Premi dihitung berdasarkan tarif referensi OJK yang mempertimbangkan wilayah plat kendaraan, harga kendaraan, jenis perlindungan (All Risk/TLO), dan jenis kendaraan (konvensional/listrik). Gunakan kalkulator premi gratis kami untuk estimasi instan." },
    },
  ],
};

const clusters = [
  { href: "/asuransi-kendaraan/mobil", icon: "🚗", title: "Asuransi Mobil", desc: "Perlindungan All Risk maupun TLO untuk kendaraan pribadi Anda, konvensional maupun listrik, dengan premi sesuai tarif OJK.", tags: ["All Risk", "TLO", "Mobil Listrik"] },
  { href: "/asuransi-kendaraan/bus", icon: "🚌", title: "Asuransi Bus", desc: "Proteksi bus pariwisata, bus karyawan, dan bus antar-jemput termasuk tanggung jawab terhadap penumpang.", tags: ["Bus Pariwisata", "Bus Karyawan", "Antar-Jemput"] },
  { href: "/asuransi-kendaraan/truk-kendaraan-niaga", icon: "🚛", title: "Truk & Kendaraan Niaga", desc: "Proteksi truk, box, dan kendaraan operasional untuk pelaku usaha ekspedisi dan pergudangan di kawasan industri Bekasi.", tags: ["Truk & Box", "Ekspedisi", "Kawasan Industri"] },
];

const whyItems = [
  { icon: "🧮", title: "Kalkulator Premi Instan", desc: "Hitung estimasi premi asuransi mobil Anda secara real-time berdasarkan tarif referensi OJK — gratis, tanpa perlu daftar." },
  { icon: "🏭", title: "Paham Kebutuhan Logistik Bekasi", desc: "Familiar dengan kebutuhan asuransi truk dan armada niaga bagi pelaku ekspedisi di kawasan industri Bekasi." },
  { icon: "🎯", title: "Independen & Objektif", desc: "Tidak terikat satu perusahaan asuransi. Rekomendasi produk 100% berdasarkan kebutuhan Anda." },
  { icon: "🤝", title: "Pendampingan Klaim Penuh", desc: "Kami dampingi proses klaim dari laporan awal hingga dana ganti rugi cair." },
];

export default function KendaraanPage() {
  return (
    <ProdukLayout breadcrumbs={[{ label: "Asuransi Kendaraan" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Kendaraan · Bekasi
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Dari Mobil Pribadi hingga<br /><em className="not-italic text-gold">Armada Niaga Anda</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-8">
            Bekasi adalah simpul logistik utama Jabodetabek, dengan lalu lintas truk ekspedisi yang padat di sepanjang kawasan industri. Baik Anda butuh perlindungan mobil pribadi, bus operasional, atau truk niaga — kami bantu pilih produk dan hitung premi yang tepat.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat 3 Produk →</a>
          </div>
        </div>
      </section>

      {/* CLUSTER CARDS */}
      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">3 Solusi Asuransi Kendaraan<br />untuk Bekasi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {clusters.map(c => (
            <Link key={c.href} href={c.href} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(13,33,55,0.1)] hover:border-gold/25 transition-all no-underline group">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-heading text-navy font-bold text-[1.05rem] mb-2 group-hover:text-gold transition-colors">{c.title}</div>
              <p className="text-sm leading-relaxed text-[#64748B] mb-4">{c.desc}</p>
              <div className="flex gap-1.5 flex-wrap mb-3">
                {c.tags.map(t => <span key={t} className="bg-white border border-black/6 text-[#64748B] text-[0.7rem] px-2.5 py-1 rounded-full">{t}</span>)}
              </div>
              <span className="text-gold text-xs font-semibold">Pelajari lebih lanjut →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/#kalkulator" className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-navy2 transition-all no-underline">
            🧮 Hitung Estimasi Premi Mobil Sekarang →
          </Link>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Praktisi yang Paham<br />Lalu Lintas Bekasi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {whyItems.map(w => (
            <div key={w.title} className="bg-white rounded-card p-6 border border-black/6 text-center hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{w.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{w.title}</div>
              <p className="text-sm leading-relaxed text-[#64748B]">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Asuransi Kendaraan</h2>
        </div>
        <div className="max-w-[740px] mx-auto">
          {schemaFAQ.mainEntity.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-start list-none gap-4">
                <span>{f.name}</span>
                <span className="text-gold text-xl flex-shrink-0 transition-transform group-open:rotate-45 mt-0.5">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">Mulai Sekarang</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Kendaraan Anda Aset Berharga —<br />Lindungi Sekarang</h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">Konsultasi gratis, kalkulator premi instan, dan penawaran dari perusahaan asuransi berlisensi OJK.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
