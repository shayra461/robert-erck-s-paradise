import { Leaf, Heart, Compass, Sparkles } from 'lucide-react';
import bgForestPath from '@/assets/bg-forest-path.jpg';
import ParallaxSection from './ParallaxSection';

const themes = [
  { icon: Heart, label: 'Love', desc: 'A romance that defies boundaries and expectations', glow: 'rgba(255,100,130,0.2)' },
  { icon: Compass, label: 'Escape', desc: 'Running from the past into the unknown', glow: 'rgba(60,160,220,0.2)' },
  { icon: Sparkles, label: 'Mystery', desc: "Secrets hidden beneath paradise's surface", glow: 'rgba(255,215,100,0.2)' },
  { icon: Leaf, label: 'Self-Discovery', desc: 'Finding yourself in the most unexpected place', glow: 'rgba(31,122,99,0.2)' },
];

const quotes = [
  "Paradise isn't a place you find — it's a place that finds you.",
  "Some escapes lead you deeper into yourself than you ever wanted to go.",
  "The jungle doesn't care about your plans. Neither does love.",
];

const AboutBookSection = () => {
  return (
    <ParallaxSection
      id="about-book"
      backgroundImage={bgForestPath}
      overlay="linear-gradient(180deg, rgba(15,61,46,0.8) 0%, rgba(10,30,20,0.85) 100%)"
      speed={0.25}
      className=""
    >
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3 flex items-center justify-center gap-2">
              <Leaf size={14} className="text-accent" />
              The Story
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About the <span className="gradient-text-sunlight">Book</span>
            </h2>
            <p className="font-story text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed italic">
              Lost in Paradise follows a man who abandons everything he knows, journeying into the heart of an untouched tropical wilderness — only to discover that the greatest adventure was never about the destination.
            </p>
          </div>

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
                <p className="text-sm text-foreground/60 font-body">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {quotes.map((q, i) => (
              <div key={i} className={`quote-card animate-on-scroll ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
                <p className="font-story text-xl md:text-2xl text-foreground/90 italic leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default AboutBookSection;
