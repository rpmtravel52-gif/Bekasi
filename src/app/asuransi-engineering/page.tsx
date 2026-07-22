import type { Metadata } from "next";
import Link from "next/link";
import ProdukLayout from "@/components/produk/ProdukLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Engineering Bekasi – CAR & CECR",
  description: "Praktisi asuransi engineering independen di Bekasi. Contractor All Risk (CAR) untuk proyek konstruksi dan CECR untuk infrastruktur sipil. Konsultasi gratis.",
  keywords: "asuransi engineering bekasi, contractor all risk bekasi, CAR bekasi, CECR bekasi, asuransi konstruksi bekasi, asuransi proyek sipil bekasi",
  alternates: { canonical: "https://asuransibekasi.biz.id/asuransi-engineering" },
  openGraph: {
    title: "Asuransi Engineering Bekasi – CAR & CECR",
    description: "Solusi asuransi proyek konstruksi dan infrastruktur sipil di Bekasi. Konsultasi gratis, analisis risiko proyek.",
    url: "https://asuransibekasi.biz.id/asuransi-engineering",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu asuransi engineering dan siapa yang membutuhkannya?",
      acceptedAnswer: { "@type": "Answer", text: "Asuransi engineering melindungi proyek konstruksi dan infrastruktur sipil dari risiko kerusakan fisik selama masa pembangunan maupun setelah selesai. Dibutuhkan oleh kontraktor, developer, dan pemilik proyek yang membangun gedung, jalan, jembatan, atau fasilitas industri di Bekasi." },
    },
    {
      "@type": "Question",
      name: "Apa bedanya Contractor All Risk (CAR) dengan CECR?",
      acceptedAnswer: { "@type": "Answer", text: "CAR menjamin proyek konstruksi selama masa pembangunan berlangsung, dari mulai pekerjaan hingga serah terima. CECR (Civil Engineering Completed Risks) menjamin proyek sipil yang telah selesai dibangun, biasanya pada masa pemeliharaan (maintenance period) atau operasional awal setelah serah terima." },
    },
    {
      "@type": "Question",
      name: "Apakah proyek di kawasan industri Bekasi memerlukan asuransi engineering?",
      acceptedAnswer: { "@type": "Answer", text: "Sangat direkomendasikan, terutama untuk proyek pembangunan pabrik, gudang, atau infrastruktur di kawasan industri seperti Jababeka, MM2100, dan EJIP, mengingat nilai proyek dan kompleksitas konstruksi yang tinggi." },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim asuransi engineering?",
      acceptedAnswer: { "@type": "Answer", text: "Klaim engineering umumnya memerlukan survei teknis oleh loss adjustor untuk menilai penyebab dan besaran kerusakan. Proses dari laporan hingga penyelesaian klaim bisa memakan waktu 14–60 hari tergantung kompleksitas proyek." },
    },
  ],
};

const clusters = [
  { href: "/asuransi-engineering/contractor-all-risk", icon: "🏗️", title: "Contractor All Risk (CAR)", desc: "Perlindungan menyeluruh untuk proyek konstruksi sipil dari awal hingga serah terima, termasuk material, peralatan, dan tanggung jawab pihak ketiga.", tags: ["Konstruksi Aktif", "Gedung & Pabrik", "Infrastruktur"] },
  { href: "/asuransi-engineering/cecr", icon: "🏛️", title: "CECR", desc: "Civil Engineering Completed Risks — perlindungan untuk proyek sipil yang telah selesai dibangun, pada masa pemeliharaan dan operasional awal.", tags: ["Pasca Konstruksi", "Masa Pemeliharaan", "Infrastruktur Sipil"] },
];

const whyItems = [
  { icon: "🏭", title: "Paham Proyek Kawasan Industri", desc: "Familiar dengan kebutuhan asuransi proyek konstruksi pabrik dan infrastruktur di Jababeka, MM2100, dan EJIP." },
  { icon: "📐", title: "Analisis Risiko Teknis", desc: "Membantu Anda menentukan nilai pertanggungan proyek yang tepat berdasarkan nilai kontrak dan kompleksitas pekerjaan." },
  { icon: "🎯", title: "Independen & Objektif", desc: "Tidak terikat satu perusahaan asuransi. Rekomendasi produk 100% berdasarkan kebutuhan proyek Anda." },
  { icon: "🤝", title: "Pendampingan Klaim Penuh", desc: "Klaim engineering seringkali kompleks secara teknis — kami dampingi dari investigasi awal hingga penyelesaian." },
];

export default function EngineeringPage() {
  return (
    <ProdukLayout breadcrumbs={[{ label: "Asuransi Engineering" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Engineering · Bekasi
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Proyek Konstruksi Anda<br /><em className="not-italic text-gold">Layak Dilindungi Sejak Hari Pertama</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-8">
            Dari pembangunan pabrik di Jababeka hingga infrastruktur sipil di seluruh Bekasi, setiap proyek konstruksi membawa risiko fisik yang besar — mulai dari kerusakan material, kecelakaan kerja, hingga klaim pihak ketiga. Asuransi engineering melindungi investasi proyek Anda dari awal pembangunan hingga masa pemeliharaan pasca serah terima.
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
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">2 Solusi Asuransi Engineering<br />untuk Proyek di Bekasi</h2>
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
          <Link href="/asuransi-machinery" className="inline-flex items-center gap-2 bg-cream border border-gold/30 text-navy text-sm font-semibold px-6 py-3 rounded-full hover:bg-gold/10 hover:border-gold transition-all no-underline">
            🔧 Cari asuransi mesin & alat berat? Lihat Cluster Machinery →
          </Link>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Praktisi yang Paham<br />Proyek Konstruksi Bekasi</h2>
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
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Asuransi Engineering</h2>
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
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Proyek Bernilai Besar<br />Butuh Proteksi yang Setara</h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">Konsultasi gratis, analisis risiko proyek, dan penawaran dari perusahaan asuransi berlisensi OJK.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
