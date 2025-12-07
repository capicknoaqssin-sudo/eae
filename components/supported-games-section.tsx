"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import Image from "next/image"

const supportedGames = [
  {
    name: "Draw Me!",
    image: "/draw-me-logo.png",
    features: ["Auto Draw", "Desync Universal", "Silent Aim"],
  },
  {
    name: "Draw & Donate",
    image: "/draw-donate-logo.png",
    features: ["Auto Draw", "Fast Drawing", "Export Ready"],
  },
  {
    name: "Speed Draw",
    image: "/speed-draw-logo.png",
    features: ["Auto Decision", "Speed Mode", "Desync"],
  },
  {
    name: "Draw or Oof",
    image: "/draw-or-oof-logo.png",
    features: ["Universal Support", "All Features", "Full Desync"],
  },
]

export function SupportedGamesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.1)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(155,77,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(155,77,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            MiniHook Drawer:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Jogos Compatíveis
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Totalmente compatível com todos esses jogos + Desync Universal de brinde
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {supportedGames.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30 rounded-xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(0,174,239,0.3)] transition-all duration-300">
                {/* Game Image */}
                <div className="relative aspect-square bg-zinc-900/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Game Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-4 text-center">{game.name}</h3>

                  <div className="space-y-2">
                    {game.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="p-1 bg-blue-500/20 rounded">
                          <Check className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-blue-500/20">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 font-mono text-xs font-bold">COMPATÍVEL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border-2 border-blue-500/30 rounded-xl p-8 backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.1)_0%,transparent_70%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Image src="/speed-draw-logo.png" alt="Paintbrush" width={40} height={40} className="animate-pulse" />
                <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Todos os jogos incluem{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Desync Universal
                </span>
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                O MiniHook Drawer é compatível com TODOS esses jogos e vem com Desync Universal de brinde para proteção
                máxima
              </p>
              <div className="inline-block bg-green-500/20 border border-green-500/50 rounded-full px-6 py-2">
                <span className="text-green-400 font-mono font-bold">+ Mais jogos sendo adicionados!</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
