"use client"

import { motion } from "framer-motion"
import { Eye, Target, Users, Zap } from "lucide-react"

export function EspExplainerSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-balance bg-gradient-to-r from-[#00AEEF] to-[#9b4dff] bg-clip-text text-transparent">
            Sistema ESP Avançado
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
            Visualização completa do campo de batalha com informações táticas em tempo real
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Visual demonstration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

              {/* ESP Boxes */}
              <EspBox
                top="20%"
                left="30%"
                color="from-red-500 to-orange-500"
                label="INIMIGO"
                distance="45m"
                health={75}
              />
              <EspBox
                top="50%"
                left="60%"
                color="from-green-500 to-emerald-500"
                label="ALIADO"
                distance="22m"
                health={100}
              />
              <EspBox
                top="65%"
                left="25%"
                color="from-yellow-500 to-amber-500"
                label="ALVO"
                distance="38m"
                health={50}
              />

              {/* Snaplines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.line
                  x1="50%"
                  y1="100%"
                  x2="35%"
                  y2="30%"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.line
                  x1="50%"
                  y1="100%"
                  x2="65%"
                  y2="60%"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.line
                  x1="50%"
                  y1="100%"
                  x2="30%"
                  y2="75%"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="relative w-8 h-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 w-0.5 h-3 -translate-x-1/2 bg-[#00AEEF]" />
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-3 -translate-x-1/2 bg-[#00AEEF]" />
                  <div className="absolute left-0 top-1/2 w-3 h-0.5 -translate-y-1/2 bg-[#00AEEF]" />
                  <div className="absolute right-0 top-1/2 w-3 h-0.5 -translate-y-1/2 bg-[#00AEEF]" />
                </motion.div>
              </div>

              {/* Radar */}
              <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-gray-900/80 backdrop-blur-sm border border-[#00AEEF]/30 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <div className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-[#00AEEF] rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <EspFeature
              icon={Eye}
              title="Visão Através das Paredes"
              description="Detecte inimigos, aliados e objetos através de qualquer obstáculo no mapa"
            />
            <EspFeature
              icon={Target}
              title="Caixas 2D/3D Personalizáveis"
              description="Escolha entre boxes 2D, 3D ou preenchidas com cores customizáveis por equipe"
            />
            <EspFeature
              icon={Users}
              title="Indicadores de Distância"
              description="Veja a distância exata de cada player e priorize seus alvos estrategicamente"
            />
            <EspFeature
              icon={Zap}
              title="Barras de Vida em Tempo Real"
              description="Monitore a saúde dos inimigos e identifique alvos vulneráveis instantaneamente"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EspBox({ top, left, color, label, distance, health }: any) {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Box outline */}
        <motion.div
          className={`w-20 h-28 border-2 bg-gradient-to-br ${color} opacity-20 rounded-sm`}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <div
          className={`absolute inset-0 border-2 border-gradient-to-br ${color.replace("from-", "border-").replace(" to-", "/")}`}
        />

        {/* Label */}
        <div
          className={`absolute -top-6 left-0 px-2 py-0.5 text-xs font-bold bg-gradient-to-r ${color} rounded text-white`}
        >
          {label}
        </div>

        {/* Distance */}
        <div className="absolute -bottom-6 left-0 text-xs text-white font-mono">{distance}</div>

        {/* Health bar */}
        <div className="absolute -bottom-10 left-0 w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${color}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${health}%` }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function EspFeature({ icon: Icon, title, description }: any) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-[#00AEEF]/50 transition-all group"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9b4dff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}
