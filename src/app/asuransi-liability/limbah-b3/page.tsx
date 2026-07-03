import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Asuransi Limbah B3 Bekasi – Liability Pencemaran Lingkungan Industri",
  description: "Asuransi Limbah B3 untuk perusahaan manufaktur di kawasan industri Bekasi. Lindungi bisnis dari tanggung jawab hukum pencemaran lingkungan akibat limbah bahan berbahaya dan beracun. Konsultasi gratis.",
  keywords: "asuransi limbah b3 bekasi, asuransi pencemaran lingkungan bekasi, environmental liability bekasi, asuransi limbah industri jababeka",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-liability/limbah-b3" },
};

export default function LimbahB3Page() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Liability", href: "/asuransi-liability" }, { label: "Limbah B3" }]}
      pillarHref="/asuransi-liability"
      pillarLabel="Asuransi Liability"
      heroEmoji="⚗️"
      heroBadge="Asuransi Limbah B3"
      heroTitle={<>Kelola Risiko Lingkungan<br /><em className="not-italic text-gold">Industri Manufaktur Anda</em></>}
      heroIntro="Kawasan industri Bekasi seperti Jababeka, MM2100, EJIP, dan Delta Silicon menaungi ribuan pabrik manufaktur yang menghasilkan limbah bahan berbahaya dan beracun (B3) sebagai bagian dari proses produksinya. Asuransi Limbah B3 melindungi perusahaan Anda dari tanggung jawab hukum dan biaya pemulihan lingkungan jika terjadi pencemaran, baik yang tiba-tiba maupun bertahap."
      heroStats={[
        { num: "PP 22/2021", lbl: "Sesuai Regulasi B3" },
        { num: "Sudden & Gradual", lbl: "Cakupan Pencemaran" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Limbah B3"
      jaminanSubtitle="Melindungi perusahaan dari beban hukum dan finansial akibat pencemaran lingkungan yang terkait limbah B3."
      jaminanItems={[
        { icon: "☣️", label: "Pencemaran Tiba-Tiba (Sudden)", desc: "Tanggung jawab hukum akibat kebocoran atau tumpahan limbah B3 yang terjadi secara tiba-tiba dan tidak terduga." },
        { icon: "🧪", label: "Pencemaran Bertahap (Gradual)", desc: "Perluasan untuk pencemaran yang terjadi secara perlahan dari waktu ke waktu akibat proses produksi berkelanjutan." },
        { icon: "🧹", label: "Biaya Pembersihan (Clean-up Cost)", desc: "Biaya pemulihan lokasi yang tercemar sesuai standar lingkungan yang berlaku." },
        { icon: "⚖️", label: "Biaya Hukum & Ganti Rugi", desc: "Biaya pembelaan hukum dan ganti rugi kepada pihak ketiga yang dirugikan akibat pencemaran." },
        { icon: "🚛", label: "Risiko Pengangkutan Limbah B3", desc: "Perlindungan tanggung jawab selama proses pengangkutan limbah B3 dari pabrik ke fasilitas pengolahan." },
        { icon: "📋", label: "Biaya Notifikasi & Pelaporan", desc: "Biaya administratif untuk pelaporan wajib kepada otoritas lingkungan hidup pasca kejadian pencemaran." },
      ]}
      pengecualianItems={[
        "Pencemaran yang terjadi akibat kesengajaan atau kelalaian berat perusahaan",
        "Pelanggaran izin lingkungan yang diketahui sejak awal (non-disclosure)",
        "Denda dan sanksi pidana dari pemerintah",
        "Kerugian akibat penghentian usaha karena pencabutan izin lingkungan",
        "Pencemaran yang terjadi sebelum periode polis berlaku",
        "Perang, terorisme, dan bencana alam (kecuali perluasan tambahan)",
      ]}
      simulasiTitle="Contoh Simulasi Premi Asuransi Limbah B3"
      simulasiSubtitle="Ilustrasi untuk pabrik manufaktur dengan pengelolaan limbah B3 di kawasan industri Bekasi. Premi final berdasarkan hasil environmental risk assessment."
      simulasiRows={[
        { label: "Limit Pertanggungan per Kejadian", value: "Rp 5.000.000.000" },
        { label: "Limit Pertanggungan Agregat/Tahun", value: "Rp 10.000.000.000" },
        { label: "Jenis Industri", value: "Manufaktur Kimia/Elektronik" },
        { label: "Lokasi", value: "Kawasan Industri EJIP" },
        { label: "Cakupan", value: "Sudden & Gradual Pollution" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 15.000.000 – Rp 40.000.000", sublabel: "tergantung jenis & volume limbah B3" }}
      simulasiCatatan="Rate sangat dipengaruhi jenis dan volume limbah B3 yang dihasilkan, sistem pengelolaan limbah di lokasi (IPAL, TPS B3), dan riwayat kepatuhan lingkungan perusahaan. Umumnya memerlukan environmental risk assessment sebelum penawaran final."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi asuransi Limbah B3 untuk pabrik saya di kawasan industri Bekasi. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi identitas penanggung jawab & legalitas perusahaan (NIB/Izin Lingkungan)",
        "Dokumen Izin Pengelolaan Limbah B3 / TPS B3 (jika ada)",
        "Jenis dan estimasi volume limbah B3 yang dihasilkan per periode",
        "Sistem pengelolaan limbah di lokasi (IPAL, TPS B3, kerja sama pihak ketiga pengangkut)",
        "Riwayat kepatuhan lingkungan dan insiden pencemaran sebelumnya (jika ada)",
        "Environmental risk assessment oleh surveyor perusahaan asuransi",
      ]}
      faqItems={[
        { q: "Apa itu limbah B3 dan siapa yang wajib mengelolanya?", a: "Limbah B3 (Bahan Berbahaya dan Beracun) adalah limbah yang mengandung zat berbahaya bagi kesehatan dan lingkungan, diatur dalam PP No. 22 Tahun 2021. Perusahaan manufaktur, kimia, elektronik, dan sejenisnya yang menghasilkan limbah B3 wajib mengelolanya sesuai standar yang berlaku." },
        { q: "Apa beda pencemaran sudden dan gradual?", a: "Pencemaran sudden terjadi tiba-tiba dan tidak terduga, misalnya kebocoran tangki mendadak. Pencemaran gradual terjadi bertahap dari waktu ke waktu, misalnya rembesan limbah yang tidak terdeteksi selama bertahun-tahun. Sebagian polis standar hanya menjamin sudden pollution; gradual pollution biasanya perlu perluasan khusus." },
        { q: "Apakah polis ini menjamin denda dari pemerintah?", a: "Tidak. Denda dan sanksi pidana dari otoritas lingkungan hidup umumnya dikecualikan dalam semua polis liability, karena bersifat punitive bukan kompensatif. Polis ini menjamin ganti rugi kepada pihak ketiga dan biaya pembersihan, bukan denda administratif." },
        { q: "Apakah perusahaan kecil di kawasan industri tetap perlu asuransi ini?", a: "Sangat disarankan bila perusahaan menghasilkan limbah B3 dalam jumlah berapa pun, karena besaran tuntutan pencemaran lingkungan tidak selalu berkorelasi dengan skala perusahaan — bahkan insiden kecil bisa berujung tuntutan besar jika berdampak ke lingkungan sekitar kawasan industri." },
      ]}
      internalLinks={[
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "👥" },
        { href: "/asuransi-properti/pabrik", label: "Asuransi Pabrik", icon: "🏭" },
        { href: "/asuransi-engineering", label: "Engineering Insurance", icon: "⚙️" },
      ]}
      ctaEmoji="⚗️"
      ctaTitle="Kelola Risiko Lingkungan Sebelum Menjadi Masalah Hukum"
      ctaDesc="Konsultasikan kebutuhan asuransi Limbah B3 untuk pabrik Anda di kawasan industri Bekasi — gratis, sesuai jenis industri Anda."
    />
  );
}
