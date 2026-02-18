const ThemeToggle = ({ toggle, isDark }) => {
  return (
    <button
      onClick={toggle}
      className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-white/10"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
