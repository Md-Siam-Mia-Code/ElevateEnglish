'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Lead English Instructor',
      bio: '10+ years of experience in teaching English as a second language.',
      avatar: '👩‍🏫'
    },
    {
      name: 'Michael Chen',
      role: 'Curriculum Developer',
      bio: 'Specialized in creating engaging and effective learning materials.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Wilson',
      role: 'Community Manager',
      bio: 'Dedicated to fostering a supportive learning environment.',
      avatar: '👩‍💼'
    }
  ];

  return (
    <PageWrapper activePage="/about-us">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="heading-responsive mb-4 text-primary transition-colors duration-300 ease-in-out">
            About Elevate English
          </h1>
          <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to making English language learning accessible, engaging, and effective for learners worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="border-primary/50 bg-primary/[0.03]">
          <CardContent className="p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To empower learners with the confidence and skills they need to master the English language through
              innovative learning methods and supportive community engagement.
            </p>
          </CardContent>
        </Card>

        {/* Key Features Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Expert Teachers',
              description: 'Learn from certified English language instructors',
              icon: '👨‍🏫'
            },
            {
              title: 'Interactive Learning',
              description: 'Engage with dynamic and practical exercises',
              icon: '💻'
            },
            {
              title: 'Global Community',
              description: 'Connect with learners from around the world',
              icon: '🌍'
            }
          ].map((feature, i) => (
            <Card key={i} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Meet Our Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, i) => (
              <Card key={i} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions or feedback? We'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <Button size="lg">Contact Us</Button>
                  <Button size="lg" variant="outline">Join Community</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageWrapper>
  );
}
