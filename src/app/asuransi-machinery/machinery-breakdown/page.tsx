import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_MACHINERY, NOTE_MACHINERY } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Machinery Breakdown Bekasi – Proteksi Mesin Produksi",
  description: "Asuransi Machinery Breakdown untuk mesin produksi pabrik di kawasan industri Bekasi. Lindungi mesin dari kerusakan mekanis dan elektris mendadak.",
  keywords: "asuransi machinery breakdown bekasi, asuransi mesin produksi bekasi, asuransi mesin pabrik jababeka, MB insurance bekasi",
  alternates: { canonical: "https://asuransibekasi.biz.id/asuransi-machinery/machinery-breakdown" },
};

export default function MachineryBreakdownPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }, { label: "Machinery Breakdown" }]}
      pillarHref="/asuransi-machinery"
      pillarLabel="Asuransi Machinery"
      heroEmoji="🔧"
      heroBadge="Machinery Breakdown (MB)"
      heroTitle={<>Mesin Produksi Anda,<br /><em className="not-italic text-gold">Terlindungi dari Kegagalan Mendadak</em></>}
      heroIntro="Machinery Breakdown Insurance melindungi mesin produksi yang terpasang tetap di pabrik dari kerusakan mekanis dan elektris mendadak — risiko yang tidak dijamin oleh asuransi kebakaran atau Property All Risk. Sangat relevan bagi pabrik manufaktur otomotif, elektronik, dan tekstil di kawasan industri Bekasi seperti Jababeka, MM2100, EJIP, dan Delta Silicon."
      heroStats={[
        { num: "Mekanis & Elektris", lbl: "Fokus Cakupan" },
        { num: "Business Interruption", lbl: "Perluasan Tersedia" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Machinery Breakdown"
      jaminanSubtitle="Melindungi mesin produksi dari kegagalan fungsi yang bersumber dari dalam mesin itu sendiri."
      jaminanItems={[
        { icon: "⚙️", label: "Kegagalan Mekanis", desc: "Kerusakan akibat cacat material, kesalahan pengerjaan, atau keausan komponen yang menyebabkan kegagalan fungsi mendadak." },
        { icon: "⚡", label: "Kegagalan Elektris", desc: "Kerusakan akibat korsleting, lonjakan tegangan, atau kegagalan sistem kelistrikan pada mesin." },
        { icon: "💧", label: "Kegagalan Akibat Cairan Pendingin", desc: "Kerusakan mesin akibat kegagalan sistem pendingin atau pelumasan yang menyebabkan overheat." },
        { icon: "🌀", label: "Kesalahan Operasional", desc: "Kerusakan akibat kesalahan operator yang tidak disengaja saat mengoperasikan mesin." },
        { icon: "📉", label: "Perluasan Business Interruption", desc: "Mengganti kerugian pendapatan produksi selama masa perbaikan atau penggantian mesin yang rusak." },
        { icon: "🔩", label: "Biaya Spare Part & Instalasi Ulang", desc: "Biaya penggantian komponen dan instalasi ulang mesin pasca perbaikan." },
      ]}
      pengecualianItems={[
        "Keausan wajar (wear and tear) akibat pemakaian normal jangka panjang",
        "Kerusakan yang sudah ada sejak sebelum polis berlaku",
        "Kerusakan akibat kebakaran, petir, atau ledakan (dijamin polis properti/PAR terpisah)",
        "Kerusakan akibat kelalaian pemeliharaan rutin yang direkomendasikan pabrikan",
        "Perang, terorisme, dan kerusuhan",
        "Kerugian tidak langsung tanpa perluasan Business Interruption",
      ]}
      simulasiTitle="Contoh Simulasi Premi Machinery Breakdown"
      simulasiSubtitle="Ilustrasi untuk mesin produksi di pabrik manufaktur kawasan industri Bekasi. Premi final ditentukan setelah survei teknis mesin."
      simulasiRows={[
        { label: "Nilai Pertanggungan Mesin", value: "Rp 8.000.000.000" },
        { label: "Jenis Mesin", value: "Mesin Produksi Otomotif/Elektronik" },
        { label: "Usia Mesin", value: "3 – 5 tahun" },
        { label: "Lokasi", value: "Kawasan Industri MM2100" },
        { label: "Rate Estimasi", value: "0,25% – 0,60% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 20.000.000 – Rp 48.000.000", sublabel: "untuk pertanggungan Rp 8 miliar" }}
      simulasiCatatan="Rate sangat dipengaruhi jenis, usia, dan kompleksitas mesin, serta riwayat maintenance dan klaim sebelumnya. Mesin yang lebih tua umumnya memerlukan rate lebih tinggi."
      simulasiWaMsg="Halo Nur, saya ingin konsultasi asuransi Machinery Breakdown untuk mesin produksi pabrik saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_MACHINERY}
      pengecualianNote={NOTE_MACHINERY}
      syaratItems={[
        "Fotokopi identitas penanggung jawab & legalitas perusahaan (NIB)",
        "Daftar mesin yang diasuransikan: merek, tipe, tahun pembuatan, nilai perolehan",
        "Riwayat pemeliharaan dan servis rutin mesin",
        "Riwayat kerusakan/klaim sebelumnya (jika ada)",
        "Data kapasitas produksi untuk perluasan Business Interruption (jika diperlukan)",
        "Survei teknis mesin oleh surveyor perusahaan asuransi",
      ]}
      faqItems={[
        { q: "Apa beda Machinery Breakdown dengan Property All Risk (PAR)?", a: "PAR menjamin kerusakan fisik akibat kejadian eksternal seperti kebakaran atau bencana. Machinery Breakdown menjamin kegagalan fungsi yang bersumber dari dalam mesin itu sendiri, seperti komponen yang rusak atau korsleting internal — dua sumber risiko yang berbeda dan saling melengkapi." },
        { q: "Apakah mesin lama masih bisa diasuransikan?", a: "Bisa, namun umumnya perlu survei teknis lebih detail dan rate premi cenderung lebih tinggi karena risiko kegagalan meningkat sesuai usia pemakaian mesin." },
        { q: "Apakah perlu kedua polis PAR dan Machinery Breakdown sekaligus?", a: "Sangat direkomendasikan untuk pabrik dengan mesin bernilai tinggi, karena kedua polis menjamin sumber risiko yang berbeda. Banyak perusahaan manufaktur di Bekasi memiliki keduanya untuk cakupan yang lebih menyeluruh." },
        { q: "Apakah Business Interruption penting untuk pabrik kecil?", a: "Tetap relevan, karena kerugian akibat berhentinya produksi seringkali lebih besar dari biaya perbaikan mesin itu sendiri, terlepas dari skala pabrik." },
      ]}
      internalLinks={[
        { href: "/asuransi-machinery/alat-berat", label: "Asuransi Alat Berat (CPM)", icon: "🚜" },
        { href: "/asuransi-properti/property-all-risk", label: "Property All Risk", icon: "🏢" },
        { href: "/asuransi-properti/pabrik", label: "Asuransi Pabrik", icon: "🏭" },
      ]}
      ctaEmoji="🔧"
      ctaTitle="Jangan Biarkan Mesin Rusak Menghentikan Produksi Anda"
      ctaDesc="Konsultasikan kebutuhan Machinery Breakdown untuk mesin produksi Anda di Bekasi — gratis, sesuai jenis mesin Anda."
    />
  );
}
