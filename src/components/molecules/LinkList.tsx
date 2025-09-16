import React from 'react';
import type { BaseComponentProps } from '../../types';
import Link from '../atoms/Link';
import Heading from '../atoms/Heading';

interface LinkItem { label: string; href: string; }

interface LinkListProps extends BaseComponentProps {
  title: string;
  items: LinkItem[];
  context?: 'adaptive' | 'on-dark' | 'on-light';
}

const LinkList: React.FC<LinkListProps> = ({ title, items, context = 'adaptive', className = '', dataQa }) => {
  return (
    <div className={`space-y-4 ${className}`} data-qa={dataQa || 'link-list'}>
      <Heading 
        level="h4" 
        size="subsection"
        dataQa={`${dataQa || 'link-list'}--title`}
      >
        {title}
      </Heading>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.href} 
            context={context}
            dataQa={`link-list--${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkList;


