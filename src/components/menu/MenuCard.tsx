"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { StarMotif } from "@/components/brand/BrandMotifs";
import { Plus, Flame, Check, Sparkles } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const hasSizes = Boolean(item.sizes && item.sizes.length > 0);
  const currentSize = hasSizes ? item.sizes![selectedSizeIndex] : null;
  const currentPrice = hasSizes ? currentSize!.price : item.price || 0;

  const handleAddToCart = () => {
    const cartItemId = hasSizes
      ? `${item.id}-${currentSize!.label}`
      : item.id;

    addItem({
      id: cartItemId,
      menuItemId: item.id,
      name: item.name,
      sizeLabel: currentSize?.label,
      sizeName: currentSize?.name,
      price: currentPrice,
      image: item.image,
    });

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="group relative rounded-2xl bg-brand-cream-card text-brand-dark-text border border-amber-200/60 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      
      {/* Top Media Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-forest-dark/10">
        <SafeImage
          src={item.image}
          alt={item.name}
          category={item.category}
          fallbackTitle={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Gradient shadow overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          {item.badge ? (
            <span className="px-2.5 py-1 rounded-full bg-brand-pink text-white font-display font-extrabold text-[11px] shadow-md tracking-wide uppercase">
              {item.badge}
            </span>
          ) : item.isPopular ? (
            <span className="px-2.5 py-1 rounded-full bg-brand-yellow text-brand-dark-text font-display font-extrabold text-[11px] shadow-md tracking-wide uppercase flex items-center gap-1">
              <StarMotif className="w-3 h-3 text-brand-dark-text" />
              Popular
            </span>
          ) : <div />}

          <div className="flex items-center gap-1">
            {item.isSpicy && (
              <span className="p-1 rounded-full bg-red-600 text-white shadow-md" title="Spicy">
                <Flame className="w-3.5 h-3.5" />
              </span>
            )}
            {item.isVegetarian && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-md">
                Pure Veg
              </span>
            )}
          </div>
        </div>

        {/* Price tag on the image corner */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <div className="px-3 py-1 rounded-full bg-brand-forest-dark/90 backdrop-blur-md border border-brand-yellow/50 text-white shadow-lg flex items-center gap-1">
            <span className="text-[10px] font-bold text-amber-300">Rs</span>
            <span className="font-display font-black text-sm sm:text-base tracking-tight text-white transition-all">
              {currentPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Options */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Dish Title */}
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 group-hover:text-brand-green transition-colors leading-tight">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-snug line-clamp-2">
            {item.description}
          </p>


        </div>

        {/* Size Selection & Action Row */}
        <div className="mt-4 pt-3 border-t border-neutral-200/80">
          {hasSizes ? (
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                <span>Select Size:</span>
                <span className="text-brand-green font-extrabold">
                  {currentSize?.name} — Rs {currentSize?.price}
                </span>
              </div>
              
              {/* Segmented Pill Size Selector */}
              <div
                className="grid gap-1.5 bg-neutral-200/80 p-1 rounded-full"
                style={{
                  gridTemplateColumns: `repeat(${item.sizes!.length}, minmax(0, 1fr))`,
                }}
              >
                {item.sizes!.map((size, index) => {
                  const isSelected = selectedSizeIndex === index;
                  return (
                    <button
                      key={size.label}
                      type="button"
                      onClick={() => setSelectedSizeIndex(index)}
                      className={`py-1 rounded-full text-xs font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-brand-green text-white shadow-sm scale-100"
                          : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60"
                      }`}
                      aria-label={`Select ${size.name} size for Rs ${size.price}`}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-neutral-500 font-semibold mb-2">
              <span>Standard Portion</span>
              <span className="font-bold text-neutral-800">Freshly Made</span>
            </div>
          )}

          {/* Add to Basket Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-4 rounded-full font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm ${
              justAdded
                ? "bg-emerald-600 text-white"
                : "bg-brand-pink hover:bg-brand-pink-dark active:scale-95 text-white shadow-brand-pink/20"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 animate-scale" />
                <span>Added to Basket!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>
                  Add to Basket • Rs {currentPrice.toLocaleString()}
                </span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
