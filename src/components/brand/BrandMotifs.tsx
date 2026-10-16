import React from "react";

// The authentic Five-Point Star Motif used throughout the printed menu
export function StarMotif({
  className = "w-4 h-4 text-brand-yellow",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// Celebratory Sunburst Badge for Discounts & Hero Deals
export function SunburstBadge({
  children,
  className = "bg-brand-pink text-white",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center font-display font-extrabold uppercase tracking-wider text-xs px-3 py-1.5 shadow-lg ${className}`}
      style={{
        clipPath:
          "polygon(50% 0%, 65% 10%, 82% 4%, 88% 22%, 100% 30%, 96% 48%, 100% 67%, 86% 75%, 82% 93%, 64% 90%, 50% 100%, 36% 90%, 18% 93%, 14% 75%, 0% 67%, 4% 48%, 0% 30%, 12% 22%, 18% 4%, 35% 10%)",
      }}
    >
      {children}
    </div>
  );
}

// Halal Certified Badge as printed on the menu flyer
export function HalalBadge({
  className = "w-7 h-7 sm:w-8 sm:h-8",
}: {
  className?: string;
}) {
  return (
    <div className={`relative rounded-full bg-emerald-600 border border-emerald-400 p-0.5 flex items-center justify-center text-white shadow-md shrink-0 ${className}`}>
      <span className="font-display font-black text-[9px] sm:text-[10px] tracking-tight leading-none text-center">
        حلال<br /><span className="text-[7px] tracking-normal font-bold">HALAL</span>
      </span>
    </div>
  );
}

// Playful Tomato Doodle Vector
export function TomatoDoodle({
  className = "w-6 h-6 text-brand-red",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="27" r="16" fill="currentColor" fillOpacity="0.18" />
      <path d="M24 11V5M24 11c-3-2-7-1-10 1M24 11c3-2 7-1 10 1M24 11c-1 3-2 7 0 9M24 11c1 3 2 7 0 9" />
      <circle cx="20" cy="24" r="1.5" fill="currentColor" />
      <circle cx="29" cy="28" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Playful Chili Pepper Doodle Vector
export function ChiliDoodle({
  className = "w-6 h-6 text-brand-yellow-bright",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M36 8c-2 2-6 3-10 2s-8-4-12-1c-5 4-5 13-3 19 3 7 9 12 16 12 7 0 12-5 12-12 0-8-5-16-3-20z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M36 8c2-3 4-5 7-5" strokeWidth="3" />
      <path d="M30 18c-3 5-4 11-1 15" />
    </svg>
  );
}

// Green Leaf Accent Vector
export function LeafAccent({
  className = "w-5 h-5 text-brand-green-light",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M28 4C14 4 4 14 4 28c14 0 24-10 24-24zM6.5 25.5C7.8 17.2 14.5 10 23 7.5c-4 7-9 14.5-16.5 18z" />
    </svg>
  );
}

// Brand Logo Badge: Authentic Dubai Yums Emblem
// Features the Arab Ghutra/Agal headdress wearing burger & bold branding
export function DubaiYumsLogoBadge({
  size = "default",
}: {
  size?: "small" | "default" | "large";
}) {
  const sizeClasses = {
    small: "w-9 h-9 sm:w-10 sm:h-10",
    default: "w-11 h-11 sm:w-12 sm:h-12",
    large: "w-20 h-20 sm:w-22 sm:h-22",
  }[size];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* Brand Emblem with Ghutra Burger Mascot */}
      <div
        className={`relative ${sizeClasses} rounded-full bg-gradient-to-tr from-amber-500 via-brand-yellow to-red-600 p-0.5 shadow-md shadow-black/50 ring-1 ring-amber-400/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        {/* Outer decorative dashed ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-amber-300/40" />
        
        {/* Inner solid badge with Burger + Sheikh Ghutra headdress */}
        <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center border border-amber-400/50 p-1.5 overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* White Ghutra Drapes */}
            <path
              d="M15 35 C15 15, 30 8, 50 8 C70 8, 85 15, 85 35 C88 55, 85 75, 78 85 C74 75, 75 60, 72 45 C65 25, 35 25, 28 45 C25 60, 26 75, 22 85 C15 75, 12 55, 15 35 Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            {/* Black Agal Headband Cord */}
            <path
              d="M26 24 C34 18, 66 18, 74 24"
              stroke="#0F172A"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M28 29 C36 24, 64 24, 72 29"
              stroke="#1E293B"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Burger Top Bun */}
            <path
              d="M32 40 C32 30, 68 30, 68 40 Z"
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="2"
            />
            {/* Green Lettuce Wave */}
            <path
              d="M28 43 Q35 48 42 43 Q50 48 58 43 Q65 48 72 43"
              stroke="#22C55E"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Cheese Slice */}
            <polygon points="32,45 68,45 50,56" fill="#FBBF24" />
            {/* Meat Patty */}
            <rect x="30" y="49" width="40" height="7" rx="3.5" fill="#78350F" />
            {/* Bottom Bun */}
            <path
              d="M32 58 C32 65, 68 65, 68 58 Z"
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark & Taglines */}
      <div className="flex flex-col min-w-0 justify-center">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-brand-yellow-bright group-hover:text-amber-300 transition-colors leading-none">
            DUBAI
          </span>
          <span className="px-2 py-0.5 rounded-full bg-red-600 font-display font-black text-[10px] sm:text-[11px] tracking-wider text-white lowercase shadow-sm inline-flex items-center justify-center leading-none self-center shrink-0 border border-white/20">
            yums
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-xs font-bold text-amber-300/90 tracking-wide leading-none">
          <StarMotif className="w-2.5 h-2.5 text-brand-yellow shrink-0" />
          <span className="truncate">New Taste In Town • Kasur</span>
          <StarMotif className="w-2.5 h-2.5 text-brand-yellow shrink-0" />
        </div>
      </div>
    </div>
  );
}

// Backward-compatible alias for any components importing SalatoLogoBadge
export const SalatoLogoBadge = DubaiYumsLogoBadge;
