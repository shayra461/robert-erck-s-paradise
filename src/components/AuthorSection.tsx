import { Instagram, Twitter, Facebook, Globe, TreePine } from 'lucide-react';
import bgCanopy from '@/assets/bg-canopy.jpg';
import authorPhoto from '@/assets/author-photo.jpg';
import ParallaxSection from './ParallaxSection';

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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left flex justify-center">
              <div className="glass-jungle rounded-2xl p-2 max-w-sm">
                <img
                  src={authorPhoto}
                  alt="Robert Erck - Author of Lost in Paradise"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="animate-on-scroll slide-right">
              <p className="font-story text-lg text-foreground/80 leading-relaxed mb-6 italic">
                Robert Erck is a retired construction business owner whose first book recounts the unexpected events of his unforgettable elopement and honeymoon.
              </p>
              <p className="font-body text-foreground/60 leading-relaxed mb-6">
                Now living in Florida with his wife Kathy, Robert reflects on how life's surprises can become some of its most bizarre memories. His memoir invites readers to join him on a journey filled with some of life's unexpected detours thrown in.
              </p>
              <p className="font-body text-foreground/60 leading-relaxed mb-8">
                Lost in Paradise is his first published work — a true story that proves reality is often stranger and more beautiful than fiction.
              </p>

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
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default AuthorSection;
