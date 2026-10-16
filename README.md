# 📚 Katalog Perpustakaan

Hallow! 👋 Selamat datang di repository **Katalog Perpustakaan**.

Project ini dibuat untuk memenuhi tugas Praktikum Pemrograman Web. Website ini dikembangkan menggunakan Express.js dan EJS dengan menerapkan konsep arsitektur Model-View-Controller (MVC).

Melalui project ini, saya belajar membuat website multi-halaman, menampilkan data secara dinamis, serta mengelola data dari form menggunakan metode POST. 💗

## ✨ Fitur Website

- 🏠 **Beranda:** Menampilkan informasi utama dan jumlah koleksi buku.
- 📖 **Tentang:** Menampilkan informasi mengenai perpustakaan.
- 📚 **Katalog Buku:** Menampilkan daftar buku secara dinamis.
- ➕ **Tambah Buku:** Menambahkan koleksi buku melalui form.
- 📩 **POST Request:** Memproses data buku yang dikirim ke server.
- 🎨 **Desain Responsif:** Tampilan dengan nuansa pastel pink.
- 🚫 **Halaman 404:** Menampilkan pesan ketika halaman tidak ditemukan.

## 🛠️ Teknologi yang Digunakan

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML
- CSS
- Nodemon

## 📂 Struktur Folder

```text
katalog-perpustakaan/
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── controllers/
│   └── page.controller.js
├── routes/
│   └── page.routes.js
├── views/
│   ├── home.ejs
│   ├── about.ejs
│   ├── katalog.ejs
│   └── tambah.ejs
└── public/
    └── css/
        └── style.css
```

## 🚀 Cara Menjalankan Project

**1. Clone repository**

```bash
git clone https://github.com/perwitanadya/praktikum2-pemweb-tugas-42530005.git
```

**2. Masuk ke folder project**

```bash
cd praktikum2-pemweb-tugas-42530005
```

**3. Instal dependensi**

```bash
npm install
```

**4. Jalankan server**

Jika script `dev` sudah tersedia di `package.json`:

```bash
npm run dev
```

Alternatifnya:

```bash
npx nodemon app.js
```

**5. Buka website**

Akses http://localhost:3000 melalui browser.

## 🗺️ Daftar Halaman

| Route | Fungsi |
|---|---|
| `/` | Halaman Beranda |
| `/about` | Halaman Tentang |
| `/katalog` | Daftar koleksi buku |
| `/tambah` | Form tambah buku |
| `POST /tambah` | Memproses data buku |

## 📚 Konsep yang Dipelajari

### 1. Express.js

Digunakan untuk membuat server dan mengatur routing aplikasi.

### 2. EJS

Digunakan untuk menampilkan halaman HTML secara dinamis berdasarkan data yang dikirim dari controller.

### 3. Model-View-Controller (MVC)

Pola MVC membantu memisahkan logika aplikasi, routing, dan tampilan agar kode lebih terstruktur.

### 4. Form dan POST Request

Data buku dikirim melalui form, diterima oleh controller, kemudian ditambahkan
