import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();

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
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }

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
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled || location.pathname !== "/" ? "bg-black/70 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-10 md:px-20 py-6">
        <Link to="/" className="font-serif text-2xl font-black text-amber-500 tracking-tighter hover:opacity-80 transition-opacity">

        </Link>

        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-semibold transition-all duration-300
                ${active === item.id && location.pathname === "/"
                  ? "text-yellow-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                  : "text-amber-500/80 hover:text-yellow-300"
                }
              `}
            >
              {item.label}

              {/* Animated Underline */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-yellow-400 transition-all duration-300
                  ${active === item.id && location.pathname === "/"
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
