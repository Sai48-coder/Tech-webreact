import React from "react";

function Herosection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 text-white p-8 md:p-12 lg:p-16 shadow-2xl">
        
        {/* Glowing Background Elements */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Live Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              New Collection 2026
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
              Elevate Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
                Daily Style Standard
              </span>
            </h1>

            {/* Body Copy */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Discover precision-tailored essentials crafted for comfort, modern elegance, and long-lasting durability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base rounded-2xl transition-all duration-300 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button className="px-8 py-4 border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-white font-semibold text-base rounded-2xl transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2">
                Explore Lookbook
              </button>
            </div>

            {/* Metrics */}
            <div className="pt-8 border-t border-slate-800/80 w-full grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">15k+</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">4.9 ★</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">User Rating</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Ethical Source</p>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              
              {/* Outer Glow & Accent Outline */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-3xl rotate-3 scale-95 opacity-25 group-hover:rotate-1 transition-all duration-500 blur-sm" />

              {/* Main Image Wrapper */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://i.pinimg.com/736x/db/d6/8b/dbd68b8860a77e1d15201b2938db5c02.jpg"
                  alt="Minimalist Essential Outerwear"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

                {/* Floating Product Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">Top Seller</span>
                    <p className="text-sm font-bold text-white">Minimalist Outerwear</p>
                  </div>
                  <span className="text-sm font-black text-amber-300 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800">
                    $129
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Herosection;