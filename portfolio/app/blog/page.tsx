import { Metadata } from "next";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { blogPostsData } from "@/data/blog-posts";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog & Insights | Venu Gudipati",
  description:
    "Thoughts on technology leadership, cloud transformation, AI governance, and enterprise innovation from 22+ years of experience.",
  openGraph: {
    title: "Blog & Insights | Venu Gudipati",
    description:
      "Technology leadership insights on cloud, AI, and digital transformation.",
  },
};

export default function Blog() {
  return (
    <main className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Blog & Insights
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on technology leadership, cloud transformation, and enterprise innovation
          </p>
        </AnimatedSection>

        <BlogPreview posts={blogPostsData.posts} />
      </div>
    </main>
  );
}
