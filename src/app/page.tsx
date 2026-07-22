import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Produk from "@/components/sections/Produk";
import Kalkulator from "@/components/sections/Kalkulator";
import ArtikelPreview from "@/components/sections/ArtikelPreview";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Why from "@/components/sections/Why";
import About from "@/components/sections/About";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Asuransi Bekasi – Praktisi Asuransi Kerugian Terpercaya",
  description: "Praktisi asuransi kerugian independen di Bekasi. Kendaraan, properti, pabrik & gudang kawasan industri, kargo, liability, surety bond. Konsultasi GRATIS.",
  alternates: { canonical: "https://asuransibekasi.biz.id" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Apakah konsultasi asuransi di sini berbayar?", "acceptedAnswer": { "@type": "Answer", "text": "Tidak, konsultasi sepenuhnya gratis. Kami menganalisis kebutuhan dan profil risiko Anda, lalu merekomendasikan produk yang paling sesuai — tanpa biaya apapun dan tanpa tekanan untuk membeli." } },
    { "@type": "Question", "name": "Apa perbedaan asuransi All Risk dan TLO untuk mobil?", "acceptedAnswer": { "@type": "Answer", "text": "All Risk (Comprehensive) menanggung kerusakan ringan hingga berat, kecelakaan, dan kehilangan kendaraan. TLO hanya menanggung kerugian jika kendaraan hilang dicuri atau rusak parah di atas 75% dari nilai kendaraan." } },
    { "@type": "Question", "name": "Apakah bisa mengasuransikan pabrik atau gudang di kawasan industri Bekasi?", "acceptedAnswer": { "@type": "Answer", "text": "Bisa. Kami melayani asuransi Property All Risk, Machinery Breakdown, dan liability untuk perusahaan manufaktur maupun pergudangan di kawasan seperti Jababeka, MM2100, EJIP, dan Delta Silicon." } },
    { "@type": "Question", "name": "Berapa lama proses penerbitan polis?", "acceptedAnswer": { "@type": "Answer", "text": "Untuk produk standar seperti asuransi kendaraan dan kebakaran rumah tinggal, polis dapat terbit dalam 1–2 hari kerja. Untuk produk korporasi seperti engineering insurance atau liability, prosesnya umumnya 3–7 hari kerja." } },
    { "@type": "Question", "name": "Bagaimana jika saya perlu mengajukan klaim?", "acceptedAnswer": { "@type": "Answer", "text": "Segera hubungi kami via WhatsApp setelah kejadian. Kami akan memandu langkah-langkah yang perlu dilakukan dan mendampingi seluruh proses klaim hingga dana ganti rugi cair." } },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Header />
      <main>
        <Hero />
        <Trust />
        <Produk />
        <Kalkulator />
        <ArtikelPreview />
        <ProblemSolution />
        <Why />
        <About />
        <Testimonial />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
