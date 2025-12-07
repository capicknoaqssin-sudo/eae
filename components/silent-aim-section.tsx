"use client"

import { motion } from "framer-motion"
import { Crosshair, Eye, Activity, Zap, Target, Shield } from "lucide-react"

export function SilentAimSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,77,255,0.1)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Silent Aim Universal
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Precisão automática invisível em todos os jogos suportados
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Seleção Automática",
                description:
                  "O sistema escolhe o alvo mais próximo automaticamente, travando em head, torso ou parte configurada",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Zap,
                title: "Correção Invisível",
                description:
                  "Cálculos matemáticos, vetores e ângulos corrigem a trajetória sem que você ou o servidor percebam",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Desync Universal Integrado",
                description: "Combine com desync para máxima proteção enquanto mantém 100% de precisão",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zinc-900/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(155,77,255,0.3)] transition-all h-full">
                  <div className={`p-3 bg-gradient-to-r ${feature.gradient} bg-opacity-20 rounded-lg w-fit mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-video bg-zinc-900/50 rounded-xl border border-purple-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,77,255,0.15)_0%,transparent_70%)]" />

                {/* Bullet trajectory path (curved line from center to locked target) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 15 }}>
                  <defs>
                    <linearGradient id="bulletGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="rgb(34, 211, 238)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.9" />
                    </linearGradient>

                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Curved bullet path */}
                  <motion.path
                    d="M 50% 50% Q 60% 35%, 70% 40%"
                    stroke="url(#bulletGradient)"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow)"
                    strokeDasharray="1000"
                    initial={{ strokeDashoffset: 1000, opacity: 0 }}
                    animate={{
                      strokeDashoffset: [1000, 0, 0, 1000],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 0.5,
                      times: [0, 0.4, 0.8, 1],
                    }}
                  />
                </svg>

                {/* Animated bullet particles following the trajectory */}
                {[0, 0.3, 0.6].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    style={{
                      left: "50%",
                      top: "50%",
                      zIndex: 16,
                    }}
                    animate={{
                      x: ["0%", "120px", "220px"],
                      y: ["0%", "-80px", "-60px"],
                      scale: [1, 1.2, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: delay,
                      repeatDelay: 1,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Impact effect on locked target */}
                <motion.div
                  className="absolute"
                  style={{ left: "70%", top: "40%", zIndex: 17 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1.4,
                  }}
                >
                  <div className="w-8 h-8 border-2 border-red-400 rounded-full" />
                </motion.div>

                {/* Tracer line label */}
                <motion.div
                  className="absolute text-cyan-300 font-mono text-xs font-bold bg-zinc-900/80 px-2 py-1 rounded border border-cyan-500/50"
                  style={{ left: "58%", top: "38%", zIndex: 18 }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  TRAJETÓRIA REDIRECIONADA
                </motion.div>

                {/* Player position (center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    {/* Real crosshair (where player is aiming) */}
                    <div className="relative mb-2">
                      <div className="w-8 h-0.5 bg-purple-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="h-8 w-0.5 bg-purple-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="w-3 h-3 border-2 border-purple-400 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-purple-400 text-xs font-mono font-bold">MIRA REAL</span>
                    </div>
                  </div>
                </div>

                {/* Enemy targets with aim lines */}
                {[
                  { x: "25%", y: "30%", locked: false },
                  { x: "70%", y: "40%", locked: true },
                  { x: "50%", y: "65%", locked: false },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: pos.x, top: pos.y }}
                    animate={{
                      scale: pos.locked ? [1, 1.15, 1] : [1, 1.05, 1],
                    }}
                    transition={{
                      duration: pos.locked ? 1.5 : 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  >
                    <div className="relative">
                      <div
                        className={`w-12 h-12 border-2 ${pos.locked ? "border-red-500" : "border-orange-500/50"} rounded-full ${pos.locked ? "animate-pulse" : ""}`}
                      />
                      <div
                        className={`absolute inset-0 ${pos.locked ? "bg-red-500/30" : "bg-orange-500/10"} rounded-full`}
                      />
                      <Activity
                        className={`w-6 h-6 ${pos.locked ? "text-red-400" : "text-orange-400/50"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                      />

                      {/* Silent Aim line (only for locked target) */}
                      {pos.locked && (
                        <>
                          <motion.div
                            className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent origin-bottom"
                            style={{
                              transform: "translate(-50%, -100%) rotate(-45deg)",
                            }}
                            animate={{
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-cyan-400 text-xs font-mono font-bold">LOCKED</span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Info overlays */}
                <div className="absolute top-4 right-4 bg-zinc-900/80 border border-cyan-500/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400 font-mono text-xs font-bold">SILENT AIM ACTIVE</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">Target Locked: HEAD</div>
                  <div className="text-xs text-gray-400 font-mono">Distance: 47.3m</div>
                </div>

                <div className="absolute bottom-4 left-4 bg-zinc-900/80 border border-green-500/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-mono text-xs font-bold">DESYNC ON</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">Protection: Active</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-display font-bold mb-2 flex items-center gap-2">
                    <Crosshair className="w-4 h-4" />
                    Como Funciona
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Você mira em qualquer direção, mas o sistema automaticamente redireciona seus tiros para o alvo mais
                    próximo. A correção é invisível para você e para o servidor.
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-display font-bold mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    100% Indetectável
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Outros jogadores não veem marcadores, linhas ou qualquer indicação. O sistema usa cálculos
                    matemáticos avançados para ajustar a trajetória invisível.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 border-2 border-green-500/50 rounded-2xl p-8 backdrop-blur-sm text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="inline-block mb-4"
                >
                  <div className="bg-green-500/20 border border-green-500 rounded-full px-4 py-2">
                    <span className="text-green-400 font-mono text-sm font-bold">🎁 BÔNUS INCLUÍDO</span>
                  </div>
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Desync Universal de Brinde!
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Além do Silent Aim, você recebe o sistema de Desync Universal gratuitamente. Proteção máxima enquanto
                  mantém 100% de precisão em todos os jogos suportados.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
