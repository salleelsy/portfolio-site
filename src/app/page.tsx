import { Hero } from "@/components/hero/Hero";
import { PortfolioTabs } from "@/components/Tab/PortfolioTabs";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      <Hero />
      <PortfolioTabs />
      <ContactSection />
    </main>
  );
}
