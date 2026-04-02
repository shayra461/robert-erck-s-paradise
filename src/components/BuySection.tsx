import { ShoppingCart, BookOpen, Headphones, Sun } from 'lucide-react';
import bookCover from '@/assets/book-cover.jpg';
import bookBackCover from '@/assets/book-back-cover.png';
import bgSunset from '@/assets/bg-sunset-beach.jpg';
import ParallaxSection from './ParallaxSection';

const formats = [
  { icon: BookOpen, label: 'Paperback', price: '$14.99', link: '#' },
  { icon: BookOpen, label: 'Hardcover', price: '$24.99', link: '#', featured: true },
  { icon: Headphones, label: 'Audiobook', price: '$19.99', link: '#' },
];

const BuySection = () => {
  return (
    <ParallaxSection
      id="buy"
      backgroundImage={bgSunset}
      overlay="linear-gradient(180deg, rgba(10,30,20,0.82) 0%, rgba(0,0,0,0.65) 50%, rgba(15,61,46,0.8) 100%)"
      speed={0.25}
    >
      <div className="section-padding">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3 flex items-center justify-center gap-2">
              <Sun size={14} className="text-primary" />
              Get Your Copy
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Buy <span className="gradient-text-sunlight">the Book</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {formats.map((f, i) => (
              <div
                key={f.label}
                className={`glass-jungle rounded-2xl p-8 text-center group transition-all duration-500 animate-on-scroll hover:scale-105 ${f.featured ? 'ring-2 ring-primary/40 scale-105' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {f.featured && (
                  <span className="inline-block text-xs uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full font-body mb-4">Most Popular</span>
                )}
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: 'rgba(31,122,99,0.2)', boxShadow: '0 0 20px rgba(31,122,99,0.15)' }}>
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{f.label}</h3>
                <p className="text-3xl font-display font-bold gradient-text-sunlight mb-6">{f.price}</p>
                <a href={f.link} className={`inline-flex items-center gap-2 ${f.featured ? 'btn-paradise' : 'btn-glass'} w-full justify-center`}>
                  <ShoppingCart size={18} />
                  Buy on Amazon
                </a>
              </div>
            ))}
          </div>

          <div className="glass-jungle rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 max-w-3xl mx-auto animate-on-scroll">
            <div className="flex items-center gap-4 shrink-0">
              <img src={bookCover} alt="Lost in Paradise - Front Cover" className="w-24 rounded shadow-lg" loading="lazy" />
              <img src={bookBackCover} alt="Lost in Paradise - Back Cover" className="w-24 rounded shadow-lg" loading="lazy" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-semibold text-foreground">Available worldwide</p>
              <p className="text-sm text-foreground/60 font-body">Also available on Kindle, Apple Books, and other major platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default BuySection;
