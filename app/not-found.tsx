import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page Not Found - Monday News",
  description: "The page you're looking for doesn't exist. Return to Monday News homepage to stay updated with personalized news stories.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="monday-news-page h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-white mb-4" style={{fontFamily: "var(--font-miguer-sans), sans-serif"}}>
        404
      </h1>
      <h2 className="text-2xl font-semibold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-white mb-8 max-w-md">
        The page you're looking for doesn't exist. Let's get you back to the latest news.
      </p>
      <Link href="/">
        <Button className="bg-white text-[#3644ed] hover:bg-gray-100 px-8 py-3">
          Return Home
        </Button>
      </Link>
    </div>
  )
}