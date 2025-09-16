import React from 'react';
import { QaProvider } from '../../qa/qa';
import Heading from '../atoms/Heading';
import ProjectCard from '../molecules/ProjectCard';
import AnimatedBadge from '../atoms/AnimatedBadge';
import type { Project } from '../../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'animated-badge',
      title: 'Animated Badge Component',
      description: 'An exclusive animated badge with blue and red shine effect, featuring smooth gradient animations and premium styling.',
      technologies: ['JavaScript', 'CSS', 'Animation'],
      demoUrl: '/animated-badge-demo.html',
      codeUrl: 'https://github.com/AGDigital-Chris/ag-digital-sandbox/blob/main/styles.css',
      featured: false,
      preview: (
        <div className="flex justify-center">
          <AnimatedBadge 
            text="EXCLUSIVE"
            highlightText="ag"
          />
        </div>
      ),
    },
    {
      id: 'data-viz',
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard with real-time data visualization and filtering capabilities.',
      technologies: ['React', 'D3.js', 'TypeScript'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
    },
    {
      id: 'ag-design-system',
      title: 'AG Design System',
      description: 'Responsive design system point of reference built with React, TypeScript, and Tailwind CSS using atomic design principles.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
    },
  ];
  
  return (
    <QaProvider prefix="projects">
    <section id="projects" className="py-20 bg-surface-primary" data-qa="projects">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" data-qa="projects--container">
        <div className="text-center mb-16" data-qa="projects--header">
          <Heading 
            level="h2" 
            size="section"
            className="mb-4"
            dataQa="projects--title"
          >
            Featured Projects
          </Heading>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A showcase of UI and coding challenges, technical implementations, and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-qa="projects--grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              
            />
          ))}
        </div>
      </div>
    </section>
    </QaProvider>
  );
};

export default Projects;
