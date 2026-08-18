import React from 'react';
import { Cpu, ShieldAlert, CpuIcon, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

function AboutAndFeature() {
  return (
    <div className="bg-[#030712] py-16 px-4 border-t border-b border-gray-800/80 relative overflow-hidden ">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ================= WEBSITE INTRO / ABOUT SCRIPT ================= */}
        <div className="bg-gradient-to-r from-gray-900/90 via-[#0B0F19] to-gray-900/90 border border-gray-800 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ULTIMATE HARDWARE DESTINATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Built by Gamers, Dedicated to High Performance.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Welcome to <span className="text-amber-400 font-semibold">TECHSTORE</span>—your premium marketplace for top-tier gaming laptops, custom PC components, and cutting-edge tech gear. Whether you're a competitive esports player looking for high FPS or a creator rendering complex 3D projects, we curate only factory-certified hardware backed by official manufacturer warranties and expert local support.
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-800 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Tech</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Official Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fast Local Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURE CARDS WITH STATS ================= */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight font-mono uppercase">
              Why Engineers & Gamers Trust Us
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              We don't just sell hardware—we ensure every unit meets peak operational standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-amber-500/40 transition-all duration-300 group">
              <div className="text-amber-400 font-mono text-3xl font-bold mb-2">
                100%
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                Stress Tested Hardware
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every laptop and component undergoes thermal throttling and benchmark checks prior to packaging.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="text-blue-400 font-mono text-3xl font-bold mb-2">
                &lt; 24h
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Rapid Order Processing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Orders are verified, packed with protective anti-static padding, and dispatched within 1 business day.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/40 transition-all duration-300 group">
              <div className="text-emerald-400 font-mono text-3xl font-bold mb-2">
                2 Years
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Extended Warranty Direct
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enjoy complete peace of mind with full hardware protection and instant RMA support options.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutAndFeature;