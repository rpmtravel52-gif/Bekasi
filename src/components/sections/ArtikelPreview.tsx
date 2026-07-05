import Link from "next/link";
import { ARTIKEL_LIST } from "@/lib/artikel";

const DOT: Record<string, string> = {
  navy: "bg-gold", blue: "bg-sky-400", amber: "bg-amber-400", charcoal: "bg-orange-400", green: "bg-emerald-400",
};

export default function ArtikelPreview() {
  const items = ARTIKEL_LIST.slice(0, 3);
  return (
    <section id="artikel" className="py-[5.5rem] px-[5vw] bg-cream">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Artikel & Edukasi</div>
          <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Studi Kasus &<br />Panduan Asuransi Bekasi</h2>
        </div>
        <Link href="/artikel" className="text-gold font-semibold text-sm no-underline hover:underline whitespace-nowrap">Lihat semua artikel →</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map(a => (
          <Link key={a.slug} href={`/artikel/${a.slug}`} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(13,33,55,0.1)] hover:border-gold/25 transition-all no-underline group">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${DOT[a.heroColor]}`} />
              <span className="text-xs font-bold tracking-widest uppercase text-[#64748B]">{a.clusterLabel}</span>
            </div>
            <div className="font-heading text-navy font-bold text-[1.02rem] mb-2 leading-snug group-hover:text-gold transition-colors">{a.title}</div>
            <p className="text-sm leading-relaxed text-[#64748B] mb-3">{a.excerpt}</p>
            <div className="text-xs text-[#94A3B8]">{a.readTime} baca</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
