'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function LatestContentPage() {
  const router = useRouter();

  // Simulate content loading state - replace with actual data fetching
  const isLoading = false; // Set to true to show skeleton loaders
  const hasContent = false; // Set to true to show content

  return (
    <div className="flex flex-col min-h-screen transition-all duration-300 ease-in-out">
      <div
        className="fixed top-0 left-0 w-full h-16 bg-background/70 backdrop-blur-md z-50 shadow-md transition-all duration-300 ease-in-out">
        <div className="container max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="text-2xl font-bold text-primary transition-colors duration-300 ease-in-out hover:text-accent">
            Elevate English
          </a>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                  'focus-ring'
                )}
                onClick={() => router.push('/lessons')}>
                <span>Lessons</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                  'focus-ring'
                )}
                onClick={() => router.push('/notes')}>
                <span>Notes</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                  'focus-ring'
                )}
                onClick={() => router.push('/tips-and-tricks')}>
                <span>Tips & Tricks</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                  'focus-ring'
                )}
                onClick={() => router.push('/announcements')}>
                <span>Announcements</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                  'focus-ring'
                )}
                onClick={() => router.push('/blogs')}>
                <span>Blogs</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                  'focus-ring'
                )}
                onClick={() => router.push('/about-us')}>
                <span>About Us</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Apply centering */}
      <div
        className="flex flex-1 items-center justify-center p-4" // Added flex items-center justify-center
        style={{ minHeight: 'calc(100vh - 64px)', paddingTop: '64px' }} // Ensure content starts below fixed header
      >
        <div className="container max-w-7xl mx-auto text-center"> {/* Added text-center for content alignment */}
          <h2 className="text-3xl font-bold mb-4 text-primary transition-colors duration-300 ease-in-out">
            Latest Content
          </h2>

          {isLoading ? (
            <div>Loading content...</div> // Replace with Skeleton components if available
          ) : hasContent ? (
            <div> {/* Actual content goes here */} </div>
          ) : (
            <p className="text-md text-muted-foreground transition-colors duration-300 ease-in-out">
              We'll add content here soon. Stay tuned!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
