import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data/projects";
import { useTranslation } from "react-i18next";

// ── Project Card ─────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

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
      onClick={() => navigate(`/project/${project.slug}`)}
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
        {/* Card Image - ONLY ONE NOW */}
        <div className="h-64 overflow-hidden relative">
          <img
            src={project.images[0]}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
              {typeof project.subtitle === 'object' ? project.subtitle[currentLang] || project.subtitle.en : project.subtitle}
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
            {typeof project.desc === 'object' ? project.desc[currentLang] || project.desc.en : project.desc}
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
            <span
              className="text-[9px] uppercase tracking-[1.5px] px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer"
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
              {t("works.view_project")}
            </span>
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
  const { t } = useTranslation();

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
        {t("works.badge")}
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
          {t("works.title")}
        </span>{" "}
        <span className="text-white">{t("works.subtitle")}</span>
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
        className="text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed"
        style={{
          color: "rgba(255,255,255,0.5)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s",
        }}
      >
        {t("works.description")}
      </p>
    </div>
  );
};

// ── Main Works Section ───────────────────────────────────────────────────
const Works = () => {
  return (
    <section
      id="works"
      className="relative w-full overflow-hidden pb-36 scroll-mt-24"
      style={{ background: "#000000" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient: black → brown → burgundy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #000000 0%, #0d0805 15%, #1c1209 35%, #2a1507 55%, #1c1209 75%, #120a08 85%, #220808 92%, #0a0303 97%, #000000 100%)",
          }}
        />
        {/* Radial warmth overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(60,30,10,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 75% 80%, rgba(80,20,35,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Vertical vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,6,4,0.6) 0%, transparent 25%, transparent 75%, rgba(10,6,4,0.8) 100%)",
          }}
        />
        {/* Horizontal vignette - Darker sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            opacity: 0.5,
          }}
        />
        {/* Decorative glow orbs */}
        <div
          className="absolute rounded-full"
          style={{
            top: "-10%",
            right: "-5%",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(60,30,10,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "10%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(60,30,10,0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(60,30,10,0.08) 0%, transparent 60%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16">
        <WorksHeader />

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, #000000, rgba(0,0,0,0.8) 50%, transparent)",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, #000000, transparent)",
        }}
      />
    </section>
  );
};

export default Works;
