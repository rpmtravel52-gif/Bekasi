import type { Metadata } from "next";
import ProdukDetailPage from "@/components/produk/ProdukDetailPage";
import { PROSES_KENDARAAN, NOTE_KENDARAAN } from "@/components/produk/prosesVariants";

export const metadata: Metadata = {
  title: "Asuransi Bus Bekasi – Bus Pariwisata, Karyawan & Antar-Jemput",
  description: "Asuransi bus untuk operator bus pariwisata, bus karyawan, dan bus antar-jemput di Bekasi. Perlindungan kendaraan sekaligus tanggung jawab terhadap penumpang. Konsultasi gratis.",
  keywords: "asuransi bus bekasi, asuransi bus pariwisata bekasi, asuransi bus karyawan bekasi, asuransi bus antar jemput bekasi",
  alternates: { canonical: "https://asuransibekasi.id/asuransi-kendaraan/bus" },
};

export default function BusPage() {
  return (
    <ProdukDetailPage
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }, { label: "Asuransi Bus" }]}
      pillarHref="/asuransi-kendaraan"
      pillarLabel="Asuransi Kendaraan"
      heroEmoji="🚌"
      heroBadge="Asuransi Bus"
      heroTitle={<>Proteksi Bus Operasional<br /><em className="not-italic text-gold">dan Penumpang Anda</em></>}
      heroIntro="Bekasi memiliki banyak perusahaan dengan bus karyawan antar-jemput, operator bus pariwisata, dan penyedia jasa transportasi kelompok. Asuransi bus melindungi kendaraan sekaligus tanggung jawab terhadap penumpang selama perjalanan — perlindungan ganda yang tidak dimiliki asuransi kendaraan pribadi biasa."
      heroStats={[
        { num: "2 in 1", lbl: "Kendaraan + Penumpang" },
        { num: "Fleet Ready", lbl: "Bisa untuk Armada" },
        { num: "Gratis", lbl: "Konsultasi" },
      ]}
      jaminanTitle="Cakupan Jaminan Asuransi Bus"
      jaminanSubtitle="Perlindungan menyeluruh untuk kendaraan bus dan tanggung jawab hukum terhadap penumpang."
      jaminanItems={[
        { icon: "💥", label: "Kerusakan Akibat Kecelakaan", desc: "Kerusakan ringan hingga berat pada bodi dan mesin bus akibat kecelakaan lalu lintas." },
        { icon: "🔓", label: "Kehilangan Kendaraan", desc: "Jaminan kehilangan total bus akibat pencurian atau perampasan." },
        { icon: "🧑‍🤝‍🧑", label: "Tanggung Jawab Penumpang (Passenger Liability)", desc: "Ganti rugi cedera atau meninggal dunia yang dialami penumpang selama berada di dalam bus." },
        { icon: "👤", label: "Tanggung Jawab Pihak Ketiga (TPL)", desc: "Ganti rugi cedera atau kerusakan properti pihak ketiga di luar bus akibat kecelakaan yang melibatkan kendaraan Anda." },
        { icon: "🔥", label: "Kebakaran & Ledakan", desc: "Kerusakan atau kehilangan total bus akibat kebakaran termasuk dalam jaminan dasar." },
        { icon: "🚌", label: "Perlindungan Fleet/Armada", desc: "Bisa dikelola dalam satu polis untuk operator dengan lebih dari satu unit bus, dengan premi lebih efisien." },
      ]}
      pengecualianItems={[
        "Pengemudi tanpa SIM B Umum yang berlaku",
        "Bus digunakan melebihi kapasitas penumpang yang diizinkan",
        "Penggunaan di luar rute/tujuan yang dideklarasikan",
        "Keausan wajar (ban, rem, kopling) akibat pemakaian normal",
        "Perang, terorisme, dan kerusuhan (kecuali perluasan SRCC)",
        "Kerusakan akibat pengemudi dalam pengaruh alkohol/narkoba",
      ]}
      simulasiTitle="Contoh Simulasi Premi Asuransi Bus"
      simulasiSubtitle="Ilustrasi untuk bus pariwisata kapasitas 30-40 penumpang di Bekasi. Premi final tergantung usia bus, kapasitas, dan riwayat klaim."
      simulasiRows={[
        { label: "Harga Kendaraan (Bus)", value: "Rp 800.000.000" },
        { label: "Kapasitas Penumpang", value: "35 orang" },
        { label: "Jenis Perlindungan", value: "All Risk + Passenger Liability" },
        { label: "Rate Estimasi Kendaraan", value: "2,5% – 3,8% / tahun" },
        { label: "Passenger Liability", value: "Rp 5.000.000 – 15.000.000/tahun" },
      ]}
      simulasiHighlight={{ label: "Estimasi Premi Total / Tahun", value: "Rp 25.000.000 – Rp 45.000.000", sublabel: "untuk bus senilai Rp 800 juta + passenger liability" }}
      simulasiCatatan="Rate dipengaruhi jenis operasional (pariwisata vs antar-jemput karyawan), kapasitas penumpang, dan usia bus. Hubungi kami untuk penawaran resmi sesuai unit bus Anda."
      simulasiWaMsg="Halo Pak Rio, saya ingin konsultasi asuransi bus untuk operasional saya di Bekasi. Mohon info lebih lanjut."
      prosesItems={PROSES_KENDARAAN}
      pengecualianNote={NOTE_KENDARAAN}
      syaratItems={[
        "Fotokopi KTP pemilik/penanggung jawab perusahaan",
        "Fotokopi STNK bus dan KIR (uji kelaikan kendaraan) yang masih berlaku",
        "Data kapasitas penumpang dan jenis operasional (pariwisata/karyawan/antar-jemput)",
        "Foto kondisi bus terkini (tampak depan, belakang, interior)",
        "Data pengemudi (SIM B Umum yang berlaku)",
        "Riwayat klaim asuransi kendaraan sebelumnya (jika ada)",
      ]}
      faqItems={[
        { q: "Apa itu Passenger Liability dan mengapa penting untuk bus?", a: "Passenger Liability menjamin ganti rugi jika penumpang cedera atau meninggal dunia selama berada di dalam bus akibat kecelakaan. Ini penting karena tanggung jawab operator terhadap keselamatan penumpang jauh lebih besar dibanding kendaraan pribadi." },
        { q: "Apakah bus karyawan perusahaan perlu asuransi terpisah dari asuransi mobil dinas?", a: "Ya. Bus karyawan mengangkut banyak penumpang sekaligus sehingga membutuhkan perlindungan Passenger Liability yang tidak tercakup dalam polis mobil dinas biasa." },
        { q: "Apakah bisa mengasuransikan beberapa unit bus sekaligus?", a: "Bisa, menggunakan skema fleet/armada yang mengelola semua unit dalam satu polis. Ini memudahkan administrasi dan biasanya memberikan efisiensi premi dibanding polis satuan." },
        { q: "Apakah KIR yang sudah kadaluarsa memengaruhi klaim?", a: "Ya, KIR (uji kelaikan kendaraan) yang tidak berlaku dapat menjadi dasar penolakan klaim oleh perusahaan asuransi karena dianggap kendaraan tidak laik jalan. Pastikan KIR selalu diperpanjang tepat waktu." },
      ]}
      internalLinks={[
        { href: "/asuransi-kendaraan/mobil", label: "Asuransi Mobil", icon: "🚗" },
        { href: "/asuransi-kendaraan/truk-kendaraan-niaga", label: "Truk & Kendaraan Niaga", icon: "🚛" },
        { href: "/asuransi-liability/public-liability", label: "Public Liability", icon: "🛡️" },
      ]}
      ctaEmoji="🚌"
      ctaTitle="Lindungi Bus dan Tanggung Jawab Anda terhadap Penumpang"
      ctaDesc="Konsultasikan kebutuhan asuransi bus operasional Anda di Bekasi — gratis, sesuai jenis operasional Anda."
    />
  );
}
