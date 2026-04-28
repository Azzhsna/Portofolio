import React from "react";
import sertifFrontend from "../assets/sertif_frontend.png";
import { useTranslation } from "react-i18next";

const Certificate = () => {
    const { t } = useTranslation();
    return (
        <section
            id="certificate"
            className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32 flex items-center"
        >
            {/* Background Layer - Identical to other sections */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-stone-950/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>

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
                    <svg viewBox="0 0 24 24" className="w-16 h-16 text-amber-500 fill-current">
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
                        <h2 className="font-serif text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600">
                                {t("certificate.title")}
                            </span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-600 via-orange-500 to-transparent mx-auto mb-8"></div>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t("certificate.description")}
                        </p>
                    </div>

                    {/* Certificate Display Area */}
                    <div className="w-full max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                        <div className="group relative">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/50 to-orange-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="aspect-[16/11] overflow-hidden p-4 md:p-6">
                                    <img
                                        src={sertifFrontend}
                                        alt="Frontend Certificate"
                                        className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Caption / Details Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("certificate.featured_title")}</h3>
                                    <p className="text-amber-400 font-medium tracking-wide">{t("certificate.featured_subtitle")}</p>
                                </div>
                            </div>

                            {/* Badges/Details below the image for mobile/standard view */}
                            <div className="mt-3 pb-3 flex flex-wrap justify-center gap-4">
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                                    <span className="text-gray-400 text-[10px] uppercase tracking-wider block mb-0.5">{t("certificate.topic")}</span>
                                    <span className="text-white font-semibold text-sm">Frontend Web Development</span>
                                </div>

                                <a
                                    href="https://www.freecodecamp.org/certification/azzhsn_/front-end-development-libraries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-sm"
                                >
                                    {t("certificate.view_credential")}
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform">
                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
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
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Certificate;
