"use client";

import React, { useState, useMemo } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/menuData";
import { MenuCard } from "@/components/menu/MenuCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif } from "@/components/brand/BrandMotifs";
import {
  Search,
  Flame,
  Star,
  Sparkles,
  SlidersHorizontal,
  X,
  UtensilsCrossed,
} from "lucide-react";

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<"all" | "spicy" | "popular" | "veg">("all");

  // Filtering items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      // Dietary / preference filter
      if (activeFilter === "spicy" && !item.isSpicy) return false;
      if (activeFilter === "popular" && !item.isPopular) return false;
      if (activeFilter === "veg" && !item.isVegetarian) return false;

      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCat;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, activeFilter]);

  return (
    <section id="menu" className="relative py-16 sm:py-24 bg-brand-forest-dark" aria-label="Restaurant Menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Crafted Fresh in Kasur"
          title="Explore Our"
          highlight="Complete Menu"
          subtitle="All items transcribed directly from our authentic kitchen menu. Select your favorite size and add directly to your WhatsApp order basket."
        />

        {/* Search & Filter Toolbar */}
        <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-300/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes... e.g. 1 Meter Pizza, Tikka, Zinger, Shawarma, Wings, Fries"
              className="w-full pl-11 pr-10 py-3 rounded-full bg-brand-forest/70 border border-brand-green/40 text-white placeholder-emerald-200/50 text-sm focus:border-amber-400 focus:bg-brand-forest transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-300 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Dietary Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar shrink-0">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-brand-yellow text-brand-dark-text shadow-md font-extrabold"
                  : "bg-brand-forest/60 text-emerald-200 border border-brand-green/40 hover:bg-brand-forest"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveFilter("popular")}
              className={`px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1 transition-all cursor-pointer ${
                activeFilter === "popular"
                  ? "bg-brand-pink text-white shadow-md font-extrabold"
                  : "bg-brand-forest/60 text-emerald-200 border border-brand-green/40 hover:bg-brand-forest"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Bestsellers</span>
            </button>
            <button
              onClick={() => setActiveFilter("spicy")}
              className={`px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1 transition-all cursor-pointer ${
                activeFilter === "spicy"
                  ? "bg-red-600 text-white shadow-md font-extrabold"
                  : "bg-brand-forest/60 text-emerald-200 border border-brand-green/40 hover:bg-brand-forest"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Spicy</span>
            </button>
            <button
              onClick={() => setActiveFilter("veg")}
              className={`px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === "veg"
                  ? "bg-emerald-600 text-white shadow-md font-extrabold"
                  : "bg-brand-forest/60 text-emerald-200 border border-brand-green/40 hover:bg-brand-forest"
              }`}
            >
              Veg Only
            </button>
          </div>
        </div>

        {/* Sticky Horizontally-Scrollable Category Filter Bar */}
        <div className="sticky top-[64px] sm:top-[72px] z-30 -mx-4 px-4 sm:mx-0 sm:px-0 py-4 bg-brand-forest-dark/95 backdrop-blur-md border-b border-brand-green/30 mt-6 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {MENU_CATEGORIES.map((cat) => {
              if (cat.id === "deals") {
                return (
                  <a
                    key={cat.id}
                    href="#deals"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full font-display font-extrabold text-xs whitespace-nowrap bg-gradient-to-r from-amber-400 to-brand-yellow text-brand-dark-text shadow-md hover:scale-105 transition-all shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-red-600 text-[10px] text-white">
                      Hot
                    </span>
                  </a>
                );
              }

              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/30 scale-102 border-transparent"
                      : "bg-brand-forest/70 text-emerald-100 hover:text-white border border-brand-green/40 hover:bg-brand-forest"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Result Count & Active Header */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-brand-green/20">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-4 h-4 text-amber-400" />
            <span className="font-display font-extrabold text-sm sm:text-base text-white">
              Showing {filteredItems.length} {filteredItems.length === 1 ? "Dish" : "Dishes"}
            </span>
          </div>

          {(searchQuery || activeFilter !== "all" || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
                setSelectedCategory("all");
              }}
              className="text-xs text-amber-300 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-brand-forest/40 border border-brand-green/30 max-w-md mx-auto">
            <UtensilsCrossed className="w-12 h-12 text-amber-400 mx-auto mb-3 opacity-60" />
            <h3 className="font-display font-bold text-lg text-white">No dishes found</h3>
            <p className="text-xs text-emerald-200/70 mt-1">
              Try adjusting your search or filtering by a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-brand-yellow text-brand-dark-text font-bold text-xs cursor-pointer"
            >
              View Full Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
