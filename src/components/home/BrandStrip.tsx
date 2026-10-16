import React from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { StarMotif, SunburstBadge, TomatoDoodle, ChiliDoodle } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  Clock,
  Bike,
  Sparkles,
  ShieldCheck,
  Award,
  HeartHandshake,
  MapPin,
  Star,
} from "lucide-react";

export function BrandStrip() {
  const trustPillars = [
    {
      icon: Clock,
      title: "Open Daily Till 3:00 AM",
      desc: "Kasur's late-night hunger hero. Freshly baked pizzas, loaded fries & sizzling burgers whenever cravings hit from 12 PM to 3 AM.",
      badge: "Midnight Savior",
      color: "border-amber-400/40 text-amber-300",
    },
    {
      icon: Bike,
      title: "Free Delivery over Rs 800",
      desc: "Contact for fast temperature-insulated home delivery across Railway Road and Kasur neighborhoods on orders Rs 800+.",
      badge: "Fast & Hot",
      color: "border-emerald-400/40 text-emerald-300",
    },
    {
      icon: ShieldCheck,
      title: "1 Meter Pizza Pioneers",
      desc: "1st time in Kasur! Savor our massive 1-meter party pizzas, handcrafted dough, and authentic desi spice marinades.",
      badge: "1st in Kasur",
      color: "border-brand-pink/40 text-pink-300",
    },
    {
      icon: Award,
      title: "3.8★ Google Rating (Verified)",
      desc: "Beloved by local foodies for generous cheese, crispy zinger crunch, friendly service, and unbeatable value deals.",
      badge: "Trusted Quality",
      color: "border-yellow-400/40 text-yellow-300",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-brand-forest-dark border-y border-brand-green/30 overflow-hidden"
      aria-label="About Dubai Yums"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-pink/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Story Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-forest/90 via-brand-forest-card/90 to-brand-forest/70 border border-brand-green/50 p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden mb-16">
          
          {/* Subtle watermark logo pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none">
            <span className="font-display font-black text-[150px] sm:text-[180px] leading-none text-white">
              DUBAI YUMS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest-light/60 border border-amber-400/30">
                <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                <span className="font-display font-extrabold text-xs uppercase tracking-wider text-amber-300">
                  New Taste In Town • Kasur
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Authentic Taste, Handcrafted With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-brand-yellow to-brand-pink">
                  Unmatched Passion.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                Located <strong className="text-amber-300 font-bold">Darbar Baba Bulleh Shah (1st Floor Punjab Mobile, Railway Road, Kasur)</strong>, Dubai Yums brings an electrifying Dubai-themed culinary revolution to our historic city with the 1st One-Meter Party Pizza, smoky grill burgers, and golden shawarma rolls.
              </p>

              <p className="text-base text-emerald-100/80 leading-relaxed">
                Whether you&apos;re sharing Deal 5 (1 Meter Pizza Feast) with the whole family, hanging out with friends, or satisfying a 2:30 AM craving, our open kitchen uses 100% Halal meats, fresh hand-tossed dough, and premium mozzarella.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-forest-dark/80 border border-brand-green/40">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-emerald-200">
                    Darbar Baba Bulleh Shah, Railway Road Kasur
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-forest-dark/80 border border-brand-green/40">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-emerald-200">
                    12:00 PM – 3:00 AM (7 Days a Week)
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Photo Collage on the Right */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-brand-yellow/30 shadow-2xl bg-brand-forest-dark">
                <SafeImage
                  src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=900&auto=format&fit=crop&q=80"
                  alt="Dubai Yums 1 Meter Pizza in Kasur"
                  category="pizza"
                  fallbackTitle="Dubai Yums 1 Meter Pizza"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-amber-300 block">Kasur 1st Time</span>
                    <p className="text-sm font-display font-black text-white truncate">1 Meter Party Pizza Series</p>
                  </div>
                  <SunburstBadge className="bg-brand-pink text-white text-[10px] shrink-0">
                    HOT & CHEESY
                  </SunburstBadge>
                </div>
              </div>

              {/* Verified Google Reviews Trust Card - Full Width Symmetrical Alignment */}
              <div className="w-full mt-4 rounded-2xl bg-gradient-to-r from-brand-forest-dark via-brand-forest to-brand-forest-dark border border-brand-green/60 p-3 sm:p-3.5 px-3.5 sm:px-5 shadow-xl backdrop-blur-md flex items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  {/* Rating Score Badge */}
                  <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-brand-dark-text font-display font-black text-xs sm:text-base shadow-sm shrink-0">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-brand-dark-text" />
                    <span>3.8</span>
                  </div>

                  {/* Stars & Label */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] sm:text-xs font-display font-bold text-white block truncate whitespace-nowrap">
                      <span className="sm:hidden">6 Google Reviews</span>
                      <span className="hidden sm:inline">6 Verified Google Reviews</span>
                    </span>
                  </div>
                </div>

                {/* Local Verified Trust Pill */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-brand-forest-dark/80 border border-brand-green/50 text-[10px] sm:text-xs font-bold text-emerald-200 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Kasur Verified</span>
                  <span className="sm:hidden">Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl bg-brand-forest/60 border border-brand-green/40 p-6 hover:border-amber-400/50 hover:bg-brand-forest-light/50 transition-all duration-300 flex flex-col justify-between hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-brand-forest-dark/80 border border-brand-green/40 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-forest-dark border border-brand-green/40 text-[10px] font-bold text-amber-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
