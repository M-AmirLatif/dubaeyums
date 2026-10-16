"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { DEALS, DealItem, BUSINESS_INFO } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import {
  Sparkles,
  Users,
  Check,
  Plus,
  PhoneCall,
  Flame,
  ArrowRight,
} from "lucide-react";

export function DealsSection() {
  const { addItem } = useCart();
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const heroDeal = DEALS.find((d) => d.isHero) || DEALS[0];
  const standardDeals = DEALS.filter((d) => !d.isHero);

  const handleAddDeal = (deal: DealItem) => {
    addItem({
      id: deal.id,
      menuItemId: deal.id,
      name: `${deal.title} (Bundle)`,
      price: deal.price,
      image: deal.image,
      isDeal: true,
    });

    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1200);
  };

  return (
    <section
      id="deals"
      className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30 overflow-hidden"
      aria-label="Value Deals"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-pink/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Dubai Yums Feast Deals"
          title="Super Saver"
          highlight="Value Deals"
          subtitle="Real combos crafted directly from our printed menu flyer. 1 Meter Pizza sensation, Zinger burgers, Shawarmas, and jumbo family feasts."
        />

        {/* HERO DEAL: Deal 5 - 1 Meter Pizza Feast */}
        <div className="mt-12 mb-14 relative rounded-3xl bg-gradient-to-br from-brand-forest/95 via-brand-forest-light/70 to-brand-forest/90 border-2 border-amber-400 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-amber-500/10 overflow-hidden group">
          
          {/* Top highlight ribbons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <SunburstBadge className="bg-gradient-to-r from-red-600 to-brand-pink text-white text-xs sm:text-sm py-2 px-4 shadow-lg">
                ★ 1 METER PIZZA 1ST TIME IN KASUR
              </SunburstBadge>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                <Users className="w-3.5 h-3.5" />
                <span>Serves 5–7 Persons</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {heroDeal.originalPrice && (
                <span className="text-sm line-through text-emerald-300/60 font-semibold">
                  Rs {heroDeal.originalPrice.toLocaleString()}
                </span>
              )}
              <div className="px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-text font-display font-black text-xl sm:text-2xl shadow-lg">
                Rs {heroDeal.price.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                {heroDeal.title}
              </h3>
              
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Kasur&apos;s 1st One-Meter Pizza sensation! Everything you need for an unforgettable family feast or late-night squad hang: a massive 1-meter multi-topping party pizza baked hot with golden melted mozzarella and a chilled 1L drink.
              </p>

              {/* Bundle items list with ★ bullet markers */}
              <div className="pt-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300 block mb-2.5">
                  Package Includes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {heroDeal.items.map((itemStr, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-forest-dark/80 border border-brand-green/40 text-xs sm:text-sm font-semibold text-white"
                    >
                      <StarMotif className="w-4 h-4 text-brand-yellow shrink-0" />
                      <span>{itemStr}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => handleAddDeal(heroDeal)}
                  className={`py-3.5 px-7 rounded-full font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                    addedDealId === heroDeal.id
                      ? "bg-emerald-600 text-white"
                      : "bg-brand-pink hover:bg-brand-pink-dark text-white hover:scale-105 active:scale-95 shadow-brand-pink/30"
                  }`}
                >
                  {addedDealId === heroDeal.id ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Basket!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      <span>Add 1 Meter Deal • Rs {heroDeal.price.toLocaleString()}</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Assalam o Alaikum! I want to order the *${heroDeal.title}* (Rs ${heroDeal.price}) from Dubai Yums.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-full bg-brand-forest-light/60 hover:bg-brand-forest-light text-amber-300 font-display font-bold text-sm flex items-center justify-center gap-2 border border-amber-400/40 hover:scale-105 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl group-hover:scale-102 transition-transform duration-500">
                <SafeImage
                  src={heroDeal.image}
                  alt={heroDeal.title}
                  category="deals"
                  fallbackTitle={heroDeal.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-200">
                    Kasur 1st Time • 100% Mozzarella
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-brand-pink text-white font-black text-xs">
                    SAVE RS 500+
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section Sub-bar */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-brand-green/30">
          <div>
            <h3 className="font-display font-black text-2xl text-white">
              Numbered Deals (Deals 1 to 12)
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              Pick your favorite combo — every deal includes drinks from Cola Next!
            </p>
          </div>
        </div>

        {/* Deals 1 through 12 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardDeals.map((deal) => {
            const isAdded = addedDealId === deal.id;
            return (
              <div
                key={deal.id}
                className="group relative rounded-2xl bg-brand-cream-card text-brand-dark-text border border-amber-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Media & Badge Header */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-900">
                  <SafeImage
                    src={deal.image}
                    alt={deal.title}
                    category="deals"
                    fallbackTitle={deal.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Deal Pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-brand-pink text-white font-display font-black text-xs shadow-md">
                      DEAL {deal.dealNumber}
                    </span>
                    {deal.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-brand-forest-dark/90 backdrop-blur-md text-amber-300 font-extrabold text-[11px] border border-amber-400/40">
                        {deal.tag}
                      </span>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <div className="px-3 py-1 rounded-full bg-brand-forest-dark text-white shadow-lg flex items-center gap-1 border border-brand-yellow/50">
                      <span className="text-[10px] text-amber-300 font-bold">Rs</span>
                      <span className="font-display font-black text-base text-white">
                        {deal.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bundle Details Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-extrabold text-xl text-neutral-900">
                        {deal.title}
                      </h4>
                      {deal.serves && (
                        <span className="text-[11px] font-semibold text-neutral-500 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-neutral-400" />
                          {deal.serves}
                        </span>
                      )}
                    </div>

                    {/* Bundle Contents List */}
                    <ul className="mt-3 space-y-1.5">
                      {deal.items.map((itemStr, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 font-medium"
                        >
                          <StarMotif className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                          <span>{itemStr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add to Basket Action */}
                  <div className="pt-3 border-t border-neutral-200">
                    <button
                      type="button"
                      onClick={() => handleAddDeal(deal)}
                      className={`w-full py-2.5 px-4 rounded-full font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-brand-pink hover:bg-brand-pink-dark text-white active:scale-95"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Basket!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add Deal to Basket • Rs {deal.price.toLocaleString()}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
