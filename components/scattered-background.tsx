"use client";

import { useEffect, useState } from "react";

export function ScatteredBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
      {/* Top-left radial glow - Subtle ambient light */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[110px] opacity-[0.08] dark:opacity-[0.14]"
        style={{ background: 'var(--gradient-blue)' }}
      />

      {/* Top-right radial glow */}
      <div
        className="absolute top-[8%] right-[-15%] w-[35%] h-[35%] rounded-full blur-[100px] opacity-[0.06] dark:opacity-[0.12]"
        style={{ background: 'var(--gradient-blue)' }}
      />

      {/* Center radial glow */}
      <div
        className="absolute top-[38%] left-[28%] w-[35%] h-[35%] rounded-full blur-[130px] opacity-[0.05] dark:opacity-[0.10]"
        style={{ background: 'var(--gradient-blue)' }}
      />

      {/* Bottom-left radial glow */}
      <div
        className="absolute bottom-[-20%] left-[-2%] w-[45%] h-[45%] rounded-full blur-[120px] opacity-[0.07] dark:opacity-[0.13]"
        style={{ background: 'var(--gradient-blue)' }}
      />

      {/* Bottom-right radial glow */}
      <div
        className="absolute bottom-[8%] right-[-10%] w-[30%] h-[30%] rounded-full blur-[105px] opacity-[0.06] dark:opacity-[0.11]"
        style={{ background: 'var(--gradient-blue)' }}
      />
    </div>
  );
}
