import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Asuransi Pabrik Bekasi – Jababeka, MM2100, EJIP & Delta Silicon",
  description: "Asuransi pabrik untuk industri manufaktur di kawasan industri Bekasi: Jababeka, MM2100, EJIP, Delta Silicon. Lindungi bangunan, aset tetap, dan fasilitas produksi Anda.",
  keywords: "asuransi pabrik bekasi, asuransi jababeka, asuransi mm2100, asuransi ejip, asuransi delta silicon, asuransi industri manufaktur bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-properti/pabrik" },
};

export default function PabrikPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Properti", href: "/asuransi-properti" }, { label: "Asuransi Pabrik" }]}
      pillarHref="/asuransi-properti"
      pillarLabel="Asuransi Properti"
      heroEmoji="🏭"
      heroBadge="Asuransi Pabrik"
      heroTitle={<>Proteksi Fasilitas Produksi<br /><em className="not-italic text-gold">di Kawasan Industri Bekasi</em></>}
      heroIntro="Bekasi menaungi sejumlah kawasan industri terbesar di Indonesia — Jababeka, MM2100, EJIP, dan Delta Silicon — yang menjadi rumah bagi ribuan pabrik manufaktur otomotif, elektronik, hingga consumer goods. Asuransi pabrik melindungi bangunan, fasilitas produksi, dan aset tetap dari risiko kebakaran, ledakan, hingga bencana alam yang dapat menghentikan operasional dalam hitungan jam."
      heroStats={[
        { num: "4+ Kawasan", lbl: "Jababeka, MM2100, EJIP, DS" },
        { num: "All-Risk", lbl: "Opsi PAR Tersedia" },
        { num: "Gratis", lbl: "Survei & Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Pabrik"
      jaminanSubtitle="Perlindungan menyeluruh untuk bangunan pabrik dan aset produksi yang terpasang tetap di dalamnya."
      jaminanItems={[
        { icon: "🔥", label: "Kebakaran & Ledakan", desc: "Risiko terbesar bagi pabrik dengan proses produksi bersuhu tinggi atau bahan mudah terbakar." },
        { icon: "⚡", label: "Kerusakan Instalasi Listrik", desc: "Kerusakan akibat korsleting atau lonjakan listrik pada instalasi pabrik." },
        { icon: "🏗️", label: "Kerusakan Struktur Bangunan", desc: "Kerusakan fisik pada gedung produksi, gudang bahan baku, dan area penunjang." },
        { icon: "🌪️", label: "Angin Topan & Badai", desc: "Kerusakan atap dan struktur akibat cuaca ekstrem." },
        { icon: "🌊", label: "Perluasan Banjir", desc: "Relevan untuk pabrik di kawasan yang berdekatan dengan aliran sungai Bekasi." },
        { icon: "📉", label: "Business Interruption", desc: "Perluasan opsional untuk mengganti kerugian pendapatan produksi selama masa perbaikan pasca klaim." },
      ]}
      pengecualianItems={[
        "Keausan wajar mesin dan bangunan akibat pemakaian normal",
        "Kerusakan akibat kesalahan proses produksi internal",
        "Kegagalan mekanis murni pada mesin (perlu Machinery Breakdown terpisah)",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Gempa bumi & banjir (kecuali sebagai perluasan tambahan)",
        "Pencemaran lingkungan bertahap (perlu polis liability lingkungan terpisah)",
      ]}
      simulasiTitle="Contoh Simulasi Premi Asuransi Pabrik"
      simulasiSubtitle="Ilustrasi untuk pabrik manufaktur skala menengah di kawasan industri Bekasi. Premi final ditentukan setelah survei risiko."
      simulasiRows={[
        { label: "Nilai Pertanggungan Bangunan Pabrik", value: "Rp 20.000.000.000" },
        { label: "Nilai Pertanggungan Aset Tetap", value: "Rp 15.000.000.000" },
        { label: "Kelas Konstruksi", value: "Kelas 1 (Baja & Beton)" },
        { label: "Lokasi", value: "Kawasan Industri MM2100" },
        { label: "Rate Estimasi", value: "0,08% – 0,18% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 28.000.000 – Rp 63.000.000", sublabel: "untuk total pertanggungan Rp 35 miliar" }}
      simulasiCatatan="Rate dipengaruhi jenis industri (misal: kimia dan tekstil berpremi lebih tinggi dari elektronik ringan), sistem proteksi kebakaran, dan riwayat klaim pabrik."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi asuransi pabrik saya di kawasan industri Bekasi. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi identitas penanggung jawab & dokumen legalitas perusahaan (NIB/SIUP)",
        "Data teknis bangunan pabrik: luas, tahun bangun, kelas konstruksi",
        "Daftar aset tetap dan mesin produksi yang diasuransikan",
        "Jenis industri dan proses produksi yang berjalan",
        "Sistem proteksi kebakaran (APAR, hydrant, sprinkler, fire alarm)",
        "Data lokasi terhadap kawasan industri (Jababeka/MM2100/EJIP/Delta Silicon, dll.)",
        "Survei risiko oleh surveyor perusahaan asuransi sebelum polis terbit",
      ]}
      faqItems={[
        { q: "Apakah mesin produksi ikut dijamin dalam asuransi pabrik?", a: "Kerusakan fisik pada mesin akibat kejadian eksternal (kebakaran, ledakan) tercakup. Namun untuk kerusakan mekanis/elektris murni pada mesin akibat gangguan internal, lebih tepat dilengkapi dengan Machinery Breakdown Insurance." },
        { q: "Apa bedanya asuransi pabrik dengan Property All Risk (PAR)?", a: "Asuransi pabrik bisa menggunakan basis named-perils (FLEXAS + perluasan) atau basis all-risk (PAR) tergantung kebutuhan. Untuk pabrik bernilai tinggi dengan risiko kompleks, PAR umumnya lebih direkomendasikan karena cakupannya lebih luas." },
        { q: "Apakah tersedia Business Interruption untuk pabrik?", a: "Ya, tersedia sebagai perluasan. Ini penting bagi pabrik karena kerugian akibat berhentinya produksi selama perbaikan seringkali lebih besar dari kerusakan fisik itu sendiri." },
        { q: "Berapa lama proses survei sebelum polis pabrik terbit?", a: "Untuk pertanggungan besar, survei risiko fisik oleh surveyor biasanya berlangsung 3-7 hari, diikuti penerbitan polis 2-3 hari setelah dokumen dan hasil survei lengkap." },
      ]}
      internalLinks={[
        { href: "/asuransi-properti/property-all-risk", label: "Property All Risk", icon: "🏢" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
        { href: "/asuransi-engineering", label: "Engineering Insurance", icon: "⚙️" },
        { href: "/asuransi-liability/limbah-b3", label: "Liability Limbah B3", icon: "⚗️" },
      ]}
      ctaEmoji="🏭"
      ctaTitle="Operasional Pabrik Anda Layak Terlindungi Penuh"
      ctaDesc="Konsultasikan kebutuhan asuransi pabrik Anda di kawasan industri Bekasi — gratis, dan disesuaikan dengan jenis industri Anda."
    />
  );
}
