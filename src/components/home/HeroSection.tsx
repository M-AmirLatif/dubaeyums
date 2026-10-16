"use client";

import React, { useState, useEffect } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { TypewriterHeadline } from "./TypewriterHeadline";
import {
  StarMotif,
  SunburstBadge,
  TomatoDoodle,
  ChiliDoodle,
  LeafAccent,
  HalalBadge,
} from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  Sparkles,
  Flame,
  ArrowRight,
  PhoneCall,
  Clock,
  ShieldCheck,
  Bike,
  Star,
} from "lucide-react";

const HERO_FEATURED_DISHES = [
  {
    id: "deal-5",
    tabLabel: "1 Meter Pizza",
    title: "1 Meter Party Pizza",
    category: "1st Time in Kasur!",
    tagline: "Kasur's 1st One-Meter Party Pizza with regular chicken & cheese toppings. Feeds a whole crowd!",
    price: "From Rs 2,900",
    badge: "1st Time in Kasur",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80",
    prepTime: "25-30 mins",
  },
  {
    id: "burger-dubai-yums-grill",
    tabLabel: "Sp. Burger",
    title: "Dubai Yums Sp. Grill Burger",
    category: "Charcoal Flame Grilled",
    tagline: "Succulent grilled chicken breast, secret spicy dressing & molten cheddar",
    price: "Only Rs 650",
    badge: "Signature Grill",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    prepTime: "15 mins",
  },
  {
    id: "wrap-wehshi-roll",
    tabLabel: "Wehshi Roll",
    title: "Wehshi Roll (2 Persons)",
    category: "Mega Loaded Roll",
    tagline: "Colossal monster roll stuffed with double crisp chicken, spicy chutneys & crunch",
    price: "Only Rs 800",
    badge: "Feeds 2 Persons",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=900&auto=format&fit=crop&q=80",
    prepTime: "15 mins",
  },
  {
    id: "fries-special-cheese-loaded",
    tabLabel: "Loaded Fries",
    title: "Special Cheese Loaded Fries",
    category: "Late Night Indulgence",
    tagline: "Golden crispy fries overflowing with seasoned chicken, cheddar sauce & jalapeños",
    price: "Only Rs 550",
    badge: "Customer Obsession",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=900&auto=format&fit=crop&q=80",
    prepTime: "12 mins",
  },
];

export function HeroSection() {
  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Auto rotate dishes every 6 seconds unless user clicks
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDishIndex((prev) => (prev + 1) % HERO_FEATURED_DISHES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const activeDish = HERO_FEATURED_DISHES[activeDishIndex];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-brand-pink/15 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-brand-yellow/15 rounded-full blur-[130px]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Live Pulser Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-forest-light/70 border border-amber-400/40 shadow-lg shadow-black/30 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-amber-300">
                Darbar Baba Bulleh Shah, Railway Road • Open Till 3:00 AM
              </span>
              <StarMotif className="w-3.5 h-3.5 text-brand-yellow hidden sm:inline" />
            </div>

            {/* Main Headline with Typewriter Animation */}
            <TypewriterHeadline />

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
              Experience Dubai-style taste in Kasur! Home to Kasur&apos;s first <strong className="text-amber-300 font-bold">1 Meter Pizza</strong>, premium burgers, juicy shawarmas, tortilla wraps, hot wings, crispy nuggets, and midnight cravings until 3 AM!
            </p>

            {/* Primary Action Buttons - Symmetric Architectural Console */}
            <div className="w-full max-w-lg pt-2 space-y-3">
              {/* WhatsApp Quick Order - Primary Hero Action */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Assalam o Alaikum Dubai Yums! I want to place an order from your website."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between gap-2.5 sm:gap-3 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-brand-pink via-brand-pink-dark to-brand-pink hover:bg-brand-pink-dark text-white border border-white/25 shadow-xl shadow-brand-pink/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <PhoneCall className="w-3.5 h-3.5 text-white fill-current" />
                  </div>
                  <span className="font-display font-extrabold text-white text-xs sm:text-base tracking-wide whitespace-nowrap">
                    Order on WhatsApp
                  </span>
                </div>
                <span className="shrink-0 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white text-brand-pink font-display font-black text-[11px] sm:text-xs tracking-wider shadow-sm">
                  {BUSINESS_INFO.phoneFormatted}
                </span>
              </a>

              {/* Symmetrical Dual Action Row: Equal 50/50 Columns on Both Mobile & PC */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                {/* View Full Menu Scroll Button */}
                <a
                  href="#menu"
                  className="h-11 sm:h-12 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 rounded-full bg-brand-forest-light/80 hover:bg-brand-forest-light text-white font-display font-bold text-xs sm:text-sm border border-brand-green/50 hover:border-amber-400/60 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center whitespace-nowrap"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                </a>

                {/* 12 Value Deals CTA */}
                <a
                  href="#deals"
                  className="h-11 sm:h-12 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 rounded-full bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 font-display font-bold text-xs sm:text-sm border border-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                  <span>12 Value Deals</span>
                </a>
              </div>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-6 border-t border-brand-green/30 w-full max-w-xl">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-amber-400 font-display font-black text-xl sm:text-2xl">
                  <span>3.8</span>
                  <Star className="w-4 h-4 fill-current text-brand-yellow" />
                </div>
                <span className="text-xs text-emerald-200/80 font-medium">Google Reviews</span>
              </div>

              <div className="flex flex-col items-center lg:items-start border-x border-brand-green/30 px-2 sm:px-4">
                <div className="flex items-center gap-1 text-white font-display font-black text-xl sm:text-2xl">
                  <span>FREE</span>
                </div>
                <span className="text-xs text-emerald-200/80 font-medium">Delivery &gt;Rs 800</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-brand-yellow-bright font-display font-black text-xl sm:text-2xl">
                  <span>3:00 AM</span>
                </div>
                <span className="text-xs text-emerald-200/80 font-medium">Open 12 PM - 3 AM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Kinetic Signature Dish Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Radial glow background frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-full p-4 sm:p-6 bg-gradient-to-tr from-brand-forest-light/60 via-brand-forest/40 to-brand-pink/20 border border-brand-yellow/30 shadow-2xl shadow-brand-forest-dark flex items-center justify-center group">
              
              {/* Outer rotating decorative dashes */}
              <div className="absolute inset-2 sm:inset-3 rounded-full border-2 border-dashed border-amber-400/30 animate-[spin_40s_linear_infinite] pointer-events-none" />

              {/* Standout Dish Card */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]">
                <SafeImage
                  src={activeDish.image}
                  alt={activeDish.title}
                  category={activeDish.category}
                  fallbackTitle={activeDish.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                {/* Floating Dish Badge */}
                <div className="absolute top-5 sm:top-7 inset-x-0 flex justify-center z-10">
                  <span className="px-3.5 py-1 rounded-full bg-brand-pink text-white font-display font-bold text-xs shadow-md border border-white/20 whitespace-nowrap">
                    {activeDish.badge}
                  </span>
                </div>

                {/* Bottom Dish Overlay Details */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-6 sm:inset-x-8 z-10 text-center">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 block truncate">
                    {activeDish.category}
                  </span>
                  <h3 className="font-display font-black text-lg sm:text-2xl text-white drop-shadow-md truncate mt-0.5">
                    {activeDish.title}
                  </h3>
                  <div className="flex items-center justify-center gap-3 mt-1.5">
                    <span className="font-display font-extrabold text-brand-yellow text-base sm:text-lg whitespace-nowrap">
                      {activeDish.price}
                    </span>
                    <span className="text-xs text-emerald-200/90 font-medium flex items-center gap-1 whitespace-nowrap">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      {activeDish.prepTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Showcase Selector Tabs */}
            <div className="w-full max-w-full overflow-x-auto no-scrollbar py-2 px-1 mt-4 flex items-center justify-start sm:justify-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-forest-dark/95 p-1.5 rounded-full border border-brand-green/40 shadow-lg shrink-0">
                {HERO_FEATURED_DISHES.map((dish, idx) => (
                  <button
                    key={dish.id}
                    onClick={() => setActiveDishIndex(idx)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      activeDishIndex === idx
                        ? "bg-brand-pink text-white shadow-md scale-105"
                        : "text-emerald-200/70 hover:text-white hover:bg-brand-forest"
                    }`}
                    aria-label={`View ${dish.title}`}
                  >
                    {dish.tabLabel}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
