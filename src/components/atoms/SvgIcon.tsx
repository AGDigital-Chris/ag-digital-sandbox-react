import React from 'react';
import type { BaseComponentProps } from '../../types';

type SvgSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ColorMode = 'original' | 'current' | 'white' | 'black';

interface SvgIconProps extends BaseComponentProps {
  src: string;
  alt: string;
  size?: SvgSize | number;
  colorMode?: ColorMode;
}

const SvgIcon: React.FC<SvgIconProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  colorMode = 'current',
  className = '',
  dataQa 
}) => {
  const getSizeClasses = (): string => {
    if (typeof size === 'number') {
      return `w-[${size}px] h-[${size}px]`;
    }
    
    const sizeMap: Record<SvgSize, string> = {
      xs: 'w-3 h-3',    // 12px
      sm: 'w-4 h-4',    // 16px  
      md: 'w-5 h-5',    // 20px
      lg: 'w-6 h-6',    // 24px
      xl: 'w-8 h-8',    // 32px
    };
    
    return sizeMap[size];
  };

  const getColorFilter = (): React.CSSProperties => {
    switch (colorMode) {
      case 'white':
        return { filter: 'brightness(0) invert(1)' };
      case 'black':
        return { filter: 'brightness(0)' };
      case 'current':
        return { filter: 'brightness(0) saturate(100%)' };
      case 'original':
      default:
        return {};
    }
  };

  return (
    <img 
      src={src}
      alt={alt}
      className={`${getSizeClasses()} ${className}`}
      style={getColorFilter()}
      data-qa={dataQa || 'svg-icon'}
    />
  );
};

export default SvgIcon;
