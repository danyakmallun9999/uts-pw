document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.logo',
        opacity: [0, 1],
        translateX: ['100%', '0%'],
        duration: 1000,
        easing: 'easeInOutQuad',
    });
});

document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.hero-text',
        opacity: [0, 1],
        translateX: ['-100%', '0%'],
        duration: 1000,
        easing: 'easeInOutQuad',
    });
});

rekam_medis> db.pasien.find()
[
  {
    _id: 'P001',
    nama: 'Budi Santoso',
    tanggal_lahir: ISODate('1985-05-20T00:00:00.000Z'),
    alamat: 'Jl Merpati No. 45, Yogyakarta',
    nomor_telepon: '085922545432',
    jenis_kelamin: 'laki-laki',
    riwayat_medis: [
      {
        penyakit: 'Hipertensi',
        tanggal_diagnosa: ISODate('2022-03-15T00:00:00.000Z'),
        dokter_id: 'D001',
        catatan: 'Perlu control setiap bulan'
      }
    ]
  },
  {
    _id: 'P002',
    nama: 'Ayu Lestari',
    tanggal_lahir: ISODate('1992-11-08T00:00:00.000Z'),
    alamat: 'Jl Kenanga No. 10, Bandung',
    nomor_telepon: '081298765432',
    jenis_kelamin: 'perempuan',
    riwayat_medis: [
      {
        penyakit: 'Asma',
        tanggal_diagnosa: ISODate('2021-08-20T00:00:00.000Z'),
        dokter_id: 'D002',
        catatan: 'Memerlukan penggunaan inhaler rutin'
      }
    ]
  },
  {
    _id: 'P003',
    nama: 'Dewi Ananda',
    tanggal_lahir: ISODate('1988-06-25T00:00:00.000Z'),
    alamat: 'Jl Mawar No. 7, Surabaya',
    nomor_telepon: '081234567890',
    jenis_kelamin: 'perempuan',
    riwayat_medis: [
      {
        penyakit: 'Diabetes',
        tanggal_diagnosa: ISODate('2020-02-14T00:00:00.000Z'),
        dokter_id: 'D003',
        catatan: 'Perlu cek gula darah rutin'
      }
    ]
  },
  {
    _id: 'P004',
    nama: 'Agus Pratama',
    tanggal_lahir: ISODate('1990-09-10T00:00:00.000Z'),
    alamat: 'Jl Melati No. 23, Semarang',
    nomor_telepon: '081298765432',
    jenis_kelamin: 'laki-laki',
    riwayat_medis: [
      {
        penyakit: 'Asam urat',
        tanggal_diagnosa: ISODate('2019-11-05T00:00:00.000Z'),
        dokter_id: 'D003',
        catatan: 'Menghindari makanan tinggi purin'
      }
    ]
  }
]