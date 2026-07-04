import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_ENGINEERING, NOTE_ENGINEERING } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi CECR Bekasi – Civil Engineering Completed Risks",
  description: "Asuransi CECR (Civil Engineering Completed Risks) untuk infrastruktur sipil yang telah selesai dibangun di Bekasi. Perlindungan masa pemeliharaan jalan, jembatan, dan bangunan infrastruktur. Konsultasi gratis.",
  keywords: "asuransi CECR bekasi, civil engineering completed risks bekasi, asuransi masa pemeliharaan proyek bekasi, asuransi infrastruktur sipil bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-engineering/cecr" },
};

export default function CecrPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Engineering", href: "/asuransi-engineering" }, { label: "CECR" }]}
      pillarHref="/asuransi-engineering"
      pillarLabel="Asuransi Engineering"
      heroEmoji="🏛️"
      heroBadge="CECR (Civil Engineering Completed Risks)"
      heroTitle={<>Lindungi Infrastruktur<br /><em className="not-italic text-gold">yang Telah Selesai Dibangun</em></>}
      heroIntro="CECR (Civil Engineering Completed Risks) adalah polis yang dirancang khusus untuk proyek sipil yang telah selesai dibangun namun belum sepenuhnya bebas dari risiko — seperti jalan, jembatan, saluran drainase, dan fasilitas infrastruktur di kawasan industri Bekasi. Cocok untuk masa pemeliharaan (maintenance period) dan operasional awal setelah serah terima proyek dari kontraktor."
      heroStats={[
        { num: "Pasca CAR", lbl: "Lanjutan Proteksi Proyek" },
        { num: "Infrastruktur Sipil", lbl: "Fokus Cakupan" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan CECR"
      jaminanSubtitle="Melindungi infrastruktur sipil yang sudah berdiri dari risiko kerusakan fisik pasca konstruksi."
      jaminanItems={[
        { icon: "🌉", label: "Kerusakan Struktur Infrastruktur", desc: "Kerusakan fisik pada jalan, jembatan, saluran air, atau fasilitas sipil lain akibat kejadian tak terduga." },
        { icon: "🌊", label: "Bencana Alam & Cuaca Ekstrem", desc: "Kerusakan akibat banjir, longsor, atau angin kencang selama masa pemeliharaan pasca konstruksi." },
        { icon: "🔧", label: "Kegagalan Fungsi Awal", desc: "Perlindungan terhadap kegagalan fungsi struktur yang baru terdeteksi setelah operasional awal berjalan." },
        { icon: "👤", label: "Third Party Liability (TPL)", desc: "Ganti rugi cedera atau kerusakan properti pihak ketiga yang terjadi terkait infrastruktur yang baru selesai dibangun." },
        { icon: "🛠️", label: "Biaya Perbaikan Masa Pemeliharaan", desc: "Menjamin biaya perbaikan yang menjadi kewajiban kontraktor selama periode maintenance sesuai kontrak." },
      ]}
      pengecualianItems={[
        "Kerusakan akibat kesalahan desain yang sudah diketahui sejak awal",
        "Keausan wajar dan penurunan kualitas material karena usia",
        "Kerusakan akibat kelalaian pemeliharaan rutin oleh pemilik",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Kerugian yang timbul sebelum periode polis CECR dimulai",
        "Gempa bumi & banjir besar (kecuali sebagai perluasan tambahan)",
      ]}
      simulasiTitle="Contoh Simulasi Premi CECR"
      simulasiSubtitle="Ilustrasi untuk proyek infrastruktur jalan akses kawasan industri di Bekasi selama masa pemeliharaan 12 bulan."
      simulasiRows={[
        { label: "Nilai Proyek Infrastruktur", value: "Rp 8.000.000.000" },
        { label: "Masa Pemeliharaan", value: "12 bulan" },
        { label: "Jenis Infrastruktur", value: "Jalan Akses Kawasan Industri" },
        { label: "Lokasi", value: "Kawasan Industri Bekasi" },
        { label: "Rate Estimasi", value: "0,08% – 0,20% dari nilai proyek" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi Masa Pemeliharaan", value: "Rp 6.400.000 – Rp 16.000.000", sublabel: "untuk nilai proyek Rp 8 miliar, 12 bulan" }}
      simulasiCatatan="Rate dipengaruhi jenis infrastruktur, kondisi lingkungan sekitar (rawan banjir/longsor), dan durasi masa pemeliharaan yang disepakati dalam kontrak."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi asuransi CECR untuk proyek infrastruktur saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_ENGINEERING}
      pengecualianNote={NOTE_ENGINEERING}
      syaratItems={[
        "Fotokopi identitas pemilik proyek/kontraktor & legalitas perusahaan",
        "Dokumen serah terima proyek (Provisional Hand Over) dari kontraktor",
        "Kontrak masa pemeliharaan (maintenance period) beserta durasinya",
        "Gambar teknis dan spesifikasi infrastruktur yang telah dibangun",
        "Lokasi proyek dan kondisi lingkungan sekitar",
        "Riwayat inspeksi teknis pasca konstruksi (jika ada)",
      ]}
      faqItems={[
        { q: "Apa perbedaan CECR dengan Contractor All Risk (CAR)?", a: "CAR menjamin proyek selama masa pembangunan aktif berlangsung. CECR menjamin proyek yang sudah selesai dibangun dan diserahterimakan, biasanya untuk masa pemeliharaan atau periode operasional awal — dua fase yang berbeda dalam siklus hidup sebuah proyek." },
        { q: "Kapan sebaiknya CECR mulai berlaku?", a: "Idealnya tepat setelah serah terima pertama (Provisional Hand Over) dari kontraktor ke pemilik proyek, untuk memastikan tidak ada celah waktu tanpa perlindungan antara berakhirnya CAR dan dimulainya masa pemeliharaan." },
        { q: "Apakah CECR menjamin kerusakan akibat kesalahan konstruksi sebelumnya?", a: "Tidak, jika kesalahan tersebut sudah diketahui sejak awal masa pemeliharaan. CECR fokus pada risiko fisik tak terduga yang muncul setelah proyek selesai, bukan cacat konstruksi yang sudah teridentifikasi." },
        { q: "Siapa yang biasanya membeli polis CECR — owner atau kontraktor?", a: "Bisa keduanya, tergantung klausul kontrak proyek. Kontraktor biasanya tetap memiliki tanggung jawab selama masa pemeliharaan, sehingga sering menjadi pihak yang membeli atau ikut ditanggung dalam polis CECR." },
      ]}
      internalLinks={[
        { href: "/asuransi-engineering/contractor-all-risk", label: "Contractor All Risk (CAR)", icon: "🏗️" },
        { href: "/asuransi-properti/property-all-risk", label: "Property All Risk", icon: "🏢" },
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "🛡️" },
      ]}
      ctaEmoji="🏛️"
      ctaTitle="Jangan Biarkan Ada Celah Proteksi Pasca Proyek Selesai"
      ctaDesc="Konsultasikan kebutuhan CECR untuk infrastruktur Anda di Bekasi — gratis, sesuai masa pemeliharaan proyek Anda."
    />
  );
}
