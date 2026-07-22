import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_LIABILITY, NOTE_LIABILITY } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi Public Liability Bekasi – Proteksi Pihak Ketiga",
  description: "Asuransi Public Liability untuk bisnis di Bekasi. Lindungi perusahaan dari klaim pihak ketiga akibat cedera badan atau kerusakan properti. Konsultasi gratis.",
  keywords: "public liability bekasi, asuransi tanggung gugat bekasi, asuransi tanggung jawab hukum bekasi, third party liability bekasi",
  alternates: { canonical: "https://asuransibekasi.biz.id/asuransi-liability/public-liability" },
};

export default function PublicLiabilityPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Liability", href: "/asuransi-liability" }, { label: "Public Liability" }]}
      pillarHref="/asuransi-liability"
      pillarLabel="Asuransi Liability"
      heroEmoji="👥"
      heroBadge="Public Liability"
      heroTitle={<>Lindungi Bisnis dari Tuntutan<br /><em className="not-italic text-gold">Pihak Ketiga</em></>}
      heroIntro="Public Liability (Tanggung Gugat Umum) melindungi perusahaan Anda dari tuntutan ganti rugi pihak ketiga akibat cedera badan atau kerusakan properti yang terjadi karena operasional bisnis Anda. Relevan untuk pabrik, gudang, ritel, dan bisnis apa pun di Bekasi yang menerima kunjungan tamu, pelanggan, atau pihak luar ke lokasi usaha."
      heroStats={[
        { num: "Pihak Ketiga", lbl: "Fokus Perlindungan" },
        { num: "Fleksibel", lbl: "Limit Pertanggungan" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Public Liability"
      jaminanSubtitle="Menjamin tanggung jawab hukum perusahaan atas kerugian yang dialami pihak ketiga akibat operasional bisnis Anda."
      jaminanItems={[
        { icon: "🩹", label: "Cedera Badan Pihak Ketiga", desc: "Biaya pengobatan dan ganti rugi jika pengunjung, pelanggan, atau tamu cedera di lokasi usaha Anda." },
        { icon: "🏚️", label: "Kerusakan Properti Pihak Ketiga", desc: "Ganti rugi jika operasional bisnis Anda menyebabkan kerusakan properti milik pihak lain, misalnya bangunan tetangga." },
        { icon: "⚖️", label: "Biaya Hukum & Litigasi", desc: "Biaya pembelaan hukum, pengacara, dan proses persidangan jika perusahaan Anda digugat." },
        { icon: "🚧", label: "Risiko Operasional di Lokasi Usaha", desc: "Kecelakaan yang terjadi akibat aktivitas normal bisnis, seperti lantai licin atau rak yang roboh di area pelanggan." },
        { icon: "📦", label: "Kegiatan di Luar Lokasi Usaha", desc: "Perluasan opsional untuk kegiatan operasional yang berlangsung di luar lokasi utama, misalnya pengiriman atau instalasi di tempat klien." },
      ]}
      pengecualianItems={[
        "Cedera atau kerugian yang dialami karyawan sendiri (perlu Employer Liability terpisah)",
        "Kerugian yang disengaja oleh tertanggung",
        "Denda dan sanksi pidana dari pemerintah",
        "Pencemaran lingkungan bertahap (perlu polis liability lingkungan/limbah B3 terpisah)",
        "Kerugian akibat produk yang telah diserahkan ke pihak ketiga (perlu Product Liability terpisah)",
        "Perang, terorisme, dan tindakan kesengajaan pihak ketiga",
      ]}
      simulasiTitle="Contoh Simulasi Premi Public Liability"
      simulasiSubtitle="Ilustrasi untuk usaha ritel/pabrik skala menengah di Bekasi. Premi final tergantung jenis usaha dan limit pertanggungan yang dipilih."
      simulasiRows={[
        { label: "Limit Pertanggungan per Kejadian", value: "Rp 2.000.000.000" },
        { label: "Limit Pertanggungan Agregat/Tahun", value: "Rp 5.000.000.000" },
        { label: "Jenis Usaha", value: "Pabrik Manufaktur Ringan" },
        { label: "Lokasi", value: "Kawasan Industri Bekasi" },
        { label: "Rate Estimasi", value: "Rp 2.500.000 – Rp 8.000.000 / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 2.500.000 – Rp 8.000.000", sublabel: "tergantung jenis & skala usaha" }}
      simulasiCatatan="Rate sangat dipengaruhi jenis usaha (pabrik kimia berbeda dengan kantor biasa), jumlah pengunjung/karyawan, dan riwayat klaim. Hubungi kami untuk penawaran sesuai profil bisnis Anda."
      simulasiWaMsg="Halo Nur, saya ingin konsultasi asuransi Public Liability untuk bisnis saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_LIABILITY}
      pengecualianNote={NOTE_LIABILITY}
      syaratItems={[
        "Fotokopi identitas penanggung jawab & legalitas perusahaan (NIB/SIUP/Akta)",
        "Deskripsi jenis usaha dan aktivitas operasional",
        "Jumlah karyawan dan estimasi pengunjung/pelanggan harian",
        "Alamat lokasi usaha lengkap",
        "Riwayat klaim liability sebelumnya (jika ada)",
        "Limit pertanggungan yang diinginkan (per kejadian & agregat tahunan)",
      ]}
      faqItems={[
        { q: "Siapa saja yang termasuk 'pihak ketiga' dalam polis ini?", a: "Pihak ketiga adalah siapa pun di luar perusahaan Anda dan karyawan Anda — misalnya pelanggan, tamu, vendor, kurir, atau masyarakat umum yang dirugikan akibat operasional bisnis Anda." },
        { q: "Apakah Public Liability menjamin kecelakaan kerja karyawan?", a: "Tidak. Cedera karyawan sendiri dijamin melalui produk terpisah seperti Employer Liability atau BPJS Ketenagakerjaan, bukan Public Liability yang fokus pada pihak ketiga di luar perusahaan." },
        { q: "Berapa limit pertanggungan yang ideal untuk pabrik di Bekasi?", a: "Tergantung skala operasional dan tingkat risiko. Untuk pabrik dengan lalu lintas pengunjung tinggi atau proses produksi berisiko, limit yang lebih besar (Rp 5 miliar ke atas) umumnya direkomendasikan. Kami bantu hitung kebutuhan yang tepat berdasarkan profil bisnis Anda." },
        { q: "Apakah polis ini menjamin kejadian yang terjadi di luar lokasi pabrik?", a: "Tergantung perluasan yang dipilih. Standar polis biasanya fokus pada lokasi usaha, namun bisa diperluas untuk aktivitas di luar lokasi seperti pengiriman atau instalasi di tempat klien." },
      ]}
      internalLinks={[
        { href: "/asuransi-liability/limbah-b3", label: "Asuransi Limbah B3", icon: "⚗️" },
        { href: "/asuransi-properti/pabrik", label: "Asuransi Pabrik", icon: "🏭" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
      ]}
      ctaEmoji="👥"
      ctaTitle="Satu Kecelakaan Pihak Ketiga Bisa Berujung Gugatan Besar"
      ctaDesc="Konsultasikan kebutuhan Public Liability untuk bisnis Anda di Bekasi — gratis, disesuaikan dengan jenis usaha Anda."
    />
  );
}
