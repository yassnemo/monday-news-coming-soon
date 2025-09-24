"use client"

import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  url?: string
  type?: string
}

export default function SEO({
  title = "Monday News - Stay Informed with Personalized News",
  description = "Monday News delivers personalized news stories powered by News API. Get tailored updates from global events to specialized topics, designed to save you time and eliminate clutter.",
  keywords = ["news", "personalized news", "global news", "news aggregator"],
  ogImage = "/logo-light.png",
  url = "https://mondaynews.yerradouani.me",
  type = "website"
}: SEOProps) {
  const keywordsString = keywords.join(", ")

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="Yassine Erradouani" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Monday News" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Monday News" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@yerradouani" />
      <meta name="twitter:site" content="@yerradouani" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#3644ed" />
      <meta name="msapplication-TileColor" content="#3644ed" />
      <meta name="msapplication-navbutton-color" content="#3644ed" />
      <link rel="canonical" href={url} />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}