"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, Loader2, X, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      setOpen(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border border-border shadow-2xl rounded-xl bg-card gap-0">
        {/* Accessible Title (hidden visually) */}
        <VisuallyHidden>
          <DialogTitle>Contact Us</DialogTitle>
        </VisuallyHidden>

        {/* Custom Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-50 p-1.5 rounded-full bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border/50"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="px-6 pt-8 pb-5 text-center border-b border-border/50">
          <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
            <MessageSquare className="h-7 w-7 text-accent-foreground" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-1">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-sm">
            Share your project idea and we'll respond within 24 hours.
          </p>
        </div>

        {/* Form Section */}
        <div className="px-6 py-5 bg-muted/30">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-10 bg-background border-border focus:border-accent transition-all"
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-10 bg-background border-border focus:border-accent transition-all"
              />
              <Input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-10 bg-background border-border focus:border-accent transition-all"
              />
            </div>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[80px] bg-background border-border focus:border-accent transition-all resize-none"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-10 font-medium transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-border/50 bg-background">
          <button
            onClick={() => setOpen(false)}
            className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, I'll browse first
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
