import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t("experience.items", { returnObjects: true });

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32"
    >
      {/* Background with color in the middle */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #0d0805 15%, #1c1209 40%, #2a1507 60%, #1c1209 80%, #0d0805 90%, #000000 100%)"
          }}
        ></div>
        {/* Subtle maroon glow in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,8,8,0.3)_0%,transparent_70%)]"></div>
        {/* Radial warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(60,30,10,0.15),transparent)]"></div>
        {/* Horizontal vignette - Darker sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* Top fade to smooth transition from About */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-20"></div>

      {/* Soft animated glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-950/20 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-950/15 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-950/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8">

          {/* Left Column - Header & Illustration */}
          <div className="lg:w-5/12 flex flex-col">
            <div className="lg:sticky lg:top-32 pt-4">
              <div className="text-left mb-12">
                <p className="text-amber-400 text-sm md:text-base uppercase tracking-widest mb-4 font-semibold animate-fadeInUp">
                  {t("experience.badge")}
                </p>
                <h2
                  className="font-serif text-5xl md:text-7xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 mb-6 animate-fadeInUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  {t("experience.title")}
                </h2>
                <p
                  className="text-gray-400 text-base md:text-lg max-w-md animate-fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  {t("experience.description")}
                </p>
              </div>

              {/* The 3D Glassmorphism Illustration */}
              <div className="hidden lg:block mt-16 relative perspective-1000 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                <div className="relative w-full max-w-sm mx-auto animate-[float_6s_ease-in-out_infinite]">
                  {/* Glowing Aura Behind */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-600/20 blur-[60px] rounded-full scale-110"></div>

                  {/* Main Glass Panel (Code Window) */}
                  <div className="relative w-full h-64 bg-stone-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                    <div className="flex gap-2 mb-6">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-3 bg-gradient-to-r from-amber-500/80 to-transparent rounded w-3/4"></div>
                      <div className="h-3 bg-gradient-to-r from-orange-500/60 to-transparent rounded w-1/2"></div>
                      <div className="h-3 bg-gradient-to-r from-red-500/40 to-transparent rounded w-5/6"></div>
                      <div className="h-3 bg-transparent rounded w-full"></div>
                      <div className="h-3 bg-gradient-to-r from-amber-500/60 to-transparent rounded w-2/3"></div>
                    </div>
                  </div>

                  {/* Floating Tech Elements */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-stone-800 to-stone-900 border border-amber-500/30 rounded-xl transform rotate-12 blur-[0.5px] animate-[bounce_8s_infinite] shadow-[0_10px_30px_rgba(245,158,11,0.3)] flex items-center justify-center text-3xl z-20">
                    🚀
                  </div>
                  <div className="absolute -bottom-8 -left-6 w-24 h-24 bg-gradient-to-br from-stone-800 to-stone-900 border border-orange-500/30 rounded-full transform -rotate-12 blur-[0.5px] animate-[spin_12s_linear_infinite] shadow-[0_10px_30px_rgba(239,68,68,0.3)] flex items-center justify-center text-4xl z-20">
                    💡
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline Cards */}
          <div className="lg:w-7/12 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 md:left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-amber-600/10 via-orange-500/30 to-transparent rounded-full hidden sm:block"></div>

            <div className="space-y-10">
              {experiences && experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-0 sm:pl-24 md:pl-28 animate-fadeInUp group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Timeline Dot (Hidden on very small screens) */}
                  <div className="hidden sm:flex absolute top-10 left-3 md:left-7 w-6 h-6 rounded-full bg-stone-950 border-4 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)] z-10 items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-200 animate-pulse"></div>
                  </div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-stone-900/60 to-stone-950/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-orange-900/20 group-hover:-translate-y-1">

                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 border-b border-white/5 pb-5">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            {/* <span className="text-3xl drop-shadow-md">{exp.icon || "✨"}</span> */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300">
                              {exp.role}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-amber-500 ml-1">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg font-semibold">{exp.company}</span>
                          </div>
                        </div>

                        {/* Period Badge */}
                        <div className="inline-block mt-2 md:mt-0">
                          <span className="px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium tracking-wide shadow-inner whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Location & Type */}
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-5 ml-1">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>{exp.location}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-700"></div>
                        <div className="flex items-center gap-1.5 text-orange-400/90 font-medium tracking-wide">
                          <span>{exp.type}</span>
                        </div>
                      </div>

                      {/* Interactive Bullet Point Description */}
                      <ul className="space-y-3 ml-1">
                        {exp.desc && exp.desc.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-base leading-relaxed group/item hover:text-white transition-colors duration-300">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500/60 flex-shrink-0 group-hover/item:scale-150 group-hover/item:bg-amber-400 transition-all duration-300"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20"></div>

      {/* Additional CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Experience;
