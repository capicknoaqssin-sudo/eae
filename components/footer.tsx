import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/minihook-logo.png" alt="MiniHook Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold text-accent" style={{ fontFamily: "var(--font-orbitron)" }}>
                MiniHook
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O script mais avançado e seguro para Mini City RP no Roblox.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-accent transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="hover:text-accent transition-colors">
                  Demonstração
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-accent transition-colors">
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://discord.gg/Bk45VSsdQ7"
                  target="_blank"
                  className="hover:text-accent transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 MiniHook. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <Link
                href="https://www.roblox.com/pt/games/113494949872227/Mini-City-RP"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Jogar Mini City RP
              </Link>
              <Link
                href="https://discord.gg/Bk45VSsdQ7"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
