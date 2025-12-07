"use client"

import { motion } from "framer-motion"
import { Paintbrush, Sparkles, Download, Palette } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function DrawerShowcaseSection() {
  const [activeGame, setActiveGame] = useState(0)

  const games = [
    {
      name: "Draw Me!",
      logo: "/draw-me-logo.png",
      description: "Desenhe retratos dos jogadores automaticamente",
    },
    {
      name: "Draw & Donate",
      logo: "/draw-donate-logo.png",
      description: "Crie desenhos para receber doações",
    },
    {
      name: "Speed Draw",
      logo: "/speed-draw-logo.png",
      description: "Desenhe o mais rápido possível contra outros jogadores",
    },
    {
      name: "Draw or Oof",
      logo: "/draw-or-oof-logo.png",
      description: "Desenhe corretamente ou seja eliminado",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-zinc-950/50">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            MiniHook{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Drawer</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Sistema de desenho automático compatível com 4 jogos populares
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {games.map((game, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveGame(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeGame === index
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400 shadow-lg shadow-blue-500/20"
                    : "bg-zinc-900/50 border-zinc-700/50 hover:border-blue-500/50"
                }`}
              >
                <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden">
                  <Image src={game.logo || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
                </div>
                <h3 className="font-display text-sm font-bold text-white text-center">{game.name}</h3>
                {activeGame === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 border-2 border-blue-400 rounded-xl pointer-events-none"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeGame}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{games[activeGame].description}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Sparkles,
                title: "Auto Draw",
                description: "Desenhos criados automaticamente linha por linha",
              },
              {
                icon: Palette,
                title: "Color Control",
                description: "Seleção avançada de cores e pincéis",
              },
              {
                icon: Download,
                title: "Export Ready",
                description: "Exporte seus desenhos facilmente",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Interface Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/80 border-2 border-blue-500/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                {/* Control Panel */}
                <div className="space-y-4">
                  <div className="bg-zinc-800/50 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-white font-display font-bold mb-3 flex items-center gap-2">
                      <Paintbrush className="w-4 h-4 text-blue-400" />
                      Brush Settings
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-400 font-mono mb-1 block">SIZE</label>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 font-mono mb-1 block">SPEED</label>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-purple-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800/50 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="text-white font-display font-bold mb-3 flex items-center gap-2">
                      <Palette className="w-4 h-4 text-purple-400" />
                      Color Palette
                    </h4>
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        "#FF0000",
                        "#00FF00",
                        "#0000FF",
                        "#FFFF00",
                        "#FF00FF",
                        "#00FFFF",
                        "#FFA500",
                        "#800080",
                        "#FFC0CB",
                        "#FFD700",
                      ].map((color, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-lg border-2 border-white/20 hover:border-white/50 transition-all cursor-pointer"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Canvas Preview */}
                <div className="relative aspect-video bg-white rounded-xl border-2 border-blue-500/30 overflow-hidden">
                  <svg className="w-full h-full">
                    <motion.path
                      d="M 50 150 Q 100 50 200 150 T 350 150"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00AEEF" />
                        <stop offset="100%" stopColor="#9b4dff" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute top-4 left-4 bg-black/50 border border-blue-500/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <span className="text-blue-400 font-mono text-xs font-bold">DRAWING...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
