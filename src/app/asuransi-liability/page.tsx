import type { Metadata } from "next";
import Link from "next/link";
import ProdukLayout from "@/components/produk/ProdukLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Liability Bekasi – Public Liability & Limbah B3",
  description: "Konsultan asuransi liability independen di Bekasi. Public Liability untuk bisnis dan Asuransi Limbah B3 untuk perusahaan manufaktur di kawasan industri Jababeka, MM2100, EJIP, dan Delta Silicon. Konsultasi gratis.",
  keywords: "asuransi liability bekasi, public liability bekasi, asuransi limbah b3 bekasi, asuransi tanggung gugat bekasi, asuransi lingkungan industri bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-liability" },
  openGraph: {
    title: "Asuransi Liability Bekasi – Public Liability & Limbah B3",
    description: "Perlindungan tanggung jawab hukum untuk bisnis dan industri di Bekasi. Konsultasi gratis, analisis risiko sesuai jenis usaha.",
    url: "https://asuransibekasi.id/asuransi-liability",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu asuransi liability dan siapa yang membutuhkannya?",
      acceptedAnswer: { "@type": "Answer", text: "Asuransi liability melindungi bisnis dari tuntutan hukum dan ganti rugi pihak ketiga akibat cedera badan, kerusakan properti, atau pencemaran lingkungan yang timbul dari operasional usaha. Dibutuhkan oleh hampir semua jenis bisnis, terutama pabrik, ritel, kontraktor, dan perusahaan dengan aktivitas publik yang tinggi." },
    },
    {
      "@type": "Question",
      name: "Apa bedanya Public Liability dengan asuransi Limbah B3?",
      acceptedAnswer: { "@type": "Answer", text: "Public Liability menjamin tuntutan pihak ketiga akibat cedera atau kerusakan properti secara umum di lokasi usaha. Asuransi Limbah B3 lebih spesifik — menjamin tanggung jawab hukum akibat pencemaran lingkungan dari limbah bahan berbahaya dan beracun (B3) yang dihasilkan, diangkut, atau dikelola perusahaan." },
    },
    {
      "@type": "Question",
      name: "Apakah perusahaan di kawasan industri Bekasi wajib memiliki asuransi Limbah B3?",
      acceptedAnswer: { "@type": "Answer", text: "Tidak selalu diwajibkan secara hukum untuk semua jenis usaha, namun sangat direkomendasikan bagi perusahaan yang menghasilkan atau mengelola limbah B3 sesuai PP No. 22 Tahun 2021, mengingat besarnya potensi kerugian akibat tuntutan pencemaran lingkungan yang bisa mencapai miliaran rupiah." },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim asuransi liability?",
      acceptedAnswer: { "@type": "Answer", text: "Klaim liability umumnya membutuhkan proses investigasi lebih panjang dibanding asuransi properti karena melibatkan pembuktian tanggung jawab hukum. Proses dari laporan hingga penyelesaian klaim bisa memakan waktu 30–90 hari tergantung kompleksitas kasus." },
    },
  ],
};

const clusters = [
  { href: "/asuransi-liability/public-liability", icon: "👥", title: "Public Liability", desc: "Lindungi bisnis dari klaim pihak ketiga akibat cedera badan atau kerusakan properti yang terjadi di lokasi usaha atau akibat operasional perusahaan Anda.", tags: ["Ritel & Toko", "Pabrik", "Kontraktor"] },
  { href: "/asuransi-liability/limbah-b3", icon: "⚗️", title: "Asuransi Limbah B3", desc: "Perlindungan tanggung jawab hukum bagi perusahaan manufaktur yang menghasilkan, mengangkut, atau mengelola limbah bahan berbahaya dan beracun.", tags: ["Manufaktur", "Kimia", "Kawasan Industri"] },
];

const whyItems = [
  { icon: "🏭", title: "Paham Risiko Industri Bekasi", desc: "Familiar dengan profil risiko liability perusahaan manufaktur di Jababeka, MM2100, EJIP, dan Delta Silicon." },
  { icon: "📜", title: "Sesuai Regulasi Lingkungan", desc: "Memahami kewajiban pengelolaan limbah B3 sesuai PP No. 22 Tahun 2021 dan membantu Anda memilih proteksi yang relevan." },
  { icon: "🎯", title: "Independen & Objektif", desc: "Tidak terikat satu perusahaan asuransi. Rekomendasi produk 100% berdasarkan profil risiko bisnis Anda." },
  { icon: "🤝", title: "Pendampingan Klaim Penuh", desc: "Klaim liability seringkali kompleks — kami dampingi Anda dari investigasi awal hingga penyelesaian." },
];

export default function LiabilityPage() {
  return (
    <ProdukLayout breadcrumbs={[{ label: "Asuransi Liability" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Liability · Bekasi
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Lindungi Bisnis Anda dari<br /><em className="not-italic text-gold">Tuntutan Hukum Pihak Ketiga</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-8">
            Satu tuntutan hukum dari pihak ketiga bisa mengancam kelangsungan bisnis yang sudah dibangun bertahun-tahun. Dengan padatnya aktivitas industri manufaktur di Bekasi, risiko cedera pihak ketiga hingga pencemaran lingkungan bukan hal yang bisa diabaikan begitu saja.
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
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">2 Solusi Asuransi Liability<br />untuk Bisnis di Bekasi</h2>
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
      </section>

      {/* WHY LOCAL */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Konsultan yang Paham<br />Risiko Industri Bekasi</h2>
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
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Asuransi Liability</h2>
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
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Satu Tuntutan Hukum Bisa<br />Mengancam Bisnis Anda</h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">Konsultasi gratis, analisis risiko sesuai jenis usaha, dan penawaran dari perusahaan asuransi berlisensi OJK.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
