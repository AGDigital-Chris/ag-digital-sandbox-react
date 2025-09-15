import React from 'react';
import type { NavItem } from '../../types';

interface NavLinksProps {
  items: NavItem[];
  isMobile?: boolean;
  onLinkClick?: () => void;
  className?: string;
  dataQa?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ 
  items, 
  isMobile = false, 
  onLinkClick,
  className = '',
  dataQa 
}) => {
  const containerClasses = isMobile 
    ? `px-2 pt-2 pb-3 space-y-1 sm:px-3 ${className}`
    : `flex items-baseline space-x-4 ${className}`;

  const linkClasses = isMobile
    ? 'text-secondary hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
    : 'text-secondary hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';

  return (
    <div className={containerClasses} data-qa={dataQa || 'nav-links'}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className={linkClasses}
          onClick={onLinkClick}
          data-qa={`nav-link--${item.href.replace('#', '')}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
