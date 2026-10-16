import React from "react";
import { StarMotif } from "@/components/brand/BrandMotifs";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest-light/60 border border-brand-green/40 shadow-sm mb-3">
          <StarMotif className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
          <span className="font-display font-bold text-xs uppercase tracking-wider text-amber-300">
            {eyebrow}
          </span>
          <StarMotif className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
        </div>
      )}

      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-amber-300 to-brand-pink">
            {highlight}
            <span
              className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-brand-yellow to-brand-pink rounded-full opacity-70"
              aria-hidden="true"
            />
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
