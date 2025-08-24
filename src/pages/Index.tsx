import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend
      alert(`Thanks! We'll notify you at ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-subtle)] flex items-center justify-center p-4">
      <main className="w-full max-w-2xl mx-auto text-center">
        {/* Main Card */}
        <div className="bg-[var(--card-gradient)] backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-large)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Coming
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Soon</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light leading-relaxed">
            We're working on something awesome
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-12">
            <CountdownTimer />
          </div>
          
          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 text-base bg-background/50 backdrop-blur-sm border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                required
              />
              <Button 
                type="submit"
                className="h-12 px-8 bg-gradient-to-r from-primary to-primary-hover hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 font-semibold rounded-xl"
              >
                Notify Me
              </Button>
            </div>
          </form>
          
          {/* Footer Text */}
          <p className="text-sm text-muted-foreground mt-8 opacity-75">
            Be the first to know when we launch
          </p>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        </div>
      </main>
    </div>
  );
};

export default Index;