import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_KARGO, NOTE_KARGO } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi Kargo Darat Bekasi – Ekspedisi & Distribusi",
  description: "Asuransi kargo darat untuk pelaku usaha ekspedisi dan distribusi di Bekasi. Lindungi barang kiriman dari risiko kecelakaan, pencurian, dan kerusakan selama perjalanan. Konsultasi gratis.",
  keywords: "asuransi kargo darat bekasi, asuransi pengiriman barang bekasi, asuransi ekspedisi bekasi, asuransi distribusi barang bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-kargo/kargo-darat" },
};

export default function KargoDaratPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Kargo", href: "/asuransi-kargo" }, { label: "Kargo Darat" }]}
      pillarHref="/asuransi-kargo"
      pillarLabel="Asuransi Kargo"
      heroEmoji="📦"
      heroBadge="Asuransi Kargo Darat"
      heroTitle={<>Lindungi Nilai Barang<br /><em className="not-italic text-gold">Selama Perjalanan Darat</em></>}
      heroIntro="Asuransi kargo darat melindungi nilai barang yang dikirim via truk dari risiko kecelakaan, pencurian, dan kerusakan selama perjalanan domestik. Sangat relevan bagi pelaku usaha ekspedisi dan distribusi yang beroperasi dari kawasan pergudangan Bekasi ke seluruh wilayah Indonesia — berbeda dari asuransi kendaraan yang hanya melindungi truknya, bukan nilai barang di dalamnya."
      heroStats={[
        { num: "Barang, Bukan Kendaraan", lbl: "Fokus Perlindungan" },
        { num: "Per Pengiriman/Tahunan", lbl: "Skema Fleksibel" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Kargo Darat"
      jaminanSubtitle="Melindungi nilai barang yang sedang dalam perjalanan, terpisah dari asuransi kendaraan pengangkutnya."
      jaminanItems={[
        { icon: "💥", label: "Kecelakaan Kendaraan Pengangkut", desc: "Kerugian barang akibat kecelakaan lalu lintas yang melibatkan truk pengangkut." },
        { icon: "🔓", label: "Pencurian & Perampokan", desc: "Kerugian barang akibat pencurian atau perampokan selama perjalanan, termasuk risiko pembegalan di jalur distribusi." },
        { icon: "🔥", label: "Kebakaran Kendaraan", desc: "Kerugian barang akibat kebakaran yang terjadi pada kendaraan pengangkut." },
        { icon: "💧", label: "Kerusakan Akibat Air/Basah", desc: "Kerugian barang akibat air masuk ke dalam kendaraan/kontainer selama perjalanan, termasuk saat melintasi area banjir." },
        { icon: "📦", label: "Kerusakan Akibat Bongkar Muat", desc: "Kerugian barang akibat kesalahan penanganan saat proses muat dan bongkar barang." },
        { icon: "🌊", label: "Perluasan Banjir", desc: "Relevan untuk rute distribusi yang melewati area rawan genangan musiman di Bekasi dan sekitarnya." },
      ]}
      pengecualianItems={[
        "Kerusakan akibat pengepakan (packing) barang yang tidak layak",
        "Kerugian akibat keterlambatan pengiriman semata (tanpa kerusakan fisik)",
        "Susut alami barang (natural loss in weight/volume)",
        "Barang yang tidak dideklarasikan sesuai jenis dan nilai sebenarnya",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Kelalaian yang disengaja oleh pengirim atau penerima",
      ]}
      simulasiTitle="Contoh Simulasi Premi Kargo Darat"
      simulasiSubtitle="Ilustrasi untuk pengiriman barang elektronik domestik dari Bekasi ke luar kota. Premi final tergantung jenis barang dan rute."
      simulasiRows={[
        { label: "Nilai Barang per Pengiriman", value: "Rp 500.000.000" },
        { label: "Jenis Barang", value: "Elektronik/Komponen" },
        { label: "Rute", value: "Bekasi – Jawa Timur" },
        { label: "Rate Estimasi", value: "0,05% – 0,15% per pengiriman" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi per Pengiriman", value: "Rp 250.000 – Rp 750.000", sublabel: "untuk nilai barang Rp 500 juta" }}
      simulasiCatatan="Untuk frekuensi pengiriman tinggi, tersedia skema polis tahunan (open cover) yang lebih efisien dibanding membeli polis per pengiriman. Rate dipengaruhi jenis barang, rute, dan riwayat klaim."
      simulasiWaMsg="Halo Nur, saya ingin konsultasi asuransi kargo darat untuk pengiriman barang usaha saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_KARGO}
      pengecualianNote={NOTE_KARGO}
      syaratItems={[
        "Fotokopi identitas pengirim/penanggung jawab usaha",
        "Data jenis dan nilai barang yang dikirim",
        "Rute pengiriman dan estimasi frekuensi per bulan/tahun",
        "Data kendaraan pengangkut (jika bukan pihak ketiga/ekspedisi umum)",
        "Bukti pengiriman (invoice/surat jalan) untuk klaim per pengiriman",
        "Riwayat klaim kargo sebelumnya (jika ada)",
      ]}
      faqItems={[
        { q: "Apakah asuransi kargo sama dengan asuransi truk pengangkut?", a: "Tidak. Asuransi truk melindungi kendaraan itu sendiri, sementara asuransi kargo melindungi nilai barang yang diangkut. Idealnya perusahaan ekspedisi memiliki keduanya untuk perlindungan menyeluruh." },
        { q: "Apakah tersedia polis tahunan untuk pengiriman rutin?", a: "Ya, tersedia skema open cover/polis tahunan yang otomatis menjamin setiap pengiriman dalam periode tertentu tanpa perlu membeli polis satu per satu — lebih efisien untuk usaha dengan frekuensi kirim tinggi." },
        { q: "Bagaimana jika barang rusak akibat pengepakan yang kurang baik?", a: "Kerusakan akibat packing yang tidak layak umumnya dikecualikan, karena dianggap sebagai kelalaian pengirim, bukan risiko yang timbul dari luar selama perjalanan." },
        { q: "Siapa yang bisa mengajukan klaim — pengirim atau penerima barang?", a: "Tergantung siapa yang memiliki kepentingan asuransi (insurable interest) atas barang tersebut sesuai kesepakatan jual beli. Umumnya pihak yang membeli polis adalah yang berhak mengajukan klaim." },
      ]}
      internalLinks={[
        { href: "/asuransi-kargo/marine-cargo", label: "Marine Cargo (Laut & Udara)", icon: "🚢" },
        { href: "/asuransi-kendaraan/truk-kendaraan-niaga", label: "Truk & Kendaraan Niaga", icon: "🚛" },
        { href: "/asuransi-properti/gudang", label: "Asuransi Gudang", icon: "📦" },
      ]}
      artikelLinks={[
        { href: "/artikel/kenapa-ekspedisi-truk-perlu-asuransi-kargo-terpisah-dari-asuransi-kendaraan", label: "Kenapa Ekspedisi Truk Perlu Asuransi Kargo Terpisah", icon: "🚛" },
        { href: "/artikel/incoterms-fob-vs-cif-siapa-wajib-asuransikan-barang-impor", label: "Incoterms FOB vs CIF", icon: "📄" },
      ]}
      ctaEmoji="📦"
      ctaTitle="Lindungi Nilai Barang, Bukan Hanya Kendaraannya"
      ctaDesc="Konsultasikan kebutuhan asuransi kargo darat untuk usaha distribusi Anda di Bekasi — gratis, sesuai frekuensi pengiriman Anda."
    />
  );
}
