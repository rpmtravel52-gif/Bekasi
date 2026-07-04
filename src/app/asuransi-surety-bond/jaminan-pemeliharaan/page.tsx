import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_SURETY, NOTE_SURETY } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Jaminan Pemeliharaan Bekasi – Maintenance Bond Pasca Proyek",
  description: "Jasa Jaminan Pemeliharaan (maintenance bond) untuk kontraktor pasca serah terima proyek di Bekasi. Menjamin perbaikan cacat selama masa pemeliharaan. Konsultasi gratis.",
  keywords: "jaminan pemeliharaan bekasi, maintenance bond bekasi, jaminan retensi proyek bekasi, surety bond pemeliharaan bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-surety-bond/jaminan-pemeliharaan" },
};

export default function JaminanPemeliharaanPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Surety Bond", href: "/asuransi-surety-bond" }, { label: "Jaminan Pemeliharaan" }]}
      pillarHref="/asuransi-surety-bond"
      pillarLabel="Surety Bond"
      heroEmoji="🔧"
      heroBadge="Jaminan Pemeliharaan (Maintenance Bond)"
      heroTitle={<>Tuntaskan Tanggung Jawab<br /><em className="not-italic text-gold">Pasca Proyek Selesai</em></>}
      heroIntro="Jaminan Pemeliharaan (Maintenance Bond) menjamin bahwa kontraktor akan memperbaiki cacat atau kerusakan yang timbul selama masa pemeliharaan (biasanya 6-12 bulan) setelah proyek diserahterimakan kepada pemberi kerja. Jaminan ini memungkinkan kontraktor menerima pembayaran retensi lebih cepat tanpa harus menunggu masa pemeliharaan berakhir, sambil tetap memberi rasa aman kepada pemilik proyek di Bekasi."
      heroStats={[
        { num: "5% Nilai Kontrak", lbl: "Nilai Jaminan Umum" },
        { num: "6-12 Bulan", lbl: "Masa Pemeliharaan Umum" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Fungsi & Cakupan Jaminan Pemeliharaan"
      jaminanSubtitle="Melindungi pemberi kerja dari risiko cacat konstruksi yang baru terdeteksi setelah proyek selesai dan beroperasi."
      jaminanItems={[
        { icon: "🛠️", label: "Perbaikan Cacat Konstruksi", desc: "Menjamin kontraktor akan memperbaiki kerusakan atau cacat mutu yang muncul selama masa pemeliharaan." },
        { icon: "💵", label: "Pengganti Uang Retensi", desc: "Memungkinkan kontraktor mencairkan dana retensi (biasanya 5% nilai kontrak) lebih cepat tanpa menunggu masa pemeliharaan usai." },
        { icon: "📅", label: "Berlaku Selama Masa Pemeliharaan", desc: "Aktif sejak serah terima pertama (PHO) hingga serah terima akhir (FHO) sesuai kontrak." },
        { icon: "🏗️", label: "Kepastian Kualitas Pasca Proyek", desc: "Memberi kepastian kepada pemilik proyek bahwa kualitas pekerjaan tetap terjaga meski kontraktor sudah menerima pembayaran penuh." },
      ]}
      pengecualianItems={[
        "Kerusakan akibat kesalahan operasional pemilik proyek pasca serah terima",
        "Keausan wajar (wear and tear) akibat pemakaian normal fasilitas",
        "Kerusakan akibat bencana alam yang bukan disebabkan cacat konstruksi",
        "Perubahan/modifikasi bangunan oleh pemilik tanpa sepengetahuan kontraktor",
      ]}
      simulasiTitle="Contoh Simulasi Biaya Jaminan Pemeliharaan"
      simulasiSubtitle="Ilustrasi untuk proyek dengan masa pemeliharaan 12 bulan di Bekasi. Biaya final tergantung nilai retensi dan profil kontraktor."
      simulasiRows={[
        { label: "Nilai Kontrak Proyek", value: "Rp 10.000.000.000" },
        { label: "Nilai Jaminan Pemeliharaan (5% kontrak)", value: "Rp 500.000.000" },
        { label: "Masa Pemeliharaan", value: "12 bulan" },
        { label: "Rate Estimasi", value: "1% – 2% dari nilai jaminan / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Biaya Penerbitan", value: "Rp 5.000.000 – Rp 10.000.000", sublabel: "untuk nilai jaminan Rp 500 juta, 12 bulan" }}
      simulasiCatatan="Rate umumnya lebih rendah dibanding Jaminan Pelaksanaan karena risiko pada fase pemeliharaan relatif lebih kecil dibanding masa konstruksi aktif."
      simulasiWaMsg="Halo Pak Rio, saya ingin mengajukan Jaminan Pemeliharaan (Maintenance Bond) untuk proyek saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_SURETY}
      pengecualianNote={NOTE_SURETY}
      syaratItems={[
        "Fotokopi identitas perusahaan & legalitas (NIB, SIUJK, Akta Perusahaan)",
        "Dokumen serah terima pertama (Provisional Hand Over) proyek",
        "Kontrak kerja yang mencantumkan klausul retensi/masa pemeliharaan",
        "Nilai dan durasi masa pemeliharaan sesuai kontrak",
        "NPWP dan laporan keuangan perusahaan",
        "Riwayat Jaminan Pelaksanaan sebelumnya pada proyek yang sama",
      ]}
      faqItems={[
        { q: "Apa beda Jaminan Pemeliharaan dengan Jaminan Pelaksanaan?", a: "Jaminan Pelaksanaan berlaku selama masa konstruksi aktif berlangsung. Jaminan Pemeliharaan berlaku setelah proyek selesai dan diserahterimakan, khusus untuk menjamin perbaikan cacat yang muncul selama masa pemeliharaan." },
        { q: "Mengapa kontraktor memilih Jaminan Pemeliharaan dibanding menunggu retensi cair?", a: "Dengan Jaminan Pemeliharaan, kontraktor bisa menerima pembayaran retensi (biasanya 5% nilai kontrak) lebih cepat, sehingga cash flow perusahaan lebih baik, dibanding menunggu masa pemeliharaan berakhir yang bisa 6-12 bulan." },
        { q: "Berapa lama masa pemeliharaan yang umum berlaku?", a: "Umumnya 6-12 bulan tergantung jenis proyek dan kesepakatan kontrak, meski proyek infrastruktur besar bisa memiliki masa pemeliharaan lebih panjang." },
        { q: "Apa yang terjadi jika ditemukan cacat setelah masa pemeliharaan berakhir?", a: "Setelah masa pemeliharaan dan Final Hand Over (FHO) selesai, tanggung jawab kontraktor terhadap cacat konstruksi umumnya berakhir sesuai ketentuan kontrak, kecuali ada klausul garansi struktural tambahan yang disepakati." },
      ]}
      internalLinks={[
        { href: "/asuransi-surety-bond/jaminan-pelaksanaan", label: "Jaminan Pelaksanaan", icon: "🤝" },
        { href: "/asuransi-engineering/cecr", label: "CECR", icon: "🏛️" },
        { href: "/asuransi-surety-bond/custom-bond-ob23", label: "Custom Bond OB23", icon: "🛃" },
      ]}
      ctaEmoji="🔧"
      ctaTitle="Cairkan Retensi Lebih Cepat, Tetap Amankan Kualitas Proyek"
      ctaDesc="Konsultasikan kebutuhan Jaminan Pemeliharaan untuk proyek Anda di Bekasi — gratis, proses cepat."
    />
  );
}
