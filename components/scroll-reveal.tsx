"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade-in-up" | "blur-to-focus" | "holographic-boot" | "letter-expand" | "digital-boot"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, animation = "fade-in-up", delay = 0, className = "" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add(`animate-${animation}`)
            }, delay)
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [animation, delay])

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}
