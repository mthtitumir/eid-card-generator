import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Get Your Eid Card - Personalized Eid Greetings",
  description: "Create and share beautifully designed personalized Eid cards with your loved ones. Choose from stunning templates and make this Eid special.",
  keywords: [
    "Eid card",
    "personalized Eid card",
    "Eid greetings",
    "Eid Mubarak card",
    "custom Eid card",
    "Islamic greeting card",
    "Eid celebration",
    "free Eid card maker",
    "send Eid wishes",
    "digital Eid card",
    "Eid card online",
    "beautiful Eid cards",
    "handmade Eid card",
    "Eid gift ideas",
    "Eid messages",
    "Islamic festival cards",
    "create Eid card",
    "best Eid card designs",
    "modern Eid cards",
    "minimalist Eid cards",
    "Eid wishes generator",
    "animated Eid card",
    "Eid greeting card maker",
    "Islamic holiday cards",
    "Ramadan Eid cards",
    "Eid card customization",
    "unique Eid cards",
    "Eid cards for friends",
    "Eid invitation card",
    "Eid Mubarak wishes",
    "printable Eid cards",
    "Eid card templates",
    "DIY Eid cards",
    "Islamic art Eid cards",
    "Eid calligraphy cards",
    "virtual Eid greetings",
    "luxury Eid cards",
    "stylish Eid cards",
    "customized Eid wishes",
    "quick Eid card maker",
    "free Islamic greeting cards",
    "eco-friendly Eid cards",
    "hand-drawn Eid cards",
    "Arabic Eid cards",
    "photo Eid cards",
    "personalized Islamic cards",
    "Eid eCards",
    "premium Eid card designs",
    "Eid greetings with name",
    "Eid celebration ideas",
    "best Eid card maker online",
    "exclusive Eid cards",
    "artistic Eid greeting cards",
  ],
  authors: [{ name: "M. T. H. Titumir", url: "https://mth-titumir.vercel.app/" }],
  creator: "M. T. H. Titumir",
  publisher: "M. T. H. Titumir",
  applicationName: "Eid Card Maker",
  generator: "Next.js",
  robots: "index, follow",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://mth-titumir.vercel.app/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
