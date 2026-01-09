"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  Upload,
  CheckCircle2,
  X,
  ArrowRight,
} from "lucide-react";
import { JOB_OPENINGS, CAREER_HERO, JobOpening } from "@/lib/constants/careers";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    description: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setFormData({ ...formData, jobTitle: job.title });
    setIsFormVisible(true);
    // Scroll to form
    setTimeout(() => {
      document
        .getElementById("application-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors({ ...errors, resume: "Please upload a PDF or DOC file" });
        return;
      }
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, resume: "File size must be less than 5MB" });
        return;
      }
      setResumeFile(file);
      setErrors({ ...errors, resume: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[+]?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    if (!formData.experience.trim()) {
      newErrors.experience = "Years of experience is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please provide a short description";
    }

    if (!resumeFile) {
      newErrors.resume = "Please upload your resume";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Create FormData to send file along with other data
      const submitData = new FormData();
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("jobTitle", formData.jobTitle);
      submitData.append("experience", formData.experience);
      submitData.append("description", formData.description);
      if (resumeFile) {
        submitData.append("resume", resumeFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          jobTitle: "",
          experience: "",
          description: "",
        });
        setResumeFile(null);
        setIsFormVisible(false);
        setSelectedJob(null);
      } else {
        alert(
          "Something went wrong: " +
            (data.error || "Failed to submit application")
        );
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-linear-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-linear-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                We're Hiring
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              {CAREER_HERO.title}{" "}
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {CAREER_HERO.subtitle}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {CAREER_HERO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-sm font-medium text-accent">
                {JOB_OPENINGS.length} Open Positions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role and join our growing team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Job List - Left Side */}
            <div className="lg:col-span-2 space-y-3">
              {JOB_OPENINGS.map((job, index) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedJob?.id === job.id
                      ? "bg-accent text-accent-foreground shadow-lg"
                      : "bg-background hover:bg-muted/80 border border-border/50 hover:border-accent/30"
                  }`}
                >
                  {/* Active indicator */}
                  {selectedJob?.id === job.id && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-white rounded-r-full" />
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        selectedJob?.id === job.id
                          ? "bg-white/20"
                          : "bg-accent/10 group-hover:bg-accent/20"
                      }`}
                    >
                      <job.icon
                        className={`h-5 w-5 ${
                          selectedJob?.id === job.id
                            ? "text-white"
                            : "text-accent"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-base mb-0.5 truncate ${
                          selectedJob?.id === job.id
                            ? "text-white"
                            : "group-hover:text-accent"
                        }`}
                      >
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span
                          className={
                            selectedJob?.id === job.id
                              ? "text-white/80"
                              : "text-muted-foreground"
                          }
                        >
                          {job.department}
                        </span>
                        <span
                          className={
                            selectedJob?.id === job.id
                              ? "text-white/50"
                              : "text-muted-foreground/50"
                          }
                        >
                          •
                        </span>
                        <span
                          className={
                            selectedJob?.id === job.id
                              ? "text-white/80"
                              : "text-muted-foreground"
                          }
                        >
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        selectedJob?.id === job.id
                          ? "text-white translate-x-1"
                          : "text-muted-foreground group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Job Details - Right Side */}
            <div className="lg:col-span-3">
              {selectedJob ? (
                <Card className="p-8 border-border/50 sticky top-24 animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border/50">
                    <div className="p-4 rounded-2xl bg-accent/10">
                      <selectedJob.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {selectedJob.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                              {selectedJob.department}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {selectedJob.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Clock className="h-4 w-4" />
                        Employment Type
                      </div>
                      <p className="font-semibold">{selectedJob.type}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Briefcase className="h-4 w-4" />
                        Experience
                      </div>
                      <p className="font-semibold">{selectedJob.experience}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedJob.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-4">
                      What You'll Do
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-accent" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4">
                      What You'll Need
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-accent" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <Button
                    onClick={() => handleApplyClick(selectedJob)}
                    size="lg"
                    className="w-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-colors h-12"
                  >
                    Apply for this Position
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Card>
              ) : (
                <Card className="p-12 border-border/50 h-full min-h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="p-6 rounded-full bg-muted/50 mb-6">
                    <Briefcase className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Select a Position
                  </h3>
                  <p className="text-muted-foreground max-w-xs">
                    Click on any job opening from the list to view the full
                    details and requirements
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {isFormVisible && (
        <section
          id="application-form"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
        >
          <div className="mx-auto max-w-3xl">
            <Card className="p-8 md:p-12 border-border/50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Apply for {selectedJob?.title}
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below to submit your application
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsFormVisible(false);
                    setSelectedJob(null);
                  }}
                  className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
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

                  {/* Job Title */}
                  <div className="space-y-2">
                    <label htmlFor="jobTitle" className="text-sm font-medium">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="jobTitle"
                      placeholder="Position you're applying for"
                      value={formData.jobTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, jobTitle: e.target.value })
                      }
                    />
                    {errors.jobTitle && (
                      <p className="text-sm text-red-500">{errors.jobTitle}</p>
                    )}
                  </div>
                </div>

                {/* Years of Experience */}
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="experience"
                    placeholder="e.g., 3 years"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                  />
                  {errors.experience && (
                    <p className="text-sm text-red-500">{errors.experience}</p>
                  )}
                </div>

                {/* Short Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">{errors.description}</p>
                  )}
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-border/50 rounded-xl cursor-pointer hover:border-accent/50 hover:bg-accent/5 transition-all"
                    >
                      {resumeFile ? (
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                          <div className="text-left">
                            <p className="font-medium">{resumeFile.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-6 w-6 text-muted-foreground" />
                          <div className="text-left">
                            <p className="font-medium">
                              Click to upload your resume
                            </p>
                            <p className="text-sm text-muted-foreground">
                              PDF, DOC, DOCX (Max 5MB)
                            </p>
                          </div>
                        </>
                      )}
                    </label>
                  </div>
                  {errors.resume && (
                    <p className="text-sm text-red-500">{errors.resume}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-colors h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <Card className="p-12 border-border/50 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => {
                  setSelectedJob(null);
                  setFormData({ ...formData, jobTitle: "General Application" });
                  setIsFormVisible(true);
                  setTimeout(() => {
                    document
                      .getElementById("application-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-colors px-8 h-12"
              >
                Submit General Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 h-12">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-background rounded-2xl shadow-xl border border-border p-8 text-center">
            {/* Success icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Thank you for applying. We'll review your application and get back
              to you within 2-3 business days.
            </p>

            {/* Button */}
            <Button className="w-full" onClick={() => setShowSuccess(false)}>
              Done
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
