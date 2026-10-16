import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStrip } from "@/components/home/BrandStrip";
import { MenuSection } from "@/components/menu/MenuSection";
import { DealsSection } from "@/components/deals/DealsSection";
import { FoodGallerySection } from "@/components/home/FoodGallerySection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { OrderAndContactSection } from "@/components/order/OrderAndContactSection";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-forest-dark text-brand-cream relative selection:bg-brand-pink selection:text-white pb-16 md:pb-0">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero / Landing Viewport */}
      <HeroSection />

      {/* Brand Story & Trust Strip */}
      <BrandStrip />

      {/* Complete Full Menu with Category Filters & Size Selectors */}
      <MenuSection />

      {/* Numbered Deals & Jumbo Family Hero Deal */}
      <DealsSection />

      {/* Visual Food Showcase & Sizzling Gallery */}
      <FoodGallerySection />

      {/* Verified Google Customer Reviews & Ratings */}
      <ReviewsSection />

      {/* Order, Delivery, Direct Call & Interactive Map Section */}
      <OrderAndContactSection />

      {/* Brand Footer */}
      <Footer />

      {/* Slide-over Order Basket / WhatsApp Checkout Drawer */}
      <CartDrawer />

      {/* Mobile-First Sticky Action Bar */}
      <StickyMobileActionBar />
    </main>
  );
}
