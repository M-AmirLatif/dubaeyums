"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";
import { Phone, MessageSquare, ShoppingBag } from "lucide-react";

export function StickyMobileActionBar() {
  const { totalCount, subtotal, setIsOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 max-w-md mx-auto z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="rounded-full bg-brand-forest-dark/95 border border-brand-green/60 shadow-2xl shadow-black/80 backdrop-blur-xl p-1.5 flex items-center justify-between gap-1.5">
        
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-brand-forest-light/90 hover:bg-brand-forest-light text-amber-300 font-display font-bold text-xs border border-amber-400/30 transition-transform active:scale-95"
          aria-label="Direct Phone Call to Dubai Yums"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            "Assalam o Alaikum! I want to order from Dubai Yums."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-display font-bold text-xs border border-emerald-500/50 shadow-md transition-transform active:scale-95"
          aria-label="Order on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Floating Cart Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-pink-dark hover:from-brand-pink-dark hover:to-brand-pink text-white font-display font-black text-xs shadow-lg shadow-brand-pink/30 cursor-pointer transition-transform active:scale-95"
          aria-label="Open Basket"
        >
          <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Basket</span>
          {totalCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-brand-yellow text-brand-dark-text text-[10px] font-black flex items-center justify-center shrink-0">
              {totalCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
