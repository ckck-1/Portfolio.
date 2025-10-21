import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero-section";
import BrandsSection from "@/components/sections/brands-section";
import ServicesSection from "@/components/sections/services-section";
import WorksTitleSection from "@/components/sections/works-title-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import MetricsSection from "@/components/sections/metrics-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";
import PageTurnScroll from "@/components/page-turn-scroll";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTurnScroll>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <WorksTitleSection />
        <PortfolioSection />
        <MetricsSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </PageTurnScroll>
    </div>
  );
}