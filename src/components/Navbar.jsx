import { useState, useEffect } from "react";

const menuItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skill", id: "skills" },
  { label: "Works", id: "works" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-end items-center px-10 md:px-20 py-6">
        <div className="flex gap-12 text-sm uppercase tracking-widest">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-semibold transition-all duration-300
                ${
                  active === item.id
                    ? "text-yellow-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                    : "text-yellow-500 hover:text-yellow-300"
                }
              `}
            >
              {item.label}

              {/* Animated Underline */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-yellow-400 transition-all duration-300
                  ${
                    active === item.id
                      ? "w-full shadow-[0_0_10px_rgba(255,215,0,0.9)]"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
