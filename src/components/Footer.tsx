import { Heart } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border py-8 px-6 text-center relative overflow-hidden" style={{ background: 'rgba(10,30,20,0.95)' }}>
    <div className="relative z-10">
      <p className="font-display text-lg gradient-text-sunlight mb-2">
        Robert Erck
      </p>
      <p className="text-sm text-foreground/50 font-body flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-sunset-pink" /> © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
