/**
 * Utility Helper Functions
 * Reusable functions used across the application
 */

import { CONFIG } from "@/lib/constants";

/**
 * Smooth scroll to a section by ID
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: CONFIG.scrollBehavior });
  }
};
