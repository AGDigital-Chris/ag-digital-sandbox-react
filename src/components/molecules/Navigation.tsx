import React, { useEffect, useState } from 'react';
import type { NavItem } from '../../types';
import DarkModeToggle from '../atoms/DarkModeToggle';
import BrandTitle from '../atoms/BrandTitle';
import NavLinks from './NavLinks';
import { useElementSize } from '../../hooks/useElementSize';

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { ref, size } = useElementSize<HTMLElement>();

  useEffect(() => {
    if (size.height) {
      document.documentElement.style.setProperty('--nav-height', `${size.height}px`);
    }
  }, [size.height]);

  return (
    <nav ref={ref} className={`bg-surface-primary dark:bg-brand-deep-black border-b border-light ${className}`} data-qa="navigation">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0" data-qa="navigation--brand">
            <BrandTitle title="AG Digital Sandbox" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks items={items} dataQa="navigation--links" />
            <DarkModeToggle />
          </div>
          
          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-3" data-qa="navigation--mobile-controls">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-brand-blue hover:bg-surface-secondary focus:outline-none focus:ring-0 focus:ring-inset focus:ring-brand-focus"
              data-qa="navigation--mobile-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden" data-qa="navigation--mobile-menu">
          <div className="bg-surface-primary dark:bg-brand-deep-black border-t border-primary">
            <NavLinks 
              items={items} 
              isMobile={true}
              onLinkClick={() => setIsOpen(false)}
              dataQa="navigation--mobile-links"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
