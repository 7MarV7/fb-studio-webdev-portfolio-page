
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillsData, type SkillCategory } from '@/lib/data';
import { Code2, Server, ToyBrick, Wrench, CheckCircle2 } from 'lucide-react'; 
import React from 'react';
import { cn } from "@/lib/utils";
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: Record<SkillCategory["iconName"], React.ElementType> = {
  Code2: Code2,
  Server: Server,
  ToyBrick: ToyBrick,
  Wrench: Wrench,
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t('skillsTitle')}</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category) => {
            const IconComponent = iconMap[category.iconName];
            // Category titles and skill names from data.ts are not yet translated by this setup.
            // For a full translation, these would also need keys in translations.ts and be accessed via t().
            return (
              <Card 
                key={category.title} 
                className={cn(
                  "shadow-lg hover:shadow-accent/20 transition-shadow duration-300"
                )}
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                  {IconComponent && <IconComponent className="h-8 w-8 text-accent" />}
                  <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.skillsList.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-accent/70 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
