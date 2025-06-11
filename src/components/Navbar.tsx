"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Aperture, Globe } from 'lucide-react';
import React from 'react';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" aria-label="Vividfolio Home">
          <Aperture className="h-7 w-7 text-accent" />
          <span className="font-headline text-2xl font-bold text-foreground">Vividfolio</span>
        </Link>
        
        <div className="flex items-center gap-1 md:gap-2">
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
          <ThemeToggleButton />
          <Button variant="ghost" size="icon" aria-label="Change language (placeholder)" onClick={() => alert('Language switching functionality not yet implemented.')}>
            <Globe className="h-[1.2rem] w-[1.2rem]" />
          </Button>
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
                    <span className="font-headline text-2xl font-bold text-foreground">Vividfolio</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Button key={link.href} variant="ghost" className="w-full justify-start text-lg" asChild onClick={() => setIsOpen(false)}>
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                  {/* Placeholder for language switch in mobile menu if needed later */}
                  {/* <Button variant="ghost" className="w-full justify-start text-lg" onClick={() => { alert('Language switching functionality not yet implemented.'); setIsOpen(false);}}>
                    <Globe className="mr-2 h-5 w-5" /> Change Language
                  </Button> */}
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
