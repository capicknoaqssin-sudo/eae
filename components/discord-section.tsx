import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Users, Headphones } from "lucide-react"
import Link from "next/link"

export function DiscordSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-secondary/30 bg-gradient-to-br from-card via-card to-secondary/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent mb-6 animate-pulse">
                <MessageCircle className="w-10 h-10 text-background" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
                Junte-se à Nossa <span className="text-secondary">Comunidade</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Entre no nosso Discord para suporte 24/7, atualizações exclusivas, tutoriais e conexão com outros
                jogadores do MiniHook.
              </p>

              <div className="grid md:grid-cols-3 gap-6 py-8">
                <div className="flex flex-col items-center gap-2">
                  <Users className="w-8 h-8 text-secondary" />
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Membros Ativos</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MessageCircle className="w-8 h-8 text-secondary" />
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Chat Ativo</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Headphones className="w-8 h-8 text-secondary" />
                  <div className="text-2xl font-bold text-accent">Rápido</div>
                  <div className="text-sm text-muted-foreground">Suporte Técnico</div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent text-background font-bold text-lg px-12 py-6 shadow-2xl hover:shadow-secondary/50 transition-all group"
                asChild
              >
                <Link href="https://discord.gg/Bk45VSsdQ7" target="_blank">
                  <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                  Entrar no Discord
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
