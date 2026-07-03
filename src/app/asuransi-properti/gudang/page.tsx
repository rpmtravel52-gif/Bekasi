import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";

export const metadata: Metadata = {
  title: "Asuransi Gudang Bekasi – Warehouse, Stok Barang & Pergudangan",
  description: "Asuransi gudang (warehouse) di Bekasi untuk melindungi bangunan dan stok barang dari kebakaran, pencurian, dan kerusakan fisik. Cocok untuk pelaku logistik & distribusi di kawasan Bekasi.",
  keywords: "asuransi gudang bekasi, asuransi warehouse bekasi, asuransi pergudangan bekasi, asuransi stok barang bekasi, asuransi logistik bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-properti/gudang" },
};

export default function GudangPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Properti", href: "/asuransi-properti" }, { label: "Asuransi Gudang" }]}
      pillarHref="/asuransi-properti"
      pillarLabel="Asuransi Properti"
      heroEmoji="📦"
      heroBadge="Asuransi Gudang / Warehouse"
      heroTitle={<>Amankan Gudang &<br /><em className="not-italic text-gold">Stok Barang Anda</em></>}
      heroIntro="Bekasi adalah salah satu simpul logistik dan distribusi terbesar di Jabodetabek, dengan ratusan gudang tersebar di kawasan industri maupun jalur distribusi utama. Asuransi gudang melindungi bangunan sekaligus stok barang di dalamnya dari kebakaran, pencurian, kerusakan air, hingga risiko fisik lain yang bisa menghentikan operasional bisnis Anda dalam sekejap."
      heroStats={[
        { num: "Bangunan + Stok", lbl: "Cakupan Ganda" },
        { num: "Fleksibel", lbl: "Nilai Pertanggungan" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Gudang"
      jaminanSubtitle="Melindungi dua aset sekaligus: bangunan gudang dan barang yang disimpan di dalamnya."
      jaminanItems={[
        { icon: "🔥", label: "Kebakaran & Ledakan", desc: "Risiko FLEXAS penuh — kebakaran adalah risiko terbesar bagi gudang dengan barang mudah terbakar." },
        { icon: "🔒", label: "Pencurian & Perampokan", desc: "Kerugian akibat pembongkaran paksa (burglary) pada bangunan gudang." },
        { icon: "💧", label: "Kerusakan Akibat Air", desc: "Kebocoran atap, pipa, atau rembesan air yang merusak stok barang." },
        { icon: "📦", label: "Stok & Inventori", desc: "Nilai pertanggungan barang dapat disesuaikan berkala mengikuti fluktuasi stok (declaration basis)." },
        { icon: "🚚", label: "Kerusakan Akibat Bongkar Muat", desc: "Kerusakan bangunan akibat aktivitas forklift atau kendaraan operasional di area gudang." },
        { icon: "🌊", label: "Perluasan Banjir", desc: "Sangat relevan untuk gudang di area rendah dekat aliran sungai atau rawan luapan musiman." },
      ]}
      pengecualianItems={[
        "Kerugian akibat kelalaian penyimpanan yang tidak sesuai prosedur",
        "Susut alami barang (natural shrinkage) dan kerusakan akibat hama",
        "Barang yang disimpan melebihi kapasitas tanpa deklarasi",
        "Pencurian oleh karyawan sendiri (perlu polis fidelity guarantee terpisah)",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Banjir dan gempa bumi (kecuali sebagai perluasan tambahan)",
      ]}
      varianTitle="Dua Pendekatan Nilai Pertanggungan Stok"
      varianSubtitle="Pilih skema yang sesuai dengan pola operasional gudang Anda."
      varianItems={[
        {
          icon: "📊",
          title: "Fixed Sum Insured",
          desc: "Nilai pertanggungan stok ditetapkan tetap di awal polis, cocok untuk gudang dengan volume stok yang relatif stabil sepanjang tahun.",
          manfaat: ["Premi tetap dan mudah diprediksi", "Proses administrasi lebih sederhana", "Cocok untuk gudang penyimpanan jangka panjang"],
          cocok: "Gudang dengan stok stabil, pergudangan aset tetap",
        },
        {
          icon: "📈",
          title: "Declaration Basis",
          desc: "Nilai pertanggungan dilaporkan berkala (bulanan) sesuai nilai stok riil, cocok untuk gudang dengan fluktuasi stok tinggi seperti musim ramai belanja online.",
          manfaat: ["Premi lebih efisien saat stok rendah", "Perlindungan tetap maksimal saat stok tinggi", "Cocok untuk gudang distribusi e-commerce"],
          cocok: "Gudang distribusi, fulfillment center, ekspedisi",
        },
      ]}
      simulasiTitle="Contoh Simulasi Premi Asuransi Gudang"
      simulasiSubtitle="Ilustrasi untuk gudang distribusi kelas konstruksi 1 di kawasan Bekasi. Premi final berdasarkan hasil survei risiko."
      simulasiRows={[
        { label: "Nilai Pertanggungan Bangunan", value: "Rp 3.000.000.000" },
        { label: "Nilai Pertanggungan Stok (rata-rata)", value: "Rp 2.000.000.000" },
        { label: "Kelas Konstruksi", value: "Kelas 1 (Baja & Beton)" },
        { label: "Lokasi", value: "Kawasan Pergudangan Bekasi" },
        { label: "Rate Estimasi", value: "0,10% – 0,20% / tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi / Tahun", value: "Rp 5.000.000 – Rp 10.000.000", sublabel: "untuk pertanggungan Rp 5 miliar" }}
      simulasiCatatan="Rate dipengaruhi jenis barang yang disimpan (mudah terbakar atau tidak), sistem proteksi kebakaran gudang, dan skema nilai pertanggungan yang dipilih."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi asuransi gudang/warehouse saya di Bekasi. Mohon info lebih lanjut."
      syaratItems={[
        "Fotokopi identitas pemilik / penanggung jawab usaha (KTP/NIB)",
        "Data teknis bangunan gudang: luas, tahun bangun, kelas konstruksi",
        "Jenis dan estimasi nilai barang yang disimpan",
        "Sistem keamanan yang tersedia (CCTV, pagar, satpam, alarm)",
        "Sistem proteksi kebakaran (APAR, hydrant, sprinkler)",
        "Riwayat klaim asuransi properti sebelumnya (jika ada)",
      ]}
      faqItems={[
        { q: "Apakah stok barang yang berubah-ubah bisa diasuransikan?", a: "Bisa, menggunakan skema declaration basis di mana Anda melaporkan nilai stok riil secara berkala. Ini lebih efisien dibanding menetapkan nilai tetap yang mungkin lebih tinggi dari kebutuhan aktual." },
        { q: "Apakah gudang sewa bisa diasuransikan oleh penyewa?", a: "Bisa. Penyewa gudang dapat mengasuransikan isi/stok barang miliknya, sementara pemilik gudang biasanya mengasuransikan struktur bangunan secara terpisah." },
        { q: "Apakah risiko pencurian karyawan sendiri termasuk dijamin?", a: "Tidak, dalam polis kejahatan standar. Untuk risiko ini, dibutuhkan polis Fidelity Guarantee terpisah yang khusus menjamin kecurangan atau pencurian oleh karyawan." },
        { q: "Apakah perlu perluasan banjir untuk gudang di Bekasi?", a: "Sangat disarankan untuk gudang di area rendah atau dekat aliran sungai yang berpotensi meluap saat musim hujan. Kerugian stok akibat banjir bisa jauh lebih besar dari nilai perluasan premi yang dibutuhkan." },
      ]}
      internalLinks={[
        { href: "/asuransi-properti/pabrik", label: "Asuransi Pabrik", icon: "🏭" },
        { href: "/asuransi-properti/property-all-risk", label: "Property All Risk", icon: "🏢" },
        { href: "/asuransi-kargo", label: "Asuransi Kargo", icon: "🚚" },
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "🛡️" },
      ]}
      ctaEmoji="📦"
      ctaTitle="Lindungi Rantai Pasok Bisnis Anda"
      ctaDesc="Konsultasikan kebutuhan asuransi gudang Anda di Bekasi — bangunan dan stok, sekaligus dalam satu polis."
    />
  );
}
