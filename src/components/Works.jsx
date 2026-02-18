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
    <section
      id="works"
      className="relative w-full bg-black overflow-hidden pb-36 scroll-mt-24"
    >
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
      {/* <button className="group px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-600/40 transition-all duration-300 hover:scale-105 flex items-center gap-3">
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
      </button> */}
    </div>
  );
};

export default Works;
