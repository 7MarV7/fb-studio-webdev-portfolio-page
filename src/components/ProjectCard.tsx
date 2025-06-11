'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThreeDPlaceholder from "@/components/ThreeDPlaceholder";
import type { Project } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <ThreeDPlaceholder 
          src={project.imageUrl} 
          alt={project.title} 
          imageHint={project.imageHint} 
        />
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 pt-4">
        {project.liveLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.repoLink && (
          <Button variant="ghost" size="sm" asChild>
            <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
