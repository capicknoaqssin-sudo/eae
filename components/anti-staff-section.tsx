"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Shield, Radio, Eye } from "lucide-react"

export function AntiStaffSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, rgba(239,68,68,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, rgba(239,68,68,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, rgba(239,68,68,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">SISTEMA DE SEGURANÇA</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-balance bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Anti-Staff Detection System
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
            Proteção avançada que detecta staff e administradores automaticamente, mantendo você seguro
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl" />

            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 overflow-hidden">
              {/* Alert animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Radar Detection */}
                <div className="relative">
                  <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                    <Radio className="w-5 h-5 text-red-500" />
                    Detecção em Tempo Real
                  </h3>

                  <div className="relative aspect-square bg-gray-950 rounded-2xl border border-red-500/30 overflow-hidden">
                    {/* Radar circles */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-red-500/30 rounded-full"
                        style={{ width: `${(i + 1) * 25}%`, height: `${(i + 1) * 25}%` }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                      />
                    ))}

                    {/* Center point (player) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00AEEF] rounded-full z-10" />

                    {/* Staff detection point */}
                    <motion.div
                      className="absolute"
                      style={{ top: "30%", left: "70%" }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 bg-red-500 rounded-full" />
                        <motion.div
                          className="absolute inset-0 bg-red-500 rounded-full"
                          animate={{ scale: [1, 2, 2], opacity: [0.8, 0, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                    </motion.div>

                    {/* Distance indicator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <svg className="w-full h-full">
                        <motion.line
                          x1="0"
                          y1="0"
                          x2="80"
                          y2="-80"
                          stroke="#ef4444"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        />
                      </svg>
                    </div>

                    {/* Distance label */}
                    <div className="absolute top-[25%] right-[20%] px-3 py-1 bg-red-500/90 rounded-lg text-white text-xs font-bold">
                      Staff: 45m
                    </div>
                  </div>
                </div>

                {/* Right: Alert Status */}
                <div>
                  <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Status de Segurança
                  </h3>

                  <div className="space-y-4">
                    <AlertStatus icon={AlertTriangle} label="Staff Detected in Server" status="ATIVO" active />
                    <AlertStatus icon={Radio} label="Proximity Warning" status="MONITORANDO" active />
                    <AlertStatus icon={Shield} label="Safety Mode Enabled" status="PROTEGIDO" active />
                    <AlertStatus icon={Eye} label="Auto-Hide Features" status="STANDBY" />
                  </div>

                  {/* Warning message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-red-500 mb-1">Administrador Próximo</p>
                        <p className="text-xs text-gray-400">
                          O sistema detectou um staff a 45m de distância. Recursos sensíveis foram automaticamente
                          desativados para sua proteção.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <SecurityFeature
              icon={Radio}
              title="Detecção Automática"
              description="Identifica staff assim que entram no servidor"
            />
            <SecurityFeature
              icon={Shield}
              title="Modo de Segurança"
              description="Desativa recursos automaticamente para evitar detecção"
            />
            <SecurityFeature
              icon={AlertTriangle}
              title="Alertas em Tempo Real"
              description="Notificações instantâneas quando staff se aproxima"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AlertStatus({ icon: Icon, label, status, active }: any) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
        active ? "bg-red-500/10 border-red-500/30" : "bg-gray-800/50 border-gray-700/50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            active ? "bg-red-500/20" : "bg-gray-700/50"
          }`}
        >
          <Icon className={`w-5 h-5 ${active ? "text-red-500" : "text-gray-500"}`} />
        </div>
        <span className="text-sm text-gray-300">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-bold ${active ? "text-red-500" : "text-gray-500"}`}>{status}</span>
        <motion.div
          className={`w-2 h-2 rounded-full ${active ? "bg-red-500" : "bg-gray-600"}`}
          animate={active ? { opacity: [1, 0.3, 1] } : {}}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </motion.div>
  )
}

function SecurityFeature({ icon: Icon, title, description }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-red-500/30 transition-all group"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}
