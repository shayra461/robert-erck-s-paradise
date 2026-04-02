import bookCover from '@/assets/book-cover.jpg';
import bgHero from '@/assets/bg-hero-jungle.jpg';
import ParallaxSection from './ParallaxSection';

const HeroSection = () => {
  return (
    <ParallaxSection
      id="home"
      backgroundImage={bgHero}
      overlay="linear-gradient(180deg, rgba(15,61,46,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(15,61,46,0.65) 100%)"
      speed={0.3}
      className="min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 pb-16">
        {/* Text */}
        <div className="order-2 md:order-1 text-center md:text-left" style={{ animation: 'fade-up 1s ease-out' }}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            A True Story
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="gradient-text-sunlight">Lost in</span>
            <br />
            <span className="text-foreground drop-shadow-lg">Paradise</span>
          </h1>
          <p className="font-story text-xl md:text-2xl text-foreground/80 italic mb-4 drop-shadow">
            by Robert Erck
          </p>
          <p className="font-body text-foreground/70 text-lg max-w-md mx-auto md:mx-0 mb-8 leading-relaxed drop-shadow">
            A breathtaking journey through love, escape, and self-discovery — set against the most beautiful and dangerous paradise on earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#buy" className="btn-paradise text-center">Buy Now</a>
            <a href="#about-book" className="btn-glass text-center">Read Preview</a>
          </div>
        </div>

        {/* Book cover */}
        <div className="order-1 md:order-2 flex justify-center" style={{ animation: 'fade-up 1s ease-out 0.3s both' }}>
          <div className="relative group">
            <div className="absolute -inset-8 rounded-[50%] opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-50" style={{ background: 'radial-gradient(circle, hsl(145, 55%, 35%), hsl(45, 100%, 70%), transparent)' }} />
            <div className="relative animate-book-hover" style={{ transformStyle: 'preserve-3d' }}>
              <img
                src={bookCover}
                alt="Lost in Paradise by Robert Erck - Book Cover"
                className="w-72 md:w-80 lg:w-96 rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
                width={384}
                height={576}
                style={{ boxShadow: '20px 20px 60px rgba(0,0,0,0.6), -5px -5px 20px rgba(31,122,99,0.2), 0 0 80px rgba(255,215,100,0.1)' }}
              />
              <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-lg" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.4), transparent)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float" style={{ animationDuration: '3s' }}>
        <span className="text-xs text-foreground/60 tracking-widest uppercase drop-shadow">Explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </ParallaxSection>
  );
};

export default HeroSection;
