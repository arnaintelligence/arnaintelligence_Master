import { useState } from "react";
import { Scan, BarChart2, CheckSquare, Wand2, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const signupSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255),
  name: z.string().trim().max(100).optional(),
});

const leadMagnets = [
  {
    icon: Scan,
    title: "AI-powered LNA Scan",
    description: "Get a comprehensive learning needs analysis powered by AI in minutes",
    resourceType: "lna_scan",
  },
  {
    icon: BarChart2,
    title: "Learning Intelligence Scorecard",
    description: "Assess your organization's learning maturity and AI readiness",
    resourceType: "scorecard",
  },
  {
    icon: CheckSquare,
    title: "UX Checklist for LMS Adoption",
    description: "Ensure your LMS delivers an exceptional user experience",
    resourceType: "ux_checklist",
  },
  {
    icon: Wand2,
    title: "AI Storyboard Generator Demo",
    description: "See how AI can transform your content creation process",
    resourceType: "storyboard_demo",
  },
];

export function LeadMagnetsSection() {
  const { toast } = useToast();
  const [selectedResource, setSelectedResource] = useState<typeof leadMagnets[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedResource) return;

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const rawData = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
    };

    const result = signupSchema.safeParse(rawData);
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0]?.message || "Please check your input",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from("lead_magnet_signups").insert({
        email: result.data.email,
        name: result.data.name || null,
        resource_type: selectedResource.resourceType,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Check your email for access to the resource.",
      });

      setSelectedResource(null);
    } catch (error) {
      console.error("Lead magnet signup error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            Free Resources
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            Start Your AI Learning Journey
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore our free tools and resources to see how ALIS can transform your learning ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {leadMagnets.map((magnet) => (
            <button
              key={magnet.title}
              onClick={() => setSelectedResource(magnet)}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <magnet.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {magnet.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {magnet.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Signup Dialog */}
      <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get {selectedResource?.title}</DialogTitle>
            <DialogDescription>
              Enter your details below and we'll send you access to this resource.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lead-name">Name (optional)</Label>
              <Input id="lead-name" name="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-email">Work Email</Label>
              <Input id="lead-email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Get Free Access"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
