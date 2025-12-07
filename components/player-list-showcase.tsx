"use client"

import { useState, useEffect } from "react"

export function PlayerListShowcase() {
  const [hoveredPlayer, setHoveredPlayer] = useState<number | null>(null)
  const [glowPosition, setGlowPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowPosition((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const players = [
    { name: "AUGUSTODX273747", role: "Civil", online: true, avatar: "👤" },
    { name: "Davi_lindao246B123", role: "Pescador", online: true, avatar: "👤" },
    { name: "Eo_dg4375", role: "Pescador", online: true, avatar: "👤" },
    { name: "Gc_damari1mari", role: "Entregador de Gás", online: true, avatar: "👤" },
    { name: "CrowAgardenShoppl", role: "Civil", online: false, avatar: "👤" },
  ]

  const buttons = ["Teleportar", "Assistir", "Inventário", "Marcar", "Add Amigo"]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Interface do Jogo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Menu de Players do Mini City RP
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interface nativa do jogo integrada com MiniHook para máximo controle
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Player List Container */}
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/10">
            {/* Animated border glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(${glowPosition * 3.6}deg, #00AEEF 0%, #9B4DFF 50%, #00AEEF 100%)`,
                padding: "2px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                opacity: 0.5,
              }}
            />

            {/* Header */}
            <div className="relative flex items-center justify-between p-4 border-b border-zinc-800">
              <h3 className="text-xl font-bold text-white">Lista de Players</h3>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-white text-xl">⚙</span>
                </button>
                <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-white text-xl">✕</span>
                </button>
              </div>
            </div>

            {/* Search bar */}
            <div className="p-4 border-b border-zinc-800">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Pesquisar jogador..."
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Players list */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {players.map((player, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredPlayer(index)}
                  onMouseLeave={() => setHoveredPlayer(null)}
                >
                  <div
                    className={`relative p-4 rounded-xl border transition-all duration-300 ${
                      hoveredPlayer === index
                        ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/50 scale-[1.02]"
                        : "bg-zinc-900/50 border-cyan-500/20"
                    }`}
                  >
                    {/* Hover glow effect */}
                    {hoveredPlayer === index && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl" />
                    )}

                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-2xl border-2 border-cyan-500/30">
                          {player.avatar}
                        </div>

                        {/* Player info */}
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-3 h-3 rounded-full ${
                                player.online ? "bg-green-500" : "bg-red-500"
                              } animate-pulse`}
                            />
                            <span className="text-white font-medium">{player.name}</span>
                          </div>
                          <span
                            className={`text-sm ${
                              player.role === "Civil"
                                ? "text-gray-400"
                                : player.role === "Pescador"
                                  ? "text-cyan-400"
                                  : "text-purple-400"
                            }`}
                          >
                            {player.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons - show on hover */}
                    {hoveredPlayer === index && (
                      <div className="mt-3 pt-3 border-t border-zinc-800 flex gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
                        {buttons.map((btn, btnIndex) => (
                          <button
                            key={btnIndex}
                            className="flex-1 px-3 py-2 text-xs bg-zinc-800 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/20 rounded-lg text-gray-300 hover:text-white transition-all duration-200 hover:scale-105"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">
                Interface otimizada com MiniHook - Controle total do servidor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
