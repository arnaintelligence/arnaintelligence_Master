import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(rawData);
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0]?.message || "Please check your input",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const { firstName, lastName, email, company, message } = result.data;

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: `${firstName} ${lastName}`,
        email,
        company: company || null,
        message,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight">
              Let's Build Something Intelligent
            </h1>
            <p className="mt-6 text-xl text-secondary-foreground/70 leading-relaxed">
              Ready to transform your learning ecosystem? We'd love to hear about 
              your challenges and explore how Arna Intelligence can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" name="message" rows={5} placeholder="Tell us about your learning challenges or project goals..." required />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : (<>Send Message<Send className="ml-2 w-4 h-4" /></>)}
                </Button>
              </form>
            </div>

            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Other Ways to Connect</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info_arnaintelligence@alis-global.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">We typically respond within 24 hours during business days.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-card border border-border">
                <p className="text-lg font-medium text-card-foreground">
                  "Where Learning Meets Intelligence."
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Arnas Learning Intelligence Studio Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Contact Us
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Office Address & Map */}
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Arnas Learning Intelligence Studio Pvt. Ltd.<br />
                    123 Business Park, Tower A, 5th Floor<br />
                    Bengaluru, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452812501!3d12.954517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-6 text-lg">Connect With Us</h3>
              <div className="space-y-6">
                <a
                  href="https://linkedin.com/company/alis-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Follow us for updates & insights</p>
                  </div>
                </a>
                <a
                  href="https://twitter.com/alis_global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Twitter className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Twitter / X</p>
                    <p className="text-sm text-muted-foreground">Join the conversation</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/alis_global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">Behind the scenes & culture</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
