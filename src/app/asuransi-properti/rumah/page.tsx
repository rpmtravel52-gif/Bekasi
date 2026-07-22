import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_PROPERTI, NOTE_PROPERTI } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi Rumah Bekasi – Kebakaran, Pencurian & Banjir",
  description: "Asuransi rumah tinggal untuk kawasan perumahan Bekasi. Lindungi rumah dari kebakaran, pencurian, hingga perluasan banjir untuk area rawan luapan musiman. Premi terjangkau, konsultasi gratis.",
  keywords: "asuransi rumah bekasi, asuransi rumah tinggal bekasi, asuransi rumah banjir bekasi, asuransi kpr bekasi, asuransi perumahan bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-properti/rumah" },
};

export default function RumahPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Properti", href: "/asuransi-properti" }, { label: "Asuransi Rumah" }]}
      pillarHref="/asuransi-properti"
      pillarLabel="Asuransi Properti"
      heroEmoji="🏡"
      heroBadge="Asuransi Rumah Tinggal"
      heroTitle={<>Rumah Anda,<br /><em className="not-italic text-gold">Ketenangan Keluarga Anda</em></>}
      heroIntro="Rumah adalah aset terbesar dalam hidup banyak keluarga. Asuransi rumah tinggal melindungi hunian Anda dari risiko kebakaran, pencurian, hingga perluasan banjir — sangat relevan untuk sejumlah kawasan perumahan Bekasi yang kerap mengalami luapan air musiman saat curah hujan tinggi. Premi terjangkau, mulai dari ratusan ribu rupiah per tahun untuk perlindungan penuh."
      heroStats={[
        { num: "Terjangkau", lbl: "Mulai Ratusan Ribu/Tahun" },
        { num: "1-2 Hari", lbl: "Estimasi Penerbitan" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Rumah"
      jaminanSubtitle="Paket perlindungan rumah tinggal yang bisa disesuaikan sesuai kebutuhan dan lokasi hunian Anda."
      jaminanItems={[
        { icon: "🔥", label: "Kebakaran, Petir & Ledakan", desc: "Jaminan standar FLEXAS untuk struktur rumah dan bangunan pendukung (garasi, pagar)." },
        { icon: "🔒", label: "Pencurian dengan Kekerasan", desc: "Kerugian akibat pembongkaran paksa (burglary) di rumah Anda." },
        { icon: "🛋️", label: "Isi Rumah & Perabotan", desc: "Furnitur, elektronik, dan barang berharga di dalam rumah dapat diasuransikan terpisah." },
        { icon: "🌊", label: "Perluasan Banjir", desc: "Sangat relevan untuk perumahan di area rendah Bekasi yang rawan luapan air musiman." },
        { icon: "🌪️", label: "Angin Topan & Badai", desc: "Kerusakan atap dan bangunan akibat angin kencang." },
        { icon: "⚡", label: "Kerusakan Instalasi Listrik", desc: "Kerusakan akibat korsleting listrik rumah tangga." },
      ]}
      pengecualianItems={[
        "Kerusakan akibat kelalaian pemeliharaan rutin rumah",
        "Rayap dan hama yang merusak struktur kayu",
        "Kebakaran yang disengaja oleh penghuni rumah",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Gempa bumi (kecuali sebagai perluasan tambahan)",
        "Barang berharga di atas limit tanpa deklarasi khusus (emas, jam tangan mewah)",
      ]}
      simulasiTitle="Contoh Simulasi Premi Asuransi Rumah"
      simulasiSubtitle="Ilustrasi untuk rumah tipe 90 di kawasan perumahan Bekasi. Premi final berdasarkan nilai bangunan aktual."
      simulasiRows={[
        { label: "Nilai Pertanggungan Bangunan", value: "Rp 600.000.000" },
        { label: "Nilai Pertanggungan Isi Rumah", value: "Rp 150.000.000" },
        { label: "Kelas Konstruksi", value: "Kelas 1 (Beton/Bata)" },
        { label: "Lokasi", value: "Perumahan Bekasi" },
        { label: "Rate Estimasi", value: "0,05% – 0,10% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 375.000 – Rp 750.000", sublabel: "untuk pertanggungan Rp 750 juta" }}
      simulasiCatatan="Rate lebih tinggi jika menambahkan perluasan banjir, tergantung riwayat genangan di lokasi rumah. Kami bantu cek profil risiko lokasi Anda secara gratis."
      simulasiWaMsg="Halo Nur, saya ingin konsultasi asuransi rumah tinggal saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_PROPERTI}
      pengecualianNote={NOTE_PROPERTI}
      syaratItems={[
        "Fotokopi KTP pemilik rumah",
        "Bukti kepemilikan rumah (sertifikat/AJB) atau data KPR jika masih kredit",
        "Alamat lengkap dan tipe rumah (luas tanah & bangunan)",
        "Estimasi nilai pertanggungan bangunan dan isi rumah",
        "Foto tampak depan rumah",
        "Riwayat genangan/banjir di lokasi (jika ada, untuk pertimbangan perluasan)",
      ]}
      faqItems={[
        { q: "Apakah rumah yang masih KPR bisa diasuransikan?", a: "Bisa, bahkan umumnya bank mewajibkan asuransi kebakaran selama masa kredit berjalan. Anda tetap bisa memilih perusahaan asuransi dan memastikan nilai pertanggungan sesuai kebutuhan, bukan hanya mengikuti paket bank." },
        { q: "Apakah perlu perluasan banjir untuk rumah di Bekasi?", a: "Sangat disarankan untuk rumah di kawasan yang pernah mengalami genangan atau berada di area rendah dekat aliran sungai. Biaya perluasan jauh lebih kecil dibanding potensi kerugian akibat banjir." },
        { q: "Apakah barang elektronik dan perhiasan ikut dijamin?", a: "Barang elektronik umum termasuk dalam jaminan isi rumah. Untuk barang berharga seperti perhiasan dan jam tangan mewah, biasanya perlu dideklarasikan khusus dengan limit tersendiri." },
        { q: "Berapa lama proses klaim jika rumah kebakaran atau kebanjiran?", a: "Setelah laporan awal (idealnya dalam 3x24 jam), proses survei dan verifikasi klaim rumah tinggal umumnya selesai dalam 14–30 hari kerja tergantung besarnya kerugian." },
      ]}
      artikelLinks={[
        { href: "/artikel/kenapa-perumahan-bekasi-timur-rawan-banjir-musiman", label: "Kenapa Perumahan di Bekasi Rawan Banjir Musiman", icon: "📖" },
        { href: "/artikel/kesalahan-nilai-pertanggungan-rumah-bekasi", label: "5 Kesalahan Umum Nilai Pertanggungan Rumah", icon: "📖" },
      ]}
      internalLinks={[
        { href: "/asuransi-properti/kebakaran", label: "Asuransi Kebakaran", icon: "🔥" },
        { href: "/asuransi-properti/property-all-risk", label: "Property All Risk", icon: "🏢" },
        { href: "/asuransi-kendaraan/mobil", label: "Asuransi Mobil", icon: "🚗" },
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "🛡️" },
      ]}
      ctaEmoji="🏡"
      ctaTitle="Lindungi Rumah, Lindungi Keluarga"
      ctaDesc="Konsultasikan kebutuhan asuransi rumah Anda di Bekasi — cepat, terjangkau, dan tanpa tekanan untuk membeli."
    />
  );
}
