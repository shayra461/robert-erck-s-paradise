import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
      <Navbar />
      <HeroSection />
      <AboutBookSection />
      <AuthorSection />
      <ReviewsSection />
      <BuySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
