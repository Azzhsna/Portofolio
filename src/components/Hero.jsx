import React from "react";
import porto from "@/assets/porto.png";

const Hero = () => {
  const scrollToWorks = () => {
    const element = document.getElementById("works");

    if (element) {
      const yOffset = -80; // tinggi navbar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Darker Multi-layer Gradient Background - Black, Red, Brown */}
      <div className="absolute inset-0">
        {/* Base gradient layer - very dark with black, red, brown */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-stone-950/90"></div>

        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>

        {/* Subtle radial gradients for warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(120,53,15,0.15),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(87,33,15,0.15),rgba(0,0,0,0))]"></div>
      </div>

      {/* Soft animated glows - Brown/Warm tones */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-950/12 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-950/10 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* HUGE "Portfolio" Text Background - Higher position */}
      <div className="absolute top-0 left-0 right-0 flex items-start justify-center pt-16 md:pt-20 lg:pt-20 overflow-hidden pointer-events-none">
        <h1 className="font-serif text-[12vw] md:text-[14vw] lg:text-[16vw] font-black text-stone-900/60 leading-none tracking-tight select-none whitespace-nowrap">
          Portofolio
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Center Content - Image Focus */}
            <div className="relative flex flex-col items-center justify-center min-h-screen py-16">
              {/* Top Left Text Labels */}
              <div className="absolute top-20 left-0 md:left-12 lg:left-20 space-y-2 animate-fadeInUp z-20">
                <p className="text-amber-400 text-sm md:text-base font-bold tracking-widest uppercase">
                  FrontEnd
                </p>
                <p className="text-amber-400 text-sm md:text-base font-bold tracking-widest uppercase">
                  UIUX
                </p>
                <p className="text-amber-400 text-sm md:text-base font-bold tracking-widest uppercase">
                  WEB
                </p>
              </div>

              {/* Top Right Name/Title */}
              <div
                className="absolute top-20 right-0 md:right-12 lg:right-20 text-right animate-fadeInUp z-20"
                style={{ animationDelay: "0.2s" }}
              >
                {/* <p className="text-white/60 text-xs md:text-sm tracking-wider uppercase">
                  Azzah
                </p>
                <p className="text-white/40 text-xs md:text-sm">Husna Almy</p> */}
              </div>

              {/* Main Title - Right Side with Playfair Display */}
              <div
                className="absolute top-1/3 right-6 md:right-12 lg:right-20 text-right animate-fadeInUp z-20"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 leading-none tracking-tight">
                  Web
                  <br />
                  Developer
                </h2>
              </div>

              {/* Center Image - LARGER to cover Portfolio text */}
              <div className="relative w-full max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] h-[700px] md:h-[850px] lg:h-[750px] flex items-center justify-center -mt-20">
                {/* Soft BROWN/WARM glow effect behind image - Smooth and subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/35 via-stone-900/15 to-transparent blur-[140px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,53,15,0.25),transparent_75%)] blur-[110px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-950/15 via-transparent to-stone-900/20 blur-[100px]"></div>

                {/* Image Container */}
                <div className="relative h-full w-full flex items-end justify-center">
                  <img
                    src={porto}
                    alt="Designer Portfolio"
                    className="w-full h-auto max-h-full object-contain relative z-10 drop-shadow-2xl animate-fadeInUp"
                    style={{
                      filter: "drop-shadow(0 0 25px rgba(120, 53, 15, 0.35))",
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.95) 88%, rgba(0,0,0,0.4) 96%, rgba(0,0,0,0) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.95) 88%, rgba(0,0,0,0.4) 96%, rgba(0,0,0,0) 100%)",
                      animationDelay: "0.4s",
                    }}
                  />
                </div>

                {/* Decorative Elements - Brown/Warm tones */}
                <div className="absolute -top-10 -left-10 w-24 h-24 border-2 border-amber-800/20 rounded-full animate-spin-slow hidden lg:block"></div>
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 border-2 border-orange-900/15 rounded-full animate-spin-slow hidden lg:block"
                  style={{ animationDelay: "1s", animationDuration: "15s" }}
                ></div>

                {/* Floating particles - Warm/Brown tones */}
                <div className="absolute top-1/4 -right-10 w-3 h-3 rounded-full bg-amber-600/70 animate-float shadow-lg shadow-amber-600/30"></div>
                <div
                  className="absolute top-1/2 -left-10 w-2 h-2 rounded-full bg-orange-700/70 animate-float shadow-lg shadow-orange-700/30"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                  className="absolute bottom-1/3 right-10 w-2 h-2 rounded-full bg-yellow-700/70 animate-float shadow-lg shadow-yellow-700/30"
                  style={{ animationDelay: "2.5s" }}
                ></div>
              </div>

              {/* Bottom Left Info - VISIBLE, not covered */}
              <div
                className="absolute bottom-24 left-6 md:left-12 lg:left-20 animate-fadeInUp z-30"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-white/60 text-xs md:text-sm tracking-wider uppercase mb-2">
                  Portfolio
                </p>
                <p className="text-white/80 text-sm md:text-base max-w-xs">
                  Azzah Husna Almy
                </p>
              </div>

              {/* Bottom Right CTA - VISIBLE, not covered */}
              <div
                className="absolute bottom-20 right-6 md:right-12 lg:right-20 animate-fadeInUp z-30"
                style={{ animationDelay: "0.6s" }}
              >
                <button
                  onClick={scrollToWorks}
                  className="group px-8 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-600/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>View Projects</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>
        </div>
      </div>

      {/* Smooth bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-22 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest">SCROLL</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
