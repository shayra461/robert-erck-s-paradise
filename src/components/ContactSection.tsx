import { useState, FormEvent } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('Please enter a valid email');
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success('Message sent! Robert will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
      setSending(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, hsl(200, 80%, 50%), transparent 70%)' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text-sunset">Contact</span> Robert
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <div className="md:col-span-2 space-y-6 animate-on-scroll slide-left">
            <div className="glass-card p-6 flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-display text-sm font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground font-body">hello@roberterck.com</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-display text-sm font-semibold text-foreground">Based in</p>
                <p className="text-sm text-muted-foreground font-body">Somewhere between worlds</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 glass-card p-8 space-y-5 animate-on-scroll slide-right">
            <div>
              <label htmlFor="name" className="text-sm font-body text-muted-foreground mb-1 block">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="Your name"
                maxLength={100}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-body text-muted-foreground mb-1 block">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="your@email.com"
                maxLength={255}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-body text-muted-foreground mb-1 block">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                placeholder="Tell Robert what you think..."
                maxLength={1000}
              />
            </div>
            <button type="submit" disabled={sending} className="btn-paradise inline-flex items-center gap-2 w-full justify-center disabled:opacity-50">
              <Send size={18} />
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
