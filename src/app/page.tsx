'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { initialProjectsData, initialIntroductionText, type Project } from '@/lib/data';
import { getPersonalizedPortfolio } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
  const [currentIntroduction, setCurrentIntroduction] = useState<string>(initialIntroductionText);
  const [personalizedIntroduction, setPersonalizedIntroduction] = useState<string | null>(null);
  const [projects] = useState<Project[]>(initialProjectsData); // Projects data is static for now
  const [isPersonalizing, setIsPersonalizing] = useState(false);
  const { toast } = useToast();

  // This effect ensures that the component only runs client-side operations after mounting.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const portfolioContentForAI = useMemo(() => {
    const projectSummaries = projects.map(p => `${p.title}: ${p.detailedDescription}`).join('\n\n');
    return `My Portfolio Introduction:\n${initialIntroductionText}\n\nMy Projects:\n${projectSummaries}`;
  }, [projects]);

  const handlePersonalize = async (profileUrl: string) => {
    if (!isMounted) return; // Ensure client-side only

    setIsPersonalizing(true);
    setPersonalizedIntroduction(null); // Clear previous personalization
    toast({
      title: "Personalizing...",
      description: "AI is tailoring the content for you. This might take a moment.",
    });

    const result = await getPersonalizedPortfolio(profileUrl, portfolioContentForAI);

    if (result.success && result.personalizedContent) {
      setPersonalizedIntroduction(result.personalizedContent);
      toast({
        title: "Portfolio Personalized!",
        description: "The introduction has been updated based on the profile.",
        variant: "default",
      });
    } else {
      toast({
        title: "Personalization Failed",
        description: result.error || "Could not personalize the content.",
        variant: "destructive",
      });
      // Revert to initial if personalization fails but was attempted
      setPersonalizedIntroduction(null); 
    }
    setIsPersonalizing(false);
  };
  
  // Determine which introduction to show in HeroSection
  const heroIntroduction = personalizedIntroduction !== null ? personalizedIntroduction : currentIntroduction;

  if (!isMounted) {
    // Optional: render a loading state or null until mounted to avoid hydration issues with personalized content.
    // For this setup, initial content is always shown on server, personalization happens client-side.
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection 
          initialIntroduction={initialIntroductionText}
          personalizedIntroduction={personalizedIntroduction}
          onPersonalize={handlePersonalize}
          isPersonalizing={isPersonalizing}
        />
        <ProjectsSection projects={projects} />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
