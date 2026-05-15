import lexora from "@/assets/lexora.png";
import lexora2 from "@/assets/lexora2.png";
import lexora3 from "@/assets/lexora3.png";
import lexora4 from "@/assets/lexora4.png";
import lexora5 from "@/assets/lexora5.png";
import lexora6 from "@/assets/lexora6.png";
import lexora7 from "@/assets/lexora7.png";
import lexora8 from "@/assets/lexora8.png";
import lexora9 from "@/assets/lexora9.png";
import Airnav from "@/assets/Airnav.png";
import Airnav1 from "@/assets/Airnav1.png";
import Airnav2 from "@/assets/Airnav2.png";
import Airnav3 from "@/assets/Airnav3.png";
import Airnav4 from "@/assets/Airnav4.png";
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
    slug: "lexora",
    category: ["web-development"],
    title: "Lexora",
    subtitle: {
      en: "Personal Fullstack Project",
      id: "Proyek Fullstack Pribadi",
    },
    desc: {
      en: "AI-powered productivity platform that leverages LLMs to convert PDF documents into immersive podcasts and interactive learning experiences.",
      id: "Platform produktivitas berbasis AI yang memanfaatkan LLM untuk mengubah dokumen PDF menjadi podcast yang imersif dan pengalaman belajar interaktif.",
    },
    longDesc: {
      en: "A comprehensive full-stack ecosystem built with NuxtJS and NestJS, integrating advanced LLMs via Groq API for lightning-fast AI processing. Beyond its core PDF-to-Podcast engine, Lexora features AI-driven Smart Summaries and 'Chat with PDF' capabilities, alongside essential productivity tools like a Pomodoro timer and smart notes—all synchronized across a seamless modern interface.",
      id: "Ekosistem full-stack komprehensif yang dibangun dengan NuxtJS dan NestJS, mengintegrasikan LLM canggih melalui Groq API untuk pemrosesan AI yang sangat cepat. Selain mesin utama PDF-ke-Podcast, Lexora memiliki fitur Ringkasan Cerdas berbasis AI dan kemampuan 'Chat dengan PDF', serta alat produktivitas penting seperti timer Pomodoro dan catatan pintar—semuanya disinkronkan dalam antarmuka modern yang mulus.",
    },
    tech: ["NuxtJS", "NestJS", "TypeScript", "Groq API", "TailwindCSS", "NuxtUI"],
    features: {
      en: [
        "AI-powered PDF to Audio conversion",
        "Integrated Pomodoro timer & focus modes",
        "Smart Summary & Chat with PDF features",
        "Smart note-taking & study tools",
        "Podcast playlist management",
        "Cross-platform accessibility",
      ],
      id: [
        "Konversi PDF ke Audio berbasis AI",
        "Timer Pomodoro & mode fokus terintegrasi",
        "Fitur Ringkasan Cerdas & Chat dengan PDF",
        "Catatan pintar & alat bantu belajar",
        "Manajemen playlist podcast",
        "Aksesibilitas lintas platform",
      ],
    },
    images: [
      lexora,
      lexora2,
      lexora3,
      lexora4,
      lexora5,
      lexora6,
      lexora7,
      lexora8,
      lexora9,
    ],
    link: "https://day-rise-beige.vercel.app/",
    github: "#",
  },
  {
    id: "02",
    slug: "arsipku",
    category: ["web-development"],
    title: "ArsipKu",
    subtitle: {
      en: "Digital Archiving System",
      id: "Sistem Pengarsipan Digital",
    },
    desc: {
      en: "Internal digital archiving system for AirNav (Perum LPPNPI) facilitate official correspondence and communication between employees.",
      id: "Sistem pengarsipan digital internal untuk AirNav (Perum LPPNPI) guna mempermudah surat-menyurat resmi dan komunikasi antar karyawan.",
    },
    longDesc: {
      en: "An internal digital archiving system developed for AirNav (Perum LPPNPI) designed with a Gmail-like interface to facilitate official correspondence and communication between employees. I was responsible for the Admin, Superadmin, and User roles, implementing features such as letter numbering, delegation, titelature, templates, digital signatures, and corporate account management/configuration. This project involved full Back-End and Front-End integration via REST API.",
      id: "Sistem pengarsipan digital internal yang dikembangkan untuk AirNav (Perum LPPNPI), dirancang menyerupai antarmuka Gmail untuk mempermudah komunikasi surat-menyurat resmi antar karyawan. Saya bertanggung jawab sebagai Admin, Superadmin, dan User dalam mengimplementasikan fitur penomoran surat, delegasi, titelatur, templat, tanda tangan digital (digsig), serta manajemen dan konfigurasi akun perusahaan. Proyek ini mencakup integrasi penuh antara Back-End dan Front-End melalui REST API.",
    },
    tech: ["NuxtJS", "TypeScript", "TailwindCSS", "NuxtUI"],
    features: {
      en: [
        "Letter Numbering & Delegation",
        "Titelature & Document Templates",
        "Digital Signature (Digsig) Integration",
        "Corporate Account Management",
        "Full REST API Integration (BE & FE)",
      ],
      id: [
        "Penomoran Surat & Delegasi",
        "Titelatur & Templat Dokumen",
        "Integrasi Digital Signature (Digsig)",
        "Manajemen Akun Perusahaan",
        "Integrasi Penuh REST API (BE & FE)",
      ],
    },
    images: [Airnav, Airnav1],
    link: "#",
    github: "#",
  },
  {
    id: "03",
    slug: "nav-event",
    category: ["web-development"],
    title: "NavEvent",
    subtitle: {
      en: "Event Management Platform",
      id: "Platform Manajemen Event",
    },
    desc: {
      en: "Corporate event management platform for Perum LPPNPI (AirNav Indonesia).",
      id: "Platform manajemen event korporat untuk Perum LPPNPI (AirNav Indonesia).",
    },
    longDesc: {
      en: "A corporate event management information system for Perum LPPNPI (AirNav Indonesia). As an Admin, I managed event operations, participant counts via barcode attendance, and displayed real-time participant data and status per session. The project included full-cycle development from REST API integration to BE and FE synchronization.",
      id: "Sistem informasi manajemen event korporat untuk Perum LPPNPI (AirNav Indonesia). Sebagai Admin, saya mengelola jalannya acara, mengatur jumlah peserta melalui absensi barcode, serta menampilkan data dan status peserta per sesi secara real-time. Proyek ini melibatkan pengembangan tuntas mulai dari integrasi REST API hingga sinkronisasi BE dan FE.",
    },
    tech: ["NuxtJS", "TypeScript", "TailwindCSS", "NuxtUI"],
    features: {
      en: [
        "Corporate Event Management",
        "Barcode Attendance & Tracking",
        "Real-time Participant Status per Session",
        "REST API Integration (BE & FE)",
        "Admin Dashboard for Operations",
      ],
      id: [
        "Manajemen Acara Korporat",
        "Absensi Barcode & Pelacakan Peserta",
        "Status Peserta per Sesi Real-time",
        "Integrasi REST API (BE & FE)",
        "Dashboard Admin untuk Operasional",
      ],
    },
    images: [Airnav2],
    link: "#",
    github: "#",
  },
  {
    id: "04",
    slug: "groperti",
    category: ["ui-ux"],
    title: "Groperti",
    subtitle: {
      en: "Real Estate Platform",
      id: "Platform Real Estat",
    },
    desc: {
      en: "Modern property search platform with interactive maps and advanced filters for a seamless browsing experience.",
      id: "Platform pencarian properti modern dengan peta interaktif dan filter canggih untuk pengalaman browsing yang mulus.",
    },
    longDesc: {
      en: "A property application with a UI/UX focused on user ease in searching, comparing, and contacting property agents. Interactive map features allow for visual area exploration.",
      id: "Aplikasi properti dengan UI/UX yang berfokus pada kemudahan pengguna dalam mencari, membandingkan, dan menghubungi agen properti. Fitur peta interaktif memungkinkan eksplorasi area secara visual.",
    },
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    features: {
      en: [
        "Interactive map with property listings",
        "Multidimensional filters (price, type, location)",
        "Immersive photo gallery per listing",
        "Saved & comparison listing features",
        "Property agent profile pages",
      ],
      id: [
        "Peta interaktif dengan listing properti",
        "Filter multidimensi (harga, tipe, lokasi)",
        "Galeri foto immersive per listing",
        "Fitur saved & comparison listing",
        "Halaman profil agen properti",
      ],
    },
    images: [Groperti, Groperti],
    link: "https://groperti.com/",
    github: "#",
  },
  {
    id: "05",
    slug: "mason-cafe",
    category: ["web-development", "ui-ux"],
    title: "Mason Cafe",
    subtitle: {
      en: "Restaurant Website",
      id: "Website Restoran",
    },
    desc: {
      en: "Beautiful cafe landing page with smooth animations, menu showcase, and integrated online reservation.",
      id: "Landing page kafe yang indah dengan animasi halus, showcase menu, dan reservasi online terintegrasi.",
    },
    longDesc: {
      en: "A premium restaurant website for Mason Cafe with an elegant and responsive design. Focused on visual food photography and easy ordering UX to increase reservation conversion.",
      id: "Website restoran premium untuk Mason Cafe dengan desain elegan dan responsif. Fokus pada visual food photography dan UX pemesanan yang mudah untuk meningkatkan konversi reservasi.",
    },
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    features: {
      en: [
        "Smooth and subtle scroll animations",
        "Digital menu with categories & filters",
        "Integrated online reservation system",
        "High-quality food photo gallery",
        "Interactive maps & location information",
      ],
      id: [
        "Animasi scroll yang smooth dan halus",
        "Menu digital dengan kategori & filter",
        "Sistem reservasi online terintegrasi",
        "Galeri foto makanan berkualitas tinggi",
        "Maps & informasi lokasi interaktif",
      ],
    },
    images: [Mason1, Mason, mason2, mason3],
    link: "https://web-design-test.vercel.app/",
    github: "#",
  },
  {
    id: "06",
    slug: "MyMovies",
    category: ["web-development", "ui-ux"],
    title: "My Movies",
    subtitle: {
      en: "Movie Streaming",
      id: "Streaming Film",
    },
    desc: {
      en: "Modern movie streaming platform with a complete catalog, interactive movie details, and a stunning user interface.",
      id: "Platform streaming film modern dengan katalog lengkap, detail film interaktif, dan antarmuka pengguna yang memukau.",
    },
    longDesc: {
      en: "A movie database application that uses external APIs to display the latest movie information. Allows users to search for movies, view details, ratings, and trailers directly in one responsive platform.",
      id: "Aplikasi database film yang menggunakan API eksternal untuk menampilkan informasi film terbaru. Memungkinkan pengguna mencari film, melihat detail, rating, dan trailer secara langsung dalam satu platform yang responsif.",
    },
    tech: ["React.js", "TMDB API", "TailwindCSS", "Framer Motion"],
    features: {
      en: [
        "Most popular & latest movie catalog",
        "Movie search by title",
        "Complete movie details (synopsis, cast, rating)",
        "Integrated movie trailers",
        "Modern & cinematic dark interface",
      ],
      id: [
        "Katalog film terpopuler & terbaru",
        "Pencarian film berdasarkan judul",
        "Detail film lengkap (sinopsis, cast, rating)",
        "Trailer film terintegrasi",
        "Antarmuka gelap yang modern & sinematik",
      ],
    },
    images: [MyMovies, MyMovies2],
    link: "https://elemes-frontend-test.vercel.app/",
    github: "#",
  },
  {
    id: "07",
    slug: "Thesis",
    category: ["web-development", "ui-ux"],
    title: "Thesis",
    subtitle: {
      en: "Academic Platform",
      id: "Platform Akademik",
    },
    desc: {
      en: "Research and thesis management system for students and lecturers in a university environment.",
      id: "Sistem manajemen penelitian dan skripsi untuk mahasiswa dan dosen di lingkungan perguruan tinggi.",
    },
    longDesc: {
      en: "An academic platform that helps students and lecturers in managing the thesis guidance process, starting from title submission, draft upload, to defense scheduling.",
      id: "Platform akademik yang membantu mahasiswa dan dosen dalam pengelolaan proses bimbingan skripsi, mulai dari pengajuan judul, upload draft, hingga penjadwalan sidang.",
    },
    tech: ["React.js", "CSS Modules", "Node.js", "MySQL"],
    features: {
      en: [
        "Thesis document upload & versioning",
        "Guidance schedule with notifications",
        "Inline lecturer review & feedback",
        "Progress tracking per student",
        "Defense announcements & final grades",
      ],
      id: [
        "Upload & versioning dokumen skripsi",
        "Jadwal bimbingan dengan notifikasi",
        "Review & feedback dosen inline",
        "Tracking progress per mahasiswa",
        "Pengumuman sidang & nilai akhir",
      ],
    },
    images: [Thesis, Thesis2, Thesis3, Thesis4],
    link: "#",
    github: "#",
  },
  {
    id: "08",
    slug: "LMS",
    category: ["web-development"],
    title: "LMS",
    subtitle: {
      en: "E-Learning Platform",
      id: "Platform E-Learning",
    },
    desc: {
      en: "Online learning platform for course management, interactive quizzes, and student learning progress tracking.",
      id: "Platform pembelajaran online untuk manajemen kursus, kuis interaktif, dan pelacakan kemajuan belajar siswa.",
    },
    longDesc: {
      en: "A Learning Management System designed for educational institutions. Allows instructors to upload materials, create assignments, and interact with students in a structured digital learning environment.",
      id: "Learning Management System yang dirancang untuk institusi pendidikan. Memungkinkan pengajar mengunggah materi, membuat tugas, dan berinteraksi dengan siswa dalam lingkungan belajar digital yang terstruktur.",
    },
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    features: {
      en: [
        "Course & learning material management",
        "Automated quiz & grading system",
        "Progress tracking for students",
        "Admin & instructor dashboard",
        "Student discussion forum",
      ],
      id: [
        "Manajemen kursus & materi belajar",
        "Sistem kuis & penilaian otomatis",
        "Progress tracking untuk siswa",
        "Dashboard admin & pengajar",
        "Forum diskusi antar siswa",
      ],
    },
    images: [LMS, LMS1, LMS2, LMS3],
    link: "#",
    github: "#",
  },
  {
    id: "09",
    slug: "Sertifica",
    category: ["web-development", "ui-ux"],
    title: "Sertifica",
    subtitle: {
      en: "Certification System",
      id: "Sistem Sertifikasi",
    },
    desc: {
      en: "Automated digital certificate management and verification system to professionally validate achievements.",
      id: "Sistem manajemen dan verifikasi sertifikat digital otomatis untuk memvalidasi pencapaian secara profesional.",
    },
    longDesc: {
      en: "A platform to issue digital certificates in bulk and provide authenticity verification features via unique codes or QR codes for data security.",
      id: "Platform untuk menerbitkan sertifikat digital secara massal dan menyediakan fitur verifikasi keaslian sertifikat melalui kode unik atau QR code untuk keamanan data.",
    },
    tech: ["React.js", "Cloudinary", "Node.js", "TailwindCSS"],
    features: {
      en: [
        "Automatic certificate generation",
        "Certificate verification via QR Code",
        "Bulk upload of recipient data",
        "Custom certificate templates",
        "Direct certificate delivery email",
      ],
      id: [
        "Generate sertifikat otomatis",
        "Verifikasi sertifikat via QR Code",
        "Bulk upload data penerima",
        "Custom template sertifikat",
        "Email pengiriman sertifikat langsung",
      ],
    },
    images: [Sertifica, Sertifica2, Sertifica3],
    link: "#",
    github: "#",
  },
  {
    id: "10",
    slug: "digishop",
    category: ["web-development"],
    title: "Digishop",
    subtitle: {
      en: "E-Commerce",
      id: "E-Commerce",
    },
    desc: {
      en: "Complete online shopping platform with seamless payment integration and real-time inventory management.",
      id: "Platform belanja online lengkap dengan integrasi pembayaran mulus dan manajemen inventori real-time.",
    },
    longDesc: {
      en: "A full-featured e-commerce that allows sellers to manage products and buyers to conduct transactions seamlessly. Equipped with a secure payment system and order tracking.",
      id: "E-commerce full-featured yang memungkinkan penjual mengelola produk dan pembeli melakukan transaksi secara seamless. Dilengkapi dengan sistem pembayaran yang aman dan tracking pesanan.",
    },
    tech: ["JavaScript", "HTML5", "CSS3", "Payment Gateway"],
    features: {
      en: [
        "Product catalog with search & filter",
        "Shopping cart & wishlist",
        "Intuitive multi-step checkout",
        "Payment gateway integration",
        "Order tracking & history",
      ],
      id: [
        "Katalog produk dengan search & filter",
        "Shopping cart & wishlist",
        "Checkout multi-step yang intuitif",
        "Integrasi payment gateway",
        "Order tracking & history",
      ],
    },
    images: [Digishop, Digishop2, Digishop3],
    link: "#",
    github: "#",
  },
  {
    id: "11",
    slug: "Travel",
    category: ["ui-ux"],
    title: "Redesign Pegi-Pegi",
    subtitle: {
      en: "Travel App Concept",
      id: "Konsep Aplikasi Travel",
    },
    desc: {
      en: "Travel application redesign concept focused on improving hotel search and flight ticket UX.",
      id: "Konsep desain ulang aplikasi travel dengan fokus pada peningkatan UX pencarian hotel dan tiket pesawat.",
    },
    longDesc: {
      en: "A UI/UX case study project to redesign the Pegi-Pegi application. Focused on simplifying the booking flow and enhancing visuals to be more modern and user-friendly for travelers.",
      id: "Project studi kasus UI/UX untuk mendesain ulang aplikasi Pegi-Pegi. Fokus pada penyederhanaan alur pemesanan dan peningkatan visual agar lebih modern dan user-friendly bagi traveler.",
    },
    tech: ["UI/UX Design", "Figma", "Design System"],
    features: {
      en: [
        "User research & pain point analysis",
        "Redesigned search & filter flow",
        "Immersive hotel detail page",
        "Simplified checkout process",
        "Modern & clean UI visual style",
      ],
      id: [
        "User research & pain point analysis",
        "Redesigned search & filter flow",
        "Immersive hotel detail page",
        "Simplified checkout process",
        "Modern & clean UI visual style",
      ],
    },
    images: [Travel, Travel2, Travel3],
    link: "#",
    github: "#",
  },
  {
    id: "12",
    slug: "revolve",
    category: ["ui-ux"],
    title: "Revolve",
    subtitle: {
      en: "Fashion Concept",
      id: "Konsep Fashion",
    },
    desc: {
      en: "Modern fashion brand landing page showcasing the latest collections with a minimalist aesthetic.",
      id: "Landing page brand fashion modern yang menampilkan koleksi terbaru dengan estetika minimalis.",
    },
    longDesc: {
      en: "A product showcase website for the Revolve fashion brand. Emphasizes large product visuals and flowing navigation to create a luxurious shopping experience.",
      id: "Website showcase produk untuk brand fashion Revolve. Menekankan pada visual produk yang besar dan navigasi yang mengalir untuk menciptakan pengalaman belanja yang mewah.",
    },
    tech: ["JavaScript", "HTML5", "CSS3", "ScrollReveal"],
    features: {
      en: [
        "Seasonal collection catalog",
        "Interactive product hover effects",
        "Dynamic fashion grid layout",
        "Brand social media integration",
        "Minimalist & elegant navigation",
      ],
      id: [
        "Katalog koleksi seasonal",
        "Efek hover produk yang interaktif",
        "Layout grid fashion yang dinamis",
        "Integrasi media sosial brand",
        "Navigasi minimalis & elegan",
      ],
    },
    images: [Revolve, Revolve2, Revolve3, Revolve4],
    link: "#",
    github: "#",
  },
  {
    id: "13",
    slug: "caffein-line",
    category: ["web-development"],
    title: "Caffein Line",
    subtitle: {
      en: "Coffee Brand",
      id: "Brand Kopi",
    },
    desc: {
      en: "Brand identity and e-commerce experience specifically designed for a specialty coffee roastery.",
      id: "Brand identity dan pengalaman e-commerce yang dirancang khusus untuk specialty coffee roastery.",
    },
    longDesc: {
      en: "Brand identity website and online store for Caffein Line, a specialty coffee roastery. Features brand philosophy, coffee origin, roasting process, and products available for direct purchase.",
      id: "Website brand identity sekaligus toko online untuk Caffein Line, sebuah specialty coffee roastery. Menampilkan filosofi brand, asal-usul kopi, proses roasting, dan produk yang bisa dibeli langsung.",
    },
    tech: ["JavaScript", "HTML5", "CSS3", "CSS Animations"],
    features: {
      en: [
        "Immersive brand storytelling",
        "Coffee catalog with origin story",
        "Smooth parallax animations",
        "Integrated online store",
        "Blog about the world of coffee",
      ],
      id: [
        "Brand storytelling yang immersive",
        "Katalog kopi dengan origin story",
        "Animasi parallax yang smooth",
        "Toko online terintegrasi",
        "Blog tentang dunia kopi",
      ],
    },
    images: [Caffeinline, Caffeinline],
    link: "#",
    github: "#",
  },
];
