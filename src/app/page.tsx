'use client';

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';
import dynamic from 'next/dynamic';
import {Card, CardContent} from '@/components/ui/card';
import { Header } from '@/components/header';

const TypeAnimation = dynamic(() => import('react-type-animation').then(mod => mod.TypeAnimation), {
  ssr: false,
  loading: () => <span className="text-primary">Welcome to Elevate English...</span>,
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen transition-all duration-300 ease-in-out">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5"></div>
        <div className="container-tight relative z-10 text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {isMounted && (
              <TypeAnimation
                sequence={[
                  'Master English',
                  2000,
                  'Build Confidence',
                  2000,
                  'Achieve Success',
                  2000,
                ]}
                repeat={Infinity}
                className="text-gradient"
              />
            )}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your journey to English mastery starts here. Join our community and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" onClick={() => router.push('/lessons')}>
              Start Learning
            </Button>
            <Button size="lg" variant="outline" onClick={() => router.push('/about-us')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Elevate English?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Structured Learning',
                description: 'Progressive lessons designed to build your skills systematically',
                icon: '📚'
              },
              {
                title: 'Expert Guidance',
                description: 'Learn from experienced teachers and proven methodologies',
                icon: '👨‍🏫'
              },
              {
                title: 'Practice Materials',
                description: 'Access a wide range of exercises and practice resources',
                icon: '✏️'
              },
              {
                title: 'Community Support',
                description: 'Join a community of learners and practice together',
                icon: '👥'
              },
              {
                title: 'Track Progress',
                description: 'Monitor your improvement with detailed progress tracking',
                icon: '📈'
              },
              {
                title: 'Flexible Learning',
                description: 'Learn at your own pace, anywhere, anytime',
                icon: '🌐'
              }
            ].map((feature, i) => (
              <Card key={i} className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-tight text-center">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who are already improving their English with Elevate English.
            </p>
            <Button size="lg" className="mt-4" onClick={() => router.push('/lessons')}>
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

