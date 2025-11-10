# React Performance Optimization
- **React Query mengelola cache** secara otomatis dengan menyimpan data hasil fetch di memori dan memperbaruinya sesuai waktu tertentu (stale time). Saat data dibutuhkan lagi, React Query akan menampilkan data dari cache terlebih dahulu sebelum melakukan refetch bila data sudah dianggap usang.
- **Keuntungan menggunakan library dibanding custom cache** adalah pengelolaan data yang lebih efisien dan mudah. React Query sudah menyediakan fitur otomatis seperti refetch, invalidasi data, dan sinkronisasi antar komponen tanpa perlu menulis logika caching secara manual.
- **Menggunakan cache atau localStorage** dapat membuat aplikasi lebih baik karena mempercepat waktu respon dan mengurangi beban request ke server.

![Devtools](./images/reactjs-cachehit.jpg)
1. Saya mencari dengan keyword "Products", lalu muncul hasil
2. Saya mencari produk lain dengan keyword seperti "Products 99, 999, 969"
3. Saat saya kembali mencari dengan keyword default ("Products"), react secara cepat mengambil dari cache
