import React from 'react';
import type { BaseComponentProps } from '../../types';
import StatusDot from './StatusDot';

interface ListItemProps extends BaseComponentProps {
  showDot?: boolean;
  dotColor?: 'current' | 'brand-blue' | 'brand-red' | 'brand-green';
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  showDot = true,
  dotColor = 'current',
  className = '',
  dataQa
}) => {
  const dotColorClass = dotColor === 'current' ? 'bg-current' : `bg-${dotColor}`;
  
  return (
    <li className={`flex items-center text-secondary ${className}`} data-qa={dataQa || 'list-item'}>
      {showDot && (
        <StatusDot 
          className="mr-3" 
          colorClass={dotColorClass}
          dataQa="list-item--status-dot"
        />
      )}
      {children}
    </li>
  );
};

export default ListItem;
