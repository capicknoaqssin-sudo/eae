"use client"

import { useState, useEffect } from "react"
import { DollarSign, Zap, TrendingUp, Shield } from "lucide-react"

export function AutoFarmShowcase() {
  const [money, setMoney] = useState(6000)
  const [level, setLevel] = useState(1)
  const [xp, setXp] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isAnimating) return

    // Money animation
    const moneyInterval = setInterval(() => {
      setMoney((prev) => {
        if (prev >= 1000000) return 6000 // Reset cycle
        return prev + Math.floor(Math.random() * 15000) + 5000
      })
    }, 1500)

    // XP and Level animation
    const xpInterval = setInterval(() => {
      setXp((prev) => {
        const newXp = prev + Math.floor(Math.random() * 25) + 15
        if (newXp >= 100) {
          setLevel((l) => (l >= 20 ? 1 : l + 1)) // Reset at level 20
          return newXp - 100
        }
        return newXp
      })
    }, 800)

    return () => {
      clearInterval(moneyInterval)
      clearInterval(xpInterval)
    }
  }, [isAnimating])

  const formatMoney = (value: number) => {
    return `R$${value.toLocaleString("pt-BR")}`
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,0.1),transparent_50%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Auto Farm System</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              FIQUE RICO FÁCIL!
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Sistema de Auto Farm 100% automático. Ganhe dinheiro e XP enquanto você faz outras coisas!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Auto Farm Interface */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />

            <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-2 border-primary/30 rounded-2xl p-8 shadow-2xl backdrop-blur">
              {/* Interface header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Auto Farms</h3>
                    <p className="text-sm text-muted-foreground"># Auto Farm</p>
                  </div>
                </div>
              </div>

              {/* Auto Farm Toggles */}
              <div className="space-y-4 mb-8">
                {[
                  { name: "Auto Farm Gari", active: true },
                  { name: "Auto Farm Botijão", active: true },
                  { name: "Auto Farm Fazenda", active: true },
                ].map((farm, index) => (
                  <div
                    key={farm.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-primary/50 transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-medium">{farm.name}</span>
                    <div
                      className={`relative w-12 h-6 rounded-full transition-all ${
                        farm.active ? "bg-primary shadow-lg shadow-primary/50" : "bg-zinc-700"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                          farm.active ? "left-7" : "left-1"
                        }`}
                      />
                      {farm.active && <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Anti AFK Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 px-6 rounded-xl bg-primary/20 border-2 border-primary text-primary font-semibold hover:bg-primary/30 transition-all shadow-lg shadow-primary/20 animate-pulse-slow">
                  Ativar Anti AFK
                </button>
                <button className="w-full py-3 px-6 rounded-xl bg-zinc-800/50 border border-zinc-700 text-muted-foreground font-semibold hover:border-zinc-600 transition-all">
                  Desativar Anti AFK
                </button>
              </div>

              {/* Holographic effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent pointer-events-none rounded-2xl" />
            </div>
          </div>

          {/* Right side - Live Stats */}
          <div className="space-y-6">
            {/* Money Display */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl group-hover:blur-3xl transition-all" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-2 border-green-500/30 rounded-2xl p-8 backdrop-blur">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/50">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Dinheiro</p>
                    <p className="text-4xl font-bold text-green-400 tracking-tight">{formatMoney(money)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">Crescendo automaticamente</span>
                </div>
              </div>
            </div>

            {/* Level & XP Display */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-2 border-primary/30 rounded-2xl p-8 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Level</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {level}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Exp</p>
                    <p className="text-2xl font-bold">{xp}/100</p>
                  </div>
                </div>

                {/* XP Bar */}
                <div className="relative h-4 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500 ease-out rounded-full shadow-lg shadow-green-500/50"
                    style={{ width: `${xp}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>

                  {/* Particle effects on XP bar */}
                  {xp > 10 && (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-green-400/50"
                      style={{ left: `${xp}%` }}
                    />
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Ganhando XP automático</span>
                </div>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-primary/20 rounded-xl p-4 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-semibold mb-1">100% Automático</p>
                <p className="text-xs text-muted-foreground">Farm 24/7 sem parar</p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-secondary/20 rounded-xl p-4 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-sm font-semibold mb-1">Anti-AFK</p>
                <p className="text-xs text-muted-foreground">Nunca seja kickado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col gap-4 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-2 border-primary/30 rounded-2xl p-8 backdrop-blur">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              UPE NÍVEL ENQUANTO FARM!
            </h3>
            <p className="text-muted-foreground max-w-xl">
              Sistema de Auto Farm totalmente integrado com Anti-AFK. Deixe seu personagem farmando enquanto você faz o
              que quiser!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.8; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
