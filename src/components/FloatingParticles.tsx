import { useMemo } from 'react';

const leafShapes = [
  // Simple leaf SVG paths
  'M10 0 C15 5, 15 15, 10 20 C5 15, 5 5, 10 0Z',
  'M8 0 C14 4, 16 12, 10 20 C4 14, 2 6, 8 0Z',
  'M10 0 C18 6, 14 18, 10 22 C6 18, 2 6, 10 0Z',
];

const FloatingParticles = () => {
  const leaves = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 18 + 12,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 12,
      opacity: Math.random() * 0.4 + 0.15,
      color: [
        'hsl(145, 55%, 35%)',
        'hsl(155, 50%, 25%)',
        'hsl(140, 40%, 45%)',
        'hsl(155, 60%, 40%)',
        'hsl(40, 85%, 55%)',
      ][Math.floor(Math.random() * 5)],
      shape: leafShapes[Math.floor(Math.random() * leafShapes.length)],
      swayOffset: Math.random() * 100,
    })),
    []
  );

  const fireflies = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 4,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Falling leaves */}
      {leaves.map((l) => (
        <svg
          key={`leaf-${l.id}`}
          className="absolute"
          width={l.size}
          height={l.size * 1.2}
          viewBox="0 0 20 22"
          style={{
            left: `${l.left}%`,
            top: '-5%',
            opacity: l.opacity,
            animation: `leaf-fall ${l.duration}s linear ${l.delay}s infinite`,
            filter: 'blur(0.5px)',
          }}
        >
          <path d={l.shape} fill={l.color} />
        </svg>
      ))}

      {/* Fireflies */}
      {fireflies.map((f) => (
        <div
          key={`firefly-${f.id}`}
          className="absolute rounded-full"
          style={{
            width: f.size,
            height: f.size,
            left: `${f.left}%`,
            top: `${f.top}%`,
            background: 'hsl(45, 100%, 70%)',
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px hsla(45, 100%, 70%, 0.4)`,
            animation: `firefly-float ${f.duration}s ease-in-out ${f.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
