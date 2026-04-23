import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projectData } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("works");
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-6" style={{ background: "#000000" }}>
        <h1 className="font-serif text-4xl mb-4">Project Not Found</h1>
        <Link to="/" className="text-amber-500 hover:underline">Back to Home</Link>
      </div>
    );
  }

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
          Back
        </button>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* Title Section */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-amber-500/30"></div>
             <span className="text-[10px] uppercase tracking-[5px] text-amber-500/70 font-semibold">{project.subtitle}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            {project.title}
          </h1>
        </header>

        {/* Hero Image - Not full screen, prominent */}
        <div className="mb-24 rounded-3xl overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/10 bg-stone-900">
           <img 
             src={project.images[0]} 
             className="w-full h-auto object-cover max-h-[70vh]" 
             alt={project.title} 
           />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Left info */}
          <div className="lg:col-span-12">
             <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between border-b border-white/5 pb-12 mb-12">
                <div>
                   <h3 className="text-[10px] uppercase tracking-[4px] text-stone-500 font-bold mb-2">Category</h3>
                   <p className="text-lg font-serif italic text-amber-400">{project.subtitle}</p>
                </div>
                <div>
                   <h3 className="text-[10px] uppercase tracking-[4px] text-stone-500 font-bold mb-2">Technologies</h3>
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-300">{t}</span>
                      ))}
                   </div>
                </div>
                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-amber-600 text-black text-[10px] uppercase tracking-[2px] font-black hover:bg-amber-500 transition-all">
                      Live Preview
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/10 text-white text-[10px] uppercase tracking-[2px] font-black hover:bg-white/5 transition-all">
                      GitHub
                    </a>
                  )}
                </div>
             </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-7">
             <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">About the project</h3>
             <p className="text-stone-400 text-lg leading-relaxed font-light">
               {project.longDesc}
             </p>
          </div>

          {/* Features */}
          <div className="lg:col-span-5">
             <h3 className="text-[10px] uppercase tracking-[5px] text-amber-500 font-bold mb-8">Role & Contribution</h3>
             <ul className="space-y-4">
                {project.features.map((f, i) => (
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
           <h3 className="font-serif text-3xl text-white text-center mb-12 italic">Visual Overview</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {project.images.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/5 shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                   <img src={img} className="w-full h-auto" alt={`Gallery ${i}`} />
                </div>
              ))}
           </div>
        </div>

        {/* Footer simple */}
        <footer className="mt-40 pt-20 border-t border-white/5 flex flex-col items-center gap-8">
           <div className="text-center font-serif text-2xl italic text-stone-500 opacity-50">
             Thank you for exploring.
           </div>
           <button 
             onClick={handleBack}
             className="px-10 py-4 rounded-full border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-[5px] font-black hover:bg-amber-500 hover:text-black transition-all"
           >
             Back to Gallery
           </button>
        </footer>
      </main>

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
