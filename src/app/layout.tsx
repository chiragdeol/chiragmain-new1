import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'Chirag Deol – Crafting Digital Excellence That Converts',
  description: 'Chirag Deol is a full-stack digital expert specializing in WordPress development, e-commerce, real estate websites, social media marketing, and graphic design. 6+ years of excellence, 70+ projects delivered.',
  keywords: 'Chirag Deol, WordPress Developer, E-commerce Development, Real Estate Website, Social Media Marketing, Graphic Design, Web Developer India',
  authors: [{ name: 'Chirag Deol', url: 'https://chiragdeol.in' }],
  creator: 'Chirag Deol',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chiragdeol.in',
    title: 'Chirag Deol – Crafting Digital Excellence That Converts',
    description: 'Your trusted partner in building powerful, conversion-focused digital solutions that drive real business growth and measurable results.',
    siteName: 'Chirag Deol',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_18b28d353-1763296386509.png",
      width: 1200,
      height: 630,
      alt: 'Chirag Deol - Digital Excellence'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chirag Deol – Crafting Digital Excellence That Converts',
    description: 'Your trusted partner in building powerful, conversion-focused digital solutions.',
    creator: '@chiragdeol'
  },
  icons: {
    icon: [
    { url: '/favicon.ico', type: 'image/x-icon' }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet" />
        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fchiragmain2693back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </head>
      <body>{children}</body>
    </html>
  );
}
