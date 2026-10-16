"use client";

import React, { useState, useEffect } from "react";
import { DubaiYumsLogoBadge, StarMotif } from "@/components/brand/BrandMotifs";
import { useCart } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  ShoppingBag,
  Phone,
  Clock,
  Menu as MenuIcon,
  X,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalCount, subtotal, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Deals", href: "#deals", badge: "Hot" },
    { label: "Story", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-forest-dark/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-brand-green/30 py-2.5 sm:py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl min-w-0 outline-none"
            aria-label="Dubai Yums Homepage"
          >
            <DubaiYumsLogoBadge size={isScrolled ? "small" : "default"} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-brand-forest-dark/80 border border-brand-green/40 px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap relative px-3 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold text-emerald-100 hover:text-white transition-all rounded-full hover:bg-brand-green/30 flex items-center gap-1.5 group shrink-0"
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.2 rounded-full bg-brand-pink text-[9px] xl:text-[10px] font-extrabold text-white tracking-wider animate-pulse shrink-0">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Open Status Badge */}
            <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-semibold text-emerald-300 whitespace-nowrap">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Open till 3 AM</span>
            </div>

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest-light/60 hover:bg-brand-forest-light text-xs font-bold text-amber-300 border border-amber-400/30 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-pink-dark hover:from-brand-pink-dark hover:to-brand-pink text-white font-display font-bold text-xs sm:text-sm shadow-lg shadow-brand-pink/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label={`View Basket with ${totalCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Basket</span>
              {totalCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-black bg-brand-yellow text-brand-dark-text rounded-full shadow-inner animate-bounce">
                  {totalCount}
                </span>
              )}
              {totalCount > 0 && subtotal > 0 && (
                <span className="hidden md:inline font-mono font-semibold text-xs border-l border-white/20 pl-2">
                  Rs {subtotal.toLocaleString()}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-brand-forest border border-brand-green/40 text-emerald-100 hover:text-white"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-300" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-forest-dark/98 border-b border-brand-green/30 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-brand-forest/60 border border-brand-green/30">
            <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Open Daily: 12 PM – 3:00 AM</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
              🟢 LIVE
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-base font-bold text-white hover:bg-brand-green/30 transition-all border border-transparent hover:border-brand-green/30"
              >
                <span className="flex items-center gap-2">
                  <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                  {link.label}
                </span>
                {link.badge ? (
                  <span className="px-2 py-0.5 rounded-full bg-brand-pink text-[11px] font-extrabold text-white">
                    {link.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-emerald-400/50" />
                )}
              </a>
            ))}
          </div>

          {/* Quick Call Button in Mobile Menu */}
          <div className="pt-2 border-t border-brand-green/30 space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-brand-yellow text-brand-dark-text font-display font-black text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-200/70 pt-1 text-center">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
