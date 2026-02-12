import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, ArrowLeft, Mail, Phone, MapPin, Check, Send, User, FileText, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  project: z.string().trim().min(1, 'Project type is required').max(200),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

type FormField = 'name' | 'email' | 'project' | 'message';

const steps: { id: number; label: string; icon: typeof User; fields: FormField[] }[] = [
  { id: 0, label: 'You', icon: User, fields: ['name', 'email'] },
  { id: 1, label: 'Project', icon: FileText, fields: ['project'] },
  { id: 2, label: 'Details', icon: MessageSquare, fields: ['message'] },
];

const projectTypes = [
  'Music Video', 'Documentary', 'Commercial', 'Interview', 'Brand Film', 'Short Film', 'Live Event', 'Other'
];

const TVContact = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateStep = () => {
    const currentFields = steps[step].fields;
    const partialSchema: Record<string, z.ZodTypeAny> = {};
    if (currentFields.includes('name')) partialSchema.name = z.string().trim().min(1, 'Name is required');
    if (currentFields.includes('email')) partialSchema.email = z.string().trim().email('Invalid email');
    if (currentFields.includes('project')) partialSchema.project = z.string().trim().min(1, 'Select a project type');
    if (currentFields.includes('message')) partialSchema.message = z.string().trim().min(1, 'Tell us about your vision');

    const result = z.object(partialSchema).safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, 2));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    if (!validateStep()) return;

    const result = contactSchema.safeParse(form);
    if (!result.success) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." });
    }, 1200);
  };

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 80 : -80, opacity: 0 }),
  };

  return (
    <section className="py-32 px-6 bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-primary/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-primary/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase">
                Get in Touch
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.03em] text-secondary-foreground mb-8 leading-[0.9]">
              Let's create
              <br />
              something
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">extraordinary</span>
            </h2>

            <p className="text-secondary-foreground/40 text-lg leading-relaxed mb-14 max-w-md">
              Whether it's a music video, documentary, or branded content — we're ready to bring your vision to life.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, text: 'tv@redvision.studio' },
                { icon: Phone, text: '+1 (555) 000-0000' },
                { icon: MapPin, text: 'Los Angeles, CA' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-secondary-foreground/70 group-hover:text-secondary-foreground transition-colors duration-300">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — medley form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-secondary-foreground/10 bg-secondary-foreground/[0.03] backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-[60px]" />

              {/* Progress indicator */}
              <div className="flex items-center justify-between mb-10 relative z-10">
                {steps.map((s, i) => {
                  const StepIcon = s.icon;
                  const isActive = step === i;
                  const isComplete = step > i || submitted;
                  return (
                    <div key={s.id} className="flex items-center gap-3 flex-1">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 text-sm font-bold
                        ${isComplete ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]' : ''}
                        ${isActive && !isComplete ? 'bg-primary/20 text-primary border border-primary/40' : ''}
                        ${!isActive && !isComplete ? 'bg-secondary-foreground/5 text-secondary-foreground/30' : ''}
                      `}>
                        {isComplete ? <Check className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                      </div>
                      <span className={`text-xs tracking-widest uppercase hidden md:block transition-colors duration-300 ${isActive || isComplete ? 'text-secondary-foreground/80' : 'text-secondary-foreground/20'}`}>
                        {s.label}
                      </span>
                      {i < steps.length - 1 && (
                        <div className={`flex-1 h-px mx-2 transition-colors duration-500 ${isComplete ? 'bg-primary/40' : 'bg-secondary-foreground/10'}`} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step content */}
              <div className="min-h-[280px] relative z-10">
                <AnimatePresence mode="wait" custom={step}>
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center h-[280px] text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                        <Check className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary-foreground mb-3">Message Sent!</h3>
                      <p className="text-secondary-foreground/40 max-w-xs">Our creative team will reach out within 24 hours to discuss your project.</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={step}
                      custom={step}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {step === 0 && (
                        <div className="space-y-5">
                          <div>
                            <label className="text-xs text-secondary-foreground/50 tracking-widest uppercase mb-2 block">Full Name</label>
                            <Input
                              placeholder="John Doe"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="h-14 rounded-xl bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground text-base placeholder:text-secondary-foreground/20 focus:border-primary/50 focus:ring-primary/20"
                            />
                            {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="text-xs text-secondary-foreground/50 tracking-widest uppercase mb-2 block">Email Address</label>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="h-14 rounded-xl bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground text-base placeholder:text-secondary-foreground/20 focus:border-primary/50 focus:ring-primary/20"
                            />
                            {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
                          </div>
                        </div>
                      )}

                      {step === 1 && (
                        <div>
                          <label className="text-xs text-secondary-foreground/50 tracking-widest uppercase mb-4 block">What type of project?</label>
                          <div className="grid grid-cols-2 gap-3">
                            {projectTypes.map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => { setForm({ ...form, project: type }); setErrors({}); }}
                                className={`
                                  p-4 rounded-xl text-sm font-medium text-left transition-all duration-300 border
                                  ${form.project === type
                                    ? 'bg-primary/15 border-primary/40 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.1)]'
                                    : 'bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground/60 hover:border-secondary-foreground/20 hover:text-secondary-foreground/80'
                                  }
                                `}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                          {errors.project && <p className="text-destructive text-xs mt-3">{errors.project}</p>}
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <label className="text-xs text-secondary-foreground/50 tracking-widest uppercase mb-2 block">Tell us about your vision</label>
                          <Textarea
                            placeholder="Describe your project, timeline, and any specific requirements..."
                            rows={7}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="rounded-xl bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground text-base placeholder:text-secondary-foreground/20 resize-none focus:border-primary/50 focus:ring-primary/20"
                          />
                          {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation */}
              {!submitted && (
                <div className="flex items-center justify-between mt-8 relative z-10">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    disabled={step === 0}
                    className="text-secondary-foreground/40 hover:text-secondary-foreground hover:bg-secondary-foreground/5 rounded-xl"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>

                  {step < 2 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="rounded-xl px-8 py-6 group font-bold tracking-wide"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="rounded-xl px-8 py-6 group font-bold tracking-wide shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TVContact;
