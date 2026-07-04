import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Jaminan Penawaran Bekasi – Bid Bond untuk Tender Proyek",
  description: "Jasa jaminan penawaran (bid bond) untuk kontraktor yang mengikuti tender proyek pemerintah maupun swasta di Bekasi. Proses cepat, konsultasi gratis.",
  keywords: "jaminan penawaran bekasi, bid bond bekasi, jaminan tender bekasi, surety bond tender bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-surety-bond/jaminan-penawaran" },
};

export default function JaminanPenawaranPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Surety Bond", href: "/asuransi-surety-bond" }, { label: "Jaminan Penawaran" }]}
      pillarHref="/asuransi-surety-bond"
      pillarLabel="Surety Bond"
      heroEmoji="📋"
      heroBadge="Jaminan Penawaran (Bid Bond)"
      heroTitle={<>Syarat Wajib untuk<br /><em className="not-italic text-gold">Mengikuti Tender Proyek</em></>}
      heroIntro="Jaminan Penawaran (Bid Bond) adalah jaminan yang wajib dilampirkan kontraktor saat mengikuti tender/lelang proyek pemerintah maupun swasta. Jaminan ini memastikan kepada panitia lelang bahwa peserta tender bersungguh-sungguh dan akan menandatangani kontrak serta menyerahkan Jaminan Pelaksanaan jika ditetapkan sebagai pemenang."
      heroStats={[
        { num: "1-3% Nilai HPS", lbl: "Nilai Jaminan Umum" },
        { num: "1-3 Hari", lbl: "Estimasi Penerbitan" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Fungsi & Cakupan Jaminan Penawaran"
      jaminanSubtitle="Melindungi panitia lelang dari peserta tender yang tidak serius atau mengundurkan diri secara sepihak."
      jaminanItems={[
        { icon: "✅", label: "Keseriusan Peserta Tender", desc: "Menjamin bahwa peserta tender benar-benar berkomitmen mengikuti proses lelang hingga selesai." },
        { icon: "📝", label: "Penandatanganan Kontrak", desc: "Jika ditetapkan sebagai pemenang, jaminan mencairkan dana kompensasi bila peserta menolak menandatangani kontrak." },
        { icon: "🤝", label: "Penyerahan Jaminan Pelaksanaan", desc: "Menjamin pemenang tender akan menyerahkan Jaminan Pelaksanaan sesuai ketentuan dalam dokumen lelang." },
        { icon: "⏱️", label: "Berlaku Sepanjang Masa Evaluasi", desc: "Aktif sejak pengajuan penawaran hingga penetapan pemenang dan penandatanganan kontrak." },
      ]}
      pengecualianItems={[
        "Pengunduran diri akibat kesalahan panitia lelang dalam proses evaluasi",
        "Force majeure yang diakui secara hukum dan disepakati bersama",
        "Perubahan spesifikasi proyek oleh pemberi kerja setelah penawaran diajukan",
        "Pembatalan tender oleh pemberi kerja/panitia lelang itu sendiri",
      ]}
      simulasiTitle="Contoh Simulasi Biaya Jaminan Penawaran"
      simulasiSubtitle="Ilustrasi untuk tender proyek konstruksi di Bekasi. Biaya final tergantung nilai HPS dan profil kontraktor."
      simulasiRows={[
        { label: "Nilai HPS (Harga Perkiraan Sendiri) Proyek", value: "Rp 5.000.000.000" },
        { label: "Nilai Jaminan Penawaran (1-3% HPS)", value: "Rp 50.000.000 – Rp 150.000.000" },
        { label: "Jangka Waktu Jaminan", value: "3 bulan (masa evaluasi tender)" },
        { label: "Rate Estimasi", value: "1% – 2% dari nilai jaminan" },
      ]}
      simulasiHighlight={{ label: "Estimasi Biaya Penerbitan", value: "Rp 500.000 – Rp 3.000.000", sublabel: "untuk nilai jaminan Rp 50-150 juta" }}
      simulasiCatatan="Biaya penerbitan (bukan premi tahunan seperti asuransi biasa) dihitung sekali untuk masa berlaku jaminan sesuai jangka waktu tender. Nilai jaminan mengikuti syarat yang ditetapkan panitia lelang dalam dokumen tender."
      simulasiWaMsg="Halo Pak Rio, saya ingin mengajukan Jaminan Penawaran (Bid Bond) untuk tender proyek yang saya ikuti. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi identitas perusahaan & legalitas (NIB, SIUJK, Akta Perusahaan)",
        "Dokumen lelang/tender (RKS, undangan lelang, atau pengumuman resmi)",
        "Nilai HPS (Harga Perkiraan Sendiri) proyek dari panitia lelang",
        "NPWP dan laporan keuangan perusahaan (untuk analisis kelayakan)",
        "Riwayat pengalaman proyek sejenis (jika disyaratkan)",
        "Formulir jaminan sesuai ketentuan panitia lelang",
      ]}
      faqItems={[
        { q: "Berapa nilai Jaminan Penawaran yang umum disyaratkan?", a: "Umumnya berkisar 1-3% dari nilai HPS (Harga Perkiraan Sendiri) proyek, sesuai ketentuan dalam dokumen lelang. Nilai pasti ditentukan oleh panitia tender, bukan oleh penerbit jaminan." },
        { q: "Apa yang terjadi jika saya kalah dalam tender?", a: "Jaminan Penawaran akan berakhir/dikembalikan setelah pengumuman pemenang tender. Tidak ada kewajiban lebih lanjut bagi peserta yang tidak menang." },
        { q: "Berapa lama proses penerbitan Jaminan Penawaran?", a: "Umumnya 1-3 hari kerja setelah dokumen lengkap, karena tender memiliki tenggat waktu pengajuan penawaran yang ketat. Kami bantu proses secepat mungkin." },
        { q: "Apakah surety bond bisa digunakan sebagai pengganti bank garansi?", a: "Bisa, selama panitia lelang menerima surety bond sebagai bentuk jaminan yang sah — umumnya diatur dalam dokumen lelang proyek pemerintah sesuai Perpres Pengadaan Barang/Jasa." },
      ]}
      internalLinks={[
        { href: "/asuransi-surety-bond/jaminan-pelaksanaan", label: "Jaminan Pelaksanaan", icon: "🤝" },
        { href: "/asuransi-surety-bond/jaminan-uang-muka", label: "Jaminan Uang Muka", icon: "💰" },
        { href: "/asuransi-engineering/contractor-all-risk", label: "Contractor All Risk (CAR)", icon: "🏗️" },
      ]}
      ctaEmoji="📋"
      ctaTitle="Siap Ikut Tender? Jaminan Penawaran Beres dalam Hitungan Hari"
      ctaDesc="Konsultasikan kebutuhan Jaminan Penawaran untuk tender Anda — gratis, proses cepat sesuai tenggat lelang."
    />
  );
}
