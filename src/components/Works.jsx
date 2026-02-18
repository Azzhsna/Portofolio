// import React, { useState, useRef, useEffect } from "react";
// import Groperti from "@/assets/Groperti.png";

// const Works = () => {
//   const scrollContainerRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [velocity, setVelocity] = useState(0);
//   const lastX = useRef(0);
//   const lastTime = useRef(0);

//   const projects = [
//     {
//       id: "01",
//       title: "Groperti - Real Estate Platform",
//       description:
//         "Design and develop a modern real estate website with advanced property search and interactive maps.",
//       gradient: "from-blue-600 via-blue-500 to-cyan-400",
//       image: Groperti,
//       tech: "React • Tailwind • Maps API",
//     },
//     {
//       id: "02",
//       title: "E-Commerce Dashboard",
//       description:
//         "Full-featured admin dashboard with analytics and inventory management system.",
//       gradient: "from-orange-600 via-orange-500 to-yellow-400",
//       image: Groperti,
//       tech: "Next.js • TypeScript • Chart.js",
//     },
//     {
//       id: "03",
//       title: "SaaS Landing Page",
//       description:
//         "Converting landing page with animations and lead generation forms.",
//       gradient: "from-purple-600 via-purple-500 to-pink-400",
//       image: Groperti,
//       tech: "React • Framer Motion • GSAP",
//     },
//     {
//       id: "04",
//       title: "Portfolio CMS",
//       description:
//         "Content management system for creative professionals and agencies.",
//       gradient: "from-green-600 via-emerald-500 to-teal-400",
//       image: Groperti,
//       tech: "Vue.js • Nuxt • Strapi",
//     },
//     {
//       id: "05",
//       title: "Brand Identity System",
//       description:
//         "Complete design system with components library and documentation.",
//       gradient: "from-pink-600 via-rose-500 to-red-400",
//       image: Groperti,
//       tech: "React • Storybook • Figma",
//     },
//     {
//       id: "06",
//       title: "Booking Platform",
//       description: "Appointment scheduling system with payment integration.",
//       gradient: "from-indigo-600 via-blue-500 to-sky-400",
//       image: Groperti,
//       tech: "React • Node.js • Stripe",
//     },
//   ];

//   // Calculate card position and apply CONCAVE (inward curve) 3D transform
//   useEffect(() => {
//     const updateCardTransforms = () => {
//       const container = scrollContainerRef.current;
//       if (!container) return;

//       const cards = container.querySelectorAll(".project-card");
//       const containerRect = container.getBoundingClientRect();
//       const containerCenter = containerRect.left + containerRect.width / 2;

//       let closestIndex = 0;
//       let minDistance = Infinity;

//       cards.forEach((card, index) => {
//         const cardRect = card.getBoundingClientRect();
//         const cardCenter = cardRect.left + cardRect.width / 2;
//         const distanceFromCenter = cardCenter - containerCenter;
//         const maxDistance = containerRect.width / 2;
//         const percentage = distanceFromCenter / maxDistance;

//         // Track closest card to center
//         const absDistance = Math.abs(distanceFromCenter);
//         if (absDistance < minDistance) {
//           minDistance = absDistance;
//           closestIndex = index;
//         }

//         // Enhanced CONCAVE effect with smoother curves
//         const rotateY = percentage * -40; // Stronger rotation for better curve
//         const translateZ =
//           Math.abs(percentage) > 0.2
//             ? (Math.abs(percentage) - 0.2) * 250 // Push side cards FORWARD more
//             : -80 * (1 - Math.abs(percentage) / 0.2); // Pull center card BACK more

//         // Center card gets biggest scale, side cards get smaller
//         const scale = 1 - Math.abs(percentage) * 0.35;
//         const opacity = 1 - Math.abs(percentage) * 0.5;

//         card.style.transform = `
//           perspective(1400px)
//           rotateY(${rotateY}deg)
//           translateZ(${translateZ}px)
//           scale(${scale})
//         `;
//         card.style.opacity = Math.max(opacity, 0.3);
//       });

//       setActiveIndex(closestIndex);
//     };

//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener("scroll", updateCardTransforms);
//       updateCardTransforms();
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("scroll", updateCardTransforms);
//       }
//     };
//   }, []);

//   // Auto-center the active card on scroll end with smoother timing
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let scrollTimeout;
//     const handleScrollEnd = () => {
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         if (!isDragging) {
//           centerCard(activeIndex);
//         }
//       }, 200); // Slightly longer delay for smoother feel
//     };

//     container.addEventListener("scroll", handleScrollEnd);
//     return () => {
//       container.removeEventListener("scroll", handleScrollEnd);
//       clearTimeout(scrollTimeout);
//     };
//   }, [activeIndex, isDragging]);

//   // Function to center a specific card
//   const centerCard = (index) => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const cards = container.querySelectorAll(".project-card");
//     if (!cards[index]) return;

//     const containerRect = container.getBoundingClientRect();
//     const cardRect = cards[index].getBoundingClientRect();

//     const containerCenter = containerRect.left + containerRect.width / 2;
//     const cardCenter = cardRect.left + cardRect.width / 2;
//     const scrollOffset = cardCenter - containerCenter;

//     container.scrollBy({
//       left: scrollOffset,
//       behavior: "smooth",
//     });
//   };

//   // Scroll navigation with auto-center
//   const scroll = (direction) => {
//     const newIndex =
//       direction === "left"
//         ? Math.max(0, activeIndex - 1)
//         : Math.min(projects.length - 1, activeIndex + 1);

//     setActiveIndex(newIndex);
//     centerCard(newIndex);
//   };

//   // Mouse drag handlers with momentum
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
//     setScrollLeft(scrollContainerRef.current.scrollLeft);
//     lastX.current = e.pageX;
//     lastTime.current = Date.now();
//     setVelocity(0);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();

//     const x = e.pageX - scrollContainerRef.current.offsetLeft;
//     const currentTime = Date.now();
//     const timeDelta = currentTime - lastTime.current;

//     if (timeDelta > 0) {
//       const newVelocity = (e.pageX - lastX.current) / timeDelta;
//       setVelocity(newVelocity);
//     }

//     const walk = (x - startX) * 1.5; // Reduced multiplier for smoother feel
//     scrollContainerRef.current.scrollLeft = scrollLeft - walk;

//     lastX.current = e.pageX;
//     lastTime.current = currentTime;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     applyMomentum();
//   };

//   const handleMouseLeave = () => {
//     if (isDragging) {
//       setIsDragging(false);
//       applyMomentum();
//     }
//   };

//   // Touch handlers for mobile with momentum
//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
//     setScrollLeft(scrollContainerRef.current.scrollLeft);
//     lastX.current = e.touches[0].pageX;
//     lastTime.current = Date.now();
//     setVelocity(0);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;

//     const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
//     const currentTime = Date.now();
//     const timeDelta = currentTime - lastTime.current;

//     if (timeDelta > 0) {
//       const newVelocity = (e.touches[0].pageX - lastX.current) / timeDelta;
//       setVelocity(newVelocity);
//     }

//     const walk = (x - startX) * 1.5;
//     scrollContainerRef.current.scrollLeft = scrollLeft - walk;

//     lastX.current = e.touches[0].pageX;
//     lastTime.current = currentTime;
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//     applyMomentum();
//   };

//   // Apply momentum scrolling
//   const applyMomentum = () => {
//     if (Math.abs(velocity) < 0.1) return;

//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const momentumDistance = velocity * 300; // Adjust for desired momentum strength
//     const targetScroll = container.scrollLeft - momentumDistance;

//     container.scrollTo({
//       left: targetScroll,
//       behavior: "smooth",
//     });
//   };

//   // Initialize with first card centered
//   useEffect(() => {
//     setTimeout(() => centerCard(0), 100);
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full bg-black overflow-hidden py-12 md:py-20">
//       {/* Dark atmospheric background */}
//       <div className="absolute inset-0 bg-gradient-radial from-red-950/10 via-black to-black"></div>

//       {/* Ambient glow effect */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-3xl"></div>

//       <div className="relative z-10 px-4 md:px-8 lg:px-12">
//         {/* Header Section - Compact */}
//         <div className="max-w-7xl mx-auto mb-8 md:mb-12">
//           <p className="text-orange-500 text-xs md:text-sm uppercase tracking-wider mb-3">
//             Latest Projects
//           </p>
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//             Curious What Else I've
//             <br />
//             Created?
//           </h2>
//           <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-6">
//             Explore more brand identities, packaging, and digital design work in
//             my extended portfolio.
//           </p>
//           <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full inline-flex items-center gap-2 transition-all duration-300 group text-sm">
//             See more Projects
//             <svg
//               className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* LARGE FULL-SCREEN Carousel Container */}
//         <div className="relative w-full" style={{ perspective: "1500px" }}>
//           {/* Navigation Buttons */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-black/60 backdrop-blur-md hover:bg-black/80 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl group"
//             aria-label="Scroll left"
//           >
//             <svg
//               className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2.5}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-black/60 backdrop-blur-md hover:bg-black/80 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl group"
//             aria-label="Scroll right"
//           >
//             <svg
//               className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2.5}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>

//           {/* Projects Carousel with CONCAVE Effect */}
//           <div
//             ref={scrollContainerRef}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseLeave}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             className="flex gap-6 md:gap-12 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing py-16 px-8 md:px-24"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               transformStyle: "preserve-3d",
//               scrollSnapType: "x mandatory",
//               scrollBehavior: isDragging ? "auto" : "smooth",
//               WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
//             }}
//           >
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="project-card flex-shrink-0 w-[380px] md:w-[520px] lg:w-[680px] group"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transition: isDragging
//                     ? "opacity 0.2s ease-out"
//                     : "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//                   scrollSnapAlign: "center",
//                   scrollSnapStop: "always",
//                 }}
//               >
//                 {/* LANDSCAPE Card - 16:9 Ratio for Web Projects */}
//                 <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[16/10] shadow-2xl border border-white/10 bg-black">
//                   {/* Project Image */}
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
//                   />

//                   {/* Dark overlay for better text readability */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

//                   {/* COLORFUL GRADIENT OVERLAY - Added for visual interest */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-500`}
//                   ></div>

//                   {/* Hover Effect - View Project Button */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
//                     <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-orange-500 hover:bg-orange-500/20 rounded-full text-white font-semibold transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-3">
//                       <span>View Project</span>
//                       <svg
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         />
//                       </svg>
//                     </button>
//                   </div>

//                   {/* Content Overlay - Bottom with ENHANCED GRADIENT */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
//                     {/* Additional gradient overlay specifically for text area */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent -m-8 pointer-events-none"></div>

//                     <div className="relative z-10">
//                       {/* Project Number Badge */}
//                       <div className="inline-block bg-orange-500/90 backdrop-blur-sm rounded-lg px-3 py-1 mb-3">
//                         <p className="text-white text-xs font-bold tracking-wider">
//                           PROJECT #{project.id}
//                         </p>
//                       </div>

//                       {/* Project Title */}
//                       <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
//                         {project.title}
//                       </h3>

//                       {/* Description */}
//                       <p className="text-gray-200 text-sm md:text-base mb-3 line-clamp-2 drop-shadow-md">
//                         {project.description}
//                       </p>

//                       {/* Tech Stack */}
//                       <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm font-medium">
//                         <svg
//                           className="w-4 h-4"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
//                         </svg>
//                         <span>{project.tech}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Corner Decorative Element */}
//                   <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-100 transition-opacity">
//                     <div className="w-16 h-16 border-t-2 border-r-2 border-orange-500/40 rounded-tr-3xl"></div>
//                   </div>

//                   {/* Large Number Watermark */}
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
//                     <span className="text-white/5 text-[180px] md:text-[240px] font-black select-none leading-none">
//                       {project.id}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Enhanced Fade Gradients - Darker */}
//           <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black via-black to-transparent pointer-events-none z-20"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black via-black to-transparent pointer-events-none z-20"></div>
//         </div>

//         {/* Scroll Indicator Dots */}
//         <div className="flex justify-center mt-8 gap-3">
//           {projects.map((_, index) => (
//             <div
//               key={index}
//               className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
//                 index === activeIndex
//                   ? "w-8 bg-orange-500"
//                   : "w-2 bg-white/20 hover:bg-white/40"
//               }`}
//               onClick={() => {
//                 setActiveIndex(index);
//                 centerCard(index);
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom fade effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
//     </section>
//   );
// };

// export default Works;

import React, { useEffect, useRef, useState } from "react";
import Airnav from "@/assets/Airnav.png";
import Airnav2 from "@/assets/Airnav2.png";
import Groperti from "@/assets/Groperti.png";
import Mason from "@/assets/Mason.png";
import Thesis from "@/assets/Thesis.png";
import Digishop from "@/assets/Digishop.png";
import Caffeinline from "@/assets/Caffein-line.png";

// ── Individual Row ──────────────────────────────────────────────────────
const ProjectRow = ({ project, index }) => {
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
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{
        position: "sticky",
        top: `${56 + index * 22}px`,
        zIndex: index + 1,
        marginBottom: "2px",
      }}
    >
      {/* Card */}
      <div
        className="overflow-hidden border-t border-amber-900/20 rounded-t-2xl"
        style={{
          backgroundColor: `hsl(15, ${7 - index * 0.6}%, ${7 + index * 0.5}%)`,
          boxShadow: "0 -12px 60px rgba(0,0,0,0.7)",
        }}
      >
        {/* ── Top bar: number / title / btn ── */}
        <div className="flex items-center justify-between px-8 md:px-12 pt-6 pb-5 border-b border-white/[0.05]">
          <div className="flex items-center gap-5">
            {/* Number */}
            <span className="font-serif text-5xl md:text-6xl font-black leading-none bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent select-none">
              {project.id}
            </span>
            {/* Title + subtitle */}
            <div>
              <p className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-stone-100 leading-tight tracking-tight">
                {project.title}
              </p>
              <p className="text-[11px] uppercase tracking-[3px] text-amber-600/55 mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-white/20 tracking-wider hidden lg:block">
              {project.tech}
            </span>
            <a
              href={project.link}
              className="px-5 py-2.5 rounded-full border border-amber-800/35 text-amber-400/65 text-[11px] font-medium tracking-[1.5px] uppercase hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 whitespace-nowrap"
            >
              Live Project
            </a>
          </div>
        </div>

        {/* ── Content: 2 equal images + description ── */}
        <div className="flex items-center gap-5 px-8 md:px-12 py-6">
          {/* Image 1 */}
          <div
            className={`flex-1 aspect-[16/9] rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.25s" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Image 2 */}
          <div
            className={`flex-1 aspect-[16/9] rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.38s" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              style={{
                filter: "hue-rotate(15deg) brightness(0.78) saturate(0.85)",
              }}
            />
          </div>

          {/* Description */}
          <div
            className={`w-56 lg:w-64 flex-none flex flex-col justify-center pl-2 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <p className="text-sm text-white/35 leading-relaxed font-light mb-4">
              {project.description}
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-orange-500 to-transparent mb-3" />
            <span className="font-serif text-sm italic text-amber-600/50">
              {project.tech}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Section ────────────────────────────────────────────────────────
const Works = () => {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const projects = [
    {
      id: "1",
      title: "Airnav",
      subtitle: "Perum LPPNPI",
      description:
        "Managing corporate events for organizers and participants Collaborated",
      image: Airnav,
      Airnav2,
      tech: "NuxtJS • Typscript • TailwindCSS",
      link: "#",
    },
    {
      id: "2",
      title: "Groperti",
      subtitle: "Real Estate Platform",
      description:
        "Modern property search with interactive maps and advanced filtering for seamless browsing.",
      image: Groperti,
      tech: "Figma • UI/UX",
      link: "#",
    },
    {
      id: "3",
      title: "Mason Cafe",
      subtitle: "Restaurant Website",
      description:
        "Beautiful cafe landing page with smooth animations, menu showcase, and online reservation.",
      image: Mason,
      tech: "ReactJs • TailwindCSS",
      link: "#",
    },
    {
      id: "4",
      title: "Thesis",
      subtitle: "Academic Platform",
      description:
        "Research and thesis management system for university students and faculty members.",
      image: Thesis,
      tech: "ReactJs • CSS",
      link: "#",
    },
    {
      id: "5",
      title: "Digishop",
      subtitle: "E-Commerce",
      description:
        "Full-featured online shopping platform with seamless payment integration and real-time inventory.",
      image: Digishop,
      tech: "Javascript •  HTML • CSS",
      link: "#",
    },
    {
      id: "6",
      title: "Caffein Line",
      subtitle: "Coffee Brand",
      description:
        "Brand identity and e-commerce experience crafted for a specialty coffee roastery.",
      image: Caffeinline,
      tech: "JavaScript •  HTML • CSS",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden pb-36">
      {/* ── Background — matching Hero ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-stone-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(120,53,15,0.15),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-950/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-950/8 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* ── Full-width container ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16">
        {/* ── Centered Header ── */}
        <div ref={headerRef} className="text-center pt-24 pb-16">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-amber-400 text-sm md:text-base uppercase tracking-widest mb-4 animate-fadeInUp">
              Featured Projects
            </p>
            <h2
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600">
                MY
              </span>{" "}
              <span className="text-white">Works</span>
            </h2>

            {/* Decorative divider */}
            <div
              className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
                headerVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "0.28s" }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/50" />
            </div>

            <p
              className={`text-gray-400 text-sm md:text-base font-light max-w-md mx-auto leading-relaxed transition-all duration-700 ${
                headerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.35s" }}
            >
              Explore my collection of web applications, design systems, and
              digital experiences.
            </p>
          </div>
        </div>
        {/* ── Stacked cards ── */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>

        {/* ── CTA ── */}
        <ViewAllCTA />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
};

// ── View All Button ─────────────────────────────────────────────────────
const ViewAllCTA = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex justify-center mt-20 transition-all duration-700 ${
        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "0.2s" }}
    >
      <button className="group px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-600/40 transition-all duration-300 hover:scale-105 flex items-center gap-3">
        <span>View All Projects</span>
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Works;
