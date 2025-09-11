"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Github, Twitter, Globe } from "lucide-react"
import { Navigation } from "@/components/Navigation"

export default function HomePage() {
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
      <Navigation currentPage="home" />

      <div className="hidden lg:flex h-full flex-col max-w-7xl mx-auto">
        {/* Main content */}
        <main className="relative z-10 flex flex-row items-center justify-between px-6 lg:px-16 xl:px-20 flex-1 min-h-0 py-4 lg:py-0 gap-16 lg:gap-20 xl:gap-24">
          {/* Left content */}
          <div className="flex-1 max-w-lg xl:max-w-xl text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-none text-white" 
                style={{fontFamily: "var(--font-miguer-sans), sans-serif"}}>
              MONDAY
              <br />
              NEWS
            </h1>

            <div className="space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 text-white max-w-md">
              <p>Monday News delivers the stories that matter to you.</p>
              <p>
                Powered by the <span className="font-semibold">News API</span>, it gathers news tailored to your
                interests, from global events to specialized topics.
              </p>
              <p>It's designed to save you time, bringing you relevant updates without the clutter.</p>
            </div>

            {/* Email signup */}
            <div className="mb-6 lg:mb-8">
              <label htmlFor="email-desktop" className="block text-sm sm:text-base lg:text-lg mb-3 text-white">
                Enter your email <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-row gap-3 max-w-md">
                <Input
                  id="email-desktop"
                  type="email"
                  placeholder="name@example.com"
                  className="flex-1 bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500 text-sm lg:text-base h-10 lg:h-12"
                />
                <Button className="bg-black hover:bg-gray-800 text-white px-6 lg:px-8 py-3 rounded-md font-medium text-sm lg:text-base whitespace-nowrap h-10 lg:h-12">
                  Notify me
                </Button>
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

          {/* Right content - Phone mockups */}
          <div className="flex-shrink-0 flex items-center justify-center relative">
            {/* Left phone - positioned slightly behind */}
            <div className="relative z-10 transform -rotate-2 scale-90">
              <img
                src="/home-page-phone.png"
                alt="Monday News App Interface"
                className="w-36 sm:w-44 md:w-52 lg:w-60 xl:w-72 h-auto shadow-2xl max-w-full select-none pointer-events-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            {/* Right phone - main focus, overlapping */}
            <div className="relative z-20 transform rotate-2 -ml-6 lg:-ml-8">
              <img
                src="/landing-page-phone.png"
                alt="Monday News Article View"
                className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-76 h-auto shadow-2xl max-w-full select-none pointer-events-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
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
          {/* Title with exclamation icon */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4" 
                style={{fontFamily: "var(--font-miguer-sans), sans-serif"}}>
              MONDAY
              <br />
              NEWS
              <span className="inline-block ml-2 bg-white text-blue-600 rounded-full w-8 h-8 text-xl font-bold flex items-center justify-center">
                !
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-8 space-y-4 text-white max-w-sm mx-auto">
            <p className="text-base">Monday News delivers the stories that matter to you.</p>
            <p className="text-base">
              Powered by the <span className="font-semibold">News API</span>, it gathers news tailored to your
              interests, from global events to specialized topics.
            </p>
            <p className="text-base">
              It's designed to save you time, bringing you relevant updates without the clutter.
            </p>
          </div>

          {/* Email signup */}
          <div className="mb-8 max-w-sm mx-auto w-full">
            <label htmlFor="email-mobile" className="block text-base mb-3 text-white">
              Enter your email <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2">
              <Input
                id="email-mobile"
                type="email"
                placeholder="name@example.com"
                className="flex-1 bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500"
              />
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium whitespace-nowrap">
                Notify me
              </Button>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Linkedin className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <Github className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <Globe className="w-6 h-6 text-white hover:text-blue-200 cursor-pointer transition-colors" />
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-white text-base mb-8 max-w-xs mx-auto">
              Currently in development, to contribute visit my website or send me an email.
            </p>

            {/* Mobile Phone Mockups */}
            <div className="flex justify-center space-x-4">
              <div className="w-32">
                <img
                  src="/home-page-phone.png"
                  alt="Monday News App Interface"
                  className="w-full h-auto shadow-2xl select-none pointer-events-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              <div className="w-32">
                <img
                  src="/landing-page-phone.png"
                  alt="Monday News Article View"
                  className="w-full h-auto shadow-2xl select-none pointer-events-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
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
