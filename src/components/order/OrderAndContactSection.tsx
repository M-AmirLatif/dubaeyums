"use client";

import React from "react";
import { BUSINESS_INFO } from "@/data/menuData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Bike,
  Utensils,
  ShoppingBag,
  ExternalLink,
  Navigation,
  ShieldCheck,
  Compass,
} from "lucide-react";

export function OrderAndContactSection() {
  const serviceBadges = [
    { icon: Bike, label: "Home Delivery", desc: "Free on Rs 800+" },
    { icon: ShoppingBag, label: "Takeaway", desc: "Piping hot in 15 mins" },
    { icon: Utensils, label: "Dine-in", desc: "Casual & Family Friendly" },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30"
      aria-label="Contact and Delivery Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Easy Direct Ordering"
          title="Visit Us Or"
          highlight="Order to Your Door"
          subtitle="Located Oppt. Bhullay Shah Darbar (1st Floor Punjab Mobile, Railway Road, Kasur). Call us directly or place an instant WhatsApp order. Open late every night until 3:00 AM."
        />

        {/* 3 Service Methods Banner */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {serviceBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-brand-forest/70 border border-brand-green/40 shadow-md"
              >
                <div className="p-3 rounded-xl bg-brand-forest-dark text-amber-400 border border-brand-green/40">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-white">
                    {badge.label}
                  </h4>
                  <p className="text-xs text-emerald-200/70">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Grid: Details Card & Map Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 rounded-3xl bg-brand-forest/80 border border-brand-green/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                <div>
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">
                    Quick Contacts & Info
                  </h3>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    Kasur fast delivery & takeaway inquiries
                  </p>
                </div>
                <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open Till 3:00 AM
                </span>
              </div>

              {/* Direct Call & WhatsApp Action Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {/* Primary WhatsApp / Call */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Assalam o Alaikum Dubai Yums! I want to check delivery options to my location in Kasur."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3 px-3.5 rounded-xl sm:rounded-2xl bg-brand-pink hover:bg-brand-pink-dark text-white font-display font-black text-xs sm:text-sm shadow-md shadow-brand-pink/30 hover:scale-[1.02] active:scale-[0.98] transition-all min-w-0"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-white" />
                  <div className="text-left min-w-0">
                    <span className="text-[9px] uppercase font-extrabold block text-pink-200 leading-none">WhatsApp Order</span>
                    <span className="text-[11px] sm:text-xs font-black block leading-tight mt-0.5 whitespace-nowrap">{BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </a>

                {/* Secondary Phone Helpline */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneSecondary}`}
                  className="flex items-center justify-center gap-2.5 py-3 px-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-400 to-brand-yellow text-brand-dark-text font-display font-black text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all min-w-0"
                >
                  <Phone className="w-4 h-4 text-brand-dark-text shrink-0" />
                  <div className="text-left min-w-0">
                    <span className="text-[9px] uppercase font-extrabold block opacity-80 leading-none">Helpline Call</span>
                    <span className="text-[11px] sm:text-xs font-black block leading-tight mt-0.5 whitespace-nowrap">{BUSINESS_INFO.phoneSecondaryFormatted}</span>
                  </div>
                </a>
              </div>

              {/* Delivery Conditions */}
              <div className="p-4 rounded-2xl bg-brand-forest-dark/80 border border-brand-green/40 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                  <Bike className="w-4 h-4 text-amber-400" />
                  <span>Delivery Policy in Kasur</span>
                </div>
                <ul className="text-xs sm:text-sm text-emerald-100/90 space-y-1">
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span><strong>Free Home Delivery</strong> on all orders of Rs 800 or more.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span>Minimum order for free home delivery is <strong>Rs 800/-</strong>.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span>Average Delivery Time: <strong>30–45 minutes</strong> hot in thermal insulated bags.</span>
                  </li>
                </ul>
              </div>

              {/* Address & Hours details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Restaurant Location</h5>
                    <p className="text-xs sm:text-sm text-emerald-200/80">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-[11px] text-amber-300/80 font-mono mt-0.5">
                      Plus Code: {BUSINESS_INFO.plusCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Opening Hours</h5>
                    <p className="text-xs sm:text-sm text-emerald-200/80">
                      Open Every Day: 12:00 PM – 3:00 AM (Late Night Service)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="pt-4 border-t border-brand-green/30 flex items-center justify-between text-xs text-emerald-300/80 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Dine-in, Takeout & Free Delivery (Min Rs 800)
              </span>
              <span>Price Range: Rs 60 – 3,500</span>
            </div>

          </div>

          {/* Right Stylized Interactive Map Card */}
          <div className="lg:col-span-6 rounded-3xl bg-brand-forest/60 border border-brand-green/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display font-black text-lg sm:text-xl text-white">
                    Kasur City Location
                  </h4>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    Darbar Baba Bulleh Shah, Railway Road Kasur
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-yellow/20 hover:bg-brand-yellow/30 text-amber-300 text-xs font-bold border border-amber-400/40 transition-colors whitespace-nowrap self-start sm:self-auto shrink-0 shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              {/* Embedded Interactive Styled Map Representation */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-brand-green/40 shadow-inner bg-brand-forest-dark flex items-center justify-center group">
                
                {/* Visual road map styled grid */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Road arterial line visuals */}
                <div className="absolute w-full h-3 bg-amber-400/20 top-1/2 -translate-y-1/2 rotate-[-12deg]" />
                <div className="absolute h-full w-3 bg-emerald-400/20 left-1/2 -translate-x-1/2 rotate-[25deg]" />

                {/* Central Location Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="p-3 rounded-full bg-brand-pink text-white shadow-2xl shadow-brand-pink/50 border-2 border-white">
                    <MapPin className="w-6 h-6 fill-current text-white" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-brand-forest-dark/95 border border-brand-yellow text-white text-xs font-display font-extrabold shadow-xl">
                    Dubai Yums
                  </div>
                </div>

                {/* Distance Tags */}
                <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-bold text-amber-300">
                  📍 Railway Road, Kasur
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-forest-dark/70 border border-brand-green/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Heading over for Takeaway or Dine-in?</span>
                  <span className="text-[11px] text-emerald-200/70">Call in advance to have your 1 Meter Pizza or Zinger fresh out of the oven!</span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-3.5 py-1.5 rounded-full bg-brand-green hover:bg-brand-green-light text-white text-xs font-bold shrink-0 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
