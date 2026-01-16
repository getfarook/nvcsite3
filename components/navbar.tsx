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
      className={`fixed shadow-sm top-0 left-0 right-0 z-50 ${THEME.navbar.border} ${THEME.navbar.background}`}
    >
      <div className={`${THEME.spacing.container} ${THEME.spacing.section.px}`}>
        <div
          className={`flex ${THEME.navbar.height} items-center justify-between`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src={COMPANY.logo}
              alt={COMPANY.name}
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-lg font-semibold tracking-tight">
              {COMPANY.name}
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
