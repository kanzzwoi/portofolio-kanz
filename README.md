# 🌐 Personal Portfolio - Muhammad Furqon

Website portofolio pribadi yang interaktif, elegan, dan responsif. Dibangun menggunakan HTML5, Tailwind CSS, dan Vanilla JavaScript dengan gaya visual glassmorphic modern serta simulasi notifikasi pesan interaktif.

PREVIEW: portofolio-kanz.netlify.app

---

## ✨ Fitur Utama

- **Glassmorphic UI Design**: Tampilan visual modern berbasis transparansi dan efek blur (`backdrop-filter`) di atas latar belakang kustom.
- **Dynamic Header Morphing**: Animasi header profil yang bertransisi secara mulus—mengecil dan berpindah posisi—saat navigasi berpindah dari tab **Home** ke tab lain (**About**, **Love**, **Contact**).
- **WhatsApp Notification Simulator**: Simulasi notifikasi pesan melayang yang dilengkapi dengan:
  - Efek suara notifikasi otomatis (*audio preloader*).
  - Animasi *slide-down* saat pesan muncul.
  - Dukungan gesture *swipe-to-dismiss* (dapat diusap ke samping pada layar sentuh) maupun tap/klik untuk menutup pesan.
- **Mobile-Optimized Layout**: Pengaturan tata letak khusus (`100dvh`) yang mencegah *scroll bounce* serta masalah *glitch zoom* pada browser ponsel.

---

## 📂 Struktur Folder Proyek

```text
portfolio-furqon/
├── index.html              # File HTML utama (struktur elemen & konten)
├── README.md               # Dokumentasi proyek
├── css/
│   └── style.css           # Custom CSS, efek glassmorphism, & animasi header
└── js/
    ├── tabs.js             # Buat perpindahan tab & animasi morphing header
    └── notification.js     # Buat notifikasi WhatsApp, kontrol audio, & gesture swipe
```

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur utama dokumen web.
- **Tailwind CSS (CDN)**: Framework CSS utilitas untuk styling dan tata letak responsif.
- **FontAwesome 6.5.1**: Icon set untuk navigasi dan media sosial.
- **Google Fonts (Poppins)**: Typography utama halaman.
- **Vanilla JavaScript**: Manipulasi DOM untuk sistem tab, notifikasi, dan kontrol audio.

---

## 🚀 Panduan Deployment & Hosting

Proyek ini adalah *static website* (HTML/CSS/JS murni), sehingga sangat mudah dan gratis untuk di-host di berbagai platform modern seperti **GitHub Pages**, **Vercel**, atau **Netlify**.

### 1. GitHub Pages (`*.github.io`)
1. Upload/push proyek ini ke repository GitHub milikmu.
2. Buka repository di GitHub -> masuk ke menu **Settings**.
3. Pilih opsi **Pages** pada sidebar kiri.
4. Pada bagian **Build and deployment** -> **Branch**, pilih `main` (atau `master`) dan folder `/ (root)`.
5. Klik **Save**. Situs akan aktif dalam beberapa menit di URL: `https://<username>.github.io/<repo-name>/`.

### 2. Vercel (`*.vercel.app`)
1. Login ke [Vercel](https://vercel.com/) menggunakan akun GitHub.
2. Klik **Add New...** -> **Project**.
3. Import repository portofolio milikmu.
4. Pada halaman konfigurasi, biarkan semua pengaturan standar (karena ini situs statis murni), lalu klik **Deploy**.
5. Situs akan langsung dapat diakses di URL domain `*.vercel.app`.

### 3. Netlify (`*.netlify.app`)
1. Login ke [Netlify](https://www.netlify.com/).
2. Drag & Drop folder proyek `portfolio-furqon` langsung ke dashboard Netlify (atau hubungkan via akun GitHub/Git provider).
3. Netlify akan otomatis melakukan build dan memberikan URL domain `*.netlify.app`.

---

## 💻 Cara Menjalankan Secara Lokal

1. Clone atau unduh repository ini ke komputer/HP kamu:
   ```bash
   git clone https://github.com/kanzzwoi/portfolio-kanz.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd portfolio
   ```
3. Buka file `index.html` langsung menggunakan browser favoritmu (atau gunakan ekstensi *Live Server* di VS Code).

> **Catatan**: Pastikan koneksi internet aktif agar CDN Tailwind, FontAwesome, Google Fonts, serta aset media internal dapat termuat dengan sempurna.
