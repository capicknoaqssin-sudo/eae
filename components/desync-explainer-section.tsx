"use client"

import { motion } from "framer-motion"
import { ArrowRight, User, Server } from "lucide-react"

export function DesyncExplainerSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated grid background */}
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
            O que é{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Desync</span>?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Separação entre sua posição real e a posição enviada ao servidor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Real Position */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Real Position</h3>
              </div>

              <div className="relative aspect-square bg-zinc-900/50 rounded-xl border border-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.2)_0%,transparent_70%)]" />
                <motion.div
                  animate={{
                    x: [0, 20, -10, 0],
                    y: [0, -15, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(0,174,239,0.8)]" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30" />
                </motion.div>

                {/* Holographic grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,174,239,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,174,239,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              </div>

              <p className="text-blue-300 mt-4 text-center font-medium">Sua posição verdadeira</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowRight className="w-12 h-12 text-purple-400" />
            </motion.div>
          </div>

          {/* Server Position */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-2 border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Server className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Server-Side Position</h3>
              </div>

              <div className="relative aspect-square bg-zinc-900/50 rounded-xl border border-purple-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,77,255,0.2)_0%,transparent_70%)]" />
                <motion.div
                  animate={{
                    x: [0, -25, 15, 0],
                    y: [0, 20, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-purple-500/50 rounded-full shadow-[0_0_30px_rgba(155,77,255,0.6)] border-2 border-purple-400/50 border-dashed" />
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-pulse opacity-20" />
                </motion.div>

                {/* Holographic grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(155,77,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(155,77,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                {/* Fake shots missing */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.7,
                    }}
                    className="absolute w-2 h-2 bg-red-500 rounded-full"
                    style={{
                      top: `${30 + i * 20}%`,
                      left: `${40 + i * 15}%`,
                    }}
                  />
                ))}
              </div>

              <p className="text-purple-300 mt-4 text-center font-medium">O que o servidor vê (falso)</p>
            </div>
          </motion.div>
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-gray-300 text-center text-lg leading-relaxed">
              O Desync manipula os pacotes de rede, fazendo com que o servidor receba uma posição diferente da sua real.
              Enquanto você se move livremente, o servidor pensa que você está em outro lugar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
