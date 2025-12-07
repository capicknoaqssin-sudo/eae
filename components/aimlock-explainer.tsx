"use client"

import { useEffect, useState } from "react"

export function AimlockExplainer() {
  const [isAimlockActive, setIsAimlockActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAimlockActive((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,0.05),transparent_50%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9b4dff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#00AEEF]/20 to-[#9b4dff]/20 border border-[#00AEEF]/30 mb-6">
            <span className="text-[#00AEEF] font-bold text-sm tracking-wider">SISTEMA DE MIRA</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00AEEF] via-white to-[#9b4dff] bg-clip-text text-transparent">
            AIMLOCK
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Mira grudada automaticamente no alvo</p>
        </div>

        {/* Main Visualization */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Aimlock Demonstration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 rounded-2xl p-8 border border-[#00AEEF]/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">AIMLOCK</h3>
                <div
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${
                    isAimlockActive
                      ? "bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]"
                      : "bg-gray-800/50 text-gray-500 border border-gray-700"
                  }`}
                >
                  {isAimlockActive ? "ON" : "OFF"}
                </div>
              </div>

              {/* Visual Demo */}
              <div className="relative aspect-square bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-xl border border-[#00AEEF]/20 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={`h-${i}`} className="absolute w-full h-px bg-[#00AEEF]" style={{ top: `${i * 10}%` }} />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={`v-${i}`} className="absolute h-full w-px bg-[#00AEEF]" style={{ left: `${i * 10}%` }} />
                  ))}
                </div>

                {/* Target */}
                <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Target silhouette */}
                    <div className="w-20 h-24 bg-gradient-to-b from-red-500/80 to-red-700/80 rounded-lg border-2 border-red-400 shadow-lg shadow-red-500/50">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-400 rounded-full border-2 border-red-300" />
                    </div>
                    {/* Target label */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="px-3 py-1 bg-red-500/20 border border-red-500 rounded text-xs text-red-400 font-bold">
                        ALVO
                      </div>
                    </div>
                  </div>
                </div>

                {/* Crosshair - moves to target when active */}
                <div
                  className={`absolute transition-all duration-1000 ${
                    isAimlockActive
                      ? "top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2"
                      : "top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  }`}
                >
                  {/* Crosshair */}
                  <div className="relative w-12 h-12">
                    <div className={`absolute inset-0 transition-all ${isAimlockActive ? "animate-pulse" : ""}`}>
                      <div
                        className={`absolute top-1/2 left-0 w-full h-0.5 ${
                          isAimlockActive ? "bg-[#00AEEF]" : "bg-white"
                        }`}
                      />
                      <div
                        className={`absolute left-1/2 top-0 h-full w-0.5 ${
                          isAimlockActive ? "bg-[#00AEEF]" : "bg-white"
                        }`}
                      />
                      <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                          isAimlockActive ? "bg-[#00AEEF]" : "bg-white"
                        }`}
                      />
                    </div>
                    {/* Glow effect when active */}
                    {isAimlockActive && (
                      <div className="absolute inset-0 bg-[#00AEEF] rounded-full blur-xl opacity-50 animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Magnetic connection line */}
                {isAimlockActive && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="magnetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#9b4dff" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="66.6%"
                      y1="33.3%"
                      x2="66.6%"
                      y2="33.3%"
                      stroke="url(#magnetGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  </svg>
                )}

                {/* Magnet icons */}
                {isAimlockActive && (
                  <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-4 h-4 border-2 border-[#00AEEF] rounded-full animate-ping"
                        style={{
                          animationDelay: `${i * 0.3}s`,
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Status text */}
              <div className="mt-6 space-y-2">
                <div
                  className={`flex items-center gap-2 transition-all ${
                    isAimlockActive ? "text-[#00AEEF]" : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${isAimlockActive ? "bg-[#00AEEF] animate-pulse" : "bg-gray-500"}`}
                  />
                  <span className="text-sm font-medium">{isAimlockActive ? "Mira grudada no alvo" : "Mira livre"}</span>
                </div>
                <p className="text-sm text-gray-400 pl-4">A mira segue o alvo automaticamente</p>
              </div>
            </div>
          </div>

          {/* Silent Aim Comparison */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 rounded-2xl p-8 border border-[#9b4dff]/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">SILENT AIM</h3>
                <div className="px-4 py-2 rounded-lg font-bold bg-[#9b4dff]/20 text-[#9b4dff] border border-[#9b4dff]">
                  ON
                </div>
              </div>

              {/* Visual Demo */}
              <div className="relative aspect-square bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-xl border border-[#9b4dff]/20 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={`h-${i}`} className="absolute w-full h-px bg-[#9b4dff]" style={{ top: `${i * 10}%` }} />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={`v-${i}`} className="absolute h-full w-px bg-[#9b4dff]" style={{ left: `${i * 10}%` }} />
                  ))}
                </div>

                {/* Target */}
                <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Target silhouette */}
                    <div className="w-20 h-24 bg-gradient-to-b from-red-500/80 to-red-700/80 rounded-lg border-2 border-red-400 shadow-lg shadow-red-500/50">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-400 rounded-full border-2 border-red-300" />
                    </div>
                    {/* Target label */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="px-3 py-1 bg-red-500/20 border border-red-500 rounded text-xs text-red-400 font-bold">
                        ALVO
                      </div>
                    </div>
                  </div>
                </div>

                {/* Crosshair - stays off target */}
                <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white" />
                      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* Bullet trajectory correction with animated particles */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="bulletGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#9b4dff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Curved bullet path with glow */}
                  <path
                    d="M 50 66.6 Q 58 50 66.6 33.3"
                    stroke="url(#bulletGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0,200"
                      to="200,0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Moving bullet particles */}
                  <circle r="2" fill="#00AEEF">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 50 66.6 Q 58 50 66.6 33.3" />
                    <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="1.5" fill="#9b4dff">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 50 66.6 Q 58 50 66.6 33.3" begin="0.3s" />
                    <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </circle>
                  <circle r="1.5" fill="#ff00ff">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 50 66.6 Q 58 50 66.6 33.3" begin="0.6s" />
                    <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </circle>
                  {/* Arrow at end */}
                  <polygon points="66.6,33.3 64,36 69,36" fill="#ff00ff" className="animate-pulse" />
                </svg>

                {/* Impact effect on target */}
                <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="absolute w-6 h-6 bg-[#ff00ff] rounded-full animate-ping opacity-75" />
                  <div className="absolute w-4 h-4 bg-[#9b4dff] rounded-full animate-pulse" />
                </div>

                {/* Trajectory label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="px-3 py-1 bg-[#9b4dff]/20 border border-[#9b4dff] rounded text-xs text-[#9b4dff] font-bold whitespace-nowrap animate-pulse">
                    Trajetória Corrigida
                  </div>
                </div>
              </div>

              {/* Status text */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-[#9b4dff]">
                  <div className="w-2 h-2 rounded-full bg-[#9b4dff] animate-pulse" />
                  <span className="text-sm font-medium">Mira permanece fora do alvo</span>
                </div>
                <p className="text-sm text-gray-400 pl-4">O tiro curva automaticamente até o alvo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Diferenças Técnicas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Aimlock */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#00AEEF] animate-pulse" />
                  <h4 className="text-xl font-bold text-[#00AEEF]">AIMLOCK</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-lg">
                    <div className="text-[#00AEEF] font-bold">✓</div>
                    <p className="text-sm text-gray-300">Gruda a mira diretamente no alvo</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-lg">
                    <div className="text-[#00AEEF] font-bold">✓</div>
                    <p className="text-sm text-gray-300">Mira segue automaticamente</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-lg">
                    <div className="text-[#00AEEF] font-bold">✓</div>
                    <p className="text-sm text-gray-300">Visível no movimento da câmera</p>
                  </div>
                </div>
              </div>

              {/* Silent Aim */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#9b4dff] animate-pulse" />
                  <h4 className="text-xl font-bold text-[#9b4dff]">SILENT AIM</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-[#9b4dff]/5 border border-[#9b4dff]/20 rounded-lg">
                    <div className="text-[#9b4dff] font-bold">✓</div>
                    <p className="text-sm text-gray-300">Não move a mira</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-[#9b4dff]/5 border border-[#9b4dff]/20 rounded-lg">
                    <div className="text-[#9b4dff] font-bold">✓</div>
                    <p className="text-sm text-gray-300">Apenas corrige a trajetória do tiro</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-[#9b4dff]/5 border border-[#9b4dff]/20 rounded-lg">
                    <div className="text-[#9b4dff] font-bold">✓</div>
                    <p className="text-sm text-gray-300">Totalmente invisível para outros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
