import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Crown, Zap, Sparkles } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Semanal",
    price: "R$ 15",
    period: "por semana",
    features: [
      "MiniHook Mini City completo",
      "MiniHook Drawer (4 jogos)",
      "MiniHook Universal incluído",
      "Silent Aim + ESP + Desync",
      "Suporte básico",
    ],
    icon: Zap,
    popular: false,
  },
  {
    name: "Mensal",
    price: "R$ 25",
    period: "por mês",
    features: [
      "MiniHook Mini City completo",
      "MiniHook Drawer (4 jogos)",
      "MiniHook Universal incluído",
      "Silent Aim + ESP + Desync",
      "Suporte prioritário",
      "Atualizações antecipadas",
    ],
    icon: Check,
    popular: true,
    badge: "Melhor Custo-Benefício",
  },
  {
    name: "Permanente",
    price: "R$ 50",
    period: "vitalício",
    features: [
      "MiniHook Mini City completo",
      "MiniHook Drawer (4 jogos)",
      "MiniHook Universal incluído",
      "Silent Aim + ESP + Desync",
      "Suporte VIP 24/7",
      "Atualizações vitalícias",
      "Scripts exclusivos",
      "Acesso antecipado a novos produtos",
    ],
    icon: Crown,
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
            Escolha Seu <span className="text-accent">Plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem os 3 produtos: MiniHook, Drawer e Universal
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 border border-accent/30 animate-pulse">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-accent font-bold">3 Produtos Premium por 1 Preço</span>
            <Sparkles className="h-5 w-5 text-secondary" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-accent/10 to-card border-accent shadow-2xl shadow-accent/20 scale-105"
                  : "bg-card/50 border-border/50"
              } hover:border-accent/50 transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-secondary rounded-full text-sm font-bold text-background">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    plan.popular ? "from-accent to-secondary" : "from-accent/20 to-secondary/20"
                  } flex items-center justify-center mb-4`}
                >
                  <plan.icon className={`h-7 w-7 ${plan.popular ? "text-background" : "text-accent"}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.period}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-accent to-secondary text-background hover:shadow-lg hover:shadow-accent/50"
                    : "bg-card border border-accent/50 text-accent hover:bg-accent/10"
                }`}
                size="lg"
                asChild
              >
                <Link href="https://discord.gg/ae6MKSGT" target="_blank">
                  Comprar Agora
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
