import Link from "next/link";

interface ScopeLink {
  href: string;
  label: string;
}

interface Props {
  /** Satu kalimat: apa yang dibahas artikel ini (dan apa yang TIDAK). */
  scope: string;
  /** Halaman pemilik topik utama (produk) + artikel pendamping yang berbeda sudut pandang. */
  links: ScopeLink[];
}

export default function ScopeNote({ scope, links }: Props) {
  return (
    <aside className="not-prose my-8 rounded-card border border-gold/30 bg-cream p-5">
      <div className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-gold">Cakupan artikel ini</div>
      <p className="mb-3 text-sm leading-relaxed text-[#475569]">{scope}</p>
      <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-navy2 no-underline transition-colors hover:text-gold">
              → {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
