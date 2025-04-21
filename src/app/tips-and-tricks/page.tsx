'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TipsAndTricksPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tips = [
    {
      title: 'Daily Practice',
      tip: 'Spend 15 minutes each day reviewing vocabulary',
      category: 'Study Habits',
      difficulty: 'Beginner'
    },
    {
      title: 'Immersion Technique',
      tip: 'Watch English content with subtitles',
      category: 'Learning Technique',
      difficulty: 'Intermediate'
    },
    {
      title: 'Writing Practice',
      tip: 'Keep a daily journal in English',
      category: 'Practice',
      difficulty: 'Beginner'
    },
    {
      title: 'Speaking Confidence',
      tip: 'Record yourself speaking and analyze your pronunciation',
      category: 'Practice',
      difficulty: 'Advanced'
    },
    {
      title: 'Vocabulary Building',
      tip: 'Learn words in context through reading',
      category: 'Learning Technique',
      difficulty: 'Intermediate'
    },
    {
      title: 'Grammar Practice',
      tip: 'Use grammar checkers to improve your writing',
      category: 'Study Habits',
      difficulty: 'Beginner'
    }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  return (
    <PageWrapper activePage="/tips-and-tricks">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="heading-responsive mb-4 text-primary transition-colors duration-300 ease-in-out">
            Tips & Tricks
          </h1>
          <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
            Discover practical tips and clever tricks to enhance your English learning journey.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Study Habits">Study Habits</SelectItem>
              <SelectItem value="Learning Technique">Learning Techniques</SelectItem>
              <SelectItem value="Practice">Practice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tips Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTips.map((item, i) => (
            <Card key={i} className="card-hover overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary">{item.category}</span>
                  <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">
                    {item.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.tip}
                </p>
                <Button variant="ghost" size="sm" className="w-full justify-center">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tip Section */}
        <div className="mt-12">
          <Card className="bg-primary/5 border-none">
            <CardContent className="p-6 md:p-8">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-lg">✨</span>
                  <h2 className="text-xl md:text-2xl font-semibold ml-2">Tip of the Day</h2>
                </div>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Active Learning Strategy</h3>
                    <p className="text-muted-foreground">
                      Instead of passively reading or listening, engage actively with the material by taking notes,
                      summarizing content, and teaching concepts to others. This helps reinforce your learning and
                      improves retention.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button>Try it Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
