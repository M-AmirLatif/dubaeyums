"use client";

import React, { useEffect } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { useCart } from "@/context/CartContext";
import { StarMotif } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  X,
  Plus,
  Minus,
  Trash2,
  Bike,
  ShoppingBag,
  Utensils,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  User,
  Phone,
  FileText,
  Flame,
} from "lucide-react";

// Top bestseller quick adds shown when cart is empty
const QUICK_ADD_FAVORITES = [
  {
    id: "reg-chicken-tikka-S",
    menuItemId: "reg-chicken-tikka",
    name: "Chicken Tikka Pizza",
    sizeLabel: "S",
    sizeName: "Small",
    price: 499,
    category: "regular-pizza",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "burger-zinger",
    menuItemId: "burger-zinger",
    name: "Zinger Burger",
    price: 350,
    category: "burgers",
    badge: "Kasur Favorite",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "fries-special-cheese-loaded",
    menuItemId: "fries-special-cheese-loaded",
    name: "Special Cheese Loaded Fries",
    price: 550,
    category: "fries",
    badge: "Loaded Dip",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=80",
  },
];

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalCount,
    subtotal,
    deliveryFee,
    isFreeDelivery,
    amountNeededForFreeDelivery,
    totalPayable,
    orderType,
    setOrderType,
    customerName,
    setCustomerName,
    customerAddress,
    setCustomerAddress,
    customerPhone,
    setCustomerPhone,
    orderNotes,
    setOrderNotes,
    triggerCheckout,
  } = useCart();

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const progressPercent = Math.min(100, (subtotal / BUSINESS_INFO.minFreeDelivery) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-brand-forest-dark border-l border-brand-green/40 shadow-2xl flex flex-col justify-between text-brand-cream animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-brand-green/30 bg-brand-forest/70 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-brand-pink to-brand-pink-dark text-white shadow-md shadow-brand-pink/30 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 id="cart-title" className="font-display font-extrabold text-lg text-white leading-tight">
                    Your Food Basket
                  </h3>
                  {totalCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-brand-yellow text-brand-dark-text font-black text-[11px] leading-tight">
                      {totalCount} {totalCount === 1 ? "item" : "items"}
                    </span>
                  )}
                </div>
                <span className="text-xs text-emerald-200/80">
                  {items.length === 0 ? "Basket is currently empty" : "Delivering hot across Kasur"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-emerald-300/70 hover:text-red-400 px-2 py-1 transition-colors"
                  title="Clear all items"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-brand-forest text-emerald-200 hover:text-white transition-colors cursor-pointer border border-brand-green/30"
                aria-label="Close Basket"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Delivery Threshold Banner */}
          {orderType === "delivery" && (
            <div className="px-5 py-3 bg-brand-forest/90 border-b border-brand-green/30">
              <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                {isFreeDelivery ? (
                  <span className="text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>FREE Home Delivery Unlocked!</span>
                  </span>
                ) : (
                  <span className="text-amber-300 flex items-center gap-1">
                    <Bike className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>
                      Add <strong>Rs {amountNeededForFreeDelivery}</strong> more for FREE delivery!
                    </span>
                  </span>
                )}
                <span className="text-emerald-200/80 font-mono text-[11px]">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-brand-forest-dark overflow-hidden border border-brand-green/40">
                <div
                  className="h-full bg-gradient-to-r from-brand-yellow via-amber-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            
            {/* Empty State */}
            {items.length === 0 ? (
              <div className="space-y-6 py-2">
                
                {/* Visual Empty Banner */}
                <div className="text-center py-6 px-4 rounded-3xl bg-brand-forest/50 border border-brand-green/40 shadow-inner space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-forest-light to-brand-forest border border-amber-400/40 mx-auto flex items-center justify-center text-amber-400 shadow-lg shadow-black/40">
                    <ShoppingBag className="w-8 h-8 opacity-90 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-lg text-white">
                      Your Basket is Empty
                    </h4>
                    <p className="text-xs text-emerald-200/80 max-w-xs mx-auto mt-1 leading-relaxed">
                      Kasur&apos;s late-night favorites are ready to order. Pick a quick bestseller below or browse our 12 value deals!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      const menuEl = document.getElementById("menu");
                      if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-yellow hover:bg-amber-400 text-brand-dark-text font-display font-black text-xs shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Browse Full Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Add Bestsellers */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-xs uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      Popular Kasur Cravings (1-Tap Add)
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {QUICK_ADD_FAVORITES.map((dish) => (
                      <div
                        key={dish.id}
                        className="p-2.5 rounded-2xl bg-brand-forest/70 border border-brand-green/40 hover:border-amber-400/50 flex items-center justify-between gap-3 shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-brand-green/30">
                            <SafeImage
                              src={dish.image}
                              alt={dish.name}
                              category={dish.category}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-display font-bold text-sm text-white truncate">
                              {dish.name}
                            </h5>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="font-mono text-xs font-bold text-amber-300">
                                Rs {dish.price}
                              </span>
                              {dish.sizeName && (
                                <span className="text-[10px] text-emerald-200/70 font-semibold">
                                  ({dish.sizeName})
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            addItem({
                              id: dish.id,
                              menuItemId: dish.menuItemId,
                              name: dish.name,
                              sizeLabel: dish.sizeLabel,
                              sizeName: dish.sizeName,
                              price: dish.price,
                              image: dish.image,
                            });
                          }}
                          className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-pink hover:bg-brand-pink-dark text-white font-display font-black text-xs shadow-md transition-transform active:scale-90 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Highlights */}
                <div className="p-3.5 rounded-2xl bg-brand-forest-dark border border-brand-green/30 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Bike className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free delivery on orders over Rs 800</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Kitchen open late daily until 3:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <PhoneCall className="w-4 h-4 text-brand-pink shrink-0" />
                    <span>Direct Helpline: {BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </div>

              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="p-1 rounded-2xl bg-brand-forest-dark border border-brand-green/40 grid grid-cols-3 gap-1 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setOrderType("delivery")}
                    className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      orderType === "delivery"
                        ? "bg-brand-green text-white shadow-md font-extrabold"
                        : "text-emerald-200/70 hover:text-white"
                    }`}
                  >
                    <Bike className="w-3.5 h-3.5" />
                    <span>Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType("takeaway")}
                    className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      orderType === "takeaway"
                        ? "bg-brand-green text-white shadow-md font-extrabold"
                        : "text-emerald-200/70 hover:text-white"
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Takeaway</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType("dine-in")}
                    className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      orderType === "dine-in"
                        ? "bg-brand-green text-white shadow-md font-extrabold"
                        : "text-emerald-200/70 hover:text-white"
                    }`}
                  >
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Dine-in</span>
                  </button>
                </div>

                {/* Items in Cart */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl bg-brand-forest/70 border border-brand-green/40 shadow-md flex items-center justify-between gap-3"
                    >
                      {/* Left: Dish info & price */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-brand-green/30">
                          <SafeImage
                            src={item.image}
                            alt={item.name}
                            category={item.isDeal ? "deals" : "pizza"}
                            fallbackTitle={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-sm text-white truncate">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="font-mono text-xs font-bold text-amber-300">
                              Rs {item.price}
                            </span>
                            {item.sizeName && (
                              <span className="text-[10px] text-emerald-200/80 font-semibold px-2 py-0.5 rounded-full bg-brand-forest-dark border border-brand-green/40">
                                {item.sizeName}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right: Quantity incrementer */}
                      <div className="flex items-center gap-1.5 shrink-0 bg-brand-forest-dark p-1 rounded-full border border-brand-green/40">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-brand-forest hover:bg-brand-forest-light text-emerald-200 flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          {item.quantity === 1 ? (
                            <Trash2 className="w-3 h-3 text-red-400" />
                          ) : (
                            <Minus className="w-3 h-3" />
                          )}
                        </button>

                        <span className="font-mono text-xs font-black text-white w-5 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-brand-green hover:bg-brand-green-light text-white flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="p-3.5 rounded-2xl bg-brand-forest/60 border border-brand-green/40 space-y-2.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block">
                    Customer Information
                  </span>

                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-emerald-400/60" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your Full Name (e.g. Ali Raza)"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-brand-forest-dark border border-brand-green/40 text-xs text-white placeholder-emerald-200/50 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-emerald-400/60" />
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Phone / WhatsApp (e.g. 0311-1234567)"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-brand-forest-dark border border-brand-green/40 text-xs text-white placeholder-emerald-200/50 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  {orderType === "delivery" && (
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3 top-3 text-emerald-400/60" />
                      <textarea
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Street Address, House No, Landmark in Kasur..."
                        rows={2}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-brand-forest-dark border border-brand-green/40 text-xs text-white placeholder-emerald-200/50 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  )}

                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Special instructions (e.g. Extra sauce, mild spicy)"
                    className="w-full px-3 py-2 rounded-xl bg-brand-forest-dark border border-brand-green/40 text-xs text-white placeholder-emerald-200/50 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </>
            )}

          </div>

          {/* Footer Summary & Checkout Button */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-brand-green/30 bg-brand-forest/90 backdrop-blur-md space-y-3">
              <div className="space-y-1.5 text-xs text-emerald-200/90 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-bold text-white">Rs {subtotal.toLocaleString()}</span>
                </div>

                {orderType === "delivery" && (
                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span className="font-mono font-bold">
                      {isFreeDelivery ? (
                        <span className="text-emerald-400 uppercase font-black">Free</span>
                      ) : (
                        `Rs ${deliveryFee}`
                      )}
                    </span>
                  </div>
                )}

                <div className="pt-2 border-t border-brand-green/30 flex justify-between text-base font-display font-black text-white">
                  <span>Total Payable</span>
                  <span className="text-amber-300 font-mono text-lg">Rs {totalPayable.toLocaleString()}</span>
                </div>
              </div>

              {/* Instant WhatsApp Order Button */}
              <button
                type="button"
                onClick={triggerCheckout}
                className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-600 text-white font-display font-extrabold text-sm sm:text-base flex items-center justify-between px-6 shadow-xl shadow-emerald-950/60 hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  <span>Send WhatsApp Order</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white text-emerald-800 font-black shadow-sm">
                  Rs {totalPayable.toLocaleString()}
                </span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-emerald-200/70 pt-1">
                <span>WhatsApp: {BUSINESS_INFO.phoneFormatted}</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneSecondary}`}
                  className="text-amber-300 font-semibold hover:underline"
                >
                  Call Helpline
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
