import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Early return if product is missing or undefined
  if (!product) return null;

  const navigate = useNavigate();

  return (
    <div className="group bg-[#0f172a] text-white rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden">
      
      {/* 1. IMAGE & BADGES CONTAINER */}
      <div className="relative w-full bg-slate-900">
        {/* Badges: Flashsale & Bestseller */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product?.flashsale && (
            <span className="bg-red-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wider">
              Flash Sale
            </span>
          )}
          {product?.bestseller && (
            <span className="bg-yellow-500 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wider">
              Best Seller
            </span>
          )}
        </div>

        {/* Brand Tag */}
        {product?.brand && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-slate-800/80 backdrop-blur-md text-gray-300 text-[11px] font-semibold px-2 py-0.5 rounded-md border border-slate-700/50">
              {product.brand}
            </span>
          </div>
        )}

        {/* Main Product Display Image */}
        <div className="w-full h-52 overflow-hidden">
          <img
            onClick={() => product?.id && navigate(`/product/${product.id}`)}
            src={product?.img?.[activeImgIndex] || product?.img?.[0]}
            alt={product?.name || "Product"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </div>

        {/* Multi-Image Thumbnails */}
        {product?.img && product.img.length > 1 && (
          <div className="flex items-center justify-center gap-2 p-2 bg-slate-950/40 border-t border-slate-800/50">
            {product.img.map((imageSrc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIndex(idx)}
                onMouseEnter={() => setActiveImgIndex(idx)}
                className={`relative w-8 h-8 rounded-md overflow-hidden border-2 transition-all ${
                  activeImgIndex === idx
                    ? 'border-yellow-500 scale-105'
                    : 'border-slate-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={imageSrc}
                  alt={`${product?.name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 2. CARD BODY & SPECIFICATIONS */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category */}
          {product?.category && (
            <span className="text-[11px] font-semibold text-yellow-500 uppercase tracking-widest block mb-0.5">
              {product.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-yellow-400 transition">
            {product?.name}
          </h3>

          {/* Description */}
          {product?.description && (
            <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Specifications Grid */}
          {product?.specification && (
            <div className="mt-3 grid grid-cols-2 gap-1.5 text-[11px]">
              {product.specification.cpu && (
                <div className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-gray-300">
                  <span className="text-gray-500 mr-1">CPU:</span>
                  <span className="font-medium text-white">{product.specification.cpu}</span>
                </div>
              )}
              {product.specification.gpu && (
                <div className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-gray-300">
                  <span className="text-gray-500 mr-1">GPU:</span>
                  <span className="font-medium text-white">{product.specification.gpu}</span>
                </div>
              )}
              {product.specification.ram && (
                <div className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-gray-300">
                  <span className="text-gray-500 mr-1">RAM:</span>
                  <span className="font-medium text-white">{product.specification.ram}</span>
                </div>
              )}
              {product.specification.size && (
                <div className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-gray-300">
                  <span className="text-gray-500 mr-1">Size:</span>
                  <span className="font-medium text-white">{product.specification.size}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 3. PRICE & ACTION BUTTON */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Price</span>
            <span className="text-xl font-black text-white">
              ${product?.price?.toLocaleString()}
            </span>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;