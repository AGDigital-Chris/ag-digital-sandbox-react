import React from 'react';
import type { BaseComponentProps } from '../../types';

interface BulletCardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'subtle' | 'prominent';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const BulletCard: React.FC<BulletCardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
  dataQa,
}) => {
  const baseClasses = 'relative rounded-xl shadow-lg border border-light overflow-hidden';
  
  const elevationCardStyles = {
    // Elevation-based styling variants
    default: '',                                                    // Basic card with base styles
    elevated: 'shadow-lg',                                         // More shadow depth
    outlined: 'bg-transparent border-2 border-primary',           // Border-focused, no bg
    subtle: 'bg-surface-muted shadow-sm border-light',           // Soft, minimal presence  
    prominent: 'bg-surface-elevated shadow-xl border-2 border-dark-grey', // Bold, standout
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${elevationCardStyles[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} data-qa={dataQa || 'bullet-card'}>
      {children}
    </div>
  );
};

export default BulletCard;
