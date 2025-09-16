import React from 'react';
import type { BaseComponentProps } from '../../types';

interface LinkProps extends BaseComponentProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
  context?: 'adaptive' | 'on-dark' | 'on-light' | 'nav-desktop' | 'nav-mobile';
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  external = false,
  onClick,
  context = 'adaptive',
  className = '',
  dataQa
}) => {
  const getContextClasses = () => {
    switch (context) {
      case 'on-dark':
        return 'text-on-dark-secondary hover:text-on-dark transition-colors';
      case 'on-light':
        return 'text-on-light-secondary hover:text-on-light transition-colors';
      case 'nav-desktop':
        return 'text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
      case 'nav-mobile':
        return 'text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200';
      case 'adaptive':
      default:
        return 'text-secondary hover:text-primary transition-colors';
    }
  };
  
  const baseClasses = context.startsWith('nav-') ? '' : 'block';
  const classes = `${baseClasses} ${getContextClasses()} ${className}`;
  
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={classes}
      onClick={onClick}
      data-qa={dataQa || 'link'}
    >
      {children}
    </a>
  );
};

export default Link;
