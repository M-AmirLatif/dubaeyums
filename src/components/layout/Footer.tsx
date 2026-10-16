"use client";

import React from "react";
import { DubaiYumsLogoBadge, StarMotif } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO, MENU_CATEGORIES } from "@/data/menuData";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Bike,
  Heart,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-brand-forest-dark border-t border-brand-green/40 pt-12 sm:pt-16 pb-4 sm:pb-8 text-brand-cream overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-brand-green/30">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <DubaiYumsLogoBadge size="default" />
            
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-sm leading-relaxed pt-2">
              Kasur&apos;s celebrated destination for the iconic 1-Meter Party Pizza, authentic hand-kneaded crusts, extra crispy Zingers, and midnight shawarma rolls. Bringing a brand new taste to our city.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-forest border border-brand-green/40 text-xs font-bold text-amber-300 hover:border-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-pink/20 border border-brand-pink/40 text-xs font-bold text-white hover:bg-brand-pink/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brand-pink" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-wider flex items-center gap-2">
              <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Menu Highlights</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/80 font-medium">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  1 Meter Party Pizza (Reg & Special)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Dubae Yums Special Pizza (S/M/L)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Crown Crust & Cheese Stuffed
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Zinger & Dubai Yums Sp. Grill Burger
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Wehshi Roll (2 Persons) & Shawarma
                </a>
              </li>
              <li>
                <a href="#deals" className="text-amber-300 font-bold hover:underline">
                  Deal 5: 1 Meter Feast (Rs 3,000)
                </a>
              </li>
            </ul>
          </div>

          {/* Timings & Kasur Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Kasur Operating Hours</span>
            </h4>

            <div className="p-4 rounded-2xl bg-brand-forest/60 border border-brand-green/40 space-y-2 text-xs text-emerald-100/90">
              <div className="flex justify-between font-bold">
                <span>Monday – Sunday:</span>
                <span className="text-amber-300">12:00 PM – 3:00 AM</span>
              </div>
              <p className="text-[11px] text-emerald-300/70">
                Midnight deliveries active across Kasur until 3 AM daily.
              </p>
              <div className="pt-2 border-t border-brand-green/30 flex items-center gap-2 text-emerald-300 text-[11px] font-semibold">
                <Bike className="w-3.5 h-3.5 text-amber-400" />
                <span>FREE Home Delivery on orders Rs 800+</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-emerald-200/80 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-5 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left text-xs text-emerald-300/70">
          <div className="flex items-center gap-2">
            <span>© 2026 Dubai Yums. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-pink fill-current inline" />
            <span>for Railway Road, Oppt. Bhullay Shah Darbar, Kasur, Pakistan.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
