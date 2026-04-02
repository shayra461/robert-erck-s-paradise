import { BookOpen, Heart, Compass, Sparkles } from 'lucide-react';

const themes = [
  { icon: Heart, label: 'Love', desc: 'A romance that defies boundaries and expectations' },
  { icon: Compass, label: 'Escape', desc: 'Running from the past into the unknown' },
  { icon: Sparkles, label: 'Mystery', desc: 'Secrets hidden beneath paradise\'s surface' },
  { icon: BookOpen, label: 'Self-Discovery', desc: 'Finding yourself in the most unexpected place' },
];

const quotes = [
  "Paradise isn't a place you find — it's a place that finds you.",
  "Some escapes lead you deeper into yourself than you ever wanted to go.",
  "The jungle doesn't care about your plans. Neither does love.",
];

const AboutBookSection = () => {
  return (
    <section id="about-book" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(155, 60%, 40%), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">The Story</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About the <span className="gradient-text-sunset">Book</span>
          </h2>
          <p className="font-story text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            Lost in Paradise follows a man who abandons everything he knows, journeying into the heart of an untouched tropical wilderness — only to discover that the greatest adventure was never about the destination.
          </p>
        </div>

        {/* Themes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {themes.map((t, i) => (
            <div
              key={t.label}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500 animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{t.label}</h3>
              <p className="text-sm text-muted-foreground font-body">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Key quotes */}
        <div className="space-y-6">
          {quotes.map((q, i) => (
            <div key={i} className={`quote-card animate-on-scroll ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
              <p className="font-story text-xl md:text-2xl text-foreground/90 italic leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBookSection;
