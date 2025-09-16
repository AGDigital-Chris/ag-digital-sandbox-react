import React from 'react';
import BulletCard from '../atoms/BulletCard';
import Heading from '../atoms/Heading';
import BadgeList from '../molecules/BadgeList';
import SkillList from '../molecules/SkillList';
import type { SkillCategory } from '../../types';

const About: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['React & Vue.js Learning', 'TypeScript & JavaScript Learning', 'CSS3 & SASS Learning', 'Responsive Design'],
    },
    {
      title: 'Tools & Practices',
      skills: ['Git & GitHub', 'Testing Frameworks', 'CI/CD Pipelines', 'Code Optimization'],
    },
  ];

  const techBadges = [
    { text: 'React', variant: 'primary' as const },
    { text: 'TypeScript', variant: 'primary' as const },
    { text: 'Tailwind CSS', variant: 'primary' as const },
    { text: 'Atomic Design', variant: 'primary' as const },
    { text: 'GitHub Pages', variant: 'primary' as const },
  ];
  
  return (
    <section id="about" className="py-20 bg-surface-tertiary" data-qa="about">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" data-qa="about--container">
        <div className="grid lg:grid-cols-2 gap-12 items-center" data-qa="about--grid">
          {/* Content */}
          <div className="space-y-6" data-qa="about--content">
            <Heading 
              level="h2" 
              size="section"
              dataQa="about--title"
            >
              About This Showcase
            </Heading>
            <p className="text-lg text-secondary leading-tight">
              This GitHub Pages test area for AG digital design and frontend development. 
              Built with modern React, TypeScript, and Tailwind CSS using atomic design principles.
            </p>
            
            <BadgeList badges={techBadges} dataQa="about--tech-badges" />
          </div>
          
          {/* Skills Grid */}
          <div className="space-y-6" data-qa="about--skills">
            {skillCategories.map((category, index) => (
              <BulletCard key={index} variant="subtle" padding="md">
                <SkillList title={category.title} skills={category.skills} />
              </BulletCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
