'use client';

import { cn } from '@/lib/utils';
import { Header } from './header';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  activePage?: string;
}

export function PageWrapper({ children, className, activePage }: PageWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen transition-all duration-300 ease-in-out">
      <Header activePage={activePage} />
      <main className={cn(
        'container-tight py-20 md:py-24 fade-in',
        className
      )}>
        {children}
      </main>
    </div>
  );
}