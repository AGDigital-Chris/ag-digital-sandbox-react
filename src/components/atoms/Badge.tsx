import React from 'react';
import type { BaseComponentProps, BadgeVariant } from '../../types';

interface BadgeProps extends BaseComponentProps {
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  animated = false,
  dataQa,
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  
  const variantClasses = {
    primary: 'bg-brand-off-black text-brand-white',
    secondary: 'bg-brand-off-black text-brand-white', 
    success: 'bg-brand-blue text-brand-white',
    warning: 'bg-badge-bg text-badge-text',
    error: 'bg-brand-red text-brand-white',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-xs',
    lg: 'px-3 py-1 text-sm',
  };
  
  const animationClasses = animated ? 'animate-pulse' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClasses} ${className}`;
  
  return (
    <span className={classes} data-qa={dataQa || 'badge'}>
      {children}
    </span>
  );
};

export default Badge;
