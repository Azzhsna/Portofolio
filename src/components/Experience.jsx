import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "FrontEnd Developer",
      company: "AirNav Indonesia",
      location: "Tangerang",
      period: "Nov 2024 - Now",
      type: "Internship",
      description:
        "Built a digital platform to improve efficiency and transparency in managing corporate events for organizers and participants  Collaborated with cross-functional teams (backend, UI/UX, and stakeholders) to deliver scalable and user-friendly solutions",
    },
    {
      role: "UI/UX Designer",
      company: "GroPerti",
      location: "Jakarta",
      period: "Sept 2024 - Des 2025",
      type: "Internship",
      description: "Designing user interfaces for real estate platform",
    },
    {
      role: "Application Developer",
      company: "BINUS University",
      location: "Jakarta",
      period: "Sept 2023 - Feb 2024",
      type: "Internship",
      description: "Building educational applications and systems",
    },
    {
      role: "Full Stack Developer",
      company: "PT. Media Andalan Nusa",
      location: "Jakarta",
      period: "Feb 2023 - Aug 2023",
      type: "Internship",
      description: "Developing end-to-end web solutions",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32"
    >
      {/* Background - Matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-stone-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(120,53,15,0.15),rgba(0,0,0,0))]"></div>
      </div>

      {/* Soft animated glows - Brown/Warm tones */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-amber-950/10 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-orange-950/8 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-amber-400 text-sm md:text-base uppercase tracking-widest mb-4 animate-fadeInUp">
              My Journey
            </p>
            <h2
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 mb-6 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              Experience
            </h2>
            <p
              className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Building digital experiences through continuous learning and
              hands-on development across various organizations.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600/20 via-orange-600/40 to-amber-600/20 hidden md:block"></div>

            {/* Experience Cards */}
            <div className="space-y-12 md:space-y-20">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fadeInUp ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-orange-500/50 z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 animate-pulse"></div>
                  </div>

                  {/* Card with Cleaner Layout */}
                  <div
                    className={`group relative bg-gradient-to-br from-stone-900/40 to-stone-950/60 backdrop-blur-sm border border-amber-900/20 rounded-2xl p-8 md:p-10 hover:border-amber-700/40 transition-all duration-500 hover:shadow-xl hover:shadow-orange-900/20 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                    <div className="relative z-10">
                      {/* Period Badge - Top Right */}
                      <div className="absolute -top-3 right-8">
                        <span className="px-5 py-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-600/30 rounded-full text-amber-400 text-sm md:text-base font-semibold tracking-wide inline-block">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role Title - Large and Prominent */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-5 pr-0 md:pr-48 leading-tight">
                        {exp.role}
                      </h3>

                      {/* Company - with Icon */}
                      <div className="flex items-center gap-3 text-amber-500 mb-5">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-lg md:text-xl font-semibold">
                          {exp.company}
                        </span>
                      </div>

                      {/* Location & Type - Inline */}
                      <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-base md:text-lg">
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span className="text-base md:text-lg text-orange-400 font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Corner Accent - Consistent Position */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-amber-600/20 rounded-tl-3xl group-hover:border-amber-500/40 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

export default Experience;
