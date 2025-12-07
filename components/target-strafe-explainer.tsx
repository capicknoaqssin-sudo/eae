"use client"

import { useEffect, useState } from "react"

export function TargetStrafeExplainer() {
  const [angle, setAngle] = useState(0)
  const [showBullets, setShowBullets] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBullets(true)
      setTimeout(() => setShowBullets(false), 800)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const radius = 120
  const playerX = Math.cos((angle * Math.PI) / 180) * radius
  const playerY = Math.sin((angle * Math.PI) / 180) * radius

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-purple-950/20 to-zinc-950" />

      {/* Animated rays */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
            style={{
              transform: `rotate(${i * 30}deg)`,
              transformOrigin: "top",
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="text-purple-400 text-sm font-medium">Ferramenta Mais OP</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Target Strafe
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Movimentação orbital automática ao redor do alvo - Impossível de acertar
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual demonstration */}
            <div className="relative">
              <div className="aspect-square relative bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(155,77,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(155,77,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Center target */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    {/* Target pulse rings */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-red-500/50 animate-ping"
                        style={{
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: "2s",
                        }}
                      />
                    ))}

                    {/* Target character */}
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-3xl shadow-2xl shadow-red-500/50 border-4 border-red-400">
                      🎯
                    </div>

                    {/* Target label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-xs font-bold">
                        ALVO
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbital path */}
                <svg className="absolute inset-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    className="opacity-50"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9B4DFF" />
                      <stop offset="50%" stopColor="#00AEEF" />
                      <stop offset="100%" stopColor="#9B4DFF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Player orbiting */}
                <div
                  className="absolute top-1/2 left-1/2 z-30 transition-transform"
                  style={{
                    transform: `translate(calc(-50% + ${playerX}px), calc(-50% + ${playerY}px))`,
                  }}
                >
                  <div className="relative">
                    {/* Motion trail */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50 scale-150" />

                    {/* Player character */}
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl shadow-2xl shadow-cyan-500/50 border-4 border-cyan-300">
                      ⚡
                    </div>

                    {/* Direction arrow */}
                    <div
                      className="absolute -right-6 top-1/2 -translate-y-1/2 text-cyan-400 text-xl"
                      style={{ transform: `rotate(${angle + 90}deg)` }}
                    >
                      →
                    </div>
                  </div>
                </div>

                {/* Enemy bullets missing */}
                {showBullets && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-${radius + 60}px)`,
                          animationDuration: "0.8s",
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Velocity indicator */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                  <div className="text-cyan-400 text-xs font-bold mb-1">VELOCIDADE</div>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-3 w-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Status label */}
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-bold">TARGET STRAFE ATIVO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature details */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="text-xl font-bold text-white mb-2">Movimentação 360° Automática</h3>
                  <p className="text-gray-400">
                    Sistema orbital inteligente que mantém você em movimento circular constante ao redor do alvo
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2">90% de Redução de Dano</h3>
                  <p className="text-gray-400">
                    Dificulta drasticamente os tiros inimigos enquanto você mantém precisão perfeita
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">Integração com Ragebot</h3>
                  <p className="text-gray-400">
                    Combinação perfeita: você se move rapidamente enquanto o Ragebot garante headshots automáticos
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    360°
                  </div>
                  <div className="text-gray-400 text-sm">Cobertura Total</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    90%
                  </div>
                  <div className="text-gray-400 text-sm">Evasão</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
