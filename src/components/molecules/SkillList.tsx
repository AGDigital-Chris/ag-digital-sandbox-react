import React from 'react';
import type { BaseComponentProps } from '../../types';
import StatusDot from '../atoms/StatusDot';

interface SkillListProps extends BaseComponentProps {
  title: string;
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ title, skills, className = '', dataQa }) => {
  return (
    <div className={`space-y-4 ${className}`} data-qa={dataQa || 'skill-list'}>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <li key={idx} className="flex items-center text-secondary">
            <StatusDot className="mr-3" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;


