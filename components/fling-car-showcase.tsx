"use client"

import { useEffect, useRef, useState } from "react"

export function FlingCarShowcase() {
  const [isActive, setIsActive] = useState(false)
  const [flingProgress, setFlingProgress] = useState(0)
  const carRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => {
        if (!prev) {
          setFlingProgress(0)
          return true
        }
        return false
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setFlingProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 2
        })
      }, 30)

      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00AEEF]/20 to-[#9b4dff]/20 border border-[#00AEEF]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-sm font-medium text-[#00AEEF]">RECURSO TROLL</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-white via-[#00AEEF] to-[#9b4dff] bg-clip-text text-transparent">
                Fling Car
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
              Arremesse qualquer veículo para longe com um simples comando. Diversão garantida.
            </p>
          </div>

          {/* Main Display */}
          <div className="relative">
            {/* Technical Frame */}
            <div className="relative bg-gradient-to-br from-[#0a0a0f]/90 via-[#1a1a2e]/90 to-[#0a0a0f]/90 rounded-2xl border border-[#00AEEF]/20 p-8 md:p-12 backdrop-blur-xl">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00AEEF]/50 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#9b4dff]/50 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#9b4dff]/50 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00AEEF]/50 rounded-br-2xl" />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Visual Demo */}
                <div className="relative aspect-square">
                  {/* Center Stage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Energy Waves */}
                    {isActive && (
                      <>
                        <div
                          className="absolute w-32 h-32 rounded-full border-2 border-[#00AEEF]/30 animate-ping"
                          style={{ animationDuration: "2s" }}
                        />
                        <div
                          className="absolute w-48 h-48 rounded-full border-2 border-[#9b4dff]/20 animate-ping"
                          style={{ animationDuration: "2.5s" }}
                        />
                      </>
                    )}

                    {/* Car */}
                    <div
                      ref={carRef}
                      className="relative transition-all duration-500"
                      style={{
                        transform: isActive
                          ? `translateX(${flingProgress * 3}px) translateY(${-flingProgress * 2}px) rotate(${flingProgress * 3}deg) scale(${1 - flingProgress / 150})`
                          : "translateX(0) translateY(0) rotate(0) scale(1)",
                        opacity: isActive ? Math.max(0, 1 - flingProgress / 100) : 1,
                      }}
                    >
                      {/* Simple Roblox-style Car */}
                      <div className="relative w-32 h-20">
                        {/* Car Body */}
                        <div className="absolute inset-x-2 top-4 bottom-2 bg-gradient-to-br from-[#00AEEF] to-[#0088cc] rounded-lg border-2 border-[#00AEEF]/50 shadow-[0_0_20px_rgba(0,174,239,0.5)]" />

                        {/* Car Top */}
                        <div className="absolute inset-x-6 top-0 bottom-8 bg-gradient-to-br from-[#00AEEF]/80 to-[#0088cc]/80 rounded-t-lg border-2 border-[#00AEEF]/50" />

                        {/* Windows */}
                        <div className="absolute left-8 top-1 w-6 h-4 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded border border-[#00AEEF]/30" />
                        <div className="absolute right-8 top-1 w-6 h-4 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded border border-[#00AEEF]/30" />

                        {/* Wheels */}
                        <div className="absolute left-2 bottom-0 w-6 h-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-700" />
                        <div className="absolute right-2 bottom-0 w-6 h-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-700" />
                      </div>

                      {/* Speed Lines */}
                      {isActive && flingProgress > 10 && (
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 space-y-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="h-0.5 bg-gradient-to-r from-[#00AEEF] to-transparent animate-pulse"
                              style={{
                                width: `${40 + i * 10}px`,
                                animationDelay: `${i * 0.1}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Force Arrows */}
                    {isActive && flingProgress < 80 && (
                      <>
                        <div
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-70"
                          style={{
                            transform: `translate(-50%, -50%) scale(${1 + flingProgress / 100})`,
                          }}
                        >
                          {/* Arrow pointing right-up */}
                          <svg
                            viewBox="0 0 100 100"
                            className="w-full h-full"
                            style={{
                              filter: "drop-shadow(0 0 10px rgba(0,174,239,0.8))",
                            }}
                          >
                            <defs>
                              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00AEEF" />
                                <stop offset="100%" stopColor="#9b4dff" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 20 50 L 70 30 L 70 40 L 90 40 L 90 20 L 80 20 L 80 30 L 70 30"
                              fill="none"
                              stroke="url(#arrowGradient)"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <polygon points="70,20 90,30 70,40" fill="url(#arrowGradient)" />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Grid Reference */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                {/* Right Side - Control Panel */}
                <div className="space-y-6">
                  {/* Holographic Window */}
                  <div className="relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#0a0a0f]/80 rounded-xl border border-[#00AEEF]/30 p-6 backdrop-blur-sm">
                    {/* Status Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${isActive ? "bg-[#00AEEF] animate-pulse" : "bg-gray-600"}`}
                        />
                        <span className="text-2xl font-bold text-white">FLING CAR</span>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${isActive ? "bg-[#00AEEF]/20 text-[#00AEEF]" : "bg-gray-800 text-gray-400"}`}
                      >
                        {isActive ? "ON" : "OFF"}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-[#00AEEF]/10 to-[#9b4dff]/10 rounded-lg border border-[#00AEEF]/20">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF]/20 to-[#9b4dff]/20 flex items-center justify-center border border-[#00AEEF]/30">
                        <svg className="w-6 h-6 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">FORÇA DE IMPACTO</p>
                        <p className="text-xl font-bold text-white">999+</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <p className="text-gray-300 leading-relaxed">Arremessa qualquer veículo para longe ao ativar</p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/30">
                          Instantâneo
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#9b4dff]/20 text-[#9b4dff] border border-[#9b4dff]/30">
                          Sem Cooldown
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Troll Mode
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {[
                      { label: "Arremesso de longa distância", icon: "🚀" },
                      { label: "Funciona com qualquer veículo", icon: "🚗" },
                      { label: "Ativação instantânea", icon: "⚡" },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#1a1a2e]/50 to-transparent border border-[#00AEEF]/10 hover:border-[#00AEEF]/30 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00AEEF]/20 to-[#9b4dff]/20 flex items-center justify-center text-lg">
                          {feature.icon}
                        </div>
                        <span className="text-gray-300 text-sm">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-[#00AEEF]/5 to-[#9b4dff]/5 border border-[#00AEEF]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-gradient-to-b from-[#00AEEF] to-[#9b4dff]" />
                      <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
                        Especificações Técnicas
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-gray-500">Alcance</p>
                        <p className="text-white font-medium">Ilimitado</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Velocidade</p>
                        <p className="text-white font-medium">999+ m/s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00AEEF]/5 to-transparent animate-scan" />
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#00AEEF] rounded-full opacity-30 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
