import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Rini Rahmadani",
    description: "Senior trainer, handwriting analyst, konselor psikologi, hypnotherapist, Human Resources",
    url: 'https://metayearly.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://metayearly.vercel.app/',
        width: 800,
        height: 600,
      },
      {
        url: 'https://metayearly.vercel.app/',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
