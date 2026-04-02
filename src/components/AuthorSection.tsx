import { Instagram, Twitter, Facebook, Globe } from 'lucide-react';

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
    <section id="author" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(280, 60%, 55%), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">The Storyteller</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Meet <span className="gradient-text-sunset">Robert Erck</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Author info */}
          <div className="animate-on-scroll slide-left">
            {/* Stylized author placeholder */}
            <div className="glass-card p-1 mb-8 max-w-sm mx-auto md:mx-0">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, hsl(210, 70%, 12%), hsl(220, 30%, 15%))' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/30 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(25, 95%, 60%, 0.2), hsl(280, 60%, 55%, 0.2))' }}>
                      <span className="font-display text-3xl text-primary">RE</span>
                    </div>
                    <p className="font-display text-lg text-foreground">Robert Erck</p>
                    <p className="text-sm text-muted-foreground">Author & Adventurer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Bio + timeline */}
          <div className="animate-on-scroll slide-right">
            <p className="font-story text-lg text-muted-foreground leading-relaxed mb-6 italic">
              Robert Erck is a writer, traveler, and eternal wanderer. After years in the corporate world, he left everything behind to chase a feeling — a pull toward the unknown. What he found in the jungles and shores of Southeast Asia became the foundation of his debut novel.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              His writing blends raw emotion with vivid imagery, drawing readers into worlds that feel both foreign and deeply familiar. Lost in Paradise is his first published work — a story pulled straight from the pages of his own life.
            </p>

            {/* Timeline */}
            <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Writing Journey</h3>
            <div className="space-y-0 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-sunset-pink to-accent" />
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-4 pb-6 last:pb-0 relative">
                  <div className="w-4 h-4 rounded-full bg-primary mt-1 shrink-0 relative z-10 shadow-lg" style={{ boxShadow: '0 0 12px hsl(25, 95%, 60%, 0.5)' }} />
                  <div>
                    <span className="text-xs font-body text-primary tracking-wider">{t.year}</span>
                    <p className="text-sm text-muted-foreground font-body">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
