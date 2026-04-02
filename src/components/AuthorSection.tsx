import { Instagram, Twitter, Facebook, Globe, TreePine } from 'lucide-react';
import bgCanopy from '@/assets/bg-canopy.jpg';
import ParallaxSection from './ParallaxSection';

const timeline = [
  { year: '2018', event: 'First journey to Southeast Asia — the seed of the story' },
  { year: '2019', event: 'Six months living off-grid in a tropical village' },
  { year: '2021', event: 'Began writing Lost in Paradise from personal journals' },
  { year: '2023', event: 'Manuscript completed after two years of revisions' },
  { year: '2024', event: 'Published — a dream realized' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Globe, label: 'Website', href: '#' },
];

const AuthorSection = () => {
  return (
    <ParallaxSection
      id="author"
      backgroundImage={bgCanopy}
      overlay="linear-gradient(180deg, rgba(10,30,20,0.85) 0%, rgba(15,61,46,0.8) 100%)"
      speed={0.2}
    >
      <div className="section-padding">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3 flex items-center justify-center gap-2">
              <TreePine size={14} className="text-accent" />
              The Storyteller
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Meet <span className="gradient-text-sunlight">Robert Erck</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll slide-left">
              <div className="glass-jungle rounded-2xl p-1 mb-8 max-w-sm mx-auto md:mx-0">
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, rgba(15,61,46,0.8), rgba(31,122,99,0.5))' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent/30 flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(31,122,99,0.4), rgba(255,215,100,0.2))', boxShadow: '0 0 30px rgba(255,215,100,0.15)' }}
                      >
                        <span className="font-display text-3xl text-primary">RE</span>
                      </div>
                      <p className="font-display text-lg text-foreground">Robert Erck</p>
                      <p className="text-sm text-foreground/60">Author & Adventurer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full glass-jungle flex items-center justify-center text-foreground/60 hover:text-primary hover:scale-110 transition-all duration-300"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll slide-right">
              <p className="font-story text-lg text-foreground/70 leading-relaxed mb-6 italic">
                Robert Erck is a writer, traveler, and eternal wanderer. After years in the corporate world, he left everything behind to chase a feeling — a pull toward the unknown.
              </p>
              <p className="font-body text-foreground/60 leading-relaxed mb-10">
                His writing blends raw emotion with vivid imagery, drawing readers into worlds that feel both foreign and deeply familiar. Lost in Paradise is his first published work.
              </p>

              <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Writing Journey</h3>
              <div className="space-y-0 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px]" style={{ background: 'linear-gradient(180deg, hsl(145, 55%, 35%), hsl(45, 100%, 70%), hsl(155, 60%, 40%))' }} />
                {timeline.map((t, i) => (
                  <div key={i} className="flex gap-4 pb-6 last:pb-0 relative group">
                    <div
                      className="w-4 h-4 rounded-full mt-1 shrink-0 relative z-10 transition-all duration-300 group-hover:scale-125"
                      style={{
                        background: `hsl(${145 + i * 10}, 55%, ${35 + i * 5}%)`,
                        boxShadow: `0 0 12px hsla(${145 + i * 10}, 55%, ${35 + i * 5}%, 0.5)`,
                      }}
                    />
                    <div>
                      <span className="text-xs font-body text-primary tracking-wider">{t.year}</span>
                      <p className="text-sm text-foreground/60 font-body">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default AuthorSection;
