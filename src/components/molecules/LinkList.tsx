import React from 'react';
import type { BaseComponentProps } from '../../types';

interface LinkItem { label: string; href: string; }

interface LinkListProps extends BaseComponentProps {
  title: string;
  items: LinkItem[];
  context?: 'adaptive' | 'on-dark' | 'on-light';
}

const LinkList: React.FC<LinkListProps> = ({ title, items, context = 'adaptive', className = '', dataQa }) => {
  const getTextClasses = () => {
    switch (context) {
      case 'on-dark':
        return 'block text-on-dark-secondary hover:text-on-dark transition-colors';
      case 'on-light':
        return 'block text-on-light-secondary hover:text-on-light transition-colors';
      case 'adaptive':
      default:
        return 'block text-secondary hover:text-primary transition-colors';
    }
  };

  return (
    <div className={`space-y-4 ${className}`} data-qa={dataQa || 'link-list'}>
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <a key={idx} href={item.href} className={getTextClasses()}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkList;


