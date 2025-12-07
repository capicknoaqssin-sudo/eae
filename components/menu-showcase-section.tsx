"use client"

import { motion } from "framer-motion"

export function MenuShowcaseSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0,174,239,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(155,77,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0,174,239,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-balance bg-gradient-to-r from-[#00AEEF] via-purple-400 to-[#9b4dff] bg-clip-text text-transparent">
            Interface Profissional Premium
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
            Menu intuitivo e moderno com controles avançados para dominação total
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Combat Menu */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-[#9b4dff]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 overflow-hidden">
              {/* Scanline effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00AEEF]/5 to-transparent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Menu header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00AEEF] to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Combate</h3>
                  <p className="text-sm text-gray-400">Silent Aim Ativo</p>
                </div>
              </div>

              {/* Menu options */}
              <div className="space-y-3 relative z-10">
                <MenuOption label="Silent Aim" value="Ativado" active />
                <MenuOption label="Aimlock" value="Teleportar" />
                <MenuOption label="Friendly Player" value="Notificar Acertos" />
                <MenuOption label="Target Player" value="Check Visível" />
                <MenuOption label="Check Safezone" />
                <MenuOption label="Ignorar Mortos" />
                <MenuOption label="Marcar Alvo" active />
                <MenuOption label="Varar Parede" />
                <MenuOption label="Mostrar Círculo" />
              </div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#00AEEF] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Visual/ESP Menu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9b4dff]/20 to-[#00AEEF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 overflow-hidden">
              {/* Scanline effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9b4dff]/5 to-transparent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 1.5 }}
              />

              {/* Menu header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9b4dff] to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Visual</h3>
                  <p className="text-sm text-gray-400">ESP Ativo</p>
                </div>
              </div>

              {/* Color picker */}
              <div className="mb-6 relative z-10">
                <div className="h-12 rounded-lg overflow-hidden border border-gray-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-yellow-500 to-green-500" />
                  <motion.div
                    className="absolute top-1/2 w-4 h-4 bg-white border-2 border-gray-900 rounded-full shadow-lg"
                    style={{ right: "10%" }}
                    animate={{ x: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>

              {/* Menu options */}
              <div className="space-y-3 relative z-10">
                <MenuOption label="ESP" active />
                <MenuOption label="Desync" active />
                <MenuOption label="Inimigos" active />
                <MenuOption label="Amigos" />
                <MenuOption label="Usar cor do Time" />
                <MenuOption label="Caixa 2D" active />
                <MenuOption label="Caixa 3D" />
                <MenuOption label="Caixa Cheia" />
                <MenuOption label="Vida Barra" active />
              </div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#9b4dff] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MenuOption({ label, value, active }: { label: string; value?: string; active?: boolean }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all group"
    >
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-sm">#</span>
        <span className="text-gray-300 text-sm">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        {value && <span className="text-xs text-gray-500">{value}</span>}
        <motion.div
          className={`w-10 h-5 rounded-full flex items-center transition-colors ${
            active ? "bg-[#00AEEF]" : "bg-gray-700"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-4 h-4 bg-white rounded-full shadow-lg"
            animate={{ x: active ? 22 : 2 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
