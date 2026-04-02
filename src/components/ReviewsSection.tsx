import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import bgWaterfall from '@/assets/bg-waterfall.jpg';
import ParallaxSection from './ParallaxSection';

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'This book broke me open and put me back together. A masterpiece of raw emotion and breathtaking scenery.', location: 'New York, USA' },
  { name: 'James K.', rating: 5, text: 'Robert Erck writes with a soul that few authors possess. Lost in Paradise is not just a book — it\'s an experience.', location: 'London, UK' },
  { name: 'Maria L.', rating: 5, text: 'I felt the humidity of the jungle, the crash of the waves, the ache of longing. This story will haunt you.', location: 'Barcelona, Spain' },
  { name: 'David P.', rating: 4, text: 'A beautifully written adventure that pulls you into a world of mystery and romance.', location: 'Sydney, Australia' },
  { name: 'Anika R.', rating: 5, text: 'Every chapter felt like stepping deeper into a dream. Utterly unforgettable.', location: 'Berlin, Germany' },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <ParallaxSection
      id="reviews"
      backgroundImage={bgWaterfall}
      overlay="linear-gradient(180deg, rgba(15,61,46,0.82) 0%, rgba(0,0,0,0.7) 100%)"
      speed={0.2}
    >
      <div className="section-padding">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3 flex items-center justify-center gap-2">
              <Leaf size={14} className="text-accent" />
              Reader Love
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              What Readers <span className="gradient-text-sunlight">Say</span>
            </h2>
          </div>

          <div className="relative animate-on-scroll">
            <div className="glass-jungle rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className={`transition-all duration-300 ${i < reviews[current].rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                ))}
              </div>
              <p className="font-story text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
                "{reviews[current].text}"
              </p>
              <div>
                <p className="font-display text-lg text-foreground font-semibold">{reviews[current].name}</p>
                <p className="text-sm text-foreground/50 font-body">{reviews[current].location}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button onClick={prev} className="w-12 h-12 rounded-full glass-jungle flex items-center justify-center text-foreground/60 hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-foreground/20'}`} aria-label={`Go to review ${i + 1}`} />
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 rounded-full glass-jungle flex items-center justify-center text-foreground/60 hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Next review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default ReviewsSection;
