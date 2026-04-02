import { Heart } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border py-8 px-6 text-center">
    <p className="font-display text-lg gradient-text-sunset mb-2">Lost in Paradise</p>
    <p className="text-sm text-muted-foreground font-body flex items-center justify-center gap-1">
      Made with <Heart size={14} className="text-sunset-pink" /> by Robert Erck © {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
