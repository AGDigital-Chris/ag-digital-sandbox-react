import React from 'react';
import type { BaseComponentProps, ButtonVariant, ButtonSize } from '../../types';

interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'primary-light' | 'primary-dark' | 'secondary-light' | 'secondary-dark' | 'outline-light' | 'outline-dark' | 'ghost-light' | 'ghost-dark' | 'outline' | 'ghost';
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  href,
  external = false,
  dataQa,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    // Auto-switching solid variants (legacy - still work with dark: classes)
    primary: 'bg-brand-black text-brand-white hover:bg-brand-off-black dark:bg-brand-off-white dark:text-brand-deep-black dark:hover:bg-brand-white focus:ring-focus-ring',
    secondary: 'bg-brand-off-black text-brand-white hover:bg-brand-black dark:bg-brand-light-grey dark:text-brand-deep-black dark:hover:bg-brand-off-white focus:ring-focus-ring',
    
    // Light mode specific solid variants
    'primary-light': 'bg-brand-black text-brand-white hover:bg-brand-off-black focus:ring-focus-ring',
    'secondary-light': 'bg-brand-off-black text-brand-white hover:bg-brand-black focus:ring-focus-ring',
    
    // Dark mode specific solid variants
    'primary-dark': 'bg-brand-off-white text-brand-deep-black hover:bg-brand-white focus:ring-focus-ring',
    'secondary-dark': 'bg-brand-light-grey text-brand-deep-black hover:bg-brand-off-white focus:ring-focus-ring',
    
    // Light mode specific outline variants
    'outline-light': 'bg-transparent border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white focus:ring-focus-ring',
    'ghost-light': 'bg-transparent text-brand-black hover:bg-brand-off-black hover:text-brand-white focus:ring-focus-ring',
    
    // Dark mode specific variants  
    'outline-dark': 'bg-transparent border-2 border-brand-off-white text-brand-off-white hover:bg-brand-off-white hover:text-brand-deep-black focus:ring-focus-ring',
    'ghost-dark': 'bg-transparent text-brand-off-white hover:bg-brand-off-white hover:text-brand-deep-black focus:ring-focus-ring',
    
    // Auto-switching variants (legacy - still work with dark: classes)
    outline: 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white dark:border-brand-off-white dark:text-brand-off-white dark:hover:bg-brand-off-white dark:hover:text-brand-black focus:ring-focus-ring',
    ghost: 'text-brand-black hover:bg-brand-off-black hover:text-brand-white dark:text-brand-off-white dark:hover:bg-brand-off-white dark:hover:text-brand-black focus:ring-focus-ring',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        data-qa={dataQa || 'button'}
      >
        {loading && <span className="mr-2">⏳</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      data-qa={dataQa || 'button'}
    >
      {loading && <span className="mr-2">⏳</span>}
      {children}
    </button>
  );
};

export default Button;
