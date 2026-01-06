"use client";

import Image from "next/image";
import { COMPANY, FOOTER, SOCIAL_LINKS } from "@/lib/constants";
import { THEME } from "@/lib/constants/theme";
import { scrollToSection } from "@/lib/utils/helpers";

export function Footer() {
  const socialLinksArray = Object.values(SOCIAL_LINKS);

  return (
    <footer className="border-t border-white/5 backdrop-blur-md bg-white/5">
      <div
        className={`${THEME.spacing.container} ${THEME.spacing.section.px} py-12`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={COMPANY.logo}
                alt={COMPANY.name}
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="text-lg font-semibold">{COMPANY.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {COMPANY.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinksArray.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-accent/10 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {FOOTER.services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {COMPANY.year} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
