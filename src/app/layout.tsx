import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = "https://www.ayhanuzundal.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayhan Uzundal | Technology Business Leader · Huawei Enterprise · MBA · PMP",
    template: "%s | Ayhan Uzundal",
  },
  description:
    "Ayhan Uzundal bridges business and technology. Senior Key Account Manager at Huawei Enterprise, former Software Engineering Manager, Founder of AfterArtificial. Enterprise ICT, AI, cloud, and digital transformation.",
  keywords: [
    "Ayhan Uzundal",
    "Technology Business Leader",
    "Huawei Enterprise",
    "Key Account Manager",
    "Engineering Manager",
    "MBA",
    "PMP",
    "Digital Transformation",
    "Artificial Intelligence",
    "Enterprise ICT",
    "AfterArtificial",
    "Istanbul",
  ],
  authors: [{ name: "Ayhan Uzundal", url: siteUrl }],
  creator: "Ayhan Uzundal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ayhan Uzundal",
    title: "Ayhan Uzundal | I bridge business and technology.",
    description:
      "Senior Key Account Manager at Huawei Enterprise. Former Software Engineering Manager. Founder of AfterArtificial.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ayhan Uzundal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayhan Uzundal | Technology Business Leader",
    description: "I bridge business and technology.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
