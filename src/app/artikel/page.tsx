import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ARTIKEL_LIST } from "@/lib/artikel";

export const metadata: Metadata = {
  title: "Artikel & Edukasi Asuransi Bekasi",
  description: "Panduan, studi kasus, dan edukasi asuransi kerugian untuk warga dan pelaku usaha di Bekasi — properti, kendaraan, liability, dan lainnya.",
  alternates: { canonical: "https://asuransibekasi.id/artikel" },
};

const HERO_DOT: Record<string, string> = {
  navy: "bg-gold", blue: "bg-sky-400", amber: "bg-amber-400", charcoal: "bg-orange-400", green: "bg-emerald-400",
};

export default function ArtikelIndexPage() {
  return (
    <>
      <Header />
      <div className="pt-[68px]">
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Artikel</span>
          </div>
        </div>

        <section className="bg-navy py-16 px-[5vw]">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">Artikel & Edukasi</div>
            <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2]">
              Panduan & Studi Kasus<br />Asuransi Kerugian di Bekasi
            </h1>
            <p className="text-white/80 text-base leading-[1.8] max-w-[560px] mt-4">
              Ditulis berdasarkan kejadian nyata di Bekasi — bukan teori generik — supaya Anda tahu risiko apa yang benar-benar relevan untuk lokasi dan jenis usaha Anda.
            </p>
          </div>
        </section>

        <section className="py-14 px-[5vw] bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {ARTIKEL_LIST.map(a => (
              <Link key={a.slug} href={`/artikel/${a.slug}`} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(13,33,55,0.1)] hover:border-gold/25 transition-all no-underline group">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${HERO_DOT[a.heroColor]}`} />
                  <span className="text-xs font-bold tracking-widest uppercase text-[#64748B]">{a.clusterLabel}</span>
                </div>
                <div className="font-heading text-navy font-bold text-[1.1rem] mb-2 leading-snug group-hover:text-gold transition-colors">{a.title}</div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-3">{a.excerpt}</p>
                <div className="text-xs text-[#94A3B8]">{a.readTime} baca</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
