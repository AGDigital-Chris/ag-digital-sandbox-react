import React from 'react';
import type { BaseComponentProps } from '../../types';
import Link from './Link';

interface NavLinkProps extends BaseComponentProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  external = false,
  onClick,
  variant = 'desktop',
  className = '',
  dataQa
}) => {
  const context = variant === 'desktop' ? 'nav-desktop' : 'nav-mobile';
  
  return (
    <Link
      href={href}
      external={external}
      onClick={onClick}
      context={context}
      className={className}
      dataQa={dataQa || 'nav-link'}
    >
      {children}
    </Link>
  );
};

export default NavLink;
