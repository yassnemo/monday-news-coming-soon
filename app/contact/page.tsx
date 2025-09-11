"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Github, Twitter, Globe, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/Navigation"

export default function ContactPage() {
  return (
    <div
      className="monday-news-page h-screen flex flex-col overflow-hidden relative"
      style={{
        fontFamily: "var(--font-montserrat), sans-serif",
      }}
    >
      {/* Logo positioned in top left */}
      <div className="fixed top-6 left-6 z-40">
        <img 
          src="/logo-light.png" 
          alt="Monday News Logo" 
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Navigation positioned in top right */}
      <Navigation currentPage="contact" />

      <div className="hidden lg:flex h-full flex-col max-w-7xl mx-auto">
        {/* Main content */}
        <main className="relative z-10 flex flex-row items-center justify-between px-6 lg:px-16 xl:px-20 flex-1 min-h-0 py-4 lg:py-0 gap-16 lg:gap-20 xl:gap-24">
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
                <span className="text-white text-sm sm:text-base">hello@mondaynews.com</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <span className="text-white text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-200" />
                <span className="text-white text-sm sm:text-base">San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Clock className="w-5 h-5 text-blue-200" />
                <span className="text-white text-sm sm:text-base">Mon-Fri, 9AM-6PM PST</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-start space-x-4">
              <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 lg:w-6 lg:h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Right content - Contact Form */}
          <div className="flex-shrink-0 max-w-lg w-full">
            <div className="bg-blue-800/20 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-blue-700/50">
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-6 text-center">Send us a message</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First name"
                    className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500"
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500"
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500"
                />
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full bg-blue-800 border border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500 rounded-md px-3 py-2 resize-none"
                />
                <Button className="bg-black hover:bg-gray-800 text-white w-full py-3">Send Message</Button>
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
        <main className="flex-1 px-4 pb-4 flex flex-col justify-center pt-20">
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
          <div className="bg-blue-800/20 backdrop-blur-sm rounded-lg p-4 border border-blue-700/50">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">Send us a message</h2>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="text"
                  placeholder="First name"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500 text-sm"
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500 text-sm"
                />
              </div>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500 text-sm"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500 text-sm"
              />
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full bg-blue-800 border border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500 rounded-md px-3 py-2 resize-none text-sm"
              />
              <Button className="bg-black hover:bg-gray-800 text-white w-full py-3">Send Message</Button>
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
