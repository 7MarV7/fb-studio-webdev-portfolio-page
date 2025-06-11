'use client';

import { Aperture } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 border-t border-border/40 py-8">
      <div className="container px-4 md:px-6 text-center text-muted-foreground">
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <Aperture className="h-8 w-8 text-accent" />
            <p className="text-sm font-semibold text-foreground">Vividfolio</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-4 text-sm">
          <Link href="/imprint" className="hover:text-accent transition-colors">
            Imprint
          </Link>
          <span className="hidden sm:inline text-border">|</span>
          <Link href="/privacy-policy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Vividfolio. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Designed with passion and coded with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
