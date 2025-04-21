'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {PageWrapper} from '@/components/page-wrapper';
import {cn} from '@/lib/utils';

export default function AnnouncementsPage() {
  const announcements = [
    {
      title: 'New Interactive Lessons',
      description: 'We\'ve added new interactive exercises and practice materials.',
      date: 'April 21, 2025',
      type: 'Feature Update',
      priority: 'high'
    },
    {
      title: 'System Maintenance',
      description: 'Scheduled maintenance window this weekend.',
      date: 'April 20, 2025',
      type: 'Maintenance',
      priority: 'medium'
    },
    {
      title: 'Community Event',
      description: 'Join our upcoming speaking practice session.',
      date: 'April 19, 2025',
      type: 'Event',
      priority: 'normal'
    },
    {
      title: 'Learning Path Updates',
      description: 'New customized learning paths available.',
      date: 'April 18, 2025',
      type: 'Feature Update',
      priority: 'high'
    }
  ];

  return (
    <PageWrapper activePage="/announcements">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="heading-responsive mb-4 text-primary transition-colors duration-300 ease-in-out">
            Announcements
          </h1>
          <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news and important announcements from Elevate English.
          </p>
        </div>

        {/* Featured Announcement */}
        <Card className="border-primary/50 card-hover bg-primary/[0.03]">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-primary font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
              </svg>
              <span>Featured Update</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">New Interactive Learning Features</h2>
            <p className="text-muted-foreground">
              We're excited to announce new interactive exercises and practice materials to help you improve your English skills.
              These updates include real-time pronunciation feedback and AI-powered writing suggestions.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <Button>Learn More</Button>
              <span className="text-sm text-muted-foreground">April 21, 2025</span>
            </div>
          </CardContent>
        </Card>

        {/* Announcements Timeline */}
        <div className="relative space-y-6 mt-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2"></div>
          
          {announcements.map((announcement, i) => (
            <div key={i} className={cn(
              "relative grid gap-6 md:grid-cols-2",
              i % 2 === 0 ? "md:text-right" : ""
            )}>
              <div className={cn(
                "p-6 rounded-lg bg-card border shadow-sm",
                i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              )}>
                <div className={cn(
                  "absolute top-8 w-3 h-3 rounded-full border-4 bg-background",
                  announcement.priority === 'high' ? "border-primary" : 
                  announcement.priority === 'medium' ? "border-orange-500" :
                  "border-muted-foreground",
                  i % 2 === 0 ? "-right-[7px] md:right-auto md:-left-[7px]" : "-left-[7px]"
                )}></div>
                <div className="space-y-2">
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    announcement.type === 'Feature Update' ? "bg-primary/10 text-primary" :
                    announcement.type === 'Maintenance' ? "bg-orange-500/10 text-orange-500" :
                    "bg-muted text-muted-foreground"
                  )}>
                    {announcement.type}
                  </span>
                  <h3 className="font-semibold">{announcement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {announcement.description}
                  </p>
                  <time className="text-sm text-muted-foreground block">
                    {announcement.date}
                  </time>
                </div>
              </div>
              {i % 2 === 0 ? <div></div> : null}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <Button variant="outline">Load More Announcements</Button>
        </div>
      </div>
    </PageWrapper>
  );
}
