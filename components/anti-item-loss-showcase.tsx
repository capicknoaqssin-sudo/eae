"use client"

import { useState, useEffect } from "react"

export function AntiItemLossShowcase() {
  const [health, setHealth] = useState(100)
  const [isActivated, setIsActivated] = useState(false)
  const [showCritical, setShowCritical] = useState(false)
  const [showDeath, setShowDeath] = useState(false)
  const [showDisconnect, setShowDisconnect] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth((prev) => {
        if (prev > 0) {
          const newHealth = prev - 5

          if (newHealth <= 30 && !showCritical) {
            setShowCritical(true)
            setIsActivated(true)
          }

          if (newHealth <= 0) {
            setShowDeath(true)
            setTimeout(() => {
              setShowDisconnect(true)
            }, 1000)
            setTimeout(() => {
              // Reset animation
              setHealth(100)
              setShowCritical(false)
              setShowDeath(false)
              setShowDisconnect(false)
              setIsActivated(false)
            }, 4000)
          }

          return Math.max(0, newHealth)
        }
        return prev
      })
    }, 300)

    return () => clearInterval(interval)
  }, [showCritical])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00AEEF] to-[#9b4dff] bg-clip-text text-transparent">
            Anti Perda de Itens
          </h2>
          <p className="text-xl text-gray-400">Proteção automática contra roubo de inventário</p>
        </div>

        {/* Main Visualization */}
        <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          {/* Health Bar Display */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm font-mono">VIDA DO JOGADOR</span>
              <span
                className={`text-2xl font-bold font-mono ${health <= 30 ? "text-red-500 animate-pulse" : "text-[#00AEEF]"}`}
              >
                {health}%
              </span>
            </div>
            <div className="relative h-12 bg-black/60 rounded-lg border border-white/20 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  health > 50
                    ? "bg-gradient-to-r from-green-500 to-green-400"
                    : health > 30
                      ? "bg-gradient-to-r from-yellow-500 to-orange-400"
                      : "bg-gradient-to-r from-red-600 to-red-500 animate-pulse"
                }`}
                style={{ width: `${health}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
              {health <= 30 && <div className="absolute inset-0 border-2 border-red-500 animate-pulse" />}
            </div>
          </div>

          {/* Detection Panels Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Critical Health Detection */}
            <div
              className={`relative border-2 rounded-xl p-6 transition-all duration-500 ${
                showCritical
                  ? "border-red-500 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 rounded-full ${showCritical ? "bg-red-500 animate-pulse" : "bg-gray-600"}`} />
                <span className="text-sm font-mono text-gray-400">DETECÇÃO CRÍTICA</span>
              </div>
              <div className={`text-xl font-bold ${showCritical ? "text-red-400" : "text-gray-600"}`}>
                Vida Crítica Detectada
              </div>
              {showCritical && (
                <div className="mt-3 text-red-400 text-sm font-mono animate-pulse">⚠ ALERTA: HP {"<"} 30%</div>
              )}
            </div>

            {/* Death Detection */}
            <div
              className={`relative border-2 rounded-xl p-6 transition-all duration-500 ${
                showDeath
                  ? "border-red-600 bg-red-600/10 shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 rounded-full ${showDeath ? "bg-red-600 animate-pulse" : "bg-gray-600"}`} />
                <span className="text-sm font-mono text-gray-400">DETECÇÃO DE MORTE</span>
              </div>
              <div className={`text-xl font-bold ${showDeath ? "text-red-500" : "text-gray-600"}`}>Morte Detectada</div>
              {showDeath && <div className="mt-3 text-red-500 text-sm font-mono animate-pulse">⚠ CRÍTICO: HP = 0%</div>}
            </div>
          </div>

          {/* System Status Panel */}
          <div
            className={`relative border-2 rounded-xl p-8 mb-12 transition-all duration-500 ${
              isActivated
                ? "border-[#00AEEF] bg-gradient-to-br from-[#00AEEF]/10 to-[#9b4dff]/10 shadow-[0_0_40px_rgba(0,174,239,0.3)]"
                : "border-white/10 bg-black/40"
            }`}
          >
            <div className="text-center">
              <div
                className={`inline-block px-6 py-3 rounded-lg mb-4 font-mono text-lg font-bold transition-all duration-500 ${
                  isActivated
                    ? "bg-gradient-to-r from-[#00AEEF] to-[#9b4dff] text-white shadow-lg"
                    : "bg-gray-800 text-gray-600"
                }`}
              >
                ANTI-PERDA DE ITENS — {isActivated ? "ATIVADO" : "AGUARDANDO"}
              </div>
              <div className={`text-sm ${isActivated ? "text-[#00AEEF]" : "text-gray-600"}`}>
                {isActivated ? "Sistema de proteção em execução" : "Monitorando status de vida"}
              </div>
            </div>
          </div>

          {/* Disconnect Action */}
          <div
            className={`relative border-2 rounded-xl p-8 text-center transition-all duration-500 ${
              showDisconnect
                ? "border-[#9b4dff] bg-gradient-to-br from-[#9b4dff]/20 to-[#00AEEF]/20 shadow-[0_0_50px_rgba(155,77,255,0.4)]"
                : "border-white/10 bg-black/40"
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Disconnect Icon */}
              <div className={`relative ${showDisconnect ? "animate-bounce" : ""}`}>
                <svg
                  className={`w-20 h-20 transition-all duration-500 ${
                    showDisconnect ? "text-[#00AEEF]" : "text-gray-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {showDisconnect && (
                  <div className="absolute -inset-4 bg-[#00AEEF]/30 rounded-full blur-xl animate-pulse" />
                )}
              </div>

              <div
                className={`text-2xl font-bold transition-all duration-500 ${
                  showDisconnect
                    ? "bg-gradient-to-r from-[#00AEEF] to-[#9b4dff] bg-clip-text text-transparent"
                    : "text-gray-600"
                }`}
              >
                Desconexão Automática Ativada
              </div>

              {showDisconnect && (
                <div className="mt-4 space-y-2 animate-fade-in">
                  <div className="text-[#00AEEF] font-mono text-sm">✓ Inventário protegido</div>
                  <div className="text-[#9b4dff] font-mono text-sm">✓ Armas salvas</div>
                  <div className="text-green-400 font-mono text-sm">✓ Itens preservados</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#00AEEF] mb-3">Como Funciona</h3>
            <p className="text-gray-400 leading-relaxed">
              Ao detectar vida baixa ou morte, o MiniHook desconecta automaticamente para evitar perdas de itens e
              armas.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#9b4dff] mb-3">Proteção Total</h3>
            <p className="text-gray-400 leading-relaxed">
              Proteção 24/7 contra roubo de inventário. Seu progresso sempre seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
