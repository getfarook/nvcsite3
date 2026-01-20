"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface ContactPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactPopup({ open, onOpenChange }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form - only email is required
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = "";

    if (!formData.email.trim()) {
      emailError = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      emailError = "Please enter a valid email address";
    }

    const newErrors = {
      name: "",
      email: emailError,
      phone: "",
      message: "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setShowSuccess(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setErrors({ name: "", email: "", phone: "", message: "" });
        } else {
          alert(
            "Something went wrong: " + (data.error || "Failed to send message"),
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleClose = () => {
    setShowSuccess(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {showSuccess ? (
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
              <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mx-auto">
                Thanks for reaching out! We'll be in touch with you shortly.
              </p>
            </div>

            <Button
              className="w-full rounded-xl h-12 text-base font-medium"
              size="lg"
              onClick={handleClose}
            >
              Continue
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Get In Touch
              </DialogTitle>
              <DialogDescription>
                Ready to start your project? Fill out the form below and we'll
                get back to you shortly.
              </DialogDescription>
            </DialogHeader>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-4 py-4 border-b border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@novizco.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 95677 34622</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="popup-name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="popup-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="popup-email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="popup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="popup-phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="popup-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="popup-message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="popup-message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
