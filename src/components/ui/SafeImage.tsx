"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  category?: string;
  fallbackTitle?: string;
  className?: string;
}

export function SafeImage({
  src,
  alt,
  category = "pizza",
  fallbackTitle,
  className = "",
  fill,
  width,
  height,
  priority,
  sizes,
  ...rest
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive normalized category for fallback illustration
  const catKey = (category || "").toLowerCase();

  const renderFallbackSvg = () => {
    const titleText = fallbackTitle || alt || "Dubai Yums";

    // Pizza categories
    if (catKey.includes("pizza") || catKey.includes("pie") || catKey.includes("tikka")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#163821] via-[#0b2816] to-[#071a0e] p-4 text-center overflow-hidden select-none">
          {/* Background culinary radial glows */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.25)_0%,transparent_70%)]" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl" />

          {/* Pizza Slice SVG Artwork */}
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pizza Crust */}
              <path
                d="M15 28C38 16 62 16 85 28L50 88L15 28Z"
                fill="#f59e0b"
                stroke="#d97706"
                strokeWidth="2.5"
              />
              {/* Melted Cheese Surface */}
              <path
                d="M20 32C40 22 60 22 80 32L50 82L20 32Z"
                fill="#fbbf24"
              />
              {/* Sauce Blends */}
              <path
                d="M25 35C40 28 60 28 75 35L50 77L25 35Z"
                fill="#fef08a"
                fillOpacity="0.8"
              />
              {/* Pepperoni / Tikka Chunks */}
              <circle cx="50" cy="40" r="7" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              <circle cx="38" cy="54" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              <circle cx="60" cy="56" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              <circle cx="50" cy="68" r="4.5" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
              {/* Green Bell Peppers & Herbs */}
              <rect x="34" y="38" width="5" height="3" rx="1.5" fill="#16a34a" transform="rotate(25 34 38)" />
              <rect x="58" y="42" width="6" height="3" rx="1.5" fill="#16a34a" transform="rotate(-30 58 42)" />
              <rect x="46" y="52" width="5" height="2.5" rx="1.2" fill="#16a34a" transform="rotate(45 46 52)" />
              {/* Crust Ring */}
              <path
                d="M14 28C38 15 62 15 86 28"
                stroke="#b45309"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Badge & Label */}
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark/90 border border-brand-yellow/40 text-[10px] font-display font-extrabold text-amber-300 uppercase tracking-wider shadow-sm">
              Fresh Oven Baked Pizza
            </span>
          </div>
        </div>
      );
    }

    // Burger categories
    if (catKey.includes("burger") || catKey.includes("zinger")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1b351e] via-[#0e2715] to-[#06180c] p-4 text-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.2)_0%,transparent_65%)]" />
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top Bun */}
              <path
                d="M20 44C20 26 33 18 50 18C67 18 80 26 80 44Z"
                fill="#f59e0b"
                stroke="#d97706"
                strokeWidth="2"
              />
              {/* Sesame Seeds */}
              <ellipse cx="40" cy="28" rx="2" ry="1.2" fill="#fef3c7" transform="rotate(-15 40 28)" />
              <ellipse cx="50" cy="24" rx="2" ry="1.2" fill="#fef3c7" />
              <ellipse cx="60" cy="28" rx="2" ry="1.2" fill="#fef3c7" transform="rotate(15 60 28)" />
              <ellipse cx="32" cy="36" rx="2" ry="1.2" fill="#fef3c7" transform="rotate(-25 32 36)" />
              <ellipse cx="68" cy="36" rx="2" ry="1.2" fill="#fef3c7" transform="rotate(25 68 36)" />
              {/* Crisp Lettuce */}
              <path
                d="M17 46C22 43 28 47 34 44C40 47 46 43 52 46C58 43 64 47 70 44C76 47 80 44 83 46"
                stroke="#22c55e"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Melted Cheese Layer */}
              <path
                d="M20 50L45 53L55 60L65 52L80 50"
                stroke="#fbbf24"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Crispy Fried Patty */}
              <rect
                x="18"
                y="54"
                width="64"
                height="12"
                rx="6"
                fill="#b45309"
                stroke="#92400e"
                strokeWidth="1.5"
              />
              {/* Bottom Bun */}
              <path
                d="M22 68C22 75 32 80 50 80C68 80 78 75 78 68Z"
                fill="#f59e0b"
                stroke="#d97706"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark/90 border border-amber-400/40 text-[10px] font-display font-extrabold text-amber-300 uppercase tracking-wider shadow-sm">
              Crispy Golden Zinger
            </span>
          </div>
        </div>
      );
    }

    // Shawarma / Wraps / Paratha rolls
    if (catKey.includes("shawarma") || catKey.includes("wrap") || catKey.includes("roll")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1b3420] via-[#0d2715] to-[#07190c] p-4 text-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.18)_0%,transparent_65%)]" />
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Wrap body diagonally */}
              <rect
                x="22"
                y="34"
                width="56"
                height="32"
                rx="16"
                transform="rotate(-25 50 50)"
                fill="#fef08a"
                stroke="#f59e0b"
                strokeWidth="2"
              />
              {/* Grill marks */}
              <line x1="38" y1="36" x2="48" y2="58" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="38" x2="60" y2="60" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="62" y1="40" x2="72" y2="62" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
              {/* Spiced Filling Burst at Open End */}
              <circle cx="28" cy="38" r="7" fill="#dc2626" />
              <circle cx="34" cy="45" r="5" fill="#22c55e" />
              <circle cx="24" cy="46" r="4.5" fill="#fbbf24" />
              <circle cx="30" cy="32" r="4" fill="#ffffff" />
            </svg>
          </div>
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark/90 border border-emerald-400/40 text-[10px] font-display font-extrabold text-emerald-300 uppercase tracking-wider shadow-sm">
              Artisan Rolled Shawarma
            </span>
          </div>
        </div>
      );
    }

    // Pasta
    if (catKey.includes("pasta") || catKey.includes("spaghetti")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1a3320] via-[#0d2614] to-[#07190c] p-4 text-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,116,0.2)_0%,transparent_65%)]" />
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Oven Baking Dish */}
              <ellipse cx="50" cy="62" rx="36" ry="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              {/* Cream & Red Sauce Base */}
              <ellipse cx="50" cy="60" rx="30" ry="14" fill="#e11d74" />
              {/* Melted Cheese Swirl */}
              <ellipse cx="50" cy="58" rx="26" ry="11" fill="#fef08a" />
              {/* Steaming Pasta Ribbons */}
              <path
                d="M32 58C36 50 44 62 50 54C56 46 64 58 68 52"
                stroke="#f59e0b"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Basil Leaf Accents */}
              <circle cx="44" cy="54" r="3" fill="#16a34a" />
              <circle cx="56" cy="56" r="3.5" fill="#16a34a" />
              {/* Steam waves */}
              <path d="M42 36C40 30 45 26 43 20" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
              <path d="M52 38C50 32 55 28 53 22" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              <path d="M62 36C60 30 65 26 63 20" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            </svg>
          </div>
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark/90 border border-pink-400/40 text-[10px] font-display font-extrabold text-pink-300 uppercase tracking-wider shadow-sm">
              Baked Oven Pasta
            </span>
          </div>
        </div>
      );
    }

    // Fries
    if (catKey.includes("fries") || catKey.includes("potato")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1a3320] via-[#0d2614] to-[#07190c] p-4 text-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.25)_0%,transparent_65%)]" />
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* French Fries Box */}
              <path d="M30 48L35 84H65L70 48Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
              <path d="M35 48C45 54 55 54 65 48" stroke="#fef08a" strokeWidth="3" />
              {/* Fries sticking out */}
              <rect x="36" y="22" width="6" height="32" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" transform="rotate(-8 36 22)" />
              <rect x="44" y="16" width="6" height="36" rx="2" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
              <rect x="52" y="18" width="6" height="34" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" transform="rotate(8 52 18)" />
              <rect x="60" y="24" width="6" height="30" rx="2" fill="#fef08a" stroke="#d97706" strokeWidth="1" transform="rotate(16 60 24)" />
              <rect x="30" y="26" width="5.5" height="28" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" transform="rotate(-18 30 26)" />
              {/* Cheese Sauce Drip */}
              <path d="M40 54C44 60 46 64 48 58C52 64 56 60 60 56" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark/90 border border-amber-400/40 text-[10px] font-display font-extrabold text-amber-300 uppercase tracking-wider shadow-sm">
              Hot Loaded Fries
            </span>
          </div>
        </div>
      );
    }

    // Starters / Wings
    if (catKey.includes("starters") || catKey.includes("wings") || catKey.includes("nuggets")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1a3320] via-[#0d2614] to-[#07190c] p-4 text-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.25)_0%,transparent_65%)]" />
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Drumstick Meat */}
              <path
                d="M36 28C26 36 26 52 36 62C46 72 62 72 70 62C78 52 78 36 68 28C58 20 46 20 36 28Z"
                fill="#b45309"
                stroke="#92400e"
                strokeWidth="2"
              />
              <path
                d="M40 32C34 38 34 50 42 58C50 66 62 64 66 56"
                stroke="#fbbf24"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Bone */}
              <rect x="64" y="60" width="10" height="22" rx="4" transform="rotate(-40 64 60)" fill="#fef3c7" stroke="#d4d4d8" strokeWidth="1.5" />
              <circle cx="81" cy="74" r="5" fill="#fef3c7" />
              <circle cx="73" cy="81" r="5" fill="#fef3c7" />
              {/* Chili Flames */}
              <path d="M48 20C44 26 48 30 50 34C52 30 56 26 52 20Z" fill="#dc2626" />
            </svg>
          </div>
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark/90 border border-red-500/40 text-[10px] font-display font-extrabold text-red-300 uppercase tracking-wider shadow-sm">
              Fiery Sizzling Starters
            </span>
          </div>
        </div>
      );
    }

    // Deals / Combos / Default
    return (
      <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1a3320] via-[#0d2614] to-[#07190c] p-4 text-center overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.2)_0%,transparent_65%)]" />
        <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
          <svg
            viewBox="0 0 100 100"
            className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Feast Platter Ring */}
            <circle cx="50" cy="50" r="38" fill="#142c1b" stroke="#f59e0b" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="32" fill="#0d2113" stroke="#e11d74" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Cloche Cover / Feast Crown */}
            <path d="M28 56C28 38 40 30 50 30C60 30 72 38 72 56Z" fill="#f59e0b" fillOpacity="0.9" />
            <circle cx="50" cy="27" r="4.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
            <rect x="24" y="56" width="52" height="4" rx="2" fill="#fbbf24" />
            {/* Sparkles */}
            <path d="M50 14L52 18L56 20L52 22L50 26L48 22L44 20L48 18Z" fill="#fbbf24" />
            <path d="M74 34L75 36L77 37L75 38L74 40L73 38L71 37L73 36Z" fill="#e11d74" />
            <path d="M26 34L27 36L29 37L27 38L26 40L25 38L23 37L25 36Z" fill="#22c55e" />
          </svg>
        </div>
        <div className="relative z-10 mt-2">
          <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark/90 border border-brand-yellow/40 text-[10px] font-display font-extrabold text-amber-300 uppercase tracking-wider shadow-sm">
            {catKey.includes("deal") ? "Dubai Yums Feast Deal" : "Dubai Yums Special"}
          </span>
        </div>
      </div>
    );
  };

  if (hasError || !src) {
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        {renderFallbackSvg()}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt || "Dubai Yums Menu Item"}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"}
        unoptimized={true}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${fill ? "object-cover" : ""}`}
        {...rest}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-brand-forest-dark/40 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-brand-yellow/40 border-t-amber-400 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
