"use client";

import { useEffect, useRef, useState } from "react";
import { SCROLL_REVEAL } from "@/lib/constants";

export function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Get text sections from constants
  const sections = SCROLL_REVEAL.sections;
  const text = sections.map((s) => s.text).join("");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      const scrollDistance = containerHeight - windowHeight;
      const currentScroll = -rect.top;

      if (currentScroll >= 0 && currentScroll <= scrollDistance) {
        const progress = currentScroll / scrollDistance;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      } else if (currentScroll < 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split text into individual characters for letter-by-letter animation
  const characters = text.split("");

  // Calculate section boundaries dynamically
  const sectionBoundaries = sections.reduce((acc, section, index) => {
    const prevEnd = index > 0 ? acc[index - 1].end : 0;
    return [
      ...acc,
      {
        start: prevEnd,
        end: prevEnd + section.text.length,
        speed: section.speed,
      },
    ];
  }, [] as Array<{ start: number; end: number; speed: number }>);

  // Calculate scroll time needed for each section (length / speed)
  const sectionTimes = sectionBoundaries.map(
    (boundary) => (boundary.end - boundary.start) / boundary.speed
  );
  const totalTime = sectionTimes.reduce((sum, time) => sum + time, 0);

  // Calculate scroll progress ranges for each section
  const scrollRanges = sectionTimes.map((time, index) => {
    const prevRangesSum = sectionTimes
      .slice(0, index)
      .reduce((sum, t) => sum + t, 0);
    return {
      start: prevRangesSum / totalTime,
      end: (prevRangesSum + time) / totalTime,
    };
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-background"
      style={{ height: SCROLL_REVEAL.scrollHeight }}
    >
      {/* Sticky content */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {characters.map((char, index) => {
              // Determine which section this character belongs to
              let revealProgress = 0;

              const sectionIndex = sectionBoundaries.findIndex(
                (boundary) => index >= boundary.start && index < boundary.end
              );

              if (sectionIndex !== -1) {
                const boundary = sectionBoundaries[sectionIndex];
                const range = scrollRanges[sectionIndex];

                const charIndexInSection = index - boundary.start;
                const sectionLength = boundary.end - boundary.start;
                const charProgressInSection =
                  (charIndexInSection + 1) / sectionLength;

                revealProgress =
                  range.start +
                  charProgressInSection * (range.end - range.start);
              }

              const isRevealed = scrollProgress >= revealProgress;
              const opacity = isRevealed
                ? SCROLL_REVEAL.revealOpacity.revealed
                : SCROLL_REVEAL.revealOpacity.hidden;

              return (
                <span
                  key={index}
                  className="inline-block transition-all ease-out"
                  style={{
                    color: `rgba(var(--scroll-text-rgb), ${opacity})`,
                    transitionDuration: `${SCROLL_REVEAL.transitionDuration}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
