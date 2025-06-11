
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Aperture, Globe, Check } from 'lucide-react';
import React from 'react';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#home', labelKey: 'navHome' },
    { href: '#projects', labelKey: 'navProjects' },
    { href: '#skills', labelKey: 'navSkills' },
    { href: '#contact', labelKey: 'navContact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" aria-label={t('vividfolio') + " Home"}>
          <Aperture className="h-7 w-7 text-accent" />
          <span className="font-headline text-2xl font-bold text-foreground">{t('vividfolio')}</span>
        </Link>
        
        <div className="flex items-center gap-1 md:gap-2">
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{t(link.labelKey)}</Link>
              </Button>
            ))}
          </nav>
          <ThemeToggleButton />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t('languageSwitchLabel')}>
                <Globe className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('languageSwitchLabel')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setLanguage('en')} className={cn(language === 'en' && "font-semibold")}>
                {language === 'en' && <Check className="mr-2 h-4 w-4" />}
                {t('languageEnglish')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('de')} className={cn(language === 'de' && "font-semibold")}>
                 {language === 'de' && <Check className="mr-2 h-4 w-4" />}
                {t('languageGerman')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="#home" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                    <Aperture className="h-7 w-7 text-accent" />
                    <span className="font-headline text-2xl font-bold text-foreground">{t('vividfolio')}</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Button key={link.href} variant="ghost" className="w-full justify-start text-lg" asChild onClick={() => setIsOpen(false)}>
                      <Link href={link.href}>{t(link.labelKey)}</Link>
                    </Button>
                  ))}
                   {/* Mobile Language Switcher (Optional - could integrate into mobile nav better) */}
                  <div className="pt-4 border-t border-border/40">
                    <h4 className="mb-2 text-sm font-medium text-muted-foreground">{t('languageSwitchLabel')}</h4>
                    <Button variant={language === 'en' ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => {setLanguage('en'); setIsOpen(false);}}>
                      {language === 'en' && <Check className="mr-2 h-4 w-4" />} {t('languageEnglish')}
                    </Button>
                    <Button variant={language === 'de' ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => {setLanguage('de'); setIsOpen(false);}}>
                      {language === 'de' && <Check className="mr-2 h-4 w-4" />} {t('languageGerman')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
