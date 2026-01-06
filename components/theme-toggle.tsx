"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300"
        aria-label="Toggle theme"
      >
        <div className="h-4 w-4" />
      </Button>
    );
  }

  // Cycle through: system → light → dark → system
  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getLabel = () => {
    if (theme === "system") return "Following system";
    if (theme === "light") return "Light mode";
    return "Dark mode";
  };

  const getNextLabel = () => {
    if (theme === "system") return "Switch to light mode";
    if (theme === "light") return "Switch to dark mode";
    return "Switch to system mode";
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="h-9 w-9 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 group relative overflow-hidden"
      aria-label={getNextLabel()}
      title={getLabel()}
    >
      {/* Monitor icon - visible in system mode */}
      <Monitor
        className={`h-4 w-4 absolute transition-all duration-500 ease-in-out ${
          theme === "system"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      {/* Sun icon - visible in light mode */}
      <Sun
        className={`h-4 w-4 absolute transition-all duration-500 ease-in-out ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
      {/* Moon icon - visible in dark mode */}
      <Moon
        className={`h-4 w-4 absolute transition-all duration-500 ease-in-out ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
