import { ShoppingCart, BookOpen, Headphones } from 'lucide-react';
import bookCover from '@/assets/book-cover.jpg';

const formats = [
  { icon: BookOpen, label: 'Paperback', price: '$14.99', link: '#' },
  { icon: BookOpen, label: 'Hardcover', price: '$24.99', link: '#', featured: true },
  { icon: Headphones, label: 'Audiobook', price: '$19.99', link: '#' },
];

const BuySection = () => {
  return (
    <section id="buy" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ background: 'var(--gradient-sunset)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">Get Your Copy</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Buy <span className="gradient-text-sunset">the Book</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {formats.map((f, i) => (
            <div
              key={f.label}
              className={`glass-card p-8 text-center group transition-all duration-500 animate-on-scroll ${
                f.featured ? 'ring-2 ring-primary/30 scale-105' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {f.featured && (
                <span className="inline-block text-xs uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full font-body mb-4">
                  Most Popular
                </span>
              )}
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{f.label}</h3>
              <p className="text-3xl font-display font-bold gradient-text-sunset mb-6">{f.price}</p>
              <a
                href={f.link}
                className={`inline-flex items-center gap-2 ${f.featured ? 'btn-paradise' : 'btn-glass'} w-full justify-center`}
              >
                <ShoppingCart size={18} />
                Buy on Amazon
              </a>
            </div>
          ))}
        </div>

        {/* Small book preview */}
        <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto animate-on-scroll">
          <img src={bookCover} alt="Lost in Paradise" className="w-20 rounded shadow-lg" />
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold text-foreground">Available worldwide</p>
            <p className="text-sm text-muted-foreground font-body">Also available on Kindle, Apple Books, and other major platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
