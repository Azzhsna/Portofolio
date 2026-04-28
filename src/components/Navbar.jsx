import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const menuItems = [
    { label: t("navbar.about"), id: "about" },
    { label: t("navbar.experience"), id: "experience" },
    { label: t("navbar.skills"), id: "skills" },
    { label: t("navbar.works"), id: "works" },
    { label: t("navbar.certificate"), id: "certificate" },
    { label: t("navbar.contact"), id: "contact" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
  }, [i18n.language]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
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
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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

        <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest">
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

          {/* Language Switcher */}
          <div className="flex items-center gap-4 ml-4 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => changeLanguage("en")}
              className={`text-xs font-bold transition-all duration-300 ${i18n.language === "en" ? "text-amber-400" : "text-white/40 hover:text-white/70"
                }`}
            >
              EN
            </button>
            <div className="w-[1px] h-3 bg-white/10"></div>
            <button
              onClick={() => changeLanguage("id")}
              className={`text-xs font-bold transition-all duration-300 ${i18n.language === "id" ? "text-amber-400" : "text-white/40 hover:text-white/70"
                }`}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
