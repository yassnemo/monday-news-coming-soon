"use client"

import React, { useEffect, useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"

type Props = {
  children: React.ReactNode
}

export function PageTransition({ children }: Props) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Lock body scroll during transition to prevent scrollbar flicker
  useLayoutEffect(() => {
    if (!containerRef.current) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      // For users who prefer reduced motion, show content immediately
      gsap.set(containerRef.current, { autoAlpha: 1, y: 0 })
      return
    }

    // Temporarily lock body scroll during transition
    const originalBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Content starts hidden via CSS, animate it in
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          // Restore body scroll after transition
          document.body.style.overflow = originalBodyOverflow
        }
      })
    }, containerRef)

    return () => {
      ctx.revert()
      // Always restore body scroll on cleanup
      document.body.style.overflow = originalBodyOverflow
    }
  }, [pathname])

  // Optional: fade out on unmount for next navigation
  useEffect(() => {
    return () => {
      if (!containerRef.current) return
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) return
      
      // Lock scroll during exit animation
      const originalBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        y: -8,
        duration: 0.2,
        ease: "power1.out",
        onComplete: () => {
          document.body.style.overflow = originalBodyOverflow
        }
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-full opacity-0" style={{ transform: 'translateY(12px)' }}>
      {children}
    </div>
  )
}
