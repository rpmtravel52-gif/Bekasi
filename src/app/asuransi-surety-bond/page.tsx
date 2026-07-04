import type { Metadata } from "next";
import Link from "next/link";
import ProdukLayout from "@/components/produk/ProdukLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Surety Bond Bekasi – Jaminan Tender, Pelaksanaan & Custom Bond",
  description: "Konsultan surety bond independen di Bekasi. Jaminan Penawaran, Pelaksanaan, Uang Muka, Pemeliharaan, hingga Custom Bond OB23 untuk kontraktor dan importir di kawasan industri Bekasi. Konsultasi gratis.",
  keywords: "surety bond bekasi, jaminan tender bekasi, bid bond bekasi, performance bond bekasi, custom bond ob23 bekasi, jaminan kepabeanan bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-surety-bond" },
  openGraph: {
    title: "Asuransi Surety Bond Bekasi – Jaminan Tender & Custom Bond",
    description: "Solusi jaminan proyek dan kepabeanan lengkap untuk kontraktor dan importir di Bekasi. Konsultasi gratis.",
    url: "https://asuransibekasi.id/asuransi-surety-bond",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu surety bond dan siapa yang membutuhkannya?",
      acceptedAnswer: { "@type": "Answer", text: "Surety bond adalah jaminan pihak ketiga yang menjamin satu pihak (biasanya kontraktor) akan memenuhi kewajibannya kepada pihak lain (pemberi kerja). Dibutuhkan oleh kontraktor yang mengikuti tender pemerintah/swasta, serta importir yang memerlukan jaminan kepabeanan." },
    },
    {
      "@type": "Question",
      name: "Apa urutan penggunaan jaminan dalam siklus proyek konstruksi?",
      acceptedAnswer: { "@type": "Answer", text: "Urutannya umumnya: Jaminan Penawaran (saat mengikuti tender) → Jaminan Uang Muka (jika menerima DP dari pemberi kerja) → Jaminan Pelaksanaan (selama masa konstruksi) → Jaminan Pemeliharaan (setelah proyek selesai, selama masa pemeliharaan)." },
    },
    {
      "@type": "Question",
      name: "Apa itu Custom Bond OB23?",
      acceptedAnswer: { "@type": "Answer", text: "Custom Bond OB23 adalah jaminan kepabeanan menggunakan formulir OB-23 sesuai ketentuan Direktorat Jenderal Bea dan Cukai, yang berfungsi sebagai pengganti pembayaran tunai bea masuk atau pajak impor sementara, sehingga importir tidak perlu menyetor dana tunai penuh di muka." },
    },
    {
      "@type": "Question",
      name: "Apa beda surety bond dengan bank garansi?",
      acceptedAnswer: { "@type": "Answer", text: "Surety bond diterbitkan oleh perusahaan asuransi/penjaminan, sementara bank garansi diterbitkan oleh bank. Surety bond umumnya tidak memerlukan collateral (jaminan aset) sebesar bank garansi, sehingga lebih ringan bagi cash flow kontraktor." },
    },
  ],
};

const clusters = [
  { href: "/asuransi-surety-bond/jaminan-penawaran", icon: "📋", title: "Jaminan Penawaran (Bid Bond)", desc: "Jaminan bagi peserta tender bahwa kontraktor akan melaksanakan kontrak jika menang.", tags: ["Tender", "Lelang Proyek"] },
  { href: "/asuransi-surety-bond/jaminan-pelaksanaan", icon: "🤝", title: "Jaminan Pelaksanaan (Performance Bond)", desc: "Menjamin kontraktor menyelesaikan proyek sesuai kontrak yang disepakati.", tags: ["Masa Konstruksi", "Wajib Proyek Pemerintah"] },
  { href: "/asuransi-surety-bond/jaminan-uang-muka", icon: "💰", title: "Jaminan Uang Muka (Advance Payment Bond)", desc: "Jaminan atas uang muka yang diberikan pemberi kerja kepada kontraktor.", tags: ["Uang Muka Proyek", "DP Kontraktor"] },
  { href: "/asuransi-surety-bond/jaminan-pemeliharaan", icon: "🔧", title: "Jaminan Pemeliharaan (Maintenance Bond)", desc: "Jaminan perbaikan cacat/kerusakan selama masa pemeliharaan setelah proyek diserahterimakan.", tags: ["Pasca Proyek", "Masa Pemeliharaan"] },
  { href: "/asuransi-surety-bond/custom-bond-ob23", icon: "🛃", title: "Custom Bond OB23", desc: "Jaminan kepabeanan formulir OB-23 sebagai pengganti pembayaran tunai bea masuk/pajak impor.", tags: ["Importir", "Bea Cukai"] },
];

export default function SuretyBondPage() {
  return (
    <ProdukLayout breadcrumbs={[{ label: "Surety Bond" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Surety Bond · Bekasi
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Jaminan yang Tepat<br /><em className="not-italic text-gold">di Setiap Fase Proyek Anda</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-8">
            Dari mengikuti tender hingga masa pemeliharaan proyek selesai, setiap fase membutuhkan jenis jaminan yang berbeda. Kami juga membantu importir di kawasan industri Bekasi dengan jaminan kepabeanan Custom Bond OB23 — lengkap dalam satu konsultasi.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat 5 Produk →</a>
          </div>
        </div>
      </section>

      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">5 Jenis Jaminan<br />untuk Proyek & Impor</h2>
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

      {/* SIKLUS PROYEK */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Alur Penggunaan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Siklus Jaminan<br />dalam Sebuah Proyek</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { step: "1", label: "Ikut Tender", produk: "Jaminan Penawaran" },
            { step: "2", label: "Terima Uang Muka", produk: "Jaminan Uang Muka" },
            { step: "3", label: "Laksanakan Proyek", produk: "Jaminan Pelaksanaan" },
            { step: "4", label: "Masa Pemeliharaan", produk: "Jaminan Pemeliharaan" },
          ].map(s => (
            <div key={s.step} className="bg-white rounded-card p-5 border border-black/6 text-center">
              <div className="font-heading text-gold text-2xl font-bold mb-1">{s.step}</div>
              <div className="text-navy font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-[#64748B] text-xs">{s.produk}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Surety Bond</h2>
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

      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">Mulai Sekarang</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Jaminan Tepat, Proyek Berjalan Lancar</h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">Konsultasi gratis untuk kebutuhan jaminan proyek atau kepabeanan Anda di Bekasi.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
