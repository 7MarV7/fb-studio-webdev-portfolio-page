'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ThreeDPlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageHint?: string;
}

const ThreeDPlaceholder: React.FC<ThreeDPlaceholderProps> = ({ 
  src, 
  alt, 
  width = 600, 
  height = 400, 
  className, 
  imageHint 
}) => {
  return (
    <div className={cn(
      "group relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl aspect-[3/2]",
      className
    )}>
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="object-cover w-full h-full"
        data-ai-hint={imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-primary-foreground text-sm font-semibold drop-shadow-md">Interactive 3D Element</p>
        <p className="text-xs text-primary-foreground/80 drop-shadow-md">Hover to interact (conceptual)</p>
      </div>
    </div>
  );
};

export default ThreeDPlaceholder;
