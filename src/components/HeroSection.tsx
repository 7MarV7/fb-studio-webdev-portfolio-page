
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import ThreeDPlaceholder from './ThreeDPlaceholder';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  initialIntroduction: string; // This will now serve as a fallback or key
  personalizedIntroduction: string | null;
  onPersonalize: (profileUrl: string) => Promise<void>;
  isPersonalizing: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ initialIntroduction, personalizedIntroduction, onPersonalize, isPersonalizing }) => {
  const [profileUrl, setProfileUrl] = useState('');
  const { t, language } = useLanguage();

  // Define initialIntroductionText before it's used
  const initialIntroductionText = "A passionate and creative Web Developer specializing in crafting immersive and interactive digital experiences. With a strong foundation in modern frontend and backend technologies, coupled with a keen eye for design and 3D graphics, I transform complex ideas into elegant and user-friendly solutions. Explore my work to see how I can bring your next project to life.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profileUrl) {
      await onPersonalize(profileUrl);
    }
  };
  
  // For dynamic content like introduction, it's better to manage translations outside the generic `t` function
  // if the content is substantial. Here, `initialIntroduction` could be a key itself if short,
  // or you'd fetch/provide language-specific versions. For simplicity, we'll assume it can be a key.
  // The personalizedIntroduction is AI-generated and currently not translated.
  const introductionToDisplay = personalizedIntroduction || (language === 'de' ? "Eine passionierte und kreative Webentwicklerin, spezialisiert auf die Gestaltung immersiver und interaktiver digitaler Erlebnisse. Mit einer starken Grundlage in modernen Frontend- und Backend-Technologien, gepaart mit einem scharfen Auge für Design und 3D-Grafiken, verwandle ich komplexe Ideen in elegante und benutzerfreundliche Lösungen. Entdecke meine Arbeit, um zu sehen, wie ich dein nächstes Projekt zum Leben erwecken kann." : initialIntroductionText);


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
              {t('heroTitlePart1')}{' '}
              <span className="text-accent">{t('heroTitlePart2')}</span>{' '}
              {t('heroTitlePart3')}
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
                  {t('viewMyWork')} <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-8 p-6 border border-border rounded-lg bg-card shadow-sm space-y-4">
              <Label htmlFor="profileUrl" className="text-sm font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-accent" />
                {t('personalizeYourView')}
              </Label>
              <div className="flex gap-2">
                <Input
                  id="profileUrl"
                  type="url"
                  placeholder={t('profileUrlPlaceholder')}
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  className="flex-grow"
                  disabled={isPersonalizing}
                />
                <Button type="submit" variant="outline" disabled={isPersonalizing || !profileUrl}>
                  {isPersonalizing ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    t('personalizeButton')
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{t('personalizeHint')}</p>
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
