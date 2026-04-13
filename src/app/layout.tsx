import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
// import tellme_logo from '@/assets/images/tellme_logo.png'
// import Footer from "@/components/Footer";
import { openSansFont, futuraFont } from '@/assets/fonts';
// import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
// import dynamic from "next/dynamic";
// import { GoogleAnalytics } from '@next/third-parties/google';
// BetaStickySticker removed
import Script from 'next/script';

// const Navbar = dynamic(() => import('@/components/Navbar'), {
//   ssr: false
// })

export const fetchCache = 'default-no-store';

// export const revalidate = 60;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  //maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ebe8db' },
    //{ media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://anandvriddhifoundation.com'),
  title: 'Ananda Vriddhi Foundation',
  description: 'Description about the ananda vriddhi foundation.',
  keywords:
    'avf,ananda vriddhi foundation,anand,vriddhi,foundation,ngo,old age home',
  generator: 'Next.js',
  applicationName: 'Ananda Vriddhi Foundation Website',
  referrer: 'origin-when-cross-origin',

  authors: [{ name: 'Shrikant Dhayaje', url: 'https://github.com/shriekdj' }],
  creator: 'Indiacom And Tellme Digiinfotech Web Development Team 2024',
  publisher: 'Tellme Digiinfotech Private Limited',
  verification: {
    google: 'MADLuVkcInOiiDAbHG4SFJ-guy-7VLOXWgKSqRz4gMM',
    // google: 'z-6w4swAqLN2x43xos67AMnpmPe2ilYVVNo9a5oRzLw',
    // yandex: 'b58b4822f9b89f2b',
    // <meta name="rating" key='rating' content="General" />
    // <meta name="Audience" key='Audience' content="General" />
    // <meta name="Language" key='Language' content="us-en" />
    // <meta name="distribution" key='distribution' content="global" />
    // <meta name="classification" key='classification' content="Business And Industry" />
    // <meta name="apple-mobile-web-app-capable" key='apple-mobile-web-app-capable' content="yes" />
    other: {
      rating: 'General',
      Audience: 'General',
      Language: 'us-en',
      distribution: 'global',
      classification: 'Business And Industry',
      'apple-mobile-web-app-capable': 'yes',
    },
  },
  manifest: '/images/site.webmanifest',
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Ananda Vriddhi Foundation',
    description:
      'Discover and connect with local businesses in your area. Your ultimate source for reliable services and productws.',
    siteName: 'Tellme 360 Mediahub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ananda Vriddhi Foundation',
    description: 'Description about the ananda vriddhi foundation.',
    creator: '@TeamIndiacom',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appLinks: {
    web: {
      url: 'https://tellme360mediahub.com',
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D8J1QF4TNM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D8J1QF4TNM');
          `}
        </Script>
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`w-full bg-background ${openSansFont.variable} ${futuraFont.variable}`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
