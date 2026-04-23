import Airnav from "@/assets/Airnav.png";
import Airnav2 from "@/assets/Airnav2.png";
import Groperti from "@/assets/Groperti.png";
import Mason from "@/assets/Mason.png";
import Mason1 from "@/assets/Mason1.png";
import mason2 from "@/assets/mason2.png";
import mason3 from "@/assets/mason3.png";
import LMS from "@/assets/LMS.png";
import LMS1 from "@/assets/LMS1.png";
import LMS2 from "@/assets/LMS2.png";
import LMS3 from "@/assets/LMS3.png";
import Sertifica from "@/assets/sertifica.png";
import Sertifica2 from "@/assets/sertifica2.png";
import Sertifica3 from "@/assets/sertifica3.png";
import MyMovies from "@/assets/MyMovies.png";
import MyMovies2 from "@/assets/MyMovies2.png";
import Thesis from "@/assets/Thesis.png";
import Thesis2 from "@/assets/Thesis2.png";
import Thesis3 from "@/assets/Thesis3.png";
import Thesis4 from "@/assets/Thesis4.png";
import Revolve from "@/assets/revolve.png";
import Revolve2 from "@/assets/revolve2.png";
import Revolve3 from "@/assets/revolve3.png";
import Revolve4 from "@/assets/revolve4.png";
import Digishop from "@/assets/Digishop.png";
import Digishop2 from "@/assets/digishop2.png";
import Digishop3 from "@/assets/digishop3.png";
import Caffeinline from "@/assets/Caffein-line.png";
import Travel from "@/assets/travel.png";
import Travel2 from "@/assets/travel2.png";
import Travel3 from "@/assets/travel3.png";

export const projectData = [
  {
    id: "01",
    slug: "airnav",
    title: "AirNav Indonesia",
    subtitle: "AirNav Platform",
    desc: "Platform manajemen event korporat untuk Perum LPPNPI — lembaga penyelenggara pelayanan navigasi penerbangan Indonesia.",
    longDesc:
      "Sistem informasi corporate event management yang digunakan oleh Perum LPPNPI. Platform ini mempermudah koordinasi antara panitia dan peserta dalam penyelenggaraan seminar, pelatihan, dan acara korporat lainnya.",
    tech: ["NuxtJS", "TypeScript", "TailwindCSS", "NuxtUI"],
    features: [
      "Registrasi & manajemen peserta event",
      "Dashboard organizer real-time",
      "Notifikasi otomatis via email",
      "Export laporan peserta ke Excel",
      "Sistem QR code untuk check-in",
    ],
    images: [Airnav, Airnav2],
    link: "#",
    github: "#",
  },
  {
    id: "02",
    slug: "groperti",
    title: "Groperti",
    subtitle: "Real Estate Platform",
    desc: "Platform pencarian properti modern dengan peta interaktif dan filter canggih untuk pengalaman browsing yang mulus.",
    longDesc:
      "Aplikasi properti dengan UI/UX yang berfokus pada kemudahan pengguna dalam mencari, membandingkan, dan menghubungi agen properti. Fitur peta interaktif memungkinkan eksplorasi area secara visual.",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    features: [
      "Peta interaktif dengan listing properti",
      "Filter multidimensi (harga, tipe, lokasi)",
      "Galeri foto immersive per listing",
      "Fitur saved & comparison listing",
      "Halaman profil agen properti",
    ],
    images: [Groperti, Groperti], // Using placeholder duplicates for now
    link: "https://groperti.com/",
    github: "#",
  },
  {
    id: "03",
    slug: "mason-cafe",
    title: "Mason Cafe",
    subtitle: "Restaurant Website",
    desc: "Landing page kafe yang indah dengan animasi halus, showcase menu, dan reservasi online terintegrasi.",
    longDesc:
      "Website restoran premium untuk Mason Cafe dengan desain elegan dan responsif. Fokus pada visual food photography dan UX pemesanan yang mudah untuk meningkatkan konversi reservasi.",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    features: [
      "Animasi scroll yang smooth dan halus",
      "Menu digital dengan kategori & filter",
      "Sistem reservasi online terintegrasi",
      "Galeri foto makanan berkualitas tinggi",
      "Maps & informasi lokasi interaktif",
    ],
    images: [Mason1, Mason, mason2, mason3],
    link: "https://web-design-test.vercel.app/",
    github: "#",
  },
  {
    id: "04",
    slug: "MyMovies",
    title: "My Movies",
    subtitle: "Movie Streaming",
    desc: "Platform streaming film modern dengan katalog lengkap, detail film interaktif, dan antarmuka pengguna yang memukau.",
    longDesc:
      "Aplikasi database film yang menggunakan API eksternal untuk menampilkan informasi film terbaru. Memungkinkan pengguna mencari film, melihat detail, rating, dan trailer secara langsung dalam satu platform yang responsif.",
    tech: ["React.js", "TMDB API", "TailwindCSS", "Framer Motion"],
    features: [
      "Katalog film terpopuler & terbaru",
      "Pencarian film berdasarkan judul",
      "Detail film lengkap (sinopsis, cast, rating)",
      "Trailer film terintegrasi",
      "Antarmuka gelap yang modern & sinematik",
    ],
    images: [MyMovies, MyMovies2],
    link: "https://web-design-test.vercel.app/",
    github: "#",
  },
  {
    id: "05",
    slug: "Thesis",
    title: "Thesis",
    subtitle: "Academic Platform",
    desc: "Sistem manajemen penelitian dan skripsi untuk mahasiswa dan dosen di lingkungan perguruan tinggi.",
    longDesc:
      "Platform akademik yang membantu mahasiswa dan dosen dalam pengelolaan proses bimbingan skripsi, mulai dari pengajuan judul, upload draft, hingga penjadwalan sidang.",
    tech: ["React.js", "CSS Modules", "Node.js", "MySQL"],
    features: [
      "Upload & versioning dokumen skripsi",
      "Jadwal bimbingan dengan notifikasi",
      "Review & feedback dosen inline",
      "Tracking progress per mahasiswa",
      "Pengumuman sidang & nilai akhir",
    ],
    images: [Thesis, Thesis2, Thesis3, Thesis4],
    link: "#",
    github: "#",
  },
  {
    id: "06",
    slug: "LMS",
    title: "LMS",
    subtitle: "E-Learning Platform",
    desc: "Platform pembelajaran online untuk manajemen kursus, kuis interaktif, dan pelacakan kemajuan belajar siswa.",
    longDesc:
      "Learning Management System yang dirancang untuk institusi pendidikan. Memungkinkan pengajar mengunggah materi, membuat tugas, dan berinteraksi dengan siswa dalam lingkungan belajar digital yang terstruktur.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    features: [
      "Manajemen kursus & materi belajar",
      "Sistem kuis & penilaian otomatis",
      "Progress tracking untuk siswa",
      "Dashboard admin & pengajar",
      "Forum diskusi antar siswa",
    ],
    images: [LMS, LMS1, LMS2, LMS3],
    link: "#",
    github: "#",
  },
  {
    id: "07",
    slug: "Sertifica",
    title: "Sertifica",
    subtitle: "Certification System",
    desc: "Sistem manajemen dan verifikasi sertifikat digital otomatis untuk memvalidasi pencapaian secara profesional.",
    longDesc:
      "Platform untuk menerbitkan sertifikat digital secara massal dan menyediakan fitur verifikasi keaslian sertifikat melalui kode unik atau QR code untuk keamanan data.",
    tech: ["React.js", "Cloudinary", "Node.js", "TailwindCSS"],
    features: [
      "Generate sertifikat otomatis",
      "Verifikasi sertifikat via QR Code",
      "Bulk upload data penerima",
      "Custom template sertifikat",
      "Email pengiriman sertifikat langsung",
    ],
    images: [Sertifica, Sertifica2, Sertifica3],
    link: "#",
    github: "#",
  },
  {
    id: "08",
    slug: "digishop",
    title: "Digishop",
    subtitle: "E-Commerce",
    desc: "Platform belanja online lengkap dengan integrasi pembayaran mulus dan manajemen inventori real-time.",
    longDesc:
      "E-commerce full-featured yang memungkinkan penjual mengelola produk dan pembeli melakukan transaksi secara seamless. Dilengkapi dengan sistem pembayaran yang aman dan tracking pesanan.",
    tech: ["JavaScript", "HTML5", "CSS3", "Payment Gateway"],
    features: [
      "Katalog produk dengan search & filter",
      "Shopping cart & wishlist",
      "Checkout multi-step yang intuitif",
      "Integrasi payment gateway",
      "Order tracking & history",
    ],
    images: [Digishop, Digishop2, Digishop3],
    link: "#",
    github: "#",
  },
  {
    id: "09",
    slug: "Travel",
    title: "Redesign Pegi-Pegi",
    subtitle: "Travel App Concept",
    desc: "Konsep desain ulang aplikasi travel dengan fokus pada peningkatan UX pencarian hotel dan tiket pesawat.",
    longDesc:
      "Project studi kasus UI/UX untuk mendesain ulang aplikasi Pegi-Pegi. Fokus pada penyederhanaan alur pemesanan dan peningkatan visual agar lebih modern dan user-friendly bagi traveler.",
    tech: ["UI/UX Design", "Figma", "Design System"],
    features: [
      "User research & pain point analysis",
      "Redesigned search & filter flow",
      "Immersive hotel detail page",
      "Simplified checkout process",
      "Modern & clean UI visual style",
    ],
    images: [Travel, Travel2, Travel3],
    link: "#",
    github: "#",
  },
  {
    id: "10",
    slug: "revolve",
    title: "Revolve",
    subtitle: "Fashion Concept",
    desc: "Landing page brand fashion modern yang menampilkan koleksi terbaru dengan estetika minimalis.",
    longDesc:
      "Website showcase produk untuk brand fashion Revolve. Menekankan pada visual produk yang besar dan navigasi yang mengalir untuk menciptakan pengalaman belanja yang mewah.",
    tech: ["JavaScript", "HTML5", "CSS3", "ScrollReveal"],
    features: [
      "Katalog koleksi seasonal",
      "Efek hover produk yang interaktif",
      "Layout grid fashion yang dinamis",
      "Integrasi media sosial brand",
      "Navigasi minimalis & elegan",
    ],
    images: [Revolve, Revolve2, Revolve3, Revolve4],
    link: "#",
    github: "#",
  },
  {
    id: "11",
    slug: "caffein-line",
    title: "Caffein Line",
    subtitle: "Coffee Brand",
    desc: "Brand identity dan pengalaman e-commerce yang dirancang khusus untuk specialty coffee roastery.",
    longDesc:
      "Website brand identity sekaligus toko online untuk Caffein Line, sebuah specialty coffee roastery. Menampilkan filosofi brand, asal-usul kopi, proses roasting, dan produk yang bisa dibeli langsung.",
    tech: ["JavaScript", "HTML5", "CSS3", "CSS Animations"],
    features: [
      "Brand storytelling yang immersive",
      "Katalog kopi dengan origin story",
      "Animasi parallax yang smooth",
      "Toko online terintegrasi",
      "Blog tentang dunia kopi",
    ],
    images: [Caffeinline, Caffeinline],
    link: "#",
    github: "#",
  },
];
