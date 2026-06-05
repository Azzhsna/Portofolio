import React from "react";
import { useTranslation } from "react-i18next";

const Skill = () => {
  const { t } = useTranslation();
  const skills = [
    { name: "React.js", weight: 4, color: "text-amber-100" },
    { name: "Nest.Js", weight: 2, color: "text-orange-400" },
    { name: "Nuxt.js", weight: 4, color: "text-white" },
    { name: "UI/UX Design (Figma)", weight: 2, color: "text-orange-200" },
    { name: "Vue.Js", weight: 2, color: "text-amber-300" },
    { name: "REST API", weight: 2, color: "text-stone-400" },
    { name: "JavaScript", weight: 5, color: "text-white" },
    { name: "Redux", weight: 2, color: "text-amber-200" },
    { name: "GIT", weight: 3, color: "text-amber-400" },
    { name: "Deployment", weight: 1, color: "text-stone-400" },
    { name: "TypeScript", weight: 3, color: "text-amber-300" },
    { name: "HTML/CSS", weight: 2, color: "text-orange-300" },
    { name: "PHP", weight: 1, color: "text-stone-400" },
    { name: "Next.Js", weight: 4, color: "text-white" },
    { name: "Node.js", weight: 2, color: "text-orange-200" },
    { name: "Laravel", weight: 4, color: "text-amber-100" },
    { name: "docker", weight: 2, color: "text-orange-400" },
    { name: "Tailwind CSS", weight: 3, color: "text-orange-200" },
    { name: "PostgreSQL", weight: 3, color: "text-amber-400" },
    { name: "Bootstrap", weight: 1, color: "text-orange-300" },
    { name: "MySQL", weight: 2, color: "text-stone-400" },
    // { name: "Postman", weight: 2, color: "text-orange-400" },
    { name: "Swagger", weight: 3, color: "text-amber-400" },
  ];

  const getWeightClass = (weight) => {
    switch (weight) {
      case 5:
        return "text-4xl md:text-7xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]";
      case 4:
        return "text-3xl md:text-4xl font-bold tracking-tight";
      case 3:
        return "text-2xl md:text-3xl font-bold";
      case 2:
        return "text-lg md:text-xl font-medium";
      case 1:
        return "text-sm md:text-base font-medium opacity-60";
      default:
        return "text-base";
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32 flex items-center"
    >
      {/* Background Layer - Identical to Hero/Experience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-stone-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>

        {/* Huge Background Text */}
        {/* <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center opacity-10 select-none">
          <h2 className="font-serif text-[25vw] font-black text-amber-900/40 leading-none tracking-tighter uppercase">
            {t("skills.title")}
          </h2>
        </div> */}
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Icons from About.jsx style */}
        <div className="absolute left-[5%] top-1/4 opacity-20 animate-float">
          <svg
            viewBox="0 0 128 128"
            className="w-20 h-20 text-amber-500 fill-current drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          >
            <path d="M64 24.3c-15.4 0-25 10-28 25 15.4-15 25-10 28 5 3 15 12.6 25 28 25 15.4 0 25-10 28-25-15.4 15-25 10-28-5-3-15-12.6-25-28-25zm-28 48c-15.4 0-25 10-28 25 15.4-15 25-10 28 5 3 15 12.6 25 28 25 15.4 0 25-10 28-25-15.4 15-25 10-28-5-3-15-12.6-25-28-25z" />
          </svg>
        </div>
        <div className="absolute right-[5%] bottom-1/4 opacity-20 animate-float-reverse">
          <svg
            viewBox="-11.5 -10.23174 23 20.46348"
            className="w-28 h-28 text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]"
          >
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-6/12 text-center lg:text-left shrink-0 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
                {t("skills.badge")}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600">
                {t("skills.title")}
              </span>
              <br />
              <span className="text-white">{t("skills.subtitle")}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-transparent mb-8 mx-auto lg:mx-0"></div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
              {t("skills.description")}
            </p>
          </div>

          {/* Right Word Cloud Content */}
          <div className="w-full lg:w-7/12 flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center content-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-8 max-w-4xl leading-none">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`inline-block ${getWeightClass(skill.weight)} ${
                    skill.color
                  } hover:text-amber-400 hover:scale-110 transition-all duration-300 cursor-default select-none animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles for animations consistent with the project */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-15px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
      `}</style>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Skill;
