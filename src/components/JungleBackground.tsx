const JungleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base jungle gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-jungle)' }} />

      {/* Canopy light rays */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute top-0 opacity-[0.04]"
          style={{
            left: `${15 + i * 20}%`,
            width: '120px',
            height: '100%',
            background: `linear-gradient(180deg, hsla(45, 100%, 70%, 0.6) 0%, transparent 60%)`,
            transform: `rotate(${5 + i * 3}deg)`,
            transformOrigin: 'top center',
            animation: `light-ray ${6 + i * 2}s ease-in-out ${i}s infinite`,
            filter: 'blur(30px)',
          }}
        />
      ))}

      {/* Mist layers */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background: 'linear-gradient(0deg, hsla(150, 20%, 90%, 0.06) 0%, transparent 100%)',
          animation: 'mist-drift 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[30%] left-0 right-0 h-[30%]"
        style={{
          background: 'linear-gradient(0deg, hsla(150, 20%, 90%, 0.03) 0%, transparent 100%)',
          animation: 'mist-drift 20s ease-in-out 5s infinite',
          filter: 'blur(40px)',
        }}
      />

      {/* Ambient glow spots — greens and golds */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, hsl(145, 55%, 35%), transparent 70%)' }} />
      <div className="absolute top-[50%] right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, hsl(45, 100%, 70%), transparent 70%)' }} />
      <div className="absolute bottom-[10%] left-[30%] w-[600px] h-[600px] rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, hsl(200, 80%, 50%), transparent 70%)' }} />
      <div className="absolute top-[70%] right-[30%] w-[300px] h-[300px] rounded-full opacity-[0.08] animate-glow-pulse" style={{ background: 'radial-gradient(circle, hsl(155, 60%, 40%), transparent 70%)' }} />
    </div>
  );
};

export default JungleBackground;
