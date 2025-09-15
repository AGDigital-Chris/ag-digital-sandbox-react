import React from 'react';
import type { BaseComponentProps } from '../../types';

interface StatusDotProps extends BaseComponentProps {
  colorClass?: string; // Tailwind bg-* class
  size?: number; // in rem units
}

const StatusDot: React.FC<StatusDotProps> = ({ colorClass = 'bg-current', size = 0.5, className = '', dataQa }) => {
  const style = { width: `${size}rem`, height: `${size}rem` } as React.CSSProperties;
  return <span className={`${colorClass} rounded-full inline-block ${className}`} style={style} data-qa={dataQa || 'status-dot'} />;
};

export default StatusDot;


