import { Leaf, Heart, Compass, Sparkles } from 'lucide-react';

const themes = [
  { icon: Heart, label: 'Love', desc: 'A romance that defies boundaries and expectations', glow: 'hsla(340, 80%, 60%, 0.15)' },
  { icon: Compass, label: 'Escape', desc: 'Running from the past into the unknown', glow: 'hsla(200, 80%, 50%, 0.15)' },
  { icon: Sparkles, label: 'Mystery', desc: 'Secrets hidden beneath paradise\'s surface', glow: 'hsla(45, 100%, 70%, 0.15)' },
  { icon: Leaf, label: 'Self-Discovery', desc: 'Finding yourself in the most unexpected place', glow: 'hsla(145, 55%, 35%, 0.15)' },
];

const quotes = [
  "Paradise isn't a place you find — it's a place that finds you.",
  "Some escapes lead you deeper into yourself than you ever wanted to go.",
  "The jungle doesn't care about your plans. Neither does love.",
];

const AboutBookSection = () => {
  return (
    <section id="about-book" className="section-padding relative overflow-hidden">
      {/* Nature ambient */}
      <div className="absolute top-[10%] right-0 w-[350px] h-[350px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, hsl(145, 55%, 40%), transparent 70%)' }} />
      <div className="absolute bottom-[10%] left-0 w-[300px] h-[300px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, hsl(45, 100%, 70%), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3 flex items-center justify-center gap-2">
            <Leaf size={14} className="text-accent" />
            The Story
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About the <span className="gradient-text-sunlight">Book</span>
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
              className="glass-jungle rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-500 animate-on-scroll cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{ background: t.glow, boxShadow: `0 0 20px ${t.glow}` }}
              >
                <t.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-12" />
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
