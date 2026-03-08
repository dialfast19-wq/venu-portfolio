"use client";

import { BlogPostMetadata } from "@/data/blog-posts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import Link from "next/link";

export interface BlogPreviewProps {
  posts: BlogPostMetadata[];
}

/**
 * Format date from ISO 8601 to readable format
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * BlogPreview Component
 * 
 * Displays blog article previews in a responsive grid layout.
 * Features:
 * - Grid layout (1-3 columns responsive)
 * - Article preview cards with title, excerpt, date, and read time
 * - Click navigation to full article pages
 * - Reverse chronological order
 * - Animated cards on scroll
 */
export function BlogPreview({ posts }: BlogPreviewProps) {
  // Sort posts in reverse chronological order (most recent first)
  const sortedPosts = [...posts].sort((a, b) => {
    return b.publishedAt.localeCompare(a.publishedAt);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {sortedPosts.map((post, index) => (
        <AnimatedSection
          key={post.slug}
          animation="slide-up"
          delay={index * 0.1}
          threshold={0.2}
        >
          <Link href={`/blog/${post.slug}`} className="block h-full">
            <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <CardTitle className="text-xl line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-end gap-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read more indicator */}
                <div className="text-sm text-primary font-medium">
                  Read article →
                </div>
              </CardContent>
            </Card>
          </Link>
        </AnimatedSection>
      ))}
    </div>
  );
}
