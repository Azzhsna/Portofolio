import React, { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
      title: "React.js",
      description: "Building modern, interactive user interfaces",
      color: "from-cyan-600 to-blue-600",
      glow: "cyan",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2L2 7.73v8.54l10.04 5.73 10.04-5.73V7.73L12.04 2zm0 1.83l8.2 4.68-8.2 4.68-8.2-4.68 8.2-4.68zm-8.2 11.05l8.2 4.68v-9.36l-8.2-4.68v9.36zm16.4 0v-9.36l-8.2 4.68v9.36l8.2-4.68z" />
        </svg>
      ),
      title: "Nuxt.js",
      description: "Server-side rendering with Vue ecosystem",
      color: "from-green-600 to-emerald-600",
      glow: "emerald",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful experiences",
      color: "from-purple-600 to-pink-600",
      glow: "purple",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
        </svg>
      ),
      title: "Performance Optimization",
      description: "Speed and efficiency in every line of code",
      color: "from-orange-600 to-red-600",
      glow: "orange",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
        </svg>
      ),
      title: "Responsive Design",
      description: "Seamless experience across all devices",
      color: "from-indigo-600 to-blue-600",
      glow: "indigo",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "JavaScript/TypeScript",
      description: "Modern ES6+ and type-safe development",
      color: "from-yellow-600 to-amber-600",
      glow: "yellow",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      ),
      title: "API Integration",
      description: "RESTful and GraphQL expertise",
      color: "from-teal-600 to-cyan-600",
      glow: "teal",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: "State Management",
      description: "Redux, Zustand, and Context API mastery",
      color: "from-rose-600 to-pink-600",
      glow: "rose",
    },
  ];

  const glowColors = {
    cyan: "shadow-cyan-500/50",
    emerald: "shadow-emerald-500/50",
    purple: "shadow-purple-500/50",
    orange: "shadow-orange-500/50",
    indigo: "shadow-indigo-500/50",
    yellow: "shadow-yellow-500/50",
    teal: "shadow-teal-500/50",
    rose: "shadow-rose-500/50",
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32"
    >
      {/* Background - Matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-stone-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(120,53,15,0.15),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(87,33,15,0.15),rgba(0,0,0,0))]"></div>
      </div>

      {/* Soft animated glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-amber-950/10 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-orange-950/8 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative z-10 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-amber-400 text-sm md:text-base uppercase tracking-widest mb-4 animate-fadeInUp">
              What I Do
            </p>
            <h2
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-black mb-4 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600">
                MY
              </span>{" "}
              <span className="text-white">SKILLS</span>
            </h2>
            <p
              className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Specialized in modern web technologies and design principles to
              deliver exceptional digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className="relative h-full p-6 md:p-8 bg-gradient-to-br from-stone-900/40 to-stone-950/60 backdrop-blur-sm border border-amber-900/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-amber-600/50 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                      glowColors[skill.glow]
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 rounded-2xl bg-gradient-to-br ${skill.color} text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      {skill.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300">
                      {skill.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-600/20 rounded-tr-2xl group-hover:border-amber-500/50 transition-colors duration-300"></div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-20 blur-sm`}
                    ></div>
                  </div>
                </div>

                {/* Floating Particle Effect */}
                {hoveredIndex === index && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-ping"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div
            className="text-center animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-gray-400 text-lg mb-6">
              Interested in working together?
            </p>
            <button className="group px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-600/40 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto text-sm md:text-base uppercase tracking-wider">
              <span>Let's Talk</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
          </div> */}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Services;
