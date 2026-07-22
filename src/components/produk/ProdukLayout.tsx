import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface Breadcrumb { label: string; href?: string }

interface Props {
  children: React.ReactNode;
  breadcrumbs: Breadcrumb[];
}

const SITE_URL = "https://asuransibekasi.biz.id";

export default function ProdukLayout({ children, breadcrumbs }: Props) {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: b.label,
        ...(b.href ? { item: `${SITE_URL}${b.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <div className="pt-[68px]">
        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-gold/60">›</span>
                {b.href
                  ? <Link href={b.href} className="hover:text-gold transition-colors no-underline">{b.label}</Link>
                  : <span className="text-navy font-semibold">{b.label}</span>
                }
              </span>
            ))}
          </div>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
