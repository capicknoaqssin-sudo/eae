import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
            Demonstração <span className="text-secondary">do Produto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Veja o MiniHook em ação no Mini City RP</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-accent/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Interface Futurista
              </h3>
              <ul className="space-y-4">
                {[
                  "Menu intuitivo e fácil de usar",
                  "Teclas de atalho customizáveis",
                  "Tema dark mode elegante",
                  "Atualizações automáticas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-secondary/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Funcionalidades Premium
              </h3>
              <ul className="space-y-4">
                {[
                  "Silent Aim com precisão perfeita",
                  "Drawer para pinturas automáticas",
                  "ESP para localizar jogadores",
                  "Scripts pré-configurados",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 blur-3xl" />
            <Card className="relative p-4 bg-card/30 backdrop-blur-sm border-accent/30">
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dM69y4GSS3I"
                  title="MiniHook Demonstration"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
