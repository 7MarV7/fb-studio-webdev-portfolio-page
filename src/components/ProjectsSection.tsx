
'use client';

import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t('projectsTitle')}</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>
        
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No projects to display at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
