# Aplikasi Pesan Makan Malam dari Kafetaria

## Ide awal:
- Pengguna dapat melihat semua menu makanan
- Pengguna dapat memesan makanan yang masih tersedia 
- Pengguna dapat melihat histori pemesanan

## Realisasi:
- Pengguna dapat melihat semua menu makanan. Daftar menu dibuat di menu.js dan berbentuk object key:value. Sudah dapat tampil dan dapat dipesan.
- Makanan yang dipesan akan disimpan secara lokal di sessionStorage. Tiap tombol ditekan akan merefresh halaman agar jumlah makanan yang dipesan dapat tampil.

## Halangan:
- Kurang pahamnya saya mengenai state dan props membuat tidak semua fungsi berhasil dibuat. 
- Fungsi histori pemesanan tidak dibuat, dan fungsi pemesanan makanan tidak berubah secara otomatis karena tidak melalui state.

## Screenshot aplikasi
![Tampilan menu makanan](http://github.com/ichsanni/aplikasi-pesan-makanan/tree/main/src/1.png)
Menampilkan semua makanan, harga, dan ketersediaan.
![Tampilan daftar pesanan](http://github.com/ichsanni/aplikasi-pesan-makanan/tree/main/src/2.png)
Menampilkan makanan yang telah dipesan dan disimpan di sessionStorage.
