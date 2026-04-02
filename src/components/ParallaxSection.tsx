import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  overlay?: string;
  speed?: number;
  className?: string;
  id?: string;
}

const ParallaxSection = ({ backgroundImage, children, overlay = 'rgba(0,0,0,0.45)', speed = 0.4, className = '', id }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [scale, setScale] = useState(1.1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setOffset(scrolled * speed);

      // Zoom effect: scale increases as section scrolls into view
      const progress = Math.max(0, Math.min(1, scrolled / (window.innerHeight + rect.height)));
      const newScale = 1.05 + progress * 0.25; // 1.05 to 1.30
      setScale(newScale);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset}px) scale(${scale})`,
          top: '-20%',
          bottom: '-20%',
        }}
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
