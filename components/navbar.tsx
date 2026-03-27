"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { COMPANY, NAVIGATION } from "@/lib/constants";
import { THEME } from "@/lib/constants/theme";
import { scrollToSection } from "@/lib/utils/helpers";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);

    if (pathname === "/" && sectionId) {
      // If on home page, scroll to section
      scrollToSection(sectionId);
    } else {
      // Navigate to page
      router.push(path);
    }
  };

  return (
    <nav
      className={`fixed shadow-sm top-0 left-0 right-0 z-50 ${THEME.navbar.border} ${THEME.navbar.background} bg-linear-to-r from-[#4ecdc4]/20 via-[#6c63ff]/10 to-white dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent`}
    >
      <div className={`${THEME.spacing.container} ${THEME.spacing.section.px}`}>
        <div
          className={`flex ${THEME.navbar.height} md:h-auto items-center justify-between py-2 md:py-3`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            {/* Mobile: 60px, Desktop: 80px */}
            <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] relative shrink-0">
              <Image
                src={COMPANY.logo}
                alt={COMPANY.name}
                fill
                className="rounded-md object-contain"
              />
            </div>
            <span className="flex flex-col" style={{ fontFamily: "SonySketch", lineHeight: 1 }}>
              <span className="text-2xl text-[#4ecdc4] tracking-widest" style={{ lineHeight: 1 }}>NOVIZCO</span>
              <span className="text-[1.140rem] text-[#4ecdc4]" style={{ lineHeight: 1, letterSpacing: "0.2em" }}>INFOTECH</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.main.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${THEME.navbar.border} ${THEME.navbar.background}`}
        >
          <div className="px-4 py-4 space-y-3">
            {NAVIGATION.main.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-foreground bg-primary/10 border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
