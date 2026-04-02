import bookCover from '@/assets/book-cover.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(25, 95%, 60%), transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(200, 80%, 50%), transparent 70%)' }} />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-10 animate-glow-pulse" style={{ background: 'radial-gradient(circle, hsl(340, 80%, 60%), transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center pt-24">
        {/* Text */}
        <div className="order-2 md:order-1 text-center md:text-left" style={{ animation: 'fade-up 1s ease-out' }}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">A True Story</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="gradient-text-sunset">Lost in</span>
            <br />
            <span className="text-foreground">Paradise</span>
          </h1>
          <p className="font-story text-xl md:text-2xl text-muted-foreground italic mb-4">
            by Robert Erck
          </p>
          <p className="font-body text-muted-foreground text-lg max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            A breathtaking journey through love, escape, and self-discovery — set against the most beautiful and dangerous paradise on earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#buy" className="btn-paradise text-center">Buy Now</a>
            <a href="#about-book" className="btn-glass text-center">Read Preview</a>
          </div>
        </div>

        {/* Book cover 3D */}
        <div className="order-1 md:order-2 flex justify-center" style={{ animation: 'fade-up 1s ease-out 0.3s both' }}>
          <div className="relative group">
            {/* Glow behind book */}
            <div className="absolute inset-0 rounded-2xl opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-60" style={{ background: 'var(--gradient-sunset)' }} />
            {/* Book */}
            <div className="relative animate-book-hover" style={{ transformStyle: 'preserve-3d' }}>
              <img
                src={bookCover}
                alt="Lost in Paradise by Robert Erck - Book Cover"
                className="w-72 md:w-80 lg:w-96 rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
                style={{ boxShadow: '20px 20px 60px hsla(0,0%,0%,0.5), -5px -5px 20px hsla(25,95%,60%,0.1)' }}
              />
              {/* Spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-lg" style={{ background: 'linear-gradient(90deg, hsla(0,0%,0%,0.4), transparent)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float" style={{ animationDuration: '3s' }}>
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
