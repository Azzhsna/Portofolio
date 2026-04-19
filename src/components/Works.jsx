import React, { useEffect, useRef, useState } from "react";
import Airnav from "@/assets/Airnav.png";
import Airnav2 from "@/assets/Airnav2.png";
import Groperti from "@/assets/Groperti.png";
import Mason from "@/assets/Mason.png";
import Thesis from "@/assets/Thesis.png";
import Digishop from "@/assets/Digishop.png";
import Caffeinline from "@/assets/Caffein-line.png";
// import Movies from "@/assets/Movies.png"

// ── Project Data ─────────────────────────────────────────────────────────
const projectData = [
  {
    id: "01",
    title: "Airnav",
    subtitle: "Perum LPPNPI",
    desc: "Platform manajemen event korporat untuk Perum LPPNPI — lembaga penyelenggara pelayanan navigasi penerbangan Indonesia.",
    longDesc:
      "Sistem informasi corporate event management yang digunakan oleh Perum LPPNPI. Platform ini mempermudah koordinasi antara panitia dan peserta dalam penyelenggaraan seminar, pelatihan, dan acara korporat lainnya.",
    tech: ["NuxtJS", "TypeScript", "TailwindCSS"],
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
    images: [Groperti, Groperti],
    link: "https://groperti.com/",
    github: "#",
  },
  {
    id: "03",
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
    images: [Mason, Mason],
    link: "https://web-design-test.vercel.app/",
    github: "#",
  },
  // {
  //   id: "04",
  //   title: "Movies",
  //   subtitle: "Entertainment App",
  //   desc: "Aplikasi pencarian dan eksplorasi film dengan tampilan modern, detail lengkap, dan pengalaman pengguna yang intuitif.",
  //   longDesc: "Platform entertainment untuk menjelajahi koleksi film dengan fitur pencarian canggih, detail film lengkap termasuk rating, sinopsis, dan informasi cast.",
  //   tech: ["JavaScript", "HTML5", "CSS3", "API Integration"],
  //   features: [
  //     "Pencarian film real-time",
  //     "Detail film lengkap & rating",
  //     "UI responsif & modern",
  //     "Browsing by genre & kategori",
  //     "Watchlist & favorit",
  //   ],
  //   images: [Movies, Movies],
  //   link: "https://elemes-frontend-test.vercel.app/",
  //   github: null,
  // },
  {
    id: "05",
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
    images: [Thesis, Thesis],
    link: "#",
    github: "#",
  },
  {
    id: "05",
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
    images: [Digishop, Digishop],
    link: "#",
    github: "#",
  },
  {
    id: "06",
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

// ── Modal Component ──────────────────────────────────────────────────────
// const ProjectModal = ({ project, onClose }) => {
//   const modalRef = useRef(null);

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handleKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", handleKey);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   if (!project) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
//       style={{ background: "rgba(0,0,0,0.88)" }}
//       onClick={handleBackdropClick}
//     >
//       <div
//         ref={modalRef}
//         className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
//         style={{
//           background: "linear-gradient(160deg, #1a0800 0%, #0d0400 100%)",
//           border: "1px solid rgba(180,80,10,0.25)",
//           boxShadow: "0 40px 120px rgba(0,0,0,0.9)",
//           scrollbarWidth: "thin",
//           scrollbarColor: "rgba(217,119,6,0.3) transparent",
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-orange-400 transition-all duration-200"
//           style={{
//             background: "rgba(0,0,0,0.4)",
//             border: "1px solid rgba(255,255,255,0.12)",
//           }}
//         >
//           <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//             <path
//               d="M1 1l10 10M11 1L1 11"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//             />
//           </svg>
//         </button>

//         {/* Modal Images */}
//         <div className="flex gap-0.5 h-52 overflow-hidden rounded-t-2xl">
//           {project.images.map((img, i) => (
//             <div key={i} className="flex-1 overflow-hidden">
//               <img
//                 src={img}
//                 alt={`${project.title} screenshot ${i + 1}`}
//                 className="w-full h-full object-cover"
//                 style={
//                   i === 1
//                     ? {
//                         filter:
//                           "hue-rotate(10deg) brightness(0.7) saturate(0.9)",
//                       }
//                     : {}
//                 }
//               />
//             </div>
//           ))}
//         </div>

//         {/* Modal Content */}
//         <div className="p-6 md:p-8">
//           {/* Header */}
//           <div className="flex items-start gap-4 mb-5">
//             <span
//               className="font-serif text-5xl font-black leading-none select-none"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #dc2626 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               {project.id}
//             </span>
//             <div className="flex-1">
//               <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-100 leading-tight mb-1">
//                 {project.title}
//               </h3>
//               <p
//                 className="text-[10px] uppercase tracking-[3px]"
//                 style={{ color: "rgba(217,119,6,0.55)" }}
//               >
//                 {project.subtitle}
//               </p>
//               {/* Links */}
//               <div className="flex gap-2 mt-3">
//                 <a
//                   href={project.link}
//                   className="text-[10px] uppercase tracking-[1.5px] px-4 py-1.5 rounded-full font-medium transition-all duration-200 hover:opacity-80"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(180,80,10,0.3), rgba(120,30,5,0.3))",
//                     border: "1px solid rgba(217,119,6,0.4)",
//                     color: "#fbbf24",
//                   }}
//                 >
//                   ↗ Live Project
//                 </a>
//                 <a
//                   href={project.github}
//                   className="text-[10px] uppercase tracking-[1.5px] px-4 py-1.5 rounded-full font-medium transition-all duration-200 hover:border-white/30 hover:text-white/70"
//                   style={{
//                     border: "1px solid rgba(255,255,255,0.12)",
//                     color: "rgba(255,255,255,0.4)",
//                   }}
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <div
//             className="h-px mb-5"
//             style={{ background: "rgba(217,119,6,0.12)" }}
//           />

//           {/* Description */}
//           <p
//             className="text-[10px] uppercase tracking-[3px] mb-2"
//             style={{ color: "rgba(217,119,6,0.5)" }}
//           >
//             Tentang Project
//           </p>
//           <p
//             className="text-sm leading-relaxed mb-6"
//             style={{ color: "rgba(255,255,255,0.5)" }}
//           >
//             {project.longDesc}
//           </p>

//           {/* Tech Stack */}
//           <p
//             className="text-[10px] uppercase tracking-[3px] mb-3"
//             style={{ color: "rgba(217,119,6,0.5)" }}
//           >
//             Tech Stack
//           </p>
//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.tech.map((t) => (
//               <span
//                 key={t}
//                 className="text-[10px] tracking-wide px-3 py-1.5 rounded-full"
//                 style={{
//                   border: "1px solid rgba(217,119,6,0.22)",
//                   color: "rgba(251,191,36,0.6)",
//                   background: "rgba(180,80,10,0.08)",
//                 }}
//               >
//                 {t}
//               </span>
//             ))}
//           </div>

//           {/* Features */}
//           <p
//             className="text-[10px] uppercase tracking-[3px] mb-3"
//             style={{ color: "rgba(217,119,6,0.5)" }}
//           >
//             Fitur Utama
//           </p>
//           <ul className="flex flex-col gap-2">
//             {project.features.map((f) => (
//               <li
//                 key={f}
//                 className="flex items-start gap-2.5 text-xs leading-relaxed"
//                 style={{ color: "rgba(255,255,255,0.4)" }}
//               >
//                 <span
//                   className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
//                   style={{ background: "rgba(217,119,6,0.6)" }}
//                 />
//                 {f}
//               </li>
//             ))}
//           </ul>

//           {/* Divider */}
//           <div
//             className="h-px my-6"
//             style={{ background: "rgba(217,119,6,0.12)" }}
//           />

//           {/* Screenshots */}
//           <p
//             className="text-[10px] uppercase tracking-[3px] mb-3"
//             style={{ color: "rgba(217,119,6,0.5)" }}
//           >
//             Screenshots
//           </p>
//           <div className="grid grid-cols-3 gap-2">
//             {[project.images[0], project.images[1], project.images[0]].map(
//               (img, i) => (
//                 <div
//                   key={i}
//                   className="aspect-video rounded-lg overflow-hidden"
//                   style={{
//                     border: "1px solid rgba(180,80,10,0.15)",
//                     background: "#0d0400",
//                   }}
//                 >
//                   <img
//                     src={img}
//                     alt={`${project.title} screen ${i + 1}`}
//                     className="w-full h-full object-cover"
//                     style={
//                       i === 1
//                         ? { filter: "hue-rotate(15deg) brightness(0.7)" }
//                         : i === 2
//                         ? { filter: "saturate(0.6) brightness(0.8)" }
//                         : {}
//                     }
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background:
            "linear-gradient(160deg, #fffaf3 0%, #fdf3e3 40%, #faebd4 75%, #f5dfc4 100%)",
          border: "1px solid rgba(180,80,10,0.2)",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(217,119,6,0.1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            background: "rgba(28,16,8,0.07)",
            border: "1px solid rgba(180,80,10,0.2)",
            color: "#92400e",
          }}
        >
          ✕
        </button>

        {/* Images */}
        <div className="flex gap-0.5 h-52 overflow-hidden rounded-t-2xl">
          {project.images.map((img, i) => (
            <div key={i} className="flex-1 overflow-hidden">
              <img
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <span className="font-serif text-5xl font-black">{project.id}</span>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                {project.title}
              </h3>

              <p className="text-xs uppercase tracking-widest mb-3 text-orange-600">
                {project.subtitle}
              </p>

              {/* Links (FIXED) */}
              <div className="flex gap-2">
                {/* {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-1.5 rounded-full border border-orange-400 text-orange-700"
                  >
                    ↗ Live Project
                  </a>
                )} */}
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full font-medium text-white"
                    style={{ background: "linear-gradient(135deg, #b45309, #c2410c)" }}
                    onClick={e => e.stopPropagation()}
                  >
                    ↗ Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-1.5 rounded-full border text-gray-700"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Tentang */}
          <p className="text-xs uppercase tracking-widest mb-2 text-orange-600">
            Tentang Project
          </p>
          <p className="text-sm mb-6">{project.longDesc}</p>

          {/* Tech */}
          <p className="text-xs uppercase tracking-widest mb-3 text-orange-600">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-orange-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Features */}
          <p className="text-xs uppercase tracking-widest mb-3 text-orange-600">
            Fitur Utama
          </p>
          <ul className="flex flex-col gap-2">
            {project.features.map((f) => (
              <li key={f} className="text-sm flex gap-2">
                • {f}
              </li>
            ))}
          </ul>

          {/* Screenshots */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {project.images.map((img, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`screenshot ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Project Card ─────────────────────────────────────────────────────────
// const ProjectCard = ({ project, index, onOpen }) => {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           obs.unobserve(el);
//         }
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className="cursor-pointer group"
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(24px)",
//         transition: `opacity 0.6s ease ${
//           index * 0.08
//         }s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
//       }}
//       onClick={() => onOpen(project)}
//     >
//       <div
//         className="overflow-hidden rounded-2xl h-full flex flex-col"
//         style={{
//           background:
//             "linear-gradient(160deg, rgba(30,12,4,0.92) 0%, rgba(15,5,2,0.97) 100%)",
//           border: "1px solid rgba(180,80,10,0.15)",
//           transition:
//             "transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "translateY(-4px)";
//           e.currentTarget.style.borderColor = "rgba(251,191,36,0.3)";
//           e.currentTarget.style.boxShadow =
//             "0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(180,80,10,0.12)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "translateY(0)";
//           e.currentTarget.style.borderColor = "rgba(180,80,10,0.15)";
//           e.currentTarget.style.boxShadow = "none";
//         }}
//       >
//         {/* Card Images */}
//         <div className="flex gap-0.5 h-40 overflow-hidden">
//           {project.images.map((img, i) => (
//             <div key={i} className="flex-1 overflow-hidden relative">
//               <img
//                 src={img}
//                 alt={`${project.title} preview`}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 style={
//                   i === 1
//                     ? {
//                         filter:
//                           "hue-rotate(15deg) brightness(0.75) saturate(0.8)",
//                       }
//                     : {}
//                 }
//               />
//               {/* Image overlay */}
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Card Body */}
//         <div className="p-4 pb-5 flex flex-col flex-1">
//           <div className="flex items-start justify-between mb-2">
//             <span
//               className="font-serif text-3xl font-white leading-none select-none"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #dc2626 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 opacity: 0.7,
//               }}
//             >
//               {project.id}
//             </span>
//             <span
//               className="text-[9px] uppercase tracking-[2px] px-2 py-1 rounded-full mt-1"
//               style={{
//                 border: "1px solid rgba(217,119,6,0.25)",
//                 color: "rgba(217,119,6,0.6)",
//               }}
//             >
//               {project.subtitle}
//             </span>
//           </div>

//           <p className="font-serif text-lg font-bold text-stone-100 leading-tight mb-1">
//             {project.title}
//           </p>
//           <p
//             className="text-[10px] uppercase tracking-[2.5px] mb-2.5"
//             style={{ color: "rgba(217,119,6,0.45)" }}
//           >
//             {project.subtitle}
//           </p>
//           <p
//             className="text-xs leading-relaxed flex-1 mb-3"
//             style={{ color: "rgba(255,255,255,0.35)" }}
//           >
//             {project.desc}
//           </p>

//           <div className="flex items-center justify-between mt-auto">
//             <span
//               className="text-[10px] italic truncate max-w-[55%]"
//               style={{ color: "rgba(255,255,255,0.2)" }}
//             >
//               {project.tech.slice(0, 3).join(" · ")}
//             </span>
//             <button
//               className="text-[9px] uppercase tracking-[1.5px] px-3 py-1.5 rounded-full transition-all duration-200"
//               style={{
//                 border: "1px solid rgba(217,119,6,0.3)",
//                 color: "rgba(251,191,36,0.65)",
//                 background: "transparent",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "rgba(249,115,22,0.12)";
//                 e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)";
//                 e.currentTarget.style.color = "#fb923c";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "transparent";
//                 e.currentTarget.style.borderColor = "rgba(217,119,6,0.3)";
//                 e.currentTarget.style.color = "rgba(251,191,36,0.65)";
//               }}
//             >
//               Detail →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ── Project Card ─────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, onOpen }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-pointer group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.08
          }s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
      }}
      onClick={() => onOpen(project)}
    >
      <div
        className="overflow-hidden rounded-2xl h-full flex flex-col"
        style={{
          background:
            "linear-gradient(160deg, #fffaf3 0%, #fdf3e3 55%, #faebd4 100%)",
          border: "1px solid rgba(217,119,6,0.15)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
          transition:
            "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow =
            "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(249,115,22,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.35)";
        }}
      >
        {/* Card Images */}
        <div className="flex gap-0.5 h-48 overflow-hidden">
          {project.images.map((img, i) => (
            <div key={i} className="flex-1 overflow-hidden relative">
              <img
                src={img}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={
                  i === 1
                    ? {
                      filter:
                        "hue-rotate(15deg) brightness(0.75) saturate(0.8)",
                    }
                    : {}
                }
              />
            </div>
          ))}
        </div>

        {/* Card Body */}
        <div className="p-5 pb-6 flex flex-col flex-1">
          {/* Top row: number + badge */}
          <div className="flex items-start justify-between mb-3">
            <span
              className="font-serif text-4xl font-black leading-none select-none"
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #dc2626 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {project.id}
            </span>
            <span
              className="text-[9px] uppercase tracking-[2px] px-2.5 py-1 rounded-full mt-1"
              style={{
                background: "#fff7ed",
                color: "#c2410c",
                border: "1px solid #fed7aa",
              }}
            >
              {project.subtitle}
            </span>
          </div>
          {/* Title */}
          <p
            className="font-serif text-xl font-bold leading-tight mb-1"
            style={{ color: "#1c1008" }}
          >
            {project.title}
          </p>
          <p
            className="text-sm leading-relaxed flex-1 mb-4"
            style={{ color: "#6b4c2a" }}
          >
            {project.desc}
          </p>

          {/* Footer */}
          <div
            className="flex items-center justify-between mt-auto pt-3"
            style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
          >
            <span
              className="text-[10px] italic truncate max-w-[55%]"
              style={{ color: "#a97c50" }}
            >
              {project.tech.slice(0, 3).join(" · ")}
            </span>
            <button
              className="text-[9px] uppercase tracking-[1.5px] px-3.5 py-1.5 rounded-full font-medium transition-all duration-200"
              style={{
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                color: "#c2410c",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffedd5";
                e.currentTarget.style.borderColor = "#fb923c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff7ed";
                e.currentTarget.style.borderColor = "#fed7aa";
              }}
            >
              Detail →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Header ────────────────────────────────────────────────────────────────
const WorksHeader = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center pt-24 pb-14">
      <p
        className="text-sm uppercase tracking-widest mb-4"
        style={{
          color: "#d97706",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Featured Projects
      </p>
      <h2
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}
      >
        <span
          style={{
            background:
              "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #dc2626 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          MY
        </span>{" "}
        <span className="text-white">Works</span>
      </h2>

      {/* Divider */}
      <div
        className="flex items-center justify-center gap-4 mb-5"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.28s",
        }}
      >
        <div
          className="h-px w-20"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(217,119,6,0.5))",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "rgba(217,119,6,0.7)" }}
        />
        <div
          className="h-px w-20"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(217,119,6,0.5))",
          }}
        />
      </div>

      <p
        className="text-sm font-light max-w-md mx-auto leading-relaxed"
        style={{
          color: "rgba(255,255,255,0.4)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s",
        }}
      >
        Explore my collection of web applications, design systems, and digital
        experiences.
      </p>
    </div>
  );
};

// ── Main Works Section ───────────────────────────────────────────────────
const Works = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="works"
      className="relative w-full overflow-hidden pb-36 scroll-mt-24"
      style={{ background: "#000" }}
    >
      {/* ── Background — matching Hero ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #000 0%, rgba(69,10,10,0.2) 35%, rgba(28,25,23,0.9) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #000 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% -10%, rgba(120,53,15,0.15), rgba(0,0,0,0))",
          }}
        />
        {/* Warm glows */}
        <div
          className="absolute top-0 rounded-full"
          style={{
            left: "25%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(180,80,10,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "33%",
            right: "25%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(120,30,5,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: "40%",
            left: "-5%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(100,40,0,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16">
        <WorksHeader />

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, #000, transparent)",
        }}
      />

      {/* ── Modal ── */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};

export default Works;
