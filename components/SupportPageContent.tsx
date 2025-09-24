"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/Navigation"

export function SupportPageContent() {
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

            <p className="text-sm sm:text-base lg:text-lg mb-8 lg:mb-12 text-white max-w-2xl mx-auto">
              We're here to help you get the most out of Monday News. Find answers to common questions or get in touch with our team.
            </p>

            {/* Support Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base font-medium min-w-[200px]"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-base font-medium min-w-[200px]"
                onClick={() => window.location.href = 'mailto:mailbot@yerradouani.me'}
              >
                Email Us
              </Button>
            </div>

            {/* FAQ Section */}
            <div className="text-left max-w-3xl mx-auto">
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-2">When will Monday News be available?</h3>
                  <p className="text-white/80">Monday News is currently in development. Sign up for our newsletter to be notified when we launch!</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-2">What makes Monday News different?</h3>
                  <p className="text-white/80">Our platform uses the News API to deliver personalized news tailored to your interests, helping you stay informed without information overload.</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-2">Will Monday News be free?</h3>
                  <p className="text-white/80">We're exploring different pricing models to ensure Monday News remains accessible while providing premium features for power users.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
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
            <p className="text-white/80 mt-4 text-sm">
              We're here to help you get the most out of Monday News.
            </p>
          </div>

          {/* Mobile Support Actions */}
          <div className="flex flex-col gap-4 mb-8">
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 py-3 text-base font-medium"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 py-3 text-base font-medium"
              onClick={() => window.location.href = 'mailto:mailbot@yerradouani.me'}
            >
              Email Us
            </Button>
          </div>

          {/* Mobile FAQ */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h2>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-2">When will Monday News be available?</h3>
              <p className="text-white/80 text-sm">Monday News is currently in development. Sign up for our newsletter to be notified when we launch!</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-2">What makes Monday News different?</h3>
              <p className="text-white/80 text-sm">Our platform uses the News API to deliver personalized news tailored to your interests.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-2">Will Monday News be free?</h3>
              <p className="text-white/80 text-sm">We're exploring different pricing models to ensure Monday News remains accessible.</p>
            </div>
          </div>

          {/* Mobile Footer */}
          <footer className="text-center py-4 mt-8">
            <p className="text-white text-sm">2025 © Monday News</p>
          </footer>
        </main>
      </div>
    </div>
  )
}