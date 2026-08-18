import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl font-bold tracking-wider text-white">
              TECH<span className="text-yellow-500">STORE</span>
            </span>
          </Link>

          {/* 2. Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="text-gray-300 transition hover:text-yellow-400">
              Home
            </Link>
            <Link to="/shop" className="text-gray-300 transition  hover:text-yellow-400">
              Shop
            </Link>
            <Link to="/deals" className="text-gray-300 transition  hover:text-yellow-400">
              Deals
            </Link>
            <Link to="/about" className="text-gray-300 transition  hover:text-yellow-400">
              About Us
            </Link>
          </nav>
          
          

          {/* 3. Search & Actions */}
          <div className="flex items-center space-x-5">
            {/* Search Input */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-slate-800 text-sm text-gray-200 placeholder-gray-400 rounded-full py-1.5 pl-4 pr-9 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-48 transition-all focus:w-60"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute right-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Cart Icon */}
            <button className="relative text-gray-300 hover:text-yellow-500 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              {/* Badge showing item count */}
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* User Account Icon */}
            <button className="text-gray-300 hover:text-yellow-500 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;