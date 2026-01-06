import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ScatteredBackground } from "@/components/scattered-background";
import { AiNodesSideMargins } from "@/components/ai-nodes-margin";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOVIZCO INFOTECH - Technology Solutions & Innovation",
  description:
    "Leading technology services company in India specializing in Web & Mobile App Development, Flutter, UI/UX Design, AI Labs, and Cloud Solutions",
  generator: "v0.app",
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
          {children}
          {/* <AiNodesSideMargins />
          <div className="lg:px-20">{children}</div> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
