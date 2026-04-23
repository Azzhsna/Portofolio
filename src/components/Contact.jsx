import React from "react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/azzhsna",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Azzhsna",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6281372769449",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.791-.973zm11.387-5.464c-.301-.15-1.779-.879-2.053-.979-.275-.1-.475-.15-.675.15-.199.299-.775.979-.95 1.178-.175.199-.35.225-.65.075-.301-.15-1.267-.467-2.414-1.492-.893-.796-1.494-1.78-1.669-2.079-.175-.3-.018-.463.13-.612.134-.133.301-.35.451-.524.15-.174.199-.299.299-.499.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.582-.491-.503-.675-.512-.174-.01-.374-.012-.574-.012s-.525.075-.799.375c-.275.3-1.047 1.026-1.047 2.502s1.075 2.903 1.225 3.103c.15.199 2.115 3.231 5.123 4.531.715.31 1.273.494 1.707.633.718.227 1.37.195 1.887.118.575-.085 1.779-.726 2.028-1.426.25-.7.25-1.299.175-1.425-.075-.125-.275-.199-.575-.349z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden py-24 md:py-36"
      style={{ background: "#000000" }}
    >
      {/* ── Rich Background Layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient: black → brown → dark maroon → black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, #0d0805 15%, #1c1209 40%, #2a1507 60%, #1c1209 80%, #220808 92%, #000000 100%)",
          }}
        />
        {/* Radial warmth and depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(60,30,10,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,8,8,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(60,30,10,0.1)_0%,transparent_50%)]"></div>
        
        {/* Horizontal vignette - Darker sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
        
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            opacity: 0.4,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Links */}
          <div className="flex flex-col text-left">
            <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 animate-fadeInUp">
              Get In Touch
            </p>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight mb-10 tracking-tighter animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              LET'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600">TALK</span>
            </h2>
            
            <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed mb-12 max-w-lg animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative collaborations.
            </p>

            {/* Main Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <a
                href="mailto:azzhhsna08@gmail.com"
                className="group relative px-8 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Send Email</span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <a
                href="https://wa.me/6281372769449"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-5 bg-stone-900 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-stone-800 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <span>WhatsApp</span>
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.101 24l1.6-5.823c-1.129-1.958-1.725-4.185-1.723-6.464 0.005-7.112 5.795-12.899 12.91-12.899 3.444 0.001 6.682 1.342 9.117 3.778 2.435 2.437 3.775 5.676 3.773 9.122-0.005 7.113-5.797 12.901-12.912 12.901-2.235-0.001-4.425-0.58-6.368-1.674l-6.4 1.679zm6.076-4.413c1.589.949 3.12 1.441 5.074 1.441 6.071 0 11.011-4.94 11.016-11.011 0.002-3.003-1.168-5.827-3.295-7.954-2.127-2.127-4.954-3.298-7.958-3.3-6.076 0-11.016 4.942-11.019 11.013 0 2.03.541 3.232 1.542 4.939l-1.012 3.693 3.752-.981z" />
                </svg>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-6 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-stone-500 hover:text-amber-500 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Illustration */}
          <div className="relative hidden lg:flex items-center justify-center h-full animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-full max-w-md aspect-square">
              
              {/* Glowing Backlights */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-amber-500/20 blur-[100px] rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-red-600/10 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              
              {/* Main Illustration: Floating Card/Envelope */}
              <div className="relative z-10 w-full h-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                
                {/* 3D Glass Card Base */}
                <div className="relative w-72 h-48 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col p-8 overflow-hidden transform rotate-[-8deg]">
                  {/* Glass Reflections */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-500/10 blur-2xl rounded-full"></div>
                  
                  {/* "Mail" Content Mimic */}
                  <div className="w-12 h-1.5 bg-amber-500/60 rounded-full mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-2 bg-white/10 rounded-full w-full"></div>
                    <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                    <div className="h-2 bg-white/10 rounded-full w-2/3"></div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                    <div className="w-16 h-6 bg-amber-500/40 rounded-lg"></div>
                  </div>
                </div>

                {/* Second Layer: Floating Icons Around */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-stone-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 animate-[float_5s_ease-in-out_infinite_reverse]">
                   <span className="text-3xl">✨</span>
                </div>
                
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-stone-900 border border-white/10 rounded-full flex items-center justify-center shadow-2xl transform -rotate-6 animate-[float_7s_ease-in-out_infinite]">
                   <span className="text-4xl">👋</span>
                </div>

                {/* Glowing Particles */}
                <div className="absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 right-10 w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: "1.5s" }}></div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Credits */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-600 text-[10px] uppercase tracking-[0.3em] font-medium">
          <div>© 2026 Azzhsna. Crafting Digital Experiences</div>
          <div className="flex gap-8">
            <span className="hover:text-amber-500 transition-colors cursor-pointer">Jakarta, ID</span>
            <span className="hover:text-amber-500 transition-colors cursor-pointer">Open to Remote</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-20px) rotate(-4deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Contact;
