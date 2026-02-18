import { useEffect, useRef, useState } from "react";

const About = () => {
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
        className={`absolute left-0 top-1/4 transition-all duration-1000 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        {/* 3D Code Block Icon */}
        <div className="relative w-40 h-48 lg:w-64 -mt-20 lg:h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl rotate-12 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-blue-600/80 to-purple-600/80 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30 transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <svg
              className="w-full h-full text-white/90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </div>
        </div>

        {/* Terminal Icon */}
        <div className="relative w-40 h-40 lg:w-52 lg:h-52 mt-12 ml-8">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-red-500/30 rounded-3xl -rotate-12 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-pink-600/80 to-red-600/80 rounded-2xl p-6 backdrop-blur-sm border border-pink-400/30 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <svg
              className="w-full h-full text-white/90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8h16v9c0 .55-.45 1-1 1z" />
              <path d="M7 15h2v2H7zm4 0h6v2h-6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Decorative Assets - Slide in from right */}
      <div
        className={`absolute right-0 top-1/3 transition-all duration-1000 delay-200 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* React/Component Icon */}
        <div className="relative w-48 h-48 lg:w-64 -mt-10 lg:h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-3xl -rotate-12 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-cyan-600/80 to-teal-600/80 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400/30 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <svg
              className="w-full h-full text-white/90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.5 0l-.81-1.5c-.3-.53-.62-1-.91-1.47-.54-.03-1.11-.03-1.71-.03-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47l.81-1.5z" />
            </svg>
          </div>
        </div>

        {/* Rocket/Deploy Icon */}
        <div className="relative w-40 h-40 lg:w-52 lg:h-52 mt-3 mr-8">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-3xl rotate-12 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-orange-600/80 to-yellow-600/80 rounded-2xl p-6 backdrop-blur-sm border border-orange-400/30 transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <svg
              className="w-full h-full text-white/90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c0 .74.4 1.39 1 1.73V5h1v-.27c.6-.34 1-.99 1-1.73 0-.55-.22-1.05-.59-1.41C13.77 1.18 12.98 1 12 1s-1.77.18-2.41.59C9.22.95 9 1.45 9 2c0 .74.4 1.39 1 1.73V5h1v-.27c.6-.34 1-.99 1-1.73zM16.8 7.9l-.98.19c.18.44.32.9.42 1.37l.96-.28c-.12-.49-.27-.97-.4-1.28zM15.51 5.93l-.72.72c.38.34.72.73 1.01 1.16l.84-.54c-.34-.51-.75-.97-1.13-1.34zM11 7c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4c-1.65 0-3 1.35-3 3h2c0-.55.45-1 1-1s1 .45 1 1h2c0-1.65-1.35-3-3-3z" />
              <path d="M2.81 14.12l.96.28c.11-.47.25-.93.42-1.37l-.98-.19c-.13.31-.28.79-.4 1.28zm1.86-2.92l.84.54c.29-.43.63-.82 1.01-1.16l-.72-.72c-.38.37-.79.83-1.13 1.34zM17 16v5l3-2-3-3zm-7 2h2v3h-2v-3zm4 0h2v3h-2v-3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 w-full  md:px-12 lg:px-20 py-20">
        <div className=" font-serif max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-600 via-yellow-600 to-red-800 leading-none tracking-tight mb-7 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            About Me
          </h2>

          {/* Description */}
          <div
            className={`space-y-6 mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <p className="text-base md:text-xl text-gray-300 leading-relaxed ">
              Bachelor’s Degree in Computer Science from Bina Nusantara
              University (BINUS) with hands-on experience in full-stack
              development, front-end development, and UI/UX design gained
              through multiple internship roles.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Actively involved for two years in the Informatics Engineering
              Student Association, Creative and Design Division, contributing to
              design-driven and collaborative projects. Passionate about web
              development with a proven track record of building and deploying
              web applications.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Proficient in{" "}
              <span className="text-red-400">
                HTML, CSS, JavaScript, PHP, and modern frameworks and tools
                including React.js, Vue.js, Nuxt.js, TypeScript, and Tailwind
                CSS.
              </span>
              Known for strong problem-solving skills, adaptability, and the
              ability to work effectively both independently and in team
              environments, with a strong willingness to continuously learn and
              grow.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-black-600 to-orange-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">CONTACT ME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-black-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default About;
