import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Agentation } from "agentation";
import { RouteScrollHandler } from "@/components/navigation/RouteScrollHandler";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Next.js Viewport export — also emits <meta name="viewport"> with viewport-fit=cover
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFD63" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mge-events.com"),
  title: "MGE — Marshall & The Gypsies | The Mother of Nightlife",
  description:
    "Marshall & The Gypsies (M&G) is a premier, full-service entertainment powerhouse and lifestyle institution setting the tempo for modern nightlife.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MGE",
  },
  icons: {
    icon: [
      { url: "/images/mge-logo.jpeg", href: "/images/mge-logo.jpeg" },
      { url: "/favicon.ico", href: "/favicon.ico" },
    ],
    shortcut: "/images/mge-logo.jpeg",
    apple: "/images/mge-logo.jpeg",
  },
  openGraph: {
    title: "MGE — Marshall & The Gypsies | The Mother of Nightlife",
    description:
      "Premier, full-service entertainment powerhouse and lifestyle institution setting the tempo for modern nightlife.",
    url: "https://mge-events.com",
    siteName: "MGE Entertainment",
    images: [
      {
        url: "/images/mge-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "MGE — Marshall & The Gypsies Brand Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGE — Marshall & The Gypsies | The Mother of Nightlife",
    description:
      "Premier, full-service entertainment powerhouse and lifestyle institution setting the tempo for modern nightlife.",
    images: ["/images/mge-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          apple-mobile-web-app-status-bar-style: makes the iOS status bar transparent
          so the page background renders behind the Dynamic Island.
          (The viewport meta with viewport-fit=cover is emitted by Next.js's Viewport export above.)
        */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <RouteScrollHandler />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
