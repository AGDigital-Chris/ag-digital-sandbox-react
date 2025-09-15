import React from 'react';
import type { BaseComponentProps } from '../../types';
import SvgIcon from './SvgIcon';
import agLogoUrl from '../../assets/ag-ident-s.svg';

interface AnimatedBadgeProps extends BaseComponentProps {
  text: string;
  highlightText?: string;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  text,
  highlightText,
  className = '',
  dataQa,
}) => {
  const baseClasses = 'relative inline-flex items-center px-3 py-2 font-semibold text-base uppercase leading-none rounded-md overflow-hidden bg-brand-black text-brand-white border border-light';
  
  const classes = `${baseClasses} ${className}`;
  
  return (
    <div className={classes} data-qa={dataQa || 'animated-badge'}>
      {/* Metallic shimmer animation using design tokens */}
      <div 
        className="absolute top-[-50%] w-1/2 h-[200%] animate-shine shimmer-gradient"
        style={{
          transform: 'rotate(25deg)',
          left: '-100%',
          zIndex: 1
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {highlightText && (
          <SvgIcon 
            src={agLogoUrl}
            alt="AG Logo"
            size="lg"
            colorMode="white"
            className="mr-[0.35rem]"
          />
        )}
        <span>{text}</span>
      </span>
    </div>
  );
};

export default AnimatedBadge;
