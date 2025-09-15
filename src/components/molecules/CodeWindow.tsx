import React from 'react';
import type { BaseComponentProps } from '../../types';

interface CodeWindowProps extends BaseComponentProps {
  lines: React.ReactNode[];
}

const CodeWindow: React.FC<CodeWindowProps> = ({ lines, className = '', dataQa }) => {
  return (
    <div className={`bg-brand-black rounded-xl p-6 shadow-2xl border border-light ${className}`} data-qa={dataQa || 'code-window'}>
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-brand-red rounded-full"></div>
        <div className="w-3 h-3 bg-brand-badge-bg rounded-full"></div>
        <div className="w-3 h-3 bg-brand-green rounded-full"></div>
      </div>
      <div className="space-y-2 font-mono text-sm">
        {lines.map((line, idx) => (
          <div key={idx} className="text-brand-white">{line}</div>
        ))}
      </div>
    </div>
  );
};

export default CodeWindow;


