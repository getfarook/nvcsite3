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

  // Calculate section boundaries dynamically
  const sectionBoundaries = sections.reduce(
    (acc, section, index) => {
      const prevEnd = index > 0 ? acc[index - 1].end : 0;
      return [
        ...acc,
        {
          start: prevEnd,
          end: prevEnd + section.text.length,
          speed: section.speed,
        },
      ];
    },
    [] as Array<{ start: number; end: number; speed: number }>,
  );

  // Calculate scroll time needed for each section (length / speed)
  const sectionTimes = sectionBoundaries.map(
    (boundary) => (boundary.end - boundary.start) / boundary.speed,
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

  // Split text into words while preserving spaces
  const words = text.split(/(\s+)/);

  // Calculate character index offset for each word
  let charOffset = 0;
  const wordsWithOffsets = words.map((word) => {
    const offset = charOffset;
    charOffset += word.length;
    return { word, offset };
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
          <p className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            {wordsWithOffsets.map(({ word, offset }, wordIndex) => {
              // Check if this is a whitespace-only segment
              const isWhitespace = /^\s+$/.test(word);

              if (isWhitespace) {
                // Render spaces as regular inline elements
                return (
                  <span key={`space-${wordIndex}`}>
                    {word.split("").map((char, i) => {
                      const charIndex = offset + i;
                      let revealProgress = 0;

                      const sectionIndex = sectionBoundaries.findIndex(
                        (boundary) =>
                          charIndex >= boundary.start &&
                          charIndex < boundary.end,
                      );

                      if (sectionIndex !== -1) {
                        const boundary = sectionBoundaries[sectionIndex];
                        const range = scrollRanges[sectionIndex];
                        const charIndexInSection = charIndex - boundary.start;
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
                          key={`${charIndex}`}
                          className="inline transition-all ease-out"
                          style={{
                            color: `rgba(var(--scroll-text-rgb), ${opacity})`,
                            transitionDuration: `${SCROLL_REVEAL.transitionDuration}ms`,
                          }}
                        >
                          {" "}
                        </span>
                      );
                    })}
                  </span>
                );
              }

              // Render word with nowrap to prevent breaking
              return (
                <span
                  key={`word-${wordIndex}`}
                  className="inline-block whitespace-nowrap"
                >
                  {word.split("").map((char, i) => {
                    const charIndex = offset + i;
                    let revealProgress = 0;

                    const sectionIndex = sectionBoundaries.findIndex(
                      (boundary) =>
                        charIndex >= boundary.start && charIndex < boundary.end,
                    );

                    if (sectionIndex !== -1) {
                      const boundary = sectionBoundaries[sectionIndex];
                      const range = scrollRanges[sectionIndex];
                      const charIndexInSection = charIndex - boundary.start;
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
                        key={`${charIndex}`}
                        className="inline-block transition-all ease-out"
                        style={{
                          color: `rgba(var(--scroll-text-rgb), ${opacity})`,
                          transitionDuration: `${SCROLL_REVEAL.transitionDuration}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
