import React from "react";
import porto from "@/assets/porto.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Seamless Background - no banding */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        {/* Single layered radial system - semua fade ke transparent, bukan ke warna lain */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 130% 90% at 50% 55%, rgba(85,32,7,0.42) 0%, rgba(35,10,1,0.22) 40%, rgba(5,1,0,0.08) 65%, transparent 82%),
              radial-gradient(ellipse 70% 55% at 28% 25%, rgba(100,40,10,0.1) 0%, transparent 58%),
              radial-gradient(ellipse 65% 50% at 72% 75%, rgba(110,44,10,0.09) 0%, transparent 55%)
            `,
          }}
        ></div>
        {/* Very subtle animated pulses */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: "radial-gradient(circle at 30% 20%, rgba(110,45,15,0.06) 0%, transparent 52%)",
            animationDuration: "4s",
          }}
        ></div>
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: "radial-gradient(circle at 70% 78%, rgba(140,55,15,0.06) 0%, transparent 50%)",
            animationDelay: "2s",
            animationDuration: "4s",
          }}
        ></div>
      </div>

      {/* HUGE "Portfolio" Text Background */}
      <div className="absolute top-0 left-0 right-0 flex items-start justify-center pt-10 md:pt-10 lg:pt-20 overflow-hidden pointer-events-none">
        <h1 className="font-serif text-[18vw] sm:text-[15vw] md:text-[14vw] lg:text-[16vw] font-black text-stone-900/60 leading-none tracking-tight select-none whitespace-nowrap">
          {t("hero.title")}
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative flex flex-col items-left justify-center min-h-screen py-16">
              {/* Top Left Tags */}
              <div className="space-y-1 animate-fadeInUp">
                {["FrontEnd", "UIUX", "WEB"].map((tag) => (
                  <p key={tag} className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
                    {tag}
                  </p>
                ))}
              </div>

              {/* Main Title - Right */}
              <div
                className="absolute top-1/3 right-6 md:right-12 lg:right-15 text-right animate-fadeInUp z-20"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl  lg:pt-7 xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 leading-none tracking-tight">
                   {t("hero.role").split(' ')[0]}
                  <br />
                   {t("hero.role").split(' ').slice(1).join(' ')}
                </h2>
              </div>

              {/* Center Image - LEBIH BESAR */}
              <div className="relative w-full max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] mx-auto h-[700px] md:h-[950px] lg:h-[700px] flex items-center justify-center -mt-20">
                {/* Glow behind image - smooth, no hard edges */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(ellipse 70% 60% at 50% 70%, rgba(120,53,15,0.22) 0%, transparent 72%),
                      radial-gradient(ellipse 50% 40% at 50% 80%, rgba(90,35,8,0.18) 0%, transparent 65%)
                    `,
                    filter: "blur(30px)",
                  }}
                ></div>

                {/* Image */}
                <div className="relative h-full w-full flex items-end justify-center">
                  <img
                    src={porto}
                    alt="Designer Portfolio"
                    className="w-full h-auto sm:w-[68vw] md:w-[62vw] lg:w-[56vw] xl:w-[48vw] max-h-[100vh] object-contain relative z-10 drop-shadow-2xl animate-fadeInUp"
                    style={{
                      filter: "drop-shadow(0 0 30px rgba(120, 53, 15, 0.4))",
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0.9) 85%, rgba(0,0,0,0.3) 95%, rgba(0,0,0,0) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0.9) 85%, rgba(0,0,0,0.3) 95%, rgba(0,0,0,0) 100%)",
                      animationDelay: "0.4s",
                    }}
                  />
                </div>

                {/* Decorative rings */}
                <div className="absolute -top-10 -left-10 w-24 h-24 border-2 border-amber-800/20 rounded-full animate-spin-slow hidden lg:block"></div>
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 border-2 border-orange-900/15 rounded-full animate-spin-slow hidden lg:block"
                  style={{ animationDelay: "1s", animationDuration: "15s" }}
                ></div>

                {/* Floating particles */}
                <div className="absolute top-1/4 -right-10 w-3 h-3 rounded-full bg-amber-600/70 animate-float shadow-lg shadow-amber-600/30"></div>
                <div className="absolute top-1/2 -left-10 w-2 h-2 rounded-full bg-orange-700/70 animate-float shadow-lg shadow-orange-700/30" style={{ animationDelay: "1.5s" }}></div>
                <div className="absolute bottom-1/3 right-10 w-2 h-2 rounded-full bg-yellow-700/70 animate-float shadow-lg shadow-yellow-700/30" style={{ animationDelay: "2.5s" }}></div>
              </div>

              {/* Bottom Left Info */}
              <div className="absolute bottom-36 md:bottom-44  md:left-10 lg:left-5 animate-fadeInUp z-30" style={{ animationDelay: "0.5s" }}>
                <p className="text-white/60 text-xs md:text-sm tracking-wider uppercase mb-2">Portfolio</p>
                <p className="text-white/80 text-sm md:text-base max-w-xs">Azzah Husna Almy</p>
              </div>

              {/* Bottom Right CTA */}
              <div className="absolute bottom-32 md:bottom-40 right-6 md:right-12 lg:right-15 animate-fadeInUp z-30" style={{ animationDelay: "0.6s" }}>
                <button
                  onClick={scrollToWorks}
                  className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-orange-600/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>{t("hero.view_projects")}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest">{t("hero.scroll")}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;