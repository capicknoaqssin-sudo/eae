"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Target } from "lucide-react"

export function DesyncProtectionSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-zinc-950/50">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Como o Desync{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Te Protege
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Tiros inimigos erram enquanto sua hitbox real está protegida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: Shield,
              title: "Hitbox Falsa",
              description: "Sua hitbox verdadeira fica invisível para outros jogadores",
              color: "blue",
            },
            {
              icon: Zap,
              title: "Interceptação",
              description: "Pacotes de rede são interceptados e manipulados em tempo real",
              color: "purple",
            },
            {
              icon: Target,
              title: "Proteção Total",
              description: "Inimigos atiram na sua posição falsa enquanto você está seguro",
              color: "blue",
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
              <div
                className={`bg-gradient-to-br from-${feature.color}-500/10 to-${feature.color}-600/5 border border-${feature.color}-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-${feature.color}-500/50 transition-all duration-300`}
              >
                <div
                  className={`p-3 bg-${feature.color}-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual demonstration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-zinc-900/50 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
            {/* HUD Interface */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-zinc-800/50 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 font-mono text-sm">DESYNC STATUS</span>
                    <span className="text-green-400 font-mono text-sm font-bold">ACTIVE</span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { label: "Packet Delay", value: "250ms", color: "blue" },
                    { label: "Position Offset", value: "15 studs", color: "purple" },
                    { label: "Shots Avoided", value: "94%", color: "green" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-zinc-800/30 border border-zinc-700/50 rounded-lg p-3 flex items-center justify-between"
                    >
                      <span className="text-gray-400 font-mono text-sm">{stat.label}</span>
                      <span className={`text-${stat.color}-400 font-mono font-bold`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square bg-zinc-800/30 rounded-xl border border-purple-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(155,77,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(155,77,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                {/* Player (real) */}
                <motion.div
                  animate={{
                    x: [80, 120, 100, 80],
                    y: [80, 60, 100, 80],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute w-12 h-12 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(0,174,239,0.8)] z-10"
                />

                {/* Fake hitbox */}
                <motion.div
                  animate={{
                    x: [150, 180, 160, 150],
                    y: [150, 120, 160, 150],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: 0.5,
                  }}
                  className="absolute w-12 h-12 border-2 border-dashed border-purple-400/50 rounded-full"
                />

                {/* Enemy bullets missing */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, y: 20 + i * 30, opacity: 0 }}
                    animate={{
                      x: [20, 180],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                    className="absolute w-2 h-1 bg-red-500 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
