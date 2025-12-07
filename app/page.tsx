import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsBundleSection } from "@/components/products-bundle-section"
import { DesyncExplainerSection } from "@/components/desync-explainer-section"
import { DesyncProtectionSection } from "@/components/desync-protection-section"
import { SilentAimSection } from "@/components/silent-aim-section"
import { DrawerShowcaseSection } from "@/components/drawer-showcase-section"
import { MenuShowcaseSection } from "@/components/menu-showcase-section"
import { EspExplainerSection } from "@/components/esp-explainer-section"
import { AntiStaffSection } from "@/components/anti-staff-section"
import { SupportedGamesSection } from "@/components/supported-games-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { PricingSection } from "@/components/pricing-section"
import { DiscordSection } from "@/components/discord-section"
import { Footer } from "@/components/footer"
import { PlayerListShowcase } from "@/components/player-list-showcase"
import { TargetPlayerShowcase } from "@/components/target-player-showcase"
import { TargetStrafeExplainer } from "@/components/target-strafe-explainer"
import { AutoFarmShowcase } from "@/components/auto-farm-showcase"
import { FlingCarShowcase } from "@/components/fling-car-showcase"
import { AimlockExplainer } from "@/components/aimlock-explainer"
import { AntiItemLossShowcase } from "@/components/anti-item-loss-showcase"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <ProductsBundleSection />
        <PlayerListShowcase />
        <TargetPlayerShowcase />
        <TargetStrafeExplainer />
        <AutoFarmShowcase />
        <FlingCarShowcase />
        <AimlockExplainer />
        <AntiItemLossShowcase />
        <DesyncExplainerSection />
        <DesyncProtectionSection />
        <SilentAimSection />
        <DrawerShowcaseSection />
        <MenuShowcaseSection />
        <EspExplainerSection />
        <AntiStaffSection />
        <SupportedGamesSection />
        <ShowcaseSection />
        <PricingSection />
        <DiscordSection />
        <Footer />
      </div>
    </main>
  )
}
