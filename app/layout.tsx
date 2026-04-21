import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { getMetadataBase, getSiteUrlString } from "@/lib/site";
import "./globals.css";
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
const siteTitle =
  "4Beauty Med Spa | Miami's #1 Non-Surgical Aesthetic Center";
const siteDescription =
  "Board-certified results with zero surgery and zero downtime. Led by Harvard-trained Dr. Mendieta. Serving Miami, Coral Gables, Brickell & Coconut Grove.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: siteTitle,
  description: siteDescription,
  applicationName: "4Beauty Med Spa",
  keywords: [
    "med spa Miami",
    "non-surgical aesthetics",
    "botox Miami",
    "Sculptra Miami",
    "Morpheus8 Miami",
    "non-surgical BBL Miami",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "4Beauty Med Spa",
    url: `${getSiteUrlString()}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-brand-cream text-brand-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
