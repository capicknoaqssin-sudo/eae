"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card gradient-animate opacity-80" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 text-accent text-sm font-semibold animate-pulse">
              3 Produtos em 1 Compra
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold leading-tight text-balance"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              MiniHook
              <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent gradient-animate">
                Bundle Completo
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Compre 1 e ganhe <span className="text-accent font-semibold">3 produtos completos</span>:{" "}
              <span className="text-secondary font-semibold">MiniHook</span> exclusivo para Mini City RP,{" "}
              <span className="text-accent font-semibold">MiniHook Drawer</span> para jogos de desenho, e{" "}
              <span className="text-secondary font-semibold">MiniHook Universal</span> com desync para todos os jogos.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-secondary text-primary-foreground font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50 transition-all group"
                asChild
              >
                <Link href="#pricing">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Comprar Agora
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10 text-lg px-8 py-6 group bg-transparent"
                asChild
              >
                <Link href="https://discord.gg/ae6MKSGT" target="_blank">
                  Entrar no Discord
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Usuários Ativos</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Seguro</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-secondary/30 blur-3xl rounded-full" />
            <Image
              src="/mini-city-game.png"
              alt="Mini City RP Gameplay"
              width={800}
              height={600}
              className="relative rounded-2xl border border-accent/30 shadow-2xl shadow-accent/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
