import { ShoppingCart, BookOpen, Headphones, Sun } from 'lucide-react';
import bookCover from '@/assets/book-cover.jpg';

const formats = [
  { icon: BookOpen, label: 'Paperback', price: '$14.99', link: '#' },
  { icon: BookOpen, label: 'Hardcover', price: '$24.99', link: '#', featured: true },
  { icon: Headphones, label: 'Audiobook', price: '$19.99', link: '#' },
];

const BuySection = () => {
  return (
    <section id="buy" className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.04]" style={{ background: 'linear-gradient(135deg, hsl(145, 55%, 35%), hsl(45, 100%, 70%))' }} />
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, hsl(45, 100%, 70%), transparent 70%)' }} />

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
              className={`glass-jungle rounded-2xl p-8 text-center group transition-all duration-500 animate-on-scroll hover:scale-105 ${
                f.featured ? 'ring-2 ring-primary/40 scale-105' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {f.featured && (
                <span className="inline-block text-xs uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full font-body mb-4">
                  Most Popular
                </span>
              )}
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{ background: 'hsla(145, 55%, 35%, 0.15)', boxShadow: '0 0 20px hsla(145, 55%, 35%, 0.1)' }}
              >
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{f.label}</h3>
              <p className="text-3xl font-display font-bold gradient-text-sunlight mb-6">{f.price}</p>
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

        <div className="glass-jungle rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto animate-on-scroll">
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
