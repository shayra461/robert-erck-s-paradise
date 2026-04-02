import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import JungleBackground from '@/components/JungleBackground';
import FloatingParticles from '@/components/FloatingParticles';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WaveDivider from '@/components/WaveDivider';
import AboutBookSection from '@/components/AboutBookSection';
import AuthorSection from '@/components/AuthorSection';
import ReviewsSection from '@/components/ReviewsSection';
import BuySection from '@/components/BuySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background relative" style={{ scrollBehavior: 'smooth' }}>
      <JungleBackground />
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <WaveDivider color="hsl(155, 45%, 10%)" />
      <AboutBookSection />
      <WaveDivider color="hsl(155, 50%, 12%)" flip />
      <AuthorSection />
      <WaveDivider color="hsl(155, 45%, 10%)" />
      <ReviewsSection />
      <WaveDivider color="hsl(155, 50%, 12%)" flip />
      <BuySection />
      <WaveDivider color="hsl(155, 45%, 10%)" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
