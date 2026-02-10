import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  project: z.string().trim().min(1, 'Project type is required').max(200),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

const TVContact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({ title: 'Message sent!', description: 'We\'ll get back to you within 24 hours.' });
      setForm({ name: '', email: '', project: '', message: '' });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-8">
              Let's create
              <br />
              something
              <br />
              <span className="text-primary">extraordinary</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Whether it's a music video, documentary, or branded content — we're ready to bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">tv@redvision.studio</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-13 rounded-xl bg-muted/50 border-border/60 text-base"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-13 rounded-xl bg-muted/50 border-border/60 text-base"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input
                  placeholder="Project type (e.g., Music Video, Documentary)"
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="h-13 rounded-xl bg-muted/50 border-border/60 text-base"
                />
                {errors.project && <p className="text-destructive text-sm mt-1">{errors.project}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-xl bg-muted/50 border-border/60 text-base resize-none"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full rounded-xl text-base py-6 group"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVContact;
