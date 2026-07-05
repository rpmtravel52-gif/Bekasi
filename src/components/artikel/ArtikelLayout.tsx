import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import type { ArtikelMeta } from "@/lib/artikel";

const HERO_THEMES: Record<ArtikelMeta["heroColor"], { bg: string; badgeBg: string; badgeText: string; accent: string }> = {
  navy:     { bg: "bg-navy",       badgeBg: "bg-gold/10 border-gold/30",      badgeText: "text-gold3",   accent: "text-gold" },
  blue:     { bg: "bg-[#0B3555]",  badgeBg: "bg-sky-400/10 border-sky-400/30", badgeText: "text-sky-200", accent: "text-sky-300" },
  amber:    { bg: "bg-[#3A2A14]",  badgeBg: "bg-amber-400/10 border-amber-400/30", badgeText: "text-amber-200", accent: "text-amber-300" },
  charcoal: { bg: "bg-[#22242B]",  badgeBg: "bg-orange-400/10 border-orange-400/30", badgeText: "text-orange-200", accent: "text-orange-300" },
  green:    { bg: "bg-[#12332A]",  badgeBg: "bg-emerald-400/10 border-emerald-400/30", badgeText: "text-emerald-200", accent: "text-emerald-300" },
};

interface Props {
  meta: ArtikelMeta;
  breadcrumbLabel: string;
  heroBadge: string;
  heroTitle: React.ReactNode;
  heroDek: string;
  children: React.ReactNode;
}

function formatTanggal(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArtikelLayout({ meta, breadcrumbLabel, heroBadge, heroTitle, heroDek, children }: Props) {
  const theme = HERO_THEMES[meta.heroColor];

  return (
    <>
      <Header />
      <article className="pt-[68px]">
        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <Link href="/asuransi-properti" className="hover:text-gold transition-colors no-underline">{meta.clusterLabel}</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">{breadcrumbLabel}</span>
          </div>
        </div>

        {/* HERO */}
        <header className={`${theme.bg} py-16 px-[5vw] relative overflow-hidden`}>
          <div className="relative z-10 max-w-3xl">
            <div className={`inline-flex items-center gap-2 border text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase ${theme.badgeBg} ${theme.badgeText}`}>
              <span className={`text-[0.5rem] ${theme.accent}`}>◆</span>{heroBadge}
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.6vw,3rem)] text-white leading-[1.2] mb-4">
              {heroTitle}
            </h1>
            <p className="text-white/80 text-base leading-[1.8] max-w-[620px]">{heroDek}</p>

            {/* EEAT byline */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/15">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-heading text-white text-sm font-bold flex-shrink-0">
                RD
              </div>
              <div className="text-sm">
                <div className="text-white font-semibold">Rio Diansyah</div>
                <div className="text-white/55 text-xs">
                  Konsultan Asuransi Kerugian, Bekasi · Dipublikasikan {formatTanggal(meta.publishedDate)}
                  {meta.updatedDate !== meta.publishedDate && ` · Diperbarui ${formatTanggal(meta.updatedDate)}`}
                  {" · "}{meta.readTime} baca
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="max-w-[720px] mx-auto px-[5vw] py-14">
          <div className="prose-artikel">{children}</div>
        </div>
      </article>
      <Footer />
    </>
  );
}
