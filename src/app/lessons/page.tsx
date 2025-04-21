'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';

export default function LessonsPage() {
  return (
    <PageWrapper activePage="/lessons">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="heading-responsive mb-4 text-primary transition-colors duration-300 ease-in-out">
            English Lessons
          </h1>
          <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
            Explore our structured English lessons designed to help you master the language step by step.
          </p>
        </div>

        {/* Lesson Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {title: 'Grammar Fundamentals', description: 'Master the building blocks of English grammar'},
            {title: 'Vocabulary Building', description: 'Expand your English vocabulary systematically'},
            {title: 'Speaking Practice', description: 'Improve your spoken English with guided exercises'},
            {title: 'Writing Skills', description: 'Develop clear and effective writing abilities'}
          ].map((category, i) => (
            <Card key={i} className="card-hover group cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    Explore Lessons
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Lesson Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Featured Lesson</h2>
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="aspect-video bg-muted rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Introduction to English Tenses</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive overview of the English tense system, perfect for beginners and intermediate learners.
              </p>
              <Button>Start Learning</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
