'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import ThreeDPlaceholder from './ThreeDPlaceholder';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  initialIntroduction: string;
  personalizedIntroduction: string | null;
  onPersonalize: (profileUrl: string) => Promise<void>;
  isPersonalizing: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ initialIntroduction, personalizedIntroduction, onPersonalize, isPersonalizing }) => {
  const [profileUrl, setProfileUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profileUrl) {
      await onPersonalize(profileUrl);
    }
  };

  const introductionToDisplay = personalizedIntroduction || initialIntroduction;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-16 md:py-24 bg-gradient-to-br from-background via-primary/10 to-background"
    >
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Crafting <span className="text-accent">Vivid</span> Digital Realities
            </h1>
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground transition-opacity duration-500",
              isPersonalizing && !personalizedIntroduction ? "opacity-50" : "opacity-100"
            )}>
              {introductionToDisplay}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="shadow-lg hover:shadow-accent/40 transition-shadow">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-8 p-6 border border-border rounded-lg bg-card shadow-sm space-y-4">
              <Label htmlFor="profileUrl" className="text-sm font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-accent" />
                Personalize Your View (e.g., LinkedIn Profile)
              </Label>
              <div className="flex gap-2">
                <Input
                  id="profileUrl"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  className="flex-grow"
                  disabled={isPersonalizing}
                />
                <Button type="submit" variant="outline" disabled={isPersonalizing || !profileUrl}>
                  {isPersonalizing ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Go'
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Enter a public profile URL to see an AI-tailored introduction.</p>
            </form>
          </div>
          
          <div className="hidden md:block">
            <ThreeDPlaceholder
              src="https://placehold.co/800x600.png"
              alt="Abstract 3D design"
              imageHint="abstract geometric"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
