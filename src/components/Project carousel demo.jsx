import React, { useState, useRef } from "react";

const ProjectCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      id: "01",
      title: "Strategy & Planning",
      description: "Brand identity and strategic planning",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: "02",
      title: "Design & Development",
      description: "Creative design solutions",
      gradient: "from-orange-600 to-red-700",
    },
    {
      id: "03",
      title: "Launch & Growth",
      description: "Product launch strategies",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "04",
      title: "Ongoing Support",
      description: "Continuous maintenance services",
      gradient: "from-green-600 to-emerald-700",
    },
    {
      id: "05",
      title: "Brand Identity",
      description: "Complete brand design",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: "06",
      title: "Digital Experience",
      description: "Immersive digital interfaces",
      gradient: "from-indigo-600 to-blue-700",
    },
  ];

  // Scroll navigation
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <p className="text-orange-500 text-sm md:text-base uppercase tracking-wider mb-4">
            Behind the Designs
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Curious What Else I've
            <br />
            Created?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-8">
            Explore more brand identities, packaging, and digital design work in
            my extended portfolio.
          </p>
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full inline-flex items-center gap-2 transition-all duration-300 group">
            See more Projects
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
        </div>

        {/* Scrollable Projects Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full items-center justify-center transition-all duration-300 -ml-6 shadow-lg"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full items-center justify-center transition-all duration-300 -mr-6 shadow-lg"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Projects Carousel */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth pb-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4] shadow-2xl">
                  {/* Project Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`}
                  >
                    {/* Overlay with number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-8xl font-bold select-none">
                        {project.id}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="text-orange-500 text-xs font-semibold">
                        #{project.id}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="px-2">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/20 hover:bg-orange-500 transition-colors cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
