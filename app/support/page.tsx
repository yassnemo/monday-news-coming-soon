"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/Navigation"

export default function SupportPage() {
  return (
    <div
      className="monday-news-page h-screen flex flex-col overflow-hidden relative"
      style={{
        fontFamily: "var(--font-montserrat), sans-serif",
      }}
    >
      {/* Navigation positioned in top right */}
      <Navigation currentPage="support" />

      <div className="hidden lg:flex h-full flex-col max-w-7xl mx-auto">
        {/* Main content */}
  <main className="relative z-10 flex flex-col items-center justify-start px-6 lg:px-16 xl:px-20 flex-1 min-h-0 pt-28 lg:pt-36 pb-8 lg:pb-12 overflow-x-hidden">
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-none text-white" 
                style={{fontFamily: "var(--font-miguer-sans), sans-serif"}}>
              SUPPORT
            </h1>

            <p className="text-sm sm:text-base lg:text-lg mb-12 lg:mb-16 text-white max-w-2xl mx-auto">
              Get help with Monday News. Find answers to common questions or reach out to our support team.
            </p>

            {/* Contact section */}
            <div className="bg-blue-800/20 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-blue-700/50 max-w-2xl mx-auto">
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">Still need help?</h2>
              <p className="text-blue-200 mb-6">Get in touch with our support team directly.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  Go to Contact Page
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => window.location.href = 'mailto:mailbot@yerradouani.me'}
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 text-center py-3 sm:py-4 flex-shrink-0">
          <p className="text-white text-xs sm:text-sm">2025 © Monday News</p>
        </footer>
      </div>

      <div className="lg:hidden h-full flex flex-col overflow-y-auto">
        {/* Mobile Main Content */}
  <main className="flex-1 px-4 pb-4 flex flex-col justify-start pt-28">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white leading-tight" 
                style={{fontFamily: "var(--font-miguer-sans), sans-serif"}}>
              SUPPORT
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-8 max-w-sm mx-auto">
            <p className="text-base text-white">
              Get help with Monday News. Find answers to common questions or reach out to our support team.
            </p>
          </div>

          {/* Contact section */}
          <div className="bg-blue-800/20 backdrop-blur-sm rounded-lg p-4 border border-blue-700/50">
            <h2 className="text-xl font-semibold text-white mb-3 text-center">Still need help?</h2>
            <p className="text-blue-200 mb-4 text-center text-sm">
              Get in touch with our support team directly.
            </p>

            <div className="space-y-3">
              <Button 
                className="bg-black hover:bg-gray-800 text-white w-full py-3"
                onClick={() => window.location.href = '/contact'}
              >
                Go to Contact Page
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3"
                onClick={() => window.location.href = 'mailto:mailbot@yerradouani.me'}
              >
                Send Email
              </Button>
            </div>
          </div>
        </main>

        {/* Mobile Footer */}
        <footer className="text-center py-4 flex-shrink-0">
          <p className="text-white text-sm">2025 © Monday News</p>
        </footer>
      </div>
    </div>
  )
}
