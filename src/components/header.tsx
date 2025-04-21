'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export function Header({ activePage }: { activePage?: string }) {
  const router = useRouter();

  const navItems = [
    { name: 'Lessons', href: '/lessons' },
    { name: 'Notes', href: '/notes' },
    { name: 'Tips & Tricks', href: '/tips-and-tricks' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-background/70 backdrop-blur-md z-50 shadow-md transition-all duration-300 ease-in-out">
      <div className="container-wide h-full flex items-center justify-between">
        <a
          href="/"
          className="text-xl md:text-2xl font-bold text-primary transition-colors duration-300 ease-in-out hover:text-accent">
          Elevate English
        </a>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 mr-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                  'focus-ring',
                  activePage === item.href && 'underline underline-offset-4'
                )}
                onClick={() => router.push(item.href)}>
                <span>{item.name}</span>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <MobileNav />
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}