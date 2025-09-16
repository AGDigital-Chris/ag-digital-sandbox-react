import React from 'react';
import type { Project } from '../../types';
import BulletCard from '../atoms/BulletCard';
import Button from '../atoms/Button';
import BadgeList from './BadgeList';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <BulletCard 
      variant={project.featured ? 'prominent' : 'elevated'} 
      hover={true}
      className={`hover:border-brand-off-black dark:hover:border-brand-off-white transition-all ${className}`}
      dataQa={`project-card--${project.id}`}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2" data-qa="project-card--header">
          <h3 className="text-xl font-semibold text-primary leading-tight">
            {project.title}
          </h3>
          <BadgeList 
            badges={project.technologies.map(tech => ({ text: tech, variant: 'primary' as const }))}
            dataQa={`project-card--${project.id}-technologies`}
          />
        </div>
        
        {/* Content */}
        <div className="space-y-4" data-qa="project-card--content">
          <p className="text-secondary leading-tight">
            {project.description}
          </p>
          
          {/* Preview */}
          {project.preview && (
            <div className="relative rounded-md border border-dark p-4" data-qa="project-card--preview">
              {project.preview}
            </div>
          )}
        </div>
        
        {/* cta's */}
        <div className="flex gap-3 pt-2" data-qa="project-card--actions">
          {project.demoUrl && (
            <Button 
              variant="primary" 
              size="sm"
              href={project.demoUrl}
              external
              dataQa={`project-card--${project.id}-demo`}
            >
              View Demo
            </Button>
          )}
          {project.codeUrl && (
            <Button 
              variant="outline" 
              size="sm"
              href={project.codeUrl}
              external
              dataQa={`project-card--${project.id}-code`}
            >
              View Code
            </Button>
          )}
        </div>
      </div>
    </BulletCard>
  );
};

export default ProjectCard;
