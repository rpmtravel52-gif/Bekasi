import Link from "next/link";
import ProdukLayout from "./ProdukLayout";
import { KONTAK } from "@/lib/data";

export interface FaqItem { q: string; a: string; }
export interface JaminanItem { icon: string; label: string; desc: string; }
export interface VarianItem {
  icon: string;
  title: string;
  desc: string;
  manfaat: string[];
  cocok: string;
  link?: { href: string; label: string };
}
export interface SimulasiRow { label: string; value: string; }
export interface ProsesStep { step: string; icon: string; label: string; desc: string; }
export interface InternalLink { href: string; label: string; icon: string; }
export interface Breadcrumb { label: string; href?: string }

const DEFAULT_PROSES: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi", desc: "Ceritakan jenis aset, lokasi, dan kebutuhan perlindungan Anda. Bisa langsung via WhatsApp — respons cepat." },
  { step: "02", icon: "📋", label: "Analisis & Rekomendasi", desc: "Kami bantu hitung nilai pertanggungan yang tepat dan rekomendasikan produk sesuai profil risiko Anda." },
  { step: "03", icon: "📄", label: "Penawaran Resmi", desc: "Terima penawaran dari perusahaan asuransi terpercaya berlisensi OJK, lengkap dengan penjelasan klausul." },
  { step: "04", icon: "✅", label: "Polis Terbit", desc: "Polis resmi terbit setelah dokumen lengkap. Anda terlindungi sejak hari penerbitan polis." },
];

interface Props {
  breadcrumbs: Breadcrumb[];
  pillarHref: string;
  pillarLabel: string;
  heroEmoji: string;
  heroBadge: string;
  heroTitle: React.ReactNode;
  heroIntro: string;
  heroStats: { num: string; lbl: string }[];

  jaminanTitle: string;
  jaminanSubtitle: string;
  jaminanItems: JaminanItem[];

  pengecualianTitle?: string;
  pengecualianItems: string[];
  pengecualianNote?: string;

  varianTitle?: string;
  varianSubtitle?: string;
  varianItems?: VarianItem[];

  simulasiTitle: string;
  simulasiSubtitle: string;
  simulasiRows: SimulasiRow[];
  simulasiHighlight: { label: string; value: string; sublabel?: string };
  simulasiCatatan: string;
  simulasiWaMsg: string;

  syaratTitle?: string;
  syaratItems: string[];

  prosesItems?: ProsesStep[];

  faqItems: FaqItem[];

  internalLinks: InternalLink[];
  artikelLinks?: InternalLink[];

  ctaEmoji: string;
  ctaTitle: React.ReactNode;
  ctaDesc: string;
}

export default function ProdukDetailPage(props: Props) {
  const proses = props.prosesItems ?? DEFAULT_PROSES;

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqItems.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <ProdukLayout breadcrumbs={props.breadcrumbs}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">{props.heroEmoji}</div>
        <div className="relative z-10 max-w-3xl">
          <Link href={props.pillarHref} className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">
            ← {props.pillarLabel}
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>{props.heroBadge}
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            {props.heroTitle}
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">{props.heroIntro}</p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">
              💬 Konsultasi Gratis
            </a>
            <a href="#simulasi" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">
              Lihat Simulasi Premi →
            </a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10 flex-wrap">
            {props.heroStats.map(s => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-xl font-bold">{s.num}</div>
                <div className="text-white/45 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIJAMIN ──────────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Yang Dijamin</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">{props.jaminanTitle}</h2>
            <p className="text-base text-[#64748B] max-w-[520px] mx-auto mt-3">{props.jaminanSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {props.jaminanItems.map(j => (
              <div key={j.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{j.icon}</div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-2">{j.label}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{j.desc}</p>
              </div>
            ))}
          </div>

          {/* Tidak Dijamin */}
          <div className="mt-10 bg-gold/8 border border-gold/20 rounded-xl p-6">
            <div className="font-heading text-navy font-bold text-base mb-4">
              ⚠️ {props.pengecualianTitle ?? "Yang Tidak Dijamin (Pengecualian Umum)"}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {props.pengecualianItems.map(exc => (
                <div key={exc} className="flex gap-2 text-sm text-[#475569]">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>{exc}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#64748B] mt-4 leading-relaxed">
              {props.pengecualianNote ?? "Kami selalu menjelaskan seluruh klausul pengecualian secara rinci dan transparan sebelum Anda memutuskan membeli polis."}
            </p>
          </div>
        </div>
      </section>

      {/* ── VARIAN PRODUK (opsional) ────────────────────────────────────── */}
      {props.varianItems && props.varianItems.length > 0 && (
        <section className="py-16 px-[5vw] bg-white">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Varian Produk</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">{props.varianTitle}</h2>
            {props.varianSubtitle && <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">{props.varianSubtitle}</p>}
          </div>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {props.varianItems.map(v => (
              <div key={v.title} className="bg-cream rounded-card p-8 border border-black/6 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 items-start">
                <div className="text-center md:text-left"><div className="text-[3rem]">{v.icon}</div></div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1.15rem] mb-2">{v.title}</div>
                  <p className="text-sm leading-relaxed text-[#64748B] mb-4">{v.desc}</p>
                  <ul className="flex flex-col gap-2 mb-4">
                    {v.manfaat.map(m => (
                      <li key={m} className="flex gap-2 text-base text-navy2">
                        <span className="text-gold flex-shrink-0 font-bold">✓</span>{m}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="bg-white rounded-lg px-4 py-2.5 text-xs text-[#64748B] border border-black/5 flex-1">
                      <strong className="text-navy">Cocok untuk:</strong> {v.cocok}
                    </div>
                    {v.link && (
                      <Link href={v.link.href} className="text-gold text-xs font-semibold hover:underline no-underline flex items-center whitespace-nowrap">
                        {v.link.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── SIMULASI PREMI ───────────────────────────────────────────────── */}
      <section id="simulasi" className="py-16 px-[5vw] bg-navy">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-2">Simulasi Premi</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-white">{props.simulasiTitle}</h2>
          <p className="text-white/75 text-base max-w-[520px] mx-auto mt-3">{props.simulasiSubtitle}</p>
        </div>
        <div className="bg-white/5 border border-gold/20 rounded-[20px] p-6 sm:p-8 max-w-[640px] mx-auto">
          <div className="flex flex-col gap-0">
            {props.simulasiRows.map((r, i) => (
              <div key={r.label} className={`py-3 flex justify-between items-center gap-4 ${i < props.simulasiRows.length - 1 ? "border-b border-white/8" : ""}`}>
                <span className="text-white/70 text-sm">{r.label}</span>
                <span className="text-white font-semibold text-[0.95rem] text-right">{r.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gold/15 border border-gold/40 rounded-lg p-4">
            <div className="text-gold2 text-sm font-semibold mb-1">{props.simulasiHighlight.label}</div>
            <div className="text-gold font-heading text-xl font-bold leading-tight">{props.simulasiHighlight.value}</div>
            {props.simulasiHighlight.sublabel && <div className="text-gold2/80 text-sm mt-0.5">{props.simulasiHighlight.sublabel}</div>}
          </div>
          <p className="text-white/60 text-xs mt-4 leading-relaxed">* {props.simulasiCatatan}</p>
          <a href={`https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(props.simulasiWaMsg)}`} className="block text-center mt-5 bg-[#25D366] text-white py-3.5 rounded-lg font-bold text-[0.95rem] no-underline hover:opacity-90 transition-opacity">
            💬 Dapatkan Penawaran Resmi Sesuai Kebutuhan Anda
          </a>
        </div>
      </section>

      {/* ── SYARAT & DOKUMEN ────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Persyaratan Polis</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">{props.syaratTitle ?? "Dokumen & Syarat yang Perlu Disiapkan"}</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-card border border-black/6 p-6 sm:p-8">
          <ul className="flex flex-col gap-3">
            {props.syaratItems.map(s => (
              <li key={s} className="flex gap-3 items-start text-[1rem] leading-[1.7] text-navy2">
                <span className="text-gold font-bold flex-shrink-0 mt-0.5">📄</span>{s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROSES ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Alur</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Proses Mudah,<br />Polis Cepat Terbit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {proses.map(p => (
            <div key={p.step} className="bg-cream rounded-card p-6 text-center border border-black/5 relative">
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">{p.step}</div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan yang<br />Sering Ditanyakan</h2>
        </div>
        <div className="max-w-[740px] mx-auto">
          {props.faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="max-w-[740px] mx-auto mt-8 bg-navy rounded-xl p-6 text-center">
          <div className="font-heading text-white text-base font-semibold mb-2">Masih Ada Pertanyaan?</div>
          <p className="text-white/70 text-sm mb-4">Konsultasikan langsung dengan Pak Rio — gratis, cepat respons.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">
            💬 Tanya via WhatsApp
          </a>
        </div>
      </section>

      {/* ── BACA JUGA (ARTIKEL) ─────────────────────────────────────────── */}
      {props.artikelLinks && props.artikelLinks.length > 0 && (
        <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">📖 Baca Juga</p>
            <div className="flex gap-3 flex-wrap">
              {props.artikelLinks.map(l => (
                <Link key={l.href} href={l.href} className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">
                  {l.icon} {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── INTERNAL LINKS ──────────────────────────────────────────────── */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            {props.internalLinks.map(l => (
              <Link key={l.href} href={l.href} className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">
                {l.icon} {l.label} →
              </Link>
            ))}
            <Link href={props.pillarHref} className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">
              ← Semua {props.pillarLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <div className="text-5xl mb-4">{props.ctaEmoji}</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">{props.ctaTitle}</h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">{props.ctaDesc}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 WhatsApp Pak Rio Sekarang
            </a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">
              ✉️ Kirim Email
            </a>
          </div>
        </div>
      </section>
    </ProdukLayout>
  );
}
