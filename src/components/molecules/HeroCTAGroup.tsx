import React from 'react';
import Button from '../atoms/Button';
import type { BaseComponentProps } from '../../types';

interface HeroCTAGroupProps extends BaseComponentProps {}

const HeroCTAGroup: React.FC<HeroCTAGroupProps> = ({ className = '', dataQa }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`} data-qa={dataQa || 'hero-cta-group'}>
      <Button variant="primary" size="lg" href="#projects" dataQa="hero--cta-primary">
        View Projects
      </Button>
      <Button variant="outline" size="lg" href="https://github.com/AGDigital-Chris" external dataQa="hero--cta-secondary">
        View GitHub
      </Button>
    </div>
  );
};

export default HeroCTAGroup;


