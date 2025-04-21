'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';

export default function BlogsPage() {
  const blogPosts = [
    {
      title: 'Mastering English Pronunciation',
      excerpt: 'Discover effective techniques for improving your English pronunciation and speaking with confidence.',
      category: 'Speaking',
      date: 'April 21, 2025',
      readTime: '5 min read',
      featured: true
    },
    // Add more blog posts here
  ];

  return (
    <PageWrapper activePage="/blogs">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="heading-responsive mb-4 text-primary transition-colors duration-300 ease-in-out">
            Blog Posts
          </h1>
          <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
            Insights, stories, and expert advice to help you on your English learning journey.
          </p>
        </div>

        {/* Featured Blog Post */}
        <Card className="card-hover overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="text-sm font-medium text-primary mb-2">Featured Post</div>
                <h2 className="text-2xl font-semibold mb-3">Mastering English Pronunciation</h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Discover effective techniques for improving your English pronunciation and speaking with confidence.
                  We'll explore common challenges and practical solutions.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Button className="self-start">Read More</Button>
                  <span className="text-sm text-muted-foreground">April 21, 2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="card-hover group">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 
                    group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium">Category</span>
                    <span className="text-xs text-muted-foreground">5 min read</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Example Blog Post {i}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    A brief preview of the blog post content will appear here, giving readers a glimpse of what to expect...
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="ghost" className="text-primary hover:text-primary p-0">
                      Read More →
                    </Button>
                    <time className="text-sm text-muted-foreground">April 21, 2025</time>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <Button variant="outline" size="sm" className="w-24">Previous</Button>
          <Button variant="outline" size="sm" className="w-24">Next</Button>
        </div>
      </div>
    </PageWrapper>
  );
}
