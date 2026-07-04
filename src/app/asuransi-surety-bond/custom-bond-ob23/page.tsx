import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Custom Bond OB23 Bekasi – Jaminan Kepabeanan Importir",
  description: "Custom Bond OB23 untuk importir di kawasan industri Bekasi. Jaminan kepabeanan pengganti pembayaran tunai bea masuk/pajak impor sesuai formulir OB-23 Bea Cukai. Konsultasi gratis.",
  keywords: "custom bond ob23 bekasi, jaminan kepabeanan bekasi, jaminan bea cukai bekasi, asuransi impor bekasi, formulir ob23",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-surety-bond/custom-bond-ob23" },
};

export default function CustomBondOb23Page() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Surety Bond", href: "/asuransi-surety-bond" }, { label: "Custom Bond OB23" }]}
      pillarHref="/asuransi-surety-bond"
      pillarLabel="Surety Bond"
      heroEmoji="🛃"
      heroBadge="Custom Bond OB23"
      heroTitle={<>Jaminan Kepabeanan<br /><em className="not-italic text-gold">Tanpa Setor Tunai di Muka</em></>}
      heroIntro="Custom Bond OB23 adalah jaminan kepabeanan menggunakan formulir OB-23 sesuai ketentuan Direktorat Jenderal Bea dan Cukai, yang berfungsi sebagai pengganti pembayaran tunai bea masuk, pajak dalam rangka impor, atau bea keluar. Sangat relevan bagi importir bahan baku dan barang modal di kawasan industri Bekasi seperti Jababeka, MM2100, dan EJIP yang ingin menjaga arus kas tetap sehat tanpa harus menyetor dana tunai penuh di muka."
      heroStats={[
        { num: "Formulir OB-23", lbl: "Standar Bea Cukai" },
        { num: "Tanpa Setor Tunai", lbl: "Jaga Cash Flow" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Fungsi & Cakupan Custom Bond OB23"
      jaminanSubtitle="Menjamin kewajiban kepabeanan importir kepada Direktorat Jenderal Bea dan Cukai tanpa perlu menyetor dana tunai."
      jaminanItems={[
        { icon: "🛃", label: "Jaminan Bea Masuk & Pajak Impor", desc: "Menggantikan kewajiban penyetoran tunai bea masuk dan PDRI (Pajak Dalam Rangka Impor) sementara proses kepabeanan berjalan." },
        { icon: "📦", label: "Fasilitas Kepabeanan Tertentu", desc: "Mendukung fasilitas seperti penangguhan pembayaran, pengeluaran barang dengan jaminan, atau fasilitas KITE (Kemudahan Impor Tujuan Ekspor)." },
        { icon: "💰", label: "Menjaga Arus Kas Importir", desc: "Perusahaan tidak perlu mengeluarkan dana tunai besar sekaligus, sehingga modal kerja tetap tersedia untuk operasional lain." },
        { icon: "📜", label: "Diakui Instansi Bea Cukai", desc: "Diterima sebagai bentuk jaminan resmi oleh Direktorat Jenderal Bea dan Cukai sesuai peraturan yang berlaku." },
      ]}
      pengecualianItems={[
        "Kewajiban pajak/bea yang timbul akibat pelanggaran ketentuan kepabeanan oleh importir",
        "Denda administratif akibat keterlambatan pelaporan dokumen impor",
        "Barang yang termasuk kategori larangan/pembatasan (lartas) tanpa izin resmi",
        "Kewajiban yang timbul sebelum jaminan diterbitkan",
      ]}
      simulasiTitle="Contoh Simulasi Biaya Custom Bond OB23"
      simulasiSubtitle="Ilustrasi untuk importir bahan baku manufaktur di kawasan industri Bekasi. Biaya final tergantung nilai jaminan dan profil importir."
      simulasiRows={[
        { label: "Nilai Bea Masuk & PDRI yang Dijamin", value: "Rp 1.500.000.000" },
        { label: "Jenis Fasilitas", value: "Penangguhan Pembayaran Impor" },
        { label: "Jangka Waktu Jaminan", value: "3 – 12 bulan" },
        { label: "Rate Estimasi", value: "0,5% – 1,5% dari nilai jaminan" },
      ]}
      simulasiHighlight={{ label: "Estimasi Biaya Penerbitan", value: "Rp 7.500.000 – Rp 22.500.000", sublabel: "untuk nilai jaminan Rp 1,5 miliar" }}
      simulasiCatatan="Rate dipengaruhi profil kredibilitas importir, jenis fasilitas kepabeanan yang digunakan, dan jangka waktu jaminan. Importir dengan status AEO (Authorized Economic Operator) umumnya mendapat rate lebih kompetitif."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi Custom Bond OB23 untuk kebutuhan impor perusahaan saya di kawasan industri Bekasi. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi identitas & legalitas perusahaan importir (NIB, API-U/API-P)",
        "Nomor Induk Berusaha dan Angka Pengenal Importir",
        "Dokumen pemberitahuan impor barang (PIB) atau rencana impor",
        "Nilai bea masuk dan pajak yang akan dijamin",
        "NPWP dan laporan keuangan perusahaan",
        "Riwayat kepatuhan kepabeanan (jika pernah melakukan impor sebelumnya)",
      ]}
      faqItems={[
        { q: "Apa itu formulir OB-23 dalam konteks kepabeanan?", a: "OB-23 adalah salah satu formulir standar yang digunakan Direktorat Jenderal Bea dan Cukai untuk jaminan/penangguhan pembayaran bea masuk dan pajak impor, memungkinkan barang dikeluarkan dari pelabuhan tanpa harus menyetor dana tunai penuh terlebih dahulu." },
        { q: "Siapa yang membutuhkan Custom Bond OB23?", a: "Importir bahan baku, barang modal, atau barang dagangan yang ingin memanfaatkan fasilitas kepabeanan seperti penangguhan pembayaran atau KITE, terutama perusahaan manufaktur di kawasan industri seperti Jababeka, MM2100, dan EJIP." },
        { q: "Apa keuntungan Custom Bond dibanding setor tunai ke Bea Cukai?", a: "Perusahaan tidak perlu mengunci dana tunai besar dalam waktu lama untuk keperluan kepabeanan, sehingga modal kerja tetap tersedia untuk kebutuhan operasional dan produksi lainnya." },
        { q: "Berapa lama proses penerbitan Custom Bond OB23?", a: "Umumnya 2-5 hari kerja setelah dokumen lengkap dan proses underwriting/analisis kelayakan importir selesai, tergantung nilai jaminan dan kompleksitas fasilitas kepabeanan yang digunakan." },
      ]}
      internalLinks={[
        { href: "/asuransi-kargo/marine-cargo", label: "Marine Cargo (Laut & Udara)", icon: "🚢" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
        { href: "/asuransi-liability/limbah-b3", label: "Liability Limbah B3", icon: "⚗️" },
      ]}
      ctaEmoji="🛃"
      ctaTitle="Impor Lancar, Arus Kas Tetap Sehat"
      ctaDesc="Konsultasikan kebutuhan Custom Bond OB23 untuk aktivitas impor perusahaan Anda di Bekasi — gratis, sesuai fasilitas kepabeanan yang Anda gunakan."
    />
  );
}
