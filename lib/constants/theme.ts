/**
 * Theme Configuration
 * Centralized theme settings for the entire application.
 * Change theme colors, gradients, and styles from this single file.
 */

export const THEME = {
  // Spacing
  spacing: {
    section: {
      py: "py-24", // Vertical padding for sections
      px: "px-4 sm:px-6 lg:px-8", // Horizontal padding
    },
    container: "max-w-7xl mx-auto",
  },

  // Border radius
  borderRadius: {
    md: "rounded-lg",
  },

  // Transitions
  transitions: {
    colors: "transition-colors duration-200",
  },

  // Typography
  typography: {
    heading: {
      h1: "text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight",
      h2: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
      h4: "text-xl font-semibold",
    },
    body: {
      large: "text-lg sm:text-xl",
    },
  },

  // Card styles
  card: {
    base: "p-6 border-border/50 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/5 group backdrop-blur-md bg-white/5",
  },

  // Button styles
  button: {
    primary:
      "bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-colors",
  },

  // Navbar styles
  navbar: {
    height: "h-16",
    background: "bg-background/10 backdrop-blur-md border-b border-white/5 supports-[backdrop-filter]:bg-background/5",
    border: "border-b border-border/40",
  },
} as const;
