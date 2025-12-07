"use client"

import { Card } from "@/components/ui/card"
import { Target, Palette, Globe, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    icon: Target,
    name: "MiniHook Mini City",
    tagline: "Script Exclusivo",
    description: "Desenvolvido especificamente para Mini City RP com recursos premium",
    features: [
      "Silent Aim Universal",
      "ESP completo com Box, Health e Distance",
      "Sistema Anti-Staff Detection",
      "Aimlock automático",
      "Teleport e Speed Hack",
      "Proteção Anti-Kick",
    ],
    color: "from-accent to-accent/50",
    textColor: "text-accent",
  },
  {
    id: 2,
    icon: Palette,
    name: "MiniHook Drawer",
    tagline: "4 Jogos Suportados",
    description: "Sistema automático de desenho para jogos populares do Roblox",
    features: [
      "Draw Me! (suporte completo)",
      "Draw & Donate (auto-draw)",
      "Pass or Kill (desenho perfeito)",
      "Outros jogos de desenho",
      "Interface intuitiva",
      "Biblioteca de imagens",
    ],
    color: "from-secondary to-secondary/50",
    textColor: "text-secondary",
  },
  {
    id: 3,
    icon: Globe,
    name: "MiniHook Universal",
    tagline: "Desync para Todos os Jogos",
    description: "Proteção universal funcionando em qualquer jogo do Roblox",
    features: [
      "Desync Universal (GRÁTIS)",
      "Funciona em TODOS os jogos",
      "Proteção contra headshots",
      "Hitbox manipulation",
      "Anti-aim avançado",
      "Atualizações constantes",
    ],
    color: "from-accent via-secondary to-accent",
    textColor: "text-accent",
    badge: "DE BRINDE",
  },
]

export function ProductsBundleSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 border border-accent/30">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            <span className="text-accent font-bold text-lg">Bundle Completo Premium</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
            Compre 1, Ganhe{" "}
            <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              3 Produtos
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na compra de qualquer plano você recebe acesso completo aos 3 produtos premium.
            <br />
            <span className="text-accent font-semibold">MiniHook Universal é totalmente de brinde!</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-accent to-secondary rounded-full text-sm font-bold text-background shadow-2xl animate-pulse z-10">
                  {product.badge}
                </div>
              )}

              {/* Product Number */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center text-accent font-bold text-lg">
                {product.id}
              </div>

              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto mt-8`}
              >
                <product.icon className="h-10 w-10 text-background" />
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <div>
                  <div className={`text-sm font-semibold ${product.textColor} mb-1`}>{product.tagline}</div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 text-left pt-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ArrowRight
                        className={`h-4 w-4 ${product.textColor} shrink-0 mt-0.5 ${
                          hoveredProduct === product.id ? "translate-x-1" : ""
                        } transition-transform`}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-lg -z-10`}
              />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/30">
            <p className="text-lg text-muted-foreground mb-2">
              Investimento único para <span className="text-accent font-bold">3 produtos premium completos</span>
            </p>
            <p className="text-2xl font-bold">
              <span className="text-accent">MiniHook</span> + <span className="text-secondary">Drawer</span> +{" "}
              <span className="text-accent">Universal</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
