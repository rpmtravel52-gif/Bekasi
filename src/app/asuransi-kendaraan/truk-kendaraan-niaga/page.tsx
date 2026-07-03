import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Asuransi Truk & Kendaraan Niaga Bekasi – Ekspedisi & Logistik",
  description: "Asuransi truk dan kendaraan niaga untuk pelaku usaha ekspedisi dan logistik di kawasan industri Bekasi: Jababeka, MM2100, EJIP. Perlindungan kendaraan dan muatan. Konsultasi gratis.",
  keywords: "asuransi truk bekasi, asuransi kendaraan niaga bekasi, asuransi ekspedisi bekasi, asuransi logistik bekasi, asuransi truk jababeka",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-kendaraan/truk-kendaraan-niaga" },
};

export default function TrukPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }, { label: "Truk & Kendaraan Niaga" }]}
      pillarHref="/asuransi-kendaraan"
      pillarLabel="Asuransi Kendaraan"
      heroEmoji="🚛"
      heroBadge="Truk & Kendaraan Niaga"
      heroTitle={<>Roda Penggerak Bisnis Anda<br /><em className="not-italic text-gold">Layak Dilindungi Penuh</em></>}
      heroIntro="Bekasi adalah salah satu simpul logistik terpadat di Jabodetabek, dengan lalu lintas truk ekspedisi yang menghubungkan kawasan industri Jababeka, MM2100, dan EJIP ke seluruh Indonesia. Asuransi truk dan kendaraan niaga melindungi armada operasional Anda dari kecelakaan, kerusakan, hingga kehilangan — menjaga kelangsungan rantai pasok bisnis Anda."
      heroStats={[
        { num: "Truk & Box", lbl: "Semua Jenis Niaga" },
        { num: "Fleet Ready", lbl: "Bisa untuk Armada" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Truk & Kendaraan Niaga"
      jaminanSubtitle="Perlindungan untuk kendaraan operasional yang bekerja setiap hari mengangkut barang dan muatan."
      jaminanItems={[
        { icon: "💥", label: "Kerusakan Akibat Kecelakaan", desc: "Kerusakan ringan hingga berat pada truk akibat kecelakaan lalu lintas selama operasional pengiriman." },
        { icon: "🔓", label: "Kehilangan Kendaraan", desc: "Jaminan kehilangan total truk akibat pencurian atau perampasan, termasuk risiko pembegalan di jalan." },
        { icon: "👤", label: "Tanggung Jawab Pihak Ketiga (TPL)", desc: "Ganti rugi cedera atau kerusakan properti pihak ketiga akibat kecelakaan yang melibatkan truk Anda." },
        { icon: "📦", label: "Perluasan Tanggung Jawab Muatan", desc: "Perlindungan tambahan untuk kerugian muatan/kargo yang diangkut, penting bagi jasa ekspedisi pihak ketiga." },
        { icon: "🔥", label: "Kebakaran & Ledakan", desc: "Kerusakan atau kehilangan total kendaraan akibat kebakaran termasuk dalam jaminan dasar." },
        { icon: "🚚", label: "Perlindungan Fleet/Armada", desc: "Bisa dikelola dalam satu polis untuk perusahaan dengan banyak unit truk, dengan premi lebih efisien dibanding polis satuan." },
      ]}
      pengecualianItems={[
        "Pengemudi tanpa SIM B Umum yang berlaku",
        "Muatan melebihi kapasitas/tonase yang diizinkan (over dimension over load)",
        "Penggunaan di luar rute atau tujuan bisnis yang dideklarasikan",
        "Keausan wajar (ban, kopling, rem) akibat pemakaian operasional normal",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Kerusakan akibat pengemudi dalam pengaruh alkohol/narkoba",
      ]}
      varianTitle="Pilihan Skema untuk Bisnis Ekspedisi"
      varianSubtitle="Sesuaikan skema polis dengan skala armada operasional Anda."
      varianItems={[
        {
          icon: "🚚",
          title: "Polis Satuan (Single Unit)",
          desc: "Cocok untuk pelaku usaha dengan 1-2 unit truk operasional. Setiap kendaraan memiliki polis tersendiri sesuai kebutuhan spesifiknya.",
          manfaat: ["Fleksibel menyesuaikan kebutuhan per kendaraan", "Cocok untuk usaha ekspedisi skala kecil", "Mudah menambah unit baru secara bertahap"],
          cocok: "Usaha ekspedisi kecil, 1-2 unit truk",
        },
        {
          icon: "🚛",
          title: "Fleet Insurance (Armada)",
          desc: "Mengelola banyak unit truk dalam satu polis terpadu — lebih efisien dari sisi premi dan administrasi untuk perusahaan logistik skala menengah-besar.",
          manfaat: ["Premi lebih efisien dibanding polis satuan", "Satu jatuh tempo untuk seluruh armada", "Pengelolaan klaim lebih terkoordinasi"],
          cocok: "Perusahaan logistik & distribusi, 5+ unit truk",
        },
      ]}
      simulasiTitle="Contoh Simulasi Premi Truk Niaga"
      simulasiSubtitle="Ilustrasi untuk truk box operasional ekspedisi di kawasan industri Bekasi. Premi final tergantung jenis truk dan riwayat klaim."
      simulasiRows={[
        { label: "Harga Kendaraan (Truk Box)", value: "Rp 400.000.000" },
        { label: "Jenis Penggunaan", value: "Ekspedisi Kawasan Industri" },
        { label: "Jenis Perlindungan", value: "All Risk + TPL" },
        { label: "Rate Estimasi", value: "3,0% – 4,5% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 12.000.000 – Rp 18.000.000", sublabel: "untuk 1 unit truk senilai Rp 400 juta" }}
      simulasiCatatan="Rate kendaraan niaga umumnya lebih tinggi dari kendaraan pribadi karena intensitas penggunaan. Untuk armada 5+ unit, hubungi kami untuk penawaran fleet insurance yang lebih efisien."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi asuransi truk/kendaraan niaga untuk usaha ekspedisi saya di Bekasi. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi KTP pemilik / penanggung jawab perusahaan",
        "Fotokopi STNK dan KIR truk yang masih berlaku",
        "Legalitas usaha ekspedisi (NIB/SIUP jika berbadan usaha)",
        "Data jenis dan kapasitas angkut truk",
        "Rute operasional dan jenis muatan yang biasa diangkut",
        "Data pengemudi (SIM B Umum) dan riwayat klaim sebelumnya (jika ada)",
      ]}
      faqItems={[
        { q: "Apakah muatan/kargo yang diangkut ikut dijamin dalam polis truk?", a: "Tidak otomatis. Perlindungan dasar hanya mencakup kendaraan. Untuk melindungi nilai muatan yang diangkut, perlu ditambahkan perluasan tanggung jawab muatan atau polis Asuransi Kargo terpisah, terutama bagi jasa ekspedisi pihak ketiga." },
        { q: "Apa keuntungan fleet insurance dibanding polis satuan?", a: "Fleet insurance mengelola banyak unit dalam satu polis dengan satu jatuh tempo, sehingga administrasi lebih sederhana dan premi rata-rata cenderung lebih efisien dibanding mengasuransikan tiap unit secara terpisah." },
        { q: "Apakah premi truk niaga lebih mahal dari mobil pribadi?", a: "Umumnya ya, karena intensitas penggunaan truk niaga jauh lebih tinggi dan berisiko dibanding mobil pribadi yang dipakai sehari-hari untuk keperluan non-komersial." },
        { q: "Bagaimana jika truk mengalami kecelakaan di luar kota saat mengirim barang?", a: "Selama sesuai dengan tujuan dan rute operasional yang dideklarasikan dalam polis, kecelakaan di luar kota tetap dijamin. Segera hubungi kami untuk panduan langkah klaim jika kejadian terjadi di luar Bekasi." },
      ]}
      internalLinks={[
        { href: "/asuransi-kendaraan/mobil", label: "Asuransi Mobil", icon: "🚗" },
        { href: "/asuransi-kendaraan/bus", label: "Asuransi Bus", icon: "🚌" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "🛡️" },
      ]}
      ctaEmoji="🚛"
      ctaTitle="Jaga Roda Bisnis Ekspedisi Anda Tetap Berputar"
      ctaDesc="Konsultasikan kebutuhan asuransi truk atau armada niaga Anda di Bekasi — gratis, sesuai skala usaha Anda."
    />
  );
}
