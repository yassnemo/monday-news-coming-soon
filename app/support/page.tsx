"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/Navigation"
import { useRouter } from "next/navigation"

export default function SupportPage() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@yerradouani.me'
  }

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

            <div className="space-y-8 lg:space-y-12 mb-16">
              <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Something not working? Got questions? We're here to help you make the most of Monday News.
              </p>

              {/* Quick Actions */}
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div 
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 cursor-pointer backdrop-blur-sm text-left"
                  onClick={handleContactClick}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
                  </div>
                  <p className="text-white/70 mb-6 text-left">
                    Have questions or feedback? Drop us a line and we'll get back to you.
                  </p>
                  <div className="text-white/50 text-sm font-medium uppercase tracking-wider text-left">
                    Contact →
                  </div>
                </div>

                <div 
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 cursor-pointer backdrop-blur-sm text-left"
                  onClick={handleEmailClick}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Quick Email</h3>
                  </div>
                  <p className="text-white/70 mb-6 text-left">
                    Need a fast response? Shoot us an email directly.
                  </p>
                  <div className="text-white/50 text-sm font-medium uppercase tracking-wider text-left">
                    Email →
                  </div>
                </div>
              </div>

              {/* Coming Soon Notice */}
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  <span className="text-white/80 text-sm font-medium">
                    Monday News is launching soon — stay tuned!
                  </span>
                </div>
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
                onClick={handleContactClick}
              >
                Go to Contact Page
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3"
                onClick={handleEmailClick}
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
