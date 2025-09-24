import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Github, Twitter, Globe, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Monday News",
  description: "Get in touch with the Monday News team. Contact us for support, partnerships, or general inquiries. We're based in Casablanca, Morocco.",
  keywords: ["contact", "monday news", "support", "help", "get in touch", "casablanca", "morocco", ],
  openGraph: {
    title: "Contact Us - Monday News",
    description: "Get in touch with the Monday News team. Contact us for support, partnerships, or general inquiries.",
    url: "https://mondaynews.yerradouani.me/contact",
  },
  twitter: {
    title: "Contact Us - Monday News",
    description: "Get in touch with the Monday News team. Contact us for support, partnerships, or general inquiries.",
  },
}

export default function ContactPage() {
  return (
    <div
        className="monday-news-page h-screen flex flex-col overflow-hidden relative"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
        }}
      >
      {/* Navigation positioned in top right */}
      <Navigation currentPage="contact" />

      <div className="hidden lg:flex h-full flex-col max-w-7xl mx-auto">
        {/* Main content */}
          <main className="relative z-10 flex flex-row items-center justify-between px-6 lg:px-16 xl:px-20 flex-1 min-h-0 pt-20 lg:pt-24 pb-6 gap-16 lg:gap-20 xl:gap-24 overflow-x-hidden">
              {/* Left content - Contact Info */}
              <div className="flex-1 max-w-lg xl:max-w-xl text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-none text-white" 
                    style={{fontFamily: "var(--font-miguer-sans), sans-serif"}}>
                  CONTACT
                  <br />
                  US
                </h1>
                <p className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 text-white max-w-md">
                  Get in touch with the Monday News team. We'd love to hear from you.
                </p>

                {/* Contact information */}
                <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
                  <div className="flex items-center justify-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-200" />
                    <span className="text-white text-sm sm:text-base">hello@yerradouani.me</span>
                  </div>
                  <div className="flex items-center justify-start space-x-3">
                    <Globe className="w-5 h-5 text-blue-200" />
                    <a
                      href="https://yerradouani.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base hover:underline">
                      yerradouani.me
                    </a>
                  </div>
                  <div className="flex items-center justify-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-200" />
                    <span className="text-white text-sm sm:text-base">
                      Casablanca, MA
                    </span>
                  </div>
                </div>
              </div>

              {/* Right content - Contact Form */}
              <div className="flex-shrink-0 max-w-lg w-full">
                <h2 className="text-xl lg:text-2xl font-semibold text-white mb-6 text-left">Say hello</h2>

                <div className="space-y-8">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 focus:border-white focus:outline-none pb-2 transition-colors duration-200 px-0"
                    />
                  </div>
                  <div className="relative">
                    <div className="mb-1">
                      <span className="text-white/50 text-sm">Message</span>
                    </div>
                    <div className="border-b border-white/30 focus-within:border-white transition-colors duration-200">
                      <textarea
                        placeholder=""
                        rows={4}
                        className="w-full bg-transparent border-0 text-white focus:outline-none pb-2 resize-none px-0"
                      />
                    </div>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white w-full py-3 flex items-center justify-center gap-2 mt-8">
                    <span>▶</span>
                    Send message
                  </Button>
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
        <main className="flex-1 px-4 pb-4 flex flex-col justify-start pt-24">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4" 
                style={{fontFamily: "var(--font-miguer-sans), sans-serif"}}>
              CONTACT
              <br />
              US
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-8 max-w-sm mx-auto">
            <p className="text-base text-white">Get in touch with the Monday News team. We'd love to hear from you.</p>
          </div>

          {/* Contact information */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-blue-200" />
              <span className="text-white text-sm">hello@mondaynews.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-200" />
              <span className="text-white text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-200" />
              <span className="text-white text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-5 h-5 text-blue-200" />
              <span className="text-white text-sm">Mon-Fri, 9AM-6PM PST</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Linkedin className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <Github className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <Globe className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4 text-left">Say hello</h2>

            <div className="space-y-8">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 focus:border-white focus:outline-none pb-2 transition-colors duration-200 px-0 text-sm"
                />
              </div>
              <div className="relative">
                <div className="mb-1">
                  <span className="text-white/50 text-sm">Message</span>
                </div>
                <div className="border-b border-white/30 focus-within:border-white transition-colors duration-200">
                  <textarea
                    placeholder=""
                    rows={3}
                    className="w-full bg-transparent border-0 text-white focus:outline-none pb-2 resize-none px-0 text-sm"
                  />
                </div>
              </div>
              <Button className="bg-black hover:bg-gray-800 text-white w-full py-3 flex items-center justify-center gap-2 mt-6">
                <span>▶</span>
                Send message
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
