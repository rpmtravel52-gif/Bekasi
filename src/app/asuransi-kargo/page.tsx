import type { Metadata } from "next";
import Link from "next/link";
import ProdukLayout from "@/components/produk/ProdukLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kargo Bekasi – Kargo Darat & Marine Cargo (Laut/Udara)",
  description: "Konsultan asuransi kargo independen di Bekasi. Asuransi kargo darat untuk ekspedisi lokal dan Marine Cargo untuk impor-ekspor via laut/udara. Konsultasi gratis untuk pelaku usaha logistik kawasan industri Bekasi.",
  keywords: "asuransi kargo bekasi, marine cargo bekasi, asuransi pengiriman barang bekasi, asuransi ekspor impor bekasi, asuransi logistik jababeka",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-kargo" },
  openGraph: {
    title: "Asuransi Kargo Bekasi – Kargo Darat & Marine Cargo",
    description: "Solusi asuransi pengiriman barang darat, laut, dan udara untuk pelaku logistik di Bekasi. Konsultasi gratis.",
    url: "https://asuransibekasi.id/asuransi-kargo",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu asuransi kargo dan siapa yang membutuhkannya?",
      acceptedAnswer: { "@type": "Answer", text: "Asuransi kargo melindungi nilai barang yang sedang dalam proses pengiriman dari risiko kerusakan, kehilangan, atau kecelakaan selama transportasi. Dibutuhkan oleh pelaku usaha ekspedisi, distributor, importir, dan eksportir yang berbasis di kawasan industri Bekasi." },
    },
    {
      "@type": "Question",
      name: "Apa beda asuransi kargo darat dengan Marine Cargo?",
      acceptedAnswer: { "@type": "Answer", text: "Asuransi kargo darat menjamin barang yang dikirim via truk dalam wilayah domestik. Marine Cargo menjamin barang yang dikirim melalui jalur laut maupun udara, umumnya untuk kegiatan impor-ekspor internasional yang melibatkan risiko perjalanan lebih panjang dan kompleks." },
    },
    {
      "@type": "Question",
      name: "Siapa yang bertanggung jawab membeli asuransi kargo — pengirim atau penerima?",
      acceptedAnswer: { "@type": "Answer", text: "Tergantung terms perdagangan (Incoterms) yang disepakati, misalnya FOB, CIF, atau EXW. Pada CIF, penjual wajib mengasuransikan barang. Pada FOB, tanggung jawab beralih ke pembeli sejak barang naik ke kapal. Kami bantu jelaskan sesuai kontrak dagang Anda." },
    },
  ],
};

const clusters = [
  { href: "/asuransi-kargo/kargo-darat", icon: "📦", title: "Asuransi Kargo Darat", desc: "Perlindungan barang kiriman via truk dari risiko kecelakaan, pencurian, dan kerusakan selama perjalanan domestik.", tags: ["Ekspedisi Domestik", "Truk & Box", "Distribusi"] },
  { href: "/asuransi-kargo/marine-cargo", icon: "🚢", title: "Marine Cargo (Laut & Udara)", desc: "Proteksi pengiriman barang internasional melalui jalur laut dan udara untuk importir dan eksportir.", tags: ["Impor/Ekspor", "Laut", "Udara"] },
];

export default function KargoPage() {
  return (
    <ProdukLayout breadcrumbs={[{ label: "Asuransi Kargo" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Kargo · Bekasi
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Barang Anda Berpindah,<br /><em className="not-italic text-gold">Perlindungannya Tidak Boleh Tertinggal</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-8">
            Bekasi adalah simpul distribusi dan manufaktur ekspor-impor terbesar di Jabodetabek. Baik pengiriman domestik via truk maupun impor bahan baku dari luar negeri, setiap barang yang berpindah membawa risiko finansial yang layak dilindungi.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat 2 Produk →</a>
          </div>
        </div>
      </section>

      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">2 Solusi Asuransi Kargo<br />untuk Bekasi</h2>
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
          <Link href="/asuransi-surety-bond/custom-bond-ob23" className="inline-flex items-center gap-2 bg-cream border border-gold/30 text-navy text-sm font-semibold px-6 py-3 rounded-full hover:bg-gold/10 hover:border-gold transition-all no-underline">
            🛃 Importir? Cek juga Custom Bond OB23 untuk jaminan kepabeanan →
          </Link>
        </div>
      </section>

      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Asuransi Kargo</h2>
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
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Jangan Biarkan Kerugian Kargo<br />Menghambat Rantai Pasok Anda</h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">Konsultasi gratis, analisis risiko rute pengiriman, dan penawaran dari perusahaan asuransi berlisensi OJK.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
