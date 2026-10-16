"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import { Star, Quote, CheckCircle2, Globe, Heart } from "lucide-react";

const REVIEWS = [
  {
    name: "Ali Abid",
    location: "Kasur",
    badge: "Verified Customer",
    dish: "1 Meter Party Pizza",
    rating: 5,
    text: "1 meter pizza teste is very good 💯 … The length, toppings, and cheese pull are fantastic for family gatherings. 1st time in Kasur and totally worth it!",
    date: "7 months ago",
  },
  {
    name: "Abid Ali",
    location: "Old City Kasur",
    badge: "Local Guide · 5 Photos",
    dish: "Dubai Yums Sp. Pizza",
    rating: 5,
    text: "New taste in town 😋 … Food: 5/5, Service: 5/5. Fresh dough, crispy crust, and amazing spice flavor. Best new spot on Railway Road.",
    date: "8 months ago",
  },
  {
    name: "Toseef Ahmad",
    location: "Kasur City",
    badge: "Local Guide · 20 Reviews",
    dish: "Web Ordering Experience",
    rating: 5,
    text: "Previously reviewed: 'They don't have a website where I can order.' Now Dubai Yums has launched this full online menu and WhatsApp ordering system! Quick, easy, and responsive.",
    date: "2 months ago",
    highlight: "Website Request Answered!",
  },
  {
    name: "Punjabmobil Mobile",
    location: "Railway Road Kasur",
    badge: "2 Reviews · 2 Photos",
    dish: "Zinger Burger & Fries",
    rating: 5,
    text: "Choosing a taste. Food: 5/5. Piping hot crispy zingers, loaded cheese fries, and great customer service on 1st Floor Punjab Mobile Railway Road.",
    date: "1 month ago",
  },
];

export function ReviewsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Local Kasur Reviews"
          title="What Our Customers"
          highlight="Are Saying"
          subtitle="3.8★ rating from verified Google reviews. Here is what Kasur food lovers say about our 1 Meter Pizza, Zingers, and fast service on Railway Road."
        />

        {/* Rating Overview Box */}
        <div className="mt-10 p-6 rounded-3xl bg-brand-forest/60 border border-brand-green/40 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-brand-yellow text-brand-dark-text flex items-center justify-center font-display font-black text-2xl shadow-lg">
              3.8
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 fill-current ${i >= 4 ? "text-amber-400/40" : "text-amber-400"}`} />
                ))}
              </div>
              <p className="text-xs font-bold text-white">Google Customer Rating</p>
              <p className="text-[11px] text-emerald-200/70">Fast Food Restaurant • Kasur, Pakistan</p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-pink text-white font-display font-bold text-xs shadow-md">
              100% Halal Certified
            </span>
            <span className="text-[11px] text-amber-300 font-semibold">
              Takeout • Dine-in • Fast Delivery
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-brand-forest/70 border border-brand-green/40 shadow-lg flex flex-col justify-between space-y-4 hover:border-amber-400/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-emerald-300/60 font-medium">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-brand-yellow/30 mb-2" />

                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>

                {rev.highlight && (
                  <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    <Globe className="w-3 h-3" />
                    <span>{rev.highlight}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-brand-green/30 flex items-center justify-between">
                <div>
                  <h5 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </h5>
                  <span className="text-[10px] text-emerald-300/70 block">{rev.badge}</span>
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-brand-forest-dark px-2 py-1 rounded-md border border-brand-green/30 shrink-0">
                  {rev.dish.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
