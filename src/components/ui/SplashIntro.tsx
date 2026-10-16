"use client";

import React, { useState, useEffect } from "react";
import { StarMotif } from "@/components/brand/BrandMotifs";

export function SplashIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const flavorLines = [
    "1 Meter Pizza 1st Time in Kasur",
    "Oppt. Bhullay Shah Darbar, Railway Road",
    "Kasur's Late Night Flavor Hero Till 3 AM",
    "New Taste In Town • 100% Halal",
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // reaches 100% in ~2.0s
      });
    }, 40);

    // Dynamic text cycling
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % flavorLines.length);
    }, 600);

    // Trigger smooth fade-out exit
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2400);

    // Completely unmount from DOM
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2900);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-forest-dark cursor-pointer select-none overflow-hidden transition-all duration-500 ease-out ${
        isFadingOut
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      aria-label="Dubai Yums Loading Screen"
    >
      {/* Ambient Pulsing Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-pink/20 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "600ms" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-yellow/15 rounded-full blur-[100px]" />
      </div>

      {/* Skip button top right */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 text-[11px] sm:text-xs font-display font-extrabold text-emerald-200/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
      >
        Skip ➔
      </button>

      {/* Main Animated Showcase Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
        
        {/* Animated Brand Crest Emblem */}
        <div className="relative mb-6">
          {/* Outer rotating dashed ring */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-amber-400/50 animate-[spin_10s_linear_infinite]" />
          
          {/* Soft outer aura glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-pink via-amber-400 to-brand-green blur-md opacity-70 animate-pulse" />

          {/* Golden Badge Body */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 via-brand-yellow to-red-600 p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center border-2 border-amber-400/60 p-3">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path
                  d="M15 35 C15 15, 30 8, 50 8 C70 8, 85 15, 85 35 C88 55, 85 75, 78 85 C74 75, 75 60, 72 45 C65 25, 35 25, 28 45 C25 60, 26 75, 22 85 C15 75, 12 55, 15 35 Z"
                  fill="#F8FAFC"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
                <path
                  d="M26 24 C34 18, 66 18, 74 24"
                  stroke="#0F172A"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M32 40 C32 30, 68 30, 68 40 Z"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="2"
                />
                <path
                  d="M28 43 Q35 48 42 43 Q50 48 58 43 Q65 48 72 43"
                  stroke="#22C55E"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <polygon points="32,45 68,45 50,56" fill="#FBBF24" />
                <rect x="30" y="49" width="40" height="7" rx="3.5" fill="#78350F" />
                <path
                  d="M32 58 C32 65, 68 65, 68 58 Z"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* The Animated Wordmark */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-brand-yellow drop-shadow-[0_4px_24px_rgba(245,158,11,0.4)] animate-[pulse_2s_ease-in-out_infinite]">
            DUBAI
          </h1>
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-600 shadow-lg shadow-red-600/50 border border-white/20 animate-bounce self-center">
            <span className="font-display font-black text-xs sm:text-sm tracking-normal text-white lowercase leading-none inline-block -translate-y-[0.5px]">
              yums
            </span>
          </span>
        </div>

        {/* Tagline With Symmetrical Stars */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm font-display font-extrabold tracking-widest uppercase text-amber-300/90">
          <span className="inline-block animate-spin" style={{ animationDuration: "6s" }}>
            <StarMotif className="w-3 h-3 text-brand-yellow" />
          </span>
          <span>New Taste In Town • Kasur</span>
          <span className="inline-block animate-spin" style={{ animationDuration: "6s" }}>
            <StarMotif className="w-3 h-3 text-brand-yellow" />
          </span>
        </div>

        {/* Cycling Animated Sizzling Culinary Micro-Text */}
        <div className="h-7 mb-6 flex items-center justify-center">
          <p
            key={textIndex}
            className="text-xs sm:text-sm font-medium text-emerald-200/90 tracking-wide transition-all duration-300 transform animate-[fadeInUp_0.35s_ease-out]"
          >
            {flavorLines[textIndex]}
          </p>
        </div>

        {/* Sleek Golden-Pink Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 rounded-full bg-brand-forest-light/60 border border-brand-green/40 p-0.5 overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 via-brand-yellow to-brand-pink transition-all duration-75 ease-out shadow-[0_0_10px_rgba(225,29,116,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage Badge */}
        <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-emerald-300/60 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Heating Kasur Ovens • {Math.round(progress)}%</span>
        </div>

      </div>
    </div>
  );
}
