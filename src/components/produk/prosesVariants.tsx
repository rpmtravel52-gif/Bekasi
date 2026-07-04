import type { ProsesStep } from "./ProdukDetailPage";

// Setiap cluster punya alur & kalimat penutup pengecualian yang berbeda,
// supaya tidak ada blok teks yang 100% identik di banyak halaman produk.

export const PROSES_KENDARAAN: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi Kebutuhan", desc: "Ceritakan jenis kendaraan, wilayah plat, dan pola penggunaan Anda via WhatsApp." },
  { step: "02", icon: "🧮", label: "Hitung Estimasi Premi", desc: "Kami bantu hitung premi sesuai tarif referensi OJK dan jenis perlindungan yang Anda pilih." },
  { step: "03", icon: "📋", label: "Penawaran & Survei", desc: "Terima penawaran resmi; sebagian kendaraan memerlukan survei kondisi fisik sebelum polis terbit." },
  { step: "04", icon: "✅", label: "Polis Aktif", desc: "Kendaraan Anda terlindungi sejak polis diterbitkan dan pembayaran diterima." },
];

export const PROSES_PROPERTI: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi Aset", desc: "Ceritakan jenis properti, lokasi, dan estimasi nilai bangunan Anda." },
  { step: "02", icon: "📐", label: "Analisis Nilai Pertanggungan", desc: "Kami bantu tentukan nilai pertanggungan berdasarkan replacement cost, bukan harga jual pasar." },
  { step: "03", icon: "🔎", label: "Survei & Penawaran", desc: "Untuk pertanggungan besar, surveyor akan meninjau lokasi sebelum penawaran resmi terbit." },
  { step: "04", icon: "✅", label: "Polis Terbit", desc: "Properti Anda terlindungi sejak polis diterbitkan." },
];

export const PROSES_LIABILITY: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi Profil Usaha", desc: "Ceritakan jenis usaha, aktivitas operasional, dan skala bisnis Anda." },
  { step: "02", icon: "📊", label: "Analisis Eksposur Risiko", desc: "Kami bantu tentukan limit pertanggungan yang wajar sesuai tingkat risiko operasional Anda." },
  { step: "03", icon: "🔍", label: "Underwriting & Penawaran", desc: "Perusahaan asuransi menilai profil risiko bisnis sebelum menerbitkan penawaran resmi." },
  { step: "04", icon: "✅", label: "Polis Aktif", desc: "Bisnis Anda terlindungi dari tuntutan pihak ketiga sejak polis berlaku." },
];

export const PROSES_ENGINEERING: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi Proyek", desc: "Ceritakan nilai kontrak, durasi, dan jenis pekerjaan proyek Anda." },
  { step: "02", icon: "📐", label: "Analisis Risiko Teknis", desc: "Kami bantu tentukan cakupan dan nilai pertanggungan sesuai kompleksitas proyek." },
  { step: "03", icon: "📄", label: "Penawaran Resmi", desc: "Terima penawaran dari perusahaan asuransi berlisensi OJK sesuai profil proyek Anda." },
  { step: "04", icon: "✅", label: "Polis Aktif", desc: "Proyek Anda terlindungi sejak mobilisasi awal atau serah terima, sesuai jenis polis." },
];

export const PROSES_MACHINERY: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi Mesin/Alat", desc: "Ceritakan jenis, usia, dan nilai mesin produksi atau alat berat Anda." },
  { step: "02", icon: "🔎", label: "Survei Teknis", desc: "Surveyor menilai kondisi fisik dan riwayat maintenance mesin/alat berat Anda." },
  { step: "03", icon: "📄", label: "Penawaran Resmi", desc: "Terima penawaran sesuai hasil survei teknis dan riwayat klaim sebelumnya." },
  { step: "04", icon: "✅", label: "Polis Aktif", desc: "Mesin atau alat berat Anda terlindungi sejak polis diterbitkan." },
];

export const PROSES_KARGO: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi Pengiriman", desc: "Ceritakan jenis barang, rute, dan frekuensi pengiriman Anda." },
  { step: "02", icon: "📦", label: "Tentukan Skema Polis", desc: "Pilih polis per pengiriman atau skema tahunan (open cover) sesuai frekuensi kirim Anda." },
  { step: "03", icon: "📄", label: "Penawaran Resmi", desc: "Terima penawaran resmi sesuai jenis barang, nilai, dan rute pengiriman." },
  { step: "04", icon: "✅", label: "Polis Aktif", desc: "Barang Anda terlindungi sejak polis diterbitkan, per pengiriman atau sepanjang tahun." },
];

export const PROSES_SURETY: ProsesStep[] = [
  { step: "01", icon: "💬", label: "Konsultasi Kebutuhan Jaminan", desc: "Ceritakan jenis proyek/tender/kebutuhan kepabeanan dan nilai jaminan yang disyaratkan." },
  { step: "02", icon: "📊", label: "Analisis Kelayakan", desc: "Penjamin menilai profil dan rekam jejak perusahaan Anda melalui proses underwriting." },
  { step: "03", icon: "📝", label: "Penerbitan Dokumen Jaminan", desc: "Dokumen jaminan diterbitkan sesuai format yang disyaratkan pemberi kerja atau instansi terkait." },
  { step: "04", icon: "✅", label: "Jaminan Siap Digunakan", desc: "Jaminan aktif dan siap dilampirkan untuk memenuhi syarat tender, kontrak, atau kepabeanan Anda." },
];

export const NOTE_KENDARAAN = "Detail pengecualian ini akan kami jelaskan lebih dulu sesuai jenis dan penggunaan kendaraan Anda, sebelum Anda memutuskan produk mana yang paling pas.";
export const NOTE_PROPERTI = "Kami uraikan setiap klausul pengecualian ini secara terbuka sejak awal, supaya tidak ada kejutan saat proses klaim properti Anda nanti.";
export const NOTE_LIABILITY = "Batasan tanggung jawab ini akan kami jelaskan secara rinci sesuai jenis dan skala usaha Anda, sebelum polis diterbitkan.";
export const NOTE_ENGINEERING = "Setiap pengecualian ini kami diskusikan bersama tim proyek Anda, agar cakupan polis benar-benar sesuai kondisi lapangan sebenarnya.";
export const NOTE_MACHINERY = "Kami bantu identifikasi komponen mana yang paling berisiko sebelum menentukan cakupan akhir polis mesin/alat berat Anda.";
export const NOTE_KARGO = "Ketentuan pengecualian ini kami sesuaikan dengan jenis barang, kemasan, dan rute pengiriman spesifik Anda.";
export const NOTE_SURETY = "Ketentuan klaim atas jaminan ini mengikuti isi kontrak/kesepakatan yang mendasarinya — akan kami jelaskan sebelum dokumen jaminan diterbitkan.";
