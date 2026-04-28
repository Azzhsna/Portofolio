import { useEffect, useRef, useState } from "react";
import { nodesToString, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-900/20 via-black to-red-900/20"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Left Decorative Assets - Slide in from left */}
      <div
        className={`absolute left-0 top-1/4 transition-all duration-1000 ${isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
          } hidden md:block z-0`}
      >
        {/* React Icon Floating */}
        <div className="relative w-32 h-32 lg:w-48 lg:h-48 -mt-20 ml-10 transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500">
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full text-[#61DAFB] animate-[spin_10s_linear_infinite]" style={{ filter: "drop-shadow(0px 0px 15px rgba(97,218,251,0.6))" }}>
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>

        {/* Nuxt Icon Floating */}
        <div className="relative w-28 h-28 lg:w-36 lg:h-36 mt-12 ml-20 transform -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500">
          <svg viewBox="0 0 128 128" className="w-full h-full object-contain animate-pulse" style={{ filter: "drop-shadow(0px 0px 15px rgba(0,220,130,0.6))" }}>
            <path fill="#00DC82" d="M37.3 103.5l-2-3-22-38.6A11.7 11.7 0 0113 56l16-27.4a11.5 11.5 0 0119.5-1.2l3 4.2 3.8-5a11.9 11.9 0 0119-1L91 46.8l1.3-1.6a11.7 11.7 0 0119.3-1L128 72v1.5a11.6 11.6 0 01-1.3 6h-23l-3 4-23.7 32a11.7 11.7 0 01-19.3 1L40 93l-2.6 10.6z" />
            <path fill="#FFF" d="M83.6 105.7L60 73.8l-15.5 21a5 5 0 01-8-6l20.4-28h2.3l27 36a5 5 0 11-8 5v-1.1zm24-8.8l17-24a5 5 0 00-8-6l-14 20h2zm-84 0l-12-21a5 5 0 018-5.3l9 16z" />
          </svg>
        </div>
      </div>

      {/* Right Decorative Assets - Slide in from right */}
      <div
        className={`absolute right-0 top-1/3 transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } hidden lg:block z-0`}
      >
        {/* Tailwind Icon Floating */}
        <div className="relative w-32 h-32 lg:w-48 lg:h-48 -mt-10 mr-10 transform -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 z-20">
          <svg viewBox="0 0 128 128" className="w-full h-full animate-[spin_10s_linear_infinite]" style={{ filter: "drop-shadow(0px 0px 15px rgba(56,189,248,0.6))" }}>
            <path fill="#38BDF8" d="M64 24.3c-15.4 0-25 10-28 25 15.4-15 25-10 28 5 3 15 12.6 25 28 25 15.4 0 25-10 28-25-15.4 15-25 10-28-5-3-15-12.6-25-28-25zm-28 48c-15.4 0-25 10-28 25 15.4-15 25-10 28 5 3 15 12.6 25 28 25 15.4 0 25-10 28-25-15.4 15-25 10-28-5-3-15-12.6-25-28-25z" />
          </svg>
        </div>

        {/* JS Icon Floating */}
        <div className="relative w-28 h-28 lg:w-36 lg:h-36 mt-6 mr-20 transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500">
          <svg viewBox="0 0 128 128" className="w-full h-full rounded-2xl animate-pulse" style={{ filter: "drop-shadow(0px 0px 15px rgba(234,179,8,0.6))" }}>
            <rect width="128" height="128" fill="#F7DF1E" rx="16" />
            <path d="M67.3 96.5c-3-3.2-5-7.7-5.8-12.5h11c.5 2.8 1.6 5.2 3.5 6.8 2 1.6 4.7 2.4 8 2.4 3.8 0 6.6-.8 8.6-2.5 2-1.6 3-4 3-7 0-2.3-.6-4.2-1.8-5.6-1.5-1.7-4.6-3.6-9.4-5.6-6-2.5-10.2-5.4-12.7-8.8-2.6-3.4-3.8-7.7-3.8-13 0-5.8 2-10.4 6-13.8 4-3.4 9.5-5 16.3-5 7 0 12.6 1.6 16.5 4.8 4 3 6.4 7.6 7 13.5h-11.2c-.4-3-1.6-5.2-3.6-6.6-2-1.3-4.8-2-8.5-2-3.3 0-6 .7-7.8 2-1.8 1.4-2.8 3.3-2.8 5.7 0 2 .5 3.6 1.4 4.8 1 1.2 3.8 2.8 8.4 4.7 7 2.8 12 6.2 14.8 9.8 2.8 3.7 4.2 8.4 4.2 14 0 6-2.4 11-7.2 14.5-4.8 3.6-11 5.4-18.7 5.4-8 0-14-1.8-18.4-5.2zm-28-.3c-3-3-5.2-7.6-6.2-13.7h11.2c.5 3 1.8 5.4 3.7 7.2 2 1.8 5 2.7 8.6 2.7 3.5 0 6-.8 7.5-2.2 1.4-1.4 2.2-3.3 2.2-5.5V43h11.8v39.4c0 6.6-2 11.5-6.2 15-4.2 3.5-9.8 5.3-17 5.3-7.5 0-13.2-2-17.5-6z" fill="#000" />
          </svg>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 w-full md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2
            className={`font-serif text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-600 via-yellow-600 to-red-800 leading-tight tracking-tight mb-8 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {t("about.greeting")} <br></br>
            {t("about.name")}
          </h2>

          {/* Description - Bulleted & Easy to read */}
          <div
            className={`space-y-6 mb-12 transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left max-w-5xl mx-auto px-4 z-30 relative">

              {/* Point 1: Education & Experience */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 relative group backdrop-blur-sm shadow-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <h3 className="font-serif text-xl font-bold text-amber-400 mb-2 flex items-center gap-3">
                    <span className="text-2xl drop-shadow-lg">🎓</span> {t("about.point1_title")}
                  </h3>
                  <p className="text-gray-300/90 text-sm md:text-base leading-relaxed">
                    {t("about.point1_desc")}
                  </p>
                </div>
              </div>

              {/* Point 2: Passion & Leadership */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 relative group backdrop-blur-sm shadow-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <h3 className="font-serif text-xl font-bold text-orange-400 mb-2 flex items-center gap-3">
                    <span className="text-2xl drop-shadow-lg">🎨</span> {t("about.point2_title")}
                  </h3>
                  <p className="text-gray-300/90 text-sm md:text-base leading-relaxed">
                    {t("about.point2_desc")}
                  </p>
                </div>
              </div>

              {/* Point 3: Tech Stack */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 relative group md:col-span-2 backdrop-blur-sm shadow-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <h3 className="font-serif text-xl font-bold text-red-400 mb-4 flex items-center gap-3 justify-start">
                    <span className="text-2xl drop-shadow-lg">💻</span> {t("about.point3_title")}
                  </h3>
                  <p className="text-gray-300/90 text-sm md:text-base leading-relaxed mb-5">
                    {t("about.point3_desc")}
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2.5">
                    {['React.js', 'Nuxt.js', 'Nest.Js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'PHP'].map((tech) => (
                      <span key={tech} className="px-4 py-1.5 bg-red-950/40 text-red-100 border border-red-500/30 rounded-full text-xs md:text-sm font-semibold tracking-wide hover:scale-105 transition-transform hover:bg-red-900/60 shadow-lg cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "0.7s" }}
          >
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/6281372769449?text=Hi%20Azzah,%20I%20saw%20your%20portfolio!",
                  "_blank"
                )
              }
              className="px-10 py-4 bg-gradient-to-r from-red-600 via-black-600 to-orange-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              {t("about.contact_me")}
            </button>
          </div>

          {/* Decorative Line */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-900"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-200 animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-900"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to ensure smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

export default About;
