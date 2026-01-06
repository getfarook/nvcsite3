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
      {/* Global Blue Tint - Linear Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-blue)]/5 via-transparent to-[var(--gradient-blue)]/5 opacity-40 mix-blend-overlay" />

      {/* Global Blue Glow - Radial Gradient */}
      <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] rounded-full bg-[radial-gradient(circle,var(--gradient-blue)_0%,transparent_70%)] opacity-[0.1]" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,var(--gradient-blue)_0%,transparent_70%)] opacity-[0.08]" />

      {/* Scattered Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--brand-primary)] opacity-[0.03] blur-[100px]" />
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[var(--brand-primary)] opacity-[0.04] blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[var(--brand-primary)] opacity-[0.03] blur-[120px]" />
      <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-[var(--brand-primary)] opacity-[0.02] blur-[80px]" />
      <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-[var(--brand-primary)] opacity-[0.04] blur-[100px]" />
    </div>
  );
}
