import { Heart, Leaf } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border py-8 px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'linear-gradient(0deg, hsl(155, 50%, 25%), transparent)' }} />
    <div className="relative z-10">
      <p className="font-display text-lg gradient-text-sunlight mb-2 flex items-center justify-center gap-2">
        <Leaf size={16} className="text-accent" />
        Lost in Paradise
      </p>
      <p className="text-sm text-muted-foreground font-body flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-sunset-pink" /> by Robert Erck © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
