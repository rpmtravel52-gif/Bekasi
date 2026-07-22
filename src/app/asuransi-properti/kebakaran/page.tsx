import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_PROPERTI, NOTE_PROPERTI } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi Kebakaran Bekasi – Ruko, Toko & Bangunan Usaha",
  description: "Asuransi kebakaran (FLEXAS) untuk ruko, toko, dan bangunan usaha di Bekasi. Premi terjangkau, proses cepat, konsultasi gratis dengan praktisi lokal Bekasi.",
  keywords: "asuransi kebakaran bekasi, asuransi ruko bekasi, asuransi toko bekasi, flexas bekasi, asuransi bangunan usaha bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-properti/kebakaran" },
};

export default function KebakaranPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Properti", href: "/asuransi-properti" }, { label: "Asuransi Kebakaran" }]}
      pillarHref="/asuransi-properti"
      pillarLabel="Asuransi Properti"
      heroEmoji="🔥"
      heroBadge="Asuransi Kebakaran"
      heroTitle={<>Lindungi Ruko & Bangunan Usaha<br /><em className="not-italic text-gold">dari Risiko Kebakaran</em></>}
      heroIntro="Asuransi kebakaran dengan jaminan standar FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke) adalah fondasi perlindungan properti komersial. Cocok untuk ruko, toko, kantor kecil-menengah, dan bangunan usaha di sepanjang jalur niaga Bekasi yang padat aktivitas dan instalasi listrik."
      heroStats={[
        { num: "FLEXAS", lbl: "Jaminan Standar" },
        { num: "1-2 Hari", lbl: "Estimasi Penerbitan" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan FLEXAS"
      jaminanSubtitle="Lima risiko utama yang dijamin dalam polis kebakaran standar Indonesia."
      jaminanItems={[
        { icon: "🔥", label: "Fire (Kebakaran)", desc: "Kerugian akibat kebakaran, termasuk kerusakan akibat upaya pemadaman kebakaran itu sendiri." },
        { icon: "⚡", label: "Lightning (Petir)", desc: "Kerusakan langsung akibat sambaran petir pada bangunan dan instalasinya." },
        { icon: "💥", label: "Explosion (Ledakan)", desc: "Kerusakan akibat ledakan, termasuk ledakan tabung gas atau instalasi listrik." },
        { icon: "✈️", label: "Aircraft Impact", desc: "Kerusakan akibat benturan pesawat terbang atau benda yang jatuh darinya." },
        { icon: "💨", label: "Smoke (Asap)", desc: "Kerusakan akibat asap yang timbul mendadak dari kebakaran di properti sekitar." },
        { icon: "🧯", label: "Perluasan Opsional", desc: "Bisa ditambah risiko kejahatan, huru-hara (SRCC), banjir, dan gempa sesuai kebutuhan." },
      ]}
      pengecualianItems={[
        "Kebakaran akibat kesengajaan tertanggung",
        "Kerusakan akibat proses fermentasi atau pemanasan sendiri",
        "Barang yang mudah meledak yang disimpan tanpa deklarasi",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Banjir dan gempa bumi (kecuali sebagai perluasan tambahan)",
        "Kerusakan bertahap akibat kelalaian pemeliharaan",
      ]}
      simulasiTitle="Contoh Simulasi Premi Kebakaran Ruko"
      simulasiSubtitle="Ilustrasi untuk ruko 2 lantai kelas konstruksi 1 di kawasan niaga Bekasi. Premi final berdasarkan nilai pertanggungan aktual."
      simulasiRows={[
        { label: "Nilai Pertanggungan Bangunan", value: "Rp 800.000.000" },
        { label: "Nilai Pertanggungan Isi Toko", value: "Rp 200.000.000" },
        { label: "Kelas Konstruksi", value: "Kelas 1 (Beton/Bata)" },
        { label: "Lokasi", value: "Ruko Bekasi Timur" },
        { label: "Rate Estimasi", value: "0,05% – 0,12% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 500.000 – Rp 1.200.000", sublabel: "untuk pertanggungan Rp 1 miliar" }}
      simulasiCatatan="Rate dipengaruhi kelas konstruksi, lokasi, dan jenis usaha yang berjalan di dalam bangunan (misal: usaha dengan bahan mudah terbakar akan berpremi lebih tinggi)."
      simulasiWaMsg="Halo Nur, saya ingin konsultasi asuransi kebakaran untuk ruko/toko saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_PROPERTI}
      pengecualianNote={NOTE_PROPERTI}
      syaratItems={[
        "Fotokopi KTP pemilik bangunan / penanggung jawab usaha",
        "Bukti kepemilikan bangunan (sertifikat/AJB) atau surat sewa jika disewa",
        "Data luas bangunan dan jenis konstruksi",
        "Jenis usaha yang beroperasi di dalam bangunan",
        "Estimasi nilai pertanggungan bangunan dan isi",
        "Foto tampak depan dan kondisi bangunan terkini",
      ]}
      faqItems={[
        { q: "Apa itu FLEXAS dalam asuransi kebakaran?", a: "FLEXAS adalah singkatan dari Fire, Lightning, Explosion, Aircraft impact, dan Smoke — lima risiko standar yang dijamin dalam polis kebakaran di Indonesia sesuai Polis Standar Kebakaran Indonesia (PSKI)." },
        { q: "Apakah isi ruko seperti barang dagangan ikut dijamin?", a: "Bisa, dengan menambahkan jaminan isi bangunan (contents) secara terpisah dari nilai bangunan. Ini penting untuk ruko dengan stok barang dagangan bernilai tinggi." },
        { q: "Apakah perlu perluasan banjir untuk ruko di Bekasi?", a: "Sangat disarankan, terutama jika lokasi ruko berada di area yang pernah mengalami luapan air musiman. Perluasan ini menambah premi relatif kecil dibanding potensi kerugian." },
        { q: "Bagaimana jika saya menyewa ruko, bukan pemilik?", a: "Anda tetap bisa mengasuransikan isi bangunan dan kepentingan usaha Anda, meski bukan pemilik bangunan. Pemilik bangunan biasanya mengasuransikan struktur bangunannya secara terpisah." },
      ]}
      artikelLinks={[
        { href: "/artikel/panduan-asuransi-ruko-bekasi", label: "Panduan Lengkap Asuransi Ruko di Jalur Niaga Bekasi", icon: "📖" },
        { href: "/artikel/par-vs-kebakaran-gudang-bekasi", label: "PAR vs Kebakaran: Mana yang Cocok untuk Gudang Anda?", icon: "📖" },
      ]}
      internalLinks={[
        { href: "/asuransi-properti/property-all-risk", label: "Property All Risk", icon: "🏢" },
        { href: "/asuransi-properti/rumah", label: "Asuransi Rumah", icon: "🏡" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "🛡️" },
      ]}
      ctaEmoji="🔥"
      ctaTitle="Jangan Tunggu Kebakaran Terjadi"
      ctaDesc="Lindungi ruko dan bangunan usaha Anda di Bekasi mulai hari ini. Konsultasi gratis, proses cepat."
    />
  );
}
