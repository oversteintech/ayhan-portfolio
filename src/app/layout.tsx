import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.ayhanuzundal.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayhan Uzundal | Founder of AfterArtificial",
    template: "%s | Ayhan Uzundal",
  },
  description:
    "Founder of AfterArtificial. Engineering leader building Super Apps on After Framework with Overstein Labs. SuperGarage flagship. 10+ years enterprise delivery across telecom, e-commerce, and mobile.",
  keywords: [
    "Ayhan Uzundal",
    "AfterArtificial",
    "After Framework",
    "Overstein Labs",
    "SuperGarage",
    "Software Engineering Manager",
    "QA Automation",
    "AI Automation",
    "HarmonyOS",
    "CI/CD",
    "Engineering Leadership",
    "Huawei",
    "Siemens",
    "Hepsiburada",
    "Istanbul",
  ],
  authors: [{ name: "Ayhan Uzundal", url: siteUrl }],
  creator: "Ayhan Uzundal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ayhan Uzundal",
    title: "Ayhan Uzundal | Founder of AfterArtificial",
    description:
      "Founder of AfterArtificial. Building Super Apps on After Framework with Overstein Labs. Flagship: SuperGarage.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ayhan Uzundal — Founder of AfterArtificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayhan Uzundal | Founder of AfterArtificial",
    description:
      "Founder of AfterArtificial · Engineering via Overstein Labs · SuperGarage",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
