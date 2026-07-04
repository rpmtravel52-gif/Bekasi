import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Contractor All Risk (CAR) Bekasi – Asuransi Proyek Konstruksi",
  description: "Asuransi Contractor All Risk (CAR) untuk proyek konstruksi di Bekasi. Lindungi pekerjaan, material, dan peralatan dari awal pembangunan hingga serah terima. Simulasi premi & konsultasi gratis.",
  keywords: "contractor all risk bekasi, CAR bekasi, asuransi proyek konstruksi bekasi, asuransi kontraktor bekasi, asuransi pembangunan pabrik bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-engineering/contractor-all-risk" },
};

export default function CarPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Engineering", href: "/asuransi-engineering" }, { label: "Contractor All Risk" }]}
      pillarHref="/asuransi-engineering"
      pillarLabel="Asuransi Engineering"
      heroEmoji="🏗️"
      heroBadge="Contractor All Risk (CAR)"
      heroTitle={<>Lindungi Proyek Konstruksi<br /><em className="not-italic text-gold">Sejak Hari Pertama Dibangun</em></>}
      heroIntro="Contractor All Risk (CAR) adalah polis wajib bagi setiap proyek konstruksi bernilai signifikan — menjamin pekerjaan, material, dan peralatan dari risiko kerusakan fisik sejak mobilisasi hingga serah terima proyek. Sangat relevan untuk pembangunan pabrik, gudang, dan gedung komersial baru di kawasan industri Bekasi seperti Jababeka, MM2100, dan EJIP."
      heroStats={[
        { num: "All-Risk", lbl: "Basis Jaminan" },
        { num: "Kontraktor + Owner", lbl: "Tertanggung Ganda" },
        { num: "Gratis", lbl: "Konsultasi & Survei" },
      ]}
      jaminanTitle="Cakupan Jaminan Contractor All Risk"
      jaminanSubtitle="Melindungi seluruh material dan pekerjaan konstruksi selama masa pembangunan berlangsung."
      jaminanItems={[
        { icon: "🧱", label: "Kerusakan Fisik Pekerjaan Konstruksi", desc: "Kerusakan material dan pekerjaan yang sedang dibangun akibat kejadian tak terduga seperti kebakaran, ledakan, atau kecelakaan." },
        { icon: "🌪️", label: "Bencana Alam & Cuaca Ekstrem", desc: "Kerusakan akibat angin topan, hujan lebat, dan banjir yang sering terjadi selama musim penghujan di Bekasi." },
        { icon: "🚧", label: "Kerusakan Alat & Peralatan Konstruksi", desc: "Perlindungan tambahan untuk plant & machinery yang digunakan selama proyek, seperti scaffolding dan alat berat ringan." },
        { icon: "👤", label: "Third Party Liability (TPL)", desc: "Ganti rugi cedera atau kerusakan properti pihak ketiga akibat aktivitas konstruksi, misalnya bangunan tetangga yang terdampak." },
        { icon: "🛡️", label: "Cross Liability", desc: "Perluasan yang menjamin tanggung jawab antar-kontraktor dalam proyek yang melibatkan lebih dari satu pihak pelaksana." },
        { icon: "🔧", label: "Perluasan Testing & Commissioning", desc: "Perlindungan selama masa uji coba mesin/instalasi sebelum proyek dinyatakan selesai sepenuhnya." },
      ]}
      pengecualianItems={[
        "Kesalahan desain yang menyebabkan kegagalan konstruksi",
        "Keausan wajar dan kerusakan bertahap material",
        "Kerugian akibat keterlambatan proyek (delay in start-up, perlu perluasan khusus)",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Denda akibat pelanggaran kontrak kerja",
        "Kerugian yang timbul sebelum periode polis dimulai",
      ]}
      simulasiTitle="Contoh Simulasi Premi Contractor All Risk"
      simulasiSubtitle="Ilustrasi untuk proyek pembangunan pabrik di kawasan industri Bekasi. Premi final ditentukan berdasarkan nilai kontrak dan durasi proyek."
      simulasiRows={[
        { label: "Nilai Kontrak Proyek", value: "Rp 25.000.000.000" },
        { label: "Durasi Proyek", value: "12 bulan" },
        { label: "Jenis Proyek", value: "Pembangunan Pabrik Baru" },
        { label: "Lokasi", value: "Kawasan Industri Jababeka" },
        { label: "Rate Estimasi", value: "0,15% – 0,35% dari nilai kontrak" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi Total Proyek", value: "Rp 37.500.000 – Rp 87.500.000", sublabel: "untuk nilai kontrak Rp 25 miliar, 12 bulan" }}
      simulasiCatatan="Rate dipengaruhi jenis konstruksi, durasi proyek, lokasi, dan riwayat klaim kontraktor. Untuk proyek dengan risiko tinggi (dekat bangunan eksisting, lokasi rawan banjir), rate dapat lebih tinggi."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi Contractor All Risk (CAR) untuk proyek konstruksi saya di Bekasi. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi identitas kontraktor/pemilik proyek & legalitas perusahaan (NIB/SIUJK)",
        "Kontrak kerja proyek (nilai kontrak dan jangka waktu pelaksanaan)",
        "Gambar teknis dan spesifikasi proyek",
        "Lokasi proyek dan kondisi lingkungan sekitar",
        "Daftar peralatan konstruksi yang digunakan (jika ikut diasuransikan)",
        "Data pihak-pihak yang terlibat (owner, kontraktor utama, subkontraktor)",
      ]}
      faqItems={[
        { q: "Siapa yang menjadi tertanggung dalam polis CAR?", a: "Umumnya polis CAR menanggung baik pemilik proyek (owner) maupun kontraktor utama sebagai joint insured, karena keduanya memiliki kepentingan terhadap keberhasilan proyek. Subkontraktor bisa ditambahkan sebagai additional insured jika diperlukan." },
        { q: "Apakah CAR menjamin keterlambatan penyelesaian proyek?", a: "Tidak secara otomatis. Kerugian finansial akibat keterlambatan proyek (Delay in Start-Up/DSU) membutuhkan perluasan khusus yang terpisah dari cakupan dasar CAR." },
        { q: "Kapan sebaiknya polis CAR mulai berlaku?", a: "Idealnya sejak mobilisasi awal proyek (pengiriman material dan alat ke lokasi), bukan menunggu pekerjaan fisik dimulai, karena risiko kerusakan bisa terjadi sejak barang tiba di lokasi." },
        { q: "Apa yang terjadi setelah proyek selesai — apakah CAR masih berlaku?", a: "CAR umumnya berakhir saat serah terima pertama (Provisional Hand Over). Untuk masa pemeliharaan setelah itu, dibutuhkan perlindungan lanjutan seperti CECR atau Maintenance Period Extension." },
      ]}
      internalLinks={[
        { href: "/asuransi-engineering/cecr", label: "CECR", icon: "🏛️" },
        { href: "/asuransi-machinery/alat-berat", label: "Asuransi Alat Berat (CPM)", icon: "🚜" },
        { href: "/asuransi-properti/pabrik", label: "Asuransi Pabrik", icon: "🏭" },
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "🛡️" },
      ]}
      ctaEmoji="🏗️"
      ctaTitle="Proyek Konstruksi Anda Terlalu Berharga untuk Tidak Dilindungi"
      ctaDesc="Konsultasikan kebutuhan Contractor All Risk untuk proyek Anda di Bekasi — gratis, sesuai nilai dan jenis proyek Anda."
    />
  );
}
