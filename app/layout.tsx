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
  title: "Monday News",
  description: "Monday News delivers the stories that matter to you",
  authors: { 
    name: "Yassine Erradouani", 
    url: "https://yerradouani.me" 
  },
  icons: {
    icon: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
