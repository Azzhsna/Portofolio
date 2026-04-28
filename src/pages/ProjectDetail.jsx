import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectData } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const project = projectData.find((p) => p.slug === slug);
  const currentLang = i18n.language || 'en';
  
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/#works");
  };

  const nextImage = useCallback(() => {
    if (project) {
      setSelectedIndex((prev) => (prev + 1) % project.images.length);
    }
  }, [project]);

  const prevImage = useCallback(() => {
    if (project) {
      setSelectedIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  if (!project) {
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-6" style={{ background: "#000000" }}>
        <h1 className="font-serif text-4xl mb-4">{t("project_detail.not_found")}</h1>
        <Link to="/" className="text-amber-500 hover:underline">{t("project_detail.back_to_home")}</Link>
      </div>
    );
  }

  // Helper for translated fields
  const getField = (field) => {
    if (typeof field === 'object' && field !== null) {
      return field[currentLang] || field.en;
    }
    return field;
  };

  return (
    <div className="min-h-screen text-stone-200 selection:bg-amber-900/40 overflow-x-hidden font-sans" style={{ background: "#000000" }}>
      {/* ── Rich Background Layers ── */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Base gradient: black → brown → dark maroon → black */}
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
              "radial-gradient(ellipse 70% 50% at 75% 80%, rgba(60,30,10,0.2) 0%, transparent 70%)",
          }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            opacity: 0.5,
          }}
        />
        {/* Horizontal vignette - Darker sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
      </div>
      
      {/* Simple Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center bg-gradient-to-b from-[#000000] to-transparent">
        <button 
          onClick={handleBack}
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[4px] font-bold text-amber-500/80 hover:text-amber-500 transition-all px-4 py-2 rounded-full border border-amber-500/10 bg-black/20 backdrop-blur-md"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
             <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t("project_detail.back")}
        </button>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* Title Section */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-amber-500/30"></div>
             <span className="text-[10px] uppercase tracking-[5px] text-amber-500/70 font-semibold">{getField(project.subtitle)}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            {project.title}
          </h1>
        </header>

        {/* Hero Image - Not full screen, prominent */}
        <div 
          className="relative group cursor-zoom-in mb-24 rounded-3xl overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/10 bg-stone-900"
          onClick={() => setSelectedIndex(0)}
        >
           <img 
             src={project.images[0]} 
             className="w-full h-auto object-cover max-h-[70vh] transition-transform duration-700 group-hover:scale-[1.03]" 
             alt={project.title} 
           />
           {/* Zoom Overlay */}
           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-4 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                 </svg>
              </div>
           </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Left info */}
          <div className="lg:col-span-12">
             <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between border-b border-white/5 pb-12 mb-12">
                <div>
                   <h3 className="text-[10px] uppercase tracking-[4px] text-stone-500 font-bold mb-2">{t("project_detail.category")}</h3>
                   <p className="text-lg font-serif italic text-amber-400">{getField(project.subtitle)}</p>
                </div>
                <div>
                   <h3 className="text-[10px] uppercase tracking-[4px] text-stone-500 font-bold mb-2">{t("project_detail.technologies")}</h3>
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-300">{t}</span>
                      ))}
                   </div>
                </div>
                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-amber-600 text-black text-[10px] uppercase tracking-[2px] font-black hover:bg-amber-500 transition-all">
                      {t("project_detail.live_preview")}
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/10 text-white text-[10px] uppercase tracking-[2px] font-black hover:bg-white/5 transition-all">
                      {t("project_detail.github")}
                    </a>
                  )}
                </div>
             </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-7">
             <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">{t("project_detail.about_project")}</h3>
             <p className="text-stone-400 text-lg leading-relaxed font-light whitespace-pre-line">
               {getField(project.longDesc)}
             </p>
          </div>

          {/* Features */}
          <div className="lg:col-span-5">
             <h3 className="text-[10px] uppercase tracking-[5px] text-amber-500 font-bold mb-8">{t("project_detail.role_contribution")}</h3>
             <ul className="space-y-4">
                {getField(project.features).map((f, i) => (
                   <li key={i} className="flex gap-4 items-start text-stone-300 text-sm">
                    <span className="text-amber-500 mt-1">✦</span>
                    {f}
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-12">
           <h3 className="font-serif text-3xl text-white text-center mb-12 italic">{t("project_detail.visual_overview")}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {project.images.map((img, i) => (
                <div 
                  key={i} 
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border border-white/5 shadow-xl transition-all duration-700 hover:scale-[1.02]"
                  onClick={() => setSelectedIndex(i)}
                >
                   <img src={img} className="w-full h-auto" alt={`Gallery ${i}`} />
                   {/* Overlay with Zoom Icon */}
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" cy="8" x2="11" y2="14"></line>
                            <line x1="8" cy="11" x2="14" y2="11"></line>
                         </svg>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Footer simple */}
        <footer className="mt-40 pt-20 border-t border-white/5 flex flex-col items-center gap-8">
           <div className="text-center font-serif text-2xl italic text-stone-500 opacity-50">
             {t("project_detail.thank_you")}
           </div>
           <button 
             onClick={handleBack}
             className="px-10 py-4 rounded-full border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-[5px] font-black hover:bg-amber-500 hover:text-black transition-all"
           >
             {t("project_detail.back_to_gallery")}
           </button>
        </footer>
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-500 animate-in fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[1001]"
            onClick={() => setSelectedIndex(null)}
          >
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          {/* Navigation Prev */}
          <button 
            className="absolute left-4 md:left-8 p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/70 hover:text-white z-[1001]"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Image Container */}
          <div 
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-6 animate-in zoom-in duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
             <img 
               src={project.images[selectedIndex]} 
               className="w-full h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5" 
               alt="Preview" 
             />
             <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-stone-400 text-[10px] uppercase tracking-[3px] font-bold">
                {selectedIndex + 1} / {project.images.length}
             </div>
          </div>

          {/* Navigation Next */}
          <button 
            className="absolute right-4 md:right-8 p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/70 hover:text-white z-[1001]"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      )}

      {/* Decorative Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
         <div className="absolute rounded-full" style={{ top: "-10%", right: "-5%", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(60,30,10,0.15) 0%, transparent 70%)", filter: "blur(80px)" }} />
         <div className="absolute rounded-full" style={{ bottom: "10%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(60,30,10,0.12) 0%, transparent 70%)", filter: "blur(100px)" }} />
         <div className="absolute rounded-full" style={{ top: "40%", left: "50%", transform: "translateX(-50%)", width: "900px", height: "500px", background: "radial-gradient(ellipse, rgba(60,30,10,0.08) 0%, transparent 60%)", filter: "blur(120px)" }} />
      </div>

    </div>
  );
};

export default ProjectDetail;
