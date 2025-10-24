import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/brands-section";


import PortfolioSection from "@/components/sections/portfolio-section";
import MetricsSection from "@/components/sections/metrics-section";
import ContactSection from "@/components/sections/contact-section";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="about">
        <SkillsSection />
      </div>

      <div id="works">
        <PortfolioSection />
      </div>
      <MetricsSection />
      <div id="contact">
        <ContactSection />
      </div>
      <CtaSection />
      <Footer />
    </div>
  );
}