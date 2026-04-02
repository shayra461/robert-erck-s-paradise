import { useState, useMemo } from 'react';
import { Star, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'This book broke me open and put me back together. A masterpiece of raw emotion and breathtaking scenery. I couldn\'t put it down.', location: 'New York, USA' },
  { name: 'James K.', rating: 5, text: 'Robert Erck writes with a soul that few authors possess. Lost in Paradise is not just a book — it\'s an experience you carry with you.', location: 'London, UK' },
  { name: 'Maria L.', rating: 5, text: 'I felt the humidity of the jungle, the crash of the waves, the ache of longing. This story will haunt you in the best way possible.', location: 'Barcelona, Spain' },
  { name: 'David P.', rating: 4, text: 'A beautifully written adventure that pulls you into a world of mystery and romance. The prose is poetic without being pretentious.', location: 'Sydney, Australia' },
  { name: 'Anika R.', rating: 5, text: 'Every chapter felt like stepping deeper into a dream. Robert\'s storytelling is immersive, emotional, and utterly unforgettable.', location: 'Berlin, Germany' },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const fireflies = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: Math.random() * 5 + 4,
    })),
    []
  );

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      {/* Jungle clearing glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, hsl(45, 100%, 70%), transparent 60%)' }} />
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, hsl(155, 60%, 40%), transparent 70%)' }} />

      {/* Fireflies */}
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: f.size,
            height: f.size,
            left: `${f.left}%`,
            top: `${f.top}%`,
            background: 'hsl(45, 100%, 70%)',
            boxShadow: `0 0 ${f.size * 4}px ${f.size}px hsla(45, 100%, 70%, 0.3)`,
            animation: `firefly-float ${f.duration}s ease-in-out ${f.delay}s infinite`,
          }}
        />
      ))}

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
                <Star
                  key={i}
                  size={20}
                  className={`transition-all duration-300 ${i < reviews[current].rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
                />
              ))}
            </div>

            <p className="font-story text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
              "{reviews[current].text}"
            </p>

            <div>
              <p className="font-display text-lg text-foreground font-semibold">{reviews[current].name}</p>
              <p className="text-sm text-muted-foreground font-body">{reviews[current].location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full glass-jungle flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full glass-jungle flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
