"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const particleCount = 20
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute w-1.5 h-1.5 rounded-full bg-accent/20 animate-particle-float"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 15}s`
      particle.style.animationDuration = `${15 + Math.random() * 10}s`
      canvasRef.current.appendChild(particle)
    }

    const orbCount = 5
    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement("div")
      orb.className = "absolute rounded-full bg-gradient-to-br from-accent/10 to-secondary/10 blur-3xl animate-float"
      orb.style.width = `${200 + Math.random() * 300}px`
      orb.style.height = `${200 + Math.random() * 300}px`
      orb.style.left = `${Math.random() * 100}%`
      orb.style.top = `${Math.random() * 100}%`
      orb.style.animationDelay = `${Math.random() * 6}s`
      orb.style.animationDuration = `${8 + Math.random() * 4}s`
      canvasRef.current.appendChild(orb)
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <>
      {/* Animated Background Container */}
      <div ref={canvasRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true" />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, var(--neon-blue) 0%, transparent 40%),
              radial-gradient(circle at 70% 80%, var(--neon-purple) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: `
              linear-gradient(135deg, 
                transparent 0%, 
                var(--neon-blue) 25%, 
                var(--neon-purple) 50%, 
                var(--accent) 75%, 
                transparent 100%)
            `,
            backgroundSize: "400% 400%",
          }}
        />
      </div>
    </>
  )
}
