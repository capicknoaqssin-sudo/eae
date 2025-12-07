"use client"

import { useState, useEffect } from "react"

export function TargetPlayerShowcase() {
  const [ragebotActive, setRagebotActive] = useState(false)
  const [targetActive, setTargetActive] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [glowIntensity, setGlowIntensity] = useState(0)
  const fullText = "Davi_lindao"

  useEffect(() => {
    if (typingText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(fullText.slice(0, typingText.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [typingText])

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity((prev) => (prev + 1) % 100)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">Interface MiniHook</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Target Player System
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Sistema avançado de targeting com Ragebot integrado</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-500/10">
            {/* Animated holographic border */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(${glowIntensity * 3.6}deg, #9B4DFF, #00AEEF, #9B4DFF)`,
                filter: "blur(20px)",
              }}
            />

            <div className="relative flex">
              {/* Sidebar */}
              <div className="w-16 bg-zinc-950/50 border-r border-zinc-800 flex flex-col items-center py-6 gap-4">
                {["C", "T", "V", "T", "J", "V", "A"].map((letter, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all duration-300 ${
                      index === 0
                        ? "bg-gradient-to-br from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                        : "bg-zinc-800/50 text-gray-500 hover:text-white hover:bg-zinc-700/50"
                    }`}
                  >
                    {letter}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                  <h3 className="text-2xl font-bold text-white">Combate</h3>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                    <span className="text-cyan-400 font-medium">#</span>
                    <span className="text-white font-medium">Target Player</span>
                  </div>
                </div>

                {/* Navigation tabs */}
                <div className="flex gap-2 mb-6">
                  {["Silent Aim", "Aimlock", "Friendly Player", "Target Player", "Misc", "Outros"].map((tab, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        index === 3
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-white"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      # {tab}
                    </button>
                  ))}
                </div>

                {/* Controls */}
                <div className="space-y-6">
                  {/* Ragebot toggle */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/30 transition-all duration-300">
                    <span className="text-white font-medium">Ragebot</span>
                    <button
                      onClick={() => setRagebotActive(!ragebotActive)}
                      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                        ragebotActive
                          ? "bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50"
                          : "bg-zinc-700"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
                          ragebotActive ? "left-7" : "left-1"
                        }`}
                      />
                      {ragebotActive && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-md opacity-50" />
                      )}
                    </button>
                  </div>

                  {/* Target toggle */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/30 transition-all duration-300">
                    <span className="text-white font-medium">TARGET</span>
                    <button
                      onClick={() => setTargetActive(!targetActive)}
                      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                        targetActive
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                          : "bg-zinc-700"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
                          targetActive ? "left-7" : "left-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Kill method dropdown */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Método de Kill</label>
                    <select className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-all duration-300 appearance-none cursor-pointer hover:bg-zinc-800/50">
                      <option>...</option>
                      <option>Headshot</option>
                      <option>Body Shot</option>
                      <option>Auto</option>
                    </select>
                  </div>

                  {/* Player name input with typing animation */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Nome do Player</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={typingText}
                        readOnly
                        placeholder="Digite parte do nome..."
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                      />
                      {typingText && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-5 bg-cyan-400 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Player selector dropdown */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Selecionar Player</label>
                    <select className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all duration-300 appearance-none cursor-pointer hover:bg-zinc-800/50">
                      <option>...</option>
                      <option>Davi_lindao246B123</option>
                      <option>AUGUSTODX273747</option>
                      <option>Eo_dg4375</option>
                    </select>
                  </div>

                  {/* Distance slider */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Distância Máxima</label>
                    <div className="relative pt-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="75"
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-purple-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-cyan-500/50"
                      />
                    </div>
                  </div>
                </div>

                {/* User info footer */}
                <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <div className="text-white font-medium">MiniHook User</div>
                      <div className="text-gray-500 text-sm">#4260</div>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                    <span className="text-gray-400">⚙</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
