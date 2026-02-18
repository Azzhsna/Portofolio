import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 md:px-20 py-6 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-end">
        {/* <div className="relative w-4 h-4 rounded-full bg-yellow-600 animate-pulseGlow text-white px-8">
          <p>porto </p>
        </div> */}

        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          {["About", "Experience", "Skills", "Works", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-yellow-300 font-semibold hover:text-red-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* <div className="text-xs uppercase tracking-widest text-white cursor-pointer hover:text-red-500 transition-colors">
          Scroll More
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
