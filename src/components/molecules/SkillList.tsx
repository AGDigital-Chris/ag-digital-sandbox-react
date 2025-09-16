import React from 'react';
import type { BaseComponentProps } from '../../types';
import ListItem from '../atoms/ListItem';

interface SkillListProps extends BaseComponentProps {
  title: string;
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ title, skills, className = '', dataQa }) => {
  return (
    <div className={`space-y-4 ${className}`} data-qa={dataQa || 'skill-list'}>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <ul className="space-y-2" data-qa={`${dataQa || 'skill-list'}--items`}>
        {skills.map((skill, idx) => (
          <ListItem 
            key={idx} 
            dataQa={`skill-list--${skill.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {skill}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;


