"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { THEME } from "@/lib/constants/theme";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Upload,
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  Clock,
  FileText,
  X,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";
import { toast } from "sonner";
import { NeuralNetworkBackground } from "@/components/neural-network-background";

export default function HireResourcePage() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // Separate pure text fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    experience: "",
    description: "",
  });
  // Separate state for files
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [emailError, setEmailError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (id === "email" && emailError) setEmailError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      setEmailError("Email address is required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      // Create FormData object for multipart/form-data submission
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value as string);
      });

      // Append files
      selectedFiles.forEach((file) => {
        data.append("files", file);
      });

      const response = await fetch("/api/hire-resource", {
        method: "POST",
        body: data, // No Content-Type header needed, browser sets it with boundary
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry");
      }

      toast.success("Inquiry sent successfully!");
      setShowSuccess(true); // Show success popup
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        title: "",
        experience: "",
        description: "",
      });
      setSelectedFiles([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* ... Navbar and Hero ... */}
      <Navbar />

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-center text-xl">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-center">
              Your requirements have been submitted successfully. We will review
              your profile and get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            <Button
              onClick={() => setShowSuccess(false)}
              className="w-full sm:w-auto min-w-[120px]"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Header */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <NeuralNetworkBackground />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Hire Top{" "}
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Talent
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find the perfect resource for your project. Tell us your
            requirements and we'll connect you with our expert developers,
            designers, and engineers.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Card className="p-8 border-border/50 backdrop-blur-sm bg-background/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* ... Personal Info Fields (kept same as before, just ensuring wrapper matches) ... */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5 text-accent" />
                  Contact Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className={`pl-9 ${
                          emailError
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {emailError && (
                      <p className="text-sm text-destructive mt-1">
                        {emailError}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="pl-9"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border/50" />

              {/* Requirement Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-accent" />
                  Resource Requirements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium leading-none"
                    >
                      Job Title / Role
                    </label>
                    <Input
                      id="title"
                      placeholder="e.g. Senior React Developer"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="experience"
                      className="text-sm font-medium leading-none"
                    >
                      Years of Experience
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="experience"
                        type="number"
                        min="0"
                        placeholder="e.g. 5"
                        className="pl-9"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium leading-none"
                  >
                    Job Description / Requirements
                  </label>
                  <Textarea
                    id="description"
                    placeholder="We are looking for an experienced developer to help us with..."
                    className="min-h-[150px]"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none block">
                    Attach JD or Related Files
                  </label>
                  <label
                    htmlFor="file-upload"
                    className="mt-2 flex justify-center rounded-lg border border-dashed border-border/50 px-6 py-10 hover:bg-muted/20 transition-colors cursor-pointer relative overflow-hidden"
                  >
                    <div className="text-center">
                      <Upload
                        className="mx-auto h-12 w-12 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-muted-foreground justify-center">
                        <span className="relative cursor-pointer rounded-md font-semibold text-accent focus-within:outline-none focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 hover:text-accent/80">
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            multiple
                            onChange={handleFileChange}
                          />
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-muted-foreground">
                        PDF, DOCX, TXT up to 10MB
                      </p>
                    </div>
                  </label>
                  {/* Selected Files List */}
                  {selectedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium">Selected Files:</p>
                      <div className="space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 rounded-md bg-muted/30 border border-border/50"
                          >
                            <span className="text-sm truncate max-w-[200px] sm:max-w-xs">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="p-1 hover:bg-destructive/10 rounded-full transition-colors text-muted-foreground hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending Inquiry...
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Requirements
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
