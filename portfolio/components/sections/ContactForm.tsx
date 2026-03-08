"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior: open mailto link
        const mailtoLink = `mailto:venu.gudipati@gmail.com?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you as soon as possible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2"
            >
              Subject <span className="text-destructive">*</span>
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="text-sm text-destructive mt-1">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or inquiry..."
              rows={6}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 rounded-lg">
              Failed to send message. Please try again or email directly.
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
