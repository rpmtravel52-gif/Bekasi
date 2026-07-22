import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_KARGO, NOTE_KARGO } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Marine Cargo Insurance Bekasi – Impor Ekspor Laut & Udara",
  description: "Marine Cargo Insurance untuk importir dan eksportir di Bekasi. Lindungi barang kiriman via jalur laut dan udara internasional. Konsultasi gratis.",
  keywords: "marine cargo insurance bekasi, asuransi impor ekspor bekasi, asuransi kargo laut bekasi, asuransi kargo udara bekasi",
  alternates: { canonical: "https://asuransibekasi.biz.id/asuransi-kargo/marine-cargo" },
};

export default function MarineCargoPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Kargo", href: "/asuransi-kargo" }, { label: "Marine Cargo" }]}
      pillarHref="/asuransi-kargo"
      pillarLabel="Asuransi Kargo"
      heroEmoji="🚢"
      heroBadge="Marine Cargo Insurance"
      heroTitle={<>Amankan Barang Impor-Ekspor<br /><em className="not-italic text-gold">Melalui Laut & Udara</em></>}
      heroIntro="Marine Cargo Insurance melindungi barang yang dikirim melalui jalur laut maupun udara internasional dari risiko kerusakan, kehilangan, dan kecelakaan selama pelayaran atau penerbangan. Penting bagi importir bahan baku dan eksportir produk manufaktur yang berbasis di kawasan industri Bekasi seperti Jababeka, MM2100, dan EJIP."
      heroStats={[
        { num: "Laut & Udara", lbl: "Dua Jalur Sekaligus" },
        { num: "ICC A/B/C", lbl: "Institute Cargo Clauses" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Marine Cargo"
      jaminanSubtitle="Mengacu pada standar internasional Institute Cargo Clauses (ICC) yang umum digunakan dalam perdagangan global."
      jaminanItems={[
        { icon: "🌊", label: "Institute Cargo Clauses A (All Risk)", desc: "Cakupan paling luas — menjamin semua risiko kerusakan fisik kecuali yang dikecualikan secara eksplisit." },
        { icon: "⚓", label: "Institute Cargo Clauses B", desc: "Menjamin risiko-risiko tertentu seperti kebakaran, kandas, tenggelam, dan gempa bumi yang disebutkan secara spesifik." },
        { icon: "🔥", label: "Institute Cargo Clauses C", desc: "Cakupan paling dasar, hanya menjamin risiko utama seperti kebakaran dan kecelakaan alat angkut." },
        { icon: "✈️", label: "Perluasan Kargo Udara", desc: "Klausul khusus untuk pengiriman via pesawat, termasuk risiko selama proses handling di bandara." },
        { icon: "📋", label: "General Average Contribution", desc: "Jaminan atas kontribusi kerugian bersama jika kapal harus membuang sebagian muatan demi keselamatan pelayaran." },
        { icon: "🏭", label: "Perluasan War & Strikes (SRCC)", desc: "Perluasan opsional untuk risiko perang, mogok kerja, dan kerusuhan di negara asal/tujuan." },
      ]}
      pengecualianItems={[
        "Kerusakan akibat pengepakan yang tidak sesuai standar pengiriman internasional",
        "Keterlambatan pengiriman semata tanpa kerusakan fisik barang",
        "Kerugian akibat kebangkrutan atau kegagalan finansial pihak pengangkut",
        "Barang yang secara inheren mudah rusak tanpa deklarasi khusus",
        "Perang dan risiko politik (kecuali perluasan War & Strikes)",
        "Kerugian yang timbul dari pelanggaran ketentuan ekspor-impor",
      ]}
      simulasiTitle="Contoh Simulasi Premi Marine Cargo"
      simulasiSubtitle="Ilustrasi untuk impor bahan baku manufaktur dari Asia ke Bekasi via jalur laut. Premi final tergantung rute, nilai, dan jenis barang."
      simulasiRows={[
        { label: "Nilai Barang (CIF)", value: "USD 200.000 (± Rp 3.200.000.000)" },
        { label: "Jenis Barang", value: "Bahan Baku Manufaktur" },
        { label: "Rute", value: "Asia Tenggara – Pelabuhan Tanjung Priok" },
        { label: "Klausul", value: "Institute Cargo Clauses A" },
        { label: "Rate Estimasi", value: "0,08% – 0,25% dari nilai CIF" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi per Pengiriman", value: "Rp 2.560.000 – Rp 8.000.000", sublabel: "untuk nilai barang ± Rp 3,2 miliar" }}
      simulasiCatatan="Rate dipengaruhi jenis barang, rute pelayaran/penerbangan, jenis kemasan (kontainer/curah), dan klausul ICC yang dipilih. Untuk importir rutin, tersedia skema polis tahunan (open cover)."
      simulasiWaMsg="Halo Nur, saya ingin konsultasi Marine Cargo Insurance untuk impor/ekspor barang usaha saya. Mohon info lebih lanjut."
      prosesItems={PROSES_KARGO}
      pengecualianNote={NOTE_KARGO}
      syaratItems={[
        "Fotokopi identitas & legalitas perusahaan importir/eksportir (NIB/API-U/API-P)",
        "Invoice dan packing list barang yang dikirim",
        "Bill of Lading (B/L) atau Airway Bill (AWB)",
        "Rute pelayaran/penerbangan dan pelabuhan/bandara muat-bongkar",
        "Incoterms yang disepakati dalam kontrak dagang (FOB, CIF, EXW, dll.)",
        "Riwayat klaim marine cargo sebelumnya (jika ada)",
      ]}
      faqItems={[
        { q: "Apa itu Institute Cargo Clauses (ICC) A, B, dan C?", a: "ICC adalah klausul standar internasional untuk asuransi marine cargo. Klausul A memberikan cakupan paling luas (all risk), B mencakup risiko tertentu yang lebih spesifik, dan C adalah cakupan paling dasar. Pilihan klausul memengaruhi premi dan luas jaminan." },
        { q: "Siapa yang wajib membeli asuransi dalam skema CIF dan FOB?", a: "Pada Incoterms CIF (Cost, Insurance, Freight), penjual wajib menyediakan asuransi untuk pembeli. Pada FOB (Free on Board), tanggung jawab asuransi beralih ke pembeli sejak barang naik ke kapal di pelabuhan asal." },
        { q: "Apakah barang yang dikirim via udara juga perlu Marine Cargo?", a: "Ya, istilah 'Marine Cargo' dalam industri asuransi tetap mencakup pengiriman udara internasional, meski namanya mengacu pada 'marine'. Klausul khusus kargo udara akan diterapkan sesuai jenis pengiriman." },
        { q: "Bagaimana proses klaim jika kerusakan ditemukan setelah barang tiba?", a: "Segera lakukan survei kerusakan (dengan surveyor independen jika perlu) dan dokumentasikan kondisi barang saat tiba, lalu ajukan klaim dengan melampirkan B/L atau AWB, invoice, dan bukti kerusakan sesegera mungkin." },
      ]}
      internalLinks={[
        { href: "/asuransi-kargo/kargo-darat", label: "Kargo Darat", icon: "📦" },
        { href: "/asuransi-surety-bond/custom-bond-ob23", label: "Custom Bond OB23", icon: "🛃" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
      ]}
      artikelLinks={[
        { href: "/artikel/panduan-marine-cargo-importir-bahan-baku-kawasan-industri-bekasi", label: "Panduan Marine Cargo Importir Bahan Baku", icon: "🚢" },
        { href: "/artikel/incoterms-fob-vs-cif-siapa-wajib-asuransikan-barang-impor", label: "Incoterms FOB vs CIF", icon: "📄" },
      ]}
      ctaEmoji="🚢"
      ctaTitle="Impor-Ekspor Anda Layak Perlindungan Global Standard"
      ctaDesc="Konsultasikan kebutuhan Marine Cargo Insurance Anda — gratis, sesuai rute dan jenis barang Anda."
    />
  );
}
