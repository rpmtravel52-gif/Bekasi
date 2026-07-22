import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_SURETY, NOTE_SURETY } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Jaminan Pelaksanaan Bekasi – Performance Bond Kontraktor",
  description: "Jaminan Pelaksanaan (performance bond) untuk kontraktor proyek pemerintah, BUMN, dan swasta di Bekasi. Wajib sebelum tanda tangan kontrak.",
  keywords: "jaminan pelaksanaan bekasi, performance bond bekasi, surety bond kontraktor bekasi, jaminan kontrak proyek bekasi",
  alternates: { canonical: "https://asuransibekasi.biz.id/asuransi-surety-bond/jaminan-pelaksanaan" },
};

export default function JaminanPelaksanaanPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Surety Bond", href: "/asuransi-surety-bond" }, { label: "Jaminan Pelaksanaan" }]}
      pillarHref="/asuransi-surety-bond"
      pillarLabel="Surety Bond"
      heroEmoji="🤝"
      heroBadge="Jaminan Pelaksanaan (Performance Bond)"
      heroTitle={<>Wujudkan Komitmen<br /><em className="not-italic text-gold">Menyelesaikan Proyek Anda</em></>}
      heroIntro="Jaminan Pelaksanaan (Performance Bond) menjamin kepada pemberi kerja bahwa kontraktor akan menyelesaikan proyek sesuai spesifikasi, kualitas, dan jadwal yang disepakati dalam kontrak. Wajib bagi kontraktor yang mengerjakan proyek pemerintah, BUMN, maupun proyek swasta berskala besar di Bekasi sebelum kontrak dapat ditandatangani."
      heroStats={[
        { num: "5% Nilai Kontrak", lbl: "Nilai Jaminan Umum" },
        { num: "Sesuai Durasi Proyek", lbl: "Masa Berlaku" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Fungsi & Cakupan Jaminan Pelaksanaan"
      jaminanSubtitle="Melindungi pemberi kerja dari risiko kontraktor gagal menyelesaikan proyek sesuai kontrak."
      jaminanItems={[
        { icon: "🏗️", label: "Kepastian Penyelesaian Proyek", desc: "Menjamin kontraktor akan menyelesaikan pekerjaan sesuai spesifikasi dan jadwal dalam kontrak." },
        { icon: "💰", label: "Kompensasi Jika Gagal", desc: "Jika kontraktor gagal/mangkir, penjamin akan membayar klaim sesuai nilai jaminan kepada pemberi kerja." },
        { icon: "📅", label: "Berlaku Sepanjang Masa Konstruksi", desc: "Aktif sejak penandatanganan kontrak hingga serah terima pertama (Provisional Hand Over)." },
        { icon: "📜", label: "Syarat Wajib Kontrak Pemerintah", desc: "Diwajibkan dalam pengadaan barang/jasa pemerintah sesuai regulasi yang berlaku." },
      ]}
      pengecualianItems={[
        "Keterlambatan akibat kesalahan pemberi kerja (perubahan desain mendadak, keterlambatan pembayaran)",
        "Force majeure yang diakui secara hukum",
        "Kegagalan akibat kondisi lapangan yang tidak diketahui sebelumnya dan di luar kendali kontraktor",
        "Pembatalan kontrak sepihak oleh pemberi kerja tanpa dasar yang sah",
      ]}
      simulasiTitle="Contoh Simulasi Biaya Jaminan Pelaksanaan"
      simulasiSubtitle="Ilustrasi untuk proyek konstruksi pabrik di kawasan industri Bekasi. Biaya final tergantung nilai kontrak dan profil kontraktor."
      simulasiRows={[
        { label: "Nilai Kontrak Proyek", value: "Rp 10.000.000.000" },
        { label: "Nilai Jaminan Pelaksanaan (5% kontrak)", value: "Rp 500.000.000" },
        { label: "Jangka Waktu Jaminan", value: "12 bulan (durasi proyek)" },
        { label: "Rate Estimasi", value: "1% – 2,5% dari nilai jaminan / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Biaya Penerbitan", value: "Rp 5.000.000 – Rp 12.500.000", sublabel: "untuk nilai jaminan Rp 500 juta, 12 bulan" }}
      simulasiCatatan="Rate dipengaruhi rekam jejak kontraktor (track record proyek sebelumnya), kondisi keuangan perusahaan, dan kompleksitas proyek. Kontraktor dengan riwayat baik umumnya mendapat rate lebih kompetitif."
      simulasiWaMsg="Halo Nur, saya ingin mengajukan Jaminan Pelaksanaan (Performance Bond) untuk proyek yang saya menangkan di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_SURETY}
      pengecualianNote={NOTE_SURETY}
      syaratItems={[
        "Fotokopi identitas perusahaan & legalitas (NIB, SIUJK, Akta Perusahaan)",
        "Surat Penunjukan Pemenang (SPPBJ) dari pemberi kerja",
        "Kontrak kerja/Surat Perjanjian Kerja (SPK) proyek",
        "NPWP dan laporan keuangan perusahaan 2 tahun terakhir",
        "Riwayat pengalaman proyek sejenis (portofolio kontraktor)",
        "Analisis kelayakan (underwriting) oleh perusahaan penjamin",
      ]}
      faqItems={[
        { q: "Kapan Jaminan Pelaksanaan harus diserahkan?", a: "Umumnya sebelum penandatanganan kontrak kerja, sebagai syarat wajib yang ditetapkan pemberi kerja — terutama untuk proyek pemerintah dan BUMN sesuai regulasi pengadaan barang/jasa." },
        { q: "Berapa nilai Jaminan Pelaksanaan yang umum disyaratkan?", a: "Umumnya 5% dari nilai kontrak, namun bisa lebih tinggi (hingga 10-20%) untuk kontraktor dengan penawaran harga jauh di bawah HPS, sesuai ketentuan panitia pengadaan." },
        { q: "Apa yang terjadi jika proyek terlambat karena kesalahan pemberi kerja?", a: "Jika keterlambatan disebabkan oleh pemberi kerja (misalnya keterlambatan pembayaran atau perubahan desain), hal ini umumnya bukan tanggung jawab kontraktor dan tidak akan memicu klaim jaminan — namun perlu didokumentasikan dengan baik." },
        { q: "Apakah Jaminan Pelaksanaan otomatis berakhir setelah proyek selesai?", a: "Jaminan berakhir setelah serah terima pertama (Provisional Hand Over). Untuk masa pemeliharaan setelahnya, dibutuhkan Jaminan Pemeliharaan (Maintenance Bond) yang terpisah." },
      ]}
      internalLinks={[
        { href: "/asuransi-surety-bond/jaminan-penawaran", label: "Jaminan Penawaran", icon: "📋" },
        { href: "/asuransi-surety-bond/jaminan-pemeliharaan", label: "Jaminan Pemeliharaan", icon: "🔧" },
        { href: "/asuransi-engineering/contractor-all-risk", label: "Contractor All Risk (CAR)", icon: "🏗️" },
      ]}
      ctaEmoji="🤝"
      ctaTitle="Menangkan Proyek, Amankan Kontraknya"
      ctaDesc="Konsultasikan kebutuhan Jaminan Pelaksanaan untuk proyek Anda di Bekasi — gratis, proses cepat sebelum tenggat kontrak."
    />
  );
}
