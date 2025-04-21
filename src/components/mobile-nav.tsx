'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

export function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Lessons', href: '/lessons' },
    { name: 'Notes', href: '/notes' },
    { name: 'Tips & Tricks', href: '/tips-and-tricks' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open Menu">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80vw] sm:w-[385px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="text-left text-lg font-bold text-primary">
              Elevate English
            </SheetTitle>
          </SheetHeader>
          <nav className="flex-1 overflow-y-auto">
            <div className="flex flex-col space-y-2 p-6">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn(
                    'justify-start text-base font-medium transition-colors',
                    pathname === item.href ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50',
                    'slide-up'
                  )}
                  onClick={() => {
                    router.push(item.href);
                  }}>
                  {item.name}
                </Button>
              ))}
            </div>
          </nav>
          <div className="mt-auto p-6 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Switch theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}