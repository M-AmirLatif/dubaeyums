"use client";

import React, { useState, useEffect } from "react";

const LINE1_TEXT = "New Taste In Town.";

const PHRASES = [
  "1 Meter Pizza 1st Time in Kasur.",
  "Experience Dubai-Style Taste.",
  "Darbar Baba Bulleh Shah.",
  "Open Late Till 3:00 AM.",
];

export function TypewriterHeadline() {
  const [isMounted, setIsMounted] = useState(false);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingLine1, setIsTypingLine1] = useState(true);

  // Mark client mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Typewriter engine
  useEffect(() => {
    if (!isMounted) return;

    // Phase 1: Typing Line 1 ("New Taste In Town.")
    if (isTypingLine1) {
      if (line1.length < LINE1_TEXT.length) {
        const timeout = setTimeout(() => {
          setLine1(LINE1_TEXT.slice(0, line1.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Line 1 finished, transition to Line 2 after brief natural pause
        const timeout = setTimeout(() => {
          setIsTypingLine1(false);
        }, 220);
        return () => clearTimeout(timeout);
      }
    }

    // Phase 2: Typing / Deleting Line 2
    const currentPhrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      // Forward typing
      if (line2.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setLine2(currentPhrase.slice(0, line2.length + 1));
        }, 55);
        return () => clearTimeout(timeout);
      } else {
        // Fully typed phrase - hold for 3.8s for clear readability
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3800);
        return () => clearTimeout(timeout);
      }
    } else {
      // Backspacing
      if (line2.length > 0) {
        const timeout = setTimeout(() => {
          setLine2(line2.slice(0, -1));
        }, 28);
        return () => clearTimeout(timeout);
      } else {
        // Complete erase, move to next tagline phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }
  }, [isMounted, line1, line2, isTypingLine1, isDeleting, phraseIndex]);

  // SSR Initial Render for SEO & zero flicker
  if (!isMounted) {
    return (
      <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08]">
        {LINE1_TEXT} <br />
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-brand-yellow to-brand-pink">
          1 Meter Pizza 1st Time in Kasur.
        </span>
      </h1>
    );
  }

  return (
    <h1
      className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08] min-h-[2.2em] sm:min-h-[2.15em]"
      aria-label="New Taste In Town. 1 Meter Pizza 1st Time in Kasur."
    >
      {/* Line 1: White Bold Brand Hook */}
      <span className="text-white inline-block">
        {line1 || "\u00A0"}
      </span>

      {/* Cursor on Line 1 while typing */}
      {isTypingLine1 && (
        <span
          className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-amber-400 ml-1.5 animate-pulse align-middle shadow-[0_0_10px_rgba(251,191,36,0.9)] rounded-xs"
          aria-hidden="true"
        />
      )}

      <br />

      {/* Line 2: Radiant Gradient Animated Tagline */}
      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-brand-yellow to-brand-pink min-h-[1.1em]">
        {line2 || "\u00A0"}
      </span>

      {/* Cursor on Line 2 while typing / paused */}
      {!isTypingLine1 && (
        <span
          className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-brand-pink ml-1.5 animate-pulse align-middle shadow-[0_0_12px_rgba(255,51,102,0.95)] rounded-xs"
          aria-hidden="true"
        />
      )}
    </h1>
  );
}
