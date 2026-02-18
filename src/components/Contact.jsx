const Contact = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "GitHub", url: "#" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-gradient-to-br from-black via-red-950/20 to-stone-950/90 overflow-hidden py-32"
    >
      <div className="relative z-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8">
            LET'S <span className="text-red-700">CONNECT</span>
          </h2>

          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something
            extraordinary together.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <a
              href="mailto:hello@example.com"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              azzhhsna08@gmail.com
            </a>
            <a
              href="tel:+1234567890"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              081372769449
            </a>
          </div>

          <div className="flex gap-8 justify-center text-gray-400 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="hover:text-red-600 transition-colors uppercase text-sm tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-24 text-xs text-gray-600 uppercase tracking-widest">
            © 2026 All Rights Reserved
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-600 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div
        className="absolute top-20 right-20 w-96 h-96 bg-red-900 rounded-full opacity-10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Contact;
