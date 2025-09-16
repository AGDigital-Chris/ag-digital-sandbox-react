import React from 'react';
import type { NavItem } from '../../types';
import NavLink from '../atoms/NavLink';

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
    : `flex items-baseline gap-4 ${className}`;

  return (
    <div className={containerClasses} data-qa={dataQa || 'nav-links'}>
      {items.map((item, index) => (
        <NavLink
          key={index}
          href={item.href}
          external={item.external}
          onClick={onLinkClick}
          variant={isMobile ? 'mobile' : 'desktop'}
          dataQa={`nav-link--${item.href.replace('#', '')}`}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
