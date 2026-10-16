"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import { Sparkles, Eye, Flame, Heart } from "lucide-react";

const GALLERY_ITEMS = [
  {
    title: "1 Meter Party Pizza",
    category: "1st Time in Kasur",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80",
    badge: "1st in Kasur",
    tag: "Multi-Topping Party Pizza",
  },
  {
    title: "Dubai Yums Sp. Grill Burger",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    badge: "Signature Grill",
    tag: "Charcoal Grilled Fillet",
  },
  {
    title: "Wehshi Roll (2 Persons)",
    category: "Wrap & Pratha",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=900&auto=format&fit=crop&q=80",
    badge: "Monster Roll",
    tag: "Feeds 2 Persons",
  },
  {
    title: "Special Cheese Loaded Fries",
    category: "Fries & Sides",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=900&auto=format&fit=crop&q=80",
    badge: "Molten Cheddar",
    tag: "Seasoned Chicken & Jalapeños",
  },
  {
    title: "Sizzling Hot Wings (10 pcs)",
    category: "Starters & Wings",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=900&auto=format&fit=crop&q=80",
    badge: "Fiery Buffalo",
    tag: "10 Pcs Crispy Wings",
  },
  {
    title: "Dubai Yums Sp. Baked Pasta",
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&auto=format&fit=crop&q=80",
    badge: "House Special",
    tag: "Overloaded Mozzarella Melt",
  },
];

export function FoodGallerySection() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30" aria-label="Food Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Visual Feast"
          title="From Our"
          highlight="Sizzling Kitchen"
          subtitle="Real, mouthwatering snapshots of what awaits your plate Oppt. Bhullay Shah Darbar, Railway Road Kasur. Fresh ingredients, high heat, and uncompromising taste."
        />

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-brand-green/40 shadow-xl hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                category={item.category}
                fallbackTitle={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-brand-pink text-white font-display font-black text-xs shadow-md uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 transform transition-transform duration-300">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-display font-black text-xl text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-emerald-200/80 mt-0.5 font-medium">
                  {item.tag}
                </p>
              </div>

              {/* Subtle hover icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
