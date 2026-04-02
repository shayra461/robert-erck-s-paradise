import { useMemo } from 'react';

const FloatingParticles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 4,
      opacity: Math.random() * 0.4 + 0.1,
      color: ['hsl(25, 95%, 60%)', 'hsl(340, 80%, 60%)', 'hsl(200, 80%, 50%)', 'hsl(155, 60%, 40%)', 'hsl(40, 100%, 80%)'][Math.floor(Math.random() * 5)],
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
            filter: `blur(${p.size > 4 ? 1 : 0}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
