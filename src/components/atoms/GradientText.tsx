import React from 'react';
import type { BaseComponentProps } from '../../types';

interface GradientTextProps extends BaseComponentProps {}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '', dataQa }) => {
  return (
    <span className={`text-gradient ${className}`} data-qa={dataQa || 'gradient-text'}>
      {children}
    </span>
  );
};

export default GradientText;


