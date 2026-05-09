import React from "react";
import sertifFrontend from "../assets/sertif_frontend.png";
import mySkillSertif from "../assets/MySkill.png";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      image: sertifFrontend,
      title: t("certificate.featured_title"),
      subtitle: t("certificate.featured_subtitle"),
      topic: "Frontend Web Development",
      link: "https://www.freecodecamp.org/certification/azzhsn_/front-end-development-libraries",
    },
    {
      image: mySkillSertif,
      title: t("certificate.cert2_title"),
      subtitle: t("certificate.cert2_subtitle"),
      topic: "UI/UX Design Fundamental",
      link: "https://drive.google.com/file/d/1EgIsm_8s_1G8DXKk2l8C-fS-27v-xAHP/view",
    },
  ];

  return (
    <section
      id="certificate"
      className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32 flex items-center"
    >
      {/* Background Layer - Identical to other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-stone-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>

        {/* Top fade to smooth transition from Works */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-20"></div>

        {/* Huge Background Text */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center opacity-10 select-none">
          <h2 className="font-serif text-[18vw] font-black text-amber-900/40 leading-none tracking-tighter uppercase">
            {t("certificate.bg_text")}
          </h2>
        </div>

        {/* Animated Glows */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-950/10 rounded-full blur-[130px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-amber-500/5 rounded-full animate-[spin_30s_linear_infinite] opacity-20"></div>
        <div className="absolute top-[20%] right-[15%] opacity-20 animate-float">
          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16 text-amber-500 fill-current"
          >
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3L19,6.11V11C19,15.33 16.01,19.43 12,20.93C7.99,19.43 5,15.33 5,11V6.11L12,3M12,7A3,3 0 0,0 9,10A3,3 0 0,0 12,13A3,3 0 0,0 15,10A3,3 0 0,0 12,7M12,9A1,1 0 0,1 13,10A1,1 0 0,1 12,11A1,1 0 0,1 11,10A1,1 0 0,1 12,9Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
                {t("certificate.badge")}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600">
                {t("certificate.title")}
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-600 via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("certificate.description")}
            </p>
          </div>

          {/* Certificate Display Area - Grid for items */}
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {certificates.map((cert, index) => (
              <div key={index} className="group relative">
                {/* Decorative Outer Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative h-full flex flex-col bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:translate-y-[-8px] group-hover:border-amber-500/20 group-hover:shadow-orange-900/20">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-72 overflow-hidden bg-stone-950/50">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-6 transform transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col">
                    {/* Top Badge */}
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-[2px] font-bold">
                        {cert.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {cert.title}
                    </h3>

                    {/* Topic Info */}
                    <div className="flex items-center gap-3 mb-8 py-3 border-y border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-500/60">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                          {t("certificate.topic")}
                        </p>
                        <p className="text-stone-300 text-sm font-medium">
                          {cert.topic}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 group/btn text-xs uppercase tracking-widest"
                        >
                          {t("certificate.view_credential")}
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 fill-current group-hover/btn:translate-x-1 transition-transform"
                          >
                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                          </svg>
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 text-stone-500 font-bold rounded-xl text-xs uppercase tracking-widest italic">
                          <span className="w-2 h-2 rounded-full bg-stone-700"></span>
                          {t("certificate.verified")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reusable styles from Skill.jsx */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
      `}</style>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

export default Certificate;
