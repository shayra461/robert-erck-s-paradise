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

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setOffset(scrolled * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset}px) scale(1.15)`,
          top: '-15%',
          bottom: '-15%',
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
