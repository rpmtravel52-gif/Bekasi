import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_KENDARAAN, NOTE_KENDARAAN } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi Mobil Bekasi – All Risk & TLO, Konvensional & Listrik",
  description: "Asuransi mobil di Bekasi untuk kendaraan konvensional dan listrik. Pilihan All Risk atau TLO dengan premi sesuai tarif OJK. Kalkulator premi instan & konsultasi gratis.",
  keywords: "asuransi mobil bekasi, asuransi mobil listrik bekasi, all risk bekasi, tlo bekasi, kalkulator premi mobil bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-kendaraan/mobil" },
};

export default function MobilPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }, { label: "Asuransi Mobil" }]}
      pillarHref="/asuransi-kendaraan"
      pillarLabel="Asuransi Kendaraan"
      heroEmoji="🚗"
      heroBadge="Asuransi Mobil"
      heroTitle={<>Proteksi Mobil Anda,<br /><em className="not-italic text-gold">Konvensional maupun Listrik</em></>}
      heroIntro="Asuransi mobil melindungi kendaraan pribadi Anda dari risiko kecelakaan, kerusakan, hingga kehilangan. Tersedia dua jenis perlindungan — Comprehensive (All Risk) dan TLO (Total Loss Only) — dengan premi dihitung berdasarkan tarif referensi OJK, termasuk untuk mobil listrik (EV) yang semakin banyak digunakan di Bekasi."
      heroStats={[
        { num: "2 Jenis", lbl: "All Risk & TLO" },
        { num: "EV Ready", lbl: "Mobil Listrik" },
        { num: "Instan", lbl: "Kalkulator Premi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Mobil"
      jaminanSubtitle="Pilih tingkat perlindungan sesuai kebutuhan dan usia kendaraan Anda."
      jaminanItems={[
        { icon: "💥", label: "Kerusakan Akibat Kecelakaan", desc: "All Risk menjamin kerusakan ringan hingga berat akibat tabrakan, benturan, atau kecelakaan lalu lintas." },
        { icon: "🔓", label: "Kehilangan Kendaraan (Pencurian)", desc: "Kedua jenis polis (All Risk & TLO) menjamin kehilangan kendaraan akibat pencurian." },
        { icon: "🔥", label: "Kebakaran & Ledakan", desc: "Kerusakan atau kehilangan total kendaraan akibat kebakaran termasuk dalam jaminan dasar." },
        { icon: "🌊", label: "Perluasan Banjir", desc: "Perluasan opsional yang sangat relevan mengingat sejumlah ruas jalan Bekasi rawan genangan saat musim hujan." },
        { icon: "👤", label: "Tanggung Jawab Pihak Ketiga (TPL)", desc: "Perluasan untuk ganti rugi cedera atau kerusakan properti pihak ketiga akibat kecelakaan yang melibatkan kendaraan Anda." },
        { icon: "🔋", label: "Perluasan Khusus Mobil Listrik", desc: "Jaminan tambahan untuk baterai dan komponen kelistrikan EV yang memiliki karakteristik risiko berbeda dari mobil konvensional." },
      ]}
      pengecualianItems={[
        "Kerusakan akibat pengemudi tanpa SIM yang berlaku",
        "Penggunaan kendaraan di luar tujuan yang dideklarasikan (misal: balap liar)",
        "Keausan wajar (ban, rem, aki) akibat pemakaian normal",
        "Kerusakan mesin akibat kelalaian perawatan rutin",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Kerusakan akibat pengemudi dalam pengaruh alkohol/narkoba",
      ]}
      varianTitle="All Risk vs TLO — Mana yang Tepat?"
      varianSubtitle="Pilih jenis perlindungan sesuai usia kendaraan dan profil penggunaan Anda."
      varianItems={[
        {
          icon: "🛡️",
          title: "Comprehensive (All Risk)",
          desc: "Menjamin kerusakan ringan hingga berat, kecelakaan, dan kehilangan kendaraan. Ideal untuk mobil baru atau berusia di bawah 5 tahun.",
          manfaat: ["Klaim kerusakan ringan (lecet, penyok) tetap bisa diajukan", "Perlindungan maksimal untuk mobil bernilai tinggi", "Cocok untuk penggunaan harian di lalu lintas padat Bekasi"],
          cocok: "Mobil baru, mobil kredit/leasing, penggunaan harian intensif",
        },
        {
          icon: "🔒",
          title: "TLO (Total Loss Only)",
          desc: "Hanya menjamin kerugian jika kendaraan hilang dicuri atau rusak parah di atas 75% dari nilai kendaraan. Premi jauh lebih terjangkau.",
          manfaat: ["Premi lebih rendah dibanding All Risk", "Cocok untuk mobil berusia lebih dari 5 tahun", "Tetap terlindungi dari risiko kehilangan total"],
          cocok: "Mobil berusia lanjut, kendaraan cadangan, budget terbatas",
        },
      ]}
      simulasiTitle="Simulasi Premi Mobil Anda"
      simulasiSubtitle="Gunakan kalkulator interaktif di halaman utama untuk estimasi premi instan sesuai plat, jenis kendaraan, dan harga mobil Anda."
      simulasiRows={[
        { label: "Contoh Harga Kendaraan", value: "Rp 250.000.000" },
        { label: "Wilayah Plat", value: "B – Bekasi/Jakarta" },
        { label: "Jenis Perlindungan", value: "All Risk" },
        { label: "Rate Estimasi", value: "2,08% – 3,26% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 5.200.000 – Rp 8.150.000", sublabel: "untuk mobil senilai Rp 250 juta" }}
      simulasiCatatan="Ini contoh ilustrasi. Untuk perhitungan sesuai kendaraan Anda secara spesifik (harga, plat, jenis perlindungan), gunakan kalkulator premi interaktif di halaman utama kami."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi asuransi mobil saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_KENDARAAN}
      pengecualianNote={NOTE_KENDARAAN}
      syaratItems={[
        "Fotokopi KTP pemilik kendaraan",
        "Fotokopi STNK kendaraan yang masih berlaku",
        "Foto kendaraan tampak depan, belakang, dan samping (kondisi terkini)",
        "Data harga kendaraan (harga pasar saat ini)",
        "Nomor rangka dan nomor mesin kendaraan",
        "Survei kondisi kendaraan (untuk mobil di atas usia tertentu)",
      ]}
      faqItems={[
        { q: "Apakah mobil listrik (EV) bisa diasuransikan dengan All Risk biasa?", a: "Bisa, namun sebaiknya menggunakan produk khusus EV yang mencakup perluasan untuk baterai dan komponen kelistrikan, karena risiko dan biaya perbaikan mobil listrik berbeda dari mobil konvensional." },
        { q: "Berapa lama proses klaim asuransi mobil?", a: "Untuk klaim kerusakan ringan, proses biasanya selesai dalam 3–7 hari kerja setelah survei bengkel rekanan. Klaim kehilangan total (TLO) memerlukan proses investigasi lebih lama, sekitar 14–30 hari." },
        { q: "Apakah perlu perluasan banjir untuk mobil di Bekasi?", a: "Sangat disarankan, terutama jika kendaraan sering melintasi atau diparkir di area yang rawan genangan saat musim hujan. Biaya perluasan relatif kecil dibanding potensi kerugian." },
        { q: "Apakah premi mobil bisa dicicil?", a: "Tergantung kebijakan perusahaan asuransi yang dipilih. Beberapa insurer menawarkan skema cicilan 2–4 kali dalam setahun. Kami bisa bantu carikan opsi yang sesuai kebutuhan finansial Anda." },
      ]}
      internalLinks={[
        { href: "/#kalkulator", label: "Kalkulator Premi Interaktif", icon: "🧮" },
        { href: "/asuransi-kendaraan/bus", label: "Asuransi Bus", icon: "🚌" },
        { href: "/asuransi-kendaraan/truk-kendaraan-niaga", label: "Truk & Kendaraan Niaga", icon: "🚛" },
        { href: "/asuransi-properti/rumah", label: "Asuransi Rumah", icon: "🏡" },
      ]}
      ctaEmoji="🚗"
      ctaTitle="Hitung Premi Mobil Anda dalam Hitungan Detik"
      ctaDesc="Gunakan kalkulator premi interaktif kami atau konsultasi langsung dengan Pak Rio — gratis, tanpa tekanan."
    />
  );
}
