import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-slate-800 pt-12 pb-8 mt-0.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-wider text-white">
              TECH<span className="text-yellow-500">STORE</span>
            </span>
            <p className="text-sm text-gray-400">
              Your high-performance destination for gaming gear, laptops, and custom PC components.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition">
                <span className="text-xs font-bold">Fb</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition">
                <span className="text-xs font-bold">Ig</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition">Gaming Laptops</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Graphics Cards</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Monitors</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Accessories</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Customer Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition">Order Tracking</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Warranty & Returns</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Shipping Information</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get special discounts and early access to new releases.
            </p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 text-sm text-gray-200 placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold text-sm py-2 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;