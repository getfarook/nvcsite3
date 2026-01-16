import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ScatteredBackground } from "@/components/scattered-background";
import { NeuralNetworkSideMargins } from "@/components/neural-network-margin";
import { ThemeProvider } from "@/components/theme-provider";
import WelcomePopup from "@/components/welcome-popup";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://novizco.com"),
  title: {
    default: "NOVIZCO INFOTECH - Technology Solutions & Innovation",
    template: "%s | NOVIZCO INFOTECH",
  },
  description:
    "Leading technology services company in India specializing in Web & Mobile App Development, Flutter, UI/UX Design, AI Labs, and Cloud Solutions.",
  keywords: [
    "Technology Solutions",
    "Web Development",
    "Mobile App Development",
    "Flutter Development",
    "UI/UX Design",
    "AI Labs",
    "Cloud Solutions",
    "Novizco Infotech",
    "India",
  ],
  authors: [{ name: "Novizco Infotech" }],
  creator: "Novizco Infotech",
  publisher: "Novizco Infotech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "NOVIZCO INFOTECH - Technology Solutions & Innovation",
    description:
      "Leading technology services company in India specializing in Web & Mobile App Development, Flutter, UI/UX Design, AI Labs, and Cloud Solutions.",
    url: "https://novizco.com",
    siteName: "NOVIZCO INFOTECH",
    images: [
      {
        url: "/og-image.png", // Ensure you have a default OG image
        width: 1200,
        height: 630,
        alt: "NOVIZCO INFOTECH",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVIZCO INFOTECH",
    description:
      "Leading technology services company in India specializing in Web & Mobile App Development, Flutter, UI/UX Design.",
    images: ["/og-image.png"], // Reuse OG image or specific twitter image
    creator: "@novizco", // Replace with valid handle or remove
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon-light-32x32.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScatteredBackground />
          <NeuralNetworkSideMargins />
          <div className="">{children}</div>
          <WelcomePopup />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
