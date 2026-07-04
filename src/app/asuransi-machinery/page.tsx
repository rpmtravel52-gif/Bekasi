import type { Metadata } from "next";
import Link from "next/link";
import ProdukLayout from "@/components/produk/ProdukLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Machinery Bekasi – Machinery Breakdown & Alat Berat (CPM)",
  description: "Konsultan asuransi mesin dan alat berat independen di Bekasi. Machinery Breakdown untuk mesin produksi dan Asuransi Alat Berat (CPM) untuk excavator, crane, dan forklift. Konsultasi gratis.",
  keywords: "asuransi machinery bekasi, machinery breakdown bekasi, asuransi alat berat bekasi, asuransi excavator bekasi, asuransi crane bekasi, CPM insurance bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-machinery" },
  openGraph: {
    title: "Asuransi Machinery Bekasi – Machinery Breakdown & Alat Berat (CPM)",
    description: "Solusi asuransi mesin produksi dan alat berat untuk industri di Bekasi. Konsultasi gratis, analisis risiko mekanis.",
    url: "https://asuransibekasi.id/asuransi-machinery",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu asuransi machinery dan siapa yang membutuhkannya?",
      acceptedAnswer: { "@type": "Answer", text: "Asuransi machinery melindungi mesin produksi dan alat berat dari kerusakan mekanis atau elektris mendadak yang tidak disebabkan oleh kebakaran atau bencana alam. Dibutuhkan oleh pabrik manufaktur, kontraktor, dan perusahaan yang mengoperasikan alat berat di kawasan industri Bekasi." },
    },
    {
      "@type": "Question",
      name: "Apa bedanya Machinery Breakdown dengan Asuransi Alat Berat (CPM)?",
      acceptedAnswer: { "@type": "Answer", text: "Machinery Breakdown menjamin mesin produksi yang terpasang tetap di pabrik dari kegagalan mekanis/elektris. Asuransi Alat Berat (Contractor's Plant & Machinery/CPM) menjamin alat berat yang bergerak dan digunakan di lokasi proyek atau pabrik, seperti excavator, crane, dan forklift, dari kerusakan fisik dan kegagalan mekanis." },
    },
    {
      "@type": "Question",
      name: "Apakah alat berat yang disewa juga bisa diasuransikan?",
      acceptedAnswer: { "@type": "Answer", text: "Bisa. Baik pemilik alat berat maupun penyewa dapat mengasuransikan alat berat yang digunakan, tergantung kesepakatan tanggung jawab yang tercantum dalam kontrak sewa." },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim asuransi machinery?",
      acceptedAnswer: { "@type": "Answer", text: "Klaim machinery memerlukan investigasi teknis oleh engineer untuk menentukan penyebab kerusakan. Proses dari laporan hingga penyelesaian klaim umumnya 14–45 hari, tergantung kompleksitas mesin dan ketersediaan spare part." },
    },
  ],
};

const clusters = [
  { href: "/asuransi-machinery/machinery-breakdown", icon: "🔧", title: "Machinery Breakdown (MB)", desc: "Perlindungan mesin produksi dari kerusakan mendadak akibat gangguan mekanis atau elektris di dalam pabrik.", tags: ["Mesin Produksi", "Pabrik", "Instalasi Tetap"] },
  { href: "/asuransi-machinery/alat-berat", icon: "🚜", title: "Asuransi Alat Berat (CPM)", desc: "Contractor's Plant & Machinery — perlindungan alat berat seperti excavator, crane, dan forklift dari kerusakan fisik dan mekanis.", tags: ["Excavator", "Crane", "Forklift"] },
];

const whyItems = [
  { icon: "🏭", title: "Paham Mesin Industri Bekasi", desc: "Familiar dengan jenis mesin produksi dan alat berat yang umum digunakan di kawasan industri Jababeka, MM2100, dan EJIP." },
  { icon: "⚙️", title: "Analisis Risiko Mekanis", desc: "Membantu Anda menentukan cakupan yang tepat berdasarkan jenis, usia, dan intensitas penggunaan mesin/alat berat." },
  { icon: "🎯", title: "Independen & Objektif", desc: "Tidak terikat satu perusahaan asuransi. Rekomendasi produk 100% berdasarkan kebutuhan operasional Anda." },
  { icon: "🤝", title: "Pendampingan Klaim Penuh", desc: "Klaim machinery butuh investigasi teknis — kami dampingi dari laporan awal hingga penyelesaian." },
];

export default function MachineryPage() {
  return (
    <ProdukLayout breadcrumbs={[{ label: "Asuransi Machinery" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Machinery · Bekasi
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Mesin Berhenti,<br /><em className="not-italic text-gold">Produksi Ikut Berhenti</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-8">
            Di kawasan industri Bekasi, mesin produksi dan alat berat adalah tulang punggung operasional sehari-hari. Kerusakan mendadak pada mesin atau alat berat bisa menghentikan produksi dan proyek dalam sekejap. Asuransi machinery melindungi aset mekanis Anda dari risiko yang tidak dijamin oleh asuransi properti biasa.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat 2 Produk →</a>
          </div>
        </div>
      </section>

      {/* CLUSTER CARDS */}
      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">2 Solusi Asuransi Machinery<br />untuk Industri Bekasi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {clusters.map(c => (
            <Link key={c.href} href={c.href} className="bg-cream rounded-card p-7 border border-black/6 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(13,33,55,0.1)] hover:border-gold/25 transition-all no-underline group">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-heading text-navy font-bold text-[1.1rem] mb-2 group-hover:text-gold transition-colors">{c.title}</div>
              <p className="text-sm leading-relaxed text-[#64748B] mb-4">{c.desc}</p>
              <div className="flex gap-1.5 flex-wrap mb-3">
                {c.tags.map(t => <span key={t} className="bg-white border border-black/6 text-[#64748B] text-[0.7rem] px-2.5 py-1 rounded-full">{t}</span>)}
              </div>
              <span className="text-gold text-xs font-semibold">Pelajari lebih lanjut →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/asuransi-engineering" className="inline-flex items-center gap-2 bg-cream border border-gold/30 text-navy text-sm font-semibold px-6 py-3 rounded-full hover:bg-gold/10 hover:border-gold transition-all no-underline">
            🏗️ Sedang membangun proyek? Lihat Cluster Engineering →
          </Link>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Konsultan yang Paham<br />Mesin & Alat Berat Industri</h2>
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
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Asuransi Machinery</h2>
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
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Jangan Biarkan Mesin Rusak<br />Menghentikan Bisnis Anda</h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">Konsultasi gratis, analisis risiko mekanis, dan penawaran dari perusahaan asuransi berlisensi OJK.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
