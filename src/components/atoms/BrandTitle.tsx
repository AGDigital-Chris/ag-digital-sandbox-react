import React from 'react';
import type { BaseComponentProps } from '../../types';

interface BrandTitleProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
}

const BrandTitle: React.FC<BrandTitleProps> = ({ title, subtitle, className = '', dataQa }) => {
  return (
    <div className={`space-y-0.5 ${className}`} data-qa={dataQa || 'brand-title'}>
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="text-sm text-secondary">{subtitle}</p>
      )}
    </div>
  );
};

export default BrandTitle;


