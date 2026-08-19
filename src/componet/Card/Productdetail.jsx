import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductData } from "../data/ProductData";

function Productdetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by ID
  const product = ProductData.find((item) => String(item.id) === String(id));

  // Find related products by brand (excluding the current product)
  const relateproduct = product
    ? ProductData.filter(
        (item) => item.brand === product.brand && item.id !== product.id,
      ).slice(0, 4)
    : [];

  // Interactive states
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Green");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold transition"
        >
          Back to Website
        </button>
      </div>
    );
  }

  const images =
    product.img && product.img.length > 0
      ? product.img
      : ["https://via.placeholder.com/600"];

  return (
    <div className="min-h-screen bg-[#0b0f19] mt-1 text-slate-200 font-sans py-8 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 1. TOP BAR: BACK TO WEBSITE BUTTON & BREADCRUMBS */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white px-3.5 py-2 rounded-xl shadow-sm transition"
          >
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Website
          </button>

          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <span>/</span>
            <span className="hover:text-yellow-400 cursor-pointer">
              {product.category || "Electronics"}
            </span>
            <span>/</span>
            <span className="hover:text-yellow-400 cursor-pointer">
              {product.brand || "Gadgets"}
            </span>
            <span>/</span>
            <span className="text-white font-medium truncate max-w-[180px] sm:max-w-[300px]">
              {product.name}
            </span>
          </nav>
        </div>

        {/* 2. TOP PRODUCT SHOWCASE GRID */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-xl backdrop-blur-sm">
          {/* LEFT: THUMBNAILS + MAIN SHOWCASE IMAGE */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Vertical Thumbnails */}
            <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto max-h-[480px]">
              {images.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`w-16 h-16 rounded-xl border flex-shrink-0 overflow-hidden p-1 bg-slate-950 transition ${
                    selectedImgIndex === idx
                      ? "border-yellow-500 ring-1 ring-yellow-500"
                      : "border-slate-800 hover:border-slate-700 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Main Image View */}
            <div className="flex-1 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-8 flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
              <img
                src={images[selectedImgIndex] || images[0]}
                alt={product.name}
                className="max-h-[380px] w-full object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* RIGHT: DETAILS & PURCHASE PANEL */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              {/* Product Title */}
              <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {product.name}
              </h1>

              {/* Rating & Orders */}
              <div className="flex items-center gap-3 mt-2 text-xs">
                <div className="flex text-amber-400">
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                </div>
                <span className="text-amber-400 font-semibold">4.5</span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 12H4L5 11z"
                    />
                  </svg>
                  154 orders
                </span>
              </div>

              {/* Specs Meta */}
              <div className="mt-4 space-y-2 text-xs text-slate-400 border-t border-b border-slate-800/80 py-3">
                <div className="grid grid-cols-3">
                  <span>Made in:</span>
                  <span className="col-span-2 text-slate-200 font-medium">
                    Australia
                  </span>
                </div>
                <div className="grid grid-cols-3">
                  <span>Design:</span>
                  <span className="col-span-2 text-slate-200 font-medium">
                    Modern
                  </span>
                </div>
                <div className="grid grid-cols-3">
                  <span>Delivery:</span>
                  <span className="col-span-2 text-slate-200 font-medium">
                    2 days delivery
                  </span>
                </div>
              </div>

              {/* Option Selectors */}
              <div className="mt-4 space-y-4">
                {/* Variant Options */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Options
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Orange", "Green", "Black", "White"].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 text-xs rounded-lg border font-medium transition ${
                          selectedColor === color
                            ? "border-yellow-500 text-yellow-400 bg-yellow-500/10"
                            : "border-slate-800 text-slate-300 bg-slate-900 hover:border-slate-700"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Quantity
                  </label>
                  <div className="inline-flex items-center border border-slate-800 bg-slate-900 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1.5 text-yellow-400 hover:bg-slate-800 font-medium text-sm transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-1.5 text-xs font-bold text-white bg-slate-950 border-x border-slate-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1.5 text-yellow-400 hover:bg-slate-800 font-medium text-sm transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-5">
                <span className="text-xs text-slate-400 block uppercase tracking-wider">
                  Price
                </span>
                <span className="text-3xl font-black text-yellow-400">
                  $
                  {(product.price ? product.price * quantity : 298.0).toFixed(
                    2,
                  )}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition active:scale-95">
                <svg
                  className="w-4 h-4"
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
                Add to cart
              </button>
              <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl border border-slate-700 transition">
                Buy now
              </button>
              <button className="p-3 border border-slate-800 bg-slate-900 rounded-xl hover:border-slate-700 text-slate-400 hover:text-red-400 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-1.137-7.303a4.5 4.5 0 00-5.242 1.08L12 6.5l-.837-.837a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3. LOWER SECTION: DETAILS TABS & SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TAB CONTENT */}
          <div className="lg:col-span-8 bg-slate-900/60 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
            {/* Tab Headers */}
            <div className="border-b border-slate-800 flex gap-8">
              {["Description", "Reviews", "Company", "Usage guide"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-xs font-semibold transition relative ${
                      activeTab === tab
                        ? "text-yellow-400 border-b-2 border-yellow-500"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            {/* Tab Body */}
            {activeTab === "Description" && (
              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <p>
                  {product.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                {/* Specs Table */}
                <div className="pt-4 space-y-2 border-t border-slate-800">
                  {product.specification ? (
                    Object.entries(product.specification).map(([key, val]) => (
                      <div
                        key={key}
                        className="grid grid-cols-3 py-2 border-b border-slate-800/50"
                      >
                        <span className="text-slate-400 capitalize">{key}</span>
                        <span className="col-span-2 text-white font-medium">
                          {val}
                        </span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="grid grid-cols-3 py-2 border-b border-slate-800/50">
                        <span className="text-slate-400">Memory size</span>
                        <span className="col-span-2 text-white font-medium">
                          128 GB
                        </span>
                      </div>
                      <div className="grid grid-cols-3 py-2 border-b border-slate-800/50">
                        <span className="text-slate-400">Material type</span>
                        <span className="col-span-2 text-white font-medium">
                          Plastic and Metallic
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab !== "Description" && (
              <div className="text-xs text-slate-400 py-8 text-center">
                {activeTab} content coming soon.
              </div>
            )}
          </div>

          {/* SIDEBAR CARDS */}
          <div className="lg:col-span-4 space-y-6">
            {/* Seller Card */}
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-teal-400 flex items-center justify-center font-bold text-lg">
                  🛍️
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Guanjoi Trading LLC
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <span className="text-amber-400">★</span> 4.2 • 1290 items
                    sold
                  </div>
                </div>
              </div>
              <button className="w-full py-2.5 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition">
                Seller's profile
              </button>
            </div>

            {/* Ratings Summary Card */}
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400 text-base">
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                </div>
                <span className="text-sm font-bold text-white">
                  4.7 out of 5
                </span>
              </div>
              <p className="text-[11px] text-slate-400">458 global ratings</p>

              {/* Progress Bars */}
              <div className="space-y-2 text-[11px]">
                {[
                  { star: 5, pct: "75%" },
                  { star: 4, pct: "15%" },
                  { star: 3, pct: "5%" },
                  { star: 2, pct: "3%" },
                  { star: 1, pct: "2%" },
                ].map((row) => (
                  <div
                    key={row.star}
                    className="flex items-center gap-2 text-slate-400"
                  >
                    <span className="w-3 text-slate-300">{row.star}</span>
                    <span className="text-amber-400">★</span>
                    <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-400 h-full rounded-full"
                        style={{ width: row.pct }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. RELATED PRODUCTS SECTION */}
        {relateproduct.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white">
              Related Products from{" "}
              <span className="text-yellow-400">{product.brand}</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relateproduct.map((item) => {
                const itemImg = Array.isArray(item.img)
                  ? item.img[0]
                  : item.img;

                return (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    onClick={() => {
                      setSelectedImgIndex(0);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="group bg-slate-900/60 hover:bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 p-4 transition-all shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="bg-slate-950 rounded-xl p-4 h-36 flex items-center justify-center overflow-hidden mb-3">
                        <img
                          src={itemImg || "https://via.placeholder.com/150"}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Title */}
                      <h4 className="text-xs font-semibold text-slate-200 group-hover:text-yellow-400 transition-colors line-clamp-2">
                        {item.name}
                      </h4>
                    </div>

                    {/* Price and Action */}
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/60">
                      <span className="text-sm font-bold text-yellow-400">
                        ${item.price ? Number(item.price).toFixed(2) : "0.00"}
                      </span>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded-md font-medium">
                        View
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Productdetail;
