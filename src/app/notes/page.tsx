'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';

export default function NotesPage() {
  const noteCategories = [
    {
      title: 'Grammar Notes',
      description: 'Comprehensive guides on English grammar rules and usage',
      count: 12,
      icon: '📝'
    },
    {
      title: 'Vocabulary Lists',
      description: 'Categorized word lists with examples and practice exercises',
      count: 8,
      icon: '📚'
    },
    {
      title: 'Pronunciation Guides',
      description: 'Detailed guides for mastering English pronunciation',
      count: 6,
      icon: '🗣️'
    },
    {
      title: 'Writing Templates',
      description: 'Templates and formats for different types of writing',
      count: 4,
      icon: '✍️'
    }
  ];

  return (
    <PageWrapper activePage="/notes">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="heading-responsive mb-4 text-primary transition-colors duration-300 ease-in-out">
            Study Notes
          </h1>
          <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive collection of English language learning notes. From grammar essentials to advanced writing techniques.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-lg border bg-card p-2 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <Button className="w-full" variant="secondary">
                Recent Notes
              </Button>
              <Button className="w-full" variant="secondary">
                Popular Notes
              </Button>
            </div>
          </div>
        </div>

        {/* Note Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {noteCategories.map((category, i) => (
            <Card key={i} className="card-hover group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{category.count} notes</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    View All →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Notes Preview */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Notes</h2>
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="card-hover">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Example Note {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        Last updated 2 days ago
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
