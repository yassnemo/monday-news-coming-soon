import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PageTransition } from "@/components/PageTransition"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const miguerSans = localFont({
  src: "./assets/font/Miguer-Sans-Bold.otf",
  variable: "--font-miguer-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Monday News - Stay Informed with Personalized News",
    template: "%s | Monday News"
  },
  description: "Monday News delivers personalized news stories powered by News API. Get tailored updates from global events to specialized topics, designed to save you time and eliminate clutter.",
  keywords: [
    "news", "personalized news", "global news", "news aggregator", "news api", 
    "breaking news", "current events", "news updates", "daily news", "world news",
    "technology news", "business news", "sports news", "entertainment news"
  ],
  authors: [{ 
    name: "Yassine Erradouani", 
    url: "https://yerradouani.me" 
  }],
  creator: "Yassine Erradouani",
  publisher: "Monday News",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mondaynews.yerradouani.me"),
  alternates: {
    canonical: "https://mondaynews.yerradouani.me",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mondaynews.yerradouani.me",
    title: "Monday News - Stay Informed with Personalized News",
    description: "Monday News delivers personalized news stories powered by News API. Get tailored updates from global events to specialized topics, designed to save you time and eliminate clutter.",
    siteName: "Monday News",
    images: [
      {
        url: "/logo-light.png",
        width: 1200,
        height: 630,
        alt: "Monday News - Personalized News Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monday News - Stay Informed with Personalized News",
    description: "Monday News delivers personalized news stories powered by News API. Get tailored updates from global events to specialized topics.",
    images: ["/logo-light.png"],
    creator: "@yerradouani",
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  manifest: "/manifest.json",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Monday News",
  "description": "Monday News delivers personalized news stories powered by News API. Get tailored updates from global events to specialized topics.",
  "url": "https://mondaynews.yerradouani.me",
  "logo": "https://mondaynews.yerradouani.me/logo-light.png",
  "sameAs": [
    "https://yerradouani.me",
    "https://github.com/yassnemo",
    "https://linkedin.com/in/yerradouani"
  ],
  "author": {
    "@type": "Person",
    "name": "Yassine Erradouani",
    "url": "https://yerradouani.me"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Monday News",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mondaynews.yerradouani.me/logo-light.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mondaynews.yerradouani.me/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable} ${miguerSans.variable}`}
        suppressHydrationWarning={true}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
