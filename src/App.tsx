import { HeroSection } from './components/photographer/HeroSection';
import { VisionSection } from './components/photographer/VisionSection';
import { PortfolioShowcase } from './components/photographer/PortfolioShowcase';
import { ServicesSection } from './components/photographer/ServicesSection';
import { TestimonialsSection } from './components/photographer/TestimonialsSection';
import { ContactSection } from './components/photographer/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] antialiased">
      <HeroSection />
      <VisionSection />
      <PortfolioShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}