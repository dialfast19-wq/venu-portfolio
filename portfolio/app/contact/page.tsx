import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact | Venu Gudipati",
  description:
    "Get in touch to discuss cloud transformation, AI strategy, or technology leadership opportunities.",
  openGraph: {
    title: "Contact | Venu Gudipati",
    description:
      "Get in touch to discuss cloud transformation, AI strategy, or technology leadership.",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <AnimatedSection animation="fade" className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in discussing cloud transformation, AI strategy, or technology leadership? Let's connect!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <AnimatedSection animation="slide-right">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">📧</span>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:venu.gudipati@gmail.com"
                      className="text-primary hover:underline"
                      aria-label="Email Venu Gudipati"
                    >
                      venu.gudipati@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">💼</span>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/venu-gudipati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                      aria-label="Visit Venu Gudipati's LinkedIn profile"
                    >
                      linkedin.com/in/venu-gudipati
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">🐙</span>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <a
                      href="https://github.com/venugudipati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                      aria-label="Visit Venu Gudipati's GitHub profile"
                    >
                      github.com/venugudipati
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Cloud Architecture & Migration</li>
                  <li>• AI/ML Strategy & Implementation</li>
                  <li>• Data Platform Engineering</li>
                  <li>• Digital Transformation</li>
                  <li>• Technology Leadership</li>
                  <li>• DevSecOps & Automation</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-left">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
