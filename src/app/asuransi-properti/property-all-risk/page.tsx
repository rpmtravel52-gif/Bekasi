import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Property All Risk (PAR) Bekasi – Proteksi Pabrik & Gedung Komersial",
  description: "Asuransi Property All Risk (PAR) untuk pabrik, gudang besar, dan gedung komersial di kawasan industri Bekasi — Jababeka, MM2100, EJIP, Delta Silicon. Simulasi premi & konsultasi gratis.",
  keywords: "property all risk bekasi, PAR bekasi, asuransi pabrik jababeka, asuransi gedung komersial bekasi, asuransi industri mm2100",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-properti/property-all-risk" },
};

export default function ParPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Properti", href: "/asuransi-properti" }, { label: "Property All Risk" }]}
      pillarHref="/asuransi-properti"
      pillarLabel="Asuransi Properti"
      heroEmoji="🏢"
      heroBadge="Property All Risk (PAR)"
      heroTitle={<>Proteksi Menyeluruh untuk<br /><em className="not-italic text-gold">Pabrik & Aset Bernilai Tinggi</em></>}
      heroIntro="Property All Risk (PAR) adalah polis dengan basis all-risk — menjamin seluruh kerugian fisik yang tiba-tiba dan tidak terduga, kecuali yang secara eksplisit dikecualikan dalam polis. Cocok untuk pabrik, gudang besar, dan gedung komersial di kawasan industri Bekasi seperti Jababeka, MM2100, EJIP, dan Delta Silicon, di mana nilai aset dan kompleksitas operasional jauh lebih tinggi dari properti biasa."
      heroStats={[
        { num: "All-Risk", lbl: "Basis Jaminan" },
        { num: "OJK", lbl: "Berlisensi Resmi" },
        { num: "Gratis", lbl: "Konsultasi & Survei" },
      ]}
      jaminanTitle="Cakupan Jaminan Property All Risk"
      jaminanSubtitle="PAR menjamin hampir seluruh risiko kerusakan fisik mendadak, mulai dari kebakaran hingga kerusakan mesin akibat kejadian tak terduga."
      jaminanItems={[
        { icon: "🔥", label: "Kebakaran, Petir & Ledakan", desc: "Basis jaminan FLEXAS tetap tercakup penuh di dalam basis all-risk PAR." },
        { icon: "💥", label: "Kerusakan Akibat Benturan", desc: "Kerusakan bangunan akibat tabrakan kendaraan, jatuhnya benda, atau benturan alat berat di area pabrik." },
        { icon: "🌪️", label: "Angin Topan & Badai", desc: "Kerusakan bangunan akibat angin kencang, badai, dan hujan es." },
        { icon: "💧", label: "Kebocoran & Kerusakan Air", desc: "Kerusakan akibat kebocoran pipa, tangki air, atau sistem sprinkler yang tidak disengaja." },
        { icon: "🔧", label: "Kecelakaan Mekanis Bangunan", desc: "Kerusakan struktur akibat kegagalan mekanis yang tidak disengaja pada bagian tetap bangunan." },
        { icon: "🏗️", label: "Perluasan Business Interruption", desc: "Opsional — mengganti kerugian pendapatan usaha selama proses perbaikan pasca klaim besar." },
      ]}
      pengecualianItems={[
        "Keausan wajar (wear and tear) dan kerusakan bertahap",
        "Kerusakan akibat kesalahan desain atau konstruksi",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Kelalaian yang disengaja oleh tertanggung",
        "Gempa bumi & banjir (kecuali sebagai perluasan tambahan)",
        "Kerugian tidak langsung tanpa perluasan Business Interruption",
      ]}
      simulasiTitle="Contoh Simulasi Premi PAR Pabrik"
      simulasiSubtitle="Ilustrasi untuk pabrik kelas konstruksi 1 (beton permanen) di kawasan industri Bekasi. Premi final ditentukan setelah survei risiko oleh perusahaan asuransi."
      simulasiRows={[
        { label: "Nilai Pertanggungan Bangunan", value: "Rp 15.000.000.000" },
        { label: "Nilai Pertanggungan Mesin & Isi", value: "Rp 10.000.000.000" },
        { label: "Kelas Konstruksi", value: "Kelas 1 (Beton Permanen)" },
        { label: "Lokasi", value: "Kawasan Industri Jababeka" },
        { label: "Rate Estimasi", value: "0,08% – 0,15% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 20.000.000 – Rp 37.500.000", sublabel: "untuk total pertanggungan Rp 25 miliar" }}
      simulasiCatatan="Rate final tergantung hasil survei risiko fisik (fire protection, jarak ke pemadam kebakaran, riwayat klaim) dan cakupan perluasan yang dipilih. Hubungi kami untuk penawaran resmi sesuai kondisi pabrik Anda."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi Property All Risk (PAR) untuk pabrik/gedung saya di Bekasi. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi identitas pemilik / penanggung jawab perusahaan (KTP/NIB)",
        "Data teknis bangunan: luas, tahun bangun, kelas konstruksi",
        "Daftar aset yang diasuransikan (bangunan, mesin, stok)",
        "Nilai pertanggungan berdasarkan replacement cost (bukan harga beli)",
        "Foto lokasi & sistem proteksi kebakaran yang tersedia (APAR, hydrant, sprinkler)",
        "Riwayat klaim asuransi properti sebelumnya (jika ada)",
        "Survei risiko oleh surveyor perusahaan asuransi sebelum polis terbit",
      ]}
      faqItems={[
        { q: "Apa beda Property All Risk dengan asuransi kebakaran biasa?", a: "Asuransi kebakaran hanya menjamin risiko FLEXAS (kebakaran, petir, ledakan, pesawat jatuh, asap). PAR menjamin semua risiko fisik yang tiba-tiba dan tidak terduga, kecuali yang dikecualikan — cakupannya jauh lebih luas, cocok untuk pabrik dengan operasional kompleks." },
        { q: "Apakah mesin produksi ikut dijamin dalam PAR?", a: "Ya, mesin dan peralatan produksi bisa dimasukkan sebagai bagian dari nilai pertanggungan PAR untuk risiko kerusakan fisik. Namun untuk kerusakan akibat gangguan mekanis/elektris murni pada mesin, biasanya lebih tepat dilengkapi dengan Machinery Breakdown Insurance terpisah." },
        { q: "Apakah PAR bisa diperluas dengan banjir dan gempa?", a: "Bisa, sebagai perluasan tambahan dengan surcharge premi. Untuk pabrik di kawasan Bekasi yang berdekatan dengan aliran sungai, perluasan banjir sangat direkomendasikan." },
        { q: "Berapa lama proses penerbitan polis PAR?", a: "Untuk pertanggungan besar, biasanya perlu survei risiko fisik terlebih dahulu oleh surveyor perusahaan asuransi. Proses dari survei hingga polis terbit umumnya 5–10 hari kerja." },
      ]}
      internalLinks={[
        { href: "/asuransi-properti/pabrik", label: "Asuransi Pabrik", icon: "🏭" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
        { href: "/asuransi-engineering", label: "Engineering Insurance", icon: "⚙️" },
        { href: "/asuransi-liability", label: "Liability Insurance", icon: "🛡️" },
      ]}
      ctaEmoji="🏢"
      ctaTitle="Aset Bernilai Tinggi Butuh Proteksi Setara"
      ctaDesc="Konsultasikan kebutuhan Property All Risk untuk pabrik, gudang, atau gedung komersial Anda di Bekasi. Gratis, tanpa tekanan."
    />
  );
}
