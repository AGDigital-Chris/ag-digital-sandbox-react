import React from 'react';
import Badge from '../atoms/Badge';
import type { BadgeVariant } from '../../types';

interface BadgeItem {
  text: string;
  variant?: BadgeVariant;
}

interface BadgeListProps {
  badges: BadgeItem[];
  className?: string;
  dataQa?: string;
}

const BadgeList: React.FC<BadgeListProps> = ({ 
  badges, 
  className = '',
  dataQa 
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} data-qa={dataQa || 'badge-list'}>
      {badges.map((badge, index) => (
        <Badge 
          key={index}
          variant={badge.variant || 'primary'}
          dataQa={`badge-list--${badge.text.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {badge.text}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
