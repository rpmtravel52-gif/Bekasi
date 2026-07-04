import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_SURETY, NOTE_SURETY } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Jaminan Uang Muka Bekasi – Advance Payment Bond Kontraktor",
  description: "Jasa Jaminan Uang Muka (advance payment bond) untuk kontraktor yang menerima DP proyek di Bekasi. Melindungi pemberi kerja dari risiko penyalahgunaan dana awal. Konsultasi gratis.",
  keywords: "jaminan uang muka bekasi, advance payment bond bekasi, jaminan dp proyek bekasi, surety bond uang muka bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-surety-bond/jaminan-uang-muka" },
};

export default function JaminanUangMukaPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Surety Bond", href: "/asuransi-surety-bond" }, { label: "Jaminan Uang Muka" }]}
      pillarHref="/asuransi-surety-bond"
      pillarLabel="Surety Bond"
      heroEmoji="💰"
      heroBadge="Jaminan Uang Muka (Advance Payment Bond)"
      heroTitle={<>Cairkan Uang Muka Proyek<br /><em className="not-italic text-gold">dengan Jaminan yang Tepat</em></>}
      heroIntro="Jaminan Uang Muka (Advance Payment Bond) diperlukan ketika kontraktor menerima pembayaran di muka (down payment) dari pemberi kerja sebelum pekerjaan dimulai. Jaminan ini melindungi pemberi kerja dari risiko penyalahgunaan dana awal proyek, dan menjadi syarat wajib pencairan uang muka pada banyak proyek pemerintah maupun swasta di Bekasi."
      heroStats={[
        { num: "Sebesar Nilai UM", lbl: "Nilai Jaminan" },
        { num: "Menyusut Bertahap", lbl: "Sesuai Progres" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Fungsi & Cakupan Jaminan Uang Muka"
      jaminanSubtitle="Melindungi pemberi kerja atas dana yang telah dicairkan sebelum pekerjaan fisik dimulai."
      jaminanItems={[
        { icon: "💵", label: "Perlindungan Dana Uang Muka", desc: "Menjamin pemberi kerja mendapat kembali dana uang muka jika kontraktor gagal menggunakan dana sesuai peruntukan." },
        { icon: "📉", label: "Nilai Menyusut Sesuai Progres", desc: "Nilai jaminan biasanya berkurang secara proporsional seiring pemotongan pengembalian uang muka dari termin pembayaran." },
        { icon: "🔓", label: "Pencairan Cepat Uang Muka", desc: "Memungkinkan kontraktor mendapat modal kerja awal tanpa harus menyetor collateral tunai sebesar bank garansi." },
        { icon: "📜", label: "Syarat Wajib Pencairan DP", desc: "Umumnya disyaratkan sebagai dokumen wajib sebelum pemberi kerja mencairkan uang muka ke kontraktor." },
      ]}
      pengecualianItems={[
        "Penyalahgunaan dana yang terjadi sebelum jaminan diterbitkan",
        "Force majeure yang diakui secara hukum dan disepakati bersama",
        "Keterlambatan pengembalian uang muka akibat kesalahan administrasi pemberi kerja",
        "Perselisihan kontrak yang belum diputuskan secara hukum/arbitrase",
      ]}
      simulasiTitle="Contoh Simulasi Biaya Jaminan Uang Muka"
      simulasiSubtitle="Ilustrasi untuk proyek dengan uang muka 20% dari nilai kontrak. Biaya final tergantung nilai uang muka dan profil kontraktor."
      simulasiRows={[
        { label: "Nilai Kontrak Proyek", value: "Rp 10.000.000.000" },
        { label: "Uang Muka (20% kontrak)", value: "Rp 2.000.000.000" },
        { label: "Nilai Jaminan Uang Muka", value: "Rp 2.000.000.000" },
        { label: "Rate Estimasi", value: "1% – 2,5% dari nilai jaminan / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Biaya Penerbitan", value: "Rp 20.000.000 – Rp 50.000.000", sublabel: "untuk nilai jaminan Rp 2 miliar, 12 bulan" }}
      simulasiCatatan="Nilai jaminan umumnya menyusut mengikuti pengembalian uang muka melalui pemotongan termin pembayaran, sehingga biaya bisa disesuaikan secara proporsional pada perpanjangan jaminan."
      simulasiWaMsg="Halo Pak Rio, saya ingin mengajukan Jaminan Uang Muka (Advance Payment Bond) untuk proyek saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_SURETY}
      pengecualianNote={NOTE_SURETY}
      syaratItems={[
        "Fotokopi identitas perusahaan & legalitas (NIB, SIUJK, Akta Perusahaan)",
        "Kontrak kerja proyek yang mencantumkan klausul uang muka",
        "Nilai dan persentase uang muka yang akan dicairkan",
        "NPWP dan laporan keuangan perusahaan",
        "Rencana penggunaan dana uang muka (RAB mobilisasi awal)",
        "Jaminan Pelaksanaan yang sudah diterbitkan (umumnya disyaratkan lebih dulu)",
      ]}
      faqItems={[
        { q: "Kapan Jaminan Uang Muka dibutuhkan?", a: "Saat kontraktor ingin mencairkan uang muka (down payment) dari pemberi kerja sebelum pekerjaan fisik dimulai — umumnya disyaratkan sebagai dokumen wajib sebelum dana ditransfer." },
        { q: "Apakah nilai jaminan tetap sama sepanjang proyek?", a: "Umumnya tidak. Nilai jaminan biasanya menyusut secara proporsional seiring pemotongan pengembalian uang muka dari setiap termin pembayaran yang dicairkan kepada kontraktor." },
        { q: "Apa yang terjadi jika kontraktor gagal menyelesaikan proyek setelah menerima uang muka?", a: "Pemberi kerja dapat mengajukan klaim atas Jaminan Uang Muka untuk mendapatkan kembali dana yang belum dikompensasi melalui pekerjaan yang telah diselesaikan." },
        { q: "Apakah bisa mengajukan Jaminan Uang Muka tanpa Jaminan Pelaksanaan?", a: "Umumnya tidak, karena kebanyakan kontrak proyek mensyaratkan Jaminan Pelaksanaan terlebih dahulu sebagai syarat penandatanganan kontrak, sebelum uang muka dapat dicairkan." },
      ]}
      internalLinks={[
        { href: "/asuransi-surety-bond/jaminan-pelaksanaan", label: "Jaminan Pelaksanaan", icon: "🤝" },
        { href: "/asuransi-surety-bond/jaminan-pemeliharaan", label: "Jaminan Pemeliharaan", icon: "🔧" },
        { href: "/asuransi-engineering/contractor-all-risk", label: "Contractor All Risk (CAR)", icon: "🏗️" },
      ]}
      ctaEmoji="💰"
      ctaTitle="Cairkan Modal Kerja Awal Proyek Anda Tanpa Ribet"
      ctaDesc="Konsultasikan kebutuhan Jaminan Uang Muka untuk proyek Anda di Bekasi — gratis, proses cepat."
    />
  );
}
