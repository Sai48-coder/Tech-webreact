import React from 'react';

function HeroSection() {
  return (
    <div className="relative w-full min-h-[85vh] bg-slate-950 text-white flex items-center overflow-hidden border-b border-amber-200">
      
      {/* Background Grid & Light Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                2026 Pro Hardware Collection
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Unleash Next-Gen <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Gaming Power
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Equip your setup with industry-leading gaming laptops, ultra-refresh displays, and flagship components engineered for peak performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                Explore Products
              </button>
              <button className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-base transition-all duration-300">
                View Deals
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 max-w-md">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">50k+</p>
                <p className="text-xs text-slate-400 mt-1">Active Gamers</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1">Authentic Tech</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">24/7</p>
                <p className="text-xs text-slate-400 mt-1">Pro Support</p>
              </div>
            </div>

          </div>

          {/* Right Showcase Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-900/80 shadow-2xl">
              <div className="relative rounded-[22px] bg-slate-900 overflow-hidden p-6 space-y-6">
                
                {/* Floating Discount Badge */}
                <div className="absolute top-8 right-8 z-20 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1.5 rounded-lg shadow-lg">
                  SAVE $300
                </div>

                {/* Product Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
                  <img
                    src="https://i.pinimg.com/736x/43/61/17/436117e6127896a24f69621217ce1fde.jpg"
                    alt="ROG Strix G16"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                </div>

                {/* Product Info Block */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                      Featured Rig
                    </span>
                    <span className="text-xs text-slate-400">In Stock</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    ROG Strix G16 (RTX 5090)
                  </h3>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-amber-400">$1,900</span>
                      <span className="text-sm text-slate-500 line-through">$2,200</span>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold transition-all">
                      Quick Order
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;