import { Card } from "@/components/ui/card"
import { Target, Palette, Shield, Gamepad2, Sparkles, Globe } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "MiniHook Mini City",
    description: "Script exclusivo para Mini City RP com Silent Aim, ESP, e proteção anti-staff completa.",
    color: "text-accent",
    badge: "Produto 1",
  },
  {
    icon: Palette,
    title: "MiniHook Drawer",
    description: "Suporte completo para Draw Me!, Draw & Donate, Pass or Kill e mais jogos de desenho.",
    color: "text-secondary",
    badge: "Produto 2",
  },
  {
    icon: Globe,
    title: "MiniHook Universal",
    description: "Desync universal funcionando em TODOS os jogos do Roblox. De brinde na sua compra!",
    color: "text-accent",
    badge: "Produto 3",
  },
  {
    icon: Shield,
    title: "Sistema Seguro",
    description: "Proteção avançada contra detecção em todos os 3 produtos, mantendo sua conta segura.",
    color: "text-secondary",
  },
  {
    icon: Sparkles,
    title: "Alto Desempenho",
    description: "Otimizado para rodar sem lag em qualquer jogo, garantindo a melhor experiência possível.",
    color: "text-accent",
  },
  {
    icon: Gamepad2,
    title: "Suporte Completo",
    description: "Atualizações constantes e suporte 24/7 no Discord para todos os produtos inclusos.",
    color: "text-secondary",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
            3 Produtos <span className="text-accent">Inclusos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compre 1, ganhe 3! Acesso completo ao <span className="text-accent font-semibold">MiniHook</span>,{" "}
            <span className="text-secondary font-semibold">Drawer</span> e{" "}
            <span className="text-accent font-semibold">Universal</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all group hover:shadow-lg hover:shadow-accent/10 relative"
            >
              {feature.badge && (
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-accent to-secondary rounded-full text-xs font-bold text-background shadow-lg">
                  {feature.badge}
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
