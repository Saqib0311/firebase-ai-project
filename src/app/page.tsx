import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureCard } from '@/components/feature-card';
import { BarChart3, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Decentralized Trust',
      description: 'Experience voting built on blockchain technology for unparalleled security and transparency.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Results',
      description: 'Monitor poll outcomes live as votes are cast, ensuring immediate and verifiable results.',
    },
    {
      icon: Users,
      title: 'Community Governed',
      description: 'Empower your community by enabling members to propose and vote on important decisions.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Secure, Transparent, Decentralized Voting
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Empowering communities with VoteChain, the future of decision-making. 
            Join us to build a more democratic world.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/polls">
                Explore Polls <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold">
              <Link href="/#overview">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* App Overview Section */}
      <section id="overview" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">What is VoteChain?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                VoteChain is a cutting-edge decentralized voting platform designed to bring transparency, security, and accessibility to decision-making processes. Whether for DAOs, community groups, or organizations, VoteChain provides a robust and auditable system for conducting polls and elections.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform leverages blockchain technology to ensure that every vote is recorded immutably and can be publicly verified, eliminating concerns of tampering and fraud. With user-friendly interfaces and support for various wallet connections, participating in governance has never been easier.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkZW1vY3JhY3l8ZW58MHx8fHwxNzQ4Njg3ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="VoteChain Platform Showcase"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="blockchain voting interface"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features of VoteChain
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Governance?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
            Join VoteChain today and take the first step towards more secure, transparent, and democratic decision-making.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-bold text-secondary-foreground hover:bg-white/90">
            <Link href="/dashboard">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
