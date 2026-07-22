import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_MACHINERY, NOTE_MACHINERY } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi Alat Berat Bekasi – CPM Excavator, Crane & Forklift",
  description: "Asuransi alat berat (Contractor's Plant & Machinery/CPM) di Bekasi untuk excavator, crane, forklift, dan alat berat lain. Lindungi aset operasional proyek dan pabrik Anda. Konsultasi gratis.",
  keywords: "asuransi alat berat bekasi, CPM insurance bekasi, asuransi excavator bekasi, asuransi crane bekasi, asuransi forklift bekasi, contractor plant machinery bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-machinery/alat-berat" },
};

export default function AlatBeratPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }, { label: "Asuransi Alat Berat" }]}
      pillarHref="/asuransi-machinery"
      pillarLabel="Asuransi Machinery"
      heroEmoji="🚜"
      heroBadge="Asuransi Alat Berat (CPM)"
      heroTitle={<>Lindungi Alat Berat<br /><em className="not-italic text-gold">Andalan Proyek & Pabrik Anda</em></>}
      heroIntro="Contractor's Plant & Machinery (CPM) adalah asuransi khusus untuk alat berat seperti excavator, crane, forklift, dan loader yang digunakan di lokasi proyek konstruksi maupun operasional pabrik. Berbeda dari asuransi kendaraan bermotor biasa, CPM menjamin risiko kerusakan fisik dan kegagalan mekanis yang unik pada alat berat, relevan bagi kontraktor dan industri manufaktur di kawasan Bekasi."
      heroStats={[
        { num: "Excavator, Crane, Forklift", lbl: "Semua Jenis Alat Berat" },
        { num: "Proyek & Pabrik", lbl: "2 Konteks Penggunaan" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Alat Berat (CPM)"
      jaminanSubtitle="Melindungi alat berat dari risiko fisik dan mekanis selama operasional di lokasi proyek atau pabrik."
      jaminanItems={[
        { icon: "💥", label: "Kerusakan Fisik Akibat Kecelakaan", desc: "Kerusakan alat berat akibat terguling, terbentur, atau kecelakaan operasional di lokasi kerja." },
        { icon: "⚙️", label: "Kegagalan Mekanis", desc: "Kerusakan komponen mesin internal seperti hidrolik, mesin diesel, atau sistem transmisi alat berat." },
        { icon: "🔥", label: "Kebakaran & Ledakan", desc: "Kerusakan atau kehilangan total alat berat akibat kebakaran, termasuk korsleting sistem kelistrikan." },
        { icon: "🔓", label: "Pencurian Alat Berat", desc: "Kehilangan alat berat akibat pencurian, yang menjadi risiko nyata bagi alat berat yang ditinggal di lokasi proyek terbuka." },
        { icon: "👤", label: "Tanggung Jawab Pihak Ketiga (TPL)", desc: "Ganti rugi cedera atau kerusakan properti pihak ketiga akibat pengoperasian alat berat." },
        { icon: "🚜", label: "Perlindungan Multi-Unit", desc: "Bisa dikelola dalam satu polis untuk kontraktor atau pabrik dengan banyak unit alat berat sekaligus." },
      ]}
      pengecualianItems={[
        "Operator tanpa sertifikasi/SIO (Surat Izin Operasi) yang berlaku",
        "Keausan wajar komponen akibat pemakaian normal (ban, bucket, mata gali)",
        "Penggunaan di luar kapasitas/spesifikasi yang direkomendasikan pabrikan",
        "Kerusakan akibat kelalaian pemeliharaan rutin",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Kerusakan yang sudah ada sejak sebelum polis berlaku",
      ]}
      simulasiTitle="Contoh Simulasi Premi Asuransi Alat Berat"
      simulasiSubtitle="Ilustrasi untuk 1 unit excavator yang digunakan di proyek/pabrik kawasan industri Bekasi. Premi final berdasarkan jenis, usia, dan nilai alat berat."
      simulasiRows={[
        { label: "Jenis Alat Berat", value: "Excavator" },
        { label: "Nilai Pertanggungan", value: "Rp 1.500.000.000" },
        { label: "Usia Alat Berat", value: "2 – 4 tahun" },
        { label: "Lokasi Operasional", value: "Kawasan Industri Bekasi" },
        { label: "Rate Estimasi", value: "1,5% – 3,0% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 22.500.000 – Rp 45.000.000", sublabel: "untuk 1 unit excavator senilai Rp 1,5 miliar" }}
      simulasiCatatan="Rate dipengaruhi jenis alat berat (excavator, crane, forklift memiliki profil risiko berbeda), usia unit, dan intensitas penggunaan. Untuk kepemilikan multi-unit, hubungi kami untuk penawaran fleet yang lebih efisien."
      simulasiWaMsg="Halo Nur, saya ingin konsultasi asuransi alat berat (CPM) untuk proyek/pabrik saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_MACHINERY}
      pengecualianNote={NOTE_MACHINERY}
      syaratItems={[
        "Fotokopi identitas pemilik/penanggung jawab perusahaan (NIB)",
        "Data teknis alat berat: merek, tipe, tahun pembuatan, nomor seri",
        "Bukti kepemilikan atau kontrak sewa alat berat",
        "Lokasi dan konteks penggunaan (proyek konstruksi atau operasional pabrik)",
        "Sertifikasi operator (SIO) yang mengoperasikan alat berat",
        "Riwayat pemeliharaan dan klaim sebelumnya (jika ada)",
      ]}
      faqItems={[
        { q: "Apa beda asuransi alat berat dengan asuransi kendaraan bermotor biasa?", a: "Alat berat memiliki profil risiko yang berbeda dari kendaraan jalan raya — lebih rentan pada risiko mekanis, hidrolik, dan penggunaan di area proyek/tambang. Asuransi CPM dirancang khusus untuk karakteristik risiko tersebut, tidak seperti polis kendaraan bermotor standar." },
        { q: "Apakah alat berat yang disewa dari pihak lain bisa diasuransikan?", a: "Bisa. Baik pemilik alat berat maupun penyewa (kontraktor) dapat mengasuransikan sesuai kesepakatan tanggung jawab dalam kontrak sewa — penting untuk diperjelas siapa yang bertanggung jawab atas premi dan klaim." },
        { q: "Apakah pencurian alat berat di lokasi proyek terbuka dijamin?", a: "Ya, pencurian termasuk dalam cakupan standar CPM. Namun perusahaan asuransi biasanya menilai langkah keamanan di lokasi (pagar, keamanan malam) sebagai bagian dari penilaian risiko." },
        { q: "Apakah operator wajib memiliki SIO agar klaim bisa diproses?", a: "Ya, ini sangat penting. Klaim kerusakan yang terjadi saat alat berat dioperasikan oleh orang tanpa sertifikasi SIO yang sesuai berisiko ditolak oleh perusahaan asuransi." },
      ]}
      internalLinks={[
        { href: "/asuransi-machinery/machinery-breakdown", label: "Machinery Breakdown", icon: "🔧" },
        { href: "/asuransi-engineering/contractor-all-risk", label: "Contractor All Risk (CAR)", icon: "🏗️" },
        { href: "/asuransi-kendaraan/truk-kendaraan-niaga", label: "Truk & Kendaraan Niaga", icon: "🚛" },
      ]}
      ctaEmoji="🚜"
      ctaTitle="Alat Berat Anda Aset Operasional Vital"
      ctaDesc="Konsultasikan kebutuhan asuransi alat berat Anda di Bekasi — gratis, sesuai jenis dan jumlah unit Anda."
    />
  );
}
