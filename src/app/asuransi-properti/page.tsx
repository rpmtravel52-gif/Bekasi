import type { Metadata } from "next";
import Link from "next/link";
import ProdukLayout from "@/components/produk/ProdukLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Properti Bekasi – PAR, Kebakaran, Gudang, Pabrik & Rumah",
  description:
    "Konsultan asuransi properti independen di Bekasi. Lindungi rumah, ruko, gudang, dan pabrik di kawasan industri Jababeka, MM2100, EJIP, dan Delta Silicon dari kebakaran, banjir, dan risiko fisik lainnya. Konsultasi gratis.",
  keywords:
    "asuransi properti bekasi, asuransi kebakaran bekasi, property all risk bekasi, asuransi pabrik bekasi, asuransi gudang bekasi, asuransi rumah bekasi, asuransi kawasan industri jababeka, asuransi mm2100, asuransi ejip",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-properti" },
  openGraph: {
    title: "Asuransi Properti Bekasi – PAR, Kebakaran, Gudang, Pabrik & Rumah",
    description: "Solusi perlindungan properti lengkap untuk personal dan industri di Bekasi. Konsultasi gratis, analisis risiko lokasi.",
    url: "https://asuransibekasi.id/asuransi-properti",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja yang dijamin asuransi properti di Bekasi?",
      acceptedAnswer: { "@type": "Answer", text: "Tergantung produk yang dipilih. Asuransi kebakaran menjamin risiko FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke). Property All Risk (PAR) menjamin semua risiko fisik kecuali yang dikecualikan secara eksplisit. Perluasan tersedia untuk banjir, gempa bumi, dan angin topan — relevan untuk sejumlah kawasan Bekasi yang rawan luapan air musiman." },
    },
    {
      "@type": "Question",
      name: "Apakah pabrik dan gudang di kawasan industri Bekasi bisa diasuransikan?",
      acceptedAnswer: { "@type": "Answer", text: "Bisa. Kami melayani asuransi properti untuk pabrik dan gudang di kawasan industri seperti Jababeka, MM2100, EJIP, dan Delta Silicon — mulai dari bangunan, mesin tetap, hingga stok barang di dalamnya." },
    },
    {
      "@type": "Question",
      name: "Apa itu underinsurance dan bagaimana cara menghindarinya?",
      acceptedAnswer: { "@type": "Answer", text: "Underinsurance terjadi ketika nilai pertanggungan lebih rendah dari biaya penggantian bangunan yang sebenarnya, sehingga klaim dibayar secara proporsional — bukan penuh. Cara menghindarinya: tetapkan nilai pertanggungan berdasarkan replacement cost (biaya membangun ulang), bukan harga jual pasar, dan perbarui nilainya secara berkala." },
    },
    {
      "@type": "Question",
      name: "Apakah perluasan banjir penting untuk properti di Bekasi?",
      acceptedAnswer: { "@type": "Answer", text: "Sangat direkomendasikan. Sejumlah kawasan Bekasi seperti area sekitar Kali Bekasi dan beberapa perumahan padat kerap mengalami luapan air saat musim hujan. Perluasan banjir dapat ditambahkan pada polis kebakaran atau PAR dengan biaya tambahan yang jauh lebih kecil dibanding potensi kerugian." },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim asuransi properti?",
      acceptedAnswer: { "@type": "Answer", text: "Klaim kerusakan parsial umumnya selesai dalam 14–30 hari kerja setelah dokumen lengkap dan survei loss adjustor selesai. Klaim besar seperti kebakaran total bisa memakan waktu lebih lama. Laporan kejadian sebaiknya dilakukan maksimal 3×24 jam setelah musibah terjadi." },
    },
    {
      "@type": "Question",
      name: "Apa bedanya konsultan asuransi independen dengan agen perusahaan asuransi?",
      acceptedAnswer: { "@type": "Answer", text: "Agen perusahaan asuransi hanya menjual produk dari satu perusahaan. Konsultan independen seperti Asuransi Bekasi tidak terikat satu perusahaan manapun, dapat membandingkan produk dari berbagai insurer berlisensi OJK, dan mendampingi klien sepanjang proses klaim." },
    },
  ],
};

const clusters = [
  { href: "/asuransi-properti/property-all-risk", icon: "🏢", title: "Property All Risk (PAR)", desc: "Proteksi komprehensif untuk gedung, pabrik, dan aset komersial bernilai tinggi dari semua risiko fisik yang tidak dikecualikan.", tags: ["Pabrik", "Gudang Besar", "Gedung Komersial"] },
  { href: "/asuransi-properti/kebakaran", icon: "🔥", title: "Asuransi Kebakaran", desc: "Jaminan standar FLEXAS untuk ruko, bangunan usaha, dan properti komersial skala kecil-menengah di Bekasi.", tags: ["Ruko & Toko", "Bangunan Usaha", "Kantor"] },
  { href: "/asuransi-properti/gudang", icon: "📦", title: "Asuransi Gudang", desc: "Perlindungan bangunan gudang beserta stok barang di dalamnya — untuk pelaku logistik dan distribusi Bekasi.", tags: ["Warehouse", "Cold Storage", "Distribusi"] },
  { href: "/asuransi-properti/pabrik", icon: "🏭", title: "Asuransi Pabrik", desc: "Perlindungan bangunan dan aset tetap pabrik untuk industri manufaktur di kawasan industri Bekasi.", tags: ["Jababeka", "MM2100", "EJIP & Delta Silicon"] },
  { href: "/asuransi-properti/rumah", icon: "🏡", title: "Asuransi Rumah", desc: "Paket perlindungan rumah tinggal — kebakaran, pencurian, hingga perluasan banjir untuk hunian di Bekasi.", tags: ["Rumah Tinggal", "Perumahan", "Debitur KPR"] },
];

const whyItems = [
  { icon: "🏭", title: "Paham Kawasan Industri Bekasi", desc: "Familiar dengan kebutuhan asuransi pabrik dan gudang di Jababeka, MM2100, EJIP, dan Delta Silicon — bukan hanya rumus premi generik." },
  { icon: "🌊", title: "Paham Risiko Banjir Musiman", desc: "Beberapa kawasan Bekasi rawan luapan air saat musim hujan. Kami analisis risiko lokasi sebelum merekomendasikan perluasan yang tepat." },
  { icon: "🎯", title: "Independen & Objektif", desc: "Tidak terikat satu perusahaan asuransi. Rekomendasi produk 100% berdasarkan kebutuhan dan kepentingan Anda." },
  { icon: "🤝", title: "Pendampingan Klaim Penuh", desc: "Kami dampingi proses klaim dari laporan awal hingga dana ganti rugi cair — bukan sekadar menjual polis lalu menghilang." },
];

export default function PropertiPage() {
  return (
    <ProdukLayout breadcrumbs={[{ label: "Asuransi Properti" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Properti · Bekasi
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Lindungi Properti Anda<br /><em className="not-italic text-gold">dari Rumah hingga Pabrik</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-8">
            Bekasi adalah rumah bagi ribuan hunian sekaligus salah satu kawasan industri terbesar di Indonesia. Dari rumah tinggal hingga pabrik di Jababeka dan MM2100, setiap jenis properti punya profil risiko yang berbeda — dan butuh perlindungan yang tepat sasaran, bukan sekadar polis generik.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat 5 Produk →</a>
          </div>
        </div>
      </section>

      {/* CLUSTER CARDS */}
      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">5 Solusi Asuransi Properti<br />untuk Bekasi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
      </section>

      {/* WHY LOCAL */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Konsultan yang Paham<br />Karakter Bekasi</h2>
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
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Asuransi Properti</h2>
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
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Properti Anda Terlalu Berharga<br />untuk Tidak Dilindungi</h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">Konsultasi gratis, analisis risiko lokasi, dan penawaran dari perusahaan asuransi berlisensi OJK — semua tanpa biaya.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
