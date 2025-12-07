"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <Image src="/minihook-logo.png" alt="MiniHook Logo" width={48} height={48} className="h-12 w-auto" />
            <span className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-orbitron)" }}>
              MiniHook
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-muted-foreground hover:text-accent transition-colors">
              Recursos
            </Link>
            <Link href="#showcase" className="text-muted-foreground hover:text-accent transition-colors">
              Demonstração
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">
              Preços
            </Link>
            <Link
              href="https://discord.gg/ae6MKSGT"
              target="_blank"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Discord
            </Link>
          </nav>

          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-accent/50 transition-all"
            asChild
          >
            <Link href="https://discord.gg/ae6MKSGT" target="_blank">
              Comprar Agora
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
