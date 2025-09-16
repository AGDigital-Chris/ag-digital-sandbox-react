import React from 'react';
import type { BaseComponentProps } from '../../types';

interface HeadingProps extends BaseComponentProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'hero' | 'section' | 'card' | 'subsection' | 'small';
  color?: 'primary' | 'secondary' | 'accent';
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  size,
  color = 'primary',
  className = '',
  dataQa
}) => {
  // Auto-determine size based on level if not specified
  const getSize = () => {
    if (size) return size;
    switch (level) {
      case 'h1': return 'hero';
      case 'h2': return 'section';
      case 'h3': return 'card';
      case 'h4': return 'subsection';
      case 'h5':
      case 'h6': return 'small';
      default: return 'card';
    }
  };

  const sizeClasses = {
    hero: 'text-4xl md:text-6xl font-bold leading-none',
    section: 'text-3xl md:text-4xl font-bold leading-none',
    card: 'text-xl font-semibold leading-tight',
    subsection: 'text-lg font-semibold',
    small: 'text-base font-medium',
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  };

  const classes = `${sizeClasses[getSize()]} ${colorClasses[color]} ${className}`;

  const renderHeading = () => {
    const props = {
      className: classes,
      'data-qa': dataQa || `heading-${level}`,
      children
    };

    switch (level) {
      case 'h1': return <h1 {...props} />;
      case 'h2': return <h2 {...props} />;
      case 'h3': return <h3 {...props} />;
      case 'h4': return <h4 {...props} />;
      case 'h5': return <h5 {...props} />;
      case 'h6': return <h6 {...props} />;
      default: return <h1 {...props} />;
    }
  };

  return renderHeading();
};

export default Heading;
